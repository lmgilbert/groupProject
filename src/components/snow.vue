<template>
    <div>
      <div id="app">
        <div id="myComponent">
          <h1 id="name">
              {{ firstName }}  {{ lastName }}
          </h1>
          <img id="image" v-bind:src="image"/>
          <p> Gender : {{ gender }}</p>
          <p> Age : {{ age }}</p>
          <p> Phone : {{ phone }}</p>
          <p> Email : {{ email }}</p>
          <p> Location : {{ city }} </p>
          <button id="contact"> Contact Now </button>
          <button id="next" @click="nextButton" > Next </button>
        </div>
        <footer> COPYRIGHT @ SNOW </footer>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
window.Vue = Vue;

export default {
  name: "snow",
  data() {
    return {
      gender: null,
      image: null,
      firstName: null,
      lastName: null,
      phone: null,
      age: null,
      email: null,
      city: null,
      state: null
    };
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?nat=nz")
      .then(response => {
        this.image = response.data.results[0].picture.large;
        this.firstName = response.data.results[0].name.first;
        this.lastName = response.data.results[0].name.last;
        this.gender = response.data.results[0].gender;
        this.phone = response.data.results[0].phone;
        this.email = response.data.results[0].email;
        this.city = response.data.results[0].location.city;
        this.state = response.data.results[0].location.state;
        this.age = response.data.results[0].dob.age;
        console.log(response);
      })
      .catch(error => console.log(error));
  },
  methods: {
    nextButton: function(event) {
      location.reload();
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico|Poppins:300");

body {
  margin: 0;
}

#myComponent {
  font-family: "Poppins", sans-serif;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  z-index: 5;
}
#myComponent::after {
  content: "";
  display: block;
  position: absolute;
  margin-left: 20%;
  padding-right: 60%;
  height: 190px;
  top: 0;
  background: antiquewhite;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  z-index: -1;
}
#image {
  border-radius: 50%;
}
#name {
  text-transform: capitalize;
  font-family: "Pacifico", cursive;
  font-size: 40px;
}
p {
  text-transform: capitalize;
}
footer {
  font-size: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  bottom: 1px;
  position: absolute;
  display: block;
  width: 100%;
}
#next {
  border: none;
  color: white;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 100px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid antiquewhite;
}

#next:hover {
  background-color: antiquewhite;
  color: black;
}

#contact {
  border: none;
  color: white;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 100px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: antiquewhite;
  color: black;
  border: 2px solid antiquewhite;
}
#contact:hover {
  border: 2px solid antiquewhite;
  background-color: white;
  color: black;
}
</style>
