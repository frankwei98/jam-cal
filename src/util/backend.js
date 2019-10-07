import axios from 'axios';

const backend = process.env.VUE_APP_BACKEND;

function getCalendar({ userId, calendarId }) {
  return axios.get(`${backend}/get-calendar/${userId}/${calendarId}`);
}

export { getCalendar };
export default getCalendar;
