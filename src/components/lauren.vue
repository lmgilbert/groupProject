
<template>
    
    <div class="body">
        <div id="title-container">
            <img src="../assets/Star_Wars_logo-1.png" alt="Star Wars" height="auto" width="300"/>
            <h4 class="title-text">RANDOM CHARACTER GENERATOR</h4>
        </div>

        <div>
            <h2>{{ info.data.name }}</h2>
            <p>Height: {{ info.data.height }}</p>
            <p>Hair Color: {{ info.data.hair_color }}</p>
            <p>Skin Color: {{ info.data.skin_color }}</p>
            <p>Eye Colour: {{ info.data.eye_color }}</p>
            <p>Birth Year: {{ info.data.birth_year }}</p>
            <p>Gender: {{ info.data.gender }}</p>
            <a href="" id="button">Try Again</a>

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
          giph: []
          //search: []
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
    
        let searchTerm = this.info.data.name;
        
        axios
        .get('https://api.giphy.com/v1/gifs/search?api_key=j5A12BRdSwlPVq8sS3qXGmuoawOgeed6&q=&limit=25&offset=0&rating=G&lang=en')
        .then(response => (this.giph = response))
        conole.log(giph)



    },
    methods: {
        

    },

    filters: {
        toUppercase: function(text) {
            return text.toUpperCase();
        }
        
    }
    
    
    
}

</script>


<style>

p {
    color: white;
    margin: 5px;
}
.title-text {
    margin: 2px;
    color: #fec532;
}
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
  /*color: #42b983;*/
  color: white;
  



}
#title-container {
    margin-top: 30px;
}



body {
    padding: 0;
    margin: 0;
}

canvas {
    position: absolute;
    width: 100%;
    height: 100%;
}
body {
    background: url('../assets/146610-large-star-wars-star-background-1920x1080.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

h2{
    font-weight: 700;
    color: #fec532;
    margin-bottom: 10px;
}

</style>