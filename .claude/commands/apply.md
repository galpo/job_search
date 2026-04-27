---
model: claude-opus-4-7
description: Tailor resume + draft outreach for a role in one flow — outputs .md + .docx
---
# Apply to a Role — Resume + Outreach in One Flow

You are helping Ritee Rouf prepare everything she needs to apply for a specific role.
This command combines resume tailoring and outreach drafting into a single flow.

**Skip-friendly:** If Ritee skips `/scan-inbox` or `/score-role`, this command works standalone — just paste the JD or point to `jds/[company].txt`.

---

## Step 1 — Get the JD and context
If a company name was passed as an argument, look for the JD in `jds/[company]*.txt` or `jds/[company]*.md`.
If no JD file exists, ask Ritee to paste the JD or provide the URL. Save it to `jds/[company]_[role].txt` before continuing.

Also read:
- `resumes/RiteeRouf_Master.md` — canonical resume (always the base)
- `master_profile.json` — deal-breakers and preferences
- `scorecards/[company]_*.md` if a scorecard already exists — use the outreach angle from it
- `quick_context.md` — current pipeline and differentiators

---

## Step 2 — Identify the top 3 JD priorities
From the JD, extract:
- The 3 competencies the role most values (e.g. "AI GTM", "category creation", "developer audience")
- Key terminology and phrases to mirror (for ATS and human scan)
- Any gaps vs. Ritee's background — flag these upfront

---

## Step 3 — Tailor the resume
Invoke the `tailor-resume` skill with the company name and JD. The skill handles all rules (no em dashes, 2-page limit, metric integrity, voice).

The skill saves to `resumes/tailored/[Company]_[YYYYMMDD].md` and reports the top 3 changes.

**Show Ritee the changes before exporting:**
Ask: "Approve these changes, or adjust anything?"

---

## Step 4 — Export to .docx
Once Ritee approves the tailored .md:
Use the `anthropic-skills:docx` skill to export `resumes/tailored/[Company]_[YYYYMMDD].md` to `resumes/tailored/[Company]_[YYYYMMDD].docx`.
Confirm: "Resume saved as [Company]_[YYYYMMDD].docx ✓"

---

## Step 5 — Draft outreach
Ask Ritee: **"How are you applying — LinkedIn outreach to the hiring manager, direct apply on their website, or both?"**

**If LinkedIn outreach (or both):**
- Ask for the hiring manager's name and title (or check `outreach/` for an existing file)
- Route to the correct template:
  - HM / CMO / VP Marketing / Director → Template 1 (impact-first, narrative)
  - VP People / HR / Recruiter → Template 7 (level + availability, under 100 words)
- Draft 2 versions: one more direct, one warmer
- Voice rules: warm and confident, lead with what's relevant to them, 4–5 bullets, mobile-readable, under 200 words, include Substack link as proof, San Mateo angle if Bay Area, fractional option if budget-constrained
- Show both versions and ask: "Which version, or a blend?"
- After approval: create Gmail draft via `gmail_create_draft` MCP, save contact file to `outreach/[firstname]_[company].md`

**If direct apply only:**
- Skip outreach draft
- Note application method in the tracking update (Step 6)

---

## Step 6 — Update pipeline status
Update `strategy/active_roles.md`:
- If already in the tracker: change status to 🟡 Outreach (if message drafted) or ⚪ Applied (if direct apply)
- If not yet in tracker: add a new row with status 🟡 Outreach or ⚪ Applied

Update Notion pipeline using the Notion MCP:
- Find the role entry (or create it if missing)
- Update status to match above
- Confirm: "Notion updated ✓"

---

## Step 7 — Report back
Tell Ritee:
- Tailored resume saved: `resumes/tailored/[Company]_[YYYYMMDD].docx` ✓
- Outreach drafted + Gmail draft created (or: direct apply — no outreach) ✓
- Pipeline updated in `active_roles.md` + Notion ✓
- Any gaps to address in the interview if you get a response: [1–2 bullets]
