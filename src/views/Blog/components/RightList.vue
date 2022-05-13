<template>
    <ul class="right-list-container">
        <li v-for="(item, i) in list" :key="i">
            <span :class="{active: item.isSelect}" @click="handleSelect(item)">{{item.name}}</span>
            <span v-if="item.aside" class="aside" :class="{active: item.isSelect}" @click="handleSelect(item)">{{item.aside}}</span>
            <!-- 组件递归 -->
            <RightList :list="item.children" @select="handleSelect"/>
        </li>
    </ul>
  
</template>

<script>
export default {
    name:"RightList",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleSelect(item) {
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
    .right-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;
        cursor: pointer;
        .active {
            color: @warn;
            font-weight: bold;
        }
    }
    .aside {
        font-size: 14px;
        margin-left: 1em;
        color: @gray;
    }
    
}

</style>


