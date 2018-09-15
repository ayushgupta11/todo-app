import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`./components/${component}.vue`)
}


export default new Router({
  routes: [
    {
      path: '/',
      component: load('Default')
    }
  ]
})
