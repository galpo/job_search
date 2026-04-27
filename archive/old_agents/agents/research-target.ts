/**
 * research-target.ts — Ritee Rouf Job Search Agent
 *
 * Researches a target company and hiring manager, then outputs
 * a structured brief ready to feed /interview-prep and /draft-outreach.
 *
 * Usage:
 *   npx tsx research-target.ts "Company Name" ["Person Name"] ["role context"]
 *
 * Examples:
 *   npx tsx research-target.ts "Coro California" "John Smith" "Chief Partnerships Officer"
 *   npx tsx research-target.ts "Mapbox" "Sarah Lee" "VP Marketing — interviewing for PMM"
 *   npx tsx research-target.ts "LangChain"  # company-only, no specific person
 *
 * Output:
 *   output/research_<Company>_<Person>_<date>.md   ← full brief
 *   output/research_<Company>_<Person>_<date>.json ← structured data for other agents
 */

import { query } from '@anthropic-ai/claude-agent-sdk';
import * as fs from 'fs';
import * as path from 'path';

// ── Config ─────────────────────────────────────────────────────────────────

const OUTPUT_DIR = path.join(process.cwd(), 'output');

const SYSTEM_PROMPT = `You are Ritee Rouf's intelligence analyst for job search and business development. You research companies and people to prepare her for interviews, LinkedIn outreach, and client pitches.

Load the job-search skill first to understand her profile, target companies, and outreach standards.

RESEARCH WORKFLOW — execute in order:

## STEP 1: COMPANY RESEARCH
Search for and synthesize:
1. **Product and positioning** — what they sell, who buys it, how they describe themselves
2. **ICP (Ideal Customer Profile)** — industry verticals, company size, buyer persona
3. **Business stage** — funding, headcount, recent growth signals, public/private
4. **Recent news** — last 90 days: product launches, funding, hires, partnerships, press
5. **Competitive landscape** — top 2-3 competitors, how this company differentiates
6. **GTM motion** — PLG, sales-led, channel, partner-led? How do they go to market?
7. **Marketing signals** — content themes, campaigns, events, analyst relations
8. **Pain signals** — hiring patterns, job descriptions open now (what are they solving for?)

Sources to hit in order: company website, LinkedIn company page, Crunchbase/PitchBook, G2/Capterra, recent press/TechCrunch/VentureBeat, their blog, their job postings.

## STEP 2: PERSON RESEARCH (if name provided)
Search for and synthesize:
1. **Current role and tenure** — title, how long, what they own
2. **Career path** — where they came from, pattern of moves
3. **Public voice** — LinkedIn posts, talks, podcasts, articles — what do they care about?
4. **Shared context** — any overlap with Ritee's background (companies, tools, conferences, geography)
5. **Communication style** — how do they write/speak? Formal, casual, data-driven, narrative?
6. **What they're likely hiring for** — read between the lines of their recent activity

## STEP 3: RITEE FIT ANALYSIS
Based on research:
1. **Strongest connection points** — 3 specific angles that resonate between Ritee and this company/person
2. **Narrative hook** — the single most compelling opening line for outreach or an interview
3. **Proof points to lead with** — which of her verified achievements maps best to their priorities
4. **Potential objections** — what might give them pause; how to address proactively
5. **Smart questions to ask** — 3-5 questions that signal strategic thinking and genuine curiosity

## STEP 4: OUTREACH DRAFT (Adam standard)
Draft a LinkedIn outreach message following Ritee's gold standard:
- Hook: specific role + why it resonates personally
- 4-5 bullets: most relevant proof points, mobile-readable
- Technical AI credibility + Substack link as proof
- Local San Mateo angle if relevant
- Fractional/consulting option if role context is unclear
- Warm close: call / coffee / resume
- Under 250 words. No wall of text. No em dashes.

## STEP 5: INTERVIEW PREP PRIMER
If context is an interview:
- 90-second verbal pitch tailored to this company
- 5 most likely interview questions + STAR answer frameworks using Ritee's actual stories
- Watch-outs for this specific role (gap, title, LatticeFlow, commitment)

## OUTPUT FORMAT
Write two files:
1. **research_brief.md** — full human-readable brief with all sections above
2. **research_data.json** — structured data:
{
  "company": { "name", "product", "icp", "stage", "differentiator", "gtm_motion", "recent_news": [] },
  "person": { "name", "title", "tenure", "background_summary", "communication_style", "shared_context": [] },
  "fit": { "hook", "top_proof_points": [], "objections": [], "smart_questions": [] },
  "outreach_draft": "<full message text>",
  "interview_primer": { "verbal_pitch", "likely_questions": [], "watchouts": [] }
}

Save both to the output directory provided.`;

