# Claude Code Instructions — TechDex

## What this repo is
Personal Pokédex for tools and technologies (repo: techdex). `entries.json` is the source of truth. `README.md` is auto-generated — never edit it directly. `entries.json` is the source of truth. `README.md` is auto-generated — never edit it directly.

## Adding a new entry
1. Open `entries.json`
2. Add a new object to the array following this exact schema:

```json
{
  "id": "unique-kebab-case-id",
  "name": "Tool Name",
  "category": "Tool | Language | Platform | Framework | Concept | Other",
  "domain": "Networking | DevOps | Cloud | Database | AI/ML | SRE/Observability | Security | Data Engineering | Frontend | Backend | Messaging | Storage | CI/CD | Identity | Other",
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
