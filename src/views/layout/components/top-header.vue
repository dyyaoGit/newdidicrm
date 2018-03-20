<template>
  <div class="top-header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item,index) in matchList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        matchList: []
      }
    },
    methods: {
      getList() {
        let matchList = this.$route.matched.filter(item => item.name)
        let first = matchList[0]
        if(first&&first.name!='主页'){
          matchList = [{path: '/',name: '主页'}].concat(matchList);
        }
        this.matchList = matchList;
      }
    },
    computed: {

    },
    mounted() {
      this.getList();
    }
  }
</script>


<style scoped>
  .top-header {
    position: fixed;
    top: 0;
    left: 230px;
    right: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #f1f1f1;
  }

</style>
