import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
