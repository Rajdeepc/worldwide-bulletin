<template>
  <div class="home-wrapper">
    <b-row>
      <b-col cols="3" v-for="news in newsData.articles" :key="news.source.id">
        <NewsContent :item="news"></NewsContent>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { API_ENDPOINTS } from "../utils/constants";
import HttpService from "../utils/http";
import { API_KEY } from "../utils/constants";
import NewsContent from '../components/news-content/news-content';

export default {
  name: "Home",
  components: {NewsContent},
  data() {
    return {
      newsData: []
    };
  },
  props: {
    msg: String
  },
  mounted() {
    const baseEndPoint = API_ENDPOINTS.topHeadlines;
    const paramsObj = {
      country: "in",
      apiKey: API_KEY
    };
    HttpService.apiGet(baseEndPoint, paramsObj).then(
      response => (this.newsData = response)
    );
  },
  methods: {
    goTo(url) {
        window.location.href=url
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
