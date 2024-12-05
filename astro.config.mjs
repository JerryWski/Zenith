// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(),icon()]
});