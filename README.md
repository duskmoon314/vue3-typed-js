# vite vue3ts eslint prettier

A template of vite + vue3-ts project with eslint and prettier

`husky` and `lint-staged` are installed to force style

A simple Github Action to run `npm run build`, and configs of Renovate

## Develop

### `dev`

`vite`

Start vite dev server

### `build`

`vite build`

Build into `dist/`

### `serve`

`vite preview`

### `lint`

`eslint --ext .js,.vue src`

Check if any code does not comply with the rules

### `lint:fix`

`eslint --ext .js,.vue src --fix`

Not only check, but also fix

### `format`

`prettier --write .`

Use prettier to format
