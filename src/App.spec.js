import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import App from './App.vue';
import router from './router.js';

test('should render the app component', async () => {
  router.push('/');
  await router.isReady();

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  expect(wrapper.html()).toContain('Vue is a progressive framework');
});
