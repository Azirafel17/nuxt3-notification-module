import { defineNuxtPlugin } from '#app'
import notify, { Notify } from './composables/notify'

declare module '#app' {
  interface NuxtApp {
    $notify: Notify
  }
}
export default defineNuxtPlugin({
  enforce: 'pre',
  setup(nuxtApp) {
    nuxtApp.provide('notify', notify as Notify)
  },
})
