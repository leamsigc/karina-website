/**
 * Explicit ES ↔ EN content path map.
 *
 * Nuxt Content stores one file per locale, and for most pages the slug is
 * identical in both locales (`/about` ↔ `/en/about`). A few topics legitimately
 * use a locale-correct slug instead (Spanish slug in `es`, English slug in `en`),
 * so the translation cannot be derived by prefixing `/en`.
 *
 * Key = path in the `content_es` collection, value = path in `content_en`.
 * Add an entry whenever a page uses a different slug per locale. The Nuxt config
 * fails the build if a key or value has no content file, and
 * `app/pages/[...slug].vue` uses this map to emit hreflang and to check that the
 * translation really exists.
 */
export const ES_TO_EN_CONTENT_PATHS: Record<string, string> = {
  // Blog
  '/blog/divorcio-incausado-oaxaca-requisitos-costo-tiempo': '/en/blog/divorce-incausado-oaxaca-requirements-cost-time',
  '/blog/pension-alimenticia-oaxaca-calculo-aumento-disminucion': '/en/blog/child-support-alimony-oaxaca-calculation-increase',
  '/blog/guarda-custodia-oaxaca-padre-madre-compartida': '/en/blog/child-custody-oaxaca-father-mother-joint',
  '/blog/juicio-sucesorio-oaxaca-intestamentario-testamentario-costo': '/en/blog/probate-succession-oaxaca-intestate-testate-cost',
  '/blog/juicio-usucapion-oaxaca-prescripcion-positiva-requisitos': '/en/blog/adverse-possession-usucapion-oaxaca-requirements',
  '/blog/reconocimiento-paternidad-prueba-adn-oaxaca': '/en/blog/paternity-recognition-dna-test-oaxaca',
  '/blog/custodia-internacional-permisos-viaje-menores-oaxaca': '/en/blog/international-child-custody-travel-permissions-mexico',
  '/blog/divorcio-extranjeros-mexico-oaxaca': '/en/blog/expat-divorce-lawyer-oaxaca-mexico',
  '/blog/testamento-mexico-extranjeros-oaxaca': '/en/blog/expat-estate-planning-wills-oaxaca',
  '/blog/abogado-inmobiliario-gestoria-notarial-oaxaca': '/en/blog/real-estate-lawyer-notary-services-oaxaca-mexico',
  '/blog/embargo-pension-alimenticia-oaxaca': '/en/blog/wage-garnishment-child-support-oaxaca',
  '/blog/porcentaje-pension-alimenticia-oaxaca': '/en/blog/child-support-percentage-oaxaca',
  '/blog/como-demandar-pension-alimenticia-oaxaca': '/en/blog/how-to-file-child-support-oaxaca',

  // Services
  '/services/abogado-de-pension-alimenticia-oaxaca': '/en/services/child-support-alimony-lawyer-oaxaca',
  '/services/derecho-municipal-oaxaca': '/en/services/municipal-law-oaxaca',
  '/services/cuanto-cuesta-divorcio-oaxaca': '/en/services/divorce-cost-oaxaca',
  '/services/juicio-sucesorio-oaxaca': '/en/services/probate-oaxaca',
  '/services/cobranza-mercantil-oaxaca': '/en/services/debt-collection-oaxaca',

  // Landing pages
  '/abogado-de-divorcio-oaxaca': '/en/divorce-lawyer-oaxaca',

  // Case studies
  '/case-studies/divorcio-pension-alimenticia-caso': '/en/case-studies/divorce-child-support-case',
  '/case-studies/prestamo-pagare-cobro': '/en/case-studies/promissory-note-collection-case',
  '/case-studies/numero-oficial-tramite': '/en/case-studies/official-address-number-case',
  '/case-studies/contrato-arrendamiento-caso': '/en/case-studies/lease-agreement-case',
  '/case-studies/reduccion-predial-caso': '/en/case-studies/property-tax-reduction-case',
}

/**
 * Inverse of {@link ES_TO_EN_CONTENT_PATHS} (EN path → ES path).
 */
export const EN_TO_ES_CONTENT_PATHS: Record<string, string> = Object.fromEntries(
  Object.entries(ES_TO_EN_CONTENT_PATHS).map(([esPath, enPath]) => [enPath, esPath]),
)

/**
 * Resolve the URL of the current page in the other locale.
 *
 * `switchLocalePath` only knows how to add/strip the `/en` prefix, which produces
 * a 404 for every page whose ES and EN slugs differ (the language switcher used
 * to emit `/en/<spanish-slug>` on those pages). This uses the explicit map and
 * falls back to prefixing for routes that have no content entry (e.g. `/success`).
 */
export function contentPathForLocale(currentPath: string, targetLocale: 'es' | 'en'): string {
  const path = currentPath.replace(/\/+$/, '') || '/'
  const isEn = path === '/en' || path.startsWith('/en/')
  const currentEs = isEn ? (path.replace(/^\/en/, '') || '/') : path
  const currentEn = isEn ? path : (path === '/' ? '/en' : `/en${path}`)
  const esPath = isEn ? (EN_TO_ES_CONTENT_PATHS[currentEn] ?? currentEs) : currentEs
  const enPath = isEn ? currentEn : (ES_TO_EN_CONTENT_PATHS[currentEs] ?? currentEn)
  return targetLocale === 'en' ? enPath : esPath
}
