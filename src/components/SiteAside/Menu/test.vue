<template>
  <div class="test-container">
      <Menu />
  </div>
</template>
<script>
import Menu from '@/components/SiteAside/Menu';
import "@/styles/global.less";
export default {
    components: {
        Menu
    },
    data() {
    return {};
    },
};
</script>

<style scoped>
.test-container {
    width: 400px;
    height: 400px;
    border: 2px solid red;
    background-color: black;
    padding-top: 200px;
    margin: 0 auto;
}
</style>