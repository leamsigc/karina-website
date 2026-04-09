export const TRANSLATIONS = {
    // ... (Identical to React, effectively used for fallback or strict typing if needed)
    // Actually we are using i18n module, so we might not need this object for translations, 
    // but we can keep it if we want to seed the json files from it.
    // I will omit the huge Translation object since we have en.json and es.json now.
};

export const COMPANY_INFO = {
    name: "Karina Orocio Cruz - Abogada Postulante",
    phone: "951-615-30-10",
    email: "karina@abogada-karina-oaxaca.com",
    address: "Oaxaca de Juárez, Oaxaca, México",
    hours: {
        mon: "9:00AM - 6:00PM",
        tue: "9:00AM - 6:00PM",
        wed: "9:00AM - 6:00PM",
        thu: "9:00AM - 6:00PM",
        fri: "9:00AM - 6:00PM",
    },
    socials: {
        facebook: "#",
        whatsapp: "https://wa.me/9516153010",
        instagram: "#"
    }
};

export const NAV_LINKS = [
    { nameKey: 'home', path: '/' },
    { nameKey: 'about', path: '/about' },
    { nameKey: 'services', path: '/services' },
    { nameKey: 'tools', path: '/tools' },
    { nameKey: 'blog', path: '/blog' },
    { nameKey: 'contact', path: '/contact' },
];

export const SERVICES = [
    {
        id: '1',
        title: 'Revisión de Avalúos Catastrales',
        description: 'Evaluamos si tu propiedad está valuada correctamente por el municipio. Si está sobrevaluada, te ayudamos a corregirla.',
        iconName: 'i-heroicons-home',
        link: '/contact'
    },
    {
        id: '2',
        title: 'Gestión para Derecho Municipal',
        description: 'Te ayudamos a gestionar la reducción del monto de tu predial de manera legal y efectiva.',
        iconName: 'i-heroicons-currency-dollar',
        link: '/contact'
    },
    {
        id: '3',
        title: 'Asesoría en Regularización de Propiedades',
        description: 'Te guiamos a través del proceso de regularización de tu propiedad ante las autoridades correspondientes.',
        iconName: 'i-heroicons-document-check',
        link: '/contact'
    },
    {
        id: '4',
        title: 'Defensa Legal ante Cobros Excesivos',
        description: 'Representación legal cuando consideras que tu predial es excesivo o injusto.',
        iconName: 'i-heroicons-shield-check',
        link: '/contact'
    },
    {
        id: '5',
        title: 'Trámites Municipales',
        description: 'Gestiones y trámites ante el municipio de Oaxaca de Juárez y otras autoridades.',
        iconName: 'i-heroicons-building-office',
        link: '/contact'
    },
    {
        id: '6',
        title: 'Consulta Legal General',
        description: 'Primera asesoría gratis sobre cualquier tema legal patrimonial relacionado con tu propiedad.',
        iconName: 'i-heroicons-chat-bubble-left',
        link: '/contact'
    }
];

export const TESTIMONIALS = [
    {
        id: '1',
        name: 'María G.',
        role: 'Propietaria en Oaxaca',
        content: 'Karina me ayudó a reducir significativamente mi predial. Muy profesional y atenta.',
        rating: 5
    },
    {
        id: '2',
        name: 'Juan R.',
        role: 'Dueño de propiedad',
        content: 'Excelente servicio. Lograron corregir el avalúo de mi propiedad y ahora pago menos.',
        rating: 5
    },
    {
        id: '3',
        name: 'Ana L.',
        role: 'Empresaria',
        content: 'Muy recomendable. Primera asesoría gratis y resolvió todas mis dudas.',
        rating: 5
    },
    {
        id: '4',
        name: 'Carlos M.',
        role: 'Propietario',
        content: 'Profesional y efectiva. Me explicó todo el proceso y obtuve resultados.',
        rating: 5
    },
    {
        id: '5',
        name: 'Patricia H.',
        role: 'Dueña de casa',
        content: 'Gracias a Karina regularicé mi propiedad. Totalmente recomendada.',
        rating: 5
    }
];

export const SEO_KEYWORDS = [
    "abogada oaxaca", "Karina Orocio Cruz", "predial oaxaca", "reducción de predial",
    "asesoría legal patrimonial", "abogado property tax oaxaca", "regularización de propiedades oaxaca",
    "trámites municipales oaxaca", "avaluo catastral", "defensa legal predial",
    "abogada property tax", "reduccion predial oaxaca", "asesoria property tax"
];
