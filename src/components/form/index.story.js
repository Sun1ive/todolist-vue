import { storiesOf } from '@storybook/vue';
import Input from '../input/input.vue';
import Form from './form.vue';

storiesOf('Form', module).add('Default form', () => ({
	components: { Form, Input },
	template: `<Form>
  <Input title="email"/>
  <Input title="password" />
  </Form>`,
}));
