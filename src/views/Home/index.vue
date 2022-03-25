<template>
    <div class="home-container" ref="container" @wheel="handleWheel" v-loading="isLoading">
        <ul class="carousel-container" :style="{ marginTop }" @transitionend="handleTransitionEnd">
            <li v-for="item in data" :key="item.id">
                <Carouselitem :carousel="item"/>
            </li>
        </ul>
        <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
            <Icon type="arrowUp" />
        </div>
        <div v-show="index < data.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
            <Icon type="arrowDown" />
        </div>
        <ul class="indicator">
            <li 
            @click="switchTo(i)" 
            :class="{ active: index == i }"
            v-for="(item, i) in data" :key="item.id"></li>
        </ul>
    </div>
  
</template>

<script>
import { getBanners } from '@/api/banner'
import Icon from '@/components/Icon'
import Carouselitem from '@/views/Home/Carouselitem.vue'
import fetchData from '@/mixins/fetchData'
export default {
    name: 'Home',
    mixins: [fetchData([])], // 混入获取远程数据banners，初始值需为一个空数组，否则null会报错
    components: {
        Icon,
        Carouselitem
    },
    data() {
        return {
            // banners: [],
            index: 0, //当前轮播图
            containerHeight: 0, //当前容器高度
            switching: false, //是否正在切换中
            // isLoading: true, //是否显示加载图标
        }
    },
    mounted() {
        // (触发一次更新)
        this.containerHeight = this.$refs.container.clientHeight;
    },
    computed: {
        marginTop() {
            return -this.index * this.containerHeight + 'px';
        }
    },
    methods: {
        // 获取远程banners数据
        async fetchData() {
            this.data = await getBanners();
        },
        // 切换轮播图
        switchTo(index) {
            this.index = index;
        },
        // 触发滚轮
        handleWheel(e) {
            if(this.switching) {
                return;
            }
            if(e.deltaY < 0 && this.index > 0) {
                // 向上滑动
                this.switching = true;
                this.index--;
            }else if(e.deltaY > 0 && this.index < this.banners.length - 1) {
                // 向下滑动
                this.switching = true;
                this.index++;
            }
        },
        handleTransitionEnd() {
            this.switching = false;
        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        transition: 2s;//切换轮播图的过渡时间
    }
    .carousel-container {
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 100%;
        }
    }
    .icon {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
    }
    .icon-up {
        top: 26px;
        animation: jump-up 2s infinite;
    }
    .icon-down {
        bottom: 26px;
        animation: jump-down 2s infinite;
    }
    // 箭头动画
    @jump: 6px;
    @keyframes jump-up {
        0% {
            transform: translateY(@jump)
        }
        50% {
            transform: translateY(-@jump)
        }
        100% {
            transform: translateY(@jump)
        }
    }
    @keyframes jump-down {
        0% {
            transform: translateY(-@jump)
        }
        50% {
            transform: translateY(@jump)
        }
        100% {
            transform: translateY(-@jump)
        }
    }
    .indicator {
        .self-center();
        right: 26px;
        left: auto;
        li {
            width: 8px;
            height: 8px;
            border: 1px solid #fff;
            border-radius: 5px;
            margin-top: 8px;
            background-color: #000;
            &.active {
                // background-color: red;
                background-color: @gray;
            }
        }
    }
}

</style>