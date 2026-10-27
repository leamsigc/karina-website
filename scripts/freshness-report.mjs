#!/usr/bin/env node
/**
 * Freshness report — which content pages are overdue for review.
 *
 *   pnpm freshness
 *
 * Review tiers (from the 2026-10-27 audit, P1-6):
 *   money pages  (services, divorce/family landings, contact) → 90 days
 *   blog posts                                                → 180 days
 *   city pages (abogado-en-*)                                 → 365 days
 *   everything else                                           → 365 days
 *
 * A page with no `lastReviewed` is reported as "no review date" instead of
 * being guessed at; dates are never auto-assigned.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const root = process.cwd()
const today = process.env.FRESHNESS_TODAY ? new Date(process.env.FRESHNESS_TODAY) : new Date()

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (entry.name.endsWith('.md')) out.push(full)
  }
  return out
}

function tierOf(relPath) {
  if (relPath.includes('/services/') || relPath.endsWith('abogado-de-divorcio-oaxaca.md') || relPath.endsWith('divorce-lawyer-oaxaca.md'))
    return { name: 'money', days: 90 }
  if (relPath.includes('/blog/'))
    return { name: 'blog', days: 180 }
  return { name: 'other', days: 365 }
}

const rows = []
for (const file of walk(resolve(root, 'content'))) {
  const relPath = relative(resolve(root, 'content'), file)
  if (relPath.endsWith('index.md') && !relPath.includes('/blog/'))
    continue
  const text = readFileSync(file, 'utf8')
  const frontmatter = text.split('---')[1] ?? ''
  const lastReviewed = frontmatter.match(/^lastReviewed:\s*["']?([\d-]+)/m)?.[1]
  const publishedAt = frontmatter.match(/^publishedAt:\s*["']?([\d-]+)/m)?.[1]
  const tier = tierOf(relPath)
  const ageDays = lastReviewed ? Math.floor((today - new Date(`${lastReviewed}T12:00:00`)) / 86_400_000) : null
  rows.push({
    file: relPath,
    tier: tier.name,
    date: lastReviewed ?? (publishedAt ? `${publishedAt} (published)` : null),
    ageDays,
    overdue: lastReviewed ? ageDays > tier.days : null,
  })
}

const overdue = rows.filter(r => r.overdue === true).sort((a, b) => b.ageDays - a.ageDays)
const unknown = rows.filter(r => r.overdue === null)
const ok = rows.filter(r => r.overdue === false)

const fmt = r => `  ${String(r.ageDays ?? '?').padStart(4)}d  ${r.tier.padEnd(6)}  ${r.file}  [${r.date ?? 'no date'}]`

console.log(`Freshness report — ${today.toISOString().slice(0, 10)}`)
console.log(`\nOverdue (${overdue.length}):`)
console.log(overdue.length ? overdue.map(fmt).join('\n') : '  none')
console.log(`\nNo review date (${unknown.length}):`)
console.log(unknown.length ? unknown.map(r => `  ${r.tier.padEnd(6)}  ${r.file}`).join('\n') : '  none')
console.log(`\nWithin cadence: ${ok.length}`)

// Missing dates are a process gap, not a failure; overdue pages should be queued.
process.exitCode = 0
