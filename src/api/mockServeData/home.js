// mock首页数据
// import Mock from 'mockjs'

export default {
  getStatisticalData: () => {
    return {
      code: 20000,
      data: {
        // 折线图:
        // oderData: [
        //     date: ['20231228', '20231229', '20231230', '20231231', '20240101'],
        //     data: List
        // ],
        // 柱状图
        userData: [
          {
            data: 'temperature',
            active: 30
          },
          {
            data: 'humidity',
            active: 70
          },
          {
            data: 'illuminate',
            active: 50
          }
        ]
      }
    }
  }
}
