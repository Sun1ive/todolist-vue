import { configure, addDecorator } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js
const loadStories = () => {
	const requireContext = require.context('../src', true, /\.story\.js$/);
	// https://webpack.github.io/docs/context.html
	requireContext.keys().forEach(requireContext);
};

addDecorator(withKnobs);

configure(loadStories, module);
