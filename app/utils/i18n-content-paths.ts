/**
 * Explicit ES ↔ EN content path map.
 *
 * Nuxt Content stores one file per locale, and for most pages the slug is
 * identical in both locales (`/about` ↔ `/en/about`). A few topics legitimately
 * use a locale-correct slug instead (Spanish slug in `es`, English slug in `en`),
 * so the translation cannot be derived by prefixing `/en`.
 *
 * Key = path in the `content_es` collection, value = path in `content_en`.
 * Add an entry whenever a new page uses a different slug per locale, and remove
 * the loser of a Batch 2 consolidation. `app/pages/[...slug].vue` uses this map
 * to emit hreflang and to check that the translation really exists.
 */
export const ES_TO_EN_CONTENT_PATHS: Record<string, string> = {
  '/services/cuanto-cuesta-divorcio-oaxaca': '/en/services/divorce-cost-oaxaca',
}

/**
 * Inverse of {@link ES_TO_EN_CONTENT_PATHS} (EN path → ES path).
 */
export const EN_TO_ES_CONTENT_PATHS: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN_CONTENT_PATHS).map(([esPath, enPath]) => [enPath, esPath]),
)
