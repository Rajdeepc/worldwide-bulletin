<template>
  <div class="city-wrapper">
    <b-row>
      <b-col cols="3" v-for="news in sectionData.articles" :key="news.source.id">
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
  name: "Food",
  components:{NewsContent},
  data() {
    return {
      sectionData: []
    }
  },
  props: {
    msg: String
  },
  mounted() {
    const baseEndPoint = API_ENDPOINTS.everything;
    const paramsObj = {
      q: "food",
      apiKey: API_KEY
    };
    HttpService.apiGet(baseEndPoint, paramsObj).then(
      response => (this.sectionData = response)
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
