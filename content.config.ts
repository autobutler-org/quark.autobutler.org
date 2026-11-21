import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      // Load every markdown file under content/docs
      source: "docs/**",
      type: "page",
      schema: z.object({
        /**
         * When the doc last changed (ISO 8601). Filled at build time from the
         * file's last git commit by the `content:file:afterParse` hook in
         * nuxt.config.ts; don't set it in frontmatter.
         */
        modified: z.string().optional(),
      }),
    }),
  },
});
