module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic',
		'plugin:prettier/recommended',
	],
	"rules": {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": "off"
	}
};
