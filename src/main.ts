import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTippy from 'vue-tippy'
createApp(App).use(VueTippy).use(router).mount('#app')
