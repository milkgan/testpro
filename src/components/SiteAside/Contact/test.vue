<template>
  <div class="test-container">
      <Contact />
  </div>
</template>
<script>
import Contact from '@/components/SiteAside/Contact';
import "@/styles/global.less";
export default {
    components: {
        Contact
    },
    data() {
    return {};
    },
};
</script>

<style>
.test-container {
    width: 400px;
    height: 400px;
    border: 2px solid red;
    background-color: black;
    padding-top: 200px;
    margin: 0 auto;
}
</style>