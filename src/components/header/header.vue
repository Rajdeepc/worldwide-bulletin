<template>
  <div class="header-news">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">NewsBulletin</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Select Your Country</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nav class="inner-navbar">
      <b-nav small align="center">
        <b-nav-item to="/city" exact exact-active-class="active">City</b-nav-item>
        <b-nav-item to="/people" exact exact-active-class="active">People</b-nav-item>
        <b-nav-item to="/business/" exact exact-active-class="active">Business</b-nav-item>
        <b-nav-item to="/entertainment" exact exact-active-class="active">Entertainment</b-nav-item>
         <b-nav-item to="/food" exact exact-active-class="active">Food</b-nav-item>
        <b-nav-item to="/style" exact exact-active-class="active">Style</b-nav-item>
        <b-nav-item to="/technology/" exact exact-active-class="active">Technology</b-nav-item>
      </b-nav>
    </nav>
  </div>
</template>

<script>


export default {
  name: "Header",
  
  
};
</script>

<style>
.header-news nav {
      border-bottom: 1px solid #fafafa;
  }
.inner-navbar{
    padding:12px 0px;
    }
</style>