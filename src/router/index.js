import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import AboutViewVue from '../views/AboutView.vue'
import ClassesVue from '../views/Classes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/',
      name: 'About',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      
    },
    {
      path: '/classes',
      name: 'Classes',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes.vue')
      
    },
    {
      path: '/classes2',
      name: 'Classes2',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes2.vue')
      
    },
    {
      path: '/classes3',
      name: 'Classes3',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes3.vue')
      
    },
    {
      path: '/classes4',
      name: 'Classes4',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes4.vue')
      
    },
    {
      path: '/classes5',
      name: 'Classes5',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes5.vue')
      
    },
    {
      path: '/classes6',
      name: 'Classes6',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Classes6.vue')
      
    },
    {
      path: '/test',
      name: 'Test',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/test.vue')
      
    },
    {
      path: '/payment',
      name: 'Payment',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/payment.vue')
      
    },
    {
      path: '/payment2',
      name: 'Payment2',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/payment2.vue')
      
    },
    {
      path: '/trainer',
      name: 'Trainer',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Trainer.vue')
      
    },
    {
      path: '/member',
      name: 'Member',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/Member.vue') 
    },

    //Admin page
    {
      path: '/admin/dashboard',
      name: 'Admin dashboard',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin.vue')
    },
    {
      path: '/admin/tablesUser',
      name: 'Admin tableuser',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/tablesUserAdmin.vue')
    },
    {
      path: '/admin/classes',
      name: 'classesinAdmin',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/classesinAdmin.vue')
    },
    {
      path: '/admin/receipt',
      name: 'Receipt',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/receipt.vue')
    },
    {
      path: '/tablesTrainer',
      name: 'tablesTrainer',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      component: () => import('../views/teblesTrainer.vue')
    },
  ]
})



export default router
