
export default defineNuxtRouteMiddleware((to) => {
  const routePath = to.path.replace(/\/$/, '') || '/'

  const normalizedPath = routePath.replace(/^\/(en)(\/|$)/, '/')

  const layoutAliases: Record<string, string> = {
    'default': 'default',
    'blog': 'blog',
    'blog-layout': 'blog',
    'BlogLayout': 'blog',
    'blog-detail': 'blog-detail',
    'case-studies': 'case-studies',
    'service-detail': 'service-detail',
    'services': 'services',
    'services-layout': 'services-layout',
    'contact': 'contact'
  }

  const rawLayout = to.meta.layout as string | undefined
  if (rawLayout && layoutAliases[rawLayout]) {
    setPageLayout(layoutAliases[rawLayout])
    return
  }

  const isServiceDetail = normalizedPath.startsWith('/services/')
  const isBlog = normalizedPath.startsWith('/blog/')
  const isCaseStudies = normalizedPath.startsWith('/case-studies')
  const isContact = normalizedPath === '/contact'
  const isServices = normalizedPath === '/services'

  let layout = 'default'

  if (isServiceDetail)
    layout = 'service-detail'
  else if (isBlog)
    layout = 'blog'
  else if (isCaseStudies)
    layout = 'case-studies'
  else if (isContact)
    layout = 'contact'
  else if (isServices)
    layout = 'services'

  setPageLayout(layout)
});
