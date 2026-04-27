# ATS Keyword Analysis Prompt Template
## Use this prompt every time you tailor a resume to a new job

---

## STEP 1: PASTE THIS PROMPT INTO CLAUDE

```
You are an expert product marketing resume coach and ATS optimization specialist.

I'm going to give you:
1. A job description (JD)
2. My tailored resume in .md format

Your task is to do a side-by-side ATS keyword analysis in 3 tiers:

---

### 🟢 STRONG MATCHES
Exact or near-exact JD language that appears in my resume.
Format as a table:
| Giga JD Term | Where It Appears in Resume |

### 🟡 PARTIAL MATCHES
The concept is present but the exact phrasing differs.
Format as a table:
| JD Term | Gap | Suggested Fix |

### 🔴 MISSING — High Priority Adds
Keywords or phrases from the JD that are completely absent.
Only flag ones that are (a) genuinely true about my experience and (b) would meaningfully improve ATS score.
Format as a table:
| Missing Term | Where to Add It | Suggested Phrasing |

---

Rules:
- Never suggest fabricating experience
- Only recommend adding language I can honestly claim
- Flag exact JD phrases that are high-signal for ATS parsers
- Keep suggested fixes to one sentence or less
- After the analysis, give me a 1-paragraph summary of match strength and top 3 priorities

[PASTE JD HERE]

---

[PASTE RESUME .MD HERE]
```

---

## STEP 2: MAKE EDITS IN CURSOR

### Cursor Folder Setup
```
~/job-search/
├── master-resume/
│   └── RiteeRouf_Master.md          ← never edit directly
├── tailored/
│   └── RiteeRouf_[Company]_[Role].md  ← one per application
├── prompts/
│   └── ATS_Keyword_Analysis_Prompt.md ← this file
└── tracker/
    └── applications.md              ← log of where you applied
```

### Cursor Workflow (per application)
1. Duplicate `RiteeRouf_Master.md` → rename to `RiteeRouf_[Company]_[Role].md`
2. Run ATS analysis in Claude (Step 1 above)
3. Open tailored .md in Cursor
4. Use `Cmd+K` inline edit to make targeted changes per Claude's recommendations
5. Use `Cmd+L` to open Cursor chat for any rewrites
6. Final check: confirm 2-page limit before exporting
7. Export to PDF (see Step 3)

### Useful Cursor Prompts (paste into Cmd+K or Cmd+L)
```
# Tighten a bullet to one line without losing the metric:
"Make this bullet more concise, keep the metric, max 20 words"

# Inject a missing keyword naturally:
"Add the phrase '[keyword]' into this bullet without it feeling forced"

# ATS scan a single bullet:
"Does this bullet match the JD language for [term]? Suggest improvement."

# Check tone:
"Does this read like a Head of PMM at a Series A AI startup or a mid-level manager?"
```

---

## STEP 3: EXPORT .MD TO PDF

### Option A: Pandoc (command line, cleanest output)
```bash
# Install once
brew install pandoc
brew install --cask mactex  # or: brew install basictex

# Export (run from your tailored/ folder)
pandoc RiteeRouf_Giga_HeadPMM.md -o RiteeRouf_Giga_HeadPMM.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=0.75in \
  -V fontsize=10pt \
  -V mainfont="Helvetica Neue"
```

### Option B: VS Code / Cursor Extension
- Install: **Markdown PDF** extension
- Right-click .md file → "Markdown PDF: Export (pdf)"
- Quick but less control over formatting

### Option C: Paste into Google Docs → Download as PDF
- Best for matching your Canva template style
- Paste the .md content, reformat headers manually

---

## APPLICATION TRACKER TEMPLATE
Paste into `tracker/applications.md`

```markdown
| Date | Company | Role | JD URL | Resume Version | ATS Score Est. | Status | Notes |
|------|---------|------|--------|---------------|----------------|--------|-------|
| 2026-02-25 | Giga | Head of PMM | [url] | RiteeRouf_Giga_HeadPMM.md | Strong | Applied | Voice AI gap - bridge in cover letter |
```

---

## QUICK REFERENCE: YOUR TOP ATS KEYWORDS (always include these)

These appear across most VP/Head of PMM roles you're targeting. Keep them in every version:

- GTM strategy / go-to-market
- Product positioning & messaging
- Sales enablement
- ICP / buyer personas
- Category creation
- Competitive intelligence / battlecards
- Cross-functional leadership
- Pipeline growth (with %)
- Regulated industries / enterprise
- Agentic AI / generative AI
- Foundation models
- 0-to-1 / built from scratch
- C-suite / executive stakeholders
