# vue3-typed-js

## About

This is a vue3 component of Typed.js, build with vite.

This repo is based on Orlandster's great work vue-typed-js. Because the name is similar, npm suggest me to name this module @duskmoon/vue3-typed-js.

I'm a newbie of vue and creating component library. Please point out my mistake and feel free to create PR.

## Usage

### Install

```
npm install @duskmoon/vue3-typed-js
```

### Demo

```ts
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Typed :options="options">
    <h1 class="typing"></h1>
  </Typed>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const options: TypedOptions = {
  strings: ["Hello", "World", "This is vue3-typed-js"],
  loop: true,
  typeSpeed: 30,
};
</script>
```

### Options

I export `TypedOptions` from Typed.js

Please check [Typed.js](http://mattboldt.github.io/typed.js/docs/)

## Contribute

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
