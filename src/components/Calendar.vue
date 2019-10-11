<template>
  <div class="calendar">
    <div class="loading" v-if="isLoading">
      <h1 class="title">Loading</h1>
    </div>
    <div class="loaded" v-else>{{events}}</div>
  </div>
</template>

<script>
import { getCalendar } from '../util/backend';

export default {
  name: 'Calendar',
  props: ['towerUserId', 'calendarId'],
  data: () => ({
    isLoading: true,
    calendar: {
      CALSCALE: 'GREGORIAN',
      PRODID: 'icalendar-ruby',
      VERSION: '2.0',
      VEVENT: [],
      VTIMEZONE: [],
      'X-WR-CALNAME': '',
    },
  }),
  // A better place in React is componentDidMount,
  // but we don't care about that.
  // In Vue, a better place is created
  // because the component has been created already, so 'this' exists.
  async created() {
    try {
      const { data } = await getCalendar({
        calendarId: this.calendarId,
      });
      this.calendar = data.calendar;
      this.isLoading = false;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    events() {
      return this.calendar.VEVENT;
    },
    setOfAttendees() {
      const result = this.events.reduce((list, event) => {
        const ends = event.SUMMARY.indexOf(']');
        const name = event.SUMMARY.slice(1, ends);
        return [...list, name];
      }, []);
      return [...new Set(result)]; // a set
    },
  },
};
</script>
