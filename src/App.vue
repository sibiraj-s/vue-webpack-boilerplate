<template>
  <router-view />
</template>

<style>
html,
body {
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
</style>
