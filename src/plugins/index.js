/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import 'vuetify/styles'
import vuetify from './vuetify'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import YoutubeIframe from '@techassi/vue-youtube-iframe'

// Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export function registerPlugins(app) {
  app.use(router).use(vuetify).use(pinia).use(YoutubeIframe)
}
