<template>
  <div class="header-container">
    <div class="l-content">
      <el-button icon="el-icon-s-operation" size="medium" @click="handleMenu" />
      <span class="text">Home</span>
    </div>

    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/touxiang.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>HomePage</el-dropdown-item>
          <el-dropdown-item>Log Out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #a2a7ad;
  height:60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text{
    color:#fff;
    font-size: 18px;
    margin-left:15px;
  }
  .r-content{
    .user{
        width:50px;
        height: 50px;
        border-radius:50%;
        margin-right:30px;
    }
  }
}
</style>
