<template>
  <div>
    <label for="name">姓名</label>
    <input id="name" type = 'text' v-model="name"/>
    <br>
    <label for="pwd">密码</label>
    <input id="pwd" type="password" v-model="password"/>
    <br>
    <button @click="loginFun">登录</button>
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
      user: null
    }
  },
  methods: {
    loginFun: function () {
      if (this.name === '' || this.password === '') {
        alert('不能为空')
        return ''
      } else {
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
            name: this.name,
            password: this.password
          })
          .then(response => {
            const r = response.data
            console.log(r)
            if (r.code === '200') {
              this.$router.push('/main')
            } else {
              alert('用户不存在')
              return ''
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }

  }
}
</script>
