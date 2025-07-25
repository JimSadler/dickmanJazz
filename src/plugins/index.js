/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from '@/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import YoutubeIframe from '@techassi/vue-youtube-iframe'

// Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const vuetify = createVuetify({
  components,
  directives,
})

export function registerPlugins(app) {
  app.use(router).use(vuetify).use(pinia).use(YoutubeIframe)
}
