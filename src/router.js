import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import User from './pages/User.vue'

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
      {
			path: "/user",
			name: "user",
			component: User,
		},

   ]
});

export { router };

