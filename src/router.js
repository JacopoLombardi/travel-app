import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Travel_detail from './pages/Travel_detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/travel-detail',
      name: 'Travel_detail',
      component: Travel_detail,
    },
  ],

  scrollBehavior() {
    // Torna in cima alla pagina ogni volta che si cambia pagina
    return { top: 0 };
  }
  
});

export { router };
