<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>
<script>

import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
    data: function () {
        return {
            locale: zhCN,
        }
    }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  border: none;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 6px;
  cursor: pointer;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>