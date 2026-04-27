/**
 * tailor-resume.ts — Ritee Rouf Job Search Agent
 *
 * Scores a JD against your profile, tailors your resume,
 * pauses for review, then outputs a final .docx + .pdf.
 *
 * Usage:
 *   npx tsx tailor-resume.ts "<JD text or URL>" [company] [role]
 *
 * Examples:
 *   npx tsx tailor-resume.ts "https://jobs.lever.co/coro/..." "Coro California" "Chief Partnerships Officer"
 *   npx tsx tailor-resume.ts "$(cat jd.txt)" "Mapbox" "Principal PMM"
 *
 * Output:
 *   output/resume_<Company>_<Role>_<date>.docx
 *   output/resume_<Company>_<Role>_<date>.pdf
 *   output/resume_<Company>_<Role>_<date>_changlog.md
 */

import { query } from '@anthropic-ai/claude-agent-sdk';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// ── Config ────────────────────────────────────────────────────────────────────

const CANONICAL_RESUME = path.resolve(process.env.HOME || '~', 'job_search/RiteeRouf_OtterAI_v2.docx');
const OUTPUT_DIR = path.join(process.cwd(), 'output');
const SARIS_URL = 'https://docs.google.com/spreadsheets/d/1OTsDJOj0Ewg6I5Mtb97DD6QpPpGDrxslYJFRRWnRNZ4';

const SYSTEM_PROMPT = `You are Ritee Rouf's personal resume strategist. You have deep knowledge of her career, verified metrics, and brand voice via the job-search skill.

WORKFLOW — follow this exactly, in order:

## PHASE 1: SCORE THE ROLE
1. Read the JD carefully
2. Check hard disqualifiers first — flag immediately if any:
   - Hands-on platform requirement with no bridge (e.g. Databricks/Spark with no adjacent experience)
   - Established VC/accelerator network required (YC, a16z)
   - Deep demand gen / paid media ownership (not strategic oversight)
3. Score fit 0-100% and assign tier:
   - 85%+ → Tier 1 (move fast)
   - 70-84% → Tier 2 (warm outreach)
   - 55-69% → Tier 3 (warm contact only)
   - <55% → Recommend skip
4. Output a scorecard table: Requirement | Ritee's profile | Fit
5. State the single most compelling angle for this role
6. List watch-outs: career gap, title step-down, comp band, commitment signal
7. State recommendation: Pursue / Skip / Warm contact only

## PHASE 2: TAILORING PLAN (if Tier 1 or 2)
1. Read the canonical resume at: ${CANONICAL_RESUME}
   If not found, read from SARIS portfolio: ${SARIS_URL}
2. Propose SPECIFIC changes only — no structural rewrites:
   - Summary: 1-2 sentence adjustment to mirror role language
   - Bullets to reorder or reweight (reference by company + current text)
   - Keywords to swap in (only where accurate — no fabrication)
   - Any metric to surface more prominently
3. Show the full proposed diff: [BEFORE] → [AFTER] for every change
4. State what you did NOT change and why

## PHASE 3: REVIEW GATE — STOP HERE
Output exactly:
---REVIEW GATE---
Scorecard and tailoring plan above. 
Type APPROVE to generate files, or give feedback to revise.
---

Wait for the human to respond before proceeding to Phase 4.

## PHASE 4: GENERATE FILES (only after APPROVE)
1. Generate the tailored resume as a .docx using the docx skill
   - Exact formatting: 0.5" margins, Name 18pt, section headers 11pt bold, body 10pt
   - 2 pages max
   - No em dashes anywhere — use semicolons, colons, or commas
   - Substack link in Technical Upskilling bullet only
2. Convert to PDF using LibreOffice: soffice --headless --convert-to pdf <file.docx>
3. Write a changelog.md summarizing every change made and why
4. Save all three files to: output/resume_<Company>_<Role>_<YYYY-MM-DD>.*

## NON-NEGOTIABLE RULES (all phases)
- NEVER fabricate or inflate metrics — verified figures only (in job-search skill)
- NEVER swap or combine the two Omnicell achievements
- NEVER conflate LatticeFlow (MLOps/safety) with LangChain (LLM framework)
- ALWAYS show changes before applying — nothing moves without review
- No em dashes in any output content`;

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 30);
}

