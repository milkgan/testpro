<template>
  <div class="image-loader-container">
    <img
      v-if="!everythinfDone"
      class="placeholder"
      :src="placeholder"
      alt="占位图"
    />
    <img
      @load="handleLoad"
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      alt="原图"
    />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //图片是否加载完成
      everythinfDone: false,//图片加载和过渡是否都已完成
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
          this.everythinfDone = true;
          this.$emit('load');
      },(this.duration))
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>