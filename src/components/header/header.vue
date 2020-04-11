<template>
  <div class="header-news">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">
        <div class="img-brand">
          <img src="../../assets/logo.png" alt="Logos" />
        </div>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/" exact exact-active-class="active">Top Headlines</b-nav-item>
        <b-nav-item to="/city" exact exact-active-class="active">City</b-nav-item>
        <b-nav-item to="/people" exact exact-active-class="active">People</b-nav-item>
        <b-nav-item to="/business/" exact exact-active-class="active">Business</b-nav-item>
        <b-nav-item to="/entertainment" exact exact-active-class="active">Entertainment</b-nav-item>
        <b-nav-item to="/food" exact exact-active-class="active">Food</b-nav-item>
        <b-nav-item to="/style" exact exact-active-class="active">Style</b-nav-item>
        <b-nav-item to="/technology/" exact exact-active-class="active">Technology</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
            v-model="searchValue"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    filteredCustomers(event){

      this.searchValue = event.target.value;
      // eslint-disable-next-line no-console
      console.log(this.searchValue)
    }
  }
};
</script>

<style>
.header-news nav {
  border-bottom: 1px solid #fafafa;
}
.inner-navbar {
  padding: 12px 0px;
}
a.nav-link {
  color: #7d7d7d;
  font-size: 14px;
}
a.nav-link.active.router-link-active {
  font-weight: bold;
}
.img-brand img {
  height: 50px;
}
</style>