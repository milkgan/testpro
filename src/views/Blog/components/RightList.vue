<template>
    <ul class="right-list-container">
        <li v-for="(item, index) in list" :key="index" >
            <span @click="handleClick(item)" :class="{active: item.isSelect}">{{ item.name }}</span>
            <!-- 显示当前组件，组件递归 -->
            <RightList @select="handleClick" :list="item.children"/>
        </li>
    </ul>   
  
</template>

<script>
export default {
    name: "RightList",
    props: {
        list: {
           type: Array,
           default: () => [] 
        }
    },
    methods: {
        handleClick(item) {
            this.$emit('select', item)
        }
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
    list-style: none;
    padding: 0;
    margin: 0;
    .right-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 36px;
        line-height: 36px;
        cursor: pointer;
        .active {
            color: @warn;
            font-weight: bold;
        }
        }
}
</style>