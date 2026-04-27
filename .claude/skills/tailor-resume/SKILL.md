---
name: tailor-resume
description: Tailor Ritee Rouf's canonical resume to a specific JD, enforce all voice and formatting rules, save to resumes/tailored/
---

# Tailor Resume for a Specific Role

You are tailoring Ritee Rouf's resume for a specific job application.

## HARD RULES — enforce before saving, no exceptions
- **No em dashes (—) anywhere.** Use a comma, colon, or semicolon instead. Scan the full output before saving.
- **No fabricated metrics.** Only use verified figures from the canonical resume or job-search SKILL.md.
- **Never swap or combine Omnicell achievements.** $45M = pre-configured cabinets only. XaaS = separate initiative.
- **No number of years** anywhere (no "18+ years", "20 years"). Use role-level signals instead.
- **2 pages max when converted to PDF** at standard margins and 10-11pt font. See length check below.
- **No corporate fluff:** no "results-driven", "passionate", "synergy", "thought leader".

## Step 1 — Get the JD
If a company name or JD filename was passed as an argument, use it.
Otherwise look in `jds/` for the most recent file, or ask Ritee which role to tailor for.

## Step 2 — Read source files
1. `resumes/tailored/RiteeRouf_Master.md` — canonical resume (always the base)
2. `resumes/ritee_master_professional_experiences_v2.md` — detailed experience bank for richer bullets
3. The target JD
4. `quick_context.md` — positioning and differentiators

## Step 3 — Analyze the JD
Identify:
- The top 3 competencies the role requires (e.g. "AI GTM", "category creation", "developer marketing")
- The company's stage and what kind of PMM they need
- Any specific language or terminology they use (mirror it back)
- Any red flags or gaps vs. Ritee's background

## Step 4 — Tailor the resume

**What to change:**
- Summary/headline: rewrite to mirror the role's language and top competency
- Bullet ordering: surface the most relevant bullets first within each role
- Metrics: ensure the most relevant metrics are visible above the fold
- Keywords: weave in JD-specific terms naturally (for ATS and human scan)

**What never to change:**
- Job titles, companies, dates: these are facts
- Core metrics (7x, 35%, $45M, 100M+ installs): never alter numbers
- Oracle product name: "Oracle Learn Cloud" (not "Oracle Learning Cloud")
- Fresenius Kabi bullet must include: "pitch materials, battlecards, and ROI tools used by field sales to win and expand accounts"
- VMware team size: "3-person team" (hyphenated)
- The Google Earth story: always keep it; it's a differentiator

**Voice rules:**
- No em dashes (—): use commas, colons, or semicolons
- No corporate fluff ("results-driven", "passionate", "synergy")
- Action verbs: built, launched, created, led, drove, positioned
- Specific over vague: "$45M XaaS repositioning" not "revenue impact"

## Step 5 — Length check before saving
The resume must fit within 2 pages when converted to PDF at standard margins (1 inch) and 10-11pt font.

**Default cuts to make first (apply in order until it fits):**
1. Google (experience section): consolidate to 1 bullet — "Led the launch of Google Earth, achieving 100M+ global installations; drove Maps API developer ecosystem through Google My Maps, Map Maker, and the inaugural Google I/O." Google's story is already protected in KEY ACHIEVEMENTS.
2. Oracle: keep only 2 bullets — $27M revenue + sales motion/win-loss. Drop the retention strategy bullet.
3. Storia: merge into 1 bullet — "Founded and bootstrapped a K-12 edtech startup; led cross-functional team (engineering, design) from concept to 4.5-star App Store launch, validated through school pilots."
4. If still over 2 pages: trim Mindjet to 1 sentence, or cut the least relevant LatticeFlow or Omnicell bullet.

**Hard limits:**
- Total bullets across all roles: 26-28 max
- Summary/headline: 3-4 lines max
- Mindjet: paragraph format, 1-2 sentences only

Flag to Ritee if a high-value bullet was cut so she can decide.

## Step 6 — Save the output
Save to `resumes/tailored/[company]_[YYYYMMDD].md`

## Step 7 — Report back
Tell Ritee:
- The top 3 changes made and why
- Any gaps where her background doesn't fully match the JD (so she can address them in outreach)
- Suggested headline/summary if she wants to use it on LinkedIn for this application
