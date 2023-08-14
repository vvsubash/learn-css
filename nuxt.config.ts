import OpenProps from 'open-props';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
  enabled: true
  },
  postcss: {
    plugins: {
      'postcss-jit-props': OpenProps,
    },
  },
});
