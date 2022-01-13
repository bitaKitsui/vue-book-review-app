import * as VueRouter from 'vue-router';
import { RouteRecordRaw } from "vue-router";
import BookMainPage from './components/pages/BookMainPage.vue'
import BookDetailPage from './components/pages/BookDetailPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: BookMainPage,
    },
    {
        path: '/detail/:id',
        component: BookDetailPage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router