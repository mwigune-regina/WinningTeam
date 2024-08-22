import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
// import JobView from '@/views/JobView.vue';
// import AddJobView from '@/views/AddJobView.vue';
// import EditJobView from '@/views/EditJobView.vue';
import SignUpView from '@/views/SignUpView.vue';
import LoginView from '@/views/LoginView.vue';
import InvestView from '@/views/InvestView.vue';
import EducationSourcesView from '@/views/EducationSourcesView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    // {
    //   path: '/jobs/:id',
    //   name: 'job',
    //   component: JobView,
    // },
    // {
    //   path: '/jobs/add',
    //   name: 'add-job',
    //   component: AddJobView,
    // },
    // {
    //   path: '/jobs/edit/:id',
    //   name: 'edit-job',
    //   component: EditJobView,
    // },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  {
    path:'/invest',
    name:'/invest',
    component: InvestView,
  },
  {
    path:'/education',
    name:'/education',
    component: EducationSourcesView,
  },
],
});

export default router;
