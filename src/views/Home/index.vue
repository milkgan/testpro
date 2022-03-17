<template>
    <div class="home-container" ref="container">
        <ul class="carousel-container" :style="{ marginTop }">
            <li v-for="item in banners" :key="item.id">{{item.id}}{{item.title}}</li>
        </ul>
        <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
            <Icon type="arrowUp" />
        </div>
        <div v-show="index < banners.length - 1" @click="switchTo(index + 1)" class="icon icon-down">
            <Icon type="arrowDown" />
        </div>
        <ul class="indicator">
            <li 
            @click="switchTo(i)" 
            :class="{ active: index == i }"
            v-for="(item, i) in banners" :key="item.id"></li>
        </ul>
    </div>
  
</template>

<script>
import { getBanners } from '@/api/banner'
import Icon from '@/components/Icon'
export default {
    name: 'Home',
    components: {
        Icon
    },
    data() {
        return {
            banners: [],
            index: 0, //当前轮播图
            containerHeight: 0, //当前容器高度
        }
    },
    async created() {
        this.banners = await getBanners();
    },
    mounted() {
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
            this.index = index;
            console.log(index)
        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.home-container {
    border: 1px solid red;
    // width: 100%;
    width: 600px;
    height: 100%;
    height: 400px;
    position: relative;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .carousel-container {
        width: 100%;
        border: 1px solid #000;
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
    }
    .icon-up {
        top: 26px;
    }
    .icon-down {
        bottom: 26px;
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
                background-color: red;
            }
        }
    }
}

</style>