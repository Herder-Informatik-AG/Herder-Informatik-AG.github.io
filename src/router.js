import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/Informatik-AG/Home',
        },
        {
            path: '/Informatik-AG/Home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/Kalendar',
            redirect: '/Informatik-AG/Kalendar',
        },
        {
            path: '/Informatik-AG/Kalendar',
            component: () => import('./views/Calendar.vue'),
        },
        {
            path: '/Ziele',
            redirect: '/Informatik-AG/Ziele',
        },
        {
            path: '/Informatik-AG/Ziele',
            component: () => import('./views/Ziele.vue'),
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
