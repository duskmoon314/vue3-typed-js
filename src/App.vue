<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Typed :options="options">
    <h1 class="typing"></h1>
  </Typed>
</template>

<script setup lang="ts">
import { Typed } from "./components";
import type { TypedOptions } from "./components";

const options: TypedOptions = {
  strings: ["Hello", "World", "This is vue3-typed-js"],
  loop: true,
  typeSpeed: 30,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
