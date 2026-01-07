// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Meu Portfólio',
      meta: [
        { name: 'description', content: 'Portfólio de Fábio Canestraro' }
      ]
    }
  }
})
