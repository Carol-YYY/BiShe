<template>
  <div class="num">
    <el-card v-for="item in countData1" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="shexiangtou" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail">
        <p class="desc">{{ item.name }}</p>
        <el-switch v-model="value1" class="button" active-color="#13ce66" inactive-color="#ff4949" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      countData1: [
        {
          name: 'Camera',
          // value: 25 + 'degree',
          icon: 'bu-guang',
          color: '#bdc3c7'
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

