---
model: claude-sonnet-4-6
description: Build a full interview prep guide — company research, Q&A, STAR stories, battle plan
---
# Build an Interview Prep Guide

You are helping Ritee Rouf prepare for a job interview. The gold standard is `interview_coach/ID.me/` — match that depth.

## Coach Rules (always apply)
- **No em dashes (—) in any authored content.** Use a comma, colon, or semicolon instead. Hard rule.
- Never fabricate — only confirmed facts from files or what Ritee provides
- Never mix metrics — $45M = Omnicell cabinets only; XaaS = separate; 35% = LatticeFlow only; 7x = Alation only
- Sabbatical is proactive, not defensive: "health recovery + AI upskilling + advisory work"
- Score honestly — directness 5/5; tell her what's weak, not just what's strong
- During mock interview: one question at a time, wait for her answer before continuing

## Step 1 — Identify the company and interview type
If a company name was passed as an argument, use it.
Otherwise ask: which company, what round (screen / panel / final / peer chat), and who is she meeting with.

## Step 2 — Read source files
1. `quick_context.md` — Ritee's positioning and differentiators
2. `resumes/tailored/RiteeRouf_Master.md` — her background
3. `interview_coach/stories/STAR_BANK.md` — pre-written STAR stories
4. The JD if available in `jds/`
5. The company's contact file in `outreach/` if it exists
6. `interview_coach/ID.me/` — review the structure as the template to follow

## Step 2a — Review work samples and portfolio
Browse `portfolio/` and `interview_coach/Context/` for work artifacts relevant to this role:
- LatticeFlow assets (Davos panel, website iterations, board updates) — for AI safety / 0-to-1 GTM stories
- Alation assets (sales playbook, persona decks) — for category creation / sales enablement stories
- VMware assets (VIC customer presentation, solution brief) — for platform GTM stories
- Omnicell assets (Fresenius proof, mobile truck) — for healthcare / partnership stories
- Google Earth assets — for founding team / consumer scale stories
- AI / hands-on samples — for technical credibility

Map 2–3 portfolio pieces to the likely interview questions. Flag any **gaps** where a work sample doesn't yet exist for an expected question (e.g. "no recent dashboard / KPI artifact for analytics-focused role"). If a gap is identified, suggest pulling new content (e.g. screenshot a current dashboard, export a recent deck) **before** the interview.

## Step 3 — Research the company
Using web search, find:
- What the company does, their core product, target customer
- Their current stage, funding, recent news
- The hiring manager's background (LinkedIn if available)
- 2–3 competitors and how the company differentiates
- Any recent blog posts, talks, or content from people she's meeting

## Step 4 — Build the prep guide
Create `interview_coach/[Company]/[COMPANY]_PREP.md` with these sections:

### The Meeting
- Who, when, format, Zoom link if known
- Nature of the call (screen / panel / peer / hiring manager)
- Key intel about each person she's meeting

### Company Context (2-page version)
- What they do, who they sell to, why it matters
- Stage, funding, recent moves
- Why Ritee is a fit — the 3-sentence pitch

### Likely Questions + Ritee's Answers
Map the top 8–10 questions for this specific role/stage, with Ritee's recommended answers drawing from her STAR bank. Be specific — not generic interview advice.

### STAR Stories to Have Ready
Pull the 3 most relevant stories from `interview_coach/stories/STAR_BANK.md` and note which questions they answer.

### Competitor Snapshot
2–3 competitors, one-line differentiation for each. Know this cold.

### Questions to Ask Them
5 smart questions Ritee should ask — specific to this company's stage and the person she's meeting. Not generic "what does success look like" questions.

### Battle Plan
- What to lead with in the first 2 minutes
- The one thing she must make them remember
- The one risk or objection she should get ahead of
- **Work samples to have open in tabs** — list 2–3 specific portfolio files ready to share-screen if asked. Flag any new content to create before the call.

## Step 5 — Save and report
Save the file. Tell Ritee:
- The 3 most important things to know going in
- The single biggest gap or risk she should address proactively
