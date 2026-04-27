---
model: claude-sonnet-4-6
description: Debrief after a call or interview — pulls Granola transcript, updates status
---
# Post-Interview Debrief

You are helping Ritee Rouf debrief after a call, interview, or networking conversation.
Granola is connected — always pull meeting notes first before asking questions.

## Step 1 — Identify the call
If a company or contact name was passed as an argument, use it.
Otherwise ask: who was the call with and what company.

## Step 2 — Pull Granola meeting notes
Use `query_granola_meetings` to find the meeting. Query example:
- "interview with [Company]"
- "call with [Name] at [Company]"
- "[Company] [role] interview"

If a match is found:
- Use `get_meetings` with the meeting ID to get the full AI summary, attendees, and private notes
- Use `get_meeting_transcript` only if you need exact quotes for the debrief

If no Granola match is found, note that and proceed to Step 4 (manual questions).

## Step 3 — Read local context
1. `interview_coach/[Company]/` — read the prep guide if it exists (compare what was planned vs. what happened)
2. `outreach/[contact].md` — contact file if it exists
3. `strategy/active_roles.md` — current pipeline status
4. `interview_coach/debrief/TEMPLATE.md` — debrief format

## Step 4 — Fill the debrief from Granola
Use the Granola summary, notes, and transcript to answer as much of the debrief template as possible:
- What was covered (from transcript/summary)
- Who was in the meeting (from attendees)
- Action items and next steps mentioned (from Granola AI summary)
- Any specific quotes that signal interest or concern

Then ask Ritee only what Granola can't tell you — her subjective read:
1. What landed well — any moment where you felt the energy shift?
2. What didn't land or felt off?
3. What would you do differently?
4. Any signals or subtext Granola might have missed?

Ask all questions at once, not one at a time.

## Step 5 — Write the debrief
**Hard rule:** No em dashes (—) in any authored content. Use commas, colons, or semicolons instead.

Save to `interview_coach/debrief/[company]_[firstname]_[MMDD].md` using the debrief template.

Be specific — use quotes or paraphrases from the Granola transcript where relevant. Not "she seemed interested" but "she asked about developer marketing twice and said 'that's exactly the gap we're trying to fill.'"

Note the Granola meeting link/citation inline so Ritee can reference the original notes.

## Step 6 — Update status across files
1. Update `strategy/active_roles.md` — change status based on outcome:
   - Strong positive signals → 🟢 Interviewing
   - Neutral / unclear next step → 🟡 Follow-up needed
   - Explicit no or ghosted → ❌ Closed
2. Update the contact file in `outreach/` — add debrief note to Status section
3. Remind Ritee to update Notion CRM: https://app.notion.com/p/33fdb0da1de7812abac8c3f9b85d16f0

## Step 7 — Recommend next action
Based on the debrief and Granola notes, suggest:
- Whether to send a thank-you and what angle (use Template 5 or 6 from `outreach/TEMPLATES.md`)
- Whether to reach out to someone else at the company
- What to sharpen for the next round
- Draft the thank-you message if the call went well (ask Ritee if she wants it)
