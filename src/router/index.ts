import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { apps } from '@/config/apps.ts'

// https://router.vuejs.org/guide/
const router = createRouter({
  // https://router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(import.meta.env.BASE_URL),
  // https://router.vuejs.org/guide/advanced/scroll-behavior
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // If there's a saved position (e.g., from browser back/forward), use it
    if (savedPosition) return savedPosition
    // Otherwise, scroll to top
    return { top: 0, behavior: 'smooth' }
  },
  // https://router.vuejs.org/guide/advanced/meta.html
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { hideHeader: true, hideFooter: true },
    },
    {
      // Path based app routing: /feedback/zipline-android
      // Custom regex only matches known app ids from src/config/apps.ts
      path: `/:appName(${Object.keys(apps).join('|')})`,
      name: 'app',
      component: HomeView,
      meta: { hideHeader: true, hideFooter: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { name: 'About' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: () => {
        return '/'
      },
    },
  ],
})

export default router
