//gepdealSheet.vue Webcomponent code

import { defineCustomElement } from 'vue'
import vueTippy from '@/components/vueTippy.vue'
const element = defineCustomElement(vueTippy);
customElements.define("tippy-tooltip", element);