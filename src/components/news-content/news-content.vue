<template>
  <div class="card-news" @click="goTo(item.url)">
    <div class="img-wrapper-card">
      <img :src="item.urlToImage" alt="Card image" />
    </div>
    <div class="img-card-body">
      <b-card-text>{{item.title}}</b-card-text>
      <p class="time">{{moment(item.publishedAt).format('DD-MM-YYYY, h:mm a')}}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "NewsContent",
  props: ["item"],
  methods:{
    goTo(url) {
      window.location.href=url
      }
    }
};
</script>
<style scoped>
.img-card-body {
  padding: 16px;
  background: #fff;
  margin-bottom: 20px;
}
.img-wrapper-card {
  height: 100px;
  overflow: hidden;
  width: 100%;
}
.img-wrapper-card img {
  width: 100%;
}
p.card-text {
  font-size: 12px;
  display: -webkit-box;
  margin: 0 auto;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  height: 40px; /* Fallback for non-webkit */
}
p.time {
  font-size: 12px;
  color: #7d7d7d;
  margin: 0px;

  margin-top: 10px;
}
.card-news:hover { cursor: pointer;}
</style>