import * as VueRouter from 'vue-router';
import { RouteRecordRaw } from "vue-router";
import BookMainPage from './components/pages/BookMainPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: BookMainPage,
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router