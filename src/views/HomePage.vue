<template>
  <el-row>
    <el-col :span="8">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/touxiang.png" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
          </div>
        </div>
        <div class="login-info">
          <p>last log in time: <span>2024-1-10</span></p>
          <p>last log in city: <span>Chongqing</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px;height: 460px;">
        <div class="jie">
          <el-descriptions title="Project Introduction">
            <el-descriptions-item label="content">
              Introduction: Today, many people living in the urban environment are interested in consuming home-grown
              vegetables.
              However, they often lack the time to take care of their vegetables.They would often forget to water their
              vegetables, add fertilisers, etc., which could jeopardize weeks of previous efforts.
              This project aims to design and build a smart vegetable-growing pot for health-conscious office workers
              who wish to grow their own vegetables at home but are often too busy to take care of their vegetables.The
              smart pot is to be equipped with humidity and light sensors, water pump system and LED lights, as well as
              an IoT-capable microcontroller with camera to ensure that the conditions are always right for the
              vegetables at different growth stages.
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }" />
          <div class="detail">
            <p class="price">{{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from '../api'
export default {
  data() {
    return {
      countData: [
        {
          name: 'temperature',
          value: 25 + 'degree',
          icon: 'success',
          color: '#ee9ca7'
        },
        {
          name: 'humidity',
          value: 50,
          icon: 'star-on',
          color: '#FFAFBD'
        },
        {
          name: 'illumination',
          value: 20,
          icon: 's-goods',
          color: '#ffdde1'
        }
      ]
    }
  },
  mounted() {
    getData().then((data) => {
      console.log(data)
    })
  }
}
</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;

  img {
    margin-right: 40px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
}

.userinfo {
  .name {
    font-size: 40px;
    margin-bottom: 30px;
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #575555;

    span {
      color: #666666;
      margin-left: 20px;
    }
  }
}

.jie {
  .el-descriptions {
    font-size: 16px;
  }

  font-size: 40px;
  font-weight: 500;
}

.num {
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;

  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
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
      font-size: 14px;
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
