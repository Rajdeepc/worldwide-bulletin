<template>
  <footer>
    <b-nav>
      <b-nav-item>Site Maintained By Rajdeep Chandra</b-nav-item>
    </b-nav>
    <b-nav>
      <b-nav-item>Made with  <img src="../../assets/logovue.png" alt="Logos" /></b-nav-item>
    </b-nav>
    <b-nav>
      <b-nav-item>@ 2020 NewsFlash.com</b-nav-item>
      <b-nav-item>Privacy Policy</b-nav-item>
      <b-nav-item>Terms of Use</b-nav-item>
    </b-nav>
     
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<style scoped>
footer {
    padding: 14px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
a.nav-link {
  color: #7d7d7d;
  font-size: 14px;
}
a.nav-link img { width:20px;}
</style>