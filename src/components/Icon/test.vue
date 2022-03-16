<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t"></Icon>
      {{ t }}
    </div>
  </div>
  
</template>

<script>
import Icon, { types } from './'


export default {
  name: 'App',
  components:{
      Icon
  },
  data() {
    return {
      types
    }
  }
  
 
}
</script>

<style lang="less">
.test-container {
  display: flex;
  width: 600px;
  justify-content: center;
  margin: 30px 300px;
  flex-wrap: wrap;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
.icon-container {
  display: block;
}
</style>
