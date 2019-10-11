<template>
  <div class="home">
    <timeline ref="timeline" :items="items" :groups="groups" :options="options"></timeline>
  </div>
</template>

<script>
import moment from 'moment';
import { getCalendar } from '../util/backend';

export default {
  name: 'home',
  data: () => ({
    groups: [],
    items: [],
    options: {
      editable: true,
    },
    calendarEvent: [],
  }),
  computed: {
    userId() {
      return process.env.VUE_APP_TOWER_USER_ID;
    },
    calendarId() {
      return process.env.VUE_APP_TOWER_CALENDAR_ID;
    },
  },
  methods: {
    initCalendar() {
      const now = moment()
        .minutes(0)
        .seconds(0)
        .milliseconds(0);
      const groupCount = 4;
      const itemCount = 20;
      // create a data set with groups
      const names = ['Frank', 'Island', 'Lee', 'Grant'];
      for (let g = 0; g < groupCount; g += 1) {
        this.groups.push({
          id: g,
          content: names[g],
        });
      }
      // create a dataset with items
      for (let i = 0; i < itemCount; i += 1) {
        const start = now.clone().add(Math.random() * 200, 'hours');
        const group = Math.floor(Math.random() * groupCount);
        this.items.push({
          id: i,
          group,
          content: `item ${i} <span style="color:#97B0F8;">(${names[group]})</span>`,
          start,
          type: 'box',
        });
      }
    },
    async fetchCalendar() {
      const { calendarId } = this;
      const result = await getCalendar({ calendarId });
      console.log(result);
    },
  },
  created() {
    this.initCalendar();
    this.fetchCalendar();
  },
};
</script>
