<template>
    <div>
        <h1>
            This is Clare Harriette's American News Filter
        </h1>
        <br>
      <div v-for="title in articles" class="title" :key="title.id">
            {{ title.title }}
          </div>

    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ch",
  data() {
    return {
      articles: null,
      articleTitle: null
    };
  },
  mounted () {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b590a58cc1e45d1b96895a16c7f356e"
      )
      .then(response => {
        this.articles = response.data.articles;
        this.articleTitle = this.articles[0].title;
        console.log(response);
      });
  },
  filters: {
  }
};
</script>



<style>
</style>