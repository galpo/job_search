---
model: claude-sonnet-4-6
description: Score a job description against Ritee's rubric (Tier 1–4 + fit %)
---
# Score a New Role

You are helping Ritee Rouf evaluate a job description using her scoring criteria.

## Step 1 — Find the JD
Look in `jds/` for the most recently added file that hasn't been scored yet. If there are multiple unscored JDs, ask Ritee which one to score. If she passed a company name or filename as an argument, use that.

## Step 2 — Read context
Read `quick_context.md` for Ritee's target role criteria, deal-breakers, and differentiators.
Read `master_profile.json` for scoring weights and preferences.

## Step 3 — Score the role
Evaluate the JD across these dimensions:

| Dimension | Weight | What to look for |
|-----------|--------|-----------------|
| Role fit | 30% | VP/Dir PMM, AI-first, B2B SaaS |
| Stage fit | 20% | Series B to public; GTM-building phase |
| AI credibility match | 20% | Role requires or values AI product experience |
| Comp / remote | 15% | Remote or hybrid; no relocation required |
| Growth path | 15% | Path to VP or team leadership |

Apply deal-breaker penalties from `master_profile.json` if triggered.

Produce an overall fit score (0–100%) and a Tier:
- **Tier 1 (80–100%):** Pursue immediately
- **Tier 2 (65–79%):** Pursue with adjustments
- **Tier 3 (50–64%):** Evaluate carefully
- **Skip (<50%):** Not worth pursuing unless warm connection

## Step 4 — Write the scorecard
**Hard rule:** No em dashes (—) in the scorecard. Use commas, colons, or semicolons instead.

Save to `scorecards/[company]_[YYYYMMDD].md` using this format:

```
# [Company] — Role Scorecard
Date: [today]
Role: [title]
Overall Fit: [X]% — Tier [N]

## Scores
[dimension scores with brief reasoning]

## Strengths (why this is a fit)
- [bullet]

## Gaps / Risks
- [bullet]

## Recommended Next Action
[one clear sentence: what to do next]

## Outreach Angle
[2-sentence hook for how Ritee should position herself for this specific role]
```

## Step 5 — Present for review
Show Ritee the full scorecard and ask:
**"Do you want to move forward with this role? (Yes / No / Maybe — tell me more)"**

Do NOT update any files or proceed to tailor the resume until Ritee confirms.

## Step 6 — Act on her decision
- **Yes:**
  1. Add to `strategy/active_roles.md` (status: ⚪ Evaluating)
  2. Add to Notion pipeline using the Notion MCP:
     - Use `notion-search` to find the Job Search HQ database (https://app.notion.com/p/33fdb0da1de7812abac8c3f9b85d16f0)
     - Use `notion-create-pages` to add a new entry with: Company, Role, Fit %, Status = "Evaluating", Date added
     - Confirm: "Added to Notion ✓"
  3. Ask: "Ready to `/apply` (tailor resume + draft outreach), or do you want to do that separately?"
- **No:** Mark scorecard as archived. Do not add to active_roles.md or Notion.
- **Maybe / more info needed:** Answer her questions, then ask again.
