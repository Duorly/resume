import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection(
            asSeoCollection({
                type: 'page',
                source: 'blog/*.md',
                schema: z.object({
                    date: z.string(),
                    title: z.string(),
                    description: z.string(),
                    cover: z.string().optional(),
                    category: z.string(),
                    tags: z.array(z.string()).optional()
                })
            })
        )
    }
})
