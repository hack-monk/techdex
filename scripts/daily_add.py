#!/usr/bin/env python3
"""
TechDex — Daily automated tool addition.
Called by GitHub Actions every day. Asks Claude to pick 5 new industry tools,
validates the JSON, appends to entries.json, and rebuilds the site artifacts.
"""

import json
import os
import subprocess
import sys
from datetime import date

import anthropic

SCHEMA_EXAMPLE = """{
  "id": "unique-kebab-case-id",
  "name": "Tool Name",
  "category": "Tool | Language | Platform | Framework | Concept | Other",
  "domain": "Networking | DevOps | Cloud | Database | AI/ML | SRE/Observability | Security | Data Engineering | Frontend | Backend | Messaging | Storage | CI/CD | Identity | Other",
  "eli5": "One sentence explaining the tool like the reader is 5 years old. Use a concrete analogy.",
  "description": "One or two sentence description of what it is and why it matters.",
  "use_cases": [
    "Use case 1",
    "Use case 2",
    "Use case 3",
    "Use case 4"
  ],
  "used_by": ["Company A", "Company B", "Company C"],
  "docs": "https://...",
  "tutorial": "https://...",
  "added": "YYYY-MM-DD"
}"""

REQUIRED_FIELDS = {
    "id", "name", "category", "domain",
    "eli5", "description", "use_cases",
    "used_by", "docs", "tutorial", "added",
}

VALID_CATEGORIES = {"Tool", "Language", "Platform", "Framework", "Concept", "Other"}
VALID_DOMAINS = {
    "Networking", "DevOps", "Cloud", "Database", "AI/ML",
    "SRE/Observability", "Security", "Data Engineering",
    "Frontend", "Backend", "Messaging", "Storage",
    "CI/CD", "Identity", "Other",
}


def validate_tool(tool: dict) -> list[str]:
    """Return list of validation errors, empty if valid."""
    errors = []
    missing = REQUIRED_FIELDS - set(tool.keys())
    if missing:
        errors.append(f"missing fields: {missing}")
    if tool.get("category") not in VALID_CATEGORIES:
        errors.append(f"invalid category: {tool.get('category')}")
    if tool.get("domain") not in VALID_DOMAINS:
        errors.append(f"invalid domain: {tool.get('domain')}")
    if not isinstance(tool.get("use_cases"), list) or len(tool.get("use_cases", [])) < 2:
        errors.append("use_cases must be a list with at least 2 items")
    if not isinstance(tool.get("used_by"), list) or len(tool.get("used_by", [])) < 1:
        errors.append("used_by must be a non-empty list")
    return errors


def parse_json_response(text: str) -> list[dict]:
    """Parse JSON from model response, stripping markdown fences if present."""
    text = text.strip()
    if text.startswith("```"):
        lines = text.splitlines()
        # drop first line (```json or ```) and last line (```)
        text = "\n".join(lines[1:-1]).strip()
    return json.loads(text)


def set_github_output(key: str, value: str) -> None:
    output_file = os.environ.get("GITHUB_OUTPUT", "")
    if output_file:
        with open(output_file, "a") as f:
            f.write(f"{key}={value}\n")


def main() -> None:
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("ERROR: ANTHROPIC_API_KEY environment variable is not set.")
        sys.exit(1)

    # ── Load existing entries ──────────────────────────────────────────────
    entries_path = "entries.json"
    with open(entries_path) as f:
        entries: list[dict] = json.load(f)

    existing_ids: set[str] = {e["id"] for e in entries}
    today = date.today().isoformat()

    print(f"Current catalog: {len(entries)} entries")
    print(f"Asking Claude to suggest 5 new tools for {today}…")

    # ── Build prompt ───────────────────────────────────────────────────────
    id_list = sorted(existing_ids)
    prompt = f"""You are maintaining TechDex, a catalog of widely-used software engineering tools and technologies.

Today's date: {today}

These tool IDs are already in the catalog — do NOT suggest any of them:
{json.dumps(id_list, indent=2)}

Your task: suggest exactly 5 NEW tools that are:
- Widely adopted in the software industry (used in real production systems)
- Not already in the list above
- Span different domains when possible (avoid clustering all 5 in one domain)
- Real, existing tools — not fictional

Return ONLY a valid JSON array of exactly 5 objects. No explanation, no markdown, no prose — just the raw JSON array.

Every object must follow this schema exactly:
{SCHEMA_EXAMPLE}

Rules:
- "id" must be lowercase kebab-case, unique, and match the tool name
- "eli5" must be one sentence with a concrete real-world analogy a 5-year-old would understand
- "description" must be 1-2 sentences, factually accurate
- "use_cases" must have 3-4 items
- "used_by" must list 2-4 real companies known to use the tool
- "docs" and "tutorial" must be real, working URLs
- "added" must be "{today}"
- "category" must be one of: Tool, Language, Platform, Framework, Concept, Other
- "domain" must be one of: Networking, DevOps, Cloud, Database, AI/ML, SRE/Observability, Security, Data Engineering, Frontend, Backend, Messaging, Storage, CI/CD, Identity, Other
"""

    # ── Call Anthropic API ─────────────────────────────────────────────────
    client = anthropic.Anthropic(api_key=api_key)

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )

    response_text = message.content[0].text
    print(f"Tokens used — input: {message.usage.input_tokens}, output: {message.usage.output_tokens}")

    # ── Parse & validate ───────────────────────────────────────────────────
    try:
        new_tools = parse_json_response(response_text)
    except json.JSONDecodeError as e:
        print(f"ERROR: Could not parse JSON response: {e}")
        print("Raw response:", response_text[:500])
        sys.exit(1)

    if not isinstance(new_tools, list):
        print("ERROR: Response is not a JSON array")
        sys.exit(1)

    added_names: list[str] = []
    skipped: list[str] = []

    for tool in new_tools:
        tid = tool.get("id", "")

        # Skip duplicates
        if tid in existing_ids:
            skipped.append(f"{tid} (duplicate)")
            continue

        # Validate schema
        errors = validate_tool(tool)
        if errors:
            print(f"  SKIP {tid}: {'; '.join(errors)}")
            skipped.append(f"{tid} (invalid)")
            continue

        entries.append(tool)
        existing_ids.add(tid)
        added_names.append(tool["name"])
        print(f"  + {tool['name']} ({tool['domain']})")

    if skipped:
        print(f"Skipped: {', '.join(skipped)}")

    if not added_names:
        print("No new tools added. Exiting without changes.")
        set_github_output("tools_added", "0")
        set_github_output("tool_names", "none")
        sys.exit(0)

    # ── Write updated entries.json ─────────────────────────────────────────
    with open(entries_path, "w") as f:
        json.dump(entries, f, indent=2)
        f.write("\n")

    # ── Rebuild README + web/data/entries.js ──────────────────────────────
    result = subprocess.run(["python3", "scripts/build.py"], capture_output=True, text=True)
    if result.returncode != 0:
        print("ERROR: build.py failed")
        print(result.stderr)
        sys.exit(1)
    print(result.stdout.strip())

    # ── Report ────────────────────────────────────────────────────────────
    print(f"\nDone. Added {len(added_names)} tools: {', '.join(added_names)}")
    set_github_output("tools_added", str(len(added_names)))
    set_github_output("tool_names", ", ".join(added_names))


if __name__ == "__main__":
    main()
