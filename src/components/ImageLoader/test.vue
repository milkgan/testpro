<template>
    <div class="test-container">
        <ImageLoader 
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @load="handleLoaded"
        />
    </div>
    
</template>

<script>
import ImageLoader from '@/components/ImageLoader';
export default {
    components: {
        ImageLoader
    },
    data() {
        return {

        }
    },
    methods: {
        handleLoaded() {
            console.log('图片加载完成')
        }
    }



  
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.test-container {
    width: 600px;
    height: 400px;
    border: 1px solid red;
    .self-center();
}

</style>