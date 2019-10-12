<template>
  <div class="calendar">
    <div class="loading" v-if="isLoading">
      <h1 class="title">Loading</h1>
    </div>
    <div class="loaded" v-else>
      <p>日历的ID： {{calendarId}}</p>
      <p>日历目前出现了: {{setOfAttendees.join(', ')}}</p>
      <timeline ref="timeline" :items="items" :groups="groups" :options="options"></timeline>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getCalendar } from '../util/backend';

export default {
  name: 'Calendar',
  props: ['towerUserId', 'calendarId'],
  data: () => ({
    isLoading: true,
    options: {
      editable: false,
    },
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
  methods: {
    getNameFromEventSummary(event) {
      const ends = event.SUMMARY.indexOf(']');
      return event.SUMMARY.slice(1, ends);
    },
    getTitleFromSummary(event) {
      const afterName = event.SUMMARY.indexOf(']') + 1;
      return event.SUMMARY.slice(afterName);
    },
  },
  computed: {
    events() {
      const events = this.calendar.VEVENT;
      const afterPostProcess = events.map((event) => {
        const creator = this.getNameFromEventSummary(event);
        const title = this.getTitleFromSummary(event);
        return { ...event, creator, title };
      });
      return afterPostProcess;
    },
    setOfAttendees() {
      const result = this.events.reduce(
        (list, event) => [...list, this.getNameFromEventSummary(event)],
        [],
      );
      return [...new Set(result)]; // a set
    },
    groups() {
      return this.setOfAttendees.map((name, idx) => ({
        id: idx,
        content: name,
      }));
    },
    items() {
      return this.events.map((event, idx) => {
        const attendee = this.groups.find(
          member => this.getNameFromEventSummary(event) === member.content,
        );
        return {
          id: idx, // seq
          group: attendee.id, // belongs to which member
          content: event.title,
          start: moment(event.DTSTART),
          end: moment(event.DTEND),
          type: 'box',
        };
      });
    },
  },
};
</script>
