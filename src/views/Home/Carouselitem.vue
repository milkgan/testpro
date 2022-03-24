<template>
    <div class="carousel-item-container" ref="container" 
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image">
            <ImageLoader
            :style="imgPosition" 
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
            descWidth: 0,
            containerSize: null,// 外层容器尺寸
            innerSize: null,// 里层图片尺寸
            mouseX: 0,// 鼠标的横坐标
            mouseY: 0,// 鼠标的纵坐标

        }
    },
    mounted() {
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
        // 当改变窗口视图时，实时获取容器和图片的尺寸
        window.addEventListener("resize", this.setSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.setSize);
    },
    computed: {
        // 获取到鼠标相对于容器的中心坐标
        center() {
            return {
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2
            }
        },
        imgPosition() {
            if(!this.containerSize || !this.innerSize) {
                return;
            }
            // 多出来的宽度和高度
            const extraWidth = this.innerSize.width - this.containerSize.width;
            const extraHeight = this.innerSize.height - this.containerSize.height;
            // 图片偏移量
            const left = (-extraWidth / this.containerSize.width) * this.mouseX;
            const top = (-extraHeight / this.containerSize.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
                transition: '0.3s'
            }
        }
    },
    methods: {
        // 显示文字
        showWords() {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            // 强制让浏览器渲染一次
            this.$refs.title.clientWidth;
            this.$refs.title.style.transition = '1s';
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
             // 强制让浏览器渲染一次
            this.$refs.desc.clientWidth;
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.style.width = this.descWidth + 'px';
        },
        // 设置尺寸
        setSize() {
            // 容器尺寸
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight,
            }
            // 图片尺寸
            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height: this.$refs.image.clientHeight,
            }  
        },
        // 获取鼠标在相对于容器中的位置
        handleMouseMove(e) {
            let containerPoint = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - containerPoint.x;
            this.mouseY = e.clientY - containerPoint.y;
        },
        // 鼠标离开时恢复中心点位置
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }  
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.carousel-item-container {
    width: 100%;
    height: 100%;
    color: #fff;
    position: relative;
    overflow: hidden;
    .carousel-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 110%;
        height: 110%;
    }
    .title,
    .desc {
        position: absolute;
        top: 50%;
        left: 30px;
        opacity: 0;
        color: #fff;
        font-size: 20px;
        white-space: nowrap;
        overflow: hidden;
        letter-spacing: 3px;
        text-shadow: 1px 0 0 rgba(255, 136, 0, 0.2), -1px 0 0 rgba(255, 136, 0, 0.2),
        0 1px 0 rgba(255, 136, 0, 0.2), 0 -1px 0 rgba(255, 136, 0, 0.2);
    }
    .desc {
        transform: translateY(60px);
    }
    
}

</style>