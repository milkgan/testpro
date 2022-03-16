<template>
    <div class="carousel-item-container">carouselitem{{text}}</div>
</template>

<script>
export default {
    name: "Carouselitem",
    props: ["text"]

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
    background-color: @dark;
    width: 100%;
    height: 100%;
    color: #fff;
}

</style>