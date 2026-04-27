# Job Search Strategy — Ritee (Earth) Rouf
*Single source of truth. Last updated: April 13, 2026*

---

## Table of Contents

1. [Who I Am](#who-i-am)
2. [Job Search — Pipeline & Targets](#job-search)
3. [Job Scorecard — How to Evaluate Roles](#job-scorecard)
4. [Outreach Playbook — What's Actually Working](#outreach-playbook)
5. [Outreach — Active Contacts & Campaign](#outreach)
6. [Tailoring Resumes — Process & Tools](#tailoring-resumes)
7. [Resume Rules — What Never to Break](#resume-rules)
8. [Interview Coach — Prep System & Commands](#interview-coach)
9. [LangChain — Interview Prep (April 14)](#langchain-prep)
10. [STAR Stories Bank](#star-stories)
11. [ID.me — Full Interview Context](#idme-context)
12. [Adam Conversation Notes (ID.me)](#adam-notes)

---

<a name="who-i-am"></a>
## 1. Who I Am

**Ritee Rouf** ("Earth" in personal/collaborative settings)
- (#claude, update this to delete # of years in my resume)enterprise B2B product marketing, AI GTM, and go-to-market strategy
- Based in San Mateo, CA
- Email: riteerouf@gmail.com
- LinkedIn: linkedin.com/in/riteerouf
- Substack: riteerouf.substack.com

### Brand Pillars
- Show don't tell
- AI + human collaboration — AI alone can't do everything
- Depth over breadth
- Live the user journey
- Authenticity, customer advocacy, builder mindset
- Creative problem solver

### Voice
Warm, inclusive, direct. No corporate fluff or buzzwords. Never dismisses others.
GTM philosophy: learns others' worlds from the inside.
Good at storytelling. Wants to do good for others.

### Career Timeline (confirmed facts only)

| Years | Role | Company | Key Metric |
|-------|------|---------|-----------|
| 2025-Present | Principal Consultant, AI Product Marketing & GTM Strategy | Independent | Active clients: FunFable Phonics, Dorsal.fyi (acquired 2026), SMAS |
| 2024-2025 | Sabbatical | — | Health recovery + AI upskilling (DeepLearning.ai, Hugging Face) + advisory |
| 2023-2024 | Head of Marketing & Executive Team Member | LatticeFlow AI (Zurich) | 35% pipeline growth; built marketing from zero; organized Davos AI House |
| 2020-2023 | Sr. Product Marketing Manager | Omnicell | $45M revenue = pre-configured medication dispensing cabinets (SEPARATE from XaaS) |
| 2018-2020 | Founder & Product Leader | Storia (Edtech) | K-12 interactive storytelling app; 4.5-star App Store rating |
| 2017-2018 | Director of Product Marketing | Alation | 7x SQL pipeline; category creation of 'Data Catalog' |
| 2015-2017 | Enterprise PMM, Office of the CTO | VMware | vSphere $4B portfolio; VMworld 20K attendees |
| 2012-2015 | HCM Product Marketing & Strategy | Oracle | $27M revenue; 600+ enterprise accounts |
| 2009-2012 | Sr. Product Manager | Mindjet | First Salesforce AppExchange integration |
| 2003-2008 | Founding team > Global Product Marketing Lead | Google (via Keyhole acquisition) | 200M+ installs; named and launched Google Earth; co-organized inaugural Google I/O |

---

<a name="job-search"></a>
## 2. Job Search — Pipeline & Targets

### Target Roles
- Head of Marketing
- VP Product Marketing
- Sr. Director Product Marketing
- PMM Lead (at top-tier AI companies)

### Scored Roles (ranked by fit)

| # | Company | Role | Fit | Tier | Resume | Next Action |
|---|---------|------|-----|------|--------|-------------|
| 1 | Sendbird | PMM AI-First Full-Stack | 88% | Warm outreach | Master | Sent outreach to Charles Studt (CMO) | Status - no response
| 2 | SentiLink | Strategic PMM Lead | 88% | Warm outreach | ID.me + tweaks | Find HM > send |
| 3 | Anthropic | PMM Lead, Agents | 85% | Long game (90 days) | New version | Execute 90-day plan; reapply July 1, 2026 | reject
| 4 | BuildOps | Sr. Dir. PMM | 82% | Strategic brief | Master | Decide: does construction/trades genuinely excite you? | reject
| 5 | Cursor | Startups Growth Lead | 72% | Warm outreach | Master | Confirm VC/accelerator network | skip
| 6 | Upwork | VP Marketing | 70% | Warm outreach | Master | Find HM > send | Need to send
| 7 | Databricks | Digital Native GTM | 55% | Skip/warm only | N/A | Skip unless warm connection surfaces | skip

### Active Roles Tracker

| Company | Role | Status | Contact | Notes |
|---------|------|--------|---------|-------|
| Anthropic | Product Marketing Lead - Claude.ai & Claude Code | Applied (rejected at screen - craft problem, not fit problem) | — | Cover note drafted; 90-day reapply plan | need to be more strategic, like write blog posts or send them an email about how I can make a difference
| ID.me | Principal PMM | Interviewing | Adam (first B2B marketing hire) | Chako + Gaurav interviews prepped | Interview completed | They are interviewing other candidates | rejected
| Sendbird | PMM | Researching | Charles Studt (CMO) | Draft ready | no response | skip
| LangChain | Technical Product Marketer | Screening — call 4/14 2:30pm PT | Jacob Talbot (PMM, hiring mgr or peer) | Direct LinkedIn outreach worked. LangSmith Fleet angle. | Skip
| Otter AI | TBD | Researching | — | — |

---

<a name="job-scorecard"></a>
## 3. Job Scorecard — How to Evaluate Roles

### Scorecard Tool
Location: `~/job_search/score_role.py` + `~/job_search/master_profile.json`

**Usage:**
```bash
# Score from a file
python score_role.py job_description.txt --company "CompanyName" --title "Role Title"

# Paste JD directly (stdin)
python score_role.py < job_description.txt

# Interactive (paste, then Ctrl+D)
python score_role.py
```

Output saved to `~/job_search/scorecards/company_name_YYYYMMDD_HHMMSS.md`

### Rating Scale
- STRONG FIT: score >= 10
- GOOD FIT: score >= 5
- MEDIOCRE: score >= 0
- POOR FIT: score < 0
- HARD PASS: deal-breaker found

### Current Master Profile (`master_profile.json`)
**Must-haves:** stability and growth, Competitive salary, non toxic environment 
**Nice-to-haves:** Team mentorship, great culture, Growth opportunities, great boss, great product
**Deal-breakers:** Seed or Series A (only for consulting roles)

> **Note:** This profile needs updating to match PMM-specific criteria. The current keywords are generic/engineering-focused. Consider updating must_haves to: "Product Marketing", "GTM", "Enterprise", "AI/ML", "Remote or Bay Area" and deal_breakers to: "Seed or Series A (only for consulting roles)
### Scorecard Legend (for manual scoring)
- **Strong** = Clear match — lead with this in outreach and resume
- **Adjacent** = Partial match — acknowledge and bridge in narrative
- **Gap** = Real gap — don't hide, address honestly or skip claim entirely

### Status Definitions
- **Researching** — gathering info, not yet applied
- **Outreach** — warm contact made or in progress
- **Applied** — application submitted
- **Screening** — recruiter/hiring manager screen scheduled or done
- **Interviewing** — in process
- **Offer** — offer received
- **Closed** — rejected, withdrew, or passed

### Key Scoring Insights
Claude: See the status I added above
**Sendbird (88%):** Their JD says one person with the right AI stack can do what 5 specialists used to. That's your brand. Lead with Substack post + local San Mateo angle. Watch: comp gap ($140-180K below target) — raise fractional option early.

**SentiLink (88%):** Trust is your career through-line: LatticeFlow > Omnicell > ID.me > SentiLink. Resume tweaks: add "identity verification, compliance, fraud-adjacent markets" to summary; add API-driven marketing bullet to LatticeFlow. Watch: "4+ years" req may mean mid-level budget.

**Anthropic (85%):** Fit is real — execution of application was the gap. 90-day plan fixes this. Don't rush. A second rejection closes the door longer. Comp: $320-400K.

**BuildOps (82%):** Industry gap is a paper tiger. They need someone to reposition as a vertical AI platform — a category creation problem. That's your career. Decision gate: does it genuinely intrigue you?

**Cursor (72%):** Storia + AI Marketing Mavens + Substack = credible founder story. Decision gate: do you have relationships with YC, a16z, Sequoia portfolio? If no — hard sell without that network.

---

<a name="outreach-playbook"></a>
## 3. Outreach Playbook — What's Actually Working

> These are the strategies producing real responses. Use this as the operating model.

### Strategy 1: Reach Out to Connections for Referrals
**How it works:** Identify 1st or 2nd degree connections at target companies. Ask for a warm intro to the hiring manager or a referral into the role.
**Best for:** Companies where you don't have a direct path to the HM. Referrals skip the ATS black hole.
**Template:**
> "Hi [Name] — hope you're well! I'm actively exploring my next PMM role and saw you're at [Company]. I'd love to learn more about the team / would you be open to referring me for [role]? Happy to share my background — I think my [X experience] maps well to what they're building."

**Proof point:** Adam @ ID.me — warm intro led to full interview loop.

---

### Strategy 2: Reach Out to the Hiring Manager Directly
**How it works:** Find the hiring manager on LinkedIn and send a direct, specific message — reference their work, name the role, share your POV on the product.
**Best for:** When you have a 1st degree connection OR can find their email. Harder without LinkedIn Premium for cold 2nd/3rd degree.
**Watch for:** LinkedIn limits InMails without Premium. Workarounds: find their email (Hunter.io, RocketReach, company email pattern), connect first with a blank request then message, or engage on their posts before reaching out.
**Proof point:** Jacob Talbot @ LangChain — messaged him directly today, he responded in minutes, 30-min call booked for tomorrow.

**What made it work:**
- 1st degree connection (already connected)
- Specific hook: named LangSmith Fleet + "huge potential for enterprise businesses"
- Short message — 2 sentences + LinkedIn URL
- No resume attached upfront, just offered to share

---

### Strategy 3: Lead with a Solution (The "Why Hire Me" Brief)
**How it works:** Instead of just applying, create a brief, deck, or positioning document that demonstrates your thinking about their specific problem. Show, don't tell.
**Best for:** Tier 1 targets where you want to stand out, especially after a rejection or when competition is high.
**Time investment:** High (4-8 hours). Reserve for roles you really want.
**Proof point:** Anthropic — cover note drafted around Claude.ai/Claude Code positioning; 90-day plan to build signal before reapplying July 2026.
**What to include:**
- Your take on their biggest GTM challenge right now
- What you'd do in the first 90 days
- One specific proof point from your past that maps directly

---

### Outreach Decision Tree

```
Is this a Tier 1 target?
  YES → Do all 3 strategies: referral + direct HM outreach + solution brief
  NO  → Do 1-2: referral or direct HM outreach only

Do you have a 1st degree connection at the company?
  YES → Ask for referral first, then DM the HM
  NO  → Find HM email or engage their content before cold connect

Are you post-rejection (like Anthropic)?
  YES → Strategy 3 is the play — rebuild signal before reapplying
  NO  → Start with Strategy 1 or 2
```

---

### LinkedIn Premium Note
Without Premium, you can only InMail people you're not connected to. Workarounds:
- **Connect first** (blank or brief note), wait for acceptance, then message
- **Find their work email** via Hunter.io, RocketReach, or guessing the pattern (jtalbot@langchain.dev)
- **Engage their content** (comment on posts) so they recognize your name before you connect
- **Company email pattern** — most AI startups use firstname@company.com or first.last@company.com

---

<a name="outreach"></a>
## 4. Outreach — Active Contacts & Campaign

### Direct Outreach Tracker

| Contact | Company | Status | Channel | Next Step |
|---------|---------|--------|---------|-----------|
| Adam | ID.me | Interviewing | Direct | Chako + Gaurav interviews |
| Charles Studt (CMO) | Sendbird | Draft ready | LinkedIn | Send outreach |
| TBD (Head of Marketing) | SentiLink | Not started | LinkedIn | Find HM > send |
| TBD (CEO/Chief of Staff) | Upwork | Not started | LinkedIn | Find HM > craft VP-level outreach |

### Outreach Template (per contact)
```
# [Name] — [Company]

**Role they hold:**
**Connection:** (how you know them / mutual)
**LinkedIn:**

---

## Context
Why this person, why now.

## Outreach Message
[Draft message]

## Status
- [ ] Drafted
- [ ] Sent — [date]
- [ ] Replied
- [ ] Meeting booked — [date]

## Notes
```

---

<a name="tailoring-resumes"></a>
## 4. Tailoring Resumes — Process & Tools

### Resume Versions

| Version | Location | Use For |
|---------|----------|---------|
| Master Resume | `~/job-tailor/resumes/RiteeRouf_Master.md` | Default — most roles |
| 2026 Director-Level | `~/Documents/Resumes/2026_resumes/RiteeRouf_ProductMarketingDirector.md` | Director+ roles, Anthropic-level |
| Anthropic Tailored | `~/job-tailor/output/anthropic_pm_ai_agents_CLEAN.md` | Anthropic PMM Lead (includes cover note) |
| ID.me Tailored | Adapt from master | SentiLink + similar trust/compliance roles |
| Tailored Archive | `~/Documents/Resumes/tailored/` | Giga, Mapbox, Notable, Salesforce, Turing |

### Tailoring Process

**Step 1: Score the JD**
Use the scorecard tool in `~/job_search/`:
```bash
python score_role.py job_description.txt --company "CompanyName" --title "Role Title"
```
Output saved to `~/job_search/scorecards/`

**Step 2: Tailor the Resume**
Use the job-tailor tool in `~/job-tailor/`:
```bash
# Save JD
pbpaste > jds/company_role.txt

# Run tailor
python job_tailor.py jds/company_role.txt
```
Output saved to `~/job-tailor/output/`

**Step 3: Manual Review**
- Check fit breakdown against scorecard
- Adjust summary to match role's language
- Lead with strongest-fit bullet points
- Address gaps honestly in cover note, not resume

### Per-Role Resume Tweaks (from scorecards)

**SentiLink:** Add "identity verification, compliance, and fraud-adjacent markets" to summary. Add API-driven marketing bullet to LatticeFlow: "Developed API-driven product messaging and GTM materials for AI model evaluation platform, translating complex technical capabilities into clear value propositions for enterprise compliance and risk buyers."

**Anthropic:** New version needed — craft after 90-day signal build. Reapply target July 1, 2026.

**Cursor:** Lead with founder angle (Storia, AI Marketing Mavens).

**Upwork:** Frame as VP — emphasize GTM systems thinking + AI-forward operating model. Don't fake demand gen expertise; own strategic layer, show you'd hire well for execution.

---

<a name="resume-rules"></a>
## 5. Resume Rules — What Never to Break

### Critical Metric Rules — NEVER VIOLATE

| Metric | Company | Context | NEVER Do |
|--------|---------|---------|----------|
| $45M revenue | Omnicell ONLY | Launching pre-configured medication dispensing cabinets | Never combine with XaaS |
| XaaS repositioning | Omnicell SEPARATE initiative | Expansion revenue + contracts with Stanford, Cleveland Clinic | Never combine with $45M |
| 35% pipeline growth | LatticeFlow AI ONLY | Full-stack marketing from scratch | — |
| 7x SQL increase | Alation ONLY | Sales playbook + partner ecosystem | — |
| $27M revenue | Oracle ONLY | Oracle Learning Cloud SaaS GTM | — |
| 200M+ installs | Google Earth ONLY | Rebranding + launch | — |
| VMworld 20K attendees | VMware ONLY | vSphere Integrated Containers launch | — |

### Timeline Rules
- Sabbatical is **2024-2025**. Always list explicitly. Never leave a gap.
- Consulting is **2025-Present**. Keep as separate entry from sabbatical.
- Sabbatical is proactive, not defensive: health recovery + AI upskilling + advisory.

### General Rules
- **Never fabricate.** Only use confirmed facts from career timeline or uploaded files.
- **Never mix metrics.** See table above.
- **Change only what is asked.** No unsolicited rewrites.
- **Score honestly.** Directness level 5/5. Flag what's weak.
- Don't apologize for sabbatical, startup background, or missing industry experience.
- Address gaps honestly in cover notes — don't hide them in the resume.

### Key Achievements (approved language)

**AI GTM Leadership (LatticeFlow):** Built a full stack marketing function from the ground up, achieving 35% pipeline growth and 50% organic search lift within 6 months; established global thought leadership by orchestrating an AI Safety panel with global AI leaders at the World Economic Forum (Davos).

**Category Creation & Sales Acceleration:** Launched the first partner ecosystem ($4M pipeline) and architected sales playbook driving 7x SQL increase and 30% faster deal cycles. Instrumental in the category creation of "Data Catalog" at Alation while scaling from Series B-C.

**Enterprise Launch + Revenue Impact:** Delivered $45M expansion revenue growth at Omnicell through strategic XaaS repositioning; orchestrated the first global launch of vSphere Integrated Containers reaching 400+ enterprise customers (VMworld keynote, 20K attendees).

### Core Skills (approved terms)
Category Creation, Enterprise GTM Strategy, Product Positioning & Messaging, Sales Enablement & Playbooks, Partner Ecosystems, Storytelling & Developer Marketing, ICP, Buyer Personas, People Management, Competitive Intelligence, Cross-Functional Leadership, Generative AI, Cursor, Render, Lovable, Claude AI & Claude Code

### Education & Certifications
- MBA, Auburn University
- Executive Education: Wharton Design Thinking, Stanford D.School
- AI: DeepLearning.ai (AI for Everyone, Building Apps with Windsurf, Building towards MCP with Claude), 100 School (Coding with AI), Hugging Face (AI Agents Fundamentals, Nov 2025)

---

<a name="interview-coach"></a>
## 6. Interview Coach — Prep System & Commands

### Setup
Run `claude` from `~/Documents/interview_coach/` to load the full interview coach context automatically.

### Available Commands

| Command | What It Does |
|---------|-------------|
| `/prep [company]` | Research company + role, build context file, map stories to their priorities |
| `/prep [interviewers]` | Research interviewers, their history, what they're looking for. Bonus responses for wow. |
| `/mock [name or role]` | Fire questions one at a time as that interviewer would. Score each answer. |
| `/stories` | Show all STAR stories mapped to interview themes |
| `/story [theme]` | Best story for: enablement, product, zero-to-one, messaging, AI, sabbatical |
| `/concerns` | 3 hardest objections they'll raise + prep responses |
| `/close` | Tailored closing questions for current target |
| `/debrief` | After mock: what landed, what was weak, what to cut |
| `/resume [company]` | Tailor resume bullets for this company's JD priorities |
| `/cover [company]` | Draft cover letter or outreach message |
| `/negotiate` | Salary negotiation prep for current offer or target range |
| `/thankyou [name]` | Draft post-interview thank you note |
| `/status` | Current job target, active files, last session summary |

### Coach Rules
1. Never fabricate. Only confirmed facts.
2. Never mix metrics. (See Resume Rules above.)
3. Change only what is asked.
4. Sabbatical is proactive, not defensive.
5. Score honestly — directness 5/5.
6. One question at a time during mock interviews. Wait for answer before continuing.

### File Locations
- Company context: `~/Documents/interview_coach/.claude/context/[company].md`
- Story bank: `~/Documents/interview_coach/.claude/stories/star-stories.md`
- ID.me prep: `~/Documents/interview_coach/ID.me/`

### Active Interview Prep: ID.me

**Role:** Principal PMM
**Contact:** Adam — first B2B marketing hire, building the entire function
**Company context:** 16-year-old company, ~50 AEs across 5 verticals (Communities, SLED, Healthcare, Federal, Workforce), no unified messaging, no message house, pitch decks haven't been refreshed since 2023. Recent major win: CMS partnership as default login.

**Interviewers:**

**Chako Dickinson — Director, GTM Sales Enablement (45 min)**
- Her unspoken question: "Will you make my 50 AEs more effective or create more work for them?"
- Your 4 value points: (1) Solved her exact problem — Alation 7x SQL, (2) Understand GTM foundation gaps, (3) Scaled enablement for complex ecosystems — Omnicell, (4) Measure adoption, not activity
- Lead stories: Alation Message House (7x SQL), Omnicell XaaS (Sales pushback > earned adoption)
- Closing questions: "What's been the biggest challenge driving Sales adoption?" + "How would you measure my success in the first 6 months?"

**Gaurav Sharma — Group Product Manager (45 min)**
- His unspoken question: "Will you understand what we're building and accurately translate it to the market?"
- Your 4 value points: (1) Translate complex technical — VMware vSphere, (2) Convince product teams with market insight — Google Maps APAC, (3) Understand how positioning shapes product strategy — Google Earth, (4) Customer obsession — LatticeFlow, Omnicell
- Lead stories: Google Maps APAC transit (market insight > product decision), VMware vSphere (Problem > Outcome > Proof framework)
- Closing questions: "What's the biggest challenge with product-PMM collaboration?" + "Where is the current ID.me narrative weakest?" + "How do you like to work with PMM?"

**ID.me Positioning to Know Cold:**
- One platform: verification + authentication + fraud prevention
- Five verticals: SLED, Healthcare, Workforce, Communities, Federal
- Government credential: NIST IAL2/AAL2, 20 federal agencies, 45 state agencies
- Pre-verified network: 152M users
- Key differentiator vs Okta: "Okta manages WHO has access. ID.me proves WHO you ARE."
- Key differentiator vs Jumio: "Jumio verifies. ID.me verifies + authenticates + prevents fraud."

**Your 90-Second Elevator Pitch:**
"I've spent 18 years building go-to-market strategies for complex B2B products. I've done it at every stage — from founding team (Google, LatticeFlow) to scaling (Omnicell, Alation) to enterprise (VMware). I'm drawn to ID.me because you're solving a real market problem — identity fraud is rising, compliance is tightening, and most organizations have fragmented identity infrastructure. I see three things clearly: the positioning opportunity (verified identity platform, not just verification), the product opportunity (integration is your moat), and the go-to-market challenge (5 verticals, 50 AEs, no B2B playbook). I'm here to help you dominate this market."

### Interview Mindset
- You are NOT interviewing to prove marketing expertise. You are interviewing to prove you understand THEIR world and can solve THEIR problems.
- Listen more than you talk. Take notes. Ask their questions back.
- Reference specific metrics (7x, 35%, 400+, 152M).
- Show conviction ("Here's what I'd do...").
- Acknowledge when you don't know.
- Never apologize for sabbatical, startup background, or missing industry experience.
- Never badmouth competitors.

---

<a name="langchain-prep"></a>
## 8. LangChain — Interview Prep (April 14, 2026)

> **Debrief (Apr 14, 2026):** Call with Jacob Talbot happened. Did not go as planned — follow-up message still needed. See `outreach/jacob_langchain.md`.

### The Call
- **Who:** Jacob Talbot, Product Marketing @ LangChain
- **When:** Tuesday, April 14, 2026 at 2:30pm PT
- **Format:** 30-minute Zoom (langchain.zoom.us)
- **How you got here:** Direct LinkedIn outreach today — he responded instantly, booked Calendly

### About Jacob Talbot
- **Role:** Product Marketing @ LangChain
- **Background:** Twilio > Regrow Ag > LangChain
- **Education:** University of Michigan, Ross School of Business
- **Content:** Authored ["How to Use Memory in Agent Builder"](https://blog.langchain.com/how-to-use-memory-in-agent-builder/) (Feb 2026) on LangChain blog
- **LinkedIn:** linkedin.com/in/jacobwtalbot
- **Twilio background** = he understands developer marketing, API platforms, PLG-to-enterprise motions

### About LangChain

| Field | Detail |
|-------|--------|
| Founded | 2022 by Harrison Chase (CEO) & Ankush Gola (President/COO) |
| HQ | San Francisco, CA |
| Funding | $260M total; Series B at **$1.25B valuation** (Oct 2025, led by IVP + Sequoia, Benchmark, CapitalG, Sapphire, ServiceNow, Workday, Cisco, Datadog, Databricks) |
| Revenue | ~$16M ARR, 1,000+ customers (2025) |
| Downloads | 90M+ per month (open source) |
| Mission | "Make intelligent agents ubiquitous" |

### Product Suite (Know This Cold)

**LangChain Framework** — Open source Python/JS libraries for building LLM apps. Chains, agents, RAG, memory, tool use. 90M+ downloads/month. The developer on-ramp.

**LangSmith** — Commercial observability & evaluation platform. Tracing, debugging, testing, monitoring for LLM apps. **Primary revenue driver.** This is where prototype → production happens.

**LangGraph** — Framework for stateful, multi-actor agentic workflows. Cycles, persistence, human-in-the-loop. Major strategic bet as "AI agents" take off.

**LangSmith Fleet** (launched March 19, 2026 — VERY RECENT) — Enterprise workspace for creating, using, and managing fleets of agents. Key features:
- Agents get their own **memory**, tools, skills
- Dedicated **Slack identities** per agent (e.g. @vendor-intake, @weekly-sales-numbers)
- **ABAC** (Attribute-Based Access Control) + audit logs
- **Credentials model** (who agent acts on behalf of) + **permissions model** (who can use/edit/share)
- Native tracing for every agent action
- **This is what you referenced in your outreach to Jacob — you called out Fleet's enterprise potential**

**NVIDIA Partnership** — Announced alongside Fleet launch. Positions LangChain in production enterprise AI agent space.

**Interrupt 2026** — LangChain's agent conference. Upcoming. Theme: "Agents at Enterprise Scale."

### The Role: Technical Product Marketer
- **Location:** San Francisco, on-site
- **Comp:** $200K-240K + equity
- **Posted:** January 6, 2026

**Key responsibilities:**
- Explain how teams **build, evaluate, and operate agents in production** through technical storytelling
- Write technical blog posts, author tutorials, build demos
- Focus areas: observability, evaluation, agent best practices

**Requirements:**
- Experience marketing to engineering and technical product teams
- Ability to **code and reason about agentic production systems**
- Strong understanding of APIs and SDKs
- Background as an engineer OR equivalent hands-on experience
- Strong writing + experience creating technical content
- Comfort in fast-moving, ship-oriented environment

### Fit Breakdown

| Requirement | Your Profile | Fit |
|---|---|---|
| Marketing to engineering/technical teams | Google Maps API (2M+ transactions), VMware vSphere (dev + enterprise), LatticeFlow AI | **Strong** |
| Technical storytelling | VMworld keynote (20K), Substack post, blog content | **Strong** |
| Understanding of APIs/SDKs | Google Maps API ecosystem, LatticeFlow AI APIs | **Strong** |
| Enterprise GTM for developer tools | Google > VMware > Alation > LatticeFlow — career through-line | **Strong** |
| Ability to code | Python (light), Claude Code, Windsurf, shipped production app | **Adjacent — be honest, frame as builder** |
| Engineer background | PMM career, not engineering — but "builder who ships" | **Gap — bridge with builder story** |
| Technical content creation | Substack, sales playbooks, launch narratives | **Good — show willingness to go deeper** |
| Fast-moving, ship bias | LatticeFlow (zero-to-one), Storia (founder), consulting | **Strong** |

**Key insight:** This role skews more technical/content than your typical VP PMM target. But your **developer marketing roots (Google Maps API) + hands-on AI building (Claude Code, shipped production app) + enterprise GTM at technical companies** is a compelling combination. Jacob himself came from Twilio — he'll understand the API/developer marketing angle.

**Honest gap:** The JD wants someone who can code demos and reason about production agentic systems. You're not an engineer. Bridge this with: "I build on these tools daily (Claude Code, LangChain ecosystem) and I've marketed to developers my entire career — from Google Maps API to VMware containers. I bring the enterprise positioning + narrative skill that technical content alone can't provide."

### Your Positioning for This Call

> "The PMM who's marketed developer platforms from Google Maps API to VMware vSphere — and now builds with AI tools daily. I bring the enterprise GTM narrative that turns technical capability into business adoption."

### Jacob's Likely Questions & Your Answers

**"Tell me about yourself"** (90 seconds)
"I've spent 18 years in B2B product marketing at the intersection of developer platforms and enterprise GTM. My career started on Google's founding team for Google Earth and Maps API — marketing to developers while building the enterprise monetization story. I've carried that developer-plus-enterprise lens through VMware, where I led the vSphere containers launch to 20K attendees, through Alation where I created the 'Data Catalog' category, and most recently at LatticeFlow AI where I built the entire marketing function from zero — positioning AI governance for enterprise buyers. I'm now building with AI tools daily — Claude Code, LangGraph — and I reached out because LangSmith Fleet is exactly the kind of PLG-to-enterprise inflection point I've built my career around."

**"Why LangChain?"**
"Three reasons. One — I've built at this exact inflection point before. LangChain has 90M downloads and $16M ARR. You're going from beloved developer framework to enterprise platform. That's the Cloudflare playbook, the VMware playbook, the Twilio playbook — and I've lived it. Two — Fleet changes the game. When agents get Slack identities, ABAC, audit logs, and credential models, that's not a developer tool anymore. That's an enterprise product that needs positioning for CIOs, security teams, and ops leaders — my world. Three — I actually build on these tools. I shipped a production app, I use Claude Code daily, I understand the developer experience from the inside."

**"This role is very technical. Can you code?"**
Be honest: "I'm not an engineer. I write Python, I build with Claude Code and Windsurf, and I shipped a full-stack production app. But more importantly — at Google I marketed the Maps API to developers who were building real applications. At VMware I translated vSphere container integration for DevOps audiences AND enterprise architects. The skill isn't writing the demo code — it's understanding the technical capability deeply enough to tell the story that makes developers adopt and enterprises buy. That said, I'm building my technical depth every day, and tools like Claude Code mean I can prototype and create technical content faster than a traditional PMM."

**"What do you know about our products?"**
Show depth: "LangChain is the framework — the on-ramp for developers building LLM apps. LangSmith is where you monetize — observability, evaluation, tracing for production. LangGraph is the agentic layer — stateful workflows with human-in-the-loop. And Fleet, launched last month, is the enterprise play — agents with their own memory, Slack identities, ABAC controls, and audit logs. The NVIDIA partnership signals you're serious about enterprise scale. What I find most interesting is the positioning challenge: you need to tell one story to the developer building their first agent AND a completely different story to the VP of Engineering deciding to standardize on LangSmith for production observability. That's exactly the multi-persona positioning work I've done my entire career."

**"What would you do in the first 30/60/90 days?"**
"First 30: Listen. Sit on sales calls, interview existing customers, understand what's winning and what's not. Map the buyer journey from open-source user to LangSmith customer to Fleet enterprise deal. Days 30-60: Build the narrative architecture. Fleet needs its own positioning — separate from the developer framework story. I'd build a message house that works for three personas: the developer, the engineering leader, and the enterprise buyer. Days 60-90: Ship. Technical blog posts, a Fleet positioning deck, competitive battlecards (vs CrewAI, LlamaIndex, Weights & Biases), and a launch narrative for Interrupt if the timing works."

### Closing Questions to Ask Jacob
1. "How is the marketing team structured today? Where does this role sit — closer to product or closer to demand gen?"
2. "Fleet just launched. How are you thinking about the enterprise positioning challenge vs the developer community story?"
3. "What does success look like for this role at 6 months?"
4. "You came from Twilio — what parallels do you see between Twilio's developer-to-enterprise journey and where LangChain is now?"

### Competitive Landscape (Know This)
- **LlamaIndex** — RAG-focused, competing on data framework side
- **CrewAI** — Agent orchestration competitor
- **Microsoft Semantic Kernel** — Enterprise play, Azure-integrated
- **Weights & Biases / Arize / Braintrust** — Observability competitors to LangSmith
- **LangChain's moat:** Open source community (90M downloads), full-stack platform (framework + observability + agents + enterprise), first-mover in "agent engineering" category

### Pre-Call Checklist
- [ ] Read Jacob's blog post: [How to Use Memory in Agent Builder](https://blog.langchain.com/how-to-use-memory-in-agent-builder/)
- [ ] Skim [March 2026 Newsletter](https://blog.langchain.com/march-2026-langchain-newsletter/) (Fleet launch, NVIDIA)
- [ ] Check [LangSmith Fleet page](https://www.langchain.com/langsmith/fleet)
- [ ] Review [Interrupt 2026 preview](https://blog.langchain.com/previewing-interrupt-2026-agents-at-enterprise-scale/)
- [ ] Have Zoom link ready: langchain.zoom.us/j/87650558843 (pwd: 522037)

### Mindset
This is a **30-minute screen, not a deep interview.** Jacob is likely assessing:
1. Do you understand the product and market?
2. Can you hold a technical conversation?
3. Are you a culture fit for a fast-moving startup?

Be **curious, specific, and honest about gaps.** Your Google Maps API + VMware + LatticeFlow story is strong. Your builder credibility (shipped a production app, uses AI tools daily) bridges the technical gap. Lean into the enterprise GTM skill that a pure technical writer can't bring.

---

<a name="star-stories"></a>
## 9. STAR Stories Bank

> Rule: Confirmed facts only. Never fabricate. Never mix metrics.

### Story 1: Sales Enablement That Moved the Number
**Theme:** Sales enablement | Pipeline growth
**Company:** Alation
**Best for:** Chako-type interviews (enablement directors)

- **Situation:** Enterprise data catalog market was nascent. Sales team didn't have a consistent way to explain value to CDOs — deals were stalling in discovery.
- **Task:** Build collateral and enablement that gave AEs a repeatable way to qualify and advance CDO conversations.
- **Action:** Developed buyer persona collateral for CDOs (their language, fears, success metrics). Launched interactive sales workshop (not deck dump — actual practice). Gave AEs common framework and objection map.
- **Result:** 7x SQL pipeline growth.

### Story 2: Built Marketing from Zero
**Theme:** Zero-to-one | Leadership | Messaging under pressure
**Company:** LatticeFlow AI
**Best for:** Both — Chako sees zero-to-one enablement; Gaurav sees PMM who translates technical AI

- **Situation:** Strong AI safety tech but no marketing function, no message house, no ICP, no pipeline process. First and only marketing hire, brought onto executive team.
- **Task:** Build everything — positioning, messaging, demand gen, analyst relations, sales enablement.
- **Action:** Customer/prospect interviews to ground ICP. Built message house around AI trust and governance. Created vertical playbooks. Organized Davos AI House at World Economic Forum.
- **Result:** 35% pipeline growth. Company on the map in AI governance category.

### Story 3: $45M Revenue — Hardware Meets Software GTM
**Theme:** Product launch | Revenue impact
**Company:** Omnicell
**METRIC RULE: $45M = pre-configured medication dispensing cabinets ONLY**

- **Situation:** Omnicell launching new pre-configured medication dispensing cabinet offering.
- **Task:** Lead GTM — messaging, sales enablement, launch execution.
- **Action:** Developed positioning for clinical and procurement buyers. Built sales tools for complex sale.
- **Result:** $45M in revenue growth.

### Story 4: XaaS Repositioning (SEPARATE from Story 3)
**Theme:** Repositioning | Strategic messaging | Healthcare enterprise
**Company:** Omnicell
**METRIC RULE: DIFFERENT initiative from $45M. Never combine.**

- **Situation:** Omnicell needed to reposition from hardware/perpetual toward XaaS model.
- **Task:** Lead messaging and GTM for XaaS repositioning.
- **Action:** Developed repositioning narrative for CFO/CMO buyers at health systems. Built business value framework for subscription vs. capital expenditure. When VP Sales resisted ("We're a hardware company"), listened first, showed pipeline data (XaaS converting at 3x rate), built simple decision tree, tested with top performers, measured together.
- **Result:** Expansion revenue growth. Contracts with three major healthcare systems. Sales became XaaS champions.

### Story 5: Translating Technical for 20,000 People
**Theme:** Product-marketing collaboration | Technical translation | Scale
**Company:** VMware
**Best for:** Gaurav-type interviews (product managers)

- **Situation:** Launching vSphere Integrated Containers — complex tech at intersection of infrastructure and modern app dev. VMworld audience ranged from CTOs to DevOps to architects.
- **Task:** Build launch narrative and enablement for VMworld (20K+ attendees).
- **Action:** Worked directly with engineering/product. Translated differentiation into three levels: executive (business value), architect (integration story), practitioner (how it works). Executed global launch.
- **Result:** VMworld launch reached 20K+ attendees. 400+ enterprise adoptions.

### Story 6: Career Break — Proactive Frame
**Theme:** Career break | AI upskilling

**The answer:** "I took a planned career break in 2024 for health reasons. Once stable, I used the time deliberately: completed advanced AI coursework (DeepLearning.ai, Hugging Face), shipped a production app, and took on advisory clients in edtech and healthcare AI. I came back with a clearer technical foundation and sharper POV on AI in B2B marketing."

**Never:** Apologize. Over-explain. Be vague. Say "personal reasons" without context.

### Story Theme Map

| Theme | Best Story | Backup |
|-------|-----------|--------|
| Sales enablement | Story 1 (Alation 7x) | Story 2 (LatticeFlow) |
| Product-PMM collaboration | Story 5 (VMware VMworld) | Story 2 (LatticeFlow exec team) |
| Zero-to-one | Story 2 (LatticeFlow) | Story 5 (VMware) |
| Messaging under pressure | Story 2 (LatticeFlow) | Story 4 (Omnicell XaaS) |
| Revenue impact | Story 3 (Omnicell $45M) | Story 1 (Alation 7x) |
| AI-forward thinking | Story 2 (LatticeFlow/Davos) | Career story (shipped app) |
| Career break | Story 6 | — |
| Healthcare/regulated | Story 3 + 4 (Omnicell) | — |
| Scale / enterprise | Story 5 (VMware 20K) | Story 1 (Alation) |

---

<a name="idme-context"></a>
## 9. ID.me — Full Interview Context

### Company Snapshot
- 16-year-old identity verification company
- B2B focus: top global brands, federal/state agencies, healthcare firms
- Major win: **CMS default login** — opens floodgates for state agencies. Next: Epic partnerships for medical data sharing.
- B2B marketing = zero foundation. ~5 consumer marketers exist.
- AI-forward: Claude Code to analyze 3,000 sales calls, replacing Gamma with Claude for decks, brand guidelines in Claude

### Product Architecture
- **Layer 1 — Identity Verification (one-time):** Video verification, government credential (NIST IAL2/AAL2), 152M pre-verified users
- **Layer 2 — Authentication (ongoing):** Phishing-resistant, passwordless, consumer-friendly SSO
- **Layer 3 — Fraud Prevention (real-time):** Verified identity lowers fraud vectors, behavioral detection, prevents before transaction

**Most competitors own ONE layer. ID.me owns all three.**

### Sales Structure
- ~50 Account Executives
- 5 Verticals: Communities (Apple, Tesla, Lowe's), SLED, Healthcare, Federal, Workforce
- Remote team across regions

### Immediate Priorities (from Adam)
1. Message house for workforce business
2. Agreed-upon messaging/positioning across 5 verticals
3. Clear ICPs (currently nebulous)
4. Updated assets — pitch decks haven't been refreshed since 2023
5. Central asset repository (moving to Seismic)

### Competitive Positioning

| Dimension | ID.me | Okta | Auth0 | Jumio | Onfido | Socure |
|-----------|-------|------|-------|-------|--------|--------|
| Authentication/SSO | Yes | STRONG | STRONG | No | No | No |
| Identity Verification | STRONG | No | No | Yes | Yes | Yes |
| Fraud Prevention | STRONG | No | No | Yes | Yes | Yes |
| Government Credential | STRONG | No | No | No | No | No |
| Pre-verified Network (152M) | STRONG | No | No | No | No | No |
| Public Sector | STRONG | No | No | No | No | No |

**Vs Okta:** "Okta manages WHO has access. ID.me proves WHO you ARE."
**Vs Auth0:** "Auth0 for developers. ID.me for enterprise identity verification + compliance."
**Vs Jumio:** "Jumio verifies. ID.me verifies + authenticates + prevents fraud. Verify once, use everywhere."
**Vs Socure:** "Socure prevents fraud reactively. ID.me prevents AND verifies identity proactively."

### Interviewers

**Adam Kerin — Hiring Manager (interviewed, moved me forward)**
- Entire B2B marketing org — I'd be his first senior hire
- Uses Claude Code for sales call analysis
- Strong technical marketing alignment

**Chako Dickinson — Director, GTM Sales Enablement**
- Background: GitHub > Appian (led global ValueSelling rollout) > AWS
- Certifications: ValueSelling, Challenger, SPIN, Strategic Selling
- Her question: "Will you make my 50 AEs more effective or create more work?"
- My strongest stories: Alation 7x SQL, Omnicell feature matrix, LatticeFlow zero-to-one
- Closing questions: "What's the biggest gap between what AEs have and what they need?" + "How does enablement get prioritized against other marketing asks?"

**Gaurav Sharma — Group Product Manager**
- Background: Rakuten, 17+ years product experience
- His question: "Will you understand what we're building and accurately translate it?"
- My strongest stories: LatticeFlow product-marketing collab, Google Earth founding team, VMware vSphere translation
- Closing questions: "How do you like to work with PMM?" + "Where is the current narrative weakest?" + "What makes this hire a clear win at 6 months?"

### Objections to Prepare For

1. **"No identity/IAM experience."** Bridge: AI governance (LatticeFlow) + regulated healthcare (Omnicell) + federal context. Category is different; buyer psychology is identical.
2. **"Career gap."** Frame: Health recovery + deliberate AI upskilling + advisory clients + shipped production app. Came back sharper.
3. **"Startups. Can you handle 50 AEs across 5 verticals?"** Bridge: VMware (20K, global) + Omnicell (field sales + clinical across verticals) + Alation (7x across enterprise segments). Scale isn't new.

---

<a name="adam-notes"></a>
## 10. Adam Conversation Notes (ID.me)

*Source: Initial conversation with Adam Kerin, hiring manager*

### What Adam Shared
- He IS the entire B2B marketing org (first hire)
- Just sent field marketing offer (separate hire)
- Massive pent-up demand for marketing with no foundation
- No unified messaging — everyone defines the company differently
- Currently tactical, addressing immediate fires
- Using Claude Code to analyze 3,000 sales calls for messaging/ICP insights
- Building "Claude Code marketing brain" company-wide
- Replaced Gamma with Claude for PowerPoint; added brand guidelines to Claude

### What I Shared
- Product marketing career started at Google after Keyhole acquisition
- Established structured product launch approach
- Applied scrappy startup methodology to enterprise (Oracle, VMware)
- LatticeFlow: first marketing hire, built everything from scratch, 50% organic search lift, pipeline growth
- Currently consulting with education company (reading skills for kids)
- Strong overlap: zero-to-one building, message house creation, ICP definition, sales enablement

### ID.me's Foundation Gaps (confirmed by Adam)
1. Message house for workforce business — doesn't exist
2. Agreed-upon messaging/positioning across 5 verticals — inconsistent
3. Clear ICPs — currently nebulous
4. Updated assets — pitch decks from 2023
5. Central asset repository — moving to Seismic

### Key Signal
- Reduced sales cycle from 12 to 6 months at Alation — Adam found this compelling
- Strong partnership approach with product teams — "joined at the hip"
- "If you can't explain product to 5-year-old, what are you doing as product marketer?"

*Meeting transcript: https://notes.granola.ai/t/00b7041d-0633-473a-a24d-1a4452237ce7*

---

## Assets & References

| Asset | Location |
|-------|----------|
| Substack post | riteerouf.substack.com/p/deployed-my-first-production-app |
| FunFable Phonics | [add URL when live] |
| LinkedIn | linkedin.com/in/riteerouf |
| Master resume | `~/job-tailor/resumes/RiteeRouf_Master.md` |
| 2026 resume | `~/Documents/Resumes/2026_resumes/RiteeRouf_ProductMarketingDirector.md` |
| Scorecard tool | `~/job_search/score_role.py` |
| Job tailor tool | `~/job-tailor/job_tailor.py` |
| Interview coach | `~/Documents/interview_coach/` |
| ID.me competitor research | `~/Documents/interview_coach/ID.me/COMPETITOR_RESEARCH.md` |
| ID.me battle plan | `~/Documents/interview_coach/ID.me/CRUSH_TOMORROW_BATTLE_PLAN.md` |
| Adam interview notes | `~/Documents/interview_coach/ID.me/Interview_notes_Adam.txt` |
| Granola meeting transcript | https://notes.granola.ai/t/00b7041d-0633-473a-a24d-1a4452237ce7 |

---

## Session Log

| Date | What We Worked On |
|------|-------------------|
| Feb 2026 | Initial LinkedIn campaign strategy developed. PMM positioning locked. |
| Apr 10, 2026 | Scorecard tool built. 7 roles scored and ranked. Sendbird/SentiLink/Anthropic prioritized. |
| Apr 13, 2026 | Consolidated all strategy, outreach, resume rules, and interview coach into single source of truth. |

---

## Next Actions

- [ ] Send outreach to Charles Studt @ Sendbird
- [ ] Find hiring manager @ SentiLink > tweak resume > send
- [ ] Decide: BuildOps yes/no
- [ ] Confirm VC/accelerator network for Cursor
- [ ] Execute Anthropic 90-day plan (reapply July 1, 2026)

---

*This file consolidates content from: ~/Documents/Resumes/2026_resumes/job-search-strategy.md, ~/job-tailor/, ~/Documents/interview_coach/, ~/job_search/job_scorecards_master.md*
