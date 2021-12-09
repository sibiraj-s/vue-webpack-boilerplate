import { expect, test } from '@jest/globals';
import { mount } from '@vue/test-utils';

import Home from './Home.vue';

test('should render the home component', () => {
  const wrapper = mount(Home);
  const todo = wrapper.get('.home');
  expect(todo.text()).toContain('Vue is a progressive framework');
});
