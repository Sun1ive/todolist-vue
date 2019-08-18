/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './button.vue';

storiesOf('Button', module).add('Default button', () => ({
	components: { Button },
	props: {
		disabled: {
			default: boolean('disabled', true),
		},
		text: {
			default: text('Text', 'Hello Storybook'),
		},
	},
	methods: {
		onClick() {
			action('click')('click action');
		},
	},
	template: `
    <Button :disabled="disabled" @click="onClick">{{ text }}</Button>
    `,
}));
