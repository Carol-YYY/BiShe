import http from '../utils/request'

export const getData = () => {
  // 返回一个promise对象
  return http.get('/home/getData')
}

export const getMenu = (data) => {
  return http.post('/permission/getMenu', data)
}

export const register = (data) => {
  return http.post('/register', data)
}
