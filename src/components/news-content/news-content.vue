<template>
    <b-card :img-src="item.urlToImage" img-alt="Card image" img-top @click="goTo(item.url)">
          <b-card-text>{{item.title}}</b-card-text>
        </b-card>
</template>
<script>
export default {
    name: "NewsContent",
    props: ['item'],
}
</script>