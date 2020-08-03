import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _43970fbe = () => interopDefault(import('..\\..\\client\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _6fecb3ba = () => interopDefault(import('..\\..\\client\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _688f38ed = () => interopDefault(import('..\\..\\client\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _65e1d9fb = () => interopDefault(import('..\\..\\client\\pages\\useless\\gaming.vue' /* webpackChunkName: "pages/useless/gaming" */))
const _45ccdc3e = () => interopDefault(import('..\\..\\client\\pages\\useless\\inspire.vue' /* webpackChunkName: "pages/useless/inspire" */))
const _3e027cce = () => interopDefault(import('..\\..\\client\\pages\\articles\\_id\\index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _7c10e6fe = () => interopDefault(import('..\\..\\client\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _43970fbe,
    name: "articles"
  }, {
    path: "/posts",
    component: _6fecb3ba,
    name: "posts"
  }, {
    path: "/auth/login",
    component: _688f38ed,
    name: "auth-login"
  }, {
    path: "/useless/gaming",
    component: _65e1d9fb,
    name: "useless-gaming"
  }, {
    path: "/useless/inspire",
    component: _45ccdc3e,
    name: "useless-inspire"
  }, {
    path: "/articles/:id",
    component: _3e027cce,
    name: "articles-id"
  }, {
    path: "/",
    component: _7c10e6fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
