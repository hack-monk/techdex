// TechDex — domain/category metadata, palette hues, helpers.
// Domains kept within a cool blue→indigo arc (hue 175–290) so the whole
// thing reads "techy & calm" even though each domain is differentiated.
window.TECHDEX_META = (function () {
  // meowsoot · night accents, brightened a touch for more pop on charcoal:
  // cyan · pink · lavender · peach · blue · yellow
  const DOMAINS = {
    "Networking":        { code: "NET", color: "#7fe3f2", blurb: "Proxies, DNS, load balancers, service mesh" },
    "DevOps":            { code: "OPS", color: "#f5b080", blurb: "IaC, orchestration, packaging" },
    "Cloud":             { code: "CLD", color: "#8ec7f5", blurb: "Cloud platforms & managed services" },
    "Database":          { code: "DB",  color: "#d2a4f5", blurb: "RDBMS, NoSQL, NewSQL, caches" },
    "AI/ML":             { code: "AI",  color: "#f7a6d3", blurb: "Models, inference, ML frameworks" },
    "SRE/Observability": { code: "OBS", color: "#f0dc74", blurb: "Monitoring, tracing, alerting" },
    "Security":          { code: "SEC", color: "#f7a6d3", blurb: "Auth, secrets, scanners, zero trust" },
    "Data Engineering":  { code: "DAT", color: "#8ec7f5", blurb: "Pipelines, streaming, warehouses" },
    "Frontend":          { code: "FE",  color: "#7fe3f2", blurb: "UI frameworks, bundlers, browsers" },
    "Backend":           { code: "BE",  color: "#d2a4f5", blurb: "App servers, RPC, API frameworks" },
    "Messaging":         { code: "MSG", color: "#f5b080", blurb: "Queues, event buses, pub/sub" },
    "Storage":           { code: "STO", color: "#f7a6d3", blurb: "Object, block, file storage" },
    "CI/CD":             { code: "CI",  color: "#f0dc74", blurb: "Build, test, deploy pipelines" },
    "Identity":          { code: "IDN", color: "#d2a4f5", blurb: "Auth providers, SSO, IAM" },
    "Other":             { code: "OTH", color: "#9a948c", blurb: "Anything else" },
  };

  // Display order (mirrors the repo's build.py)
  const DOMAIN_ORDER = ["Networking","DevOps","Cloud","Database","AI/ML","SRE/Observability",
    "Security","Data Engineering","Frontend","Backend","Messaging","Storage","CI/CD","Identity","Other"];

  const CATEGORIES = {
    "Tool":      "tool",
    "Language":  "lang",
    "Platform":  "platform",
    "Framework": "fwk",
    "Concept":   "concept",
    "Other":     "other",
  };

  function domainMeta(d) { return DOMAINS[d] || DOMAINS["Other"]; }
  function domainOrder(d) { const i = DOMAIN_ORDER.indexOf(d); return i < 0 ? 99 : i; }

  // Slug used for ide "filenames"
  function slug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function dexNum(n) { return String(n).padStart(3, "0"); }

  return { DOMAINS, DOMAIN_ORDER, CATEGORIES, domainMeta, domainOrder, slug, dexNum };
})();
