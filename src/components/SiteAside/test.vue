<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>
<script>
import SiteAside from '@/components/SiteAside';
import '@/styles/global.less';
export default {
    components: {
        SiteAside
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
.test-container {
    width: 250px;
    height: 600px;
    border: 2px solid;
    margin: 0 auto;
}
</style>