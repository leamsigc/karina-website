import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'
import { z } from 'zod'

const imageSchema = z.union([
  z.string(),
  z.object({
    src: z.string(),
    alt: z.string().optional()
  })
])

const authorSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  avatar: z.string().optional(),
  social: z.string().optional()
}).optional()

const headSchema = z.object({
  meta: z.array(z.object({
    name: z.string().optional(),
    property: z.string().optional(),
    content: z.string()
  })).optional(),
  htmlAttrs: z.object({
    lang: z.string()
  }).optional(),
  bodyAttrs: z.object({
    class: z.string()
  }).optional()
}).optional()

const blogSchema = z.object({
  layout: z.enum(['default', 'blog-layout', 'BlogLayout', 'blog', 'blog-detail', 'case-studies', 'service-detail', 'services-layout', 'services', 'contact']).default('default'),
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  image: imageSchema.optional(),
  keywords: z.string().optional(),
  tags: z.array(z.string()).optional(),
  date: z.string().optional(),
  publishedAt: z.string().optional(),
  head: headSchema,
  category: z.string().optional(),
  featured: z.boolean().default(false),
  type: z.enum(['blog', 'case-study', 'service', 'case']).default('blog'),
  author: authorSchema,
  caseOverview: z.object({
    client: z.string(),
    location: z.string(),
    result: z.string(),
    category: z.string(),
    summary: z.string()
  }).optional(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string()
  })).optional(),
  robots: defineRobotsSchema(),
  sitemap: defineSitemapSchema(),
  ogImage: defineOgImageSchema(),
  schemaOrg: defineSchemaOrgSchema()
})


export default defineContentConfig({
  collections: {
    content_en: defineCollection(
      {
        type: 'page',
        source: {
          include: 'en/**',
          prefix: 'en',
        },
        schema: blogSchema
      })
    ,
    content_es: defineCollection(
      {
        type: 'page',
        source: {
          include: 'es/**',
          prefix: '',
        },
        schema: blogSchema,
      }
    ),
  },
})
