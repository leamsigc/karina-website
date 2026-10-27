#!/usr/bin/env node
/**
 * Post-build verification for the static export.
 *
 * Run after `pnpm build`:
 *   node scripts/verify-build.mjs   (or `pnpm verify:build`)
 *
 * Asserts the four things the crawl audit cares about, against `.output/public`:
 *  1. every URL in `sitemap.xml` was actually prerendered (no sitemap 404s);
 *  2. no sitemap URL is a redirect stub;
 *  3. every `<script type="application/ld+json">` block is non-empty and parses;
 *  4. `<html lang>` matches the locale and every hreflang alternate is
 *     self-referencing, reciprocal and points at a built page.
 *
 * Exits non-zero when any check fails so it can gate a deploy.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'

const root = resolve(process.cwd(), '.output/public')
const siteUrl = readFileSync(resolve(process.cwd(), 'nuxt.config.ts'), 'utf8')
  .match(/url:\s*'([^']+)'/)?.[1] ?? 'https://abogada-karina-oaxaca.com'

function walkHtml(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      walkHtml(fullPath, out)
      continue
    }
    if (entry.name.endsWith('.html'))
      out.push(fullPath)
  }
  return out
}

const problems = []
const pages = new Map()

for (const file of walkHtml(root)) {
  let url = `/${relative(root, file).replace(/\.html$/, '')}`
  if (url === '/index')
    url = '/'
  else if (url.endsWith('/index'))
    url = url.slice(0, -'/index'.length) || '/'
  pages.set(url, readFileSync(file, 'utf8'))
}

// Pages that are intentionally outside the sitemap/index and therefore have no hreflang.
const ignored = new Set(['/200', '/404', '/success', '/en/success'])

const isRedirectStub = html => /http-equiv="refresh"/i.test(html)

// 1 + 2. sitemap ↔ prerendered pages
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(([, loc]) => loc.replace(siteUrl, '') || '/')

for (const url of sitemapUrls) {
  if (!pages.has(url))
    problems.push(`sitemap URL was not prerendered: ${url}`)
  else if (isRedirectStub(pages.get(url)))
    problems.push(`sitemap URL is a redirect stub: ${url}`)
}

// 3 + 4. JSON-LD, lang, hreflang
let jsonLdBlocks = 0
const alternates = new Map()

for (const [url, html] of pages) {
  if (ignored.has(url) || isRedirectStub(html))
    continue

  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    jsonLdBlocks++
    const raw = match[1].trim()
    if (!raw) {
      problems.push(`empty JSON-LD block: ${url}`)
      continue
    }
    try {
      JSON.parse(raw)
    }
    catch (error) {
      problems.push(`unparsable JSON-LD on ${url}: ${error.message}`)
    }
  }

  const lang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1]
  const expectedLang = url === '/en' || url.startsWith('/en/') ? 'en' : 'es'
  if (!lang?.startsWith(expectedLang))
    problems.push(`wrong <html lang> "${lang}" on ${url} (expected ${expectedLang})`)

  const pageAlternates = [...html.matchAll(/<link[^>]*rel="alternate"[^>]*>/g)].map(([tag]) => ({
    hreflang: tag.match(/hreflang="([^"]+)"/)?.[1],
    href: (tag.match(/href="([^"]+)"/)?.[1] ?? '').replace(siteUrl, '') || '/',
  }))
  alternates.set(url, pageAlternates)

  if (!pageAlternates.some(alt => alt.hreflang === expectedLang && alt.href === url))
    problems.push(`missing self-referencing hreflang (${expectedLang}) on ${url}`)

  for (const alt of pageAlternates) {
    if (!pages.has(alt.href))
      problems.push(`hreflang ${alt.hreflang} on ${url} points at a missing page: ${alt.href}`)
  }
}

for (const [url, pageAlternates] of alternates) {
  for (const alt of pageAlternates) {
    if (alt.hreflang === 'x-default')
      continue
    const altPage = alternates.get(alt.href)
    if (!altPage)
      continue
    if (!altPage.some(other => other.href === url && other.hreflang !== 'x-default'))
      problems.push(`hreflang not reciprocal: ${url} → ${alt.href}`)
  }
}

console.log(JSON.stringify({
  builtPages: pages.size,
  sitemapUrls: sitemapUrls.length,
  jsonLdBlocks,
  pagesWithAlternates: alternates.size,
  problems,
}, null, 2))

if (problems.length > 0) {
  console.error(`\n✖ ${problems.length} problem(s) found`)
  process.exit(1)
}

console.log('\n✔ build verified')
