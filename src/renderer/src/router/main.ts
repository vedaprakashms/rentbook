import aboutVue from '@renderer/pages/about.vue'
import addTenantVue from '@renderer/pages/addtenant.vue'
import homeVue from '@renderer/pages/home.vue'
import showtenantVue from '@renderer/pages/showtenant.vue'
import summaryVue from '@renderer/pages/summary.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: homeVue, name: 'Home', icon: 'house' },
  { path: '/add', component: addTenantVue, name: 'Add Tenant', icon: 'user-plus' },
  { path: '/show/:id', component: showtenantVue, name: 'ShowTenant', icon: 'user-plus' },
  { path: '/summary', component: summaryVue, name: 'Summary', icon: 'chart-area' },
  { path: '/about', component: aboutVue, name: 'About', icon: 'address-card' }
]

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})
