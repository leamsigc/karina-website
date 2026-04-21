import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineRobotsSchema } from '@nuxtjs/robots/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { defineOgImageSchema } from 'nuxt-og-image/content'
import { defineSchemaOrgSchema } from 'nuxt-schema-org/content'
import { z } from 'zod'

const blogSchema = z.object({
  layout: z.enum(['default', 'blog-layout']).default('blog-layout'),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string()
  }),
  tags: z.array(z.string()).optional(),
  date: z.string(),
  publishedAt: z.string(),
  head: z.object({
    meta: z.array(z.object({
      name: z.string(),
      content: z.string()
    })),
    htmlAttrs: z.object({
      lang: z.string()
    }).optional(),
    bodyAttrs: z.object({
      class: z.string()
    }).optional(),
  }),
  category: z.string(),
  featured: z.boolean().default(false),
  type: z.enum(['blog', 'case-study', 'service']).default("blog"),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string(),
    social: z.string()
  }),
  caseOverview: z.object({
    client: z.string(),
    location: z.string(),
    result: z.string(),
    category: z.string(),
    summary: z.string()
  }).optional(),
  ogImage: z.object({
    component: z.enum(['BlogOgImage', 'Video']).default('BlogOgImage'),
    props: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      headline: z.string()
    })
  }),
  robots: defineRobotsSchema(),
  sitemap: defineSitemapSchema(),
  ogImage: defineOgImageSchema(),
  schemaOrg: defineSchemaOrgSchema(),

});


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
