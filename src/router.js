import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Travel_detail from './pages/Travel_detail.vue'

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
      {
			path: "/Travel_detail",
			name: "Travel_detail",
			component: Travel_detail,
		},

   ]
});

export { router };

