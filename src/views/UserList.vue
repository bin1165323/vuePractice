<template>
  <div>
    用户列表
    <el-table :data="userList" stripe border>
      <el-table-column prop="name" label="姓名" fixed></el-table-column>
      <el-table-column prop="pwd" label="密码"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserList',
  data: function () {
    return {
      userList: [
        {
          'name': 'one',
          'pwd': 'onep'
        },
        {
          'name': 'two',
          'pwd': 'twop'
        }
      ]
    }
  },
  created () {
    axios.get('api/user/getAllUsers')
      .then(response => {
        const userList = response.data
        if (userList !== null && userList !== undefined) {
          this.userList = userList
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
