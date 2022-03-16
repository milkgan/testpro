<template>
    <div class="pager-container">
        <a @click="handleClick(1)" :class="{disabled : current === 1}">|&lt;&lt;</a>
        <a @click="handleClick(current - 1)" :class="{disabled : current === 1}">&lt;&lt;</a>
        <a @click="handleClick(i)" v-for="i in numbers" :key="i" :class="{active : current === i}">{{ i }}</a>
        <a @click="handleClick(current + 1)" :class="{disabled : current === pageNumber}">&gt;&gt;</a>
        <a @click="handleClick(pageNumber)" :class="{disabled : current === pageNumber}">&gt;&gt;|</a>
    </div>
    
</template>

<script>

export default {
    name: "Pager",
    props: {
      current: {
          type: Number,
          default: 1
      },
      total: {
          type: Number,
          default: 0 
      },
      limit: {
          type: Number,
          default: 10 
      },
      visibleNumber: {
          type: Number,
          default: 10
      },

    },
    data() {
        return {


        }
    },
    computed: {
        // 总页数
        pageNumber() {
            return Math.ceil(this.total/this.limit)
        },
        // 得到显示的最小数字
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber/2);
            if(min <= 1) {
                return 1;
            }
            return min;
            
        },
        // 得到显示的最大数字
        visibleMax() {
            let max;
            // if(this.visibleNumber % 2 === 0) {
            //     max = this.current + Math.floor(this.visibleNumber/2) - 1;
            // }else {
            //     max = this.current + Math.floor(this.visibleNumber/2);
            // }
            // if(max <= this.visibleNumber) {
            //     return this.visibleNumber;
            // }
            max = this.visibleMin + this.visibleNumber -1;
            if(max >= this.pageNumber) {
                return this.pageNumber;
            }
            return max;
        },
        // 页码数组
        numbers() {
            let numbers = [];
            for(let i = this.visibleMin; i <= this.visibleMax; i++) {
                numbers.push(i);
            }
            return numbers;
        }
    },
    methods: {
        handleClick(newPage) {
            if(newPage < 1) {
                newPage = 1;
            }
            if(newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }
            if(newPage === this.current) {
                return;
            }
        
            this.$emit('pageChange', newPage)
        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
    color: @primary;
    text-decoration: none;
    margin: 0 6px;
    cursor: pointer;
    font-size: 18px;
    &.disabled {
        color: @gray;
        cursor: not-allowed;
    }
    &.active {
        color: @words;
        font-weight: bold;
    } 
}
}


</style>
