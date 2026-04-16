import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path:'/',component:()=>import('@/components/Hello.vue'),name:'hello'},
    {path:'/count',component:()=>import('@/components/Count.vue'),name:'count'}
  ],
})

export default router
