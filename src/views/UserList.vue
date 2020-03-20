<template>
  <div>
    用户列表
    <ul>
      <li v-for="item in userList">
        名字： {{item.name}}
        密码： {{item.pwd}}
      </li>
    </ul>
  </div>
</template>

<script>
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
    const userList = [
      {
        'name': 'one',
        'pwd': 'onep'
      }
    ]
    this.userList = userList
  }
}
</script>
