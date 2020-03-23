<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu default-openeds="['1']">
          <el-submenu index = '1'>
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <router-link to="/userlist"><el-menu-item>用户列表</el-menu-item></router-link>
            <router-link to="/tablelist"><el-menu-item>表格</el-menu-item></router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          头部
        </el-header>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>底部</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .el-header,.el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
 .el-footer{
   bottom: 0px
 }

  .el-aside {
    color: #333;
  }
</style>

<script>
export default {
  name: 'Main',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
