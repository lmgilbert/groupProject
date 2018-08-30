
<template>
    
    <div class="body">
        <canvas id="canvas"></canvas>
        <h1>
            This is lauren's component 
            
            
        </h1>
        <!--<p>{{ name }}</p>-->
        <div>
            <!--<h2 v-for="fact in info" :key="fact">{{ fact.name }}</h2>
            <span>Height: </span><span v-for="fact in info" :key="fact">{{ fact.height }}</span><br>
            <span>Hair Colour: </span><span v-for="fact in info" :key="fact">{{ fact.hair_color}}</span><br>
            <span>Skin Colour: </span><span v-for="fact in info" :key="fact">{{ fact.skin_color }}</span><br>
            <span>Eye Colour: </span><span v-for="fact in info" :key="fact">{{ fact.eye_color }}</span><br>
            <span>Birth Year: </span><span v-for="fact in info" :key="fact">{{ fact.birth_year }}</span><br>
            <span>Gender: </span><span v-for="fact in info" :key="fact">{{ fact.gender }}</span><br>-->
            
            <div v-for="fact in info" :key="fact">
                <h2>{{ fact.name }}</h2>
                <p>{{ fact.height }}</p>
                <p> {{ fact.hair_color }}</p>
                <p>{{ fact.skin_color }}</p>
                <p>{{ fact.eye_color }}</p>
                <p>{{ fact.birth_year }}</p>
                <p>{{ fact.gender }}</p>
            </div>
            <p>{{ searchTerm }}</P>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: "lauren",
    data () {
      return {
          info: [],
          searchTerm: []
          //searchTerm: info.name,
          
      }
    },
    //https://api.giphy.com/v1/gifs/search?api_key=j5A12BRdSwlPVq8sS3qXGmuoawOgeed6&q=&limit=25&offset=0&rating=G&lang=en
    mounted () {
        let randomNumber = Math.floor((Math.random() * 88) + 1);
        let apiURL = 'https://swapi.co/api/people/' + randomNumber
    
        axios
        .get(apiURL)
        .then(response => (this.info = response))
    
        this.searchTerm = this.info.name;

    },
    methods: {
        getGifs() {
            console.log(this.info);
        },

    },

    filters: {
        toUppercase: function(text) {
            return text.toUpperCase();
        }
    }

    
}

</script>


<style>
.inline {
    display: inline;
}

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