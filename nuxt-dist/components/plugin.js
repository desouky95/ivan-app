import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  IButton: () => import('../..\\components\\iButton.vue' /* webpackChunkName: "components/i-button" */).then(c => wrapFunctional(c.default || c)),
  ISelect: () => import('../..\\components\\iSelect.vue' /* webpackChunkName: "components/i-select" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