// ── Helpers ─────────────────────────────────────────────────────────────────

function slugify(str: string): string {
  return str.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 25);
}

// ── Main ────────────────────────────────────────────────────────────────────

async function researchTarget(company: string, person: string = '', roleContext: string = '') {
  const dateStr = new Date().toISOString().split('T')[0];
  const personSlug = person ? `_${slugify(person)}` : '';
  const slug = `${slugify(company)}${personSlug}_${dateStr}`;
  const briefPath = path.join(OUTPUT_DIR, `research_${slug}.md`);
  const dataPath = path.join(OUTPUT_DIR, `research_${slug}.json`);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('\n' + '='.repeat(60));
  console.log('RESEARCH-TARGET AGENT');
  console.log(`Company: ${company}${person ? ` | Person: ${person}` : ''}${roleContext ? ` | Context: ${roleContext}` : ''}`);
  console.log('='.repeat(60) + '\n');

  const prompt = [
    `Research target for Ritee Rouf's job search:`,
    `Company: ${company}`,
    person ? `Person: ${person}` : '',
    roleContext ? `Context: ${roleContext}` : '',
    ``,
    `Save the research brief to: ${briefPath}`,
    `Save the structured JSON to: ${dataPath}`,
    ``,
    `Run all 5 steps in the workflow. Be thorough on company and person research — this brief will be used for a real interview or real outreach message.`,
  ].filter(Boolean).join('\n');

  const q = query({
    prompt,
    options: {
      maxTurns: 40,
      cwd: path.join(process.cwd(), '..'), // job_search root so skills load
      model: 'sonnet',
      allowedTools: ['Skill', 'WebSearch', 'WebFetch', 'Read', 'Write', 'Bash'],
      settingSources: ['project'],
      systemPrompt: SYSTEM_PROMPT,
    },
  });

  for await (const msg of q) {
    if (msg.type === 'assistant' && msg.message) {
      for (const block of msg.message.content) {
        if (block.type === 'text') {
          process.stdout.write(block.text);
        }
        if (block.type === 'tool_use') {
          if (block.name === 'WebSearch' && block.input && typeof block.input === 'object' && 'query' in block.input) {
            console.log(`\n🔍 ${block.input.query}`);
          } else if (block.name === 'WebFetch' && block.input && typeof block.input === 'object' && 'url' in block.input) {
            const url = String(block.input.url);
            console.log(`\n🌐 ${url.slice(0, 70)}${url.length > 70 ? '...' : ''}`);
          } else if (block.name === 'Write') {
            console.log(`\n✍️  Writing output file...`);
          } else if (block.name !== 'Skill') {
            console.log(`\n🔧 ${block.name}`);
          }
        }
      }
    }
  }

  // ── Summary ──────────────────────────────────────────────────────────────
  console.log('\n' + '='.repeat(60));
  [briefPath, dataPath].forEach(f => {
    if (fs.existsSync(f)) {
      console.log(`✅ ${path.basename(f)}`);
    } else {
      console.log(`❌ Missing: ${path.basename(f)}`);
    }
  });

  // Print outreach draft if JSON written successfully
  if (fs.existsSync(dataPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      if (data?.outreach_draft) {
        console.log('\n' + '─'.repeat(60));
        console.log('OUTREACH DRAFT (copy-ready):');
        console.log('─'.repeat(60));
        console.log(data.outreach_draft);
      }
    } catch {
      // JSON parse failed — brief still written
    }
  }
  console.log('='.repeat(60) + '\n');
}

// ── Entry ────────────────────────────────────────────────────────────────────

const [,, company, person = '', roleContext = ''] = process.argv;

if (!company) {
  console.log('Usage: npx tsx research-target.ts "Company" ["Person Name"] ["role context"]');
  console.log('');
  console.log('Examples:');
  console.log('  npx tsx research-target.ts "Coro California" "John Smith" "Chief Partnerships Officer"');
  console.log('  npx tsx research-target.ts "Mapbox" "Sarah Lee" "interviewing for Principal PMM"');
  console.log('  npx tsx research-target.ts "LangChain"');
  process.exit(1);
}

researchTarget(company, person, roleContext).catch(console.error);
