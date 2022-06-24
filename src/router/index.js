import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/pages/'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import ('../views/Profile.vue')
        },
        {
            path: '/scrapbook',
            name: 'scrapbook',
            component: () =>
                import ('../views/ScrapBook.vue')
        },
        {
            path: '/friends',
            name: 'friends',
            component: () =>
                import ('../views/Friends.vue')
        },
        {
            path: '/groups',
            name: 'groups',
            component: () =>
                import ('../views/Groups.vue')
        }
    ]
})

export default router