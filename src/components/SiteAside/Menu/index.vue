<template>
  <nav class="menu-container">
    <router-link
      v-for="item in menu"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.type" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
    <!-- <a v-for="item in menu" :key="item.link" :href="item.link" :class="{selected: isSelected(item)}">
          <div class="icon">
              <Icon :type="item.type" />
          </div>
          <span>{{ item.title }}</span>
      </a> -->
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      menu: [
        {
          name: "Home",
          title: "首页",
          type: "home",
          link: "/",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          type: "blog",
          link: "/blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          type: "about",
          link: "/about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          type: "code",
          link: "/project",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          type: "chat",
          link: "/message",
          exact: true,
        },
      ],
    };
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  a {
    display: flex;
    color: @gray;
    padding: 10px 40px;
    line-height: 26px;
    .icon {
      width: 30px;
    }
    &.selected {
      background-color: darken(@words, 5%);
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>