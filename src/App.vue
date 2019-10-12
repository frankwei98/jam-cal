<template>
  <div id="app">
    <Layout>
      <Header class="header">
        <div class="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['/']"
          @click="onMenuClick"
          :style="{ lineHeight: '64px' }"
        >
          <Item key="/">Home</Item>
          <Item key="/about">About</Item>
          <Item key="/register">注册日历账户</Item>
        </Menu>
      </Header>
      <Content style="margin-top: 20px">
        <router-view style="margin: 0 20px" />
      </Content>
      <Footer>声明: 早期版本，不代表实际最终成果</Footer>
    </Layout>
  </div>
</template>

<script>
import { Layout, Menu } from 'ant-design-vue';

const { Header, Footer, Content } = Layout;
const { Item } = Menu;
export default {
  name: 'App',
  components: {
    Layout,
    Header,
    Content,
    Footer,
    Menu,
    Item,
  },
  methods: {
    onMenuClick({ key }) {
      // docs here: https://vue.ant.design/components/menu-cn/#Menu%E4%BA%8B%E4%BB%B6
      console.log({ key });
      this.$router.push({ path: key });
    },
  },
  computed: {
    TeamInviteLink() {
      return process.env.VUE_APP_TOWER_INVITE_LINK;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
