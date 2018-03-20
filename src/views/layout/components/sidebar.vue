<template>
    <div class="side-bar">
      <el-menu  background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            新闻列表
          </template>
          <el-menu-item-group>
            <el-menu-item index="/news">列表管理</el-menu-item>
            <el-menu-item index="/news/add">添加新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>


<style scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 230px;
  background: #545c64;
  padding-top: 30px;
}

</style>
<style>
  .side-bar .el-menu {
    border-right: none;
  }
</style>
