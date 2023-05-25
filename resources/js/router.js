import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/employees',
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import('./components/Employee.vue'),
    },
    {
        path: '/employees/:department',
        name: 'employeesWihtDepartment',
        component: () => import('./components/Employee.vue'),
    },
    // 404 page
    {
        path: '*',
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
  });

export default router;
