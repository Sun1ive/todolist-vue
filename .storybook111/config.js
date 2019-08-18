import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

const loadStories = () => {
	const requireContext = require.context('../src', true, /\.story\.js$/);
	// https://webpack.github.io/docs/context.html
	requireContext.keys().forEach(requireContext);
};

addDecorator(withInfo);

configure(loadStories, module);
