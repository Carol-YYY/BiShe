<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#2C5364"
    text-color="#FBD3E9"
    active-text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <h4>{{ isCollapse ? '' : 'Smart Urban Farming' }}</h4>
    <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="clickMenu(item)">
      <i :class="`el-icon-${item.icon}`" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`" />
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>

    </el-submenu></el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    //width: 200px;
    min-height: 400px;
  }
  .el-menu{
    height: 100vh;
    h4{
        color:#fff;
        text-align: center;
        line-height: 50px;
        font-size:16px;
        font-weight: 800;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      menuData: [
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
        // {
        //   path: '/others',
        //   name: 'Others',
        //   lable: 'Others',
        //   icon: 'others'
        // }
      ]
    }
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
     border-right:none
}
</style>
