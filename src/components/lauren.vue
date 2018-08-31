<template>
    
    <div class="body">
        <div id="title-container">
            <img src="../assets/Star_Wars_logo-1.png" alt="Star Wars" height="auto" width="270"/>
            <h4 class="title-text">RANDOM CHARACTER GENERATOR</h4>
        </div>

        <div id="text">
            <img :src="photo" alt="image" class="giph"/>
            <h2>{{ info.data.name }}</h2>
            <p>Height: {{ info.data.height }}</p>
            <p>Hair Color: {{ info.data.hair_color }}</p>
            <p>Skin Color: {{ info.data.skin_color }}</p>
            <p>Eye Colour: {{ info.data.eye_color }}</p>
            <p>Birth Year: {{ info.data.birth_year }}</p>
        </div>
        <a href="lauren" class="button">TRY AGAIN</a>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "lauren",
    data () {
      return {
          info: [],
          giph: [],
          photo: []
      }
    },
   
    mounted () {//88 originally in the math.random
        let randomNumber = Math.floor((Math.random() * 20) + 1);
        let apiURL = 'https://swapi.co/api/people/' + randomNumber;

        axios
        .get(apiURL)
        .then(response => {

            this.info = response
            let searchTerm = this.info.data.name;
            axios
            .get('https://api.giphy.com/v1/gifs/search?api_key=j5A12BRdSwlPVq8sS3qXGmuoawOgeed6&q=' + searchTerm + '&limit=25&offset=0&rating=G&lang=en')
            .then(response2 => 
            {
                this.giph = response2;
                this.photo =response2.data.data[0].images.original.url;

            })
        })
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

.giph {
    width: 200px;
    height: auto;
    margin-top: 20px;
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
    margin-bottom: 0px;
    margin-top: 0px;
}

.button {
    background: #fec532;
    padding: 5px 10px;
    margin-top: 20px;
    text-decoration: none;
}

.button:hover{
    background: #ffd875;
}
</style>