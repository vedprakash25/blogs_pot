import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://vedprakash25.github.io/blogs_pot",
  // base: "/Blogspot",
  integrations: [tailwind()],
});
