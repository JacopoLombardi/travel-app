import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Travel_detail from './pages/Travel_detail.vue';
import Travel_type from './pages/Travel_type.vue';
import University_detail from './pages/University_detail.vue';
import Partner_detail from './pages/Partner_detail.vue';

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
    {
      path: '/travel-type',
      name: 'Travel_type',
      component: Travel_type,
    },
    {
      path: '/university-detail',
      name: 'University_detail',
      component: University_detail,
    },
    {
      path: '/partner-detail',
      name: 'Partner_detail',
      component: Partner_detail,
    }
  ],

  // Torna in cima alla pagina ogni volta che si cambia pagina
  scrollBehavior() {
    return { top: 0 };
  }
  
});

export { router };


