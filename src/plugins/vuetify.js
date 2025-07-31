import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import theme from '@/plugins/theme.js'
console.log('Vuetify plugin loaded', theme)
export default createVuetify({
  components,
  directives,
  theme,
  // theme: {
  //   defaultTheme: 'dark',
  // },
})
