import Vue from 'vue'
import Router from 'vue-router'
import CameraControl from '../views/CameraControl.vue'
import ControlCenter from '../views/ControlCenter.vue'
import DataCenter from '../views/DataCenter.vue'
import HomePage from '../views/HomePage.vue'
import RemoteControl from '../views/RemoteControl.vue'
import ShowingIcon from '../views/ShowingIcon.vue'
import ShowingList from '../views/ShowingList.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/homePage',
    children: [
      { path: 'homePage', component: HomePage },
      { path: 'controlCenter', component: ControlCenter },
      { path: 'dataCenter', component: DataCenter },
      { path: 'cameraControl', component: CameraControl },
      { path: 'remoteControl', component: RemoteControl },
      { path: 'showingIcon', component: ShowingIcon },
      { path: 'showingList', component: ShowingList }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
