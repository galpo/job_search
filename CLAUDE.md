# Ritee Rouf — Job Search Agent Project

## What this is
AI agents for scoring roles, tailoring resumes, drafting outreach, and interview prep.
Built on Claude Code CLI + Anthropic SDK.

## Source of truth files (read these, not the archive)
| File | Purpose |
|------|---------|
| `quick_context.md` | Who Ritee is, active pipeline — load every session |
| `strategy/active_roles.md` | Live pipeline tracker |
| `resumes/tailored/RiteeRouf_Master.md` | Canonical resume — always the base |
| `outreach/TEMPLATES.md` | Outreach templates T1–T7 |
| `interview_coach/stories/STAR_BANK.md` | Pre-written STAR stories |
| `master_profile.json` | Scoring weights + deal-breakers |

**Do NOT load:** `archive/` files are closed/historical — read only if explicitly asked.

## Agents
| Agent | Command | Purpose |
|-------|---------|---------|
| tailor-resume | `npm run tailor "<JD or URL>" "Company" "Role"` | Score JD, tailor resume, output .docx + .pdf |
| research-target | `npm run research "Company" "Person" "context"` | Research brief for interviews + outreach |

## What do I need to do?

| Situation | Command |
|-----------|---------|
| Found a new job posting | Save JD to `jds/[company].txt` → `/score-role` |
| Need to tailor my resume | JD in `jds/` → `/tailor-resume [company]` |
| Need to reach out to someone | `/draft-outreach [firstname] [company]` |
| Interview coming up | `/interview-prep [Company]` |
| Just finished a call | `/debrief [Company]` — Granola auto-pulled |
| Weekly orientation | `/pipeline-review` |
| Daily job alert triage | `/scan-inbox` |

## Slash commands
| Command | Model | Task |
|---------|-------|------|
| `/score-role` | Sonnet 4.6 | Score JD, tier, fit % |
| `/tailor-resume` | Opus 4.7 | Tailor canonical resume to JD |
| `/draft-outreach` | Opus 4.7 | 2 draft versions + Gmail draft |
| `/interview-prep` | Sonnet 4.6 | Full prep guide — research, Q&A, battle plan |
| `/debrief` | Sonnet 4.6 | Debrief from Granola + update status |
| `/pipeline-review` | Haiku 4.5 | Weekly snapshot — stale roles, next actions |
| `/scan-inbox` | Haiku 4.5 | Daily triage of Gmail + Indeed job alerts |

## Connected MCPs (use these instead of file reads when possible)
- **Notion** — pipeline status, outreach log (source of truth)
- **Gmail** — create drafts directly (draft-outreach does this automatically)
- **Granola** — pull meeting transcripts (debrief does this automatically)
- **Google Calendar** — interview scheduling
- **Google Drive** — resume/doc access

## Key rules
- Never fabricate metrics — verified figures only
- Never swap or combine the two Omnicell achievements ($45M vs XaaS)
- No em dashes in any authored content
- Resume = 2 pages max, reverse-chronological
- Review gate before any file is generated
- research-target output feeds directly into interview-prep and outreach

## Token efficiency rules
- **Model tier by task:** Haiku → scanning/triage | Sonnet → scoring/research/synthesis | Opus → writing (outreach, resume)
- **Reference files, don't paste:** `@jds/skydio.txt` not pasted content
- **/compact** before context gets large
- **New session per task** — don't carry resume + outreach + debrief in one thread
- **Skip read-back** — generate → user verifies visually → return only if wrong
- **Subagents for heavy reads** — score-role and tailor-resume already dispatch internally; keep using them vs inline

## Token-waste advisor (MANDATORY behavior)
When you notice Ritee doing something token-heavy, flag it in one line and suggest the optimized path. Do this proactively, not annoyingly — one heads-up per issue, then continue.

Watch for and call out:
| Pattern | Flag it with |
|---------|--------------|
| Ritee pastes full JD/resume/email content | "Heads-up: save to `jds/[name].txt` + reference `@jds/[name].txt` — saves ~2K tokens." |
| Session running on Opus for triage/scoring | "Heads-up: switch to `/model claude-sonnet-4-6` for this task — Opus is overkill." |
| Reading `archive/` files without reason | "Heads-up: `archive/` is for closed roles. Current status is in `active_roles.md` or Notion." |
| Ritee asks me to read back output I just generated | "Heads-up: open the file directly — skipping the read-back saves ~1K tokens per turn." |
| Carrying interview + resume + outreach in one thread | "Heads-up: 3 different tasks in one session. Consider `/compact` or new session to keep context focused." |
| Pasting a URL when tab is open in Chrome | "Heads-up: Chrome MCP can read the open tab directly — no paste needed." |
| Asking vaguely ("review everything") vs directively | "Heads-up: directive asks ('fix line X in Y.md') burn ~3× fewer tokens than open-ended reviews." |

Be a coach, not a nag. After flagging once, drop it unless it repeats in a new way.

## File locations
- Canonical resume: `resumes/tailored/RiteeRouf_Master.md`
- Agent output: `output/`
- Archived closed roles + old strategy: `archive/`
- SARIS portfolio: https://docs.google.com/spreadsheets/d/1OTsDJOj0Ewg6I5Mtb97DD6QpPpGDrxslYJFRRWnRNZ4

## Setup
```bash
cd ~/job_search
npm install
```
