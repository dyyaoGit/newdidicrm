<template>
  <div id="editor">

  </div>
</template>

<script>
  import wangEditor from 'wangeditor'
  export default {
    name: '',
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
        editor: null,
        currentValue: ''
      }
    },
    methods: {
      initE() {
        let that = this;
        this.$nextTick(() => {
          this.editor = new wangEditor("#editor")
          this.editor.create()
          this.editor.customConfig.onchange = function (html,text) {
            // html 即变化之后的内容
          }
          document.getElementById('editor').addEventListener('keyup', function () {
            // 如果未配置 editor.customConfig.onchange，则 editor.change 为 undefined
            console.log(that.editor.txt.html())
            that.$emit('input',that.editor.txt.html())
            that.$emit('change',that.editor.txt.text())
          })
        })
      }
    },
    created() {
      this.initE();
    },
    beforeDestroy() {
      this.editor = null;
    },
    watch: {
      value(val) {
        this.currentValue = val;
        this.editor.txt.html(val)
      }
    }
  }
</script>


<style scoped>


</style>
