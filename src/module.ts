import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'aak-nuxt3-notifications',
    configKey: 'aakNuxt3Notifications',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin({
      mode: 'client',
      src: resolve('./runtime/plugin'),
    })
  },
})
