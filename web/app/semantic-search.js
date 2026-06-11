/* TechDex — semantic search via transformers.js (Xenova/all-MiniLM-L6-v2)
   Lazy-loads the model from CDN on first use. Caches entry embeddings in
   localStorage keyed by entry count, so it auto-invalidates when catalog grows.
   ------------------------------------------------------------------ */
window.TechDexSemantic = (function () {
  const CDN = 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js';
  const MODEL = 'Xenova/all-MiniLM-L6-v2';
  const CACHE_KEY = 'techdex.emb.v1';

  let extractor = null;
  let entryEmbeddings = null;
  let initPromise = null;

  /* cosine similarity between two Float32Arrays */
  function cos(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8);
  }

  /* build a rich text blob for an entry */
  function toText(e) {
    return [e.name, e.domain, e.category, e.description, e.eli5,
      (e.use_cases || []).join('. '), (e.used_by || []).join(', ')]
      .filter(Boolean).join('. ');
  }

  /* lazy-load the feature-extraction pipeline */
  async function getExtractor() {
    if (extractor) return extractor;
    const { pipeline, env } = await import(CDN);
    env.allowLocalModels = false;
    extractor = await pipeline('feature-extraction', MODEL, { quantized: true });
    return extractor;
  }

  /* embed an array of strings, return Float32Array per string */
  async function embedBatch(texts) {
    const ext = await getExtractor();
    const out = await ext(texts, { pooling: 'mean', normalize: true });
    const dims = out.dims[out.dims.length - 1];
    return Array.from({ length: texts.length }, (_, i) =>
      Float32Array.from(out.data.subarray(i * dims, (i + 1) * dims))
    );
  }

  /* localStorage cache — keyed by entry count */
  function cacheLoad(ver) {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { v, d } = JSON.parse(raw);
      if (v !== ver) return null;
      return d.map(a => new Float32Array(a));
    } catch { return null; }
  }

  function cacheSave(ver, embs) {
    try {
      localStorage.setItem(CACHE_KEY,
        JSON.stringify({ v: ver, d: embs.map(e => Array.from(e)) }));
    } catch {} /* quota exceeded — skip silently */
  }

  /* init: load model + embed all entries (or load from cache).
     onStatus(msg) is called with progress strings. */
  async function init(entries, onStatus) {
    if (initPromise) return initPromise;
    initPromise = (async () => {
      const ver = entries.length;
      const cached = cacheLoad(ver);
      if (cached) { entryEmbeddings = cached; return; }
      onStatus('loading model (~25 MB, cached after first use)…');
      await getExtractor();
      const BATCH = 32;
      const all = [];
      for (let i = 0; i < entries.length; i += BATCH) {
        const chunk = entries.slice(i, i + BATCH).map(toText);
        all.push(...await embedBatch(chunk));
        onStatus(`embedding catalog… ${Math.min(i + BATCH, entries.length)}/${entries.length}`);
      }
      entryEmbeddings = all;
      cacheSave(ver, all);
    })();
    return initPromise;
  }

  /* search: returns top-K [{entry, score}] sorted by relevance */
  async function search(query, entries, topK = 12) {
    if (!entryEmbeddings) throw new Error('call init() first');
    const [qEmb] = await embedBatch([query]);
    return entries
      .map((e, i) => ({ entry: e, score: cos(qEmb, entryEmbeddings[i]) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }

  return { init, search };
})();
