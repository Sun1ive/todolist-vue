/* eslint-disable */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Input from './input.vue';

storiesOf('Input', module).add('Default Input', () => ({
  components: { Input },
  data: () => ({
    email: 'default',
  }),

  template: `<div>
  <Input title="title" v-model="email"/>
  email: {{ email }}
  </div>`,
}));
