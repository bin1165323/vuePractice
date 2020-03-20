import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'
import UserList from '../views/UserList'
import TableList from '../views/TableList'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/userlist',
          name: 'UserList',
          component: UserList
        },
        {
          path: '/tablelist',
          name: 'TableList',
          component: TableList
        }
      ]
    }
  ]
})

export default router
