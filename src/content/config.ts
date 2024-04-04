import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		layout: z.string().optional(),
		title: z.string().optional(),
		brewer: z.string().optional(),
		reviewer: z.string().optional(),
		venue: z.string().optional(),
		image: z.string().url().optional(),
	}),
});

export const collections = { blog };