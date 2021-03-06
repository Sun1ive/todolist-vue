module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/airbnb'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'import/prefer-default-export': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'arrow-parens': 'off',
		'import/no-extraneous-dependencies': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
