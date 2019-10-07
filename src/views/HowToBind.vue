<template>
  <div class="how-to-bind">
    <h1 class="title">如何绑定</h1>
    <h2>只需几步走</h2>
    1. 点击👉并使用微信扫码  <a :href="joinTeamUrl"><Button>注册 Tower 团队</Button></a>
    <br>
    2. 点击👉 <a :href="teamPersonalSettingLink"><Button>绑定邮箱</Button></a>
    <br>
    3. 使用 <a :href="teamCalendarUrl"><Button>Tower 创建团队日程</Button></a>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  name: 'How To Bind',
  components: { Button },
  data: () => ({
    teamId: '5b86b534176cc58b60a0e8899a865524', // 按照实际情况填写
    joinTeamToken: 'cc2b60ed466c4cde4d2ae4c2b8a828bc',
  }),
  computed: {
    teamPersonalSettingLink() {
      return `https://tower.im/members/${this.teamId}/settings/`;
    },
    teamCalendarUrl() {
      return `https://tower.im/teams/${this.teamId}/calendars/`;
    },
    joinTeamUrl() {
      return `https://tower.im/join?t=${this.joinTeamToken}`;
    },
  },
};
</script>
