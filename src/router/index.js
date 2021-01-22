import Vue from 'vue'
import VueRouter from 'vue-router'
import RadioPlayer from '../views/RadioPlayer.vue'
import GeneralPage from '../views/GeneralPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RadioPlayer',
    component: RadioPlayer
  },

  {
    path: '/GeneralPage',
    name: 'GeneralPage',
    component: GeneralPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
