<template>
  <Pager @pageChange="handlePageChange" :current="current" :total="300"/>
  
</template>

<script>
import Pager from './'
export default {
  components: {
    Pager
  },
  data() {
    return {
      current: 1,//当前页码数
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    }
  }
  
}
</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
a {
  color: @words;
}

</style>