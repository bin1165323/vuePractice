<template>
  <div>
    <el-form ref="myForm" :rules="rules" @submit.native.prevent :model="form" label-width="80px">
      <el-col :span="6" offset="9">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-col>
      <el-col :span="6" offset="9">
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
      </el-col>
      <el-col :span="6" offset="9">
        <el-form-item>
          <el-button @click="loginFun('myForm')" type="primary">登录</el-button>
        </el-form-item>
      </el-col>
    </el-form>

    <el-dialog :visible.sync="showDialog" title="提示" width="20%">
      {{loginMsg}}
    </el-dialog>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: function () {
    return {
      name: 'test',
      password: 'haha',
      user: null,
      loginMsg: '',
      showDialog: false,
      form: {
        name: 'shibin',
        password: 'haha'
      },
      rules: {
        name: [
          { required: true, message: '用户名不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginFun (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* axios.get('api/user/tes')
          .then(response => {
            // this.content = response.data.bpi
            this.user = response.data
            const n = this.user.name
            const p = this.user.password
            if (n === this.name && p === this.password){
              this.$router.push('/main')
            } else {
              alert('用户不存在')
              return ''
            }
          }) */
          axios
            .post('api/user/judgeUser', {
              name: this.form.name,
              password: this.form.password
            })
            .then(response => {
              const r = response.data
              console.log(r)
              if (r.code === '200') {
                this.$router.push('/main')
              } else {
                this.loginMsg = '用户不存在'
                this.showDialog = true
                return ''
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          this.loginMsg = '提交出错'
          this.showDialog = true
        }
      })
    }
  }
}
</script>
