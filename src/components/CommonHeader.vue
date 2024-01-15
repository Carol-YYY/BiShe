<template>
  <div class="header-container">
    <div class="l-content">
      <el-button style="margin-right:20px" icon="el-icon-s-operation" size="medium" @click="handleMenu" />
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img class="user" src="../assets/touxiang.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>HomePage</el-dropdown-item>
          <el-dropdown-item command="cancel">Log Out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
export default {
  data() {
    return {}
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    handleClick(command) {
      if (command === 'cancel') {
        Cookie.remove('token')
        this.$router.push('/login')
      }
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  // eslint-disable-next-line vue/order-in-components
  mounted() {
    console.log(this.tags, 'tags')
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #a2a7ad;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    color: #fff;
    font-size: 18px;
    margin-left: 15px;
  }

  .r-content {
    .user {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 30px;
    }
  }

  .l-content {
    display: flex;
    align-items: center;

    /deep/.el-breadcrumb_item {
      .el-breadcrumb_inner {
        font-weight: normal;
        &.is-link {
          color: #666
        }
      }
      &:last-child{
        .el-breadcrumb_inner {
          color: #fff
        }
      }
    }
  }
}</style>
