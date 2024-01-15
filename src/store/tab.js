export default {
  state: {
    isCollapse: false, // 控制菜单展开还是收起
    // 面包屑
    tabsList: [
      {
        path: '/homePage',
        name: 'HomePage',
        label: 'HomePage',
        icon: 's-home',
        url: 'HomePage/HomePage'
      }
    ]
  },
  mutations: {
    // 修改菜单展开收起方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      if (val.name !== 'HomePage') {
        const index = state.tabsList.findIndex(item => item.name === val.name)
        if (index === -1) {
          state.tabsList.push(val)
        }
      }
    }
  }
}
