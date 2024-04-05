import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		layout: z.string().default("post"),
		title: z.string().optional(),
		brewer: z.string().optional(),
		venue: z.string().optional(),
		reviewer: z.string().optional(),
		image: z.string().or(z.null()).default("/public/placeholder.png"),
		pubDate: z.date().default(new Date("2024-01-01")),
	}),
});

// image: z.string().url().optional().or(z.literal('')).or(z.null()).default("/public/placeholder.png"),

export const collections = { blog };