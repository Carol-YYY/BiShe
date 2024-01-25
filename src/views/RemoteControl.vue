<template>
  <div class="num">
    <el-card v-for="item in countData1" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="bu-guang" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail" prop="kaiguan1">
        <p class="desc">{{ item.name }}</p>
        <el-switch v-model="value1" class="button" active-color="yes" inactive-color="no" />
      </div>
    </el-card>
    <el-card v-for="item in countData2" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="shui-beng" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail" prop="kaiguan2">
        <p class="desc">{{ item.name }}</p>
        <el-switch v-model="value2" class="button" active-color="yes" inactive-color="no" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 控制开关
      value1: false,
      value2: false,
      countData1: [
        {
          name: 'Supplementary light',
          // value: 25 + 'degree',
          icon: 'bu-guang',
          color: '#2193b0' // #ee9ca7
        }
      ],
      countData2: [
        {
          name: 'Water pump',
          // value: 50,
          icon: 'shui-beng',
          color: '#6dd5ed'
        }
      ]
    }
  }
}
</script>

<style>
.num {
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;

  .icon {
    width: 300px;
    height: 300px;
    font-size: 200px;
    text-align: center;
    line-height: 300px;
    color: #fff
  }

  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }

    .desc {
      font-size: 40px;
      color: #999;
      text-align: center;
    }

    .button {
      margin-top: 50px;
      margin-left: 60px;
    }
  }

  .el-card {
    width: 46%;
    margin-bottom: 30px;
  }
}
</style>
