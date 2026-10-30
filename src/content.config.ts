import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Tech'),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.coerce.date()),
    techStack: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    demoUrl: z.string().url().optional().or(z.literal('')),
    repoUrl: z.string().url().optional().or(z.literal('')),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
  }),
});

const labs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['AI', 'UI Effects', 'Web Experiments', 'Tools']).default('AI'),
    status: z.enum(['Exploring', 'In Progress', 'Completed']).default('In Progress'),
    tags: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional().or(z.literal('')),
    repoUrl: z.string().url().optional().or(z.literal('')),
    featured: z.boolean().default(false),
    date: z.string().optional(),
  }),
});

export const collections = { posts, projects, labs };
