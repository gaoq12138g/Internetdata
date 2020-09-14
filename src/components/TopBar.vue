<template>
    <div class="top">
        <div>
            <div>数据填报系统</div>
        </div>
        <div>
            <div>
            </div>
            <div>
                <a-avatar class="photo" style="backgroundColor:#87d068" icon="user" />
            </div>
            <div>
                <a-dropdown :trigger="['click']" class="ant-dropdown-link">
                    <a @click="e => e.preventDefault()">
                        {{this.user[0].name}}
                        <a-icon type="down" />
                    </a>
                    <a-menu slot="overlay">
                        <!-- <a-menu-item key="0">账号管理</a-menu-item> -->
                        <a-menu-item key="1" @click="loginOut">退出系统</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        loginOut() {
            this.$router.push({ name: "Login" })
        },

    },
    created: function () {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 86px;
  background: #ffffff;
  box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.04);
  padding: 0 38px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {
    display: flex;
    justify-content: flex-start;
    > div:first-child {
      width: 45px;
      height: 49px;
      margin: 15px 34px 0 0;
      > img {
        width: 100%;
      }
    }
    > div:last-child {
      width: 250px;
      font-size: 26px;
      font-family: PingFang SC Bold, PingFang SC Bold-Bold;
      font-weight: 700;
      text-align: left;
      color: #5797ff;
    }
  }
  > div:last-child {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    > div:first-child {
      > .badge {
        margin-top: 36px;
      }
      .icon {
        font-size: 18px;
        // line-height: 100px;
        // margin-top: 40px;
      }
    }
    > div:nth-child(2) {
      margin-left: 43px;
      > .photo {
        width: 23px;
        height: 23px;
        // line-height: 100px;
        margin-top: 32px;
      }
    }
    > div:last-child {
      margin-left: 13px;
      > .ant-dropdown-link {
        height: 14px;
        font-size: 14px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #666666;
        line-height: 90px;
      }
    }
  }
}
</style>