import axios from 'axios';

const backend = process.env.VUE_APP_BACKEND;

function getRaw({ userId, calendarId }) {
  return axios.get(`${backend}/get-raw/${userId}/${calendarId}`);
}

function getCalendar({ calendarId }) {
  return axios.get(`${backend}/get-calendar/${calendarId}`);
}

export { getCalendar, getRaw };
export default getCalendar;
