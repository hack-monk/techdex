/* ============================================================
   TechDex — application logic
   ============================================================ */
(function () {
  const M = window.TECHDEX_META;
  const ALL = (window.TECHDEX_ENTRIES || []).slice();

  // ---------- URL params (for embedded comparison views) ----------
  const params = new URLSearchParams(location.search);
  const lockDir = params.get("dir");          // tty | tui | ide
  const lockMode = params.get("mode");          // dark | light
  const embed   = params.has("embed");          // hide direction/mode chrome
  const startDomain = params.get("domain");

  // ---------- persisted prefs ----------
  const LS = "techdex.prefs.v1";
  const saved = (() => { try { return JSON.parse(localStorage.getItem(LS)) || {}; } catch { return {}; } })();
  const prefs = Object.assign({
    dir: "tty", mode: "dark", sort: "dex",
    fs: 14, accent: "cyan", scanlines: true, font: "JetBrains Mono",
  }, saved);
  prefs.dir = "tty";
  prefs.mode = "dark";
  function persist() { if (embed) return; try { localStorage.setItem(LS, JSON.stringify(prefs)); } catch {} }

  // ---------- runtime state ----------
  const state = { q: "", domain: startDomain || null, cats: new Set(), list: [], sel: -1, aiResults: null };

  // ---------- accent palettes (meowsoot night accents) ----------
  const ACCENTS = {
    cyan:     ["#7fe3f2", "#f7a6d3"],
    pink:     ["#f7a6d3", "#7fe3f2"],
    lavender: ["#d2a4f5", "#7fe3f2"],
    yellow:   ["#f0dc74", "#f7a6d3"],
  };

  // ---------- DOM refs ----------
  const $ = (s, r = document) => r.querySelector(s);
  const app = $(".app");
  const elGrid = $("#grid");
  const elDomains = $("#domains");
  const elCats = $("#cats");
  const elTitle = $("#mainTitle");
  const elSub = $("#mainSub");
  const elInput = $("#q");
  const elClear = $("#clear");
  const elStatus = $("#status");

  // ---------- apply visual prefs ----------
  function applyPrefs() {
    app.dataset.dir = prefs.dir;
    app.dataset.mode = prefs.mode;
    document.documentElement.style.setProperty("--fs", prefs.fs + "px");
    document.documentElement.style.setProperty("--mono", `"${prefs.font}", ui-monospace, Menlo, monospace`);
    const pal = ACCENTS[prefs.accent] || ACCENTS.cyan;
    const [a, a2] = pal;
    document.documentElement.style.setProperty("--accent", a);
    document.documentElement.style.setProperty("--accent-2", a2);
    document.documentElement.style.setProperty("--accent-glow", `color-mix(in oklch, ${a} 42%, transparent)`);
    document.documentElement.style.setProperty("--scan", prefs.scanlines
      ? "oklch(0.92 0.02 70 / 0.022)" : "transparent");
    // reflect in chrome controls
    document.querySelectorAll("[data-setsort]").forEach(b => b.classList.toggle("on", b.dataset.setsort === prefs.sort));
  }

  // ---------- filtering ----------
  function matches(e) {
    if (state.domain && e.domain !== state.domain) return false;
    if (state.cats.size && !state.cats.has(e.category)) return false;
    const q = state.q.trim().toLowerCase();
    if (!q) return true;
    const hay = [e.name, e.eli5, e.description, e.domain, e.category,
      (e.use_cases || []).join(" "), (e.used_by || []).join(" ")].join(" ").toLowerCase();
    return q.split(/\s+/).every(t => hay.includes(t));
  }
  function compute() {
    let l = ALL.filter(matches);
    if (prefs.sort === "name") l.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    else if (prefs.sort === "domain") l.sort((a, b) => (M.domainOrder(a.domain) - M.domainOrder(b.domain)) || a.dex - b.dex);
    else l.sort((a, b) => a.dex - b.dex);
    state.list = l;
  }

  // ---------- renderers ----------
  function badge(domain) {
    const m = M.domainMeta(domain);
    return `<span class="badge" style="--dc:${m.color}">${m.code}</span>`;
  }
  function cardHTML(e, relevance) {
    const m = M.domainMeta(e.domain);
    const cat = M.CATEGORIES[e.category] || e.category.toLowerCase();
    const uses = (e.used_by || []).slice(0, 3).join(", ");
    const more = (e.used_by || []).length > 3 ? ` +${e.used_by.length - 3}` : "";
    const relBar = relevance != null
      ? `<div class="rel-bar" style="--rel:${relevance}%" title="relevance: ${relevance}%"></div>` : "";
    return `<div class="card" data-dex="${e.dex}" style="--dc:${m.color}" tabindex="0" role="button">
      ${relBar}
      <div class="cmain">
        <div class="row1">
          <span class="nm">${esc(e.name)}</span>
          ${badge(e.domain)}
          <span class="cat">${cat}</span>
        </div>
        <p class="eli5">${esc(e.eli5 || "")}</p>
        <p class="desc">${esc(e.description || "")}</p>
        <div class="meta"><span class="uses">${uses ? "used by " + esc(uses) + more : ""}</span></div>
      </div>
    </div>`;
  }
  function renderGrid() {
    const total = ALL.length;

    // ---------- AI semantic results path ----------
    if (state.aiResults) {
      const results = state.aiResults;
      const maxScore = results[0]?.score || 1;
      elGrid.innerHTML = results.length
        ? results.map(({ entry: e, score }) =>
            cardHTML(e, Math.round((score / maxScore) * 100))
          ).join("")
        : `<div class="empty">no semantic matches for <b>${esc(state.q)}</b><br><span style="font-size:.85em">try rephrasing your description</span></div>`;
      elTitle.innerHTML = `✦ <span class="accent">semantic</span> results`;
      elSub.innerHTML = `<b>${results.length}</b> matches · &ldquo;${esc(state.q)}&rdquo;`;
      renderStatus(results.length, total);
      return;
    }

    // ---------- normal keyword path ----------
    if (!state.list.length) {
      elGrid.innerHTML = `<div class="empty">no entries match <b>${esc(state.q) || "this filter"}</b><br><span style="font-size:.85em">try a different term or clear filters</span></div>`;
    } else {
      elGrid.innerHTML = state.list.map(e => cardHTML(e)).join("");
    }
    const shown = state.list.length;
    elTitle.innerHTML = state.domain
      ? `<span class="accent">${M.domainMeta(state.domain).code}</span> ${esc(state.domain)}`
      : `all <span class="accent">entries</span>`;
    const filt = [];
    if (state.q) filt.push(`grep "${esc(state.q)}"`);
    if (state.domain) filt.push(esc(state.domain));
    if (state.cats.size) filt.push([...state.cats].join("|"));
    elSub.innerHTML = `<b>${shown}</b> / ${total}${filt.length ? " · " + filt.join(" · ") : ""}`;
    renderStatus(shown, total);
  }
  function renderStatus(shown, total) {
    const dirName = { tty: "zsh", tui: "techdex-tui", ide: "techdex.code" }[prefs.dir];
    elStatus.innerHTML = `
      <span class="seg accent">${prefs.dir.toUpperCase()}</span>
      <span class="seg">${dirName}</span>
      <span class="seg">${shown} of ${total} entries</span>
      <span class="seg">${M.DOMAIN_ORDER.filter(d => ALL.some(e => e.domain === d)).length} domains</span>
      <span class="spacer seg" style="border-right:none"></span>
      <span class="seg key"><b>/</b> search</span>
      <span class="seg key"><b>↵</b> open</span>
      <span class="seg key"><b>esc</b> close</span>
      <span class="seg"><span class="blink">▍</span></span>`;
  }
  function renderSidebar() {
    const counts = {};
    ALL.forEach(e => counts[e.domain] = (counts[e.domain] || 0) + 1);
    const domains = M.DOMAIN_ORDER.filter(d => counts[d]);
    elDomains.innerHTML =
      `<div class="dom ${!state.domain ? "on" : ""}" data-domain="">
         <span class="dot" style="--dc:var(--fg-soft)"></span>
         <span class="dn">all domains</span><span class="dc">${ALL.length}</span>
       </div>` +
      domains.map(d => {
        const m = M.domainMeta(d);
        return `<div class="dom ${state.domain === d ? "on" : ""}" data-domain="${esc(d)}" title="${esc(m.blurb)}">
          <span class="dot" style="--dc:${m.color}"></span>
          <span class="dn">${esc(d)}</span><span class="dc">${counts[d]}</span>
        </div>`;
      }).join("");
    const cats = [...new Set(ALL.map(e => e.category))].sort();
    elCats.innerHTML = cats.map(c =>
      `<span class="chip ${state.cats.has(c) ? "on" : ""}" data-cat="${esc(c)}">${(M.CATEGORIES[c] || c).toLowerCase()}</span>`).join("");
  }

  // ---------- detail drawer ----------
  const scrim = $("#scrim"), drawer = $("#drawer"), dbody = $("#drawerBody"), dpath = $("#drawerPath");
  function openDetail(dex) {
    const idx = state.list.findIndex(e => e.dex === dex);
    if (idx < 0) return;
    state.sel = idx;
    renderDetail();
    scrim.classList.add("open"); drawer.classList.add("open");
  }
  function renderDetail() {
    const e = state.list[state.sel];
    if (!e) return;
    const m = M.domainMeta(e.domain);
    drawer.style.setProperty("--dc", m.color);
    dpath.innerHTML = `<span class="accent">${M.domainMeta(e.domain).code.toLowerCase()}</span>/${M.slug(e.name)}.md`;
    const uc = (e.use_cases || []).map(u => `<li>${esc(u)}</li>`).join("");
    const co = (e.used_by || []).map(c => `<span>${esc(c)}</span>`).join("");
    dbody.innerHTML = `
      <div class="d-dex">added ${esc(e.added || "")}</div>
      <h2 class="d-name">${esc(e.name)}</h2>
      <div class="d-badges">${badge(e.domain)}<span class="cat">${(M.CATEGORIES[e.category] || e.category).toLowerCase()}</span><span class="cat">${esc(e.domain)}</span></div>
      <div class="d-eli5"><span class="lbl">ELI5</span>${esc(e.eli5 || "")}</div>
      <div class="d-sec"><div class="h">what it is</div><p class="d-desc">${esc(e.description || "")}</p></div>
      ${uc ? `<div class="d-sec"><div class="h">use cases</div><ul class="d-uc">${uc}</ul></div>` : ""}
      ${co ? `<div class="d-sec"><div class="h">used by</div><div class="d-co">${co}</div></div>` : ""}
      <div class="d-sec"><div class="h">references</div><div class="d-links">
        ${e.docs ? `<a class="d-link primary" href="${esc(e.docs)}" target="_blank" rel="noopener">docs <span class="ar">↗</span></a>` : ""}
        ${e.tutorial ? `<a class="d-link" href="${esc(e.tutorial)}" target="_blank" rel="noopener">tutorial <span class="ar">↗</span></a>` : ""}
      </div></div>
      <div class="d-nav">
        <button id="dPrev" ${state.sel <= 0 ? "disabled" : ""}>← prev</button>
        <button id="dNext" ${state.sel >= state.list.length - 1 ? "disabled" : ""}>next →</button>
      </div>`;
    $("#dPrev").onclick = () => { if (state.sel > 0) { state.sel--; renderDetail(); } };
    $("#dNext").onclick = () => { if (state.sel < state.list.length - 1) { state.sel++; renderDetail(); } };
  }
  function closeDetail() { scrim.classList.remove("open"); drawer.classList.remove("open"); state.sel = -1; }

  // ---------- events ----------
  function full() { compute(); renderSidebar(); renderGrid(); }

  elInput.addEventListener("input", () => {
    state.q = elInput.value;
    state.aiResults = null;   // typing resets AI results → back to keyword mode
    elClear.style.display = state.q ? "" : "none";
    compute(); renderGrid();
  });
  elClear.addEventListener("click", () => {
    elInput.value = ""; state.q = ""; state.aiResults = null;
    elClear.style.display = "none"; compute(); renderGrid(); elInput.focus();
  });

  elDomains.addEventListener("click", ev => {
    const d = ev.target.closest(".dom"); if (!d) return;
    state.domain = d.dataset.domain || null;
    full();
  });
  elCats.addEventListener("click", ev => {
    const c = ev.target.closest(".chip"); if (!c) return;
    const v = c.dataset.cat;
    state.cats.has(v) ? state.cats.delete(v) : state.cats.add(v);
    full();
  });
  elGrid.addEventListener("click", ev => {
    const c = ev.target.closest(".card"); if (!c) return;
    openDetail(+c.dataset.dex);
  });
  elGrid.addEventListener("keydown", ev => {
    if (ev.key === "Enter") { const c = ev.target.closest(".card"); if (c) openDetail(+c.dataset.dex); }
  });
  scrim.addEventListener("click", closeDetail);
  $("#drawerClose").addEventListener("click", closeDetail);

  // ---------- AI semantic search ----------
  const elAiBtn = document.getElementById("aiBtn");
  let aiSearching = false;

  async function runAiSearch() {
    const q = state.q.trim();
    if (!q) { elInput.focus(); return; }
    if (aiSearching) return;
    aiSearching = true;
    elAiBtn.classList.add("loading");
    elAiBtn.disabled = true;
    try {
      await window.TechDexSemantic.init(ALL, msg => { elSub.textContent = msg; });
      const results = await window.TechDexSemantic.search(q, ALL);
      state.aiResults = results;
      renderGrid();
    } catch (err) {
      elSub.textContent = "AI search error: " + err.message;
    } finally {
      aiSearching = false;
      elAiBtn.classList.remove("loading");
      elAiBtn.disabled = false;
    }
  }

  elAiBtn.addEventListener("click", runAiSearch);
  elInput.addEventListener("keydown", ev => {
    if ((ev.ctrlKey || ev.metaKey) && ev.key === "Enter") { ev.preventDefault(); runAiSearch(); }
  });

  // chrome controls
  document.querySelectorAll("[data-setsort]").forEach(b => b.addEventListener("click", () => {
    prefs.sort = b.dataset.setsort; applyPrefs(); compute(); renderGrid(); persist();
  }));
  // keyboard
  document.addEventListener("keydown", ev => {
    if (ev.key === "/" && document.activeElement !== elInput) { ev.preventDefault(); elInput.focus(); elInput.select(); }
    else if (ev.key === "Escape") {
      if (drawer.classList.contains("open")) closeDetail();
      else if (state.q || state.domain || state.cats.size || state.aiResults) { state.q = ""; elInput.value = ""; state.domain = null; state.cats.clear(); state.aiResults = null; elClear.style.display = "none"; full(); }
      else elInput.blur();
    }
    else if (drawer.classList.contains("open")) {
      if (ev.key === "ArrowLeft" && state.sel > 0) { state.sel--; renderDetail(); }
      else if (ev.key === "ArrowRight" && state.sel < state.list.length - 1) { state.sel++; renderDetail(); }
    }
  });

  // ---------- embed mode: strip chrome that doesn't belong in a tiny frame ----------
  if (embed) document.documentElement.classList.add("embed");

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  // ---------- public API for the Tweaks panel ----------
  window.TechDexAPI = {
    get prefs() { return Object.assign({}, prefs); },
    set(key, val) { prefs[key] = val; applyPrefs(); if (key === "sort") { compute(); } renderGrid(); persist(); },
    lockDir,
  };

  // ---------- boot ----------
  applyPrefs();
  full();
  elClear.style.display = "none";
  if (!embed) setTimeout(() => elInput.focus(), 60);
})();
