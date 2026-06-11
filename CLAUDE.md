# Claude Code Instructions — TechDex

## What this repo is
Catalog of tools and technologies (repo: techdex). `entries.json` is the source of truth. `README.md` and `web/data/entries.js` are auto-generated — never edit them directly.

## Adding a new entry
1. Open `entries.json`
2. Add a new object to the array following this exact schema:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Tool Name",
  "category": "Tool | Language | Platform | Framework | Concept | Other",
  "domain": "Networking | DevOps | Cloud | Database | AI/ML | SRE/Observability | Security | Data Engineering | Frontend | Backend | Messaging | Storage | CI/CD | Identity | Other",
  "eli5": "One sentence explaining the tool like the reader is 5 years old. Use a concrete analogy.",
  "description": "One or two sentence description of what it is and why it matters.",
  "use_cases": [
    "Use case 1",
    "Use case 2"
  ],
  "used_by": ["Company A", "Company B"],
  "docs": "https://...",
  "tutorial": "https://...",
  "added": "YYYY-MM-DD"
}
```

3. Run `python3 scripts/build.py` to regenerate README.md
4. Commit both files: `git add entries.json README.md && git commit -m "add: <tool name>"`
5. Push: `git push`

## Updating an existing entry
Find the entry by `id` in `entries.json`, edit the fields, then re-run `python3 scripts/build.py` and commit.

## Valid categories
- **Tool** — standalone tools (Envoy, Terraform, Helm)
- **Language** — programming/query languages (Go, Rust, SQL)
- **Platform** — cloud/infra platforms (AWS, GCP, Kubernetes)
- **Framework** — application frameworks (FastAPI, React, Spring)
- **Concept** — architectural/design concepts (Service Mesh, CQRS, Zero Trust)
- **Other** — anything that doesn't fit above

## Valid domains
README groups entries by domain. Pick the closest match:
- **Networking** — proxies, DNS, load balancers, service mesh (Envoy, Nginx, CoreDNS)
- **DevOps** — IaC, orchestration, packaging (Terraform, Helm, Ansible)
- **Cloud** — cloud platforms and managed services (AWS, GCP, Azure)
- **Database** — RDBMS, NoSQL, NewSQL, caches (Postgres, Redis, Cassandra)
- **AI/ML** — models, inference, ML frameworks (PyTorch, LangChain, Ollama)
- **SRE/Observability** — monitoring, tracing, alerting (Prometheus, Grafana, Jaeger)
- **Security** — auth, secrets, scanners, zero trust (Vault, Falco, OPA)
- **Data Engineering** — pipelines, streaming, warehouses (Kafka, Spark, dbt)
- **Frontend** — UI frameworks, bundlers, browsers (React, Vite, Tailwind)
- **Backend** — app servers, RPC, API frameworks (FastAPI, gRPC, Express)
- **Messaging** — queues, event buses, pub/sub (RabbitMQ, NATS, SQS)
- **Storage** — object, block, file storage (S3, Ceph, MinIO)
- **CI/CD** — build, test, deploy pipelines (GitHub Actions, ArgoCD, Tekton)
- **Identity** — auth providers, SSO, IAM (Keycloak, OIDC, SPIFFE)
- **Other** — doesn't fit anywhere above

## Web app (`web/`)

A browsable static site for the dex lives in `web/`. Zero dependencies — plain HTML/CSS/JS
(meowsoot · night dark theme). No npm, no bundler.

- **`web/data/entries.js` is a GENERATED artifact** (like `README.md`). Never edit it by hand.
  It is regenerated from `entries.json` by `scripts/build.py`.
- After adding or editing an entry: run `python3 scripts/build.py` — it regenerates **both**
  `README.md` and `web/data/entries.js`. Commit all changed files.
- Editable source files: `web/index.html`, `web/app/*.js`, `web/app/*.css`.
- **Theme / colors:** palette tokens are at the top of `web/app/styles.css`; per-domain accent
  colors are in `web/app/meta.js` (`DOMAINS[...].color`).
- **Preview:** `cd web && python3 -m http.server 8000` → http://localhost:8000
  (a local server is needed because the Tweaks panel loads `.jsx` through Babel).
- When you add a brand-new `domain` to `entries.json`, also add it to `web/app/meta.js`
  (`DOMAINS` with a `color`, and `DOMAIN_ORDER` for sort position) or it falls back to a neutral color.

---
name: karpathy-guidelines
description: Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria.
license: MIT
---

# Karpathy Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on LLM coding pitfalls.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.