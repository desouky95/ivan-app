import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d451be8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _bb2a6470 = () => interopDefault(import('..\\pages\\destination.vue' /* webpackChunkName: "pages/destination" */))
const _77db3980 = () => interopDefault(import('..\\pages\\routes.vue' /* webpackChunkName: "pages/routes" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _7d451be8,
    name: "index___ar"
  }, {
    path: "/destination",
    component: _bb2a6470,
    name: "destination"
  }, {
    path: "/en",
    component: _7d451be8,
    name: "index___en"
  }, {
    path: "/routes",
    component: _77db3980,
    name: "routes"
  }, {
    path: "/ar/destination",
    component: _bb2a6470,
    name: "destination___ar"
  }, {
    path: "/ar/routes",
    component: _77db3980,
    name: "routes___ar"
  }, {
    path: "/en/destination",
    component: _bb2a6470,
    name: "destination___en"
  }, {
    path: "/en/routes",
    component: _77db3980,
    name: "routes___en"
  }, {
    path: "/",
    component: _7d451be8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
