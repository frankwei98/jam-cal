/* eslint-disable no-console */
import { Modal } from 'ant-design-vue';
import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n'
        + 'For more details, visit https://goo.gl/AFskqB',
      );
    },
    registered() {
      console.log('Service worker has been registered.');
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound() {
      console.log('New content is downloading.');
    },
    updated() {
      console.log('New content is available; please refresh.');
      Modal.warning({
        closable: false,
        icon: 'exclamation',
        title: 'App 已更新',
        content: '修复了可能会奇怪的 bug，立刻刷新体验吧！',
        okText: '好的，我立刻刷新页面',
        onOk: () => window.location.reload(),
      });
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
