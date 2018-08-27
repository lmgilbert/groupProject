<template>
    <div class="body">
        <h1>
            This is lauren's component 
            
        </h1>
        <div v-for="info in infos" :key="info">
            {{ info.name }}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "lauren",
    data () {
      return {
          hello: "blah",
          infos: null
      }
    },
    mounted () {
    axios
      .get('https://swapi.co/api/people')
      .then(response => (this.info = response))
    }
}

</script>

<style>
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