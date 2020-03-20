<template>
  <div>
    <ul>
      <li>
        <router-link to="/userlist">用户列表</router-link>
      </li>
      <li>
        <router-link to="/tablelist">表格</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
