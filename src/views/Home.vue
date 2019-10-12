<template>
  <div class="home">
    <Calendar :calendarId="defaultCalendarId" />
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue';

export default {
  name: 'home',
  data: () => ({}),
  components: {
    Calendar,
  },
  computed: {
    defaultCalendarId() {
      return process.env.VUE_APP_TOWER_CALENDAR_ID;
    },
  },
  methods: {

  },
  created() {
  },
};
</script>