async function waitForApproval(): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => {
    rl.question('\n> ', answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function tailorResume(jdInput: string, company: string, role: string) {
  const dateStr = new Date().toISOString().split('T')[0];
  const slug = `${slugify(company)}_${slugify(role)}_${dateStr}`;

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('\n' + '='.repeat(60));
  console.log(`TAILOR-RESUME AGENT`);
  console.log(`Company: ${company} | Role: ${role}`);
  console.log('='.repeat(60) + '\n');

  // Determine if input is URL or raw text
  const isUrl = jdInput.startsWith('http');
  const prompt = isUrl
    ? `Fetch and analyze this job posting: ${jdInput}\nCompany: ${company}\nRole: ${role}\nCanonical resume: ${CANONICAL_RESUME}`
    : `Analyze this job description:\n\n${jdInput}\n\nCompany: ${company}\nRole: ${role}\nCanonical resume: ${CANONICAL_RESUME}`;

  let fullOutput = '';
  let reviewGateHit = false;
  let phase4Prompt = '';

  // ── PHASE 1-3: Score + Plan + Review Gate ─────────────────────────────────
  const q = query({
    prompt,
    options: {
      maxTurns: 20,
      cwd: path.join(process.cwd(), '..'), // job_search root, so skills load
      model: 'sonnet',
      allowedTools: ['Skill', 'WebSearch', 'WebFetch', 'Read', 'Bash'],
      settingSources: ['project'],
      systemPrompt: SYSTEM_PROMPT,
    },
  });

  for await (const msg of q) {
    if (msg.type === 'assistant' && msg.message) {
      for (const block of msg.message.content) {
        if (block.type === 'text') {
          process.stdout.write(block.text);
          fullOutput += block.text;

          if (block.text.includes('---REVIEW GATE---')) {
            reviewGateHit = true;
          }
        }
        if (block.type === 'tool_use') {
          if (block.name === 'WebSearch' && block.input && typeof block.input === 'object' && 'query' in block.input) {
            console.log(`\n🔍 Searching: "${block.input.query}"`);
          } else if (block.name !== 'Skill') {
            console.log(`\n🔧 ${block.name}`);
          }
        }
      }
    }
  }

  if (!reviewGateHit) {
    console.log('\n\n[Agent completed without hitting review gate — check output above]');
    return;
  }

  // ── REVIEW GATE ───────────────────────────────────────────────────────────
  console.log('\n' + '─'.repeat(60));
  console.log('Type APPROVE to generate .docx + .pdf, or give feedback:');
  console.log('─'.repeat(60));

  const userResponse = await waitForApproval();

  if (userResponse.toUpperCase() !== 'APPROVE') {
    // Feed feedback back for revision
    console.log('\n🔄 Revising based on your feedback...\n');
    phase4Prompt = `The human reviewed your scorecard and tailoring plan and responded:\n"${userResponse}"\n\nRevise your plan accordingly, then re-present the review gate.`;
  } else {
    phase4Prompt = `The human approved. Proceed to PHASE 4: generate the tailored resume .docx, convert to PDF, and write the changelog. Save all files to: output/${slug}`;
  }

  // ── PHASE 4: Generate files ───────────────────────────────────────────────
  console.log('\n📄 Generating resume files...\n');

  const q2 = query({
    prompt: phase4Prompt,
    options: {
      maxTurns: 30,
      cwd: path.join(process.cwd(), '..'),
      model: 'sonnet',
      allowedTools: ['Skill', 'WebSearch', 'WebFetch', 'Read', 'Write', 'Bash', 'Glob'],
      settingSources: ['project'],
      systemPrompt: SYSTEM_PROMPT,
    },
  });

  for await (const msg of q2) {
    if (msg.type === 'assistant' && msg.message) {
      for (const block of msg.message.content) {
        if (block.type === 'text') {
          process.stdout.write(block.text);
        }
        if (block.type === 'tool_use') {
          const toolEmoji: Record<string, string> = {
            Write: '✍️', Bash: '⚙️', Read: '📖', WebSearch: '🔍', WebFetch: '🌐',
          };
          const emoji = toolEmoji[block.name] || '🔧';
          console.log(`\n${emoji} ${block.name}`);
        }
      }
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log('\n' + '='.repeat(60));
  const docxPath = path.join(OUTPUT_DIR, `resume_${slug}.docx`);
  const pdfPath = path.join(OUTPUT_DIR, `resume_${slug}.pdf`);
  const changelogPath = path.join(OUTPUT_DIR, `resume_${slug}_changelog.md`);

  [docxPath, pdfPath, changelogPath].forEach(f => {
    if (fs.existsSync(f)) {
      console.log(`✅ ${path.basename(f)}`);
    } else {
      console.log(`❌ Missing: ${path.basename(f)}`);
    }
  });
  console.log('='.repeat(60) + '\n');
}

// ── Entry ─────────────────────────────────────────────────────────────────────

const [,, jdInput, company = 'Company', role = 'Role'] = process.argv;

if (!jdInput) {
  console.log('Usage: npx tsx tailor-resume.ts "<JD text or URL>" [company] [role]');
  console.log('');
  console.log('Examples:');
  console.log('  npx tsx tailor-resume.ts "https://jobs.lever.co/..." "Coro California" "Chief Partnerships Officer"');
  console.log('  npx tsx tailor-resume.ts "$(cat jd.txt)" "Mapbox" "Principal PMM"');
  process.exit(1);
}

tailorResume(jdInput, company, role).catch(console.error);
