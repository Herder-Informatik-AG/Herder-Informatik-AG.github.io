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
            path: '/Konzept',
            component: () => import('./views/Konzept.vue'),
        },
        {
            path: '/Info',
            component: () => import('./views/Info.vue'),
        },
        {
            path: '/HTMLvorschau',
            component: () => import('./views/HTMLvorschau.vue'),
        },
        {
            path: '/Termine/:date',
            component: () => import('./views/Termine.vue'),
        },
        {
            path: '/Projekte/:name',
            component: () => import('./views/Projekte.vue'),
        },
        {
            path: '/Umfrage/:name',
            component: () => import('./views/Umfrage.vue'),
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
