module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
		commonjs: true
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module'
	},
	rules: {
		code: 80
	}
}
