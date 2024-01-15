import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permission from './mockServeData/permission'

// 定义Mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)
