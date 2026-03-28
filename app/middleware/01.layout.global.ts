
export default defineNuxtRouteMiddleware(async (to) => {
    const routeStart = to.path

    let layout = to.meta.layout || 'default';
    console.log("meta",to);
    

    // Service detail pages
    const isServiceDetail = routeStart.startsWith('/services/') || routeStart.startsWith('/es/services/')
    
    // Blog pages
    const isBlog = routeStart.startsWith('/blog/') || routeStart.startsWith('/es/blog/')
    
    // Case studies pages
    const isCaseStudies = routeStart.startsWith('/case-studies') || routeStart.startsWith('/es/case-studies')
    
    // Contact pages
    const isContact = routeStart === '/contact' || routeStart === '/es/contact' || routeStart === '/en/contact'
    
    // Services index
    const isServices = routeStart === '/services' || routeStart === '/es/services' || routeStart === '/en/services'
    
    if (isServiceDetail && !to.meta.layout) {
        layout = 'service-detail'
    } else if (isBlog && !to.meta.layout) {
        layout = 'blog'
    } else if (isCaseStudies&& !to.meta.layout) {
        layout = 'case-studies'
    } else if (isContact && !to.meta.layout) {
        layout = 'contact'
    } else if (isServices && !to.meta.layout) {
        layout = 'services'
    }

    setPageLayout(layout as any)
});
