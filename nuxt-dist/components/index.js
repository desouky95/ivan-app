import { wrapFunctional } from './utils'

export { default as IButton } from '../..\\components\\iButton.vue'
export { default as ISelect } from '../..\\components\\iSelect.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyIButton = import('../..\\components\\iButton.vue' /* webpackChunkName: "components/i-button" */).then(c => wrapFunctional(c.default || c))
export const LazyISelect = import('../..\\components\\iSelect.vue' /* webpackChunkName: "components/i-select" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
