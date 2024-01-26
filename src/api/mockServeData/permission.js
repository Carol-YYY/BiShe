import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    // username === 'admin' && password === 'admin'
    if (username !== ' ' && password !== ' ') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/homePage',
              name: 'HomePage',
              label: 'HomePage',
              icon: 's-home',
              url: 'HomePage/HomePage'
            },
            {
              path: '/dataCenter',
              name: 'DataCenter',
              label: 'DataCenter',
              icon: 's-data',
              children: [
                {
                  path: '/showingList',
                  name: 'ShowingList',
                  label: 'ShowingList',
                  icon: 'document-copy',
                  url: 'DataCenter/showingList'
                },
                {
                  path: '/showingIcon',
                  name: 'ShowingIcon',
                  label: 'ShowingIcon',
                  icon: 'magic-stick',
                  url: 'DataCenter/showingIcon'
                }
              ]
            },
            {
              path: '/controlCenter',
              name: 'ControlCenter',
              label: 'ControlCenter',
              icon: 'bangzhu',
              children: [
                {
                  path: '/remoteControl',
                  name: 'RemoteControl',
                  label: 'RemoteControl',
                  icon: 'view',
                  url: 'ControlCenter/RemoteControl'
                },
                {
                  path: '/cameraControl',
                  name: 'CameraControl',
                  label: 'CameraControl',
                  icon: 'camera-solid',
                  url: 'ControlCenter/CameraControl'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: 'successfully get!'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: 'password error!'
        }
      }
    }
  }
}
