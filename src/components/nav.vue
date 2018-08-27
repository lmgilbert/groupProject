<template>
    <nav>
        <router-link to="/snow">snow</router-link>
        <router-link to="/banjo">banjo</router-link>
        <router-link to="/ch">ch</router-link>
        <router-link to="/lauren">lauren</router-link>
    </nav>
</template>

<script>
export default {
    name: "navigation"
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
