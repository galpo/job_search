# Session + Artifact Naming Convention

Applies to Claude Code session titles, forks, and tracker rows.
Keeps the sidebar scannable and makes status readable without opening anything.

## Format

```
[Area] Subject: status
```

## Areas

| Prefix | Scope |
|--------|-------|
| `[JS]` | Job search: roles, outreach, interviews, debriefs |
| `[Org]` | Ritee's Org, agent roster, plugin/skill work |
| `[Alfred]` | Morning brief, scheduled tasks, chief-of-staff automation |
| `[Walabs]` | walabs.ai site, workshops, consulting |

## Status vocabulary

Job search only. Mirrors `active_roles.md`.

`scored` · `applied` · `outreach` · `interviewing` · `rejected` · `closed` · `offer`

## Forks

Forks and retries get a numeric suffix. Never inherit `(fork)`.

```
[Org] Agent roster refresh
[Org] Agent roster refresh ·2
[Org] Agent roster refresh ·3
```

## Examples

```
[JS] Port: rejected
[JS] Anrok PMM: scored T2
[JS] Bunkerhill Health: applied
[Org] Agent roster refresh ·2
[Alfred] Morning brief fix
[Walabs] SMB workshop proposal
```

## Rules

- No em dashes anywhere, per CLAUDE.md.
- Subject is the company or the thing, not the task verb. `[JS] Anrok PMM: scored`, not `[JS] Score Anrok`.
- One session per task. A session that drifts gets renamed to what it became.
- Close the loop: when a role's status changes, update `strategy/active_roles.md` and Notion in the same session.
