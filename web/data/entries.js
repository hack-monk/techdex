// Auto-generated from entries.json by scripts/build.py — do not edit.
window.TECHDEX_ENTRIES = [
 {
  "id": "aws-vpc",
  "name": "AWS VPC",
  "category": "Platform",
  "domain": "Networking",
  "description": "AWS Virtual Private Cloud — logically isolated network within AWS where you define IP ranges, subnets, routing, and firewall rules. Every AWS workload lives inside a VPC. Foundation of AWS network security.",
  "use_cases": [
   "Isolating production, staging, and dev environments in separate VPCs",
   "Public/private subnet design: ALB in public, app/DB in private",
   "VPC peering and Transit Gateway for multi-VPC / multi-account networking",
   "VPC Endpoints for private S3/DynamoDB access without internet",
   "Security Groups and NACLs as layered firewall controls"
  ],
  "used_by": [
   "All AWS customers"
  ],
  "docs": "https://docs.aws.amazon.com/vpc/",
  "tutorial": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-getting-started.html",
  "added": "2026-06-08",
  "eli5": "Your own private neighborhood inside Amazon's giant city.",
  "dex": 1
 },
 {
  "id": "caddy",
  "name": "Caddy",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "Caddy is like a web server that automatically gets its own security certificate and sets it up for you — no manual HTTPS configuration needed.",
  "description": "Modern web server with automatic HTTPS via Let's Encrypt. Written in Go, zero config TLS, with a simple Caddyfile DSL and a JSON API for dynamic configuration.",
  "use_cases": [
   "Automatic TLS for local and production services",
   "Reverse proxy with zero-config HTTPS",
   "Static file serving and PHP applications",
   "API gateway with dynamic config via Admin API"
  ],
  "used_by": [
   "Tailscale",
   "Replicate",
   "Acme Corp deployments"
  ],
  "docs": "https://caddyserver.com/docs/",
  "tutorial": "https://caddyserver.com/docs/getting-started",
  "added": "2026-06-12",
  "dex": 2
 },
 {
  "id": "cilium",
  "name": "Cilium",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "Cilium is like a super-smart traffic cop for your Kubernetes cluster that understands what apps are talking about, not just where packets are going.",
  "description": "eBPF-based networking, observability, and security for Kubernetes. Provides high-performance networking with deep visibility into application traffic at the kernel level.",
  "use_cases": [
   "Kubernetes CNI plugin with eBPF dataplane",
   "Network policy enforcement at L3/L4/L7",
   "Service mesh replacement (Cilium Mesh)",
   "Hubble-based flow observability"
  ],
  "used_by": [
   "Google",
   "AWS",
   "Adobe",
   "GitLab",
   "Bell Canada"
  ],
  "docs": "https://docs.cilium.io/",
  "tutorial": "https://docs.cilium.io/en/stable/gettingstarted/",
  "added": "2026-06-11",
  "dex": 3
 },
 {
  "id": "cloudflare",
  "name": "Cloudflare",
  "category": "Platform",
  "domain": "Networking",
  "eli5": "Cloudflare is like a bodyguard and speed booster for your website — it blocks attacks and makes pages load faster by storing copies closer to users.",
  "description": "Global CDN, DDoS protection, DNS, and edge compute platform. Sits in front of web properties to improve performance, security, and availability at scale.",
  "use_cases": [
   "DDoS mitigation and WAF",
   "Global CDN and static asset caching",
   "Authoritative DNS with anycast routing",
   "Edge compute with Cloudflare Workers"
  ],
  "used_by": [
   "Discord",
   "Shopify",
   "DoorDash",
   "Canva"
  ],
  "docs": "https://developers.cloudflare.com/",
  "tutorial": "https://developers.cloudflare.com/fundamentals/get-started/",
  "added": "2026-06-12",
  "dex": 4
 },
 {
  "id": "coredns",
  "name": "CoreDNS",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "CoreDNS is like the phone book inside your Kubernetes cluster — it translates service names into IP addresses so apps can find each other.",
  "description": "Flexible, plugin-based DNS server written in Go. Default DNS server for Kubernetes since v1.13, handling service discovery and internal name resolution.",
  "use_cases": [
   "Kubernetes cluster-internal DNS",
   "Service discovery in microservices",
   "Custom DNS rewrites and forwarding",
   "Split-horizon DNS for on-prem/cloud hybrid"
  ],
  "used_by": [
   "Kubernetes (default)",
   "Red Hat OpenShift",
   "Rancher"
  ],
  "docs": "https://coredns.io/manual/toc/",
  "tutorial": "https://coredns.io/2017/05/08/custom-dns-entries-for-kubernetes/",
  "added": "2026-06-12",
  "dex": 5
 },
 {
  "id": "envoy-proxy",
  "name": "Envoy Proxy",
  "category": "Tool",
  "domain": "Networking",
  "description": "Open-source, high-performance L7 proxy and communication bus built for cloud-native microservices architectures. Originally created at Lyft, now a CNCF graduated project. Runs as a sidecar alongside applications, making network concerns (routing, load balancing, observability, security) transparent to application code.",
  "use_cases": [
   "Service mesh data plane (sidecar proxy — backbone of Istio, AWS App Mesh, Consul Connect)",
   "Edge / ingress gateway for Kubernetes clusters",
   "L7 load balancing with header/path-aware routing",
   "Canary deployments and A/B traffic splitting",
   "mTLS between services, TLS termination at edge",
   "Distributed tracing and observability (Prometheus, Jaeger, Zipkin)",
   "Rate limiting and circuit breaking"
  ],
  "used_by": [
   "Lyft",
   "Google",
   "Apple",
   "Airbnb",
   "Pinterest",
   "Booking.com",
   "Dropbox",
   "Microsoft",
   "Netflix",
   "Uber"
  ],
  "docs": "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy",
  "tutorial": "https://www.envoyproxy.io/docs/envoy/latest/start/quick-start/",
  "added": "2026-06-08",
  "eli5": "A traffic cop between your apps that decides who talks to who and how.",
  "dex": 6
 },
 {
  "id": "haproxy",
  "name": "HAProxy",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "HAProxy is like a traffic cop at a busy intersection who splits cars evenly across many roads so no single road gets jammed.",
  "description": "Battle-tested open-source TCP/HTTP load balancer and proxy. Industry standard for high-availability setups, used in front of databases, APIs, and web clusters.",
  "use_cases": [
   "L4/L7 load balancing for APIs and databases",
   "SSL termination and health-check-based failover",
   "Rate limiting and ACL-based routing",
   "High-availability database clusters (MySQL, PostgreSQL)"
  ],
  "used_by": [
   "GitHub",
   "Reddit",
   "Airbnb",
   "Stack Overflow"
  ],
  "docs": "https://docs.haproxy.org/",
  "tutorial": "https://www.haproxy.com/documentation/haproxy-configuration-tutorials/",
  "added": "2026-06-12",
  "dex": 7
 },
 {
  "id": "hashicorp-consul",
  "name": "HashiCorp Consul",
  "category": "Tool",
  "domain": "Networking",
  "description": "Service mesh and service discovery platform. Provides a distributed key-value store, health checking, and connect (mTLS service mesh). Works across VMs and containers, on-prem and cloud.",
  "use_cases": [
   "Service discovery: services register themselves, clients query DNS/HTTP API",
   "Health checking and automatic removal of unhealthy instances",
   "Consul Connect: mTLS service mesh for non-Kubernetes environments",
   "Distributed KV store for configuration and feature flags",
   "Multi-datacenter federation with WAN gossip"
  ],
  "used_by": [
   "Stripe",
   "SAP",
   "Citrix",
   "Barclays",
   "Booz Allen Hamilton"
  ],
  "docs": "https://developer.hashicorp.com/consul/docs",
  "tutorial": "https://developer.hashicorp.com/consul/tutorials/get-started-vms",
  "added": "2026-06-08",
  "eli5": "A phone book that tells your apps where their friends (other services) live today.",
  "dex": 8
 },
 {
  "id": "istio",
  "name": "Istio",
  "category": "Tool",
  "domain": "Networking",
  "description": "Open-source service mesh that layers traffic management, security, and observability on top of Kubernetes without changing application code. Uses Envoy as its sidecar data plane. CNCF graduated project.",
  "use_cases": [
   "Mutual TLS (mTLS) between all services with zero code changes",
   "Fine-grained traffic control: canary releases, A/B testing, fault injection",
   "Distributed tracing and metrics via Envoy sidecar telemetry",
   "Authorization policies: service-to-service and end-user RBAC",
   "Multi-cluster and multi-cloud service mesh federation"
  ],
  "used_by": [
   "Google",
   "Salesforce",
   "T-Mobile",
   "Airbus",
   "Autodesk"
  ],
  "docs": "https://istio.io/latest/docs/",
  "tutorial": "https://istio.io/latest/docs/setup/getting-started/",
  "added": "2026-06-08",
  "eli5": "A security guard between every pair of apps so they talk safely without trusting strangers.",
  "dex": 9
 },
 {
  "id": "linkerd",
  "name": "Linkerd",
  "category": "Tool",
  "domain": "Networking",
  "description": "Ultralight, security-first service mesh for Kubernetes. Uses a Rust-based micro-proxy (linkerd2-proxy) instead of Envoy — lower latency and resource overhead than Istio. CNCF graduated project. Zero-config mTLS by default.",
  "use_cases": [
   "Automatic mTLS for all pod-to-pod traffic with zero config changes",
   "Golden metrics (latency, success rate, RPS) per route via Prometheus",
   "Traffic splitting for canary deployments with SMI TrafficSplit",
   "Retries and timeouts at the mesh level without touching app code",
   "Multi-cluster failover and load balancing across clusters"
  ],
  "used_by": [
   "Buoyant",
   "Walmart",
   "H-E-B",
   "Elkjøp",
   "Entain"
  ],
  "docs": "https://linkerd.io/docs/",
  "tutorial": "https://linkerd.io/2.15/getting-started/",
  "added": "2026-06-08",
  "eli5": "A lightweight traffic cop between apps that also checks everyone's ID.",
  "dex": 10
 },
 {
  "id": "netbird",
  "name": "Netbird",
  "category": "Platform",
  "domain": "Networking",
  "eli5": "Netbird is like a magical tunnel that lets all your computers and phones talk to each other securely, no matter where they are in the world, without needing complicated setup.",
  "description": "Netbird is an open-source VPN and network management platform that uses WireGuard under the hood to create secure mesh networks between devices. It simplifies secure remote access and private networking without the complexity of traditional VPN infrastructure.",
  "use_cases": [
   "Zero-trust network access for remote development teams",
   "Secure mesh networking between microservices across cloud regions",
   "Private network connectivity for distributed teams without VPN appliances",
   "Device-to-device secure communication in IoT deployments"
  ],
  "used_by": [
   "GitLab",
   "Elastic",
   "Teleport"
  ],
  "docs": "https://docs.netbird.io/",
  "tutorial": "https://docs.netbird.io/getting-started",
  "added": "2026-06-22",
  "dex": 11
 },
 {
  "id": "nginx",
  "name": "Nginx",
  "category": "Tool",
  "domain": "Networking",
  "description": "High-performance web server, reverse proxy, and load balancer. Event-driven, async architecture handles massive concurrent connections with minimal memory. Powers ~34% of the web. Also used as API gateway and static file server.",
  "use_cases": [
   "Reverse proxy and load balancer in front of app servers",
   "TLS termination and HTTP/2 / HTTP/3 offloading",
   "Static asset serving with efficient sendfile() kernel bypass",
   "Ingress controller for Kubernetes (ingress-nginx)",
   "Rate limiting, basic auth, and IP allowlisting at the edge",
   "API gateway with upstream routing and caching"
  ],
  "used_by": [
   "Dropbox",
   "Netflix",
   "WordPress.com",
   "GitHub",
   "Cloudflare"
  ],
  "docs": "https://nginx.org/en/docs/",
  "tutorial": "https://nginx.org/en/docs/beginners_guide.html",
  "added": "2026-06-08",
  "eli5": "A hotel receptionist that greets visitors and sends them to the right room.",
  "dex": 12
 },
 {
  "id": "nginx-ingress",
  "name": "Nginx Ingress Controller",
  "category": "Tool",
  "domain": "Networking",
  "description": "Kubernetes-native ingress controller built on Nginx. Translates Kubernetes Ingress resources into Nginx config, routing external HTTP/S traffic to in-cluster services. Most widely deployed Kubernetes ingress solution.",
  "use_cases": [
   "HTTP/S routing to Kubernetes services by host and path rules",
   "TLS termination with cert-manager for automatic Let's Encrypt certificates",
   "Rate limiting, IP allowlisting, and basic auth via annotations",
   "Canary deployments by splitting traffic across two Ingress resources",
   "WebSocket and gRPC passthrough for long-lived connections"
  ],
  "used_by": [
   "Widely used across Kubernetes deployments in enterprises and startups"
  ],
  "docs": "https://kubernetes.github.io/ingress-nginx/",
  "tutorial": "https://kubernetes.github.io/ingress-nginx/deploy/",
  "added": "2026-06-08",
  "eli5": "The front door of your Kubernetes building that sends visitors to the right apartment.",
  "dex": 13
 },
 {
  "id": "openbsd-pf",
  "name": "OpenBSD PF Firewall",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "PF is like a security guard at a gate who can look at every package passing through and decide whether to let it in or throw it back out.",
  "description": "PF (Packet Filter) is a stateful firewall and network address translator included in OpenBSD, known for its clarity, expressiveness, and minimal memory footprint. It's widely deployed in high-performance networking environments and has been ported to other systems like FreeBSD and pfSense.",
  "use_cases": [
   "Protecting servers and networks at the perimeter firewall level",
   "Implementing advanced routing and traffic shaping",
   "Building ultra-reliable edge gateways for cloud infrastructure",
   "Creating transparent proxies and load balancing layers"
  ],
  "used_by": [
   "Cloudflare",
   "OpenBSD Foundation",
   "pfSense Project",
   "Netflix"
  ],
  "docs": "https://man.openbsd.org/pf",
  "tutorial": "https://www.openbsd.org/faq/pf/",
  "added": "2026-06-29",
  "dex": 14
 },
 {
  "id": "pion",
  "name": "Pion WebRTC",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "It's like a direct phone line between two people that works through the internet without needing a central operator, so you can chat with really low delay.",
  "description": "Pion is a pure Go implementation of the WebRTC protocol that enables peer-to-peer audio, video, and data communication directly in browsers and applications. It provides a simple API for building real-time communication systems without external dependencies.",
  "use_cases": [
   "Video conferencing and screen sharing applications",
   "Live streaming with ultra-low latency",
   "Real-time multiplayer gaming",
   "Peer-to-peer data transfer and collaboration tools"
  ],
  "used_by": [
   "Jitsi",
   "LiveKit",
   "Loom"
  ],
  "docs": "https://pion.ly/",
  "tutorial": "https://github.com/pion/webrtc/wiki/Getting-Started",
  "added": "2026-06-28",
  "dex": 15
 },
 {
  "id": "tailscale",
  "name": "Tailscale",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "Tailscale is like a magic tunnel that connects all your devices and servers into one private network, no matter where they are in the world.",
  "description": "Zero-config VPN built on WireGuard with a control plane. Devices join a mesh network automatically via SSO, enabling secure access to private services without firewall rules.",
  "use_cases": [
   "Secure remote access to internal services",
   "Zero-config VPN for distributed teams",
   "Site-to-site networking without VPN appliances",
   "Kubernetes cluster access via Tailscale operator"
  ],
  "used_by": [
   "GitHub",
   "Mullvad",
   "Notion",
   "ReadMe"
  ],
  "docs": "https://tailscale.com/kb/",
  "tutorial": "https://tailscale.com/kb/1017/install/",
  "added": "2026-06-14",
  "dex": 16
 },
 {
  "id": "traefik",
  "name": "Traefik",
  "category": "Tool",
  "domain": "Networking",
  "eli5": "Traefik is like a hotel concierge that automatically knows which room (service) every guest (request) should go to, even as rooms change.",
  "description": "Cloud-native reverse proxy and load balancer that auto-discovers service configuration from Docker, Kubernetes, and other orchestrators with zero manual config.",
  "use_cases": [
   "Kubernetes ingress controller",
   "Automatic TLS via Let's Encrypt",
   "Dynamic routing for microservices",
   "Docker Swarm and Nomad edge routing"
  ],
  "used_by": [
   "Containous",
   "BlaBlaCar",
   "Gitlab",
   "The New York Times"
  ],
  "docs": "https://doc.traefik.io/traefik/",
  "tutorial": "https://doc.traefik.io/traefik/getting-started/quick-start/",
  "added": "2026-06-11",
  "dex": 17
 },
 {
  "id": "ansible",
  "name": "Ansible",
  "category": "Tool",
  "domain": "DevOps",
  "description": "Agentless IT automation tool by Red Hat — uses SSH and YAML playbooks to configure servers, deploy apps, and orchestrate multi-tier workflows. No agent to install on managed nodes; idempotent by design.",
  "use_cases": [
   "Server configuration management and hardening at scale",
   "Application deployment and rolling updates across server fleets",
   "Provisioning cloud VMs and configuring them in one playbook",
   "Automated compliance checks and remediation",
   "Network device configuration (routers, switches via Ansible network modules)"
  ],
  "used_by": [
   "NASA",
   "Atlassian",
   "Hootsuite",
   "Eaton",
   "WeWork"
  ],
  "docs": "https://docs.ansible.com/",
  "tutorial": "https://docs.ansible.com/ansible/latest/getting_started/index.html",
  "added": "2026-06-08",
  "eli5": "A recipe book that teaches computers how to set themselves up.",
  "dex": 18
 },
 {
  "id": "backstage",
  "name": "Backstage",
  "category": "Platform",
  "domain": "DevOps",
  "eli5": "A company's internal website where engineers find all their tools, docs, and services in one place.",
  "description": "Open-source Internal Developer Platform (IDP) by Spotify. Unifies services, docs, tooling, and infrastructure into a single developer portal. Software catalog, TechDocs, and scaffolding templates reduce cognitive load and enable self-service. CNCF incubating project.",
  "use_cases": [
   "Software catalog: single source of truth for all services, APIs, and teams",
   "TechDocs: auto-generated, git-backed documentation colocated with code",
   "Scaffolding templates: engineers create new services from golden-path templates",
   "Infrastructure self-service: provision databases, queues, and resources via UI",
   "Plugin ecosystem: 200+ plugins for GitHub, PagerDuty, Datadog, Kubernetes"
  ],
  "used_by": [
   "Spotify",
   "American Airlines",
   "Box",
   "Expedia",
   "LinkedIn",
   "Zalando"
  ],
  "docs": "https://backstage.io/docs/overview/what-is-backstage",
  "tutorial": "https://backstage.io/docs/getting-started/",
  "added": "2026-06-08",
  "dex": 19
 },
 {
  "id": "bash",
  "name": "Bash",
  "category": "Language",
  "domain": "DevOps",
  "eli5": "A way to give your computer a to-do list and have it do every chore in order.",
  "description": "Bourne Again Shell — the default command interpreter on Linux and macOS. Scripts automate sequences of system commands. Ubiquitous in CI/CD pipelines, server provisioning, and DevOps tooling. Not pretty, but runs everywhere UNIX does.",
  "use_cases": [
   "CI/CD pipeline steps: build, test, package, deploy scripts",
   "Server bootstrapping and configuration automation",
   "Log parsing, file manipulation, and text processing with grep/awk/sed",
   "Cron job automation for scheduled maintenance tasks",
   "Docker entrypoint scripts and Kubernetes init containers"
  ],
  "used_by": [
   "Every Linux/macOS-based engineering team"
  ],
  "docs": "https://www.gnu.org/software/bash/manual/bash.html",
  "tutorial": "https://linuxcommand.org/lc3_learning_the_shell.php",
  "added": "2026-06-08",
  "dex": 20
 },
 {
  "id": "bytebase-database",
  "name": "Bytebase",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like a version control system for your database, so you can track changes, review updates, and safely update your data like you do with code.",
  "description": "Bytebase is a database DevOps platform that brings GitOps principles to database management with schema versioning, change approval workflows, and multi-environment deployment. It integrates with CI/CD pipelines to automate and govern database changes.",
  "use_cases": [
   "Database schema version control and migration management",
   "Change approval workflows for database modifications",
   "Multi-environment database synchronization",
   "Compliance and audit trails for database changes"
  ],
  "used_by": [
   "Databricks",
   "HashiCorp",
   "Enterprise development teams"
  ],
  "docs": "https://www.bytebase.com/docs",
  "tutorial": "https://www.bytebase.com/docs/get-started",
  "added": "2026-06-23",
  "dex": 21
 },
 {
  "id": "chef",
  "name": "Chef",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A recipe book for servers — write instructions once and Chef cooks every server the same way.",
  "description": "Configuration management platform using Ruby-based DSL 'recipes' and 'cookbooks'. Agent-based: Chef client runs on each node and pulls config from Chef Server. Strong compliance and audit capabilities via InSpec. Acquired by Progress Software.",
  "use_cases": [
   "Server configuration management at scale with idempotent recipes",
   "Compliance as Code with InSpec: define and audit security policies",
   "Application deployment and lifecycle management on VM fleets",
   "Multi-platform config: Linux, Windows, AIX via same cookbook",
   "Chef Habitat for application packaging independent of infrastructure"
  ],
  "used_by": [
   "Facebook",
   "Nordstrom",
   "Etsy",
   "Bloomberg",
   "General Electric"
  ],
  "docs": "https://docs.chef.io/",
  "tutorial": "https://docs.chef.io/chef_overview/",
  "added": "2026-06-08",
  "dex": 22
 },
 {
  "id": "colima",
  "name": "Colima",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like Docker Desktop but lighter and faster, like choosing a scooter instead of a car to get around your neighborhood.",
  "description": "Colima is a container runtime for macOS and Linux that provides Docker and Kubernetes functionality without the overhead of Docker Desktop. It uses Lima to manage lightweight VMs and is optimized for developer workflows on resource-constrained machines.",
  "use_cases": [
   "Local development on MacBooks with limited resources",
   "Running Kubernetes clusters locally without Docker Desktop licensing",
   "Testing containerized applications in Linux environments on macOS",
   "CI/CD pipelines in resource-constrained environments"
  ],
  "used_by": [
   "Individual developers",
   "Startups",
   "Open source projects"
  ],
  "docs": "https://github.com/abiosoft/colima",
  "tutorial": "https://github.com/abiosoft/colima#quick-start",
  "added": "2026-06-25",
  "dex": 23
 },
 {
  "id": "crossplane",
  "name": "Crossplane",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Terraform but living inside Kubernetes — declare cloud resources as YAML and the cluster manages them.",
  "description": "CNCF project that extends Kubernetes to manage cloud infrastructure. Define AWS, GCP, Azure resources as Kubernetes CRDs — the Crossplane controller reconciles real cloud state. Enables platform teams to build self-service internal developer platforms on top of Kubernetes.",
  "use_cases": [
   "Cloud infrastructure as Kubernetes resources (RDS, S3, GKE clusters as CRDs)",
   "Internal developer platforms: devs request databases via kubectl, platform team controls what's allowed",
   "Composition: bundle multiple cloud resources into a single reusable abstraction",
   "GitOps-native IaC — ArgoCD/Flux manages infrastructure the same way as apps",
   "Multi-cloud resource management from a single Kubernetes control plane"
  ],
  "used_by": [
   "Upbound",
   "Deutsche Telekom",
   "Grupo Boticário",
   "Nabla"
  ],
  "docs": "https://docs.crossplane.io/",
  "tutorial": "https://docs.crossplane.io/latest/getting-started/",
  "added": "2026-06-08",
  "dex": 24
 },
 {
  "id": "dagger",
  "name": "Dagger",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Dagger is like Docker Compose for your CI/CD pipelines — you write your build steps in code, and they run the same way on your laptop and in any CI system.",
  "description": "Portable CI/CD engine where pipelines are written as code (Go, Python, TypeScript). Runs locally and in any CI system via containers, eliminating YAML and environment drift.",
  "use_cases": [
   "Portable pipelines that run identically on CI and locally",
   "Eliminating YAML-based CI configuration",
   "Reusable build/test/deploy modules across projects",
   "Programmatic pipeline composition with real language features"
  ],
  "used_by": [
   "Grafana Labs",
   "Gitlab",
   "Shopify",
   "GitHub"
  ],
  "docs": "https://docs.dagger.io/",
  "tutorial": "https://docs.dagger.io/quickstart",
  "added": "2026-06-14",
  "dex": 25
 },
 {
  "id": "docker",
  "name": "Docker",
  "category": "Tool",
  "domain": "DevOps",
  "description": "Platform for building, shipping, and running applications in containers. Packages code and dependencies into a portable image that runs identically anywhere. Industry-standard container runtime and image format (OCI).",
  "use_cases": [
   "Packaging applications into reproducible, portable container images",
   "Local development environments with Docker Compose (multi-service stacks)",
   "Building images in CI pipelines for deployment to Kubernetes/ECS",
   "Running isolated microservices with controlled resource limits",
   "Multi-stage builds to produce minimal production images"
  ],
  "used_by": [
   "Spotify",
   "PayPal",
   "ADP",
   "ING",
   "eBay"
  ],
  "docs": "https://docs.docker.com/",
  "tutorial": "https://docs.docker.com/get-started/",
  "added": "2026-06-08",
  "eli5": "A lunchbox that packs your app with everything it needs to run anywhere.",
  "dex": 26
 },
 {
  "id": "docker-desktop",
  "name": "Docker Desktop",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "An app that lets your Mac or Windows computer run containers and a mini Kubernetes cluster with a simple point-and-click interface.",
  "description": "GUI application for Mac and Windows that bundles Docker Engine, Docker Compose, Kubernetes, and Dev Environments. Manages a Linux VM under the hood and integrates with Docker Hub, Extensions Marketplace, and WSL 2 on Windows.",
  "use_cases": [
   "Run Docker containers and Compose stacks on macOS and Windows without manual VM setup",
   "Enable a local single-node Kubernetes cluster with one toggle",
   "Build and push multi-arch images (amd64/arm64) from a single workstation",
   "Develop inside containers with Dev Environments for reproducible onboarding",
   "Extend functionality via Docker Extensions (Lens, Portainer, Snyk scanning)"
  ],
  "used_by": [
   "Individual developers",
   "Startup engineering teams",
   "Enterprise developer desktops"
  ],
  "docs": "https://docs.docker.com/desktop/",
  "tutorial": "https://docs.docker.com/get-started/",
  "added": "2026-06-09",
  "dex": 27
 },
 {
  "id": "harbor",
  "name": "Harbor",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Your own private Docker Hub that you control — stores your container images safely on your servers.",
  "description": "Open-source cloud-native container registry by VMware. Extends Docker Registry with security scanning (Trivy/Clair), role-based access, image signing (Notary/Cosign), replication, and a web UI. CNCF graduated project.",
  "use_cases": [
   "Self-hosted private container registry with RBAC and audit logs",
   "Automatic vulnerability scanning of pushed images with Trivy",
   "Image signing and verification (Cosign) for supply chain security",
   "Cross-datacenter registry replication for multi-region deployments",
   "Proxy cache for Docker Hub / GCR to avoid rate limits and reduce egress"
  ],
  "used_by": [
   "VMware",
   "Alibaba Cloud",
   "JD.com",
   "Tencent",
   "Bytedance"
  ],
  "docs": "https://goharbor.io/docs/",
  "tutorial": "https://goharbor.io/docs/latest/install-config/",
  "added": "2026-06-08",
  "dex": 28
 },
 {
  "id": "helm",
  "name": "Helm",
  "category": "Tool",
  "domain": "DevOps",
  "description": "The package manager for Kubernetes. Bundles Kubernetes manifests into versioned, templatable charts. Manages installs, upgrades, and rollbacks of complex applications as a single unit. CNCF graduated project.",
  "use_cases": [
   "Packaging and distributing Kubernetes applications as reusable charts",
   "Templating manifests with values files for dev/staging/prod environments",
   "One-command install of complex stacks (Prometheus, Grafana, Cert-Manager)",
   "Atomic upgrades and rollbacks with helm upgrade / helm rollback",
   "Helm OCI: store and distribute charts in container registries"
  ],
  "used_by": [
   "Microsoft",
   "Bitnami",
   "DataDog",
   "Elastic",
   "HashiCorp"
  ],
  "docs": "https://helm.sh/docs/",
  "tutorial": "https://helm.sh/docs/intro/quickstart/",
  "added": "2026-06-08",
  "eli5": "An app store for Kubernetes — install big software with one command.",
  "dex": 29
 },
 {
  "id": "k3s",
  "name": "K3s",
  "category": "Platform",
  "domain": "DevOps",
  "eli5": "A very small version of Kubernetes that fits on a tiny computer like a Raspberry Pi and still does almost everything the big version can.",
  "description": "Lightweight, CNCF-certified Kubernetes distribution by Rancher/SUSE. Single binary under 100 MB, replaces etcd with SQLite by default, and strips cloud-provider APIs — purpose-built for edge, IoT, ARM, and resource-constrained environments.",
  "use_cases": [
   "Deploy Kubernetes on Raspberry Pi and ARM edge devices",
   "Run production workloads in resource-constrained or air-gapped environments",
   "Fast cluster bootstrap for CI pipelines (cluster up in under 30 seconds)",
   "Single-node or small HA clusters for branch offices and retail",
   "Foundation for Fleet and Rancher edge management"
  ],
  "used_by": [
   "Rancher/SUSE",
   "Walmart",
   "Siemens",
   "Edge and IoT teams globally"
  ],
  "docs": "https://docs.k3s.io/",
  "tutorial": "https://docs.k3s.io/quick-start",
  "added": "2026-06-09",
  "dex": 30
 },
 {
  "id": "k9s",
  "name": "k9s",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A cockpit dashboard for Kubernetes in your terminal — see everything happening in your cluster at a glance.",
  "description": "Terminal-based Kubernetes UI that provides a real-time dashboard of cluster resources. Navigate pods, deployments, services, logs, and exec into containers — all with keyboard shortcuts. Dramatically faster than running kubectl commands manually.",
  "use_cases": [
   "Real-time pod status, logs, and events without repetitive kubectl commands",
   "Exec into containers directly from the resource list",
   "Quickly delete, describe, edit, and port-forward resources",
   "Filter resources by namespace, label, or name with fuzzy search",
   "Custom aliases and hotkeys for team-specific cluster workflows"
  ],
  "used_by": [
   "Kubernetes operators everywhere — one of the most popular kubectl alternatives"
  ],
  "docs": "https://k9scli.io/topics/install/",
  "tutorial": "https://k9scli.io/",
  "added": "2026-06-08",
  "dex": 31
 },
 {
  "id": "kind",
  "name": "kind",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A way to run a fake Kubernetes cluster entirely inside Docker containers on your computer — like nesting boxes inside boxes.",
  "description": "Kubernetes IN Docker — spins up multi-node Kubernetes clusters using Docker containers as nodes. Purpose-built for testing Kubernetes itself and for fast, reproducible CI environments without VMs.",
  "use_cases": [
   "Run Kubernetes conformance tests in CI without cloud infrastructure",
   "Test multi-node cluster behavior locally with Docker",
   "Validate Kubernetes operators and admission webhooks",
   "Bootstrap ephemeral clusters in GitHub Actions or GitLab CI",
   "Develop and test Cluster API providers"
  ],
  "used_by": [
   "Kubernetes SIG Testing",
   "Cluster API teams",
   "Platform engineers"
  ],
  "docs": "https://kind.sigs.k8s.io/",
  "tutorial": "https://kind.sigs.k8s.io/docs/user/quick-start/",
  "added": "2026-06-09",
  "dex": 32
 },
 {
  "id": "kops",
  "name": "kops",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Like Terraform but specifically for creating full Kubernetes clusters on cloud providers — it sets up all the servers, networking, and Kubernetes pieces for you.",
  "description": "Kubernetes Operations — CLI tool for provisioning, upgrading, and managing production-grade Kubernetes clusters on cloud infrastructure (AWS primary, GCP/Azure in beta). Manages cloud resources (VPCs, ASGs, IAM) alongside the cluster lifecycle.",
  "use_cases": [
   "Provision HA Kubernetes clusters on AWS with full control over node groups and networking",
   "Declarative cluster configuration in YAML with git-ops-friendly state in S3",
   "Rolling cluster upgrades with zero-downtime node replacement",
   "Manage instance groups and node pools for mixed spot/on-demand fleets",
   "Validate cluster config and dry-run changes before applying to production"
  ],
  "used_by": [
   "AWS-heavy Kubernetes teams",
   "Startups self-hosting on AWS",
   "Platform engineers avoiding EKS overhead"
  ],
  "docs": "https://kops.sigs.k8s.io/",
  "tutorial": "https://kops.sigs.k8s.io/getting_started/aws/",
  "added": "2026-06-09",
  "dex": 33
 },
 {
  "id": "kubeadm",
  "name": "kubeadm",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A setup wizard that takes a bunch of blank computers and turns them into a working Kubernetes cluster with one command.",
  "description": "Official Kubernetes cluster bootstrapping tool. Handles control plane init, worker node join, certificate generation, and kubeconfig setup. The standard way to stand up a conformant cluster on bare metal or VMs.",
  "use_cases": [
   "Bootstrap a production-grade Kubernetes control plane on bare metal or VMs",
   "Join worker nodes to an existing cluster with a single join command",
   "Upgrade Kubernetes clusters in place with kubeadm upgrade",
   "Generate and rotate cluster certificates",
   "Serve as the foundation layer for higher-level tools like Kubespray and Cluster API"
  ],
  "used_by": [
   "Red Hat",
   "Canonical",
   "VMware",
   "Self-hosted Kubernetes operators"
  ],
  "docs": "https://kubernetes.io/docs/reference/setup-tools/kubeadm/",
  "tutorial": "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/",
  "added": "2026-06-09",
  "dex": 34
 },
 {
  "id": "kubeops",
  "name": "KubeOps",
  "category": "Framework",
  "domain": "DevOps",
  "eli5": "A toolkit for .NET developers that lets them write Kubernetes operators — programs that automatically manage other programs running in a cluster — using C# instead of Go.",
  "description": "Kubernetes operator SDK for .NET/C#. Provides code-generation, reconciliation loops, CRD scaffolding, and webhook support so .NET teams can build production operators without leaving the C# ecosystem.",
  "use_cases": [
   "Build Kubernetes operators and controllers in C# for .NET-native teams",
   "Scaffold and register Custom Resource Definitions (CRDs) from C# classes",
   "Implement reconciliation loops with built-in retry and error handling",
   "Define validating and mutating admission webhooks in C#",
   "Automate lifecycle management of complex stateful .NET workloads on Kubernetes"
  ],
  "used_by": [
   "Microsoft ecosystem teams",
   ".NET Kubernetes adopters"
  ],
  "docs": "https://buehler.github.io/dotnet-operator-sdk/",
  "tutorial": "https://buehler.github.io/dotnet-operator-sdk/docs/getting-started",
  "added": "2026-06-09",
  "dex": 35
 },
 {
  "id": "kubernetes",
  "name": "Kubernetes",
  "category": "Platform",
  "domain": "DevOps",
  "description": "Open-source container orchestration system for automating deployment, scaling, and management of containerized applications. Originally designed by Google, now CNCF's flagship project. De facto standard for production container workloads.",
  "use_cases": [
   "Declarative workload management: Deployments, StatefulSets, DaemonSets",
   "Horizontal pod autoscaling based on CPU, memory, or custom metrics",
   "Service discovery and internal load balancing via kube-proxy/Services",
   "Secrets and ConfigMap management for app configuration",
   "Rolling updates and rollbacks with zero-downtime deployments"
  ],
  "used_by": [
   "Google",
   "Spotify",
   "Shopify",
   "Airbnb",
   "Goldman Sachs",
   "CERN"
  ],
  "docs": "https://kubernetes.io/docs/home/",
  "tutorial": "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
  "added": "2026-06-08",
  "eli5": "A manager that keeps all your app boxes running and restarts them if they crash.",
  "dex": 36
 },
 {
  "id": "kubespray",
  "name": "Kubespray",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "An Ansible recipe book that automatically installs and configures Kubernetes across a whole fleet of servers for you.",
  "description": "Ansible-based Kubernetes cluster provisioner maintained under the Kubernetes SIGs umbrella. Supports bare metal, cloud VMs, and on-prem with pluggable CNI, CRI, and ingress options. Wraps kubeadm for production-ready multi-node deployments.",
  "use_cases": [
   "Provision multi-node Kubernetes clusters on bare metal or any cloud provider",
   "Declaratively configure CNI plugins (Calico, Flannel, Cilium) and container runtimes",
   "Rolling cluster upgrades via idempotent Ansible playbooks",
   "Air-gapped cluster installs for regulated environments",
   "Day-2 operations: add nodes, rotate certs, drain and decommission"
  ],
  "used_by": [
   "CERN",
   "Cloudflare",
   "Deutsche Telekom",
   "On-prem Kubernetes teams"
  ],
  "docs": "https://kubespray.io/",
  "tutorial": "https://github.com/kubernetes-sigs/kubespray/blob/master/docs/getting_started/setting-up-your-first-cluster.md",
  "added": "2026-06-09",
  "dex": 37
 },
 {
  "id": "kustomize",
  "name": "Kustomize",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A way to take the same Kubernetes YAML and patch it differently for dev, staging, and prod without copy-pasting.",
  "description": "Kubernetes-native configuration management tool built into `kubectl`. Uses overlays and patches to customize base YAML manifests for different environments — no templating language, just plain YAML. Part of kubectl since v1.14.",
  "use_cases": [
   "Environment overlays: same base manifests, different replicas/images per env",
   "Patching third-party manifests without forking (strategic merge patches)",
   "Generating ConfigMaps and Secrets from files or literals",
   "Name prefixing/suffixing and label injection across all resources",
   "ArgoCD and Flux integration as native rendering engine"
  ],
  "used_by": [
   "Kubernetes community",
   "ArgoCD users",
   "Flux users",
   "Google",
   "Red Hat"
  ],
  "docs": "https://kubectl.docs.kubernetes.io/references/kustomize/",
  "tutorial": "https://kubectl.docs.kubernetes.io/guides/introduction/kustomize/",
  "added": "2026-06-08",
  "dex": 38
 },
 {
  "id": "make",
  "name": "Make",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A shortcut sheet where you write long commands once and run them with a short nickname forever.",
  "description": "Classic Unix build automation tool using Makefiles. Defines targets and their dependencies — only rebuilds what changed. Ubiquitous as a project task runner even when not compiling C: `make test`, `make deploy`, `make docker-build` are common patterns across all languages.",
  "use_cases": [
   "Project task runner: standardize `make test`, `make build`, `make deploy` across repos",
   "Incremental builds: only recompile changed C/C++/Go files via dependency tracking",
   "CI/CD entrypoint: Makefile as the canonical interface between humans and pipelines",
   "Documentation generation, linting, and formatting as named targets",
   "Multi-step workflows with dependency ordering (target B requires target A)"
  ],
  "used_by": [
   "Linux kernel",
   "GNU project",
   "virtually every C/C++ project",
   "many DevOps teams"
  ],
  "docs": "https://www.gnu.org/software/make/manual/make.html",
  "tutorial": "https://makefiletutorial.com/",
  "added": "2026-06-08",
  "dex": 39
 },
 {
  "id": "microk8s",
  "name": "MicroK8s",
  "category": "Platform",
  "domain": "DevOps",
  "eli5": "A small, self-contained Kubernetes that installs in one command and works like a full cluster — good for edge devices and laptops.",
  "description": "Lightweight, single-package Kubernetes distribution by Canonical. Delivered as a snap with built-in add-ons (Istio, Knative, GPU support, registry). Designed for edge, IoT, CI, and developer workstations with zero-ops cluster management.",
  "use_cases": [
   "Run production-grade Kubernetes on edge and IoT hardware",
   "Developer workstation cluster with snap-based lifecycle management",
   "Enable add-ons (Ingress, MetalLB, GPU, registry) with a single command",
   "Cluster multiple MicroK8s nodes for HA edge deployments",
   "CI/CD pipelines on Ubuntu runners without full cluster overhead"
  ],
  "used_by": [
   "Canonical",
   "Edge computing teams",
   "Ubuntu-based infrastructure operators"
  ],
  "docs": "https://microk8s.io/docs",
  "tutorial": "https://microk8s.io/docs/getting-started",
  "added": "2026-06-09",
  "dex": 40
 },
 {
  "id": "minikube",
  "name": "Minikube",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A tiny pretend Kubernetes cluster that runs on your laptop so you can practice without needing real servers.",
  "description": "Local Kubernetes cluster tool that spins up a single-node cluster inside a VM or container on your workstation. The canonical way for developers to run and test Kubernetes manifests locally before deploying to production.",
  "use_cases": [
   "Local development and testing of Kubernetes workloads",
   "Learning Kubernetes without cloud costs",
   "CI pipeline validation of manifests on ephemeral runners",
   "Testing Helm charts and operators locally",
   "Rapid iteration on containerized microservices"
  ],
  "used_by": [
   "Individual developers",
   "Platform engineering teams",
   "Kubernetes learners"
  ],
  "docs": "https://minikube.sigs.k8s.io/docs/",
  "tutorial": "https://minikube.sigs.k8s.io/docs/start/",
  "added": "2026-06-09",
  "dex": 41
 },
 {
  "id": "nix",
  "name": "Nix",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like a recipe book that guarantees your meal will taste exactly the same every time because it specifies every ingredient down to the exact version.",
  "description": "Nix is a declarative package manager and build system that enables reproducible, portable development environments and deployments across different machines. It uses a functional approach to ensure bit-for-bit reproducibility.",
  "use_cases": [
   "Creating reproducible development environments across teams",
   "Managing complex multi-language project dependencies",
   "Building immutable infrastructure and container images",
   "Enabling seamless collaboration with guaranteed environment consistency"
  ],
  "used_by": [
   "Target",
   "Tweag",
   "GitHub",
   "Shopify"
  ],
  "docs": "https://nixos.org/learn.html",
  "tutorial": "https://nix.dev/",
  "added": "2026-06-17",
  "dex": 42
 },
 {
  "id": "nix-package-manager",
  "name": "Nix Package Manager",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like a recipe book that remembers exactly which ingredients and amounts you used to bake a cake, so you can always bake the same cake the same way.",
  "description": "Nix is a purely functional package manager and OS configuration tool that enables reproducible, declarative system configurations. It's increasingly adopted for development environments and infrastructure-as-code to eliminate 'works on my machine' problems.",
  "use_cases": [
   "Creating reproducible development environments",
   "Managing system configurations declaratively",
   "Building immutable deployment artifacts",
   "Cross-platform development environment consistency"
  ],
  "used_by": [
   "Tweag",
   "Replit",
   "Input Output Global",
   "Shopify"
  ],
  "docs": "https://nixos.org/guides/nix-pills/",
  "tutorial": "https://nix.dev/tutorials/first-steps",
  "added": "2026-06-21",
  "dex": 43
 },
 {
  "id": "opentofu",
  "name": "OpenTofu",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "OpenTofu is like Terraform's open-source twin — does all the same infrastructure tricks but is community-owned and free forever.",
  "description": "Open-source fork of Terraform under the Linux Foundation, maintained by the community after HashiCorp's BSL license change. Fully compatible with existing Terraform modules and providers.",
  "use_cases": [
   "Drop-in Terraform replacement under open license",
   "Infrastructure as code for AWS, GCP, Azure",
   "Managing Kubernetes, databases, and DNS",
   "Organizations avoiding BSL license restrictions"
  ],
  "used_by": [
   "Gruntwork",
   "Spacelift",
   "Scalr",
   "env0"
  ],
  "docs": "https://opentofu.org/docs/",
  "tutorial": "https://opentofu.org/docs/intro/",
  "added": "2026-06-11",
  "dex": 44
 },
 {
  "id": "packer",
  "name": "Packer",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A factory that bakes identical machine snapshots so every server starts from the same recipe.",
  "description": "HashiCorp tool for creating identical machine images (AMIs, Docker images, VMware templates) from a single config. Build once, deploy anywhere. Eliminates 'works on my machine' by baking all dependencies into the image before deployment.",
  "use_cases": [
   "Building AWS AMIs pre-baked with app dependencies for faster Auto Scaling Group launches",
   "Golden image pipelines: base OS → harden → install runtime → snapshot",
   "Multi-cloud image builds: same config produces AMI + GCP image + Azure VHD",
   "Immutable infrastructure: replace servers instead of patching in place",
   "CI/CD integration: Packer build triggered on dependency updates"
  ],
  "used_by": [
   "HashiCorp",
   "Netflix",
   "Airbnb",
   "Stripe",
   "Atlassian"
  ],
  "docs": "https://developer.hashicorp.com/packer/docs",
  "tutorial": "https://developer.hashicorp.com/packer/tutorials/aws-get-started",
  "added": "2026-06-08",
  "dex": 45
 },
 {
  "id": "podman",
  "name": "Podman",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Docker but without a big daemon running as root — safer and works the same way.",
  "description": "Daemonless, rootless container engine by Red Hat — OCI-compatible Docker drop-in replacement. Runs containers without a privileged background daemon, improving security posture. Supports Docker Compose files via `podman-compose` and generates systemd units from containers.",
  "use_cases": [
   "Rootless container execution in security-sensitive or shared environments",
   "Drop-in Docker replacement: `alias docker=podman` works for most workflows",
   "Generating systemd unit files from containers for OS-native service management",
   "Pod concept (grouping containers) that mirrors Kubernetes Pod model locally",
   "CI environments where Docker daemon socket access is restricted"
  ],
  "used_by": [
   "Red Hat",
   "IBM",
   "CentOS/RHEL users",
   "OpenShift deployments"
  ],
  "docs": "https://docs.podman.io/en/latest/",
  "tutorial": "https://podman.io/getting-started/",
  "added": "2026-06-08",
  "dex": 46
 },
 {
  "id": "pulumi",
  "name": "Pulumi",
  "category": "Tool",
  "domain": "DevOps",
  "description": "Infrastructure as Code using general-purpose languages — Python, TypeScript, Go, C#, Java. Write cloud infrastructure with real loops, functions, and classes instead of HCL DSL. Same providers as Terraform via Pulumi's bridged provider ecosystem.",
  "use_cases": [
   "IaC in TypeScript/Python/Go for teams who find HCL limiting",
   "Dynamically generating resources with loops and conditionals in real code",
   "Component resources: reusable, testable infrastructure abstractions as classes",
   "Pulumi ESC for centralized secrets and environment configuration management",
   "Pulumi Cloud for state backend, CI/CD integration, and policy enforcement"
  ],
  "used_by": [
   "Mercedes-Benz",
   "Snowflake",
   "Cockroach Labs",
   "Nvidia",
   "Fauna"
  ],
  "docs": "https://www.pulumi.com/docs/",
  "tutorial": "https://www.pulumi.com/docs/get-started/",
  "added": "2026-06-08",
  "eli5": "Like Terraform but you write cloud blueprints in Python or Go instead of a special language.",
  "dex": 47
 },
 {
  "id": "puppet",
  "name": "Puppet",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A puppet master that tells all your servers exactly how to look and keeps them that way automatically.",
  "description": "Declarative configuration management tool. Define desired system state in Puppet DSL; the Puppet agent enforces and continuously corrects drift. Pull-based model with Puppet Server as the master. Strong at enforcing compliance across large, heterogeneous fleets.",
  "use_cases": [
   "Declarative server configuration: define desired state, Puppet enforces it",
   "Drift correction: auto-remediate unauthorized changes on managed nodes",
   "Cross-platform fleet management (Linux, Windows, network devices)",
   "Compliance reporting and enforcement at enterprise scale",
   "Puppet Forge module ecosystem for common infrastructure patterns"
  ],
  "used_by": [
   "Google",
   "Salesforce",
   "PayPal",
   "Stanford University",
   "Twitter"
  ],
  "docs": "https://www.puppet.com/docs/puppet/latest/puppet_index.html",
  "tutorial": "https://www.puppet.com/docs/puppet/latest/quick_start_essential_config.html",
  "added": "2026-06-08",
  "dex": 48
 },
 {
  "id": "qemu",
  "name": "QEMU",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "QEMU is like a computer inside your computer that can run any operating system, letting you test software on different systems without buying new hardware.",
  "description": "QEMU is a free and open-source machine emulator and virtualizer that enables running multiple operating systems and architectures on a single host system. It is widely used for development, testing, and production virtualization across diverse infrastructure environments.",
  "use_cases": [
   "Cross-architecture development and testing",
   "Lightweight virtualization for CI/CD pipelines",
   "Embedded systems development and debugging",
   "System-level software testing and simulation"
  ],
  "used_by": [
   "Red Hat",
   "Ubuntu",
   "SUSE",
   "Fedora Project"
  ],
  "docs": "https://www.qemu.org/docs/master/",
  "tutorial": "https://www.qemu.org/docs/master/system/quickstart.html",
  "added": "2026-06-20",
  "dex": 49
 },
 {
  "id": "scarf",
  "name": "Scarf",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like a counter at a store that quietly tracks when people download your product so you know how many people are using it.",
  "description": "Scarf provides package analytics and insights for open source projects and commercial software by transparently tracking downloads and usage patterns. It helps maintainers understand adoption without compromising user privacy through its lightweight pixel-based tracking.",
  "use_cases": [
   "Measuring open source project adoption",
   "Tracking software download metrics",
   "Understanding user distribution by geography",
   "Monetizing open source projects ethically"
  ],
  "used_by": [
   "Docker",
   "HashiCorp",
   "JFrog"
  ],
  "docs": "https://docs.scarf.sh",
  "tutorial": "https://scarf.sh/",
  "added": "2026-06-28",
  "dex": 50
 },
 {
  "id": "skaffold",
  "name": "Skaffold",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Skaffold is like a live-reload button for Kubernetes — every time you save code, it automatically builds a container and deploys it to your cluster.",
  "description": "CLI tool for continuous development against Kubernetes. Handles build, push, and deploy automatically on file changes, with support for Helm, Kustomize, and kubectl.",
  "use_cases": [
   "Inner-loop dev with hot reload on Kubernetes",
   "CI pipeline with consistent build + deploy steps",
   "Multi-service local development with minikube/kind",
   "GitOps-friendly deploy pipelines"
  ],
  "used_by": [
   "Google",
   "Spotify",
   "Weaveworks",
   "JFrog"
  ],
  "docs": "https://skaffold.dev/docs/",
  "tutorial": "https://skaffold.dev/docs/quickstart/",
  "added": "2026-06-12",
  "dex": 51
 },
 {
  "id": "terraform",
  "name": "Terraform",
  "category": "Tool",
  "domain": "DevOps",
  "description": "Infrastructure as Code tool by HashiCorp — declare cloud resources in HCL, plan changes, and apply. Provider ecosystem covers 3000+ services across AWS, GCP, Azure, and beyond. State file tracks real-world resource status.",
  "use_cases": [
   "Provisioning and managing cloud infrastructure declaratively (IaC)",
   "Multi-cloud and multi-provider resource management from one config",
   "Remote state in S3/GCS with DynamoDB locking for team collaboration",
   "Modules for reusable, versioned infrastructure components",
   "Drift detection and plan-before-apply safety for production changes"
  ],
  "used_by": [
   "Slack",
   "Twitch",
   "Starbucks",
   "Uber",
   "Barclays"
  ],
  "docs": "https://developer.hashicorp.com/terraform/docs",
  "tutorial": "https://developer.hashicorp.com/terraform/tutorials/aws-get-started",
  "added": "2026-06-08",
  "eli5": "A shopping list for cloud stuff — write what you want, it goes and builds it.",
  "dex": 52
 },
 {
  "id": "terraform-cloud",
  "name": "Terraform Cloud",
  "category": "Platform",
  "domain": "DevOps",
  "description": "Managed SaaS platform for Terraform by HashiCorp. Provides remote state storage, plan/apply execution, team access controls, policy enforcement (Sentinel/OPA), and a private module registry — turning Terraform into a collaborative, governed IaC platform.",
  "use_cases": [
   "Remote state backend with locking, versioning, and state history",
   "Remote plan/apply in ephemeral workers — no local credentials on developer machines",
   "Policy as Code with Sentinel or OPA to enforce cost/security guardrails before apply",
   "VCS-driven workflows: PR triggers speculative plan, merge triggers apply",
   "Private module registry for sharing versioned, reusable Terraform modules across teams"
  ],
  "used_by": [
   "HashiCorp customers",
   "Slack",
   "Twitch",
   "Deliveroo",
   "Spacelift"
  ],
  "docs": "https://developer.hashicorp.com/terraform/cloud-docs",
  "tutorial": "https://developer.hashicorp.com/terraform/tutorials/cloud-get-started",
  "added": "2026-06-08",
  "eli5": "A shared whiteboard where your whole team draws the same cloud blueprint together.",
  "dex": 53
 },
 {
  "id": "tilt",
  "name": "Tilt",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Tilt is like a smart live-reload for your entire microservices stack — change a file and only the affected service rebuilds and redeploys in seconds.",
  "description": "Local development environment orchestrator for Kubernetes microservices. Uses a Tiltfile (Python-like) to define smart rebuilds, dependency tracking, and a real-time dev dashboard.",
  "use_cases": [
   "Local multi-service Kubernetes development",
   "Smart incremental builds (only rebuild what changed)",
   "Unified dev dashboard for logs, builds, and health",
   "Consistent dev environments across teams"
  ],
  "used_by": [
   "Docker",
   "Grafana Labs",
   "Netlify",
   "Cockroach Labs"
  ],
  "docs": "https://docs.tilt.dev/",
  "tutorial": "https://docs.tilt.dev/tutorial/index.html",
  "added": "2026-06-12",
  "dex": 54
 },
 {
  "id": "turborepo",
  "name": "Turborepo",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Turborepo is like a smart build system that only rebuilds the parts of your monorepo that actually changed — skipping everything else to save time.",
  "description": "High-performance build system for JavaScript/TypeScript monorepos. Provides task caching, parallel execution, and remote cache sharing to dramatically speed up CI and local builds.",
  "use_cases": [
   "Monorepo build and test acceleration",
   "Remote caching to share build artifacts across CI runs",
   "Incremental builds (only rebuild changed packages)",
   "Task pipeline dependency management"
  ],
  "used_by": [
   "Vercel",
   "Microsoft",
   "HashiCorp",
   "Linear"
  ],
  "docs": "https://turbo.build/repo/docs",
  "tutorial": "https://turbo.build/repo/docs/getting-started/add-to-project",
  "added": "2026-06-14",
  "dex": 55
 },
 {
  "id": "vagrant",
  "name": "Vagrant",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "A magic button that spins up an identical local computer for every developer on the team.",
  "description": "HashiCorp tool for building and managing reproducible local development environments using VMs. A single Vagrantfile defines the OS, provisioning, and networking — every team member runs `vagrant up` and gets the same environment.",
  "use_cases": [
   "Reproducible local dev environments matching production OS and config",
   "Onboarding: new engineers run `vagrant up` instead of a 20-step setup doc",
   "Testing Ansible/Chef/Puppet playbooks locally before applying to production",
   "Isolated multi-VM topologies (app + DB + load balancer) on one laptop",
   "Legacy app environments that require specific OS versions"
  ],
  "used_by": [
   "HashiCorp",
   "GitHub",
   "Rackspace",
   "Engine Yard"
  ],
  "docs": "https://developer.hashicorp.com/vagrant/docs",
  "tutorial": "https://developer.hashicorp.com/vagrant/tutorials/getting-started",
  "added": "2026-06-08",
  "dex": 56
 },
 {
  "id": "velero",
  "name": "Velero",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "Velero is like a backup and restore button for your entire Kubernetes cluster — it saves everything to cloud storage so you can recover or move it anywhere.",
  "description": "Open-source tool for backing up and restoring Kubernetes cluster resources and persistent volumes. Supports disaster recovery, cluster migration, and namespace-level snapshots.",
  "use_cases": [
   "Kubernetes cluster disaster recovery",
   "Migrating workloads between clusters or cloud providers",
   "Scheduled namespace/cluster backups to S3/GCS/Azure",
   "Pre-upgrade snapshots for rollback safety"
  ],
  "used_by": [
   "VMware",
   "Red Hat",
   "Replicated",
   "D2iQ"
  ],
  "docs": "https://velero.io/docs/",
  "tutorial": "https://velero.io/docs/main/contributions/ibm-ci/",
  "added": "2026-06-14",
  "dex": 57
 },
 {
  "id": "walrus",
  "name": "Walrus",
  "category": "Platform",
  "domain": "DevOps",
  "eli5": "It's like a smart assistant that manages your infrastructure code and keeps everything running the same way every time, automatically.",
  "description": "Walrus is an open-source Infrastructure as Code (IaC) management platform that simplifies Terraform and other IaC workflows with a user-friendly interface and automation capabilities. It reduces complexity for teams managing cloud infrastructure at scale.",
  "use_cases": [
   "Self-service infrastructure provisioning for development teams",
   "Infrastructure state management and compliance tracking",
   "Multi-environment infrastructure deployment automation",
   "Cost optimization through centralized IaC governance"
  ],
  "used_by": [
   "Seal Software",
   "Cloud-native enterprises",
   "DevOps teams"
  ],
  "docs": "https://walrus.seal.io/docs",
  "tutorial": "https://walrus.seal.io/docs/guides/quickstart",
  "added": "2026-06-26",
  "dex": 58
 },
 {
  "id": "warp",
  "name": "Warp",
  "category": "Tool",
  "domain": "DevOps",
  "eli5": "It's like a super-powered command line terminal that remembers what you did, suggests commands, and explains errors to you automatically.",
  "description": "Warp is a modern terminal emulator built in Rust that replaces traditional shells like bash with AI-assisted command suggestions, command history search, and built-in collaboration features. It improves developer productivity through intelligent autocomplete and error explanation.",
  "use_cases": [
   "Faster command discovery and reduced manual lookup time",
   "Team collaboration on terminal sessions",
   "Automated workflows with command history and bookmarks",
   "Linux and macOS development environments"
  ],
  "used_by": [
   "Stripe",
   "Notion",
   "PagerDuty",
   "various Fortune 500 tech teams"
  ],
  "docs": "https://docs.warp.dev",
  "tutorial": "https://www.warp.dev/blog/getting-started-with-warp",
  "added": "2026-06-19",
  "dex": 59
 },
 {
  "id": "yaml",
  "name": "YAML",
  "category": "Language",
  "domain": "DevOps",
  "eli5": "A way to write settings and instructions so computers can read them, using indentation like an outline.",
  "description": "YAML Ain't Markup Language — human-readable data serialization format. The config language of cloud-native infrastructure. Used by Kubernetes manifests, Docker Compose, GitHub Actions, Ansible, and almost every modern DevOps tool. Indentation-sensitive.",
  "use_cases": [
   "Kubernetes resource definitions (Deployments, Services, ConfigMaps)",
   "GitHub Actions / GitLab CI pipeline definitions",
   "Docker Compose multi-service stack configuration",
   "Ansible playbooks and inventory files",
   "Helm chart values files and templates"
  ],
  "used_by": [
   "Every cloud-native engineering team"
  ],
  "docs": "https://yaml.org/spec/1.2.2/",
  "tutorial": "https://learnxinyminutes.com/docs/yaml/",
  "added": "2026-06-08",
  "dex": 60
 },
 {
  "id": "aws-ec2",
  "name": "AWS EC2",
  "category": "Platform",
  "domain": "Cloud",
  "description": "Amazon Elastic Compute Cloud — scalable virtual machines in AWS. Core compute primitive of AWS; choose instance type, OS, storage, and networking. Pay per second (Linux) or per hour (Windows).",
  "use_cases": [
   "Hosting web servers, APIs, and application backends",
   "Running batch jobs and HPC workloads on GPU/compute-optimized instances",
   "Autoscaling fleets behind a load balancer (Auto Scaling Groups)",
   "Running self-managed databases or Kubernetes nodes",
   "On-demand and Spot instances for cost-optimized workloads"
  ],
  "used_by": [
   "Netflix",
   "Airbnb",
   "Stripe",
   "NASA",
   "Samsung"
  ],
  "docs": "https://docs.aws.amazon.com/ec2/",
  "tutorial": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html",
  "added": "2026-06-08",
  "eli5": "A rental computer in Amazon's giant warehouse you can turn on anytime.",
  "dex": 61
 },
 {
  "id": "aws-eks",
  "name": "AWS EKS",
  "category": "Platform",
  "domain": "Cloud",
  "description": "Amazon Elastic Kubernetes Service — managed Kubernetes control plane on AWS. AWS handles etcd, API server availability, and upgrades. Run worker nodes on EC2, Fargate, or EKS Anywhere (on-prem).",
  "use_cases": [
   "Running production Kubernetes workloads without managing the control plane",
   "Fargate profiles for serverless pod scheduling (no node management)",
   "IRSA (IAM Roles for Service Accounts) for pod-level AWS permissions",
   "Multi-tenant cluster isolation with namespaces and network policies",
   "Karpenter for intelligent, fast node autoscaling"
  ],
  "used_by": [
   "Snap",
   "Salesforce",
   "HSBC",
   "Intuit",
   "Delivery Hero"
  ],
  "docs": "https://docs.aws.amazon.com/eks/",
  "tutorial": "https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html",
  "added": "2026-06-08",
  "eli5": "Amazon babysits Kubernetes so you only worry about your apps.",
  "dex": 62
 },
 {
  "id": "aws-lambda",
  "name": "AWS Lambda",
  "category": "Platform",
  "domain": "Cloud",
  "description": "Serverless compute service — run code without provisioning or managing servers. Pay only for compute time consumed (per-100ms billing). Scales automatically from zero to thousands of concurrent executions.",
  "use_cases": [
   "Event-driven processing: S3 uploads, DynamoDB streams, SQS/SNS triggers",
   "REST/GraphQL API backends via API Gateway",
   "Scheduled cron jobs and automation tasks",
   "Real-time data transformation in streaming pipelines (Kinesis)",
   "Lightweight microservices avoiding always-on server costs"
  ],
  "used_by": [
   "Coca-Cola",
   "iRobot",
   "Nordstrom",
   "Thomson Reuters",
   "Netflix"
  ],
  "docs": "https://docs.aws.amazon.com/lambda/",
  "tutorial": "https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html",
  "added": "2026-06-08",
  "eli5": "A vending machine for code — drop in a coin (event), your code runs, then stops.",
  "dex": 63
 },
 {
  "id": "azure-functions",
  "name": "Azure Functions",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Microsoft's version of AWS Lambda — write a function, Azure runs it only when needed.",
  "description": "Azure's serverless compute service — event-driven functions that scale automatically and bill per execution. Supports C#, Python, Java, Node.js, PowerShell, and more. Durable Functions extension enables stateful, long-running workflows with fan-out/fan-in patterns.",
  "use_cases": [
   "Event-driven processing: HTTP, timer, Blob, Queue, Event Hub, Cosmos DB triggers",
   "Durable Functions for stateful orchestration (approval flows, fan-out/fan-in)",
   "API backends integrated with Azure API Management",
   "Real-time data transformation in Azure Event Hubs pipelines",
   "Scheduled automation and maintenance tasks via timer triggers"
  ],
  "used_by": [
   "KPMG",
   "Siemens",
   "HP",
   "Costco",
   "Carnival"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/azure-functions/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-get-started",
  "added": "2026-06-08",
  "dex": 64
 },
 {
  "id": "aks",
  "name": "Azure Kubernetes Service",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Microsoft manages Kubernetes for you — just tell it what apps to run, it handles the cluster.",
  "description": "Azure's managed Kubernetes service. Free control plane; pay only for worker nodes. Deep Azure integration: Azure AD for RBAC, Azure Monitor for observability, Azure CNI for networking, and ACR for container images. Supports Windows node pools alongside Linux.",
  "use_cases": [
   "Production Kubernetes with Azure AD Workload Identity for pod-level RBAC",
   "Windows containers for .NET Framework apps alongside Linux workloads",
   "KEDA (Kubernetes Event-Driven Autoscaling) for queue/event-driven scaling",
   "Azure Service Mesh (Istio-based) for mTLS and traffic management",
   "GitOps with Flux CD as an AKS add-on"
  ],
  "used_by": [
   "ABB",
   "Siemens",
   "ING Bank",
   "KPMG",
   "Accenture"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/aks/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-portal",
  "added": "2026-06-08",
  "dex": 65
 },
 {
  "id": "azure-vms",
  "name": "Azure Virtual Machines",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Microsoft's rental computers — pick a size, pay by the hour, run whatever you want on them.",
  "description": "Azure's IaaS virtual machine service supporting Linux and Windows workloads. Wide range of VM series optimized for compute, memory, storage, and GPU workloads. Spot VMs for fault-tolerant batch jobs at steep discounts. Deep integration with Azure AD and managed disks.",
  "use_cases": [
   "Lift-and-shift migration of on-prem Windows Server and SQL Server workloads",
   "GPU VMs (NC/ND series) for ML training and HPC",
   "VM Scale Sets for autoscaling application tiers behind Azure Load Balancer",
   "Spot VMs for cost-optimized batch processing and dev/test environments",
   "Azure Dedicated Hosts for compliance workloads needing physical isolation"
  ],
  "used_by": [
   "Heineken",
   "Rolls-Royce",
   "Toyota",
   "3M",
   "ASOS"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/virtual-machines/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal",
  "added": "2026-06-08",
  "dex": 66
 },
 {
  "id": "bitnami",
  "name": "Bitnami",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "It's like pre-made LEGO kits for the cloud—software that's already assembled and ready to run instead of building from scratch.",
  "description": "Bitnami provides pre-built, production-ready application stacks and container images for deploying popular open-source software on cloud platforms. It simplifies deployment and reduces time-to-production for applications like WordPress, Kubernetes, and databases.",
  "use_cases": [
   "One-click deployment of web applications to cloud platforms",
   "Containerized application distribution via Docker and Kubernetes",
   "Enterprise software stack provisioning",
   "Multi-cloud application deployment consistency"
  ],
  "used_by": [
   "VMware",
   "AWS Marketplace",
   "Azure Marketplace",
   "Google Cloud"
  ],
  "docs": "https://bitnami.com/",
  "tutorial": "https://bitnami.com/get-started",
  "added": "2026-06-26",
  "dex": 67
 },
 {
  "id": "firecracker",
  "name": "Firecracker",
  "category": "Tool",
  "domain": "Cloud",
  "eli5": "It's like a super-fast toy factory that can spin up a brand new machine in milliseconds instead of seconds, so you can run lots of things at once.",
  "description": "Firecracker is a lightweight virtualization technology developed by AWS that enables microVMs to start in milliseconds with minimal overhead. It powers AWS Lambda and is used for serverless computing at massive scale with high density and security isolation.",
  "use_cases": [
   "Serverless function execution platforms",
   "Multi-tenant container isolation",
   "Edge computing and IoT deployments",
   "Function-as-a-Service (FaaS) infrastructure"
  ],
  "used_by": [
   "Amazon Web Services",
   "Fly.io",
   "Netlify"
  ],
  "docs": "https://github.com/firecracker-microvm/firecracker",
  "tutorial": "https://github.com/firecracker-microvm/firecracker/tree/main/docs",
  "added": "2026-06-28",
  "dex": 68
 },
 {
  "id": "gcp",
  "name": "Google Cloud Platform",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Google's version of Amazon's cloud — renting Google's computers, storage, and AI tools.",
  "description": "Google's public cloud platform offering 200+ services across compute, storage, data, AI/ML, and networking. Known for leading managed Kubernetes (GKE), BigQuery analytics, and Vertex AI. Strong in data engineering and ML workloads.",
  "use_cases": [
   "Running containerized workloads on GKE — the most mature managed Kubernetes service",
   "Large-scale analytics with BigQuery's serverless data warehouse",
   "ML training and serving with Vertex AI and TPU access",
   "Multi-cloud strategy alongside AWS or Azure",
   "Migrating from on-prem with Anthos for hybrid cloud management"
  ],
  "used_by": [
   "Spotify",
   "Twitter",
   "PayPal",
   "20th Century Fox",
   "Colgate-Palmolive"
  ],
  "docs": "https://cloud.google.com/docs",
  "tutorial": "https://cloud.google.com/docs/get-started",
  "added": "2026-06-08",
  "dex": 69
 },
 {
  "id": "cloud-run",
  "name": "Google Cloud Run",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Deploy any container and Google runs it for you — scales to zero when no one is using it.",
  "description": "GCP's fully managed serverless container platform. Deploy any OCI container; Cloud Run handles scaling from zero to thousands of instances, HTTPS, and traffic management. No Kubernetes to manage. Ideal for stateless services, APIs, and event-driven workloads.",
  "use_cases": [
   "Stateless HTTP APIs and microservices with zero infrastructure management",
   "Event-driven processing via Pub/Sub, Cloud Tasks, or Eventarc triggers",
   "Scale-to-zero services for cost-efficient low-traffic or batch workloads",
   "ML model serving: containerize a model server, Cloud Run handles traffic bursts",
   "Cloud Run Jobs for batch, cron, and data processing tasks"
  ],
  "used_by": [
   "Delivery Hero",
   "Ubisoft",
   "Meredith",
   "Lush",
   "Mercado Libre"
  ],
  "docs": "https://cloud.google.com/run/docs",
  "tutorial": "https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service",
  "added": "2026-06-08",
  "dex": 70
 },
 {
  "id": "gce",
  "name": "Google Compute Engine",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Google's rental computers in the cloud — like AWS EC2 but on Google's network.",
  "description": "GCP's IaaS virtual machine service. Offers custom machine types, preemptible/Spot VMs, per-second billing, and live migration during host maintenance. Runs on Google's global fiber network with high-bandwidth, low-latency inter-region connectivity.",
  "use_cases": [
   "General-purpose VM workloads with custom vCPU/RAM ratios",
   "Preemptible VMs for batch jobs and fault-tolerant workloads at 60-90% discount",
   "GPU instances for ML training and rendering workloads",
   "Managed instance groups with autoscaling behind a load balancer",
   "Sole-tenant nodes for compliance workloads requiring physical isolation"
  ],
  "used_by": [
   "Spotify",
   "HSBC",
   "Etsy",
   "Best Buy",
   "Philips"
  ],
  "docs": "https://cloud.google.com/compute/docs",
  "tutorial": "https://cloud.google.com/compute/docs/quickstart-linux",
  "added": "2026-06-08",
  "dex": 71
 },
 {
  "id": "gke",
  "name": "Google Kubernetes Engine",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Google manages your Kubernetes cluster — they invented it, so they know it best.",
  "description": "GCP's managed Kubernetes service — the most mature and feature-rich managed Kubernetes offering. Autopilot mode fully manages nodes; Standard mode gives full control. Tight integration with GCP IAM, Cloud Logging, Cloud Monitoring, and Artifact Registry.",
  "use_cases": [
   "Production Kubernetes with Autopilot for fully managed, serverless node management",
   "Workload Identity for pod-level GCP IAM permissions without key files",
   "Binary Authorization for enforcing signed image policies at deploy time",
   "Multi-cluster deployments with GKE Fleet for unified management",
   "Config Connector to manage GCP resources as Kubernetes CRDs"
  ],
  "used_by": [
   "Spotify",
   "Shopify",
   "Airbus",
   "Niantic",
   "HSBC"
  ],
  "docs": "https://cloud.google.com/kubernetes-engine/docs",
  "tutorial": "https://cloud.google.com/kubernetes-engine/docs/quickstart",
  "added": "2026-06-08",
  "dex": 72
 },
 {
  "id": "localstack",
  "name": "LocalStack",
  "category": "Tool",
  "domain": "Cloud",
  "eli5": "LocalStack is like a fake AWS on your computer that lets you practice building things without spending real money.",
  "description": "LocalStack is a fully functional local AWS cloud stack that emulates AWS services on your machine for development and testing. It allows developers to build and test cloud applications locally without incurring AWS costs or needing internet connectivity.",
  "use_cases": [
   "Local development of AWS-dependent applications",
   "Integration testing of cloud infrastructure code",
   "CI/CD pipeline testing without cloud resource consumption",
   "Teaching and training on AWS services"
  ],
  "used_by": [
   "Atlassian",
   "Volkswagen",
   "Shopify",
   "HashiCorp"
  ],
  "docs": "https://docs.localstack.cloud/",
  "tutorial": "https://docs.localstack.cloud/getting-started/",
  "added": "2026-06-15",
  "dex": 73
 },
 {
  "id": "azure",
  "name": "Microsoft Azure",
  "category": "Platform",
  "domain": "Cloud",
  "eli5": "Microsoft's cloud — like AWS but Microsoft's, and very popular with companies already using Windows and Office.",
  "description": "Microsoft's public cloud platform with 200+ services. Dominant in enterprise due to deep Microsoft ecosystem integration (Active Directory, Office 365, Windows Server). Strong hybrid cloud story via Azure Arc. Second-largest cloud provider by market share.",
  "use_cases": [
   "Enterprise workloads already in the Microsoft ecosystem (Windows, SQL Server, .NET)",
   "Hybrid cloud with Azure Arc extending Azure management to on-prem and other clouds",
   "Azure OpenAI Service for GPT-4/Copilot integration in enterprise apps",
   "SAP, Oracle, and VMware workloads via certified Azure infrastructure",
   "Government and regulated industries via Azure Government and sovereign regions"
  ],
  "used_by": [
   "Boeing",
   "BMW",
   "Walmart",
   "FedEx",
   "ExxonMobil"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/guides/developer/azure-developer-guide",
  "added": "2026-06-08",
  "dex": 74
 },
 {
  "id": "apache-cassandra",
  "name": "Apache Cassandra",
  "category": "Tool",
  "domain": "Database",
  "description": "Distributed wide-column NoSQL database designed for massive scale with no single point of failure. Optimized for write-heavy, globally distributed workloads. Tunable consistency (AP system per CAP theorem). Originally built at Facebook.",
  "use_cases": [
   "Time-series data at scale: IoT telemetry, metrics, event logs",
   "High-write-throughput workloads needing linear horizontal scalability",
   "Multi-region active-active deployments with zero downtime",
   "User activity feeds, recommendation data, messaging history",
   "Netflix-scale personalization data (hundreds of TB)"
  ],
  "used_by": [
   "Netflix",
   "Apple",
   "Discord",
   "Instagram",
   "Spotify",
   "Uber"
  ],
  "docs": "https://cassandra.apache.org/doc/latest/",
  "tutorial": "https://cassandra.apache.org/doc/latest/cassandra/getting-started/quickstart.html",
  "added": "2026-06-08",
  "eli5": "A filing cabinet spread across many rooms — still works if one room burns down.",
  "dex": 75
 },
 {
  "id": "aws-dynamodb",
  "name": "AWS DynamoDB",
  "category": "Platform",
  "domain": "Database",
  "description": "AWS-managed serverless NoSQL key-value and document database. Single-digit millisecond latency at any scale. No servers to manage; capacity auto-scales. Pairs with DAX (in-memory cache) for microsecond reads.",
  "use_cases": [
   "Serverless app backends needing predictable low-latency at any scale",
   "Session stores, shopping carts, user preferences (key-value access patterns)",
   "DynamoDB Streams for event-driven triggers to Lambda/Kafka",
   "Global Tables for multi-region active-active replication",
   "Single-table design patterns for complex relational data with access-pattern-first modeling"
  ],
  "used_by": [
   "Amazon",
   "Lyft",
   "Redfin",
   "Samsung",
   "Capital One"
  ],
  "docs": "https://docs.aws.amazon.com/dynamodb/",
  "tutorial": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html",
  "added": "2026-06-08",
  "eli5": "Amazon's magic filing cabinet that grows automatically and is always fast.",
  "dex": 76
 },
 {
  "id": "cosmos-db",
  "name": "Azure Cosmos DB",
  "category": "Platform",
  "domain": "Database",
  "eli5": "Microsoft's database that works in every country at once and is always fast, no matter where you are.",
  "description": "Microsoft's globally distributed, multi-model NoSQL database. Single-digit millisecond reads and writes anywhere in the world. Multiple APIs: Core SQL, MongoDB, Cassandra, Gremlin, and Table. Turnkey global distribution — add regions with a click.",
  "use_cases": [
   "Global apps needing low-latency reads/writes across multiple regions",
   "Multi-model flexibility: use SQL, MongoDB, or Cassandra API on the same data",
   "IoT telemetry ingestion with automatic partitioning at massive scale",
   "Gaming leaderboards, session state, and personalization at planetary scale",
   "Serverless mode for unpredictable or low-traffic workloads"
  ],
  "used_by": [
   "Microsoft",
   "Coca-Cola",
   "Jet.com",
   "MSN",
   "Nokia"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/cosmos-db/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal",
  "added": "2026-06-08",
  "dex": 77
 },
 {
  "id": "chromadb",
  "name": "ChromaDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "ChromaDB is like a sticky-note board for AI — you paste in documents, it remembers their meaning, and later the AI can find the most relevant ones instantly.",
  "description": "Open-source embedding database designed for LLM applications. Runs in-process or as a server, with a simple Python API for storing, querying, and managing embeddings.",
  "use_cases": [
   "Local RAG prototyping with LLMs",
   "Storing and querying document embeddings",
   "Long-term memory for AI agents",
   "Lightweight vector store for small to mid-scale apps"
  ],
  "used_by": [
   "LangChain (default)",
   "AutoGPT",
   "various LLM app builders"
  ],
  "docs": "https://docs.trychroma.com/",
  "tutorial": "https://docs.trychroma.com/getting-started",
  "added": "2026-06-12",
  "dex": 78
 },
 {
  "id": "clickhouse",
  "name": "ClickHouse",
  "category": "Tool",
  "domain": "Database",
  "description": "Open-source columnar OLAP database for real-time analytical queries. Blazing fast aggregations over billions of rows via vectorized execution and columnar storage. Used where Elasticsearch or Redshift is too slow or expensive.",
  "use_cases": [
   "Real-time analytics dashboards over event/log data (clickstreams, ad metrics)",
   "Log storage and search as a high-performance alternative to Elasticsearch",
   "Time-series aggregation: percentiles, histograms over billions of rows in milliseconds",
   "User-facing analytics (embedded analytics in SaaS products)",
   "ClickHouse Cloud as managed alternative to Snowflake for real-time workloads"
  ],
  "used_by": [
   "Cloudflare",
   "ByteDance",
   "Uber",
   "eBay",
   "Contentsquare",
   "Gitlab"
  ],
  "docs": "https://clickhouse.com/docs/en/intro",
  "tutorial": "https://clickhouse.com/docs/en/getting-started/quick-start",
  "added": "2026-06-08",
  "eli5": "A calculator that sums up billions of numbers in milliseconds.",
  "dex": 79
 },
 {
  "id": "cockroachdb",
  "name": "CockroachDB",
  "category": "Tool",
  "domain": "Database",
  "description": "Cloud-native distributed SQL database combining PostgreSQL compatibility with horizontal scalability and multi-region active-active deployment. Survives node/datacenter failures with zero RPO. Built for global applications that outgrow single-node Postgres.",
  "use_cases": [
   "Global OLTP apps needing Postgres compatibility + horizontal scale",
   "Multi-region deployments with data residency controls (GDPR compliance)",
   "Replacing Postgres when write throughput or availability SLAs exceed single-node limits",
   "Lift-and-shift from Postgres with minimal query changes",
   "Financial systems needing serializable isolation at scale"
  ],
  "used_by": [
   "Bose",
   "Equifax",
   "Netflix",
   "Shipt",
   "SpaceX"
  ],
  "docs": "https://www.cockroachlabs.com/docs/",
  "tutorial": "https://www.cockroachlabs.com/docs/stable/start-a-local-cluster.html",
  "added": "2026-06-08",
  "eli5": "A filing cabinet that keeps working even if half of it is destroyed.",
  "dex": 80
 },
 {
  "id": "duckdb",
  "name": "DuckDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "It's like a tiny, super-fast database that lives in your application instead of on a separate server, perfect for analyzing data quickly without setup.",
  "description": "DuckDB is an in-process SQL OLAP database engine optimized for analytical queries on large datasets with minimal overhead. It provides native support for Parquet, CSV, and other formats, making it ideal for data analysis workflows and embedding in applications.",
  "use_cases": [
   "Fast data analysis and querying on local files and Parquet datasets",
   "Building analytical dashboards and reports without a centralized database",
   "Embedded analytics in applications and Python/R notebooks",
   "Processing and transforming large datasets in data pipelines with minimal resource usage"
  ],
  "used_by": [
   "Evidence",
   "Ibis",
   "data scientists worldwide",
   "analytics companies"
  ],
  "docs": "https://duckdb.org/docs/",
  "tutorial": "https://duckdb.org/docs/guides/index",
  "added": "2026-06-14",
  "dex": 81
 },
 {
  "id": "elasticsearch",
  "name": "Elasticsearch",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Elasticsearch is like a super-fast librarian who can search every word in every book in seconds and tell you exactly which books match your question.",
  "description": "Distributed search and analytics engine built on Apache Lucene. Powers full-text search, log analytics, and observability at scale. Core of the ELK Stack.",
  "use_cases": [
   "Full-text search for applications",
   "Log and metric aggregation (ELK/EFK stack)",
   "E-commerce product search",
   "Security event analytics (SIEM)"
  ],
  "used_by": [
   "Netflix",
   "Uber",
   "GitHub",
   "Wikipedia"
  ],
  "docs": "https://www.elastic.co/guide/en/elasticsearch/reference/current/",
  "tutorial": "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html",
  "added": "2026-06-12",
  "dex": 82
 },
 {
  "id": "etcd",
  "name": "etcd",
  "category": "Tool",
  "domain": "Database",
  "eli5": "It's like a tiny but super reliable address book that everyone in your house checks before doing anything, making sure everyone knows what's happening.",
  "description": "etcd is a distributed, strongly-consistent key-value store used for shared configuration and service discovery in distributed systems. It's the backbone of Kubernetes cluster state management and is critical for maintaining consistency across multiple machines.",
  "use_cases": [
   "Kubernetes cluster state and configuration management",
   "Service discovery in microservices architectures",
   "Distributed locks and leader election",
   "Configuration management for distributed applications"
  ],
  "used_by": [
   "Kubernetes",
   "CoreOS",
   "Red Hat",
   "Cloud Foundry"
  ],
  "docs": "https://etcd.io/docs/",
  "tutorial": "https://etcd.io/docs/v3.5/quickstart/",
  "added": "2026-06-25",
  "dex": 83
 },
 {
  "id": "influxdb",
  "name": "InfluxDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "InfluxDB is like a fitness tracker for your infrastructure — it records millions of measurements per second and lets you query them by time instantly.",
  "description": "Purpose-built time-series database optimized for high-write workloads. Native support for metrics, events, and traces with a SQL-like query language (Flux/InfluxQL).",
  "use_cases": [
   "Infrastructure and application metrics storage",
   "IoT sensor data at high cardinality",
   "Real-time analytics dashboards with Grafana",
   "Financial tick data and market monitoring"
  ],
  "used_by": [
   "Tesla",
   "IBM",
   "Cisco",
   "Hulu"
  ],
  "docs": "https://docs.influxdata.com/influxdb/v2/",
  "tutorial": "https://docs.influxdata.com/influxdb/v2/get-started/",
  "added": "2026-06-14",
  "dex": 84
 },
 {
  "id": "meilisearch",
  "name": "Meilisearch",
  "category": "Tool",
  "domain": "Database",
  "eli5": "It's like a super-fast search box on a website that shows you results as you type, giving you instant answers without making you wait.",
  "description": "Meilisearch is a lightweight, open-source search engine optimized for relevant, typo-tolerant search experiences with minimal configuration. It's widely used in production for product search, documentation search, and real-time filtering.",
  "use_cases": [
   "E-commerce product search and filtering",
   "Documentation and knowledge base search",
   "Real-time search with typo tolerance",
   "Full-text search across application data"
  ],
  "used_by": [
   "Vercel",
   "Mailchimp",
   "Shopify",
   "YCombinator"
  ],
  "docs": "https://docs.meilisearch.com/",
  "tutorial": "https://docs.meilisearch.com/learn/getting_started/installation.html",
  "added": "2026-06-21",
  "dex": 85
 },
 {
  "id": "milvus",
  "name": "Milvus",
  "category": "Platform",
  "domain": "Database",
  "eli5": "It's a super smart filing cabinet that remembers the meaning of things and can instantly find similar items, perfect for AI applications.",
  "description": "Milvus is an open-source vector database designed to store, index, and search vector embeddings at massive scale. It enables semantic search and similarity matching for AI/ML applications, supporting billions of vectors with millisecond latency.",
  "use_cases": [
   "Building semantic search systems for document retrieval",
   "Implementing RAG (Retrieval-Augmented Generation) pipelines for LLMs",
   "Content recommendation engines using embedding similarity",
   "Image and video similarity search at production scale"
  ],
  "used_by": [
   "Shopify",
   "Alibaba",
   "Hugging Face",
   "Alibaba Cloud"
  ],
  "docs": "https://milvus.io/docs",
  "tutorial": "https://milvus.io/docs/quickstart.md",
  "added": "2026-06-14",
  "dex": 86
 },
 {
  "id": "milvus-vector-db",
  "name": "Milvus Vector Database",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Milvus is like a super-smart filing system that finds similar pictures or ideas really fast, instead of looking at every single file one by one.",
  "description": "Milvus is an open-source vector database optimized for similarity search and AI applications, enabling scalable semantic search and retrieval-augmented generation (RAG) systems. It handles billions of vectors with millisecond latency across distributed deployments.",
  "use_cases": [
   "Building RAG (Retrieval-Augmented Generation) systems for LLMs",
   "Semantic search in recommendation systems",
   "Image and video similarity matching at scale",
   "Powering AI-powered search and personalization features"
  ],
  "used_by": [
   "Alibaba",
   "eBay",
   "Shopee",
   "TikTok"
  ],
  "docs": "https://milvus.io/docs",
  "tutorial": "https://milvus.io/docs/quickstart.md",
  "added": "2026-06-29",
  "dex": 87
 },
 {
  "id": "mongodb",
  "name": "MongoDB",
  "category": "Tool",
  "domain": "Database",
  "description": "Leading document-oriented NoSQL database. Stores data as flexible BSON documents (JSON-like). Schema-less by default, enabling rapid iteration. Horizontal sharding, replica sets, and rich aggregation pipeline built-in.",
  "use_cases": [
   "Flexible schema storage for rapidly evolving application data models",
   "Content management: catalogs, user profiles, event logs",
   "Real-time analytics with aggregation pipelines",
   "Geospatial queries with 2dsphere indexes",
   "Atlas Search (Lucene-backed) for full-text search without Elasticsearch",
   "Multi-document ACID transactions for complex business operations"
  ],
  "used_by": [
   "Uber",
   "eBay",
   "Forbes",
   "SEGA",
   "Adobe",
   "Verizon"
  ],
  "docs": "https://www.mongodb.com/docs/",
  "tutorial": "https://www.mongodb.com/docs/manual/tutorial/getting-started/",
  "added": "2026-06-08",
  "eli5": "A junk drawer where you shove data in any shape with no rules.",
  "dex": 88
 },
 {
  "id": "mysql",
  "name": "MySQL",
  "category": "Tool",
  "domain": "Database",
  "description": "World's most popular open-source relational database. Known for reliability, ease of use, and massive ecosystem. Powers much of the web (LAMP stack). InnoDB storage engine provides ACID transactions and row-level locking.",
  "use_cases": [
   "Web application backends (WordPress, Magento, countless SaaS apps)",
   "Read-heavy workloads with read replicas and connection pooling (ProxySQL)",
   "OLTP transactional workloads with InnoDB",
   "MySQL Group Replication / InnoDB Cluster for HA",
   "Managed via AWS RDS, GCP Cloud SQL, PlanetScale"
  ],
  "used_by": [
   "Facebook",
   "Twitter",
   "YouTube",
   "Netflix",
   "Shopify",
   "Booking.com"
  ],
  "docs": "https://dev.mysql.com/doc/",
  "tutorial": "https://dev.mysql.com/doc/mysql-getting-started/en/",
  "added": "2026-06-08",
  "eli5": "The world's most popular filing cabinet for websites.",
  "dex": 89
 },
 {
  "id": "neo4j",
  "name": "Neo4j",
  "category": "Tool",
  "domain": "Database",
  "description": "Leading graph database — stores data as nodes and relationships rather than tables or documents. Cypher query language for expressive graph traversals. Ideal when relationships between entities are as important as the entities themselves.",
  "use_cases": [
   "Fraud detection: identifying suspicious transaction rings and identity clusters",
   "Knowledge graphs and recommendation engines (collaborative filtering)",
   "Network and IT infrastructure dependency mapping",
   "Identity and access management graphs (who has access to what via what path)",
   "Social network analysis and community detection"
  ],
  "used_by": [
   "eBay",
   "Adobe",
   "Airbus",
   "NASA",
   "UBS",
   "Volvo"
  ],
  "docs": "https://neo4j.com/docs/",
  "tutorial": "https://neo4j.com/docs/getting-started/",
  "added": "2026-06-08",
  "eli5": "A map of who knows who — great for tracing connections between things.",
  "dex": 90
 },
 {
  "id": "neon",
  "name": "Neon",
  "category": "Platform",
  "domain": "Database",
  "eli5": "Neon is like a PostgreSQL database that lives in the cloud and automatically grows or shrinks based on how much data you store, so you only pay for what you use.",
  "description": "Neon is a serverless PostgreSQL platform that provides automatic scaling, branching, and managed infrastructure. It offers a developer-friendly alternative to managing PostgreSQL instances with features like instant provisioning and connection pooling.",
  "use_cases": [
   "Building serverless web applications with PostgreSQL",
   "Development and staging database management",
   "Low-cost relational database hosting for startups",
   "Applications requiring automatic scaling without capacity planning"
  ],
  "used_by": [
   "Vercel",
   "Retool",
   "Cal.com",
   "Imploy"
  ],
  "docs": "https://neon.tech/docs/introduction",
  "tutorial": "https://neon.tech/docs/quickstart/console",
  "added": "2026-06-15",
  "dex": 91
 },
 {
  "id": "opensearch",
  "name": "OpenSearch",
  "category": "Tool",
  "domain": "Database",
  "eli5": "OpenSearch is like a free, open version of Elasticsearch — same powerful search engine, but community-owned and without licensing restrictions.",
  "description": "Community-driven fork of Elasticsearch and Kibana, maintained by AWS under the Apache 2.0 license. Provides full-text search, analytics, and observability dashboards.",
  "use_cases": [
   "Log analytics and SIEM (open-source ELK replacement)",
   "Full-text application search",
   "Security analytics and threat detection",
   "Observability dashboards with OpenSearch Dashboards"
  ],
  "used_by": [
   "AWS (Amazon OpenSearch Service)",
   "SAP",
   "Aiven"
  ],
  "docs": "https://opensearch.org/docs/latest/",
  "tutorial": "https://opensearch.org/docs/latest/getting-started/",
  "added": "2026-06-12",
  "dex": 92
 },
 {
  "id": "postgres-ai-extension",
  "name": "pgvector",
  "category": "Tool",
  "domain": "Database",
  "eli5": "pgvector is like giving PostgreSQL the ability to understand pictures and text in a way that helps you find similar things really fast.",
  "description": "pgvector is a PostgreSQL extension enabling vector similarity search and embedding storage directly within the database. It allows AI/ML applications to perform semantic searches without external vector databases.",
  "use_cases": [
   "Semantic search in RAG applications",
   "Recommendation systems based on embeddings",
   "Image and document similarity matching",
   "Hybrid search combining SQL and vector queries"
  ],
  "used_by": [
   "OpenAI",
   "Vercel",
   "Perplexity AI",
   "Supabase"
  ],
  "docs": "https://github.com/pgvector/pgvector",
  "tutorial": "https://supabase.com/docs/guides/database/extensions/pgvector",
  "added": "2026-06-24",
  "dex": 93
 },
 {
  "id": "pinecone",
  "name": "Pinecone",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Pinecone is like a filing cabinet that stores meaning instead of words — you search by describing a concept and it finds everything similar, not just exact matches.",
  "description": "Managed vector database for storing and querying high-dimensional embeddings. Enables semantic search, recommendation engines, and RAG pipelines at scale.",
  "use_cases": [
   "Retrieval-augmented generation (RAG) for LLMs",
   "Semantic similarity search",
   "Recommendation and personalization systems",
   "Image and document similarity matching"
  ],
  "used_by": [
   "Hubspot",
   "Zapier",
   "monday.com",
   "Notion"
  ],
  "docs": "https://docs.pinecone.io/",
  "tutorial": "https://docs.pinecone.io/guides/get-started/quickstart",
  "added": "2026-06-12",
  "dex": 94
 },
 {
  "id": "postgresql",
  "name": "PostgreSQL",
  "category": "Tool",
  "domain": "Database",
  "description": "Advanced open-source relational database with strong ACID compliance, rich SQL support, and an extensible type system. Often called 'the world's most advanced open source database'. Supports JSON, full-text search, geospatial (PostGIS), and custom extensions.",
  "use_cases": [
   "Relational data storage with complex joins, transactions, and constraints",
   "JSONB columns for hybrid relational/document workloads",
   "Full-text search with tsvector/tsquery (no separate search engine needed)",
   "Geospatial queries with PostGIS extension",
   "Time-series data via TimescaleDB extension",
   "Logical replication for read replicas and CDC pipelines"
  ],
  "used_by": [
   "Instagram",
   "Spotify",
   "Reddit",
   "Twitch",
   "Apple",
   "Stripe"
  ],
  "docs": "https://www.postgresql.org/docs/",
  "tutorial": "https://www.postgresql.org/docs/current/tutorial.html",
  "added": "2026-06-08",
  "eli5": "A very organized filing cabinet with strict rules — everything in the right drawer.",
  "dex": 95
 },
 {
  "id": "qdrant",
  "name": "Qdrant",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Qdrant is like a super-smart library that organizes information by meaning instead of alphabetically, so it finds similar ideas really fast.",
  "description": "A vector database optimized for storing and searching high-dimensional embeddings with sub-millisecond latency at scale. It enables similarity search, recommendation systems, and semantic retrieval for AI/ML applications with built-in filtering and scalability.",
  "use_cases": [
   "Powering semantic search and RAG (Retrieval-Augmented Generation) systems",
   "Building recommendation engines based on content similarity",
   "Implementing vector similarity search for image and text matching",
   "Scaling embeddings-based applications from development to production"
  ],
  "used_by": [
   "Booking.com",
   "Activision",
   "Deutsche Bank"
  ],
  "docs": "https://qdrant.tech/documentation/",
  "tutorial": "https://qdrant.tech/documentation/quick-start/",
  "added": "2026-06-27",
  "dex": 96
 },
 {
  "id": "redis",
  "name": "Redis",
  "category": "Tool",
  "domain": "Database",
  "description": "In-memory data structure store used as cache, message broker, and database. Sub-millisecond latency with rich data types (strings, hashes, lists, sets, sorted sets, streams). Persistence via RDB snapshots and AOF log.",
  "use_cases": [
   "Caching: session store, query result cache, CDN token cache",
   "Pub/Sub and lightweight message queuing (Redis Streams for durable queues)",
   "Leaderboards and real-time counters with sorted sets",
   "Distributed locks (Redlock algorithm) for cross-service coordination",
   "Rate limiting with sliding window counters",
   "Vector similarity search (Redis Stack) for AI/ML applications"
  ],
  "used_by": [
   "Twitter",
   "GitHub",
   "Snapchat",
   "Craigslist",
   "Stack Overflow",
   "Pinterest"
  ],
  "docs": "https://redis.io/docs/",
  "tutorial": "https://redis.io/docs/getting-started/",
  "added": "2026-06-08",
  "eli5": "A whiteboard next to your desk — super fast to read but wiped if unplugged.",
  "dex": 97
 },
 {
  "id": "scylladb",
  "name": "ScyllaDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "ScyllaDB is like Cassandra on steroids — it does the same distributed database job but squeezes 10x more speed out of your hardware.",
  "description": "High-performance NoSQL database compatible with Apache Cassandra and DynamoDB APIs. Written in C++ using the Seastar framework for predictable low latency.",
  "use_cases": [
   "High-throughput time-series and IoT data",
   "Drop-in Cassandra replacement for latency-sensitive apps",
   "Ad tech and real-time personalization",
   "Gaming leaderboards and session stores"
  ],
  "used_by": [
   "Discord",
   "Comcast",
   "Palo Alto Networks",
   "FireEye"
  ],
  "docs": "https://docs.scylladb.com/",
  "tutorial": "https://docs.scylladb.com/stable/getting-started/",
  "added": "2026-06-12",
  "dex": 98
 },
 {
  "id": "sql",
  "name": "SQL",
  "category": "Language",
  "domain": "Database",
  "eli5": "A way to ask questions to a database, like 'show me all red toys sorted by size'.",
  "description": "Structured Query Language — the universal language for querying and manipulating relational databases. Declarative: you describe what you want, the database engine figures out how. Every major database (Postgres, MySQL, Snowflake, BigQuery) speaks SQL.",
  "use_cases": [
   "Querying, filtering, and aggregating data with SELECT, WHERE, GROUP BY",
   "Joining multiple tables to answer cross-entity questions",
   "Data transformation and reporting in warehouses (Snowflake, BigQuery, Redshift)",
   "Schema definition and migrations with DDL (CREATE, ALTER, DROP)",
   "Analytics engineering with dbt — models are just SQL SELECT statements"
  ],
  "used_by": [
   "Every company that stores data"
  ],
  "docs": "https://www.postgresql.org/docs/current/sql.html",
  "tutorial": "https://sqlzoo.net/wiki/SQL_Tutorial",
  "added": "2026-06-08",
  "dex": 99
 },
 {
  "id": "supabase",
  "name": "Supabase",
  "category": "Platform",
  "domain": "Database",
  "eli5": "Supabase is like Firebase but built on Postgres — you get a real database, auto-generated APIs, auth, and file storage all wired up out of the box.",
  "description": "Open-source Firebase alternative built on PostgreSQL. Provides auto-generated REST and GraphQL APIs, realtime subscriptions, auth, edge functions, and S3-compatible storage.",
  "use_cases": [
   "Full-stack apps with instant REST/GraphQL APIs",
   "Realtime collaboration features via Postgres replication",
   "Auth with social login, MFA, and RLS policies",
   "Self-hostable Firebase replacement"
  ],
  "used_by": [
   "Mozilla",
   "PwC",
   "Pika",
   "Mobbin"
  ],
  "docs": "https://supabase.com/docs",
  "tutorial": "https://supabase.com/docs/guides/getting-started",
  "added": "2026-06-14",
  "dex": 100
 },
 {
  "id": "surrealdb",
  "name": "SurrealDB",
  "category": "Platform",
  "domain": "Database",
  "eli5": "SurrealDB is like a super-smart filing cabinet that can store and find information using different languages and works everywhere from your phone to the cloud.",
  "description": "SurrealDB is a multi-model, edge-first database that supports SQL queries, graph relationships, and document storage all in one. It can run from the edge to cloud deployments with built-in authentication and real-time capabilities.",
  "use_cases": [
   "Building edge-first applications with offline-first sync",
   "Graph-based relationship queries on document data",
   "Real-time collaborative applications",
   "IoT and mobile backend with cloud synchronization"
  ],
  "used_by": [
   "Datadog",
   "Freshworks",
   "Roblox",
   "Twitch"
  ],
  "docs": "https://surrealdb.com/docs",
  "tutorial": "https://surrealdb.com/learn",
  "added": "2026-06-18",
  "dex": 101
 },
 {
  "id": "tidb",
  "name": "TiDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "TiDB is like MySQL that never runs out of space — it automatically splits your data across many machines as it grows, with no downtime.",
  "description": "Open-source distributed SQL database compatible with MySQL protocol. Combines OLTP and OLAP in one system (HTAP), with horizontal scaling and strong consistency.",
  "use_cases": [
   "MySQL-compatible workloads that outgrow a single node",
   "HTAP: mixed analytical + transactional queries",
   "Financial applications requiring strong consistency",
   "Replacing sharded MySQL with a single endpoint"
  ],
  "used_by": [
   "PingCAP",
   "Shopee",
   "Square",
   "ZaloPay"
  ],
  "docs": "https://docs.pingcap.com/tidb/stable",
  "tutorial": "https://docs.pingcap.com/tidb/stable/quick-start-with-tidb",
  "added": "2026-06-14",
  "dex": 102
 },
 {
  "id": "timescaledb",
  "name": "TimescaleDB",
  "category": "Tool",
  "domain": "Database",
  "eli5": "TimescaleDB is like a regular notebook that got a special time-travel index — it can flip to any date's entries instantly without flipping through every page.",
  "description": "PostgreSQL extension purpose-built for time-series data. Adds automatic partitioning (hypertables), continuous aggregates, and compression while staying fully SQL-compatible.",
  "use_cases": [
   "IoT sensor data storage and querying",
   "Financial tick data and OHLCV aggregation",
   "Infrastructure metrics retention beyond Prometheus",
   "Event logging with complex analytical queries"
  ],
  "used_by": [
   "Hubspot",
   "Outbrain",
   "Teleport",
   "Volvo"
  ],
  "docs": "https://docs.timescale.com/",
  "tutorial": "https://docs.timescale.com/getting-started/latest/",
  "added": "2026-06-11",
  "dex": 103
 },
 {
  "id": "vitess",
  "name": "Vitess",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Vitess is like a smart traffic director for MySQL — it splits one giant database across many servers and makes them look like one to your app.",
  "description": "Database clustering system for horizontal scaling of MySQL. Provides sharding, connection pooling, and query routing. Powers YouTube's database layer.",
  "use_cases": [
   "Horizontal sharding for MySQL at scale",
   "Connection pooling to reduce MySQL overhead",
   "Zero-downtime schema migrations",
   "Multi-region MySQL topologies"
  ],
  "used_by": [
   "YouTube",
   "Slack",
   "GitHub",
   "Square"
  ],
  "docs": "https://vitess.io/docs/",
  "tutorial": "https://vitess.io/docs/get-started/local/",
  "added": "2026-06-12",
  "dex": 104
 },
 {
  "id": "weaviate",
  "name": "Weaviate",
  "category": "Tool",
  "domain": "Database",
  "eli5": "Weaviate is a database that understands meaning — you can store objects and search by what they're about, not just by their exact words.",
  "description": "Open-source vector database with built-in ML model inference. Supports hybrid search (vector + keyword), GraphQL API, and multi-tenancy for AI-native applications.",
  "use_cases": [
   "Semantic search over documents and images",
   "RAG pipelines with built-in embedding models",
   "Hybrid vector + BM25 search",
   "Multi-tenant AI applications"
  ],
  "used_by": [
   "Stack Overflow",
   "Instabase",
   "AstraZeneca"
  ],
  "docs": "https://weaviate.io/developers/weaviate",
  "tutorial": "https://weaviate.io/developers/weaviate/quickstart",
  "added": "2026-06-12",
  "dex": 105
 },
 {
  "id": "anthropic-claude",
  "name": "Anthropic Claude",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Claude is like a very smart robot friend you can talk to through code to ask questions, write things, or solve problems.",
  "description": "Claude is a large language model API by Anthropic that provides state-of-the-art natural language understanding and generation capabilities. It's widely used for building AI-powered applications, content generation, code analysis, and conversational interfaces.",
  "use_cases": [
   "Building AI chatbots and conversational assistants",
   "Code generation and software development assistance",
   "Content creation and summarization",
   "Automated code review and analysis"
  ],
  "used_by": [
   "Notion",
   "DuckDuckGo",
   "Bridgewater Associates",
   "Canva"
  ],
  "docs": "https://docs.anthropic.com/",
  "tutorial": "https://docs.anthropic.com/quickstart",
  "added": "2026-06-15",
  "dex": 106
 },
 {
  "id": "anthropic-claude-tokens",
  "name": "Anthropic Claude Tokens",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Claude Tokens are like coins you spend to use Claude's brain to read and write things for you.",
  "description": "A token-based billing and usage system for Anthropic's Claude API, enabling developers to measure and optimize API consumption. Tokens represent units of text processed by Claude models, with distinct pricing for input and output tokens.",
  "use_cases": [
   "Cost tracking and optimization for large-scale Claude API deployments",
   "Implementing token budgets and rate limiting in multi-tenant applications",
   "Monitoring API usage patterns and forecasting costs",
   "Building cost-aware applications that adapt query complexity based on token budgets"
  ],
  "used_by": [
   "Notion",
   "DuckDuckGo",
   "Zapier"
  ],
  "docs": "https://docs.anthropic.com/en/docs/about-claude/models/overview",
  "tutorial": "https://docs.anthropic.com/en/docs/guides/tokens",
  "added": "2026-06-27",
  "dex": 107
 },
 {
  "id": "anthropic-tokens",
  "name": "Anthropic Tokens",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "It's like buying game tokens at an arcade—you pay for how many words Claude reads and writes, not a monthly pass.",
  "description": "Anthropic's token-based pricing and usage system for Claude API, allowing granular billing based on input and output tokens consumed. It enables developers to optimize costs while managing model usage at scale.",
  "use_cases": [
   "Cost optimization for high-volume API applications",
   "Fine-tuned billing allocation across teams and projects",
   "Budgeting and forecasting for AI infrastructure",
   "Usage monitoring and quota management"
  ],
  "used_by": [
   "Scale AI",
   "Notion",
   "DuckDuckGo"
  ],
  "docs": "https://docs.anthropic.com/en/docs/resources/tokens",
  "tutorial": "https://docs.anthropic.com/en/docs/build-a-chatbot-with-claude",
  "added": "2026-06-26",
  "dex": 108
 },
 {
  "id": "bentoml",
  "name": "BentoML",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "BentoML is like a shipping container for ML models — it packages your model with everything it needs so it runs the same way everywhere.",
  "description": "Framework for building, shipping, and scaling AI applications. Turns any ML model into a production-ready API with batching, runners, and cloud deployment built in.",
  "use_cases": [
   "Packaging models as REST/gRPC inference APIs",
   "Adaptive batching for throughput optimization",
   "Multi-model inference pipelines",
   "Deploying to Kubernetes, AWS, or GCP"
  ],
  "used_by": [
   "Baidu",
   "trivago",
   "Picsellia"
  ],
  "docs": "https://docs.bentoml.com/",
  "tutorial": "https://docs.bentoml.com/en/latest/get-started/quickstart.html",
  "added": "2026-06-12",
  "dex": 109
 },
 {
  "id": "anthropic-claude-api",
  "name": "Claude API",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "It's like having a very smart helper that can read and write things for you, similar to how a teacher can explain homework or write a summary.",
  "description": "Anthropic's Claude API provides access to advanced large language models through a REST API for building AI-powered applications. It's widely used for content generation, code assistance, and complex reasoning tasks in production systems.",
  "use_cases": [
   "Building AI chatbots and virtual assistants",
   "Code generation and technical documentation",
   "Content analysis and document summarization",
   "Complex reasoning and problem-solving automation"
  ],
  "used_by": [
   "DuckDuckGo",
   "Slack",
   "Notion",
   "Figma"
  ],
  "docs": "https://docs.anthropic.com/",
  "tutorial": "https://docs.anthropic.com/en/docs/quickstart",
  "added": "2026-06-21",
  "dex": 110
 },
 {
  "id": "anthropic-claude-sonnet",
  "name": "Claude Sonnet",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Claude Sonnet is like having a super-smart robot assistant that can read long documents and answer questions about them really quickly.",
  "description": "Claude Sonnet is Anthropic's fastest and most compact large language model, optimized for high-throughput tasks and extended context windows. It balances speed and capability for production AI applications requiring rapid inference and cost efficiency.",
  "use_cases": [
   "Real-time customer support chatbots",
   "Batch document analysis and summarization",
   "Code generation and technical documentation",
   "Content moderation at scale"
  ],
  "used_by": [
   "DuckDuckGo",
   "Notion",
   "Replit",
   "GitLab"
  ],
  "docs": "https://docs.anthropic.com/en/docs/about-claude/models/latest",
  "tutorial": "https://docs.anthropic.com/en/docs/quickstart",
  "added": "2026-06-24",
  "dex": 111
 },
 {
  "id": "cuda",
  "name": "CUDA",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "Like a highway system that lets your graphics card do thousands of math problems at the same time instead of one at a time.",
  "description": "NVIDIA's parallel computing platform and programming model that enables GPU-accelerated computation. Underpins virtually all deep learning training and inference workloads by exposing thousands of GPU cores to general-purpose code.",
  "use_cases": [
   "Accelerate neural network training with GPU parallelism",
   "Run matrix multiplications and tensor operations orders of magnitude faster than CPU",
   "Custom GPU kernels for novel model architectures",
   "Inference acceleration for large language models",
   "Scientific simulations and HPC workloads"
  ],
  "used_by": [
   "OpenAI",
   "Google DeepMind",
   "Meta AI",
   "Hugging Face",
   "NVIDIA"
  ],
  "docs": "https://docs.nvidia.com/cuda/",
  "tutorial": "https://docs.nvidia.com/cuda/cuda-c-programming-guide/",
  "added": "2026-06-10",
  "dex": 112
 },
 {
  "id": "dria",
  "name": "Dria",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Dria is like having a personal assistant that reads through tons of documents and learns facts from them, so it can answer your questions accurately about what it learned.",
  "description": "Dria is a decentralized AI data platform that enables building, managing, and monetizing training datasets for large language models. It combines community contribution with blockchain verification to create high-quality, trustworthy ML datasets.",
  "use_cases": [
   "Creating labeled datasets for fine-tuning domain-specific language models",
   "Crowdsourcing and verifying training data for ML projects",
   "Building high-quality datasets while maintaining data privacy and ownership",
   "Monetizing proprietary data through verified dataset marketplace"
  ],
  "used_by": [
   "OpenAI",
   "Hugging Face",
   "Anthropic partners"
  ],
  "docs": "https://docs.dria.co/",
  "tutorial": "https://docs.dria.co/getting-started",
  "added": "2026-06-22",
  "dex": 113
 },
 {
  "id": "hugging-face",
  "name": "Hugging Face",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "Like GitHub but for AI models — a place where people share, find, and use thousands of ready-made AI brains for free.",
  "description": "Central hub for open-source ML models, datasets, and Spaces (hosted demos). Hosts the Transformers library — the standard API for loading and running pretrained models — plus model cards, leaderboards, and hosted inference.",
  "use_cases": [
   "Browse and download 500k+ pretrained models for NLP, CV, audio",
   "Fine-tune models with the Trainer API and PEFT/LoRA",
   "Host and share ML demos with Gradio Spaces",
   "Dataset versioning and sharing with datasets library",
   "Inference endpoints for serverless model hosting"
  ],
  "used_by": [
   "Google",
   "Meta",
   "Amazon",
   "Microsoft",
   "Mistral AI"
  ],
  "docs": "https://huggingface.co/docs",
  "tutorial": "https://huggingface.co/learn",
  "added": "2026-06-10",
  "dex": 114
 },
 {
  "id": "kubeflow",
  "name": "Kubeflow",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "Kubeflow is like a factory floor for machine learning on Kubernetes — it handles training jobs, experiment tracking, and model serving all in one place.",
  "description": "ML toolkit for Kubernetes that makes deploying scalable ML workflows simple. Includes Pipelines, Training Operator, KServe for model serving, and Katib for hyperparameter tuning.",
  "use_cases": [
   "End-to-end ML pipelines on Kubernetes",
   "Distributed training for PyTorch and TensorFlow",
   "Hyperparameter optimization with Katib",
   "Model serving with KServe"
  ],
  "used_by": [
   "Google",
   "Spotify",
   "Bloomberg",
   "Cisco"
  ],
  "docs": "https://www.kubeflow.org/docs/",
  "tutorial": "https://www.kubeflow.org/docs/started/introduction/",
  "added": "2026-06-12",
  "dex": 115
 },
 {
  "id": "langchain",
  "name": "LangChain",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "A toolbox for connecting an AI brain to the real world — like giving it the ability to search the web, read files, or use a calculator.",
  "description": "Framework for building LLM-powered applications with composable chains, agents, and tool integrations. Provides abstractions for retrieval-augmented generation (RAG), memory, and multi-step agentic workflows across model providers.",
  "use_cases": [
   "Build RAG pipelines connecting LLMs to vector databases",
   "Create autonomous agents that use tools and APIs",
   "Chain multiple LLM calls into structured workflows",
   "Standardize prompt templates and output parsers",
   "Evaluate and trace LLM applications with LangSmith"
  ],
  "used_by": [
   "Airbnb",
   "Elastic",
   "Rakuten",
   "McKinsey",
   "Riot Games"
  ],
  "docs": "https://python.langchain.com/docs/",
  "tutorial": "https://python.langchain.com/docs/tutorials/",
  "added": "2026-06-10",
  "dex": 116
 },
 {
  "id": "langgraph",
  "name": "LangGraph",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "LangGraph is like a flowchart engine for AI — it lets your AI make decisions, use tools, loop back on itself, and hand off to other agents in a controlled way.",
  "description": "Framework for building stateful, multi-step AI agents as directed graphs. Built on LangChain, enables cycles, branching, human-in-the-loop, and multi-agent coordination.",
  "use_cases": [
   "Multi-step AI agents with tool use and memory",
   "Human-in-the-loop approval workflows",
   "Multi-agent systems with supervisor/subagent patterns",
   "Long-running agentic workflows with persistence"
  ],
  "used_by": [
   "LinkedIn",
   "Replit",
   "Elastic",
   "LangChain"
  ],
  "docs": "https://langchain-ai.github.io/langgraph/",
  "tutorial": "https://langchain-ai.github.io/langgraph/tutorials/introduction/",
  "added": "2026-06-14",
  "dex": 117
 },
 {
  "id": "litellm",
  "name": "LiteLLM",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "LiteLLM is like a universal translator that lets you use any AI language model with the same language, switching between them without changing your code.",
  "description": "LiteLLM is a lightweight library that standardizes API calls across major LLM providers (OpenAI, Anthropic, Gemini, Cohere, etc.). It reduces vendor lock-in and simplifies switching between language models.",
  "use_cases": [
   "Building AI applications agnostic to underlying LLM provider",
   "Cost optimization by comparing different model providers",
   "Fallback mechanisms when one provider is unavailable",
   "Load balancing across multiple LLM APIs"
  ],
  "used_by": [
   "Vercel",
   "Mint AI",
   "Composio",
   "Voiceflow"
  ],
  "docs": "https://docs.litellm.ai/",
  "tutorial": "https://docs.litellm.ai/docs/getting_started/quick_start",
  "added": "2026-06-16",
  "dex": 118
 },
 {
  "id": "llamaindex",
  "name": "LlamaIndex",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "LlamaIndex is like a filing system that helps AI read and remember your documents — it indexes them so the AI can find the right info before answering.",
  "description": "Data framework for connecting LLMs to external data sources. Provides tools for ingestion, indexing, and retrieval to build RAG pipelines and AI agents.",
  "use_cases": [
   "Retrieval-augmented generation (RAG) over private docs",
   "Building knowledge assistants over internal wikis",
   "Structured data querying with natural language",
   "Multi-step AI agents with tool use"
  ],
  "used_by": [
   "Replit",
   "MongoDB",
   "Figma",
   "Uber"
  ],
  "docs": "https://docs.llamaindex.ai/",
  "tutorial": "https://docs.llamaindex.ai/en/stable/getting_started/starter_example/",
  "added": "2026-06-12",
  "dex": 119
 },
 {
  "id": "mlflow",
  "name": "MLflow",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "A lab notebook for AI experiments — it automatically records what ingredients you used, what settings you tried, and how well each experiment worked.",
  "description": "Open-source MLOps platform for tracking experiments, packaging models, and managing the ML lifecycle. Provides a UI for comparing runs, a model registry for versioning, and deployment tools across frameworks.",
  "use_cases": [
   "Track hyperparameters, metrics, and artifacts across training runs",
   "Register and version models for staging and production promotion",
   "Reproduce any experiment from stored parameters and code",
   "Serve models with mlflow models serve or to Kubernetes",
   "Integrate with PyTorch, TensorFlow, sklearn, and XGBoost"
  ],
  "used_by": [
   "Databricks",
   "Microsoft",
   "LinkedIn",
   "Accenture",
   "Zillow"
  ],
  "docs": "https://mlflow.org/docs/latest/",
  "tutorial": "https://mlflow.org/docs/latest/getting-started/",
  "added": "2026-06-10",
  "dex": 120
 },
 {
  "id": "mcp",
  "name": "Model Context Protocol",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "It's like a universal translator that lets AI assistants talk to any tool or database, like giving them access to every book in a library instead of just one.",
  "description": "Model Context Protocol (MCP) is an open standard developed by Anthropic that enables AI models to securely interact with external data sources and tools through a standardized interface. It allows seamless integration of context and capabilities into LLM applications.",
  "use_cases": [
   "Connecting AI assistants to enterprise databases and knowledge bases",
   "Building AI-powered code generation tools with access to version control",
   "Creating AI agents that interact with APIs and business systems",
   "Enabling retrieval-augmented generation (RAG) with custom data sources"
  ],
  "used_by": [
   "Anthropic",
   "Integration partners",
   "Enterprise AI teams"
  ],
  "docs": "https://modelcontextprotocol.io/",
  "tutorial": "https://modelcontextprotocol.io/quickstart",
  "added": "2026-06-25",
  "dex": 121
 },
 {
  "id": "mcp-server",
  "name": "Model Context Protocol Server",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "MCP Server is like a translator that lets AI assistants talk to your tools and files just like you do, but in their own language.",
  "description": "The Model Context Protocol (MCP) is an open standard for connecting AI models to external data sources and tools through a unified interface. It enables Claude and other LLMs to safely access databases, APIs, and file systems with standardized communication.",
  "use_cases": [
   "Integrating AI assistants with enterprise databases and knowledge systems",
   "Building secure bridges between LLMs and internal tools without exposing credentials",
   "Creating agentic workflows where AI can read and modify application state",
   "Standardizing how multiple AI services access company data and APIs"
  ],
  "used_by": [
   "Anthropic",
   "Figma",
   "Raycast"
  ],
  "docs": "https://modelcontextprotocol.io/introduction",
  "tutorial": "https://modelcontextprotocol.io/quickstart",
  "added": "2026-06-27",
  "dex": 122
 },
 {
  "id": "mojo",
  "name": "Mojo",
  "category": "Language",
  "domain": "AI/ML",
  "eli5": "It's like Python's faster, stronger older sibling that still feels easy to write but runs super quick.",
  "description": "Mojo is a compiled programming language that combines Python's ease of use with C/C++-level performance, designed specifically for AI and systems programming. It allows developers to write high-performance AI workloads without abandoning Python's simplicity.",
  "use_cases": [
   "High-performance machine learning model inference",
   "Systems programming with Python-like syntax",
   "Numerical computing and scientific simulations",
   "Edge AI and embedded systems optimization"
  ],
  "used_by": [
   "Modular",
   "various AI research labs",
   "performance-critical ML teams"
  ],
  "docs": "https://docs.modular.com/mojo",
  "tutorial": "https://docs.modular.com/mojo/manual/get-started",
  "added": "2026-06-19",
  "dex": 123
 },
 {
  "id": "ollama",
  "name": "Ollama",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Like Docker but for AI models — type one command and a full AI brain runs on your own laptop without sending data to anyone.",
  "description": "CLI tool and local server for running open-source LLMs entirely on your own hardware. Handles model downloads, quantization, and provides an OpenAI-compatible API, making local inference approachable for developers.",
  "use_cases": [
   "Run Llama, Mistral, Gemma locally with one command",
   "Privacy-first AI without data leaving your machine",
   "Offline development and testing of LLM applications",
   "Rapid model switching and comparison",
   "Self-hosted AI for enterprise air-gapped environments"
  ],
  "used_by": [
   "Individual developers",
   "Privacy-focused enterprises",
   "AI hobbyists"
  ],
  "docs": "https://ollama.com/",
  "tutorial": "https://github.com/ollama/ollama",
  "added": "2026-06-10",
  "dex": 124
 },
 {
  "id": "ollama-embed",
  "name": "Ollama Embeddings",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "It's like a translator that turns words into special number patterns that computers understand, so they can find similar ideas quickly.",
  "description": "Ollama provides a simple way to run and embed large language models locally without needing expensive cloud APIs. It enables developers to create semantic search and RAG applications with models like Mistral, Llama, and others running on their own hardware.",
  "use_cases": [
   "Building local semantic search engines",
   "Creating retrieval-augmented generation (RAG) pipelines",
   "Privacy-first chatbot applications",
   "Offline text embedding and similarity matching"
  ],
  "used_by": [
   "Anthropic",
   "Scale AI",
   "Hugging Face"
  ],
  "docs": "https://github.com/ollama/ollama",
  "tutorial": "https://ollama.ai/library",
  "added": "2026-06-28",
  "dex": 125
 },
 {
  "id": "onnx",
  "name": "ONNX",
  "category": "Concept",
  "domain": "AI/ML",
  "eli5": "A universal translator for AI models — lets a model trained in one AI toolkit run in a completely different one without starting over.",
  "description": "Open Neural Network Exchange — an open standard for representing ML models. Enables interoperability between frameworks (PyTorch, TensorFlow, sklearn) and runtimes (ONNX Runtime, TensorRT, CoreML) for portable, optimized inference.",
  "use_cases": [
   "Export PyTorch models and run them with ONNX Runtime for faster CPU inference",
   "Deploy models to edge and mobile (CoreML, TFLite via conversion)",
   "Hardware-agnostic model optimization with ORT execution providers",
   "Cross-framework model sharing and reproducibility",
   "Visualize model graphs with Netron"
  ],
  "used_by": [
   "Microsoft",
   "NVIDIA",
   "Intel",
   "Qualcomm",
   "AMD"
  ],
  "docs": "https://onnx.ai/",
  "tutorial": "https://onnxruntime.ai/docs/get-started/",
  "added": "2026-06-10",
  "dex": 126
 },
 {
  "id": "open-webui",
  "name": "Open WebUI",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "It's like a friendly chat interface where you can talk to different AI assistants, kind of like having multiple tutors you can switch between.",
  "description": "Open WebUI is a self-hosted web interface for interacting with large language models like Ollama, OpenAI, and other LLM providers. It provides a ChatGPT-like experience with features like conversation management, model switching, and local deployment capabilities.",
  "use_cases": [
   "Running private AI chatbots without cloud dependencies",
   "Multi-model LLM experimentation and comparison",
   "Enterprise AI deployments with data privacy requirements",
   "Custom knowledge base integration with document upload"
  ],
  "used_by": [
   "Hugging Face",
   "Replicate",
   "Anyscale",
   "individual ML engineers"
  ],
  "docs": "https://docs.openwebui.com",
  "tutorial": "https://github.com/open-webui/open-webui",
  "added": "2026-06-19",
  "dex": 127
 },
 {
  "id": "openai-api",
  "name": "OpenAI API",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "The OpenAI API is like renting a super-smart brain — your app sends questions or tasks, and it sends back intelligent answers, code, or images.",
  "description": "Cloud API providing access to GPT-4, o1, embeddings, image generation (DALL-E), speech, and fine-tuning. The most widely adopted LLM API in production applications.",
  "use_cases": [
   "Chat and assistant features in applications",
   "Code generation and review automation",
   "Embeddings for semantic search and RAG",
   "Structured data extraction from unstructured text"
  ],
  "used_by": [
   "Microsoft",
   "Snap",
   "Salesforce",
   "Duolingo"
  ],
  "docs": "https://platform.openai.com/docs/",
  "tutorial": "https://platform.openai.com/docs/quickstart",
  "added": "2026-06-14",
  "dex": 128
 },
 {
  "id": "pytorch",
  "name": "PyTorch",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "A Lego kit for building and training AI brains — you snap pieces together and it figures out how to teach itself from examples.",
  "description": "Open-source deep learning framework by Meta AI with dynamic computation graphs and Pythonic ergonomics. The dominant choice for ML research and increasingly for production, powering most frontier model development.",
  "use_cases": [
   "Train large language models and transformers from scratch",
   "Fine-tune pretrained models on custom datasets",
   "Research new architectures with dynamic graphs and eager execution",
   "Multi-GPU and distributed training with FSDP and DDP",
   "Export models to TorchScript or ONNX for deployment"
  ],
  "used_by": [
   "Meta",
   "OpenAI",
   "Hugging Face",
   "Tesla",
   "Microsoft"
  ],
  "docs": "https://pytorch.org/docs/",
  "tutorial": "https://pytorch.org/tutorials/",
  "added": "2026-06-10",
  "dex": 129
 },
 {
  "id": "ray",
  "name": "Ray",
  "category": "Framework",
  "domain": "AI/ML",
  "eli5": "Like a factory manager for AI work — it splits a huge job across many computers and makes sure everything gets done in the right order.",
  "description": "Open-source distributed computing framework for scaling Python and ML workloads from a laptop to a cluster. Core of the Ray AI Runtime (AIR) — includes Ray Train, Tune, Serve, and Data for end-to-end ML pipelines.",
  "use_cases": [
   "Distributed LLM training across hundreds of GPUs",
   "Hyperparameter tuning at scale with Ray Tune",
   "Production model serving with Ray Serve and autoscaling",
   "Parallel data preprocessing pipelines with Ray Data",
   "Reinforcement learning with RLlib"
  ],
  "used_by": [
   "Shopify",
   "Uber",
   "OpenAI",
   "Cohere",
   "Instacart"
  ],
  "docs": "https://docs.ray.io/",
  "tutorial": "https://docs.ray.io/en/latest/ray-overview/getting-started.html",
  "added": "2026-06-10",
  "dex": 130
 },
 {
  "id": "rocm",
  "name": "ROCm",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "AMD's answer to NVIDIA's CUDA — lets you use AMD graphics cards to train and run AI models, like using a different brand of engine in the same race car.",
  "description": "AMD's open-source GPU computing platform, providing a full software stack (HIP, MIOpen, rocBLAS) for running ML workloads on AMD GPUs. HIP allows near-direct CUDA code porting to AMD hardware.",
  "use_cases": [
   "Train PyTorch and TensorFlow models on AMD Instinct GPUs",
   "Port CUDA codebases to AMD hardware with HIP",
   "Run vLLM and Hugging Face models on AMD MI300X clusters",
   "Cost-competitive alternative to NVIDIA for HPC and ML",
   "Open-source ML infrastructure without CUDA vendor lock-in"
  ],
  "used_by": [
   "AMD",
   "Microsoft Azure",
   "Oracle Cloud",
   "HPE",
   "Meta"
  ],
  "docs": "https://rocm.docs.amd.com/",
  "tutorial": "https://rocm.docs.amd.com/en/latest/tutorial/quick-start.html",
  "added": "2026-06-10",
  "dex": 131
 },
 {
  "id": "tensorrt",
  "name": "TensorRT",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "A turbocharger for AI models on NVIDIA GPUs — it restructures and compresses the AI so it runs much faster without losing accuracy.",
  "description": "NVIDIA SDK for high-performance deep learning inference. Optimizes trained models via layer fusion, precision calibration (FP16/INT8), and kernel auto-tuning to minimize latency and maximize GPU throughput at inference time.",
  "use_cases": [
   "Reduce LLM and vision model latency for real-time applications",
   "INT8/FP16 quantization with accuracy calibration",
   "Deploy optimized models to Jetson edge devices",
   "Integrate with Triton for production inference pipelines",
   "Accelerate NLP, CV, and recommendation models"
  ],
  "used_by": [
   "NVIDIA",
   "Tesla",
   "Mercedes-Benz",
   "Salesforce",
   "Adobe"
  ],
  "docs": "https://docs.nvidia.com/deeplearning/tensorrt/",
  "tutorial": "https://docs.nvidia.com/deeplearning/tensorrt/quick-start-guide/",
  "added": "2026-06-10",
  "dex": 132
 },
 {
  "id": "triton-inference-server",
  "name": "Triton Inference Server",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "A professional delivery system for AI models — it takes requests from many users and routes them to the right AI model as fast as possible.",
  "description": "NVIDIA's open-source inference serving platform supporting multiple ML frameworks (TensorRT, PyTorch, ONNX, TensorFlow) with dynamic batching, model ensembles, and GPU/CPU scheduling optimized for production deployments.",
  "use_cases": [
   "Serve multiple model frameworks from a single server",
   "Dynamic batching to maximize GPU throughput",
   "Model ensemble pipelines for multi-stage inference",
   "gRPC and HTTP endpoints with metrics for Prometheus",
   "Model versioning and A/B testing in production"
  ],
  "used_by": [
   "NVIDIA",
   "AWS",
   "Microsoft",
   "Waymo",
   "Comcast"
  ],
  "docs": "https://docs.nvidia.com/deeplearning/triton-inference-server/",
  "tutorial": "https://github.com/triton-inference-server/server/blob/main/docs/getting_started/quickstart.md",
  "added": "2026-06-10",
  "dex": 133
 },
 {
  "id": "vertex-ai",
  "name": "Vertex AI",
  "category": "Platform",
  "domain": "AI/ML",
  "eli5": "Google's AI workshop — a place where you train, test, and deploy machine learning models without managing servers.",
  "description": "GCP's unified ML platform — consolidates AutoML and custom training into one surface. Covers the full ML lifecycle: data prep, training, evaluation, deployment, and monitoring. Integrates with Gemini models, TPUs, and the Vertex AI Model Garden for 100+ foundation models.",
  "use_cases": [
   "Training custom ML models with managed compute (GPUs, TPUs) at scale",
   "Deploying models to managed endpoints with autoscaling and A/B traffic splitting",
   "Vertex AI Pipelines for reproducible MLOps workflows (Kubeflow-based)",
   "Gemini API access and fine-tuning for enterprise LLM applications",
   "Feature Store for sharing, serving, and monitoring ML features across teams"
  ],
  "used_by": [
   "Wayfair",
   "Levi Strauss",
   "Ford",
   "Carrefour",
   "McLaren"
  ],
  "docs": "https://cloud.google.com/vertex-ai/docs",
  "tutorial": "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
  "added": "2026-06-08",
  "dex": 134
 },
 {
  "id": "vllm",
  "name": "vLLM",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "A super-efficient waiter for AI models — it batches everyone's requests together so the AI can answer many people at once instead of one at a time.",
  "description": "High-throughput and memory-efficient LLM inference and serving engine. Uses PagedAttention to manage GPU KV-cache like virtual memory, dramatically increasing serving throughput vs. naive implementations.",
  "use_cases": [
   "Serve open-source LLMs (Llama, Mistral, Qwen) at production scale",
   "OpenAI-compatible API endpoint for self-hosted models",
   "Continuous batching to maximize GPU utilization",
   "Speculative decoding for faster token generation",
   "Multi-LoRA serving to host many fine-tuned model variants on one GPU"
  ],
  "used_by": [
   "Mistral AI",
   "Together AI",
   "Anyscale",
   "Replicate",
   "Nvidia"
  ],
  "docs": "https://docs.vllm.ai/",
  "tutorial": "https://docs.vllm.ai/en/latest/getting_started/quickstart.html",
  "added": "2026-06-10",
  "dex": 135
 },
 {
  "id": "weights-and-biases",
  "name": "Weights & Biases",
  "category": "Tool",
  "domain": "AI/ML",
  "eli5": "Weights & Biases is like a detailed science notebook that automatically records every experiment you run so you can compare what worked and what didn't.",
  "description": "MLOps platform for experiment tracking, model versioning, dataset management, and hyperparameter optimization. Provides dashboards for comparing runs across teams.",
  "use_cases": [
   "Tracking loss curves and metrics across training runs",
   "Hyperparameter sweep automation",
   "Model artifact versioning and registry",
   "Collaborative ML experiment sharing"
  ],
  "used_by": [
   "OpenAI",
   "NVIDIA",
   "Toyota Research",
   "Hugging Face"
  ],
  "docs": "https://docs.wandb.ai/",
  "tutorial": "https://docs.wandb.ai/quickstart",
  "added": "2026-06-11",
  "dex": 136
 },
 {
  "id": "alertmanager",
  "name": "Alertmanager",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "Alertmanager is like the on-call coordinator for your monitoring system — it groups noisy alerts, silences duplicates, and routes them to the right team on Slack or PagerDuty.",
  "description": "Alert routing and management component of the Prometheus ecosystem. Handles deduplication, grouping, silencing, and routing of alerts to receivers like PagerDuty, Slack, and email.",
  "use_cases": [
   "Routing Prometheus alerts to Slack/PagerDuty/email",
   "Deduplicating and grouping related alerts",
   "Silencing alerts during maintenance windows",
   "Inhibiting child alerts when parent is already firing"
  ],
  "used_by": [
   "Anyone running Prometheus",
   "SoundCloud",
   "DigitalOcean"
  ],
  "docs": "https://prometheus.io/docs/alerting/latest/alertmanager/",
  "tutorial": "https://prometheus.io/docs/alerting/latest/configuration/",
  "added": "2026-06-14",
  "dex": 137
 },
 {
  "id": "aws-cloudwatch",
  "name": "AWS CloudWatch",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "AWS CloudWatch — unified observability service for logs, metrics, traces, and alarms across AWS infrastructure. Native integration with every AWS service; single pane of glass for AWS-native monitoring.",
  "use_cases": [
   "Metrics collection and dashboards for EC2, Lambda, RDS, EKS",
   "Log aggregation via CloudWatch Logs and Logs Insights queries",
   "Alarms and auto-scaling triggers on metric thresholds",
   "CloudWatch Container Insights for EKS/ECS workload visibility",
   "Synthetics canaries for endpoint availability monitoring"
  ],
  "used_by": [
   "All AWS customers"
  ],
  "docs": "https://docs.aws.amazon.com/cloudwatch/",
  "tutorial": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingStarted.html",
  "added": "2026-06-08",
  "eli5": "A security camera and alarm system for everything in your AWS house.",
  "dex": 138
 },
 {
  "id": "datadog",
  "name": "Datadog",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "Cloud-scale monitoring and observability SaaS platform. Unified dashboards for metrics, traces, logs, and synthetics across infrastructure, applications, and third-party services. 600+ integrations out of the box.",
  "use_cases": [
   "Infrastructure monitoring: hosts, containers, Kubernetes, serverless",
   "APM with distributed tracing, flame graphs, and service maps",
   "Log Management with live tail, parsing pipelines, and archive to S3",
   "Synthetic monitoring: browser tests and API checks for uptime and performance",
   "Cloud cost monitoring and anomaly detection with Watchdog AI"
  ],
  "used_by": [
   "Peloton",
   "Samsung",
   "Airbnb",
   "Whole Foods",
   "Atlassian"
  ],
  "docs": "https://docs.datadoghq.com/",
  "tutorial": "https://docs.datadoghq.com/getting_started/",
  "added": "2026-06-08",
  "eli5": "A dashboard showing every heartbeat of your apps and servers, all in one place.",
  "dex": 139
 },
 {
  "id": "dynatrace",
  "name": "Dynatrace",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "AI-powered full-stack observability platform. OneAgent auto-instruments hosts, containers, and processes with zero config. Davis AI engine automatically detects anomalies, determines root cause, and pinpoints blast radius — reducing MTTR significantly.",
  "use_cases": [
   "Auto-instrumented APM across microservices, serverless, and mainframes via OneAgent",
   "Davis AI: automated root cause analysis without manual alert correlation",
   "Real user monitoring (RUM) and session replay for web and mobile apps",
   "Kubernetes observability with automatic workload and dependency discovery",
   "Dynatrace Grail for unified metrics, logs, traces, and events in one lakehouse"
  ],
  "used_by": [
   "SAP",
   "Delta Airlines",
   "Lenovo",
   "Lufthansa",
   "BNP Paribas"
  ],
  "docs": "https://docs.dynatrace.com/docs",
  "tutorial": "https://docs.dynatrace.com/docs/get-started",
  "added": "2026-06-08",
  "eli5": "A smart robot that watches your whole app and spots problems before you do.",
  "dex": 140
 },
 {
  "id": "elk-stack",
  "name": "ELK Stack",
  "category": "Tool",
  "domain": "SRE/Observability",
  "description": "Elasticsearch + Logstash + Kibana — the classic open-source log management trio. Elasticsearch indexes and searches logs at scale, Logstash ingests and transforms, Kibana visualizes. Often extended with Beats agents (now Elastic Stack).",
  "use_cases": [
   "Centralized log aggregation from servers, containers, and applications",
   "Full-text search and analysis across billions of log events",
   "Security analytics and SIEM (Elastic Security)",
   "APM (Application Performance Monitoring) via Elastic APM agents",
   "Kibana dashboards for log-driven operational intelligence"
  ],
  "used_by": [
   "LinkedIn",
   "Netflix",
   "Adobe",
   "Microsoft",
   "Walmart"
  ],
  "docs": "https://www.elastic.co/guide/index.html",
  "tutorial": "https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html",
  "added": "2026-06-08",
  "eli5": "A giant diary plus search engine for all your app's log messages.",
  "dex": 141
 },
 {
  "id": "grafana",
  "name": "Grafana",
  "category": "Tool",
  "domain": "SRE/Observability",
  "description": "Open-source analytics and visualization platform. Connects to 150+ data sources (Prometheus, Loki, Tempo, Elasticsearch, CloudWatch) and renders time-series dashboards, logs, and traces in a unified UI.",
  "use_cases": [
   "Building operational dashboards for infrastructure and application metrics",
   "Unified observability: correlate metrics (Prometheus), logs (Loki), traces (Tempo)",
   "Alerting with multi-dimensional rules and on-call routing (Grafana OnCall)",
   "SLO/SLA dashboards with error budget burn rate tracking",
   "Grafana Cloud as managed observability stack (LGTM: Loki, Grafana, Tempo, Mimir)"
  ],
  "used_by": [
   "eBay",
   "PayPal",
   "Bloomberg",
   "Grafana Labs",
   "Salesforce"
  ],
  "docs": "https://grafana.com/docs/grafana/latest/",
  "tutorial": "https://grafana.com/docs/grafana/latest/getting-started/build-first-dashboard/",
  "added": "2026-06-08",
  "eli5": "Pretty charts built from Prometheus's notebook so humans can understand things.",
  "dex": 142
 },
 {
  "id": "grafana-loki",
  "name": "Grafana Loki",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "Loki is like a filing cabinet for all your app logs — it only reads the label on the folder to find them fast, not every single word inside.",
  "description": "Horizontally scalable log aggregation system inspired by Prometheus. Indexes only metadata (labels), not log content, making it far cheaper than full-text search solutions.",
  "use_cases": [
   "Kubernetes pod log aggregation",
   "Correlated log + metric + trace exploration in Grafana",
   "Cost-efficient alternative to Elasticsearch for logs",
   "Long-term log retention with object storage backend"
  ],
  "used_by": [
   "Grafana Labs",
   "Digital Ocean",
   "Gojek",
   "Adidas"
  ],
  "docs": "https://grafana.com/docs/loki/latest/",
  "tutorial": "https://grafana.com/docs/loki/latest/get-started/",
  "added": "2026-06-11",
  "dex": 143
 },
 {
  "id": "grafana-tempo",
  "name": "Grafana Tempo",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "Tempo is like a GPS trip recorder for your requests — it saves every route a request took through your services so you can replay it later.",
  "description": "Scalable, cost-efficient distributed tracing backend that stores traces in object storage and integrates natively with Grafana, Loki, and Prometheus for correlated observability.",
  "use_cases": [
   "Distributed trace storage at scale",
   "Correlating traces with logs and metrics in Grafana",
   "Root cause analysis for latency spikes",
   "OpenTelemetry and Jaeger trace ingestion"
  ],
  "used_by": [
   "Grafana Labs",
   "Shopify",
   "Weaveworks"
  ],
  "docs": "https://grafana.com/docs/tempo/latest/",
  "tutorial": "https://grafana.com/docs/tempo/latest/getting-started/",
  "added": "2026-06-11",
  "dex": 144
 },
 {
  "id": "jaeger",
  "name": "Jaeger",
  "category": "Tool",
  "domain": "SRE/Observability",
  "description": "Open-source distributed tracing platform originally built at Uber. Traces requests across microservices to pinpoint latency bottlenecks and failures. Implements OpenTracing/OpenTelemetry standards. CNCF graduated project.",
  "use_cases": [
   "End-to-end request tracing across microservices to find latency root causes",
   "Service dependency graph visualization from live trace data",
   "Comparing trace samples between deployments for performance regression detection",
   "Identifying slow DB queries and external API calls in distributed flows",
   "Ingesting OTel spans via OTLP protocol"
  ],
  "used_by": [
   "Uber",
   "Red Hat",
   "Ticketmaster",
   "Grafana Labs",
   "Weaveworks"
  ],
  "docs": "https://www.jaegertracing.io/docs/latest/",
  "tutorial": "https://www.jaegertracing.io/docs/latest/getting-started/",
  "added": "2026-06-08",
  "eli5": "A detective that follows a request through all your services to find where it slowed down.",
  "dex": 145
 },
 {
  "id": "new-relic",
  "name": "New Relic",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "Full-stack observability platform with APM, infrastructure monitoring, browser/mobile, logs, and synthetics. NRQL (New Relic Query Language) for ad-hoc telemetry analysis. Offers a generous free tier with 100GB/month data ingest.",
  "use_cases": [
   "APM: transaction traces, error rates, slow query detection across all major languages",
   "Infrastructure monitoring for hosts, Kubernetes, and cloud services",
   "Browser and mobile real-user monitoring (RUM) with Core Web Vitals",
   "NRQL dashboards for custom metric exploration and alerting",
   "OTel-native ingest: send spans and metrics via OTLP without proprietary agents"
  ],
  "used_by": [
   "GitHub",
   "Epic Games",
   "DoorDash",
   "Ticketmaster",
   "Ford"
  ],
  "docs": "https://docs.newrelic.com/",
  "tutorial": "https://docs.newrelic.com/docs/new-relic-solutions/get-started/intro-new-relic/",
  "added": "2026-06-08",
  "eli5": "A doctor for your app — checks its health and explains when and why it got sick.",
  "dex": 146
 },
 {
  "id": "open-source-observability",
  "name": "OpenObservability Alliance",
  "category": "Concept",
  "domain": "SRE/Observability",
  "eli5": "It's like having multiple doctors (logging, metrics, and traces) working together to understand what your app is doing, instead of each one working separately.",
  "description": "The OpenObservability Alliance standardizes open-source observability tools and practices through specifications like OpenTelemetry. It enables unified metrics, logs, and traces collection across distributed systems without vendor lock-in.",
  "use_cases": [
   "Unified observability across microservices architectures",
   "Multi-vendor observability platform integration",
   "Standardized instrumentation across polyglot codebases",
   "Cost-effective observability with open-source tools"
  ],
  "used_by": [
   "Datadog",
   "New Relic",
   "Splunk",
   "Grafana Labs"
  ],
  "docs": "https://openobservability.io/",
  "tutorial": "https://opentelemetry.io/docs/getting-started/",
  "added": "2026-06-26",
  "dex": 147
 },
 {
  "id": "openobserve",
  "name": "OpenObserve",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "It's like a giant notebook that records everything happening in your computer system so you can look back and figure out what went wrong.",
  "description": "OpenObserve is a cloud-native observability platform designed as a lightweight alternative to Elasticsearch for logs, metrics, and traces. It provides high-performance data ingestion and search capabilities with a significantly lower resource footprint.",
  "use_cases": [
   "Centralized log aggregation and analysis across microservices",
   "Real-time monitoring of application performance and infrastructure metrics",
   "Distributed tracing for debugging complex request flows",
   "Cost-effective observability for resource-constrained environments"
  ],
  "used_by": [
   "Cisco",
   "SAP",
   "Broadcom",
   "OpenObserve Community"
  ],
  "docs": "https://openobserve.ai/docs/",
  "tutorial": "https://openobserve.ai/docs/quickstart/",
  "added": "2026-06-17",
  "dex": 148
 },
 {
  "id": "opensearch-dashboards",
  "name": "OpenSearch Dashboards",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "OpenSearch Dashboards is like a control panel with colorful displays that shows you everything happening inside your computer system in real time.",
  "description": "OpenSearch Dashboards is the visualization and exploration platform for OpenSearch, providing real-time insights into logs, metrics, and security data. It enables rapid problem diagnosis and operational intelligence.",
  "use_cases": [
   "Log analysis and troubleshooting",
   "Real-time security monitoring and threat detection",
   "Application performance monitoring and debugging",
   "Business analytics and metrics visualization"
  ],
  "used_by": [
   "Capital One",
   "Cisco",
   "Samsung",
   "Expedia"
  ],
  "docs": "https://opensearch.org/docs/latest/dashboards/",
  "tutorial": "https://opensearch.org/docs/latest/dashboards/get-started/",
  "added": "2026-06-16",
  "dex": 149
 },
 {
  "id": "opentelemetry",
  "name": "OpenTelemetry",
  "category": "Framework",
  "domain": "SRE/Observability",
  "description": "Vendor-neutral observability framework and CNCF standard for generating, collecting, and exporting telemetry (traces, metrics, logs). Single set of APIs and SDKs replaces vendor-specific agents. The future of cloud-native instrumentation.",
  "use_cases": [
   "Instrument apps once with OTel SDK; route to any backend (Jaeger, Tempo, Datadog, Honeycomb)",
   "Auto-instrumentation for popular frameworks (no code changes for basic traces)",
   "OTel Collector as vendor-agnostic telemetry pipeline with processors and exporters",
   "Correlating traces, metrics, and logs via shared trace/span context",
   "Replacing proprietary agents (Datadog, New Relic) to avoid vendor lock-in"
  ],
  "used_by": [
   "Google",
   "Microsoft",
   "Splunk",
   "Datadog",
   "Honeycomb",
   "Grafana Labs"
  ],
  "docs": "https://opentelemetry.io/docs/",
  "tutorial": "https://opentelemetry.io/docs/getting-started/",
  "added": "2026-06-08",
  "eli5": "A universal plug that sends your app's health data to any monitoring tool you like.",
  "dex": 150
 },
 {
  "id": "pagerduty",
  "name": "PagerDuty",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "Incident management and on-call alerting platform. Routes alerts from monitoring tools to the right on-call engineer via phone, SMS, Slack, or push. Manages escalation policies, runbooks, and postmortem workflows.",
  "use_cases": [
   "On-call scheduling with escalation policies and override management",
   "Alert routing from Prometheus, Datadog, CloudWatch, and 700+ integrations",
   "Intelligent alert grouping and noise reduction (Event Intelligence)",
   "Incident timelines, stakeholder communication, and status page updates",
   "Postmortem workflows and SLA/SLO reporting for reliability metrics"
  ],
  "used_by": [
   "GE",
   "Lululemon",
   "Comcast",
   "IBM",
   "Zoom",
   "Slack"
  ],
  "docs": "https://support.pagerduty.com/docs",
  "tutorial": "https://support.pagerduty.com/docs/introduction",
  "added": "2026-06-08",
  "eli5": "An alarm clock that wakes up the right engineer when something breaks at 3am.",
  "dex": 151
 },
 {
  "id": "prometheus",
  "name": "Prometheus",
  "category": "Tool",
  "domain": "SRE/Observability",
  "description": "Open-source metrics monitoring and alerting system. Scrapes time-series metrics from instrumented targets via HTTP pull model. PromQL for powerful dimensional queries. CNCF graduated project; de facto standard for Kubernetes monitoring.",
  "use_cases": [
   "Scraping metrics from apps, Kubernetes nodes, and exporters (node, blackbox, etc.)",
   "PromQL queries for real-time dashboards and alerting rules",
   "Kubernetes cluster monitoring via kube-state-metrics and cAdvisor",
   "Alertmanager integration for routing alerts to PagerDuty, Slack, etc.",
   "Long-term storage via remote_write to Thanos, Cortex, or Mimir"
  ],
  "used_by": [
   "SoundCloud",
   "DigitalOcean",
   "GitLab",
   "Robinhood",
   "Cloudflare"
  ],
  "docs": "https://prometheus.io/docs/introduction/overview/",
  "tutorial": "https://prometheus.io/docs/prometheus/latest/getting_started/",
  "added": "2026-06-08",
  "eli5": "A notebook that writes down how your app is doing every few seconds.",
  "dex": 152
 },
 {
  "id": "quickwit",
  "name": "Quickwit",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "It's like a super-fast library card catalog that can instantly find millions of log entries you're looking for, much faster than searching through boxes of paper.",
  "description": "Quickwit is a cloud-native search and analytics engine optimized for log and trace data with sub-second latency and cost efficiency. It's designed as a lighter alternative to Elasticsearch for organizations seeking lower infrastructure costs.",
  "use_cases": [
   "Searching and analyzing application logs at scale",
   "Real-time distributed tracing and debugging",
   "Cost-effective log aggregation and retention",
   "Security and compliance log analysis"
  ],
  "used_by": [
   "Datadog",
   "Stripe",
   "Segment",
   "Grafana Labs"
  ],
  "docs": "https://quickwit.io/docs/",
  "tutorial": "https://quickwit.io/docs/get-started/",
  "added": "2026-06-21",
  "dex": 153
 },
 {
  "id": "sentry",
  "name": "Sentry",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "Application monitoring platform focused on error tracking and performance. Captures exceptions with full stack traces, breadcrumbs, and user context. Helps developers find, triage, and fix production bugs fast. Open-source core, SaaS or self-hosted.",
  "use_cases": [
   "Real-time error and exception tracking with full stack trace and release attribution",
   "Performance monitoring: transaction traces, slow DB queries, N+1 detection",
   "Source maps for minified JS — see original code in production errors",
   "Release health: crash-free session rate per deploy version",
   "Alerts routed to Slack/PagerDuty with issue deduplication and ownership rules"
  ],
  "used_by": [
   "Cloudflare",
   "Disney",
   "GitHub",
   "Stripe",
   "Atlassian",
   "Microsoft"
  ],
  "docs": "https://docs.sentry.io/",
  "tutorial": "https://docs.sentry.io/platforms/",
  "added": "2026-06-08",
  "eli5": "A bug catcher that tells you exactly when, where, and why your app crashed.",
  "dex": 154
 },
 {
  "id": "splunk",
  "name": "Splunk",
  "category": "Platform",
  "domain": "SRE/Observability",
  "description": "Enterprise platform for searching, monitoring, and analyzing machine-generated data — logs, metrics, events, and traces. SPL (Search Processing Language) for ad-hoc investigation. Dominant in enterprise SIEM and SOC workflows.",
  "use_cases": [
   "Centralized log aggregation and SPL-powered investigation at petabyte scale",
   "SIEM: security event correlation, threat detection, and compliance reporting",
   "IT operations: real-time dashboards and alerting on infrastructure log patterns",
   "Splunk SOAR for automated security incident response playbooks",
   "Observability Cloud (formerly SignalFx) for metrics and APM"
  ],
  "used_by": [
   "Domino's",
   "Carnival",
   "Booz Allen",
   "ING",
   "United States DoD"
  ],
  "docs": "https://docs.splunk.com/Documentation/Splunk",
  "tutorial": "https://docs.splunk.com/Documentation/Splunk/latest/SearchTutorial/WelcometotheSearchTutorial",
  "added": "2026-06-08",
  "eli5": "Google for your logs — find anything in billions of log lines instantly.",
  "dex": 155
 },
 {
  "id": "thanos",
  "name": "Thanos",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "Thanos is like a backup brain for Prometheus — it copies all the metrics to cheap cloud storage and lets multiple Prometheus servers act as one.",
  "description": "Highly available Prometheus setup with long-term storage. Extends Prometheus with global query view, unlimited retention via object storage, and multi-cluster deduplication.",
  "use_cases": [
   "Long-term Prometheus metrics retention (S3/GCS/Azure Blob)",
   "Global query view across multiple Prometheus instances",
   "HA Prometheus with deduplication",
   "Cross-cluster metric federation"
  ],
  "used_by": [
   "Cloudflare",
   "Improbable",
   "Banzai Cloud",
   "Shopify"
  ],
  "docs": "https://thanos.io/tip/thanos/getting-started.md/",
  "tutorial": "https://thanos.io/tip/tutorials/quick-tutorial.md/",
  "added": "2026-06-12",
  "dex": 156
 },
 {
  "id": "victoriametrics",
  "name": "VictoriaMetrics",
  "category": "Tool",
  "domain": "SRE/Observability",
  "eli5": "VictoriaMetrics is like a turbocharged Prometheus that stores way more metrics for way less disk space and doesn't break a sweat under load.",
  "description": "High-performance, cost-efficient time-series database and monitoring solution. Drop-in Prometheus-compatible with 10x better compression and horizontal scalability.",
  "use_cases": [
   "Long-term Prometheus metrics storage",
   "High-cardinality metrics from large Kubernetes clusters",
   "Replacing Thanos/Cortex for simpler HA Prometheus",
   "Multi-tenant monitoring platforms"
  ],
  "used_by": [
   "Grammarly",
   "Adidas",
   "Wix",
   "Roblox"
  ],
  "docs": "https://docs.victoriametrics.com/",
  "tutorial": "https://docs.victoriametrics.com/quick-start/",
  "added": "2026-06-12",
  "dex": 157
 },
 {
  "id": "aws-kms",
  "name": "AWS KMS",
  "category": "Platform",
  "domain": "Security",
  "description": "AWS Key Management Service — managed service for creating and controlling encryption keys. Integrates with nearly every AWS service for envelope encryption. Keys never leave HSM hardware unencrypted.",
  "use_cases": [
   "Envelope encryption for S3, EBS, RDS, DynamoDB, Secrets Manager",
   "Customer-managed keys (CMKs) for compliance and auditability",
   "Signing and verification (asymmetric keys) for JWT, code signing",
   "Cross-account and cross-region key policies",
   "CloudTrail audit trail for every key usage event"
  ],
  "used_by": [
   "All regulated-industry AWS customers",
   "Financial services",
   "Healthcare companies"
  ],
  "docs": "https://docs.aws.amazon.com/kms/",
  "tutorial": "https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html",
  "added": "2026-06-08",
  "eli5": "A bank vault for your secret keys — lets you use them but never hands them over.",
  "dex": 158
 },
 {
  "id": "cerbos",
  "name": "Cerbos",
  "category": "Tool",
  "domain": "Security",
  "eli5": "It's like a security guard at a theme park who checks your ticket and decides which rides you're allowed to go on based on the rules.",
  "description": "Cerbos is an open-source, language-agnostic authorization engine that separates access control logic from application code. It enables fine-grained, policy-based authorization across microservices and cloud applications.",
  "use_cases": [
   "Implementing role-based and attribute-based access control",
   "Centralizing authorization policies across microservices",
   "Managing complex permission hierarchies and relationships",
   "Enforcing compliance and audit requirements"
  ],
  "used_by": [
   "Cerbos Enterprise",
   "Cerbos Cloud",
   "GitBook",
   "AppDirect"
  ],
  "docs": "https://docs.cerbos.dev/",
  "tutorial": "https://docs.cerbos.dev/cerbos/latest/get-started",
  "added": "2026-06-21",
  "dex": 159
 },
 {
  "id": "cert-manager",
  "name": "cert-manager",
  "category": "Tool",
  "domain": "Security",
  "description": "Kubernetes-native certificate management controller. Automatically provisions, rotates, and renews TLS certificates from ACME (Let's Encrypt), Vault, Venafi, or self-signed CAs. Eliminates manual cert rotation toil in Kubernetes clusters.",
  "use_cases": [
   "Automatic Let's Encrypt TLS certificates for Ingress resources (HTTP-01/DNS-01 challenge)",
   "Vault PKI integration for internal mTLS certificates across services",
   "Automatic cert rotation before expiry — no more expired cert incidents",
   "Issuing certificates for Istio/SPIFFE workload identity via external issuers",
   "Wildcard and SAN certificates for multi-domain Kubernetes workloads"
  ],
  "used_by": [
   "Widely adopted across Kubernetes-based platforms and cloud-native stacks"
  ],
  "docs": "https://cert-manager.io/docs/",
  "tutorial": "https://cert-manager.io/docs/tutorials/acme/nginx-ingress/",
  "added": "2026-06-08",
  "eli5": "A robot that renews your HTTPS padlock automatically before it ever expires.",
  "dex": 160
 },
 {
  "id": "checkov",
  "name": "Checkov",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Checkov is like a building code inspector for your infrastructure files — it reads your Terraform and Kubernetes configs before you deploy and flags anything unsafe.",
  "description": "Static analysis tool for IaC security and compliance. Scans Terraform, CloudFormation, Kubernetes, Helm, and Dockerfiles against 1000+ built-in security and compliance checks.",
  "use_cases": [
   "IaC security scanning in CI/CD",
   "CIS benchmark compliance for cloud configs",
   "Detecting misconfigurations before deployment",
   "HIPAA, SOC2, PCI policy enforcement on infra code"
  ],
  "used_by": [
   "Bridgecrew (Palo Alto)",
   "Wix",
   "Etsy",
   "Monday.com"
  ],
  "docs": "https://www.checkov.io/1.Welcome/What%20is%20Checkov.html",
  "tutorial": "https://www.checkov.io/1.Welcome/Quick%20Start.html",
  "added": "2026-06-14",
  "dex": 161
 },
 {
  "id": "cosign",
  "name": "Cosign",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Cosign is like a digital wax seal for container images — it proves the image you're running is exactly what the publisher shipped and nobody tampered with it.",
  "description": "Container image signing and verification tool from the Sigstore project. Enables keyless signing via OIDC, attestation storage in OCI registries, and supply chain security.",
  "use_cases": [
   "Signing container images in CI/CD pipelines",
   "Verifying image provenance before deployment",
   "Keyless signing with GitHub Actions OIDC",
   "SLSA attestation and SBOM attachment"
  ],
  "used_by": [
   "Chainguard",
   "Google",
   "Red Hat",
   "GitHub"
  ],
  "docs": "https://docs.sigstore.dev/cosign/overview/",
  "tutorial": "https://docs.sigstore.dev/cosign/signing/quickstart/",
  "added": "2026-06-12",
  "dex": 162
 },
 {
  "id": "falco",
  "name": "Falco",
  "category": "Tool",
  "domain": "Security",
  "description": "Cloud-native runtime security tool by Sysdig. Uses eBPF/kernel module to detect anomalous behavior in containers and Kubernetes at the syscall level — privilege escalation, unexpected network connections, file writes to sensitive paths. CNCF graduated.",
  "use_cases": [
   "Detecting container escape attempts and privilege escalation at runtime",
   "Alerting on unexpected shell spawns inside production containers",
   "Kubernetes audit log monitoring for suspicious API server activity",
   "Compliance: detecting access to sensitive files (SSH keys, /etc/passwd)",
   "Integration with SIEM/SOAR via Falcosidekick for alert fanout"
  ],
  "used_by": [
   "Shopify",
   "Booz Allen Hamilton",
   "GitLab",
   "Randstad",
   "Sysdig"
  ],
  "docs": "https://falco.org/docs/",
  "tutorial": "https://falco.org/docs/getting-started/",
  "added": "2026-06-08",
  "eli5": "A smoke detector for containers — screams if something suspicious happens inside.",
  "dex": 163
 },
 {
  "id": "hashicorp-vault",
  "name": "HashiCorp Vault",
  "category": "Tool",
  "domain": "Security",
  "description": "Secrets management and data protection platform. Centrally store, access, and distribute secrets (API keys, passwords, certs) with fine-grained policies and full audit logging. Dynamic secrets eliminate long-lived credentials.",
  "use_cases": [
   "Dynamic secrets: on-demand, short-lived DB credentials and cloud IAM tokens",
   "PKI as a service: issue and rotate TLS certificates automatically",
   "Kubernetes auth: pods authenticate with ServiceAccount tokens to get secrets",
   "Encryption as a service (Transit engine) without exposing keys to apps",
   "Secret leasing and renewal with automatic revocation on expiry"
  ],
  "used_by": [
   "Adobe",
   "Capital One",
   "Twitch",
   "Barclays",
   "Cisco"
  ],
  "docs": "https://developer.hashicorp.com/vault/docs",
  "tutorial": "https://developer.hashicorp.com/vault/tutorials/getting-started",
  "added": "2026-06-08",
  "eli5": "A really secure safe for all your passwords — only gives them to people it trusts.",
  "dex": 164
 },
 {
  "id": "infisical",
  "name": "Infisical",
  "category": "Platform",
  "domain": "Security",
  "eli5": "It's like a locked safe for all your passwords and secret codes that your applications can grab whenever they need them, but only the apps you trust.",
  "description": "Infisical is an open-source secrets management platform that stores, encrypts, and syncs environment variables and secrets across development, staging, and production environments. It provides a centralized alternative to HashiCorp Vault with simpler setup and team collaboration features.",
  "use_cases": [
   "Managing API keys and database passwords across CI/CD pipelines",
   "Syncing secrets to Kubernetes clusters and serverless functions",
   "Preventing secrets from being committed to version control",
   "Auditing and rotating credentials across multiple environments"
  ],
  "used_by": [
   "Shopify",
   "Figma",
   "Mercury",
   "Zapier"
  ],
  "docs": "https://infisical.com/docs",
  "tutorial": "https://infisical.com/docs/getting-started/introduction",
  "added": "2026-06-14",
  "dex": 165
 },
 {
  "id": "kyverno",
  "name": "Kyverno",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Kyverno is like a strict school hall monitor for Kubernetes — it checks every deployment against the rules and turns away anything that breaks them.",
  "description": "Kubernetes-native policy engine that validates, mutates, and generates resources using policies written as Kubernetes resources — no Rego required.",
  "use_cases": [
   "Enforcing pod security standards",
   "Auto-injecting labels and sidecars",
   "Blocking privileged containers in CI/CD",
   "Generating default NetworkPolicies"
  ],
  "used_by": [
   "Fidelity",
   "CNCF projects",
   "Rabobank",
   "Vodafone"
  ],
  "docs": "https://kyverno.io/docs/",
  "tutorial": "https://kyverno.io/docs/installation/",
  "added": "2026-06-11",
  "dex": 166
 },
 {
  "id": "mitmproxy",
  "name": "mitmproxy",
  "category": "Tool",
  "domain": "Security",
  "eli5": "mitmproxy is like a mail inspector that can read and modify letters going between two people before delivering them, for testing and debugging.",
  "description": "mitmproxy is an interactive HTTPS/HTTP proxy that allows developers to inspect, modify, and replay network traffic for debugging, testing, and security analysis. It's essential for API testing and understanding application behavior.",
  "use_cases": [
   "API endpoint debugging and testing",
   "Mobile app network traffic inspection",
   "Security testing and vulnerability scanning",
   "Request/response modification for testing edge cases"
  ],
  "used_by": [
   "Uber",
   "Airbnb",
   "Slack",
   "Square"
  ],
  "docs": "https://docs.mitmproxy.org/",
  "tutorial": "https://docs.mitmproxy.org/stable/overview-getting-started/",
  "added": "2026-06-16",
  "dex": 167
 },
 {
  "id": "opa",
  "name": "Open Policy Agent (OPA)",
  "category": "Tool",
  "domain": "Security",
  "description": "General-purpose policy engine that decouples policy decisions from application logic. Policies written in Rego language. Used as Kubernetes admission controller, API gateway authorizer, and Terraform plan enforcer. CNCF graduated.",
  "use_cases": [
   "Kubernetes admission control: block non-compliant resources before they land (via Gatekeeper)",
   "API authorization: fine-grained, attribute-based access control for microservices",
   "Terraform plan policy enforcement (Conftest) before infrastructure changes",
   "Data masking and row-level filtering in data access layers",
   "Centralized policy management across heterogeneous systems"
  ],
  "used_by": [
   "Netflix",
   "Pinterest",
   "Goldman Sachs",
   "Capital One",
   "Atlassian"
  ],
  "docs": "https://www.openpolicyagent.org/docs/latest/",
  "tutorial": "https://www.openpolicyagent.org/docs/latest/#running-opa",
  "added": "2026-06-08",
  "eli5": "A rulebook apps must check before doing anything: 'Am I allowed to do this?'",
  "dex": 168
 },
 {
  "id": "rustls",
  "name": "Rustls",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Rustls is like a safer lock for internet messages that's written in a language that prevents accidentally leaving doors open.",
  "description": "Rustls is a modern TLS library written in Rust that provides cryptographic security for network communications without the memory safety vulnerabilities of traditional implementations like OpenSSL. It's becoming the default choice for projects prioritizing both security and performance.",
  "use_cases": [
   "Securing HTTPS connections in web servers and reverse proxies",
   "Protecting gRPC and service-to-service communication",
   "Encrypting database connections and APIs",
   "Building secure networking layers in cloud-native applications"
  ],
  "used_by": [
   "Cloudflare",
   "Mozilla",
   "Brave",
   "Tokio"
  ],
  "docs": "https://docs.rs/rustls/",
  "tutorial": "https://rustls.dev/",
  "added": "2026-06-29",
  "dex": 169
 },
 {
  "id": "semgrep",
  "name": "Semgrep",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Semgrep is like grep but it understands code structure — it finds security bugs and bad patterns that look different on the surface but mean the same dangerous thing.",
  "description": "Fast, open-source static analysis tool for finding bugs and security vulnerabilities. Uses pattern matching on ASTs across 30+ languages, with a large community rule registry.",
  "use_cases": [
   "SAST in CI/CD pipelines",
   "Detecting OWASP Top 10 vulnerabilities",
   "Enforcing custom code standards at scale",
   "Secrets detection and dependency scanning"
  ],
  "used_by": [
   "Dropbox",
   "Figma",
   "Trail of Bits",
   "GitLab"
  ],
  "docs": "https://semgrep.dev/docs/",
  "tutorial": "https://semgrep.dev/docs/getting-started/",
  "added": "2026-06-14",
  "dex": 170
 },
 {
  "id": "sigstore",
  "name": "Sigstore",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Sigstore is like a tamper-evident seal on a package that proves nobody opened it and that it really came from who it says it came from.",
  "description": "Sigstore is a Linux Foundation project that provides free, easy-to-use signing, verification, and transparency for software artifacts. It enables keyless signing using OIDC identity providers, removing the need to manage long-lived cryptographic keys.",
  "use_cases": [
   "Signing and verifying container images and software artifacts",
   "Establishing supply chain security for open-source projects",
   "Auditable software provenance tracking",
   "Keyless signing without managing private keys"
  ],
  "used_by": [
   "Google",
   "Red Hat",
   "GitHub"
  ],
  "docs": "https://docs.sigstore.dev/",
  "tutorial": "https://docs.sigstore.dev/signing/quickstart/",
  "added": "2026-06-15",
  "dex": 171
 },
 {
  "id": "snyk",
  "name": "Snyk",
  "category": "Platform",
  "domain": "Security",
  "description": "Developer-first security platform for finding and fixing vulnerabilities in code, dependencies, containers, and IaC. Integrates into IDEs, CI/CD, and SCM. Prioritizes by exploitability, not just CVSS score.",
  "use_cases": [
   "SCA (Software Composition Analysis): detect vulnerable open-source dependencies",
   "SAST: static code analysis for security issues in first-party code",
   "Container image scanning integrated into Docker build and registry workflows",
   "IaC scanning for Terraform, CloudFormation, and Kubernetes misconfigurations",
   "License compliance checks across the dependency graph"
  ],
  "used_by": [
   "Google",
   "Salesforce",
   "Intuit",
   "MongoDB",
   "Atlassian"
  ],
  "docs": "https://docs.snyk.io/",
  "tutorial": "https://docs.snyk.io/getting-started",
  "added": "2026-06-08",
  "eli5": "A spell-checker for security — finds dangerous ingredients in your code's recipe.",
  "dex": 172
 },
 {
  "id": "sonarqube",
  "name": "SonarQube",
  "category": "Tool",
  "domain": "Security",
  "eli5": "SonarQube is like a spell-checker for your code but also checks for security holes, bad practices, and code smells before you ship anything.",
  "description": "Platform for continuous code quality and security inspection. Detects bugs, vulnerabilities, and code smells across 30+ languages. Integrates into CI/CD pipelines.",
  "use_cases": [
   "Static application security testing (SAST)",
   "Code quality gates in CI/CD",
   "Technical debt tracking across large codebases",
   "Compliance enforcement (OWASP, CERT)"
  ],
  "used_by": [
   "Microsoft",
   "NASA",
   "Bosch",
   "T-Mobile"
  ],
  "docs": "https://docs.sonarsource.com/sonarqube/",
  "tutorial": "https://docs.sonarsource.com/sonarqube/latest/try-out-sonarqube/",
  "added": "2026-06-12",
  "dex": 173
 },
 {
  "id": "step-ca",
  "name": "Step CA",
  "category": "Tool",
  "domain": "Security",
  "eli5": "Step CA is like a trusted teacher who gives out digital ID cards that prove who you are online and makes sure only the right people can talk to each other.",
  "description": "Step Certificates (Step CA) is an open-source online certificate authority that simplifies certificate management and automation for internal infrastructure and applications. It provides easy certificate provisioning, renewal, and revocation without operational complexity.",
  "use_cases": [
   "Internal PKI and certificate management",
   "Mutual TLS (mTLS) authentication",
   "HTTPS certificate automation",
   "Zero-trust security implementations"
  ],
  "used_by": [
   "Google",
   "GitHub",
   "HashiCorp",
   "Smallstep Labs"
  ],
  "docs": "https://smallstep.com/docs/step-ca/",
  "tutorial": "https://smallstep.com/docs/step-ca/getting-started/",
  "added": "2026-06-20",
  "dex": 174
 },
 {
  "id": "teleport",
  "name": "Teleport",
  "category": "Platform",
  "domain": "Security",
  "eli5": "Teleport is like a bouncer at a club who checks IDs and keeps a record of who went where, making sure only the right people access sensitive computers and servers.",
  "description": "Teleport is an identity-native infrastructure access platform that consolidates SSH, Kubernetes, database, and application access under a unified zero-trust framework. It eliminates shared credentials and provides detailed audit logs for compliance and security investigations.",
  "use_cases": [
   "Zero-trust SSH and database access management across infrastructure",
   "Kubernetes cluster access control with audit logging",
   "Just-in-time privilege escalation and access requests",
   "Unified identity and access management for hybrid cloud environments"
  ],
  "used_by": [
   "Stripe",
   "Cloudflare",
   "Figma"
  ],
  "docs": "https://goteleport.com/docs/",
  "tutorial": "https://goteleport.com/docs/getting-started/",
  "added": "2026-06-22",
  "dex": 175
 },
 {
  "id": "torq",
  "name": "Torq",
  "category": "Platform",
  "domain": "Security",
  "eli5": "Torq is like a smart traffic controller for security alerts that automatically decides what to do with them so security teams don't have to handle every single one manually.",
  "description": "Torq is a no-code security automation and orchestration platform that connects security tools and automates incident response workflows. It enables security teams to respond faster to threats by automating repetitive tasks and integrating disparate security systems.",
  "use_cases": [
   "Automating security incident response workflows",
   "Integrating multiple security tools into unified workflows",
   "Enriching and correlating security alerts automatically",
   "Reducing mean time to respond (MTTR) for security incidents"
  ],
  "used_by": [
   "Palo Alto Networks",
   "Accenture",
   "Shopify",
   "Barclays"
  ],
  "docs": "https://docs.torq.io/",
  "tutorial": "https://torq.io/platform-tour/",
  "added": "2026-06-18",
  "dex": 176
 },
 {
  "id": "trivy",
  "name": "Trivy",
  "category": "Tool",
  "domain": "Security",
  "description": "Comprehensive, fast open-source vulnerability and misconfiguration scanner by Aqua Security. Scans container images, filesystems, Git repos, Kubernetes clusters, and IaC files. Single binary, zero config needed.",
  "use_cases": [
   "Container image scanning for OS and language-level CVEs in CI pipelines",
   "IaC misconfiguration scanning for Terraform, Helm, Dockerfile, and Kubernetes manifests",
   "Kubernetes cluster scanning for vulnerabilities in running workloads",
   "SBOM generation (CycloneDX, SPDX) for supply chain compliance",
   "Secret detection in source code and container layers"
  ],
  "used_by": [
   "Aqua Security",
   "AWS",
   "GitLab",
   "GitHub Actions ecosystem"
  ],
  "docs": "https://aquasecurity.github.io/trivy/",
  "tutorial": "https://aquasecurity.github.io/trivy/latest/getting-started/installation/",
  "added": "2026-06-08",
  "eli5": "An X-ray machine for containers that finds hidden diseases (security holes) inside.",
  "dex": 177
 },
 {
  "id": "vault-secrets",
  "name": "Vault (Secrets Management)",
  "category": "Tool",
  "domain": "Security",
  "eli5": "It's like a super-secure safe that only opens when you prove who you are, and it remembers to change the combination automatically.",
  "description": "HashiCorp Vault is an identity-based secrets and encryption management system that centralizes and secures access to secrets, certificates, and encryption keys across distributed infrastructure. It provides dynamic secret generation, encryption-as-a-service, and detailed audit logging.",
  "use_cases": [
   "Managing database credentials and API tokens in production",
   "Generating dynamic database passwords that rotate automatically",
   "Encrypting sensitive data at rest and in transit",
   "Auditing all access to secrets and compliance reporting"
  ],
  "used_by": [
   "HashiCorp",
   "Google",
   "GitHub",
   "Uber"
  ],
  "docs": "https://www.vaultproject.io/docs",
  "tutorial": "https://learn.hashicorp.com/tutorials/vault/getting-started",
  "added": "2026-06-25",
  "dex": 178
 },
 {
  "id": "wiz",
  "name": "Wiz",
  "category": "Tool",
  "domain": "Security",
  "eli5": "It's like a security guard for your cloud who walks around and checks every corner to make sure nothing dangerous was left behind or forgotten.",
  "description": "Wiz is a cloud security platform that provides runtime threat detection, vulnerability management, and compliance monitoring across multi-cloud environments. It uses runtime intelligence to identify and prioritize security risks in cloud workloads and infrastructure.",
  "use_cases": [
   "Detecting and remediating cloud misconfigurations and vulnerabilities in real-time",
   "Identifying runtime threats and anomalous behavior in containerized workloads",
   "Meeting compliance requirements across AWS, Azure, and GCP environments",
   "Prioritizing security issues based on actual runtime context and exploitability"
  ],
  "used_by": [
   "SailPoint",
   "Figma",
   "Canva",
   "Scale AI"
  ],
  "docs": "https://docs.wiz.io/",
  "tutorial": "https://docs.wiz.io/wiz-docs/docs/getting-started",
  "added": "2026-06-14",
  "dex": 179
 },
 {
  "id": "apache-airflow",
  "name": "Apache Airflow",
  "category": "Tool",
  "domain": "Data Engineering",
  "description": "Open-source workflow orchestration platform. Pipelines defined as DAGs in Python — giving full programmatic control over scheduling, branching, retries, and dependencies. De facto standard for data pipeline orchestration.",
  "use_cases": [
   "Orchestrating multi-step ETL/ELT pipelines with dependency-aware scheduling",
   "Triggering Spark jobs, dbt runs, SQL queries, and API calls in sequence",
   "Backfilling historical data runs with date-parameterized DAGs",
   "Dynamic DAG generation for multi-tenant or config-driven pipelines",
   "Managed via MWAA (AWS), Cloud Composer (GCP), or Astronomer"
  ],
  "used_by": [
   "Airbnb",
   "Twitter",
   "Lyft",
   "Robinhood",
   "Adobe",
   "PayPal"
  ],
  "docs": "https://airflow.apache.org/docs/",
  "tutorial": "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html",
  "added": "2026-06-08",
  "eli5": "A chore chart that runs your data jobs in the right order at the right time.",
  "dex": 180
 },
 {
  "id": "apache-beam",
  "name": "Apache Beam",
  "category": "Framework",
  "domain": "Data Engineering",
  "eli5": "Beam is like writing one recipe that works whether you cook on a gas stove, electric, or campfire — your data pipeline runs on Spark, Flink, or Dataflow unchanged.",
  "description": "Unified programming model for batch and streaming data pipelines. Write once, run on any execution engine (Spark, Flink, Google Dataflow) via pluggable runners.",
  "use_cases": [
   "Portable ETL pipelines across multiple runners",
   "Streaming data processing with event-time semantics",
   "ML inference pipelines at scale",
   "Google Dataflow-native batch and stream jobs"
  ],
  "used_by": [
   "Google",
   "LinkedIn",
   "PayPal",
   "Lyft"
  ],
  "docs": "https://beam.apache.org/documentation/",
  "tutorial": "https://beam.apache.org/get-started/wordcount-example/",
  "added": "2026-06-12",
  "dex": 181
 },
 {
  "id": "apache-flink",
  "name": "Apache Flink",
  "category": "Framework",
  "domain": "Data Engineering",
  "eli5": "Flink is like a factory assembly line that processes items the moment they arrive, rather than waiting to collect a big pile before starting.",
  "description": "Distributed stream and batch processing engine with exactly-once semantics, stateful computations, and event-time processing at massive scale.",
  "use_cases": [
   "Real-time fraud detection",
   "Streaming ETL pipelines",
   "Event-driven applications",
   "CDC (change data capture) processing"
  ],
  "used_by": [
   "Alibaba",
   "Netflix",
   "Uber",
   "LinkedIn",
   "AWS"
  ],
  "docs": "https://nightlies.apache.org/flink/flink-docs-stable/",
  "tutorial": "https://nightlies.apache.org/flink/flink-docs-stable/docs/try-flink/local_installation/",
  "added": "2026-06-11",
  "dex": 182
 },
 {
  "id": "apache-iceberg",
  "name": "Apache Iceberg",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Iceberg is like a version-controlled spreadsheet for petabytes of data — you can time-travel to yesterday's data, roll back mistakes, and add columns without breaking anything.",
  "description": "Open table format for huge analytic datasets. Brings ACID transactions, schema evolution, and time-travel queries to data lakes stored in S3, HDFS, or GCS.",
  "use_cases": [
   "ACID transactions on data lake tables",
   "Schema evolution without breaking queries",
   "Time-travel and incremental reads for CDC",
   "Multi-engine interoperability (Spark, Flink, Trino)"
  ],
  "used_by": [
   "Netflix",
   "Apple",
   "LinkedIn",
   "Adobe"
  ],
  "docs": "https://iceberg.apache.org/docs/latest/",
  "tutorial": "https://iceberg.apache.org/spark-quickstart/",
  "added": "2026-06-12",
  "dex": 183
 },
 {
  "id": "parquet",
  "name": "Apache Parquet",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "It's like organizing your toy box by color and size so you can find exactly what you need without dumping everything out on the floor.",
  "description": "Apache Parquet is a columnar storage format optimized for analytical queries on large datasets. It provides efficient compression, encoding, and nested data support, making it the standard format for data lakes and analytical workloads.",
  "use_cases": [
   "Storing large datasets in cloud data lakes (S3, GCS, Azure)",
   "Improving query performance in analytical databases like BigQuery and Snowflake",
   "Data pipeline processing with Apache Spark and Dask",
   "Cost reduction through better compression and selective column access"
  ],
  "used_by": [
   "Netflix",
   "Uber",
   "Meta",
   "Twitter"
  ],
  "docs": "https://parquet.apache.org/docs/overview/",
  "tutorial": "https://parquet.apache.org/docs/file-format/",
  "added": "2026-06-25",
  "dex": 184
 },
 {
  "id": "apache-spark",
  "name": "Apache Spark",
  "category": "Framework",
  "domain": "Data Engineering",
  "description": "Unified analytics engine for large-scale data processing. In-memory computation makes it 10-100x faster than MapReduce. Supports batch, streaming (Structured Streaming), SQL, ML (MLlib), and graph (GraphX) workloads in one engine.",
  "use_cases": [
   "Large-scale ETL and data transformation across petabytes of data",
   "Structured Streaming for real-time event processing from Kafka",
   "Distributed ML training with MLlib on massive datasets",
   "Interactive SQL analytics via Spark SQL on data lakes (Parquet, Delta, Iceberg)",
   "Graph analytics and iterative algorithms with GraphX"
  ],
  "used_by": [
   "Netflix",
   "Uber",
   "Airbnb",
   "Apple",
   "Microsoft",
   "Databricks"
  ],
  "docs": "https://spark.apache.org/docs/latest/",
  "tutorial": "https://spark.apache.org/docs/latest/quick-start.html",
  "added": "2026-06-08",
  "eli5": "A team of workers that splits a huge data pile and processes all of it at once.",
  "dex": 185
 },
 {
  "id": "axle",
  "name": "Axle",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Axle is like a smart librarian that automatically organizes and transforms messy data into neat, usable formats without you having to write complicated instructions.",
  "description": "Axle is a data integration and transformation platform that uses AI to automatically generate data pipelines and mappings. It reduces the time needed to build ETL workflows by intelligently understanding data schemas and relationships.",
  "use_cases": [
   "Automated data pipeline generation between disparate data sources",
   "Schema mapping and data transformation without manual coding",
   "Data quality monitoring and anomaly detection",
   "Cross-platform data integration for enterprise systems"
  ],
  "used_by": [
   "Databricks",
   "Stripe",
   "Notion"
  ],
  "docs": "https://docs.axle.so/",
  "tutorial": "https://axle.so/docs/getting-started",
  "added": "2026-06-22",
  "dex": 186
 },
 {
  "id": "bigquery",
  "name": "BigQuery",
  "category": "Platform",
  "domain": "Data Engineering",
  "eli5": "A Google spreadsheet that holds billions of rows and answers questions about them in seconds.",
  "description": "GCP's serverless, highly scalable data warehouse. Separates compute from storage — pay per query or flat-rate slots. Columnar storage and Dremel execution engine enable sub-second queries over petabyte datasets. Native ML (BigQuery ML), geospatial, and streaming support.",
  "use_cases": [
   "Ad-hoc analytics over petabyte datasets without managing infrastructure",
   "Real-time streaming inserts via BigQuery Storage Write API",
   "BigQuery ML: train and serve ML models with SQL — no Python required",
   "BI dashboards via Looker Studio, Tableau, or Power BI direct connection",
   "Data sharing across organizations via BigQuery Analytics Hub"
  ],
  "used_by": [
   "Twitter",
   "Spotify",
   "The New York Times",
   "Dow Jones",
   "UPS"
  ],
  "docs": "https://cloud.google.com/bigquery/docs",
  "tutorial": "https://cloud.google.com/bigquery/docs/quickstarts/load-data-console",
  "added": "2026-06-08",
  "dex": 187
 },
 {
  "id": "databricks",
  "name": "Databricks",
  "category": "Platform",
  "domain": "Data Engineering",
  "description": "Unified analytics platform built on Apache Spark — combines data engineering, ML training, and SQL analytics in one lakehouse. Runs on AWS, Azure, or GCP. Founded by the creators of Apache Spark.",
  "use_cases": [
   "Large-scale ETL and data transformation pipelines with Delta Lake",
   "Distributed ML model training with MLflow experiment tracking",
   "SQL analytics on data lake via Databricks SQL warehouses",
   "Streaming pipelines with Structured Streaming on Kafka/Kinesis",
   "Unity Catalog for governed, multi-cloud data mesh"
  ],
  "used_by": [
   "Comcast",
   "Regeneron",
   "Shell",
   "Conde Nast",
   "Block"
  ],
  "docs": "https://docs.databricks.com/",
  "tutorial": "https://docs.databricks.com/en/getting-started/index.html",
  "added": "2026-06-08",
  "eli5": "A giant playground where data people crunch huge piles of data together.",
  "dex": 188
 },
 {
  "id": "dbt",
  "name": "dbt",
  "category": "Tool",
  "domain": "Data Engineering",
  "description": "Data Build Tool — SQL-first transformation framework that brings software engineering practices (version control, testing, documentation, modularity) to analytics engineering. Runs inside your data warehouse; no data moves outside.",
  "use_cases": [
   "Transforming raw warehouse data into clean, tested, documented data models",
   "Defining data lineage DAGs with ref() for dependency-aware execution",
   "Testing data quality: not-null, uniqueness, referential integrity, custom assertions",
   "Auto-generating data documentation and lineage graphs from model definitions",
   "dbt Cloud for managed scheduling, CI checks on PRs, and IDE"
  ],
  "used_by": [
   "Spotify",
   "Shopify",
   "HubSpot",
   "GitLab",
   "Conde Nast"
  ],
  "docs": "https://docs.getdbt.com/",
  "tutorial": "https://docs.getdbt.com/guides",
  "added": "2026-06-08",
  "eli5": "A chef that turns raw data ingredients into clean, tested, ready-to-serve dishes.",
  "dex": 189
 },
 {
  "id": "delta-lake",
  "name": "Delta Lake",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Delta Lake is like adding a save history to your data lake — you can undo mistakes, read yesterday's data, and write reliably without corrupting anything.",
  "description": "Open-source storage layer bringing ACID transactions to Apache Spark and big data workloads. Provides time travel, schema enforcement, and unified batch/streaming.",
  "use_cases": [
   "ACID transactions on Spark data lakes",
   "Upserts and deletes on Parquet tables",
   "CDC pipeline targets with merge operations",
   "Data versioning and audit trails"
  ],
  "used_by": [
   "Databricks",
   "Microsoft",
   "Comcast",
   "AT&T"
  ],
  "docs": "https://docs.delta.io/latest/",
  "tutorial": "https://docs.delta.io/latest/quick-start.html",
  "added": "2026-06-12",
  "dex": 190
 },
 {
  "id": "fivetran",
  "name": "Fivetran",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Fivetran is like an automatic conveyor belt that moves data from many different stores into one big warehouse without you having to manually carry each box.",
  "description": "Fivetran is a cloud-native data integration platform that automates ETL/ELT pipelines, connecting hundreds of data sources to cloud data warehouses. It reduces manual data pipeline work and ensures data quality through pre-built connectors.",
  "use_cases": [
   "Consolidating data from SaaS applications into data warehouses",
   "Real-time data synchronization across platforms",
   "Building self-service analytics infrastructure",
   "Enabling DataOps with automated data quality checks"
  ],
  "used_by": [
   "SurveyMonkey",
   "Nextdoor",
   "Notion",
   "Retool"
  ],
  "docs": "https://fivetran.com/docs",
  "tutorial": "https://fivetran.com/docs/getting-started",
  "added": "2026-06-16",
  "dex": 191
 },
 {
  "id": "materialized",
  "name": "Materialize",
  "category": "Platform",
  "domain": "Data Engineering",
  "eli5": "It's like having a smart worker who continuously updates a whiteboard with the latest information from your data streams so you always see what's happening right now.",
  "description": "Materialize is a SQL-powered streaming database that enables real-time analytics by computing incremental views over streaming data. It uses computational differential dataflow to provide low-latency, consistent results for complex analytical queries on continuously changing data.",
  "use_cases": [
   "Real-time analytics dashboards and monitoring systems",
   "Streaming data transformation and enrichment pipelines",
   "Complex event processing and anomaly detection",
   "Building operational intelligence systems from event streams"
  ],
  "used_by": [
   "Figma",
   "Pagerduty",
   "Jamio",
   "Various fintech firms"
  ],
  "docs": "https://materialize.com/docs/",
  "tutorial": "https://materialize.com/docs/get-started/",
  "added": "2026-06-17",
  "dex": 192
 },
 {
  "id": "opensearch-ingestion",
  "name": "OpenSearch Ingestion",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "OpenSearch Ingestion is like a mail sorting center that takes data from lots of different places and organizes it into a searchable library.",
  "description": "OpenSearch Ingestion is a fully managed data collection and processing service that enables users to ingest, parse, and enrich data from multiple sources before indexing into OpenSearch clusters. It simplifies log aggregation and data pipeline construction without managing infrastructure.",
  "use_cases": [
   "Log aggregation from distributed systems",
   "Real-time data enrichment pipelines",
   "Metrics collection from multiple sources",
   "Security event correlation and analysis"
  ],
  "used_by": [
   "Amazon",
   "BMW",
   "Equinix",
   "Overstock"
  ],
  "docs": "https://opensearch.org/docs/latest/data-prepper/",
  "tutorial": "https://opensearch.org/docs/latest/data-prepper/getting-started/",
  "added": "2026-06-20",
  "dex": 193
 },
 {
  "id": "prefect",
  "name": "Prefect",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Prefect is like a smart to-do list manager for your data pipelines — it schedules tasks, retries failures, and tells you exactly what went wrong.",
  "description": "Modern workflow orchestration platform for data pipelines. Python-native, with automatic retries, observability, and a hosted UI. Positioned as a simpler Airflow alternative.",
  "use_cases": [
   "ETL/ELT pipeline orchestration",
   "ML training pipeline scheduling",
   "Data quality checks and alerting",
   "Event-triggered and cron-based data workflows"
  ],
  "used_by": [
   "Doordash",
   "Accenture",
   "Labcorp",
   "Raft"
  ],
  "docs": "https://docs.prefect.io/",
  "tutorial": "https://docs.prefect.io/v3/get-started/quickstart",
  "added": "2026-06-12",
  "dex": 194
 },
 {
  "id": "snowflake",
  "name": "Snowflake",
  "category": "Platform",
  "domain": "Data Engineering",
  "description": "Cloud data warehouse built for the cloud with separate compute and storage. Scales compute instantly per query, enabling concurrent workloads without contention. Supports structured and semi-structured (JSON, Avro, Parquet) data natively.",
  "use_cases": [
   "Enterprise data warehouse replacing on-prem Teradata/Redshift",
   "Data sharing across organizations without copying data (Snowflake Marketplace)",
   "ELT pipelines with dbt transformations on top of raw ingested data",
   "Data lake queries over external S3/GCS/Azure storage via External Tables",
   "Snowpark for Python/Java/Scala data engineering inside Snowflake"
  ],
  "used_by": [
   "Capital One",
   "JetBlue",
   "Instacart",
   "DoorDash",
   "Zoom",
   "Adobe"
  ],
  "docs": "https://docs.snowflake.com/",
  "tutorial": "https://docs.snowflake.com/en/user-guide/tutorials/tasty-bytes-introduction",
  "added": "2026-06-08",
  "eli5": "A shared spreadsheet in the cloud that gets more powerful when you need it.",
  "dex": 195
 },
 {
  "id": "sqlglot",
  "name": "sqlglot",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "It's like a translator that converts recipes written in one restaurant's style into another restaurant's style so both kitchens can cook the same meal.",
  "description": "sqlglot is a SQL parser, transpiler, and optimizer that can parse and generate SQL across different databases (PostgreSQL, BigQuery, Snowflake, etc.). It enables data engineers to write database-agnostic SQL and automatically translate queries between different SQL dialects.",
  "use_cases": [
   "Cross-database query translation and migration",
   "SQL validation and formatting",
   "Query optimization across multiple platforms",
   "Building data pipeline orchestration tools"
  ],
  "used_by": [
   "Databricks",
   "Stripe",
   "dbt Labs"
  ],
  "docs": "https://sqlglot.com/",
  "tutorial": "https://github.com/tobymao/sqlglot",
  "added": "2026-06-28",
  "dex": 196
 },
 {
  "id": "shadowing",
  "name": "Tinybird",
  "category": "Platform",
  "domain": "Data Engineering",
  "eli5": "Tinybird is like a magic notebook that instantly transforms messy notes into beautiful charts and answers questions about what happened, all without waiting.",
  "description": "Tinybird is a serverless real-time analytics platform that ingests, processes, and serves analytics data at scale without infrastructure management. It enables teams to build real-time dashboards and APIs on streaming data with sub-second latency.",
  "use_cases": [
   "Real-time product analytics and dashboards",
   "Building real-time APIs that serve analytics queries",
   "Event streaming analysis and monitoring",
   "Time-series data aggregation without managing databases"
  ],
  "used_by": [
   "Auth0",
   "Vercel",
   "Notion"
  ],
  "docs": "https://www.tinybird.co/docs/",
  "tutorial": "https://www.tinybird.co/docs/concepts/data-sources/",
  "added": "2026-06-15",
  "dex": 197
 },
 {
  "id": "trino",
  "name": "Trino",
  "category": "Tool",
  "domain": "Data Engineering",
  "eli5": "Trino is like a universal translator that lets you ask questions across many different databases at once without moving all the data to one place.",
  "description": "Distributed SQL query engine for big data analytics across heterogeneous data sources including S3, HDFS, Kafka, and relational databases — formerly known as PrestoSQL.",
  "use_cases": [
   "Federated queries across data lakes and warehouses",
   "Ad-hoc analytics on S3/Hive tables",
   "Replacing ETL with in-place querying",
   "Interactive data exploration at petabyte scale"
  ],
  "used_by": [
   "Meta",
   "Netflix",
   "LinkedIn",
   "Lyft",
   "Airbnb"
  ],
  "docs": "https://trino.io/docs/current/",
  "tutorial": "https://trino.io/docs/current/installation/deployment.html",
  "added": "2026-06-11",
  "dex": 198
 },
 {
  "id": "angular",
  "name": "Angular",
  "category": "Framework",
  "domain": "Frontend",
  "description": "Full-featured TypeScript-first frontend framework by Google. Opinionated, batteries-included: routing, forms, HTTP client, dependency injection, and CLI all built in. Suits large enterprise teams needing strong conventions and long-term stability.",
  "use_cases": [
   "Large-scale enterprise SPAs with structured module and component architecture",
   "Reactive forms with built-in validation and two-way data binding",
   "RxJS-powered async patterns for complex event and data stream handling",
   "Server-side rendering via Angular Universal for SEO and performance",
   "Micro-frontends with Module Federation and Angular standalone components"
  ],
  "used_by": [
   "Google",
   "Microsoft",
   "Forbes",
   "UPS",
   "Samsung",
   "Deutsche Bank"
  ],
  "docs": "https://angular.dev/overview",
  "tutorial": "https://angular.dev/tutorials/learn-angular",
  "added": "2026-06-08",
  "eli5": "A complete workshop for building big websites — Google made it with strict rules.",
  "dex": 199
 },
 {
  "id": "astro",
  "name": "Astro",
  "category": "Framework",
  "domain": "Frontend",
  "eli5": "Astro is like a website builder that sends zero JavaScript to your users by default — pages load super fast because there's nothing extra to download.",
  "description": "Content-focused web framework that ships zero JS by default using an 'islands' architecture. Supports React, Vue, Svelte, and Solid components side-by-side.",
  "use_cases": [
   "Marketing sites and blogs with minimal JS",
   "Documentation sites with fast page loads",
   "E-commerce storefronts with selective hydration",
   "Mixing multiple UI frameworks in one project"
  ],
  "used_by": [
   "Google",
   "Microsoft",
   "Netlify",
   "The Guardian"
  ],
  "docs": "https://docs.astro.build/",
  "tutorial": "https://docs.astro.build/en/tutorial/0-introduction/",
  "added": "2026-06-12",
  "dex": 200
 },
 {
  "id": "bun",
  "name": "Bun",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "Bun is like a turbocharged Node.js — it runs JavaScript much faster and also replaces npm, webpack, and Jest all in one tool.",
  "description": "Fast all-in-one JavaScript runtime, bundler, test runner, and package manager built with Zig. Drop-in Node.js compatible with 3x faster startup and built-in TypeScript support.",
  "use_cases": [
   "Drop-in Node.js replacement for faster backends",
   "Faster CI pipelines (install + test + build)",
   "Edge and serverless JS workloads",
   "Monorepo tooling with built-in workspace support"
  ],
  "used_by": [
   "Vercel",
   "Cloudflare",
   "various JS toolchain teams"
  ],
  "docs": "https://bun.sh/docs",
  "tutorial": "https://bun.sh/docs/quickstart",
  "added": "2026-06-12",
  "dex": 201
 },
 {
  "id": "nextjs",
  "name": "Next.js",
  "category": "Framework",
  "domain": "Frontend",
  "description": "React framework for production — handles routing, SSR, SSG, ISR, API routes, and image/font optimization out of the box. App Router (Next.js 13+) enables React Server Components and streaming. Developed and maintained by Vercel.",
  "use_cases": [
   "Hybrid rendering: SSR for dynamic pages, SSG for static content, ISR for revalidation",
   "Full-stack apps with API routes or Server Actions colocated with UI",
   "React Server Components for zero-JS server-rendered UI",
   "Image optimization, font loading, and script management via built-in components",
   "Edge middleware for auth, redirects, and A/B testing at the CDN layer"
  ],
  "used_by": [
   "Vercel",
   "TikTok",
   "Twitch",
   "Notion",
   "Nike",
   "GitHub"
  ],
  "docs": "https://nextjs.org/docs",
  "tutorial": "https://nextjs.org/learn",
  "added": "2026-06-08",
  "eli5": "React with superpowers — handles the boring stuff so you just build cool features.",
  "dex": 202
 },
 {
  "id": "penpot",
  "name": "Penpot",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "Penpot is like Figma but free and open-source, so teams can design websites and apps together without paying a subscription.",
  "description": "Penpot is an open-source design and prototyping tool providing vector graphics, wireframing, and interactive prototypes with real-time collaboration. It offers a Figma alternative with no vendor lock-in and self-hosting options.",
  "use_cases": [
   "Collaborative UI/UX design and prototyping",
   "Design system documentation and governance",
   "Wireframing and user journey mapping",
   "Self-hosted design infrastructure for enterprises"
  ],
  "used_by": [
   "Mozilla",
   "Telefonica",
   "Liferay",
   "Several EU government agencies"
  ],
  "docs": "https://penpot.app/docs",
  "tutorial": "https://penpot.app/view/getting-started",
  "added": "2026-06-24",
  "dex": 203
 },
 {
  "id": "react",
  "name": "React",
  "category": "Framework",
  "domain": "Frontend",
  "description": "JavaScript library for building user interfaces via a declarative, component-based model. Introduced the virtual DOM and unidirectional data flow. Maintained by Meta. The most widely adopted frontend library — vast ecosystem of tooling and components.",
  "use_cases": [
   "Building interactive SPAs with component-driven UI architecture",
   "Server components (React 19) for streaming HTML with zero client JS",
   "State management with hooks (useState, useReducer) and Context API",
   "Universal rendering via Next.js (SSR/SSG) or Remix",
   "Mobile apps via React Native sharing business logic with web"
  ],
  "used_by": [
   "Meta",
   "Airbnb",
   "Netflix",
   "Atlassian",
   "Twitter",
   "Uber"
  ],
  "docs": "https://react.dev/reference/react",
  "tutorial": "https://react.dev/learn",
  "added": "2026-06-08",
  "eli5": "Lego blocks for websites — build pieces and snap them together into a full page.",
  "dex": 204
 },
 {
  "id": "remix",
  "name": "Remix",
  "category": "Framework",
  "domain": "Frontend",
  "eli5": "Remix is like Next.js but designed around web fundamentals — it handles loading and submitting data the way browsers always did, making apps fast and resilient.",
  "description": "Full-stack React framework built on web standards (fetch, forms, HTTP). Nested routing, parallel data loading, and progressive enhancement for fast, resilient user experiences.",
  "use_cases": [
   "Full-stack React apps with server-side data loading",
   "Progressive enhancement for form-heavy apps",
   "Nested layout routing with parallel data fetching",
   "Deploying to edge runtimes and traditional Node"
  ],
  "used_by": [
   "Shopify",
   "NASA",
   "Adobe",
   "Chance the Rapper"
  ],
  "docs": "https://remix.run/docs",
  "tutorial": "https://remix.run/docs/en/main/start/tutorial",
  "added": "2026-06-14",
  "dex": 205
 },
 {
  "id": "shadcn-ui",
  "name": "shadcn/ui",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "shadcn/ui is like a box of beautiful, pre-built UI components that you copy into your own project and own completely — no library to update or fight with.",
  "description": "Collection of accessible, composable React components built on Radix UI and Tailwind CSS. Components are copied into your codebase rather than installed as a dependency.",
  "use_cases": [
   "Accessible component primitives for design systems",
   "Admin dashboards and SaaS UIs",
   "Rapid UI development with full customization",
   "Consistent UI across Next.js and Vite projects"
  ],
  "used_by": [
   "Vercel",
   "Clerk",
   "Cal.com",
   "Liveblocks"
  ],
  "docs": "https://ui.shadcn.com/docs",
  "tutorial": "https://ui.shadcn.com/docs/installation",
  "added": "2026-06-14",
  "dex": 206
 },
 {
  "id": "storybook",
  "name": "Storybook",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "Storybook is like a showroom for your UI components — you can see every button, card, and form in isolation without running the whole app.",
  "description": "Frontend workshop for building, documenting, and testing UI components in isolation. Supports React, Vue, Angular, Svelte, and more with addons for accessibility and visual testing.",
  "use_cases": [
   "Component-driven development and documentation",
   "Visual regression testing with Chromatic",
   "Design system documentation and sharing",
   "Isolated component debugging without app context"
  ],
  "used_by": [
   "Shopify",
   "Microsoft",
   "BBC",
   "Airbnb"
  ],
  "docs": "https://storybook.js.org/docs",
  "tutorial": "https://storybook.js.org/tutorials/intro-to-storybook/",
  "added": "2026-06-12",
  "dex": 207
 },
 {
  "id": "svelte",
  "name": "Svelte",
  "category": "Framework",
  "domain": "Frontend",
  "eli5": "Svelte is like a magic compiler that turns your code into tiny, fast instructions the browser understands directly — no middleman needed.",
  "description": "Compile-time UI framework that shifts work to the build step, producing vanilla JS with no runtime overhead. SvelteKit provides full-stack capabilities.",
  "use_cases": [
   "Highly interactive UIs with minimal bundle size",
   "Full-stack apps with SvelteKit",
   "Embedded widgets with zero runtime dependency",
   "Animations and transitions with built-in directives"
  ],
  "used_by": [
   "Apple",
   "Spotify",
   "The New York Times",
   "Razorpay"
  ],
  "docs": "https://svelte.dev/docs",
  "tutorial": "https://learn.svelte.dev/",
  "added": "2026-06-11",
  "dex": 208
 },
 {
  "id": "tailwind-css",
  "name": "Tailwind CSS",
  "category": "Framework",
  "domain": "Frontend",
  "description": "Utility-first CSS framework — compose designs directly in markup using atomic utility classes instead of writing custom CSS. JIT compiler generates only the CSS classes used, keeping bundle sizes minimal. Pairs with headless UI libraries for accessible components.",
  "use_cases": [
   "Rapid UI development without leaving HTML/JSX — no context switching to CSS files",
   "Design system enforcement via tailwind.config.js tokens (colors, spacing, fonts)",
   "Dark mode, responsive breakpoints, and state variants via class modifiers",
   "Component libraries built on Tailwind: shadcn/ui, Headless UI, Radix + Tailwind",
   "Tailwind UI for pre-built, production-ready component templates"
  ],
  "used_by": [
   "Vercel",
   "GitHub",
   "Shopify",
   "OpenAI",
   "Stripe",
   "NASA"
  ],
  "docs": "https://tailwindcss.com/docs",
  "tutorial": "https://tailwindcss.com/docs/installation",
  "added": "2026-06-08",
  "eli5": "Pre-mixed paint colors for your website — pick from a palette instead of mixing yourself.",
  "dex": 209
 },
 {
  "id": "typescript",
  "name": "TypeScript",
  "category": "Language",
  "domain": "Frontend",
  "eli5": "JavaScript but with a spell-checker that catches your mistakes before the code runs.",
  "description": "Strongly-typed superset of JavaScript developed by Microsoft. Adds static types, interfaces, and generics to JS — compiles down to plain JavaScript. Catches bugs at compile time that would silently fail at runtime. Now the default choice for large JS codebases.",
  "use_cases": [
   "Large-scale frontend apps where type safety prevents runtime bugs",
   "Shared type contracts between frontend and backend in monorepos",
   "Node.js backends with full type safety end-to-end",
   "API response typing to catch schema mismatches at compile time",
   "Library authoring with generated .d.ts declaration files for consumers"
  ],
  "used_by": [
   "Microsoft",
   "Slack",
   "Airbnb",
   "Asana",
   "Lyft",
   "Vercel"
  ],
  "docs": "https://www.typescriptlang.org/docs/",
  "tutorial": "https://www.typescriptlang.org/docs/handbook/intro.html",
  "added": "2026-06-08",
  "dex": 210
 },
 {
  "id": "unocss",
  "name": "UnoCSS",
  "category": "Framework",
  "domain": "Frontend",
  "eli5": "It's like a smart shortcut maker for decorating web pages — instead of writing long style rules, you use tiny magic words that instantly make things look good.",
  "description": "UnoCSS is an instant on-demand atomic CSS engine that provides a highly customizable and performant utility-first CSS framework. It offers better performance and flexibility compared to traditional approaches like Tailwind CSS through its instant mode and plugin system.",
  "use_cases": [
   "Building responsive web applications with minimal CSS bundle size",
   "Creating design systems with customizable utility tokens",
   "Rapid prototyping with pre-built component utilities",
   "Integrating CSS-in-JS solutions with zero runtime overhead"
  ],
  "used_by": [
   "Nuxt",
   "VueUse",
   "Slidev",
   "Windicss"
  ],
  "docs": "https://unocss.dev/",
  "tutorial": "https://unocss.dev/guide/",
  "added": "2026-06-14",
  "dex": 211
 },
 {
  "id": "vite",
  "name": "Vite",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "Vite is like a chef who preps only the dish you ordered right now instead of cooking the entire menu in advance.",
  "description": "Next-generation frontend build tool that uses native ES modules for near-instant dev server startup and Rollup for optimized production builds.",
  "use_cases": [
   "Development server with sub-millisecond HMR",
   "Building React, Vue, and Svelte apps",
   "Library bundling with ESM/CJS output",
   "Replacing Create React App and webpack"
  ],
  "used_by": [
   "Vue core team",
   "Shopify",
   "Astro",
   "SvelteKit"
  ],
  "docs": "https://vite.dev/guide/",
  "tutorial": "https://vite.dev/guide/",
  "added": "2026-06-11",
  "dex": 212
 },
 {
  "id": "vue",
  "name": "Vue.js",
  "category": "Framework",
  "domain": "Frontend",
  "description": "Progressive JavaScript framework for building UIs. Approachable for beginners yet scales to complex SPAs. Composition API (Vue 3) brings React-like composability while retaining an intuitive single-file component (SFC) model with template, script, and style.",
  "use_cases": [
   "SPAs and component-driven UIs with reactive data binding",
   "Progressive enhancement: drop Vue into existing pages without full rewrite",
   "Nuxt.js for SSR, SSG, and full-stack Vue applications",
   "Pinia for lightweight, type-safe state management",
   "Mobile apps via Ionic Vue or NativeScript-Vue"
  ],
  "used_by": [
   "Alibaba",
   "GitLab",
   "Adobe",
   "Grammarly",
   "Nintendo",
   "BMW"
  ],
  "docs": "https://vuejs.org/guide/introduction.html",
  "tutorial": "https://vuejs.org/tutorial/",
  "added": "2026-06-08",
  "eli5": "A friendlier version of React — easier to pick up, still very powerful.",
  "dex": 213
 },
 {
  "id": "wasm-bindgen",
  "name": "wasm-bindgen",
  "category": "Tool",
  "domain": "Frontend",
  "eli5": "wasm-bindgen is like a translator that lets you write super-fast code in Rust and use it directly in web browsers like JavaScript.",
  "description": "wasm-bindgen is a Rust library that facilitates high-level interactions between WebAssembly modules and JavaScript. It enables developers to write performance-critical frontend code in Rust and seamlessly integrate it with JavaScript applications.",
  "use_cases": [
   "Building high-performance frontend components in Rust",
   "Creating browser-based graphics and game engines",
   "Implementing cryptographic operations in WebAssembly",
   "Porting existing Rust libraries to run in browsers"
  ],
  "used_by": [
   "Figma",
   "Cloudflare Workers",
   "Mozilla",
   "Discord"
  ],
  "docs": "https://rustwasm.org/docs/wasm-bindgen/",
  "tutorial": "https://rustwasm.org/docs/wasm-bindgen/examples/index.html",
  "added": "2026-06-18",
  "dex": 214
 },
 {
  "id": "zod",
  "name": "Zod",
  "category": "Framework",
  "domain": "Frontend",
  "eli5": "Zod is like a bouncer at a club who checks that everyone's ID is real before they can enter, making sure your data is exactly what you expect.",
  "description": "Zod is a TypeScript-first schema validation library that provides runtime type checking and data validation with an intuitive API. It's essential for ensuring data integrity in JavaScript/TypeScript applications without external dependencies.",
  "use_cases": [
   "Validating API request and response payloads",
   "Form validation in web applications",
   "TypeScript type inference from runtime schemas",
   "Building type-safe API clients and servers"
  ],
  "used_by": [
   "Vercel",
   "Shopify",
   "tRPC",
   "Prisma"
  ],
  "docs": "https://zod.dev/",
  "tutorial": "https://zod.dev/?id=basic-usage",
  "added": "2026-06-15",
  "dex": 215
 },
 {
  "id": "buf",
  "name": "Buf",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "It's a quality checker and organizer for the language that computers use to talk to each other over the internet.",
  "description": "Buf is a CLI tool for working with Protocol Buffers (protobuf) that provides linting, code generation, and breaking change detection. It simplifies protobuf workflows with modern tooling and manages dependency versioning for proto files.",
  "use_cases": [
   "Detecting breaking changes in gRPC service definitions before deployment",
   "Enforcing API design standards across proto files",
   "Managing protobuf dependencies and versions in large monorepos",
   "Generating idiomatic code in multiple languages from proto definitions"
  ],
  "used_by": [
   "Google",
   "Uber",
   "Lyft",
   "Netflix"
  ],
  "docs": "https://buf.build/docs",
  "tutorial": "https://buf.build/docs/tour/getting-started",
  "added": "2026-06-14",
  "dex": 216
 },
 {
  "id": "cadence-workflow",
  "name": "Cadence Workflow Engine",
  "category": "Platform",
  "domain": "Backend",
  "eli5": "Cadence is like a reliable assistant that remembers exactly where you left off in a task, even if the office catches fire and restarts.",
  "description": "Cadence is a distributed workflow orchestration engine created by Uber that ensures long-running, asynchronous business processes execute reliably with automatic retries and state recovery. It powers mission-critical workflows in finance, e-commerce, and infrastructure automation.",
  "use_cases": [
   "Orchestrating multi-step financial transaction processes",
   "Managing complex order processing and fulfillment workflows",
   "Coordinating microservice interactions with guaranteed delivery",
   "Implementing saga patterns for distributed transactions"
  ],
  "used_by": [
   "Uber",
   "Box",
   "Square",
   "DoorDash"
  ],
  "docs": "https://cadenceworkflow.io/docs/",
  "tutorial": "https://cadenceworkflow.io/docs/quick-start/",
  "added": "2026-06-29",
  "dex": 217
 },
 {
  "id": "deno",
  "name": "Deno",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "Deno is like Node.js fixed — it runs JavaScript and TypeScript securely by default, with built-in tools so you don't need npm for most things.",
  "description": "Secure JavaScript/TypeScript runtime built on V8 and Rust. Permissions-first security model, native TypeScript support, built-in formatter/linter/test runner, and Web API compatibility.",
  "use_cases": [
   "Secure scripting with explicit permission grants",
   "TypeScript backend servers without build steps",
   "Edge functions on Deno Deploy",
   "CLI tools with single-binary compilation"
  ],
  "used_by": [
   "Deno Deploy",
   "Netlify Edge Functions",
   "Supabase Edge Functions"
  ],
  "docs": "https://docs.deno.com/",
  "tutorial": "https://docs.deno.com/runtime/",
  "added": "2026-06-14",
  "dex": 218
 },
 {
  "id": "django",
  "name": "Django",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Django is like a fully-stocked kitchen for building websites in Python — everything from database to login pages to admin panels comes included.",
  "description": "High-level Python web framework that follows the 'batteries included' philosophy. Includes ORM, auth, admin, and templating out of the box.",
  "use_cases": [
   "Full-stack web applications with server-side rendering",
   "REST APIs (with Django REST Framework)",
   "Admin dashboards and CMS backends",
   "Rapid prototyping for data-heavy apps"
  ],
  "used_by": [
   "Instagram",
   "Mozilla",
   "Disqus",
   "Pinterest"
  ],
  "docs": "https://docs.djangoproject.com/",
  "tutorial": "https://docs.djangoproject.com/en/stable/intro/tutorial01/",
  "added": "2026-06-12",
  "dex": 219
 },
 {
  "id": "express",
  "name": "Express.js",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Express is like a thin layer of helpful tools on top of Node.js — it makes building web servers and APIs way less tedious without getting in your way.",
  "description": "Minimal, unopinionated Node.js web framework. The de-facto standard for building HTTP servers and REST APIs in JavaScript/TypeScript with a huge middleware ecosystem.",
  "use_cases": [
   "REST API servers",
   "Middleware pipelines for auth, logging, rate limiting",
   "Server-side rendering backends",
   "BFF (backend for frontend) layers"
  ],
  "used_by": [
   "IBM",
   "Accenture",
   "Fox Sports",
   "Uber"
  ],
  "docs": "https://expressjs.com/",
  "tutorial": "https://expressjs.com/en/starter/hello-world.html",
  "added": "2026-06-12",
  "dex": 220
 },
 {
  "id": "fastapi",
  "name": "FastAPI",
  "category": "Framework",
  "domain": "Backend",
  "description": "Modern, high-performance Python web framework for building APIs. Built on Starlette and Pydantic — async by default, auto-generates OpenAPI/Swagger docs, and validates request/response schemas via type hints. One of the fastest Python frameworks.",
  "use_cases": [
   "REST and async API backends with automatic OpenAPI docs generation",
   "ML model serving: wrap a model inference function as an HTTP endpoint",
   "Data validation and serialization with Pydantic models",
   "Background tasks and WebSocket support for real-time APIs",
   "Dependency injection system for auth, DB sessions, and shared resources"
  ],
  "used_by": [
   "Microsoft",
   "Uber",
   "Netflix",
   "Explosion AI",
   "Hugging Face"
  ],
  "docs": "https://fastapi.tiangolo.com/",
  "tutorial": "https://fastapi.tiangolo.com/tutorial/",
  "added": "2026-06-08",
  "eli5": "A super-fast waiter that takes requests from users and brings back exactly what they asked.",
  "dex": 221
 },
 {
  "id": "gin",
  "name": "Gin",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Gin is like a Formula 1 car for building web APIs in Go — extremely fast, very light, and gets out of your way.",
  "description": "High-performance HTTP web framework for Go. Features a martini-like API with up to 40x better performance, middleware support, and JSON validation.",
  "use_cases": [
   "High-throughput REST APIs in Go",
   "Microservices with minimal memory footprint",
   "Middleware chains for auth, logging, rate limiting",
   "JSON API servers with request binding and validation"
  ],
  "used_by": [
   "ByteDance",
   "Docker",
   "Kubernetes ecosystem tools"
  ],
  "docs": "https://gin-gonic.com/docs/",
  "tutorial": "https://gin-gonic.com/docs/quickstart/",
  "added": "2026-06-12",
  "dex": 222
 },
 {
  "id": "go",
  "name": "Go",
  "category": "Language",
  "domain": "Backend",
  "eli5": "A language designed so a big team can write the same code without making a mess.",
  "description": "Statically typed, compiled language designed at Google for simplicity, concurrency, and fast build times. Goroutines and channels make concurrent programming straightforward. Single binary output, minimal runtime — ideal for cloud-native tools and services.",
  "use_cases": [
   "High-throughput microservices and APIs with built-in concurrency via goroutines",
   "CLI tools and DevOps tooling (Docker, Kubernetes, Terraform are all written in Go)",
   "Network servers and proxies with low memory footprint",
   "Cloud-native infrastructure: most CNCF projects are written in Go",
   "gRPC services with generated Go stubs from protobuf definitions"
  ],
  "used_by": [
   "Google",
   "Uber",
   "Dropbox",
   "Cloudflare",
   "Docker",
   "HashiCorp"
  ],
  "docs": "https://go.dev/doc/",
  "tutorial": "https://go.dev/tour/welcome/1",
  "added": "2026-06-08",
  "dex": 223
 },
 {
  "id": "graphql",
  "name": "GraphQL",
  "category": "Concept",
  "domain": "Backend",
  "eli5": "GraphQL is like ordering exactly what you want from a menu instead of getting a fixed combo — you ask for the specific fields you need and nothing more.",
  "description": "Query language and runtime for APIs that lets clients request exactly the data they need. Developed by Facebook, replaces multiple REST endpoints with a single typed schema.",
  "use_cases": [
   "Flexible APIs for mobile and web clients",
   "Aggregating data from multiple microservices (schema federation)",
   "Reducing over-fetching and under-fetching",
   "Real-time data with GraphQL subscriptions"
  ],
  "used_by": [
   "GitHub",
   "Shopify",
   "Twitter",
   "Airbnb"
  ],
  "docs": "https://graphql.org/learn/",
  "tutorial": "https://graphql.org/learn/",
  "added": "2026-06-12",
  "dex": 224
 },
 {
  "id": "grpc",
  "name": "gRPC",
  "category": "Framework",
  "domain": "Backend",
  "description": "High-performance, open-source RPC framework from Google. Uses HTTP/2 for transport and Protocol Buffers (protobuf) as the IDL and wire format. Enables strongly-typed, code-generated service contracts across polyglot microservices.",
  "use_cases": [
   "Low-latency, high-throughput inter-service communication (vs REST+JSON)",
   "Bidirectional streaming for real-time data (chat, live feeds, telemetry)",
   "Strongly-typed API contracts via .proto files — catch mismatches at compile time",
   "Polyglot microservices: generate client/server stubs in 11+ languages",
   "gRPC-Web for browser clients; gRPC-Gateway to expose REST alongside gRPC"
  ],
  "used_by": [
   "Google",
   "Netflix",
   "Square",
   "CoreOS",
   "Cockroach Labs",
   "Cisco"
  ],
  "docs": "https://grpc.io/docs/",
  "tutorial": "https://grpc.io/docs/languages/go/quickstart/",
  "added": "2026-06-08",
  "eli5": "Two apps talking in a secret, super-fast language only they understand.",
  "dex": 225
 },
 {
  "id": "hono",
  "name": "Hono",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Hono is like an ultra-light Express for the edge — it runs anywhere JavaScript runs, including Cloudflare Workers, Deno, and Bun, with almost no overhead.",
  "description": "Ultra-fast, lightweight web framework for edge runtimes. Works on Cloudflare Workers, Deno, Bun, and Node.js with a familiar Express-like API and zero dependencies.",
  "use_cases": [
   "Edge API routes on Cloudflare Workers",
   "Lightweight REST APIs with Bun or Deno",
   "TypeScript-first backend with end-to-end types",
   "Serverless functions with minimal cold start"
  ],
  "used_by": [
   "Cloudflare",
   "Deno",
   "various edge-native startups"
  ],
  "docs": "https://hono.dev/docs/",
  "tutorial": "https://hono.dev/docs/getting-started/basic",
  "added": "2026-06-14",
  "dex": 226
 },
 {
  "id": "hurl",
  "name": "Hurl",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "Hurl is like a testing checklist for websites that lets you verify your web services are working correctly by running through a series of requests.",
  "description": "Hurl is a command-line tool for running and testing HTTP requests defined in plain text files, supporting assertions, captures, and dynamic value injection. It streamlines API testing, integration testing, and debugging of web services.",
  "use_cases": [
   "API endpoint testing and validation",
   "Integration testing in CI/CD pipelines",
   "Load testing and performance benchmarking",
   "API documentation and examples"
  ],
  "used_by": [
   "Mozilla",
   "Datadog",
   "GitHub",
   "GitLab"
  ],
  "docs": "https://hurl.dev/docs/",
  "tutorial": "https://hurl.dev/docs/tutorial/",
  "added": "2026-06-20",
  "dex": 227
 },
 {
  "id": "java",
  "name": "Java",
  "category": "Language",
  "domain": "Backend",
  "eli5": "A very reliable, strict language that runs the same everywhere — like a rule-follower who never breaks character.",
  "description": "Statically typed, object-oriented language running on the JVM. Write once, run anywhere. Massive enterprise ecosystem (Spring, Jakarta EE). Verbose but predictable — dominates banking, telecoms, and large enterprise backends. Long-term support releases make it stable for decades.",
  "use_cases": [
   "Enterprise backend services and REST APIs with Spring Boot",
   "Android app development (alongside Kotlin)",
   "Big data processing: Hadoop, Spark, Kafka are all JVM-based",
   "Microservices with Quarkus or Micronaut for low-footprint JVM services",
   "High-frequency trading and financial systems needing JVM tuning"
  ],
  "used_by": [
   "LinkedIn",
   "Amazon",
   "Google",
   "Netflix",
   "Uber",
   "Goldman Sachs"
  ],
  "docs": "https://docs.oracle.com/en/java/",
  "tutorial": "https://dev.java/learn/",
  "added": "2026-06-08",
  "dex": 228
 },
 {
  "id": "kotlin",
  "name": "Kotlin",
  "category": "Language",
  "domain": "Backend",
  "eli5": "Java but way less wordy — like texting instead of writing a formal letter, but just as powerful.",
  "description": "Statically typed JVM language by JetBrains — fully interoperable with Java but far more concise, null-safe, and expressive. Official language for Android development. Coroutines make async code as readable as synchronous code.",
  "use_cases": [
   "Android app development — Google's preferred language since 2019",
   "Backend services with Ktor or Spring Boot (full Java interop)",
   "Kotlin Multiplatform for sharing business logic across Android, iOS, and web",
   "Coroutines for structured concurrency without callback hell",
   "Replacing Java in existing JVM codebases incrementally"
  ],
  "used_by": [
   "Google",
   "Pinterest",
   "Trello",
   "Evernote",
   "JetBrains",
   "Gradle"
  ],
  "docs": "https://kotlinlang.org/docs/home.html",
  "tutorial": "https://kotlinlang.org/docs/getting-started.html",
  "added": "2026-06-08",
  "dex": 229
 },
 {
  "id": "nestjs",
  "name": "NestJS",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "NestJS is like LEGO for building Node.js servers — each piece snaps together in a structured way so your code stays organized as the project grows.",
  "description": "Progressive Node.js framework for building scalable server-side applications. Uses TypeScript and Angular-inspired decorators to enforce modularity and testability.",
  "use_cases": [
   "REST and GraphQL API servers",
   "Microservices with built-in transport adapters (Kafka, NATS, Redis)",
   "Enterprise-grade Node.js backends",
   "CLI tools and background workers"
  ],
  "used_by": [
   "Adidas",
   "Roche",
   "Capgemini",
   "Autodesk"
  ],
  "docs": "https://docs.nestjs.com/",
  "tutorial": "https://docs.nestjs.com/first-steps",
  "added": "2026-06-11",
  "dex": 230
 },
 {
  "id": "pocketbase",
  "name": "PocketBase",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "PocketBase is like having a complete backend in a single file that you can carry in your pocket and run anywhere.",
  "description": "A lightweight self-hosted backend-as-a-service written in Go that provides a REST/realtime API, built-in database (SQLite), user authentication, and admin dashboard in a single executable. It eliminates the complexity of deploying traditional backends for small to medium projects.",
  "use_cases": [
   "Building full-stack applications without separate backend infrastructure",
   "Rapid prototyping and MVPs with instant API and admin panel",
   "Self-hosted alternative to Firebase or Supabase with minimal dependencies",
   "Embedded backend for desktop and mobile applications"
  ],
  "used_by": [
   "Indie developers",
   "Startups",
   "Educational institutions"
  ],
  "docs": "https://pocketbase.io/docs/",
  "tutorial": "https://pocketbase.io/docs/getting-started/",
  "added": "2026-06-27",
  "dex": 231
 },
 {
  "id": "pydantic",
  "name": "Pydantic",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Pydantic is like a strict teacher that checks if your homework has all the right answers in the right format before accepting it.",
  "description": "Pydantic is a Python library for data validation and settings management using Python type annotations. It ensures data is correct, well-typed, and serializable, becoming essential infrastructure for FastAPI applications and data pipelines.",
  "use_cases": [
   "API request/response validation in FastAPI applications",
   "Configuration management with type safety",
   "Data pipeline validation and transformation",
   "JSON schema generation and documentation"
  ],
  "used_by": [
   "Uber",
   "Microsoft",
   "Amazon"
  ],
  "docs": "https://docs.pydantic.dev/",
  "tutorial": "https://docs.pydantic.dev/latest/getting-started/",
  "added": "2026-06-15",
  "dex": 232
 },
 {
  "id": "pydantic-v2",
  "name": "Pydantic V2",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Pydantic is like a bouncer at a club that checks if your data looks correct before letting it into your Python program.",
  "description": "Pydantic V2 is a data validation and serialization library for Python that uses type hints to ensure data integrity and convert between different formats. It powers FastAPI and is essential for building robust APIs and data pipelines.",
  "use_cases": [
   "API request/response validation in FastAPI applications",
   "Configuration management and environment variable parsing",
   "Data transformation and serialization in ML pipelines",
   "Type-safe database model definitions"
  ],
  "used_by": [
   "Shopify",
   "Microsoft",
   "Databricks",
   "Stripe"
  ],
  "docs": "https://docs.pydantic.dev/latest/",
  "tutorial": "https://docs.pydantic.dev/latest/concepts/models/",
  "added": "2026-06-29",
  "dex": 233
 },
 {
  "id": "python",
  "name": "Python",
  "category": "Language",
  "domain": "Backend",
  "eli5": "A language so easy to read it almost looks like plain English — the Swiss Army knife of programming.",
  "description": "High-level, dynamically typed, interpreted language known for readability and a massive ecosystem. Dominant in data science, ML, and scripting. Slower than compiled languages but fast enough when paired with C-extension libraries (NumPy, PyTorch).",
  "use_cases": [
   "Data science and ML: NumPy, Pandas, scikit-learn, PyTorch, TensorFlow",
   "Backend APIs with FastAPI, Django, or Flask",
   "Automation, scripting, and glue code for DevOps pipelines",
   "Data engineering: PySpark, Apache Airflow DAGs, dbt Python models",
   "LLM applications and AI agent frameworks (LangChain, LlamaIndex)"
  ],
  "used_by": [
   "Google",
   "Instagram",
   "Spotify",
   "Netflix",
   "Dropbox",
   "NASA"
  ],
  "docs": "https://docs.python.org/3/",
  "tutorial": "https://docs.python.org/3/tutorial/",
  "added": "2026-06-08",
  "dex": 234
 },
 {
  "id": "rails",
  "name": "Ruby on Rails",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Rails is like a fully-assembled LEGO kit for building web apps — the pieces are already connected in the right way so you can build fast without reading a manual.",
  "description": "Full-stack web framework for Ruby following convention over configuration. Includes ORM (ActiveRecord), routing, templating, mailers, and a strong developer productivity focus.",
  "use_cases": [
   "Rapid full-stack web application development",
   "Monolithic apps with built-in admin and auth",
   "REST and GraphQL API backends",
   "Startups and MVPs with fast time-to-market"
  ],
  "used_by": [
   "GitHub",
   "Shopify",
   "Airbnb",
   "Basecamp"
  ],
  "docs": "https://guides.rubyonrails.org/",
  "tutorial": "https://guides.rubyonrails.org/getting_started.html",
  "added": "2026-06-14",
  "dex": 235
 },
 {
  "id": "rust",
  "name": "Rust",
  "category": "Language",
  "domain": "Backend",
  "eli5": "A language that won't let you write dangerous code — like a strict teacher who catches your mistakes before class starts.",
  "description": "Systems programming language focused on memory safety, performance, and fearless concurrency — without a garbage collector. The borrow checker catches memory bugs at compile time. Consistently voted most loved language in Stack Overflow surveys.",
  "use_cases": [
   "Systems programming: OS components, drivers, embedded firmware",
   "WebAssembly (WASM) compilation for near-native browser performance",
   "High-performance networking and proxies (Cloudflare, AWS, Discord)",
   "CLI tools requiring minimal binary size and zero runtime overhead",
   "Replacing C/C++ in safety-critical code (Linux kernel, Android, Windows)"
  ],
  "used_by": [
   "Mozilla",
   "Cloudflare",
   "Discord",
   "AWS",
   "Microsoft",
   "Linux Foundation"
  ],
  "docs": "https://doc.rust-lang.org/book/",
  "tutorial": "https://rustlings.cool/",
  "added": "2026-06-08",
  "dex": 236
 },
 {
  "id": "spring-boot",
  "name": "Spring Boot",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "Spring Boot is like a pre-configured Java starter kit — it sets up all the boring boilerplate so you can start writing business logic on day one.",
  "description": "Convention-over-configuration Java framework for building production-ready microservices and web apps. Embeds Tomcat/Jetty and auto-configures the Spring ecosystem.",
  "use_cases": [
   "Enterprise REST APIs and microservices",
   "Event-driven applications with Spring Kafka/RabbitMQ",
   "Batch processing pipelines",
   "Cloud-native apps with Spring Cloud"
  ],
  "used_by": [
   "Netflix",
   "Amazon",
   "Google",
   "Microsoft"
  ],
  "docs": "https://docs.spring.io/spring-boot/docs/current/reference/html/",
  "tutorial": "https://spring.io/quickstart",
  "added": "2026-06-12",
  "dex": 237
 },
 {
  "id": "sqlc",
  "name": "sqlc",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "It's like a translator that reads your SQL queries and automatically writes the boring code to use them safely in your program.",
  "description": "sqlc generates type-safe code from SQL queries without an ORM. It parses SQL queries and produces strongly-typed, idiomatic Go, Python, or other language code that prevents SQL injection and type mismatches at compile time.",
  "use_cases": [
   "Building type-safe database layers in Go microservices",
   "Generating Python database clients from SQL migrations",
   "Replacing ORM boilerplate with raw SQL safety guarantees",
   "Enforcing schema correctness across database operations"
  ],
  "used_by": [
   "Stripe",
   "Vercel",
   "GitLab",
   "Segment"
  ],
  "docs": "https://docs.sqlc.dev/",
  "tutorial": "https://docs.sqlc.dev/en/stable/tutorials/getting-started.html",
  "added": "2026-06-14",
  "dex": 238
 },
 {
  "id": "stripe",
  "name": "Stripe",
  "category": "Platform",
  "domain": "Backend",
  "eli5": "Stripe is like a digital cash register that lets your online store accept and manage money from customers all over the world.",
  "description": "Stripe is a payment processing platform that enables businesses to accept payments online and in-person. It provides APIs for payment collection, subscription management, and financial operations at scale.",
  "use_cases": [
   "E-commerce checkout and payment processing",
   "Subscription and recurring billing management",
   "Marketplace and platform payouts",
   "Global payment processing with multi-currency support"
  ],
  "used_by": [
   "Amazon",
   "Shopify",
   "Lyft",
   "DoorDash"
  ],
  "docs": "https://stripe.com/docs",
  "tutorial": "https://stripe.com/docs/payments/quickstart",
  "added": "2026-06-18",
  "dex": 239
 },
 {
  "id": "supabase-realtime",
  "name": "Supabase Realtime",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "Supabase Realtime is like a magic bulletin board that instantly tells everyone watching it whenever something new gets posted, so everyone sees updates at the same time.",
  "description": "Supabase Realtime is a PostgreSQL-native pub/sub system that enables real-time data synchronization across connected clients. It powers instant updates for collaborative applications, live notifications, and reactive features without additional infrastructure.",
  "use_cases": [
   "Real-time collaborative editing and presence tracking",
   "Live notifications and activity feeds for user dashboards",
   "Instant data synchronization across web and mobile clients",
   "Live multiplayer features in web applications"
  ],
  "used_by": [
   "Slack",
   "Figma integrations",
   "Vercel"
  ],
  "docs": "https://supabase.com/docs/guides/realtime",
  "tutorial": "https://supabase.com/docs/guides/realtime/quickstart",
  "added": "2026-06-22",
  "dex": 240
 },
 {
  "id": "temporal",
  "name": "Temporal",
  "category": "Platform",
  "domain": "Backend",
  "eli5": "Temporal is like a very reliable calendar and task manager for computers that remembers what they need to do, even if the power goes off.",
  "description": "Temporal is an open-source workflow orchestration platform that allows developers to build resilient, scalable applications with complex business logic using a durable execution model. It handles retries, timeouts, and state management automatically.",
  "use_cases": [
   "Order processing and fulfillment workflows",
   "Payment processing and financial transactions",
   "User onboarding and provisioning workflows",
   "Long-running asynchronous job orchestration"
  ],
  "used_by": [
   "Stripe",
   "Databricks",
   "Instacart",
   "Uber"
  ],
  "docs": "https://docs.temporal.io/",
  "tutorial": "https://docs.temporal.io/getting-started",
  "added": "2026-06-15",
  "dex": 241
 },
 {
  "id": "trpc",
  "name": "tRPC",
  "category": "Framework",
  "domain": "Backend",
  "eli5": "tRPC is like an API where you never have to write documentation — your frontend automatically knows the exact types of every function your backend exposes.",
  "description": "TypeScript RPC framework that gives end-to-end type safety between client and server with zero code generation. Eliminates REST/GraphQL schemas for TypeScript full-stack apps.",
  "use_cases": [
   "Full-stack TypeScript apps with shared types",
   "Next.js and Remix API layers without REST overhead",
   "Replacing REST or GraphQL in mono-repo TS stacks",
   "Type-safe subscriptions and streaming"
  ],
  "used_by": [
   "Cal.com",
   "Ping.gg",
   "Newline"
  ],
  "docs": "https://trpc.io/docs",
  "tutorial": "https://trpc.io/docs/quickstart",
  "added": "2026-06-14",
  "dex": 242
 },
 {
  "id": "uv",
  "name": "uv",
  "category": "Tool",
  "domain": "Backend",
  "eli5": "It's a super fast assistant that organizes all your Python project's ingredients and makes sure everyone gets the right versions.",
  "description": "uv is an extremely fast Python package installer and dependency resolver written in Rust. It replaces pip, pip-tools, and virtualenv with a single blazingly fast tool that significantly reduces Python project setup and dependency resolution time.",
  "use_cases": [
   "Accelerating CI/CD pipelines for Python projects",
   "Managing Python dependencies in monorepos",
   "Replacing pip for faster local development iteration",
   "Building reproducible Python environments with lock files"
  ],
  "used_by": [
   "Anthropic",
   "Hugging Face",
   "Astronomer",
   "Glyph"
  ],
  "docs": "https://docs.astral.sh/uv/",
  "tutorial": "https://docs.astral.sh/uv/getting-started/",
  "added": "2026-06-14",
  "dex": 243
 },
 {
  "id": "apache-kafka",
  "name": "Apache Kafka",
  "category": "Tool",
  "domain": "Messaging",
  "description": "Distributed event streaming platform designed for high-throughput, fault-tolerant, ordered message delivery. Stores events durably as an immutable log. De facto standard for real-time data pipelines and event-driven architectures.",
  "use_cases": [
   "Real-time event streaming between microservices (decoupled producers/consumers)",
   "Change Data Capture (CDC) from databases via Kafka Connect + Debezium",
   "Stream processing pipelines with Kafka Streams or Apache Flink",
   "Activity tracking: clickstreams, metrics, audit logs at massive scale",
   "Event sourcing and CQRS as the persistent event log",
   "Multi-datacenter replication with MirrorMaker 2"
  ],
  "used_by": [
   "LinkedIn",
   "Uber",
   "Netflix",
   "Airbnb",
   "Goldman Sachs",
   "Cloudflare"
  ],
  "docs": "https://kafka.apache.org/documentation/",
  "tutorial": "https://kafka.apache.org/quickstart",
  "added": "2026-06-08",
  "eli5": "A conveyor belt that carries messages between apps without dropping any.",
  "dex": 244
 },
 {
  "id": "apache-pulsar",
  "name": "Apache Pulsar",
  "category": "Tool",
  "domain": "Messaging",
  "eli5": "Pulsar is like a post office that can hold letters forever and deliver them to any subscriber at any time — even ones who weren't listening when the letter arrived.",
  "description": "Cloud-native distributed messaging and streaming platform with multi-tenancy, geo-replication, and built-in tiered storage. Decouples compute from storage.",
  "use_cases": [
   "Multi-tenant event streaming across teams",
   "Long-term message retention with tiered storage",
   "Geo-replicated pub/sub for global deployments",
   "Serverless stream processing with Pulsar Functions"
  ],
  "used_by": [
   "Yahoo",
   "Tencent",
   "Overstock",
   "Narvar"
  ],
  "docs": "https://pulsar.apache.org/docs/",
  "tutorial": "https://pulsar.apache.org/docs/getting-started-standalone/",
  "added": "2026-06-12",
  "dex": 245
 },
 {
  "id": "zookeeper",
  "name": "Apache ZooKeeper",
  "category": "Tool",
  "domain": "Messaging",
  "eli5": "ZooKeeper is like a referee who keeps track of all the rules and makes sure every player in a big game follows them.",
  "description": "Apache ZooKeeper is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and group services over large clusters. It's critical for coordinating distributed systems like Kafka, HBase, and Hadoop.",
  "use_cases": [
   "Coordinating leader election in distributed databases",
   "Managing configuration across Kafka brokers",
   "Service discovery and health checking",
   "Distributed locking and synchronization"
  ],
  "used_by": [
   "Netflix",
   "Yahoo",
   "Twitter",
   "Salesforce"
  ],
  "docs": "https://zookeeper.apache.org/",
  "tutorial": "https://zookeeper.apache.org/doc/current/zookeeperStarted.html",
  "added": "2026-06-16",
  "dex": 246
 },
 {
  "id": "celery",
  "name": "Celery",
  "category": "Framework",
  "domain": "Messaging",
  "eli5": "Celery is like a restaurant ticket system — the server hands off orders to kitchen workers in the background so the front desk stays fast and free.",
  "description": "Distributed task queue for Python. Executes async and scheduled tasks in background workers, backed by brokers like Redis or RabbitMQ. Essential for offloading slow work from web requests.",
  "use_cases": [
   "Async task processing (email, image resize, PDF generation)",
   "Periodic/scheduled jobs (cron replacement)",
   "Distributed computation across multiple workers",
   "Rate-limited API call queuing"
  ],
  "used_by": [
   "Instagram",
   "Mozilla",
   "Coursera",
   "Robinhood"
  ],
  "docs": "https://docs.celeryq.dev/",
  "tutorial": "https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html",
  "added": "2026-06-12",
  "dex": 247
 },
 {
  "id": "cloud-pubsub",
  "name": "Google Cloud Pub/Sub",
  "category": "Platform",
  "domain": "Messaging",
  "eli5": "Google's message bus — apps shout a message, other apps listen and catch it.",
  "description": "GCP's fully managed real-time messaging service. Decouples producers from consumers with at-least-once delivery, ordering guarantees, and replay. Global by default — messages published in one region can be consumed anywhere with sub-100ms latency.",
  "use_cases": [
   "Event-driven microservices: decouple services with async message passing",
   "Streaming ingest pipeline: Pub/Sub → Dataflow → BigQuery",
   "Fan-out: one publisher, many independent subscriber services",
   "Dead letter topics for handling unprocessable messages",
   "GCS/Cloud Run/Cloud Functions event triggers via Eventarc"
  ],
  "used_by": [
   "Spotify",
   "The New York Times",
   "Mercado Libre",
   "Twitch",
   "Wix"
  ],
  "docs": "https://cloud.google.com/pubsub/docs",
  "tutorial": "https://cloud.google.com/pubsub/docs/publish-receive-messages-console",
  "added": "2026-06-08",
  "dex": 248
 },
 {
  "id": "nats",
  "name": "NATS",
  "category": "Tool",
  "domain": "Messaging",
  "eli5": "NATS is like a super-fast walkie-talkie system where any app can shout a message and anyone listening on that channel instantly hears it.",
  "description": "High-performance, lightweight messaging system for cloud-native applications, IoT, and microservices. Supports pub/sub, request/reply, and durable JetStream streaming.",
  "use_cases": [
   "Microservice-to-microservice messaging",
   "IoT telemetry ingestion",
   "Event-driven architectures",
   "Distributed systems coordination"
  ],
  "used_by": [
   "Apcera",
   "Netlify",
   "Mastercard",
   "Synadia"
  ],
  "docs": "https://docs.nats.io/",
  "tutorial": "https://docs.nats.io/nats-concepts/overview",
  "added": "2026-06-11",
  "dex": 249
 },
 {
  "id": "rabbitmq",
  "name": "RabbitMQ",
  "category": "Tool",
  "domain": "Messaging",
  "description": "Open-source message broker implementing AMQP, MQTT, and STOMP. Routes messages through exchanges and queues with flexible binding rules. Reliable delivery with acknowledgements, dead-letter queues, and persistence.",
  "use_cases": [
   "Task queues for background job processing (Celery, Sidekiq backends)",
   "Decoupling microservices with publish/subscribe via fanout exchanges",
   "Priority queues and delayed message delivery",
   "Dead-letter queues for failed message handling and retry logic",
   "RPC-over-AMQP pattern for synchronous request-reply messaging"
  ],
  "used_by": [
   "Reddit",
   "Instagram",
   "Mozilla",
   "VMware",
   "Zalando"
  ],
  "docs": "https://www.rabbitmq.com/documentation.html",
  "tutorial": "https://www.rabbitmq.com/tutorials",
  "added": "2026-06-08",
  "eli5": "A post office — apps drop letters in, other apps pick them up later.",
  "dex": 250
 },
 {
  "id": "redpanda",
  "name": "Redpanda",
  "category": "Tool",
  "domain": "Messaging",
  "eli5": "Redpanda is like Kafka but without the complicated setup — it does the same job of passing messages between apps, just simpler and faster.",
  "description": "Kafka-compatible streaming data platform written in C++. No ZooKeeper, no JVM — delivers 10x lower latency and simpler operations than Apache Kafka.",
  "use_cases": [
   "Drop-in Kafka replacement with lower ops overhead",
   "High-throughput event streaming",
   "Real-time analytics ingestion",
   "Embedded streaming in edge or IoT deployments"
  ],
  "used_by": [
   "Loft Labs",
   "Aiven",
   "Forma.ai",
   "Starburst"
  ],
  "docs": "https://docs.redpanda.com/",
  "tutorial": "https://docs.redpanda.com/current/get-started/quick-start/",
  "added": "2026-06-12",
  "dex": 251
 },
 {
  "id": "aws-s3",
  "name": "AWS S3",
  "category": "Platform",
  "domain": "Storage",
  "description": "Amazon Simple Storage Service — infinitely scalable object storage with 99.999999999% durability. Store and retrieve any amount of data from anywhere. Foundational AWS service used as a data lake, static site host, and backup store.",
  "use_cases": [
   "Data lake storage for analytics pipelines (Athena, Spark, Redshift Spectrum)",
   "Static website and frontend asset hosting with CloudFront CDN",
   "Backup, archival, and disaster recovery (S3 Glacier tiers)",
   "ML training dataset and model artifact storage",
   "Event-driven pipelines via S3 event notifications to Lambda/SQS"
  ],
  "used_by": [
   "Netflix",
   "Airbnb",
   "Dropbox",
   "Pinterest",
   "Slack"
  ],
  "docs": "https://docs.aws.amazon.com/s3/",
  "tutorial": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html",
  "added": "2026-06-08",
  "eli5": "A magic box that holds unlimited files and never loses them.",
  "dex": 252
 },
 {
  "id": "azure-blob",
  "name": "Azure Blob Storage",
  "category": "Platform",
  "domain": "Storage",
  "eli5": "Microsoft's giant cloud bucket for storing any file — like S3 but Azure's version.",
  "description": "Azure's massively scalable object storage for unstructured data. Three access tiers (Hot, Cool, Archive) for cost optimization. Supports hierarchical namespace (Azure Data Lake Storage Gen2) for big data analytics. Integrates with Azure CDN, Databricks, and Synapse Analytics.",
  "use_cases": [
   "Data lake foundation with ADLS Gen2 hierarchical namespace for analytics",
   "Backup and disaster recovery with geo-redundant storage options",
   "Static website hosting with Azure CDN integration",
   "ML dataset and model storage for Azure Machine Learning pipelines",
   "Tiered storage lifecycle policies: Hot → Cool → Archive as data ages"
  ],
  "used_by": [
   "Unilever",
   "3M",
   "Ecolab",
   "FedEx",
   "Walgreens Boots Alliance"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/storage/blobs/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal",
  "added": "2026-06-08",
  "dex": 253
 },
 {
  "id": "ceph",
  "name": "Ceph",
  "category": "Tool",
  "domain": "Storage",
  "eli5": "Ceph is like building your own private S3 in your data center from regular hard drives — it spreads your files across many disks so nothing gets lost.",
  "description": "Open-source distributed storage system providing object, block, and file storage in a single cluster. Designed for self-healing and no single point of failure.",
  "use_cases": [
   "On-premises object storage (S3-compatible via RadosGW)",
   "Persistent block storage for Kubernetes (via Rook)",
   "OpenStack Cinder backend",
   "Large-scale petabyte storage clusters"
  ],
  "used_by": [
   "CERN",
   "Red Hat",
   "Deutsche Telekom",
   "Bloomberg"
  ],
  "docs": "https://docs.ceph.com/",
  "tutorial": "https://docs.ceph.com/en/latest/install/",
  "added": "2026-06-12",
  "dex": 254
 },
 {
  "id": "gcs",
  "name": "Google Cloud Storage",
  "category": "Platform",
  "domain": "Storage",
  "eli5": "Google's magic bucket that holds unlimited files — like AWS S3 but made by Google.",
  "description": "GCP's unified object storage service with 99.999999999% durability. Four storage classes (Standard, Nearline, Coldline, Archive) for tiered cost/access tradeoffs. Strongly consistent, globally accessible, and tightly integrated with BigQuery and Dataflow.",
  "use_cases": [
   "Data lake for BigQuery, Dataflow, and Spark/Dataproc analytics pipelines",
   "ML training dataset and model artifact storage",
   "Static website hosting and CDN origin via Cloud CDN",
   "Cross-region replication with dual-region and multi-region buckets",
   "Backup and archival with Coldline/Archive storage classes"
  ],
  "used_by": [
   "Spotify",
   "Snap",
   "New York Times",
   "Lush",
   "King"
  ],
  "docs": "https://cloud.google.com/storage/docs",
  "tutorial": "https://cloud.google.com/storage/docs/quickstart-console",
  "added": "2026-06-08",
  "dex": 255
 },
 {
  "id": "minio",
  "name": "MinIO",
  "category": "Tool",
  "domain": "Storage",
  "eli5": "MinIO is like having your own private Amazon S3 in your own data center — same interface, your rules.",
  "description": "High-performance, S3-compatible object storage designed for on-premises and private cloud deployments. Supports erasure coding and runs on commodity hardware.",
  "use_cases": [
   "On-premises object storage with S3 API",
   "Data lake storage tier",
   "Backup and archival for Kubernetes workloads",
   "ML training data and model artifact storage"
  ],
  "used_by": [
   "Verizon",
   "CERN",
   "NVIDIA",
   "Goldman Sachs"
  ],
  "docs": "https://min.io/docs/minio/",
  "tutorial": "https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html",
  "added": "2026-06-11",
  "dex": 256
 },
 {
  "id": "rook",
  "name": "Rook",
  "category": "Tool",
  "domain": "Storage",
  "eli5": "Rook is like a translator between Kubernetes and Ceph — it makes your cluster automatically manage its own distributed storage without any manual disk wrangling.",
  "description": "Cloud-native storage orchestrator for Kubernetes. Turns Ceph into a self-managing, self-scaling distributed storage system via Kubernetes operators and CRDs.",
  "use_cases": [
   "Persistent block storage for stateful Kubernetes workloads",
   "Self-healing distributed object storage (S3-compatible)",
   "Shared filesystem for multi-pod access (CephFS)",
   "Database persistent volumes on bare metal"
  ],
  "used_by": [
   "CERN",
   "Roblox",
   "Red Hat OpenShift",
   "Giantswarm"
  ],
  "docs": "https://rook.io/docs/rook/latest-release/",
  "tutorial": "https://rook.io/docs/rook/latest-release/Getting-Started/intro/",
  "added": "2026-06-14",
  "dex": 257
 },
 {
  "id": "seaweedfs",
  "name": "SeaweedFS",
  "category": "Tool",
  "domain": "Storage",
  "eli5": "It's like having a really smart filing system that stores lots of files across many computers and finds them super fast.",
  "description": "SeaweedFS is a fast distributed object storage system written in Go that scales horizontally and handles massive amounts of unstructured data. It provides object storage capabilities similar to S3 but with simpler architecture and superior performance for many use cases.",
  "use_cases": [
   "Distributed image and media storage for content platforms",
   "Replacement for expensive S3-like services in private clouds",
   "High-throughput file serving in IoT and edge computing",
   "Cost-effective backup and archival systems"
  ],
  "used_by": [
   "Allegro",
   "Roblox",
   "large media platforms",
   "enterprise data centers"
  ],
  "docs": "https://github.com/seaweedfs/seaweedfs/wiki",
  "tutorial": "https://github.com/seaweedfs/seaweedfs/wiki/Getting-Started",
  "added": "2026-06-19",
  "dex": 258
 },
 {
  "id": "argo-workflows",
  "name": "Argo Workflows",
  "category": "Tool",
  "domain": "CI/CD",
  "description": "Kubernetes-native workflow engine for orchestrating parallel jobs as DAGs or step sequences. Each step runs as a container. Powers ML pipelines, data engineering, and CI/CD automation on Kubernetes. Part of the Argo project (CNCF graduated).",
  "use_cases": [
   "ML training pipelines: data prep → feature engineering → train → evaluate as a DAG",
   "CI/CD pipelines running directly on Kubernetes without a separate CI server",
   "Data engineering batch jobs with fan-out parallelism and artifact passing",
   "Scheduled recurring workflows via CronWorkflow resources",
   "Event-driven workflow triggers via Argo Events integration"
  ],
  "used_by": [
   "Intuit",
   "Adobe",
   "Google",
   "Alibaba",
   "BlackRock"
  ],
  "docs": "https://argo-workflows.readthedocs.io/en/latest/",
  "tutorial": "https://argo-workflows.readthedocs.io/en/latest/quick-start/",
  "added": "2026-06-08",
  "eli5": "A flowchart that runs jobs on Kubernetes in the right order, automatically.",
  "dex": 259
 },
 {
  "id": "argocd",
  "name": "ArgoCD",
  "category": "Tool",
  "domain": "CI/CD",
  "description": "Declarative GitOps continuous delivery tool for Kubernetes. Continuously reconciles cluster state with Git as the source of truth. CNCF graduated project. Pairs with Argo Rollouts for progressive delivery.",
  "use_cases": [
   "GitOps deployments: Git PR merge triggers automatic cluster sync",
   "Multi-cluster application delivery from a single control plane",
   "Canary and blue/green deployments with Argo Rollouts",
   "App-of-apps pattern for managing many microservices",
   "Drift detection and auto-remediation for cluster state"
  ],
  "used_by": [
   "Intuit",
   "Red Hat",
   "Tesla",
   "Alibaba",
   "Adobe"
  ],
  "docs": "https://argo-cd.readthedocs.io/en/stable/",
  "tutorial": "https://argo-cd.readthedocs.io/en/stable/getting_started/",
  "added": "2026-06-08",
  "eli5": "A robot that watches Git and keeps your cluster looking exactly like the blueprint.",
  "dex": 260
 },
 {
  "id": "azure-devops",
  "name": "Azure DevOps",
  "category": "Platform",
  "domain": "CI/CD",
  "eli5": "Microsoft's all-in-one project tracker, code host, and pipeline runner — like GitHub + Jenkins bundled together.",
  "description": "Microsoft's integrated DevOps platform: Boards (project tracking), Repos (Git hosting), Pipelines (CI/CD), Test Plans, and Artifacts (package registry). Common in enterprises already using Microsoft tooling. Pipelines support any cloud and self-hosted agents.",
  "use_cases": [
   "CI/CD pipelines for .NET, Java, Python, Node via YAML or classic editor",
   "Azure Boards for Agile/Scrum sprint planning and work item tracking",
   "Azure Artifacts for NuGet, npm, Maven, Python, and Universal packages",
   "Self-hosted agents in VNets for builds needing private network access",
   "Integration with GitHub for source control while using Azure Pipelines for CI/CD"
  ],
  "used_by": [
   "Microsoft",
   "HP",
   "3M",
   "Accenture",
   "Progressive Insurance"
  ],
  "docs": "https://learn.microsoft.com/en-us/azure/devops/",
  "tutorial": "https://learn.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-get-started",
  "added": "2026-06-08",
  "dex": 261
 },
 {
  "id": "buildkite",
  "name": "Buildkite",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "Buildkite is like a CI system where the build machines are yours — Buildkite just tells them what to do, so your code never leaves your infrastructure.",
  "description": "Hybrid CI/CD platform where the orchestration is SaaS but build agents run on your own infrastructure. Enables fast, scalable pipelines without sending code to a third party.",
  "use_cases": [
   "Fast parallel test suites on self-hosted agents",
   "CI/CD for security-sensitive regulated environments",
   "Large monorepo pipelines with dynamic step generation",
   "GPU and specialized hardware build agents"
  ],
  "used_by": [
   "Shopify",
   "Airbnb",
   "PagerDuty",
   "Canva"
  ],
  "docs": "https://buildkite.com/docs/",
  "tutorial": "https://buildkite.com/docs/tutorials/getting-started",
  "added": "2026-06-12",
  "dex": 262
 },
 {
  "id": "circleci",
  "name": "CircleCI",
  "category": "Platform",
  "domain": "CI/CD",
  "eli5": "A cloud service that runs your tests and deploys your code automatically every time you push — like a robot QA engineer.",
  "description": "Cloud-native CI/CD platform known for speed and developer experience. Pipelines defined in `.circleci/config.yml`. Offers Docker layer caching, test parallelism, reusable Orbs (pre-built pipeline packages), and self-hosted runners. Strong GitHub/Bitbucket integration.",
  "use_cases": [
   "Fast CI with Docker layer caching and test splitting across parallel containers",
   "Orbs: reusable config packages for AWS, GCP, Slack, Snyk, and 1000+ integrations",
   "Scheduled pipelines for nightly builds, dependency updates, and reports",
   "Self-hosted runners for compliance, on-prem, or GPU workloads",
   "Dynamic config: generate pipeline config at runtime based on changed files"
  ],
  "used_by": [
   "Spotify",
   "PagerDuty",
   "Stitch Fix",
   "Lyft",
   "Coinbase"
  ],
  "docs": "https://circleci.com/docs/",
  "tutorial": "https://circleci.com/docs/getting-started/",
  "added": "2026-06-08",
  "dex": 263
 },
 {
  "id": "earthly",
  "name": "Earthly",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "Earthly is like a recipe book that tells computers exactly how to build your software the same way every time, whether you're cooking at home or in a restaurant.",
  "description": "Earthly is a build automation tool that creates reproducible builds using a simple, Docker-based syntax. It simplifies CI/CD pipelines by allowing developers to define builds once and run them consistently across local machines and CI systems.",
  "use_cases": [
   "Creating reproducible Docker images and artifacts",
   "Simplifying multi-language monorepo builds",
   "Running the same build locally as in CI/CD pipelines",
   "Reducing CI/CD configuration complexity"
  ],
  "used_by": [
   "Stripe",
   "Shopify",
   "Segment"
  ],
  "docs": "https://docs.earthly.dev/",
  "tutorial": "https://docs.earthly.dev/basics/part-1-a-simple-earthfile",
  "added": "2026-06-15",
  "dex": 264
 },
 {
  "id": "flux-cd",
  "name": "Flux CD",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "A robot that watches Git and keeps your Kubernetes cluster matching exactly what's in the repo — like ArgoCD but different.",
  "description": "GitOps toolkit for Kubernetes by Weaveworks. Continuously reconciles cluster state with Git repositories. Modular design (Source, Kustomize, Helm, Notification controllers). CNCF graduated project. Integrates natively with kustomize and Helm.",
  "use_cases": [
   "GitOps: cluster state continuously synced from Git without manual kubectl apply",
   "Multi-tenancy: separate Flux instances per team with isolated Git repos",
   "Progressive delivery with Flagger: canary, blue/green, A/B via traffic shifting",
   "Image automation: auto-update Git when new container images are published",
   "Multi-cluster GitOps from a single management cluster"
  ],
  "used_by": [
   "Weaveworks",
   "Deutsche Telekom",
   "Lunar",
   "RingCentral",
   "Digital Ocean"
  ],
  "docs": "https://fluxcd.io/flux/",
  "tutorial": "https://fluxcd.io/flux/get-started/",
  "added": "2026-06-08",
  "dex": 265
 },
 {
  "id": "forgejo",
  "name": "Forgejo",
  "category": "Platform",
  "domain": "CI/CD",
  "eli5": "It's like GitHub but you can run it on your own computer or server, so you own all your code instead of renting space.",
  "description": "Forgejo is a lightweight, self-hosted Git service forked from Gitea that provides a GitHub-like experience without cloud dependency. It's ideal for organizations needing on-premise source code management with integrated CI/CD capabilities.",
  "use_cases": [
   "Self-hosted source code management for regulated industries",
   "Organizations avoiding cloud vendor lock-in",
   "Integrated CI/CD pipelines on private infrastructure",
   "Small to medium teams requiring GitHub-like features without SaaS costs"
  ],
  "used_by": [
   "Various government agencies",
   "financial institutions",
   "privacy-focused companies"
  ],
  "docs": "https://forgejo.org/docs",
  "tutorial": "https://forgejo.org/docs/latest/admin/",
  "added": "2026-06-19",
  "dex": 266
 },
 {
  "id": "github-actions",
  "name": "GitHub Actions",
  "category": "Platform",
  "domain": "CI/CD",
  "description": "GitHub-native CI/CD and automation platform. Workflows defined in YAML trigger on GitHub events (push, PR, release, schedule). Hosted runners for Linux/macOS/Windows; self-hosted runners for custom environments.",
  "use_cases": [
   "CI pipelines: lint, test, build on every PR",
   "CD pipelines: deploy to cloud on merge to main",
   "Automated release workflows: semantic versioning, changelog, publish to npm/PyPI",
   "OIDC-based passwordless auth to AWS, GCP, Azure — no stored credentials",
   "Matrix builds for cross-platform and multi-version testing"
  ],
  "used_by": [
   "Microsoft",
   "Google",
   "Meta",
   "Stripe",
   "Vercel"
  ],
  "docs": "https://docs.github.com/en/actions",
  "tutorial": "https://docs.github.com/en/actions/quickstart",
  "added": "2026-06-08",
  "eli5": "A helper that automatically does chores (tests, deploys) whenever you push code.",
  "dex": 267
 },
 {
  "id": "gitlab-ci",
  "name": "GitLab CI/CD",
  "category": "Platform",
  "domain": "CI/CD",
  "eli5": "GitHub Actions but built into GitLab — your code and your pipelines live in the same house.",
  "description": "Built-in CI/CD platform in GitLab, configured via `.gitlab-ci.yml`. Tight integration with GitLab's SCM, container registry, security scanning, and deployment environments. Supports self-hosted runners and Auto DevOps for zero-config pipelines.",
  "use_cases": [
   "CI/CD pipelines defined as YAML in the same repo as application code",
   "Auto DevOps: zero-config pipelines for build, test, SAST, DAST, deploy",
   "GitLab Environments and Deployments for tracking where code is deployed",
   "Self-managed runners on any infrastructure (Kubernetes, shell, Docker)",
   "Security scanning (SAST, DAST, dependency, container) built into pipelines"
  ],
  "used_by": [
   "Goldman Sachs",
   "Airbus",
   "T-Mobile",
   "Alibaba",
   "CERN"
  ],
  "docs": "https://docs.gitlab.com/ee/ci/",
  "tutorial": "https://docs.gitlab.com/ee/ci/quick_start/",
  "added": "2026-06-08",
  "dex": 268
 },
 {
  "id": "jenkins",
  "name": "Jenkins",
  "category": "Tool",
  "domain": "CI/CD",
  "description": "Open-source automation server — the original CI/CD tool, extensible via 1800+ plugins. Self-hosted, runs pipelines defined in Groovy-based Jenkinsfiles. Highly flexible but operationally heavy.",
  "use_cases": [
   "Build, test, and deploy pipelines via declarative/scripted Jenkinsfile",
   "Integration with any VCS, artifact registry, or deployment target via plugins",
   "Multi-branch pipelines for PR-based workflows",
   "Distributed builds across master-agent clusters",
   "Legacy enterprise CI/CD where self-hosted control is required"
  ],
  "used_by": [
   "LinkedIn",
   "Netflix",
   "eBay",
   "Bosch",
   "IBM"
  ],
  "docs": "https://www.jenkins.io/doc/",
  "tutorial": "https://www.jenkins.io/doc/pipeline/tour/getting-started/",
  "added": "2026-06-08",
  "eli5": "A robot that builds and tests your code every time you save a change.",
  "dex": 269
 },
 {
  "id": "moto",
  "name": "Moto",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "It's a fake AWS service that lives in your computer so you can test cloud code without paying real money.",
  "description": "Moto is a library that mocks AWS services for testing purposes, allowing developers to test AWS-dependent code locally without incurring costs. It supports hundreds of AWS services and is essential for CI/CD pipelines testing infrastructure as code.",
  "use_cases": [
   "Unit and integration testing of AWS-dependent applications",
   "Local development without AWS credentials",
   "CI/CD pipeline testing before deployment",
   "Cost reduction by avoiding test infrastructure charges"
  ],
  "used_by": [
   "Amazon",
   "Segment",
   "Twilio",
   "CloudFormation users"
  ],
  "docs": "https://docs.getmoto.org/",
  "tutorial": "https://docs.getmoto.org/en/latest/docs/getting_started.html",
  "added": "2026-06-26",
  "dex": 270
 },
 {
  "id": "renovate",
  "name": "Renovate",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "Renovate is like a robot assistant that automatically opens pull requests whenever your dependencies have updates, so you never fall behind.",
  "description": "Automated dependency update tool that creates PRs for outdated packages across npm, Docker, Helm, Terraform, and 100+ package managers. Highly configurable update policies.",
  "use_cases": [
   "Automated dependency updates across all package ecosystems",
   "Scheduled batching of minor/patch updates",
   "Security patch automation",
   "Monorepo dependency management"
  ],
  "used_by": [
   "WhiteSource",
   "GitLab",
   "Mend",
   "HashiCorp"
  ],
  "docs": "https://docs.renovatebot.com/",
  "tutorial": "https://docs.renovatebot.com/getting-started/installing-onboarding/",
  "added": "2026-06-12",
  "dex": 271
 },
 {
  "id": "tekton",
  "name": "Tekton",
  "category": "Tool",
  "domain": "CI/CD",
  "eli5": "A pipeline builder that lives inside Kubernetes — each step of your CI/CD runs as its own container.",
  "description": "Cloud-native CI/CD framework for Kubernetes. Defines pipelines as Kubernetes CRDs (Tasks, Pipelines, PipelineRuns). Each step is a container — portable, reusable, and cloud-agnostic. Foundation of OpenShift Pipelines and many enterprise CI/CD platforms.",
  "use_cases": [
   "Kubernetes-native CI/CD where each pipeline step is an OCI container",
   "Reusable Tasks shared via Tekton Hub across teams and orgs",
   "Supply chain security: Tekton Chains signs pipeline artifacts with Sigstore",
   "Multi-cloud pipelines that run identically on any Kubernetes cluster",
   "Foundation for OpenShift Pipelines and other enterprise CI platforms"
  ],
  "used_by": [
   "Google",
   "Red Hat",
   "IBM",
   "Puppet",
   "Broadcom"
  ],
  "docs": "https://tekton.dev/docs/",
  "tutorial": "https://tekton.dev/docs/getting-started/",
  "added": "2026-06-08",
  "dex": 272
 },
 {
  "id": "auth0",
  "name": "Auth0",
  "category": "Platform",
  "domain": "Identity",
  "eli5": "Auth0 is like hiring a professional security guard for your app — you don't build the login system yourself, you let experts handle it.",
  "description": "Managed identity platform providing authentication, authorization, and user management as a service. Supports social login, MFA, SSO, and enterprise federation.",
  "use_cases": [
   "Outsourcing authentication to a managed service",
   "Social login (Google, GitHub, Facebook)",
   "B2B SSO with SAML and OIDC",
   "Role-based access control (RBAC)"
  ],
  "used_by": [
   "Mozilla",
   "Siemens",
   "AMD",
   "Atlassian"
  ],
  "docs": "https://auth0.com/docs/",
  "tutorial": "https://auth0.com/docs/quickstarts",
  "added": "2026-06-12",
  "dex": 273
 },
 {
  "id": "aws-iam",
  "name": "AWS IAM",
  "category": "Platform",
  "domain": "Identity",
  "description": "AWS Identity and Access Management — controls who can do what in AWS. Define users, roles, and policies to grant least-privilege access to every AWS resource. Central to AWS security posture.",
  "use_cases": [
   "Least-privilege policies for services, users, and cross-account access",
   "IAM roles for EC2/Lambda/EKS workloads (no long-lived credentials)",
   "Service Control Policies (SCPs) in AWS Organizations for guardrails",
   "OIDC federation for GitHub Actions / Kubernetes workload identity",
   "Auditing access with IAM Access Analyzer and CloudTrail"
  ],
  "used_by": [
   "All AWS customers"
  ],
  "docs": "https://docs.aws.amazon.com/iam/",
  "tutorial": "https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html",
  "added": "2026-06-08",
  "eli5": "The bouncer who checks IDs and decides who gets into which room.",
  "dex": 274
 },
 {
  "id": "azure-entra-id",
  "name": "Azure Entra ID",
  "category": "Platform",
  "domain": "Identity",
  "eli5": "Microsoft's bouncer that remembers all your company's employees and lets them into all the apps with one password.",
  "description": "Microsoft's cloud identity platform (formerly Azure Active Directory). Enterprise SSO, MFA, conditional access, and B2B/B2C identity for 500M+ users. The identity backbone of Microsoft 365, Azure, and thousands of SaaS apps. OIDC/SAML/OAuth2 federation hub.",
  "use_cases": [
   "Enterprise SSO across Microsoft 365, Azure, and 3000+ pre-integrated SaaS apps",
   "Conditional access policies: enforce MFA based on user, location, device risk",
   "B2B collaboration: external partners access internal apps with their own credentials",
   "B2C identity: customer-facing app login with social providers (Google, Facebook)",
   "Workload identity federation for GitHub Actions and Kubernetes to access Azure"
  ],
  "used_by": [
   "Fortune 500 companies",
   "Government agencies",
   "Universities",
   "Healthcare systems"
  ],
  "docs": "https://learn.microsoft.com/en-us/entra/identity/",
  "tutorial": "https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-web-app-sign-in",
  "added": "2026-06-08",
  "dex": 275
 },
 {
  "id": "dex",
  "name": "Dex",
  "category": "Tool",
  "domain": "Identity",
  "eli5": "Dex is like a universal translator for logins — it sits in front of your apps and lets users sign in with GitHub, LDAP, or SAML, giving your app a single clean OIDC interface.",
  "description": "Federated OpenID Connect provider that bridges OIDC/OAuth2 to upstream identity providers like LDAP, SAML, GitHub, and Google. Acts as an identity hub for Kubernetes and apps.",
  "use_cases": [
   "OIDC front-end for Kubernetes kubectl authentication",
   "Federating LDAP/Active Directory into OIDC",
   "Single OIDC provider aggregating multiple IdPs",
   "GitOps tooling auth (ArgoCD, Flux)"
  ],
  "used_by": [
   "Red Hat",
   "Kubernetes community",
   "Argo Project"
  ],
  "docs": "https://dexidp.io/docs/",
  "tutorial": "https://dexidp.io/docs/getting-started/",
  "added": "2026-06-14",
  "dex": 276
 },
 {
  "id": "keycloak",
  "name": "Keycloak",
  "category": "Tool",
  "domain": "Identity",
  "description": "Open-source Identity and Access Management (IAM) solution by Red Hat. Provides SSO, OAuth 2.0, OpenID Connect, and SAML out of the box. Self-hosted alternative to Auth0 and Okta for teams needing full control over identity infrastructure.",
  "use_cases": [
   "SSO across multiple applications with a single login via OIDC/SAML",
   "Social login federation (Google, GitHub, LDAP, Active Directory)",
   "Fine-grained authorization with roles, groups, and resource-based policies",
   "Token exchange and service account auth for machine-to-machine flows",
   "Multi-tenant identity with separate realms per customer or environment"
  ],
  "used_by": [
   "Red Hat",
   "Bosch",
   "Airbus",
   "Deutsche Telekom",
   "Zalando"
  ],
  "docs": "https://www.keycloak.org/documentation",
  "tutorial": "https://www.keycloak.org/getting-started/getting-started-docker",
  "added": "2026-06-08",
  "eli5": "One front door for all your apps — log in once, get into everything.",
  "dex": 277
 },
 {
  "id": "okta",
  "name": "Okta",
  "category": "Platform",
  "domain": "Identity",
  "eli5": "Okta is like a master keycard for enterprise apps — employees log in once and Okta silently opens every door they're allowed through.",
  "description": "Enterprise identity and access management platform. Provides SSO, MFA, lifecycle management, and API security for workforce and customer identity use cases.",
  "use_cases": [
   "Workforce SSO across SaaS apps",
   "Customer identity and access management (CIAM)",
   "Zero-trust policy enforcement",
   "SCIM-based user provisioning and deprovisioning"
  ],
  "used_by": [
   "FedEx",
   "T-Mobile",
   "jetBlue",
   "Nordstrom"
  ],
  "docs": "https://developer.okta.com/docs/",
  "tutorial": "https://developer.okta.com/docs/guides/",
  "added": "2026-06-12",
  "dex": 278
 },
 {
  "id": "ory",
  "name": "Ory",
  "category": "Platform",
  "domain": "Identity",
  "eli5": "Ory is like Auth0 but open-source — a complete identity toolkit you can self-host or use as a cloud service, covering login, permissions, and API security.",
  "description": "Open-source identity infrastructure stack: Kratos (user management), Hydra (OAuth2/OIDC), Keto (permissions), and Oathkeeper (API gateway). Cloud-native and self-hostable.",
  "use_cases": [
   "Self-hosted OAuth2 and OpenID Connect server",
   "User registration, login, and 2FA flows",
   "Fine-grained permissions with Google Zanzibar model",
   "Zero-trust API access control"
  ],
  "used_by": [
   "Segment",
   "Sainsbury's",
   "various open-source projects"
  ],
  "docs": "https://www.ory.sh/docs/",
  "tutorial": "https://www.ory.sh/docs/getting-started/overview",
  "added": "2026-06-12",
  "dex": 279
 },
 {
  "id": "spiffe",
  "name": "SPIFFE / SPIRE",
  "category": "Tool",
  "domain": "Identity",
  "description": "SPIFFE (Secure Production Identity Framework For Everyone) is a CNCF standard for workload identity. SPIRE is its reference implementation. Issues short-lived X.509 SVIDs and JWT-SVIDs to workloads — cryptographic identity without secrets or passwords.",
  "use_cases": [
   "Workload identity for microservices: every pod/VM gets a cryptographic SPIFFE ID",
   "mTLS between services using automatically rotated X.509 SVIDs",
   "Eliminating static credentials: services authenticate by identity, not secrets",
   "Federation across clouds and on-prem via SPIFFE federation bundles",
   "Foundation for Istio, Consul Connect, and Envoy SDS identity"
  ],
  "used_by": [
   "Bloomberg",
   "GitHub",
   "Square",
   "Pinterest",
   "Uber"
  ],
  "docs": "https://spiffe.io/docs/latest/spiffe-about/overview/",
  "tutorial": "https://spiffe.io/docs/latest/try/getting-started-linux-macos-x/",
  "added": "2026-06-08",
  "eli5": "An ID card factory that gives every microservice a passport so they trust each other.",
  "dex": 280
 },
 {
  "id": "supabase-auth",
  "name": "Supabase Auth",
  "category": "Tool",
  "domain": "Identity",
  "eli5": "Supabase Auth is like a bouncer at a nightclub who checks your ID and remembers you so you don't have to prove who you are every time.",
  "description": "An open-source authentication and authorization system built on PostgreSQL Row Level Security (RLS), providing email/password, OAuth, magic links, and multi-factor authentication out of the box. It eliminates the need for external identity providers while maintaining enterprise-grade security.",
  "use_cases": [
   "Building modern web and mobile applications with built-in user authentication",
   "Implementing fine-grained row-level access control directly in the database",
   "Enabling social login through OAuth providers without third-party IAM platforms",
   "Securing real-time applications with token-based authentication"
  ],
  "used_by": [
   "Vercel",
   "Figma",
   "ProductHunt"
  ],
  "docs": "https://supabase.com/docs/guides/auth",
  "tutorial": "https://supabase.com/docs/guides/auth/quickstarts",
  "added": "2026-06-27",
  "dex": 281
 },
 {
  "id": "zitadel",
  "name": "ZITADEL",
  "category": "Platform",
  "domain": "Identity",
  "eli5": "It's like a security guard at a club who checks your ID, remembers who you are, and decides what you're allowed to access without asking again.",
  "description": "ZITADEL is an open-source identity and access management (IAM) platform that provides authentication, authorization, and user management capabilities. It offers enterprise-grade security features with a cloud-native, Kubernetes-ready architecture.",
  "use_cases": [
   "Enterprise authentication and single sign-on (SSO) for applications",
   "Managing user roles, permissions, and access control policies",
   "Integrating OAuth 2.0 and OpenID Connect authentication",
   "Implementing multi-tenant identity management at scale"
  ],
  "used_by": [
   "Roche",
   "Boehringer Ingelheim",
   "Multiple enterprises",
   "Open-source community"
  ],
  "docs": "https://zitadel.com/docs",
  "tutorial": "https://zitadel.com/docs/quickstarts/start-coding",
  "added": "2026-06-17",
  "dex": 282
 },
 {
  "id": "mermaid",
  "name": "Mermaid",
  "category": "Tool",
  "domain": "Other",
  "eli5": "It's like a magic notebook where you can write simple instructions and it automatically draws diagrams, flowcharts, and pictures for you.",
  "description": "Mermaid is a JavaScript-based diagramming and charting tool that uses a simple, markdown-inspired syntax to create and modify diagrams dynamically. It enables developers to document architecture, workflows, and systems as code within their projects.",
  "use_cases": [
   "Creating system architecture and flowchart documentation in version control",
   "Embedding diagrams directly in markdown documentation and README files",
   "Visualizing database schemas, user journeys, and deployment workflows",
   "Generating sequence diagrams and Gantt charts for project planning"
  ],
  "used_by": [
   "GitHub",
   "GitLab",
   "Notion",
   "Confluence"
  ],
  "docs": "https://mermaid.js.org/",
  "tutorial": "https://mermaid.js.org/ecosystem/integrations.html",
  "added": "2026-06-14",
  "dex": 283
 },
 {
  "id": "mermaid-live",
  "name": "Mermaid Live",
  "category": "Tool",
  "domain": "Other",
  "eli5": "Mermaid is like a magic sketchpad where you write simple words and it automatically draws charts, flowcharts, and diagrams for you.",
  "description": "Mermaid is a JavaScript-based diagramming and charting tool that uses a Markdown-inspired syntax to create and modify diagrams dynamically. It's widely used for documentation, architecture diagrams, and workflow visualization.",
  "use_cases": [
   "Creating architecture and system design diagrams",
   "Generating flowcharts and process workflows",
   "Documenting user journey and sequence flows",
   "Building organizational charts and timeline diagrams"
  ],
  "used_by": [
   "GitHub",
   "GitLab",
   "Notion",
   "Confluence"
  ],
  "docs": "https://mermaid.js.org/",
  "tutorial": "https://mermaid.live/",
  "added": "2026-06-18",
  "dex": 284
 }
];
