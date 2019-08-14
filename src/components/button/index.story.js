/* eslint-disable */
import Vue from 'vue';
import { storiesOf, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Button from './button.vue';

storiesOf('Button', module).add(
  'Default button',
  () => ({
    components: { Button },
    template: `<Button>Click me</Button>`,
  }),
  {
    info: {
      summary: 'Summary for MyComponent',
    },
  },
);
