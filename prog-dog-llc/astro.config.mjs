import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  output: "server",
  site: "https://www.progdogproductions.com",
  adapter: vercel(),
  integrations: [react(), icon({
    include: {
      logo: ['facebook', 'youtube', 'xtend']
    }
  }), robotsTxt()],
  renderers: ['@astrojs/renderer-react']
});