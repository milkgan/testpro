<template>
    <div class="site-aside-container">
        <!-- 头像组件 -->
        <Avatar url="https://img2.baidu.com/it/u=2182014426,2379325530&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
        <h1 class="name">milkgan</h1>
        <!-- 菜单导航组件 -->
        <Menu />
        <!-- 联系方式组件 -->
        <Contact />
        <p class="footer">
            备案号xxx
        </p>
    </div>
  
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from './Menu';
import Contact from './Contact';
export default {
    name: "SiteAside",
    components: {
        Avatar,
        Menu,
        Contact
    },
    data() {
        return {

        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.site-aside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 30px 0px;
    box-sizing: border-box;
    text-align: center;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container {
        margin: 60px auto;
    }
    .contact-container {
        margin-top: 80px;
    }
    .name {
        font-size: 26px;
        color: #fff;
    }   
    .footer {
        color: @words;
        font-size: 14px;
    }
}


</style>