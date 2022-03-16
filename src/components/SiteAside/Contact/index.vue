<template>
  <div class="contact-container">
      <ul>
          <!-- github -->
          <li>
              <a href="#">
                <div class="icon">
                    <Icon type="github" />
                </div>
                <span>milkgan</span>
              </a>
          </li>

          <!-- 邮件 -->
          <li>
              <a href="mailto:394717060@qq.com">
                <div class="icon">
                    <Icon type="mail" />
                </div>
                <span>394717060@qq.com</span>
              </a>
          </li>
          <!-- QQ -->
          <li>
              <a href="tencent://message/?Menu=yes&uin=394717060&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div class="icon">
                    <Icon type="qq" />
                </div>
                <span>394717060</span>
              </a>
              <div class="pop">
                  <img src="" alt="">
              </div>
          </li>
          <!-- 微信 -->
          <li>
              <a href="#">
                <div class="icon weixin">
                    <Icon type="weixin" />
                </div>
                <span>milkgan</span>
              </a>
              <div class="pop">
                  <img src="" alt="">
              </div>
          </li>

      </ul>

  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    name: "Contact",
    components: {
        Icon
    },
    data() {
        return {};
    },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.contact-container {
    ul {
        margin: 0;
        padding: 20px;
        list-style: none;
        color: @gray;
        @itemHeight: 30px;
        a {
            display: flex;
            line-height: 26px;
            .icon {
                width: 36px;
                font-size: 26px;
                &.weixin {
                    font-size: 32px;
                    text-indent: -3px;
                }
            }  
        } 
        li {
            height: @itemHeight;
            margin-bottom: 10px;
            position: relative;
            &:hover {
                color: @gray;
                .pop {
                    transform: scaleY(1);
                }
            }
            .pop {
                position: absolute;
                left: 0;
                bottom: @itemHeight + 6px;
                transform: scaleY(0);
                transform-origin: center bottom;
                transition: .3s;
                width: 150px;
                height: 150px;
                background-color: #fff;
                padding: 10px 16px;
                border-radius: 10px;
                img {
                    width: 100%;
                    height: 100%;
                    
                }
                &::after {
                    display: block;
                    content: '';
                    width: 8px;
                    height: 8px;
                    background-color: #fff;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%) rotate(45deg);
                    bottom: -4px;
                }
            }

        }               
    }
}
    

</style>