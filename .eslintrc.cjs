/** @type {import("eslint").Linter.Config} */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
	},
	plugins: ['@typescript-eslint', 'simple-import-sort', '@tanstack/query'],
	extends: [
		'next/core-web-vitals',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:@tanstack/eslint-plugin-query/recommended',
	],
	rules: {
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'warn',
			{
				prefer: 'type-imports',
				fixStyle: 'inline-type-imports',
			},
		],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_' },
		],
		'@typescript-eslint/no-misused-promises': [
			2,
			{
				checksVoidReturn: { attributes: false },
			},
		],
		  "import/order": [
      "error",
      {
        "groups": [["builtin", "external"], ["internal", "parent", "sibling", "index"]],
        "pathGroups": [
          {
            pattern: "components/ui/**",
            group: "internal"
          }
        ],
        "pathGroupsExcludedImportTypes": ["components/ui/**"]
      }
    ]
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'@tanstack/query/exhaustive-deps': 'error',
		'@tanstack/query/stable-query-client': 'error',
	},
};

module.exports = config;
