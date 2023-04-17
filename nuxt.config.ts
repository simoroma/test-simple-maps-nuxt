// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          type: "text/javascript",
          src: "mapdata.js",
        },
        {
          type: "text/javascript",
          src: "usmap.js",
        },
      ],
    },
  },
});
