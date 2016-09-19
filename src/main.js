import Vue from 'vue'
import Router from 'vue-router'
import {contains} from './filters'
import App from './components/App.vue'
import TasksView from './components/TasksView.vue'
import FilterView from './components/FilterView.vue'
import UserView from './components/UserView.vue'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('contains', contains)
// Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/tasks/': {
    component: TasksView
  },
  '/filter/': {
    component: FilterView
  },
  '/user/': {
    component: UserView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.afterEach(transition => {
  window.localStorage.setItem('route', transition.to.path)
})

router.redirect({
  '*': '/tasks/'
})

let getRoute = window.localStorage.getItem('route')
if (getRoute) {
  router.go(getRoute)
}

router.start(App, '#app')
