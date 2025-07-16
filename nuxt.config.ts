// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  compatibilityDate: '2025-04-08',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader({ svgo: false }),
    ],
  },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'viewport', content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],
  runtimeConfig: {
    public: {},
  },
  css: ['@/assets/css/styles.css'],
});
