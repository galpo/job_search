---
model: claude-opus-4-7
description: Draft 2 outreach versions + create Gmail draft automatically
---
# Draft Outreach Message + Create Gmail Draft

You are helping Ritee Rouf draft an outreach message and create a ready-to-send Gmail draft.

## Step 1 — Identify the contact
If a name or company was passed as an argument, check if a contact file already exists in `outreach/`.
If no file exists yet, ask: name, title, company, email address (if known), how Ritee found them, and whether this is a LinkedIn DM or email.

## Step 2 — Read source files
1. `outreach/TEMPLATES.md` — pick the right template (see Step 3)
2. `quick_context.md` — Ritee's positioning, differentiators, what's working
3. The contact's `.md` file in `outreach/` if it exists
4. The JD if available in `jds/` (for role-specific tailoring)
5. `resumes/RiteeRouf_Master.md` — for picking the right 2–3 highlights

## Step 3 — Pick the right template from TEMPLATES.md

First, identify the contact's persona — this determines the template AND the tone:

| Who you're contacting | Template | Tone |
|----------------------|----------|------|
| Hiring manager (owns the role) | Template 1 — Direct to HM | Impact-first, narrative-driven, specific to their product |
| VP of People / Head of HR / Recruiter / Talent Acquisition | Template 7 — VP People/Recruiter | Level + availability first, no product narrative, under 100 words |
| PMM peer at the company | Template 2 — Peer-to-peer | Collegial, curious, "no agenda" |
| Mutual connection (asking for intro) | Template 3 — Referral ask | Relational, low ask |
| Following up after no response (1 week) | Template 4 — Follow-up | Brief, non-pushy, one send only |
| Post-interview thank-you | Template 5 — Post-interview | Specific reference from the conversation |
| After a rejection or closed role | Template 6 — Graceful exit | Warm, no bitterness, leave door open |

**Persona routing rules:**
- If title contains "People", "HR", "Human Resources", "Talent", "Recruiting", or "Recruiter" → Template 7
- If title contains "CMO", "VP Marketing", "Director", "Head of Marketing", "PMM", "Product Marketing" → Template 1
- If they're a peer (same level, not the decision-maker) → Template 2
- When in doubt, ask Ritee: "Is this the hiring manager or someone in People/HR?"

## Step 4 — Draft the message
Apply Ritee's voice rules:
- **No em dashes (—) anywhere.** Use a comma, colon, or semicolon instead. Hard rule.
- Warm and confident — not salesy or desperate
- Specific: reference the exact role, something about the company, or something they wrote/posted
- Lead with what's relevant to THEM, not what Ritee needs
- 4–5 bullets max, mobile-readable
- Include Substack link (riteerouf.substack.com) as a proof point when relevant
- Local San Mateo angle if the company is Bay Area
- Fractional option mention if the company is budget-constrained
- Never more than 200 words total

Draft **2 versions**: one slightly more direct, one slightly warmer. Show both to Ritee and ask which to use (or if she wants a blend).

## Step 5 — Create Gmail draft
Once Ritee approves a version (or after showing both if she says "use the first one"), create a Gmail draft using the `gmail_create_draft` tool:
- `to`: contact's email if known (leave blank if only LinkedIn DM)
- `subject`: use a subject line from the template opener (e.g. "Your PMM role at Sendbird")
- `body`: the approved message text
- `contentType`: text/plain

If the email address isn't known yet, create the draft without a `to` field — Ritee can add it before sending.

Confirm to Ritee: "Gmail draft created — open Gmail and it'll be ready to send."

## Step 6 — Create or update the contact file
If no file exists: create `outreach/[firstname]_[company].md` using the template in `outreach/README.md`.
If it exists: paste the drafted message under "Outreach Message" and check off "Drafted" in the status checklist.

## Step 7 — Report back
- Show both drafts
- Note which template you used and why
- Confirm Gmail draft was created
- Flag any missing info that would make the message stronger (e.g. "if you have their email, update the draft in Gmail before sending")
