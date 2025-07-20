import './assets/main.css'
import 'animate.css'

import { createApp } from 'vue'
// Styles
import App from './App.vue'

// plugins
import { registerPlugins } from '@/plugins/index.js'
const app = createApp(App)
registerPlugins(app)

app.mount('#app')
