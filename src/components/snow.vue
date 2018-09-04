<template>
    <div>
      <div id="app">
        <div id="genderButton">
        <button class="button gender" data-gps-track="site_switcher.show" @click="showFemales()">Female</button>
        <button class="button gender" @click="showMales()">Male</button>
        </div>
        <img v-if="isLoading" src="https://cdn.dribbble.com/users/97161/screenshots/1696432/__.gif" />
        <div id="myComponent" v-if="!isLoading">
          <h1 class="name"> {{ firstName }} {{ lastName }}</h1>
          
          <div v-if="!isLoading">
            <img id="image" v-bind:src="image"/>
            <p> Gender : {{ gender }}</p>
            <p> Age : {{ age }}</p>
            <p> Phone : {{ phone }}</p>
            <p> Email : {{ email }}</p>
            <p> Location : {{ city }} </p>
          </div>
        </div>
        <div id="optionButton">
        <button class="button option" > Contact Now </button>
          <button @click="loadRandomUser()" class="button option"> Next </button>
        </div>
        <footer> COPYRIGHT @ SNOW </footer>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import Vue from "vue";
window.Vue = Vue;

export default {
  name: "snow",
  data() {
    return {
      isLoading: true,
      selectGender: "",
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
    this.loadRandomUser();
  },

  methods: {
    showMales: function() {
      this.selectGender = "male";
    },
    showFemales: function() {
      this.selectGender = "female";
    },
    loadRandomUser: function() {
      this.isLoading = true;
      this.image = "";
      axios
        .get("https://randomuser.me/api/?nat=nz&gender=" + this.selectGender)
        .then(response => {
          this.isLoading = false;
          this.image = response.data.results[0].picture.large;
          this.firstName = response.data.results[0].name.first;
          this.lastName = response.data.results[0].name.last;
          this.gender = response.data.results[0].gender;
          this.phone = response.data.results[0].phone;
          this.email = response.data.results[0].email;
          this.city = response.data.results[0].location.city;
          this.state = response.data.results[0].location.state;
          this.age = response.data.results[0].dob.age;
          // console.log(response);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped >
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
  height: 500px;
}
#myComponent::after {
  content: "";
  display: block;
  position: absolute;
  margin-left: 20%;
  padding-right: 60%;

  height: 190px;
  top: 0;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
  z-index: -1;
}
#image {
  border-radius: 50%;
}
.name {
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
.button {
  border: none;
  color: white;
  padding: 10px 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #fd7222;
}

.button:hover {
  background-color: #fd7222;
  color: black;
}
.button:focus{
  outline: none;
}
.gender:active {
  background: #fd7222;
}
.gender:focus {
  background: #fd7222;
  outline: none;
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
  background-color: #fd7222;
  color: black;
  border: 2px solid #fd7222;
}
#contact:hover {
  border: 2px solid #fd7222;
  background-color: white;
  color: black;
}
.gender {
  padding: 8px 24px;
  margin-bottom: 30px;
  font-size: 10px;
}
.option {
  margin-top: 90px;
}
#genderButton{
  display: block;
}
#optionButton{
  display: block;
  bottom: 200px;
  right: auto;
  left: auto;
}
</style>
