<template>
  <div class="layout">
    <topHeader></topHeader>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import topHeader from './components/top-header'
  import sidebar from './components/sidebar'

  export default {
    name: '',
    components: {
      sidebar,
      topHeader
    },
    data() {
      return {}
    },
    methods: {
      test() {
        console.log(this.$route.matched)
      }
    }
  }
</script>


<style scoped>
.layout {
  padding: 60px 0 0 230px;
}

</style>
