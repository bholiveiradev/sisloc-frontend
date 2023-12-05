import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import MainLayoutComponent from '@/components/MainLayoutComponent.vue';

import Home from '@/pages/Home.vue';
import Product from '@/pages/Product.vue';
import Cart from '@/pages/Cart.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/pages/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayoutComponent,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    },
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'produto/:id',
        component: Product,
      },
      {
        path: 'carrinho',
        component: Cart,
      },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
