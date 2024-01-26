<template>
  <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
    <h3 class="login_title">System Login</h3>
    <el-form-item label="username" prop="username">
      <el-input v-model="form.username" placeholder="please input username" />
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input v-model="form.password" type="password" placeholder="please input password" />
    </el-form-item>
    <el-form-item>
      <el-button style="margin-left:105px;margin-top: 10px;" type="primary" @click="submit">Login</el-button>
      <el-button class="reg" style="margin-left: 20px;" @click="register">go register</el-button>
    <!-- <el-button class="reg" style="margin-left: 20px;" @click="register">go register</el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
// import Mock from 'mockjs'
// const axios = require('axios')
// import axios from 'axios'

import Cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: 'Please input username' }
        ],
        password: [
          { required: true, trigger: 'blur', message: 'Please input password' }
        ]
      }
    }
  },
  methods: {
    // 登录
    submit() {
      // token信息
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            if (data.code === 20000) {
              Cookie.set('token', data.data.token)
              this.$router.push('/HomePage')
            } else {
              this.$message.error(data.data.message)
            }
          })
        }
      })

      if (this.form.username === '') {
        this.$message.error('username cannot be empty ')
      } else if (this.form.password === '') {
        this.$message.error('password cannot be empty')
      } else {
        this.axios.get('/login', {
          params: {
            name: this.form.username,
            password: this.form.password
          }
        }).then(res => {
          if (res.data.status === 200) {
            this.$router.push({
              path: '/HomePage',
              query: {
                name: this.form.username
              }
            })
          } else {
            this.$alert('username or password error', 'login fail', {
              confirmButtonText: 'sure',
              callback: action => {
                this.form.username = ''
                this.form.password = ''
              }
            })
          }
        }).catch(err => {
          console.log('login fail' + err)
        })
      }
    },
    register() {
      console.log(this.$router)
      this.$router.push('/register')
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;

    // box-sizing: border-box;
    .login_title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458
    }

    .el-input {
        margin-left: 20px;
        width: 190px;
    }
}
</style>
