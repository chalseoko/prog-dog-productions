import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import formDebug from "@astro-utils/forms/dist/integration.js";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  output: "server",
  site: "https://www.progdogproductions.com",
  adapter: vercel(),
  integrations: [react(), tailwind(), icon(), robotsTxt(), formDebug ],
  renderers: ['@astrojs/renderer-react']
});