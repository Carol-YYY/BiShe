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
  }
]

const router = new Router({
  routes
}
)

export default router

// /* Layout */
// import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/DataCenter/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
// export const constantRoutes = [
//   {
//     path: '/login',
//     component: () => import('@/views/login/index'),
//     hidden: true
//   },

//   {
//     path: '/404',
//     component: () => import('@/views/404'),
//     hidden: true
//   },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/homePage',
//     children: [{
//       path: 'homePage',
//       name: 'HomePage',
//       component: () => import('@/views/homePage/index'),
//       meta: { title: 'HomePage', icon: 'homePage' }
//     }]
//   },

//   {
//     path: '/DataCenter',
//     component: Layout,
//     redirect: '/DataCenter/ShowingList',
//     name: 'DataCenter',
//     meta: { title: 'DataCenter', icon: 'el-icon-s-help' },
//     children: [
//       {
//         path: 'showingList',
//         name: 'ShowingList',
//         component: () => import('@/views/showingList/index'),
//         meta: { title: 'ShowingList', icon: 'showingList' }
//       },
//       {
//         path: 'ShowingIcon',
//         name: 'ShowingIcon',
//         component: () => import('@/views/showingIcon/index'),
//         meta: { title: 'ShowingIcon', icon: 'showingIcon' }
//       },
//       {
//         path: 'HistoryData',
//         name: 'HistoryData',
//         component: () => import('@/views/historyData/index'),
//         meta: { title: 'HistoryData', icon: 'showingIcon' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: 'Form', icon: 'form' }
//       }
//     ]
//   },

//   {
//     path: '/controlCenter',
//     component: Layout,
//     redirect: '/controlCenter/menu1',
//     name: 'ControlCenter',
//     meta: {
//       title: 'ControlCenter',
//       icon: 'controlCenter'
//     },
//     children: [
//       {
//         path: 'remoteControl',
//         component: () => import('@/views/controlCenter/remoteControl/index'), // Parent router-view
//         name: 'RemoteControl',
//         meta: { title: 'RemoteControl' },
//         children: [
//           {
//             path: 'menu1-1',
//             component: () => import('@/views/controlCenter/remoteControl/menu1-1'),
//             name: 'Menu1-1',
//             meta: { title: 'Menu1-1' }
//           },
//           {
//             path: 'menu1-2',
//             component: () => import('@/views/controlCenter/remoteControl/menu1-2'),
//             name: 'Menu1-2',
//             meta: { title: 'Menu1-2' },
//             children: [
//               {
//                 path: 'menu1-2-1',
//                 component: () => import('@/views/controlCenter/remoteControl/menu1-2/menu1-2-1'),
//                 name: 'Menu1-2-1',
//                 meta: { title: 'Menu1-2-1' }
//               },
//               {
//                 path: 'menu1-2-2',
//                 component: () => import('@/views/controlCenter/remoteControl/menu1-2/menu1-2-2'),
//                 name: 'Menu1-2-2',
//                 meta: { title: 'Menu1-2-2' }
//               }
//             ]
//           },
//           {
//             path: 'menu1-3',
//             component: () => import('@/views/controlCenter/remoteControl/menu1-3'),
//             name: 'Menu1-3',
//             meta: { title: 'Menu1-3' }
//           }
//         ]
//       },
//       {
//         path: 'cameraControl',
//         component: () => import('@/views/controlCenter/cameraControl/index'),
//         name: 'CameraControl',
//         meta: { title: 'CameraControl' }
//       }
//     ]
//   },

//   {
//     path: 'external-link',
//     component: Layout,
//     children: [
//       {
//         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
//         meta: { title: 'External Link', icon: 'link' }
//       }
//     ]
//   },

//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

// const createRouter = () => new Router({
//   // mode: 'history', // require service support
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRoutes
// })

// const router = createRouter()

// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

// export default router
