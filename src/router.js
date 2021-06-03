import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/Home',
        },
        {
            path: '/Home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/Kalendar',
            component: () => import('./views/Calendar.vue'),
        },
        {
            path: '/Ziele',
            component: () => import('./views/Ziele.vue'),
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
