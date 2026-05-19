# Karina Orocio Cruz — Abogada Postulante en Oaxaca

Sitio web bilingüe (español / inglés) para el despacho jurídico de **Karina Orocio Cruz**, abogada postulante en Oaxaca de Juárez, Oaxaca, México. Especialista en Derecho Privado (Familiar, Civil, Mercantil y Administrativo).

---

## Información del Negocio

| Campo | Detalle |
|---|---|
| **Nombre** | Karina Orocio Cruz |
| **Razón social** | Orocio y Asociados |
| **Especialidad** | Derecho Privado (Familiar, Civil, Mercantil y Administrativo) |
| **Sitio web** | [abogada-karina-oaxaca.com](https://abogada-karina-oaxaca.com/) |
| **Teléfonos** | 951 615 30 10 · 951 611 77 10 · 951 613 00 39 |
| **WhatsApp** | [wa.me/529516153010](https://wa.me/529516153010) |
| **Correo** | karina@abogada-karina-oaxaca.com |
| **Dirección** | Calle Puebla 107, Fracc. Elsa, Agencia Municipal Santa Rosa Panzacola, Oaxaca de Juárez, Oax. |
| **Horario** | Lunes a Sábado, 9:00 – 18:00 |
| **Experiencia** | 5+ años |

---

## Servicios

### Materia Mercantil
- Juicios orales y tradicionales
- Pagarés, Facturas, Cargos no reconocidos
- Amparo
- Gestoría notarial
- Trámite de Registro de Marca & Declaración de uso marcario

### Materia Civil
- Juicio sucesorio intestamentario y testamentario
- Juicio de Divorcio (incausado, voluntario, administrativo)
- Juicio de Nulidad de matrimonio
- Juicio de rectificación de actas de nacimiento
- Firma de escrituras y elevación de minutas

### Materia Familiar
- Juicio de reconocimiento de hijo/a
- Separación de cónyuges como acto prejudicial

### Jurisdicción Voluntaria
- Testimonial para acreditar identidad de persona
- Testimonial para acreditar existencia de concubinato
- Notificación de rescisión de contrato de arrendamiento

### Trámites Municipales
- Número oficial, Alineamiento
- Ajuste de pago predial, Traslado de dominio

### Gestiones Administrativas
- Actas de divorcio
- Aclaración de actas de nacimiento
- Registro de Marca y Declaración de uso marcario

### Actos Prejudiciales
- Declaraciones bajo protesta
- Exhibición de cosas muebles y testamentos
- Examen de testigos en situaciones urgentes

---

## Zonas de Cobertura

- Oaxaca de Juárez *(sede principal)*
- Santa Lucía del Camino
- Xoxocotlán
- San Bartolo Coyotepec
- Huatulco · Puerto Escondido · Pochutla · Salina Cruz · Tehuantepec · Juchitán · Tlaxiaco · Tuxtepec

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Framework** | [Nuxt 4](https://nuxt.com/) con compatibilidad v5 habilitada |
| **Frontend** | Vue 3, TypeScript |
| **UI** | [@nuxt/ui](https://ui.nuxt.com/) v4 + Tailwind CSS v4 |
| **Contenido** | [@nuxt/content](https://content.nuxt.com/) v3 (Markdown) |
| **i18n** | [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — `es` (default) + `en` |
| **Imágenes** | @nuxt/image |
| **Fuentes** | @nuxt/fonts — Inter + Cormorant Garamond (Google Fonts) |
| **SEO** | @nuxtjs/seo · nuxt-seo-utils · schema.org (LegalService) |
| **Analytics** | nuxt-umami |
| **Rendimiento** | nuxt-vitalizer |
| **Gestor de paquetes** | pnpm |
| **Despliegue** | Generación estática (`nuxt generate`) → Netlify |

---

## Características del Proyecto

- **Bilingüe** — Español como idioma predeterminado; inglés en prefijo `/en/`
- **Contenido en Markdown** — Todas las páginas de servicios, blog y ciudades se gestionan como archivos `.md` bajo `/content/{es,en}/`
- **SEO avanzado** — Sitemap automático con i18n, robots.txt, Schema.org `LegalService`, Open Graph images
- **Arquitectura catch-all** — Una sola ruta `[...slug].vue` sirve toda la navegación de contenido
- **Diseño basado en tokens** — Paleta gold/navy definida en `app.config.ts`

---

## Estructura del Proyecto

```
karina-website/
├── app/
│   ├── assets/css/       # main.css y estilos globales
│   ├── components/       # Componentes Vue reutilizables
│   ├── layouts/          # Layouts de Nuxt
│   ├── pages/
│   │   ├── [...slug].vue # Ruta catch-all para el contenido
│   │   └── success.vue   # Página de confirmación de formulario
│   └── utils/
├── content/
│   ├── es/               # Contenido en español (Markdown)
│   │   ├── services/     # Páginas de servicio individuales
│   │   ├── blog/         # Artículos del blog
│   │   └── case-studies/ # Casos de éxito
│   └── en/               # Contenido en inglés
├── i18n/                 # Traducciones JSON (es.json, en.json)
├── plan/
│   └── Company-info.md   # Información fuente del negocio
├── public/               # Activos estáticos (imágenes, favicon)
├── nuxt.config.ts        # Configuración principal de Nuxt
├── app.config.ts         # Configuración de UI (colores, tokens)
└── content.config.ts     # Esquemas de colecciones de contenido
```

---

## Instalación

Asegúrate de tener **pnpm** instalado, luego:

```bash
pnpm install
```

## Servidor de Desarrollo

```bash
pnpm dev
# → http://localhost:3000
```

## Producción

```bash
# Generar sitio estático
pnpm build   # equivale a: nuxt generate

# Previsualizar build local
pnpm preview
```

---

## Despliegue

El sitio usa `nuxt generate` para producir un sitio completamente estático y se despliega en **Netlify** mediante la configuración `netlify.toml`. La raíz de publicación apunta a `.output/public`.

---

## Variables de Entorno

| Variable | Descripción |
|---|---|
| `NUXT_PUBLIC_BASE_URL` | URL base del sitio (usada por @nuxtjs/i18n) |

---

## Referencia rápida de páginas de contenido (español)

| Ruta | Archivo Markdown |
|---|---|
| `/` | `content/es/index.md` |
| `/about` | `content/es/about.md` |
| `/services` | `content/es/services-index.md` |
| `/contact` | `content/es/contact.md` |
| `/faq` | `content/es/faq.md` |
| `/case-studies` | `content/es/case-studies.md` |
| `/associates` | `content/es/associates.md` |
| `/abogado-en-oaxaca-de-juarez` | `content/es/abogado-en-oaxaca-de-juarez.md` |
| `/blog/*` | `content/es/blog/*.md` |

---

## Recursos

- [Documentación de Nuxt](https://nuxt.com/docs)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt UI](https://ui.nuxt.com/)
- [Nuxt SEO](https://nuxtseo.com/)
- [Sitio en producción](https://abogada-karina-oaxaca.com/)
