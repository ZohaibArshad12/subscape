import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eb72f42c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c5a42a50 = () => interopDefault(import('..\\pages\\newlogin.vue' /* webpackChunkName: "pages/newlogin" */))
const _032ad2b2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _ee62bf9c = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _155c3ecb = () => interopDefault(import('..\\pages\\subscribe.vue' /* webpackChunkName: "pages/subscribe" */))
const _70c46ca1 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _3b60cb6a = () => interopDefault(import('..\\pages\\player\\_name.vue' /* webpackChunkName: "pages/player/_name" */))
const _7ec23a5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _eb72f42c,
    name: "login"
  }, {
    path: "/newlogin",
    component: _c5a42a50,
    name: "newlogin"
  }, {
    path: "/register",
    component: _032ad2b2,
    name: "register"
  }, {
    path: "/settings",
    component: _ee62bf9c,
    name: "settings"
  }, {
    path: "/subscribe",
    component: _155c3ecb,
    name: "subscribe"
  }, {
    path: "/test",
    component: _70c46ca1,
    name: "test"
  }, {
    path: "/player/:name?",
    component: _3b60cb6a,
    name: "player-name"
  }, {
    path: "/",
    component: _7ec23a5a,
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
