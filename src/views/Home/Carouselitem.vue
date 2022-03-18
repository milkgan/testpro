<template>
    <div class="carousel-item-container">
        <div class="carousel-img">
            <ImageLoader 
            @load="this.showWords"
            :src="carousel.bigImg" 
            :placeholder="carousel.midImg"/>
        </div>
        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div>
        
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    name: "Carouselitem",
    props: ["carousel"],
    components: {
        ImageLoader
    },
    data() {
        return {
            titleWidth: 0,
            descWidth: 0
        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
    },
    methods: {
        // 显示文字
        showWords() {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = '1s';
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.style.width = this.descWidth + 'px';


        },
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.carousel-item-container {
    background-color: @dark;
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    .carousel-img {
        width: 100%;
        height: 100%;
    }
    .title,
    .desc {
        position: absolute;
        top: 50%;
        opacity: 0;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
    }
    .desc {
        transform: translateY(20px);
    }
    
}

</style>