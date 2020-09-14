<template>
    <div id="main">
        <div id="header">
            <div class="left">数据填报系统</div>
            <div class="right">
                <a-avatar class="photo" style="backgroundColor:#87d068" icon="user" />
                <span>{{user.用户名称}}</span>
                <a-button type="link" @click="loginOut">注销</a-button>
            </div>
        </div>
        <div id="content">
            <div id="nav">
                <a-menu
                    :default-selected-keys="['check']"
                    :default-open-keys="['action']"
                    mode="inline"
                    @select="select"
                >
                    <template v-for="item in menu">
                        <a-menu-item v-if="!item.children" :key="item.id">
                            <span>{{ item.title }}</span>
                        </a-menu-item>
                        <sub-menu v-else :key="item.id" :menu-info="item" />
                    </template>
                </a-menu>
            </div>
            <keep-alive>
                <router-view id="view" name="main" />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Menu } from "ant-design-vue";
import TopBar from "@/components/TopBar.vue";
const SubMenu = {
    template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title"><span>{{ menuInfo.title }}</span></span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.id">
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.id" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
    name: "SubMenu",
    isSubMenu: true,
    props: {
        ...Menu.SubMenu.props,
        menuInfo: {
            type: Object,
            default: () => ({}),
        },
    },
};
export default {
    components: {
        "sub-menu": SubMenu,
        TopBar,
    },
    mounted: function () {
        var _self = this;
        _self.axios.post("dictionary/query", []).then((res) => {
            let dic = res.data.data;
            _self.$store.commit("setDictionary", dic);
        });
    },
    computed: {
        ...mapState({
            menu: (state) => state.menu,
            user: (state) => state.currentUser,
        }),
    },
    methods: {
        select({ item, key, selectedKeys }) {
            this.$router.push("/" + key);
        },
        loginOut() {
            this.$router.push("/");
        },
    },
};
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    height: 10%;
    background: #ffffff;
    box-shadow: 0px 4px 22px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    .left {
        width: 80%;
        margin-left: 50px;
        font-size: 26px;
        font-family: PingFang SC Bold, PingFang SC Bold-Bold;
        font-weight: 700;
        color: #5797ff;
    }
    .right {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        margin-right: 50px;
        align-items: center;
        span {
            margin-left: 5px;
        }
    }
}
#main {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 1% 0;
    display: flex;
    flex-direction: column;
    background-color: #f0f1f5;
}

#content {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding-top: 1%;
    #nav {
        width: 15%;
        height: 100%;
        overflow: auto;
        background-color: #ffffff;
        border-radius: 6px;
    }
    #view {
        flex: 1;
    }
}

::v-deep .a-menu {
    border: none;
}
</style>