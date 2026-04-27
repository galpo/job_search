---
model: claude-haiku-4-5-20251001
description: Scan Gmail job alerts (last 24h), extract + triage, output shortlist
---
# Scan Inbox — Daily Job Alert Triage

You are helping Ritee Rouf triage new job alerts from her Gmail inbox.
This runs daily. Keep it cheap and fast — Haiku tier.
## Step 1 — Pull recent alerts from Gmail
Use the Gmail MCP `search_threads` tool with these queries (parallel calls):
- `from:(jobs-noreply@linkedin.com OR jobalerts-noreply@linkedin.com) newer_than:1d`
- `from:indeed.com newer_than:1d`
- `subject:(job alert OR new jobs OR jobs for you) newer_than:1d`

If Ritee says "catch up" or passes a wider window (e.g. "last 7 days"), adjust `newer_than` accordingly.

## Step 2 — Extract roles
For each thread, use `get_thread` to read the body. Extract:
- Company
- Role title
- URL (the apply/view link, not the tracker)
- Comp range (if visible)
- Stage (if visible — Series A, B, public, etc.)
- Location (remote / hybrid / onsite + city)

Skip duplicates — if you see the same company+role twice, keep the newer one.

## Step 3 — Apply coarse filters (use master_profile.json)
Read `master_profile.json` for must-haves, nice-to-haves, deal-breakers.
Auto-skip (only these — keep everything else in "worth a look"):
- Pure consumer / non-B2B (direct-to-consumer retail, entertainment, gaming with no B2B component)
- Roles where title contains "Consultant", "Advisor", "Solution Consultant", "Advisory" but NOT "Product Marketing" or "GTM" — these are sales/advisory roles mismatched by alert keywords
- **Anthropic** — any role — until July 1, 2026 (90-day signal-building plan active; reapply date is July 1). Move to a separate "Long Game" section, not high priority.

Include everything else — don't filter out by stage, title level, or industry.

Auto-flag high priority:
- Title: VP / Sr. Director / Head of Marketing / Head of PMM / Director PMM
- Title: Senior PMM / Sr. PMM / Staff PMM / Principal PMM / Founding PMM / PMM Lead — at any company
- Title: ANY level (PMM, Sr. PMM, Director, VP) at large enterprise companies: SAP, Cisco, Microsoft, Salesforce, Oracle, IBM, Adobe, Workday, ServiceNow, Google, Apple, Meta, Amazon, Intuit, Palo Alto Networks, CrowdStrike, Datadog, Snowflake, Databricks
- Company is actively hiring (recent funding, headcount growth, job board posting date recent)
- Location: anywhere in California (SF, Bay Area, LA, SD, remote) OR fully remote OR hybrid
- Open to relocate: Oregon, Colorado, Seattle, NY or, international— flag these as "relocation candidate"
- Comp range visible AND ≥$200K base
- Full-time role

## Step 4 — Cross-check against active pipeline, scorecards, and known skips
Read `strategy/active_roles.md` and `scorecards/`. Categorize each role:

**Skip entirely (do not surface):**
- Already in active pipeline (any non-❌ status)
- Already scored (scorecard exists) and decision was No/Skip
- In archive/closed/
- **Permanently skipped companies:** Adobe (applied multiple times, no response — auto-skip all Adobe PMM roles)

**Surface as "Remind — not yet applied":**
- Company is in active_roles.md with status 🔵 Applied but outreach hasn't been sent yet
- Role was in a previous triage file but no resume was tailored

**Surface as "New":**
- Not in active_roles.md at all
- Not in any prior triage file this week

Report only **new roles** and **remind roles** — not already-actioned ones.

## Step 5 — Quick score each remaining role
For each role that passed filters and isn't already in the pipeline, run a fast inline score (no file save — Haiku speed):

Score only 3 dimensions:
| Dimension | Weight | Signal |
|-----------|--------|--------|
| Role fit | 40% | Title level + AI/B2B SaaS match |
| Stage fit | 30% | Series B to public; GTM-building phase |
| Comp / remote | 30% | Remote or hybrid; no relocation; ≥$200K if visible |

Apply deal-breaker check (from `master_profile.json`) — if triggered, mark as Skip regardless of score.

Output: single-line score per role: `[X]% — Tier N` — no explanation needed here, just the number.

## Step 6 — Rank and save shortlist
Save to `inbox-triage/YYYY-MM-DD.md` (create `inbox-triage/` dir if needed).

Format:
```markdown
# Inbox Triage — [YYYY-MM-DD]
*Scanned [N] alerts, [M] deduped, [K] passed filters.*

## High priority ([count])
| # | Company | Role | Quick Score | Comp | Location | URL |
|---|---------|------|-------------|------|----------|-----|
| 1 | ... | ... | 82% T1 | ... | ... | [link] |

## Worth a look ([count])
| # | Company | Role | Quick Score | Comp | Location | URL |

## Skipped ([count]) — why
- Company X — Role Y → deal-breaker: relocation required
...
```

## Step 7 — Report back (keep it short)
Summarize in chat with two sections:

**New roles:** "Scanned [N] alerts. [K] new roles. [H] high priority."
- List the top 3: company + role + quick score + one-line why
- Ask: "Yes or no on any of these? Say yes and I'll run `/apply` directly."

**Pending action (if any):** "You have [X] roles in pipeline with no outreach sent yet:"
- List company + role + status + what's still needed (e.g. "resume done, outreach pending")
- This is a nudge only — don't re-score or re-triage these

Do NOT tailor resumes or draft outreach here — that's `/apply`. This is triage only.

## Step 7 — Mark threads read (optional)
If Ritee confirms the triage is good, offer to mark the processed Gmail threads as read so they don't re-surface tomorrow. Do NOT do this automatically — ask first.
Iterate and adapt
