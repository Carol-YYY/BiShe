<template>
  <div class="num">
    <el-card v-for="item in countData1 " :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="temp" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail">
        <p class="price">{{ item.value }}</p>
        <p class="desc">{{ item.name }}</p>
      </div>
    </el-card>

    <el-card v-for="item in countData2 " :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="humi" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail">
        <p class="price">{{ item.value }}</p>
        <p class="desc">{{ item.name }}</p>
      </div>
    </el-card>

    <el-card v-for="item in countData3 " :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
      <svg-icon class="icon" icon-class="illu" :style="{ background: item.color }" />
      <!-- <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" /> -->
      <div class="detail">
        <p class="price">{{ item.value }}</p>
        <p class="desc">{{ item.name }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countData1: [
        {
          name: 'temperature',
          value: 25 + 'degree',
          icon: 'temp',
          color: '#ee9ca7' // #ee9ca7
        }
      ],
      countData2: [
        {
          name: 'humidity',
          value: 50,
          icon: 'humi',
          color: '#FFAFBD'
        }
      ],
      countData3: [
        {
          name: 'illumination',
          value: 20,
          icon: 'illu',
          color: '#ffdde1'
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
  }

  .el-card {
    width: 46%;
    margin-bottom: 30px;
  }
}
</style>
