<template>
  <div class="homepage-wrapper">
    <Header></Header>
    <div class="container-news">
      <b-container>
        <router-view></router-view>
      </b-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/header";
import Footer from "./components/footer/footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Footer
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.container-news {
  background: #f5f5f5;
}
</style>
