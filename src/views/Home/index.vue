<template>
    <div class="home-container" ref="container">
        <!-- 轮播图容器 -->
        <ul class="carousel-container" :style="{marginTop}">
            <li v-for="item in banners" :key="item.id"> 
                <Carouselitem :text="item.id" />
            </li>
            <!-- <li><Carouselitem :text="1"/></li>
            <li><Carouselitem :text="2"/></li>
            <li><Carouselitem :text="3"/></li> -->
        </ul>
        <!-- 向上箭头标志 -->
        <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
            <Icon type="arrowUp"/>
        </div>
        <!-- 向下箭头标志 -->
        <div v-show="index < banners.length-1" @click="switchTo(index + 1)" class="icon icon-down">
            <Icon type="arrowDown"/>
        </div>
        <!-- 小圆点标志 -->
        <ul class="indicator">
            <li :class="{active: i === index}" @click="switchTo(i)" v-for="(item, i) in banners" :key="item.id"></li>
        </ul>
    </div>
</template>

<script>
import { getBanners } from '@/api/banner';
import Carouselitem from '@/views/Home/Carouselitem';
import Icon from '@/components/Icon';

export default {
    name: "Home",
    components: {
        Carouselitem,
        Icon
    },
    data() {
        return {
            banners: [],
            index: 1, // 当前显示第几张轮播图
            containerHeight: 0, //整个容器的高度
        }
    },
    async created() {
        this.banners = await getBanners();
    },
    mounted() {
        // 可视区窗口高度
        this.containerHeight = this.$refs.container.clientHeight;
    },
    computed: {
        marginTop() {
            return -this.index * this.containerHeight + 'px';
        }
    },
    methods: {
        // 切换轮播图
        switchTo(index) {
            this.index = index
        }
    },
}
</script>

<style lang="less" scoped>
// @import '~@/utils/showMessage.module.less';
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.home-container {
    height: 100%;
    width: 100%;
    // position:relative;
    // overflow: hidden;
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        height: 100%;
    }
}
.carousel-container {
    
    width: 100%;
    // height: 100%;
    // transition: 500ms;
    li {
        width: 100%;
        height: 100%;
    }
}
.icon {
    .self-center();
    font-size: 30px;
    color: @gray;
    @gap: 25px;
    cursor: pointer;
    // transform: translateX(-50%);
    &.icon-up {
        top: @gap;
        animation: jump-up 2s infinite;
    }
    &.icon-down {
        top: auto;
        bottom: @gap;
        animation: jump-down 2s infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
        0% {
            // transform: translate(-50%, @jump);
            transform: translateY(@jump);
        }
        50% {
            // transform: translate(-50%, -@jump);
            transform: translateY(-@jump);
        }
        100% {
            // transform: translate(-50%, @jump);
            transform: translateY(@jump);
        }
    }
    @keyframes jump-down {
        0% {
            // transform: translate(-50%, -@jump);
            transform: translateY(-@jump);
        }
        50% {
            // transform: translate(-50%, -@jump);
            transform: translateY(@jump);
        }
        100% {
            // transform: translate(-50%, -@jump);
            transform: translateY(-@jump);
        }
    }
}
.indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: @words;
        cursor: pointer;
        margin-bottom: 10px;
        border: 1px solid #fff;
        box-sizing: border-box;
        &.active {
            background-color: #fff;
        }
    }
}

</style>