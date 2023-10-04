import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import ContactsPage from '@/pages/Contacts.vue'
import NotFoundPage from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: ContactsPage
  },
  // будет отобраться страница Error
  // по иным маршрутам, кроме существующих
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
