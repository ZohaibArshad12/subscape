import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _941033d2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3394ff8b = () => interopDefault(import('..\\pages\\newlogin.vue' /* webpackChunkName: "pages/newlogin" */))
const _ccdc3136 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _1f35b4e5 = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _4bd7c078 = () => interopDefault(import('..\\pages\\subscribe.vue' /* webpackChunkName: "pages/subscribe" */))
const _87005a58 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _408ca2d2 = () => interopDefault(import('..\\pages\\player\\_name.vue' /* webpackChunkName: "pages/player/_name" */))
const _275f7a00 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _941033d2,
    name: "login"
  }, {
    path: "/newlogin",
    component: _3394ff8b,
    name: "newlogin"
  }, {
    path: "/register",
    component: _ccdc3136,
    name: "register"
  }, {
    path: "/settings",
    component: _1f35b4e5,
    name: "settings"
  }, {
    path: "/subscribe",
    component: _4bd7c078,
    name: "subscribe"
  }, {
    path: "/test",
    component: _87005a58,
    name: "test"
  }, {
    path: "/player/:name?",
    component: _408ca2d2,
    name: "player-name"
  }, {
    path: "/",
    component: _275f7a00,
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
