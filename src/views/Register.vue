<template>
  <div class="bg">
    <div id="register">
      <el-form ref="form" :model="form" label-width="20%">
        <el-form-item label="username:">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password:">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
      </el-form>
      <el-button type="primary" round class="btn" @click="register">register</el-button>
      <el-button type="primary" round class="btn2" @click="back">back</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      isnull: false
    }
  },

  methods: {
    register() {
      if (this.form.username === '') {
        this.$message.error('username cannot be empty')
      } else if (this.form.password === '') {
        this.$message.error('password cannot be empty')
      } else {
        this.$message.success('register success')
        axios.post('register', this.form)
          .then(res => {
          // console.log(res.data.message);
            if (res.data.status === 200) {
              this.$alert('return to login', 'register success', {
                confirmButtonText: 'sure',
                callback: action => {
                  this.$router.push('/login')
                }
              })
            } else if (res.data.status === 202) {
              this.$alert('username is exist', 'register error', {
                confirmButtonText: 'sure',
                callback: action => {
                  this.form.username = ''
                  this.form.password = ''
                }
              })
            } else {
              console.log(res.message)
            }
          }).catch(err => {
            console.log('operation error' + err)
          })
      }
    },
    back() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    background-size: 100% 100%;
}
 #register {
    height: 250px;
    width: 350px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.25);
    background: #ffffff;
    opacity: 0.85;
    position: absolute;
    top: 20%;
    left: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;/*横向*/
    padding: 30px;
  }
  #register h2 {
    padding-bottom: 30px;
  }
  .btn {
    width: 30%;
    margin: auto;
  }
  .btn2 {
    width: 30%;
    margin: auto;
  }
</style>
