<template>
  <div>
    <div class="right-container">
      <div class="header">
        <div class="title">Home</div>
        <!-- <div class="right-nav">
        <router-link to="services">Services</router-link>
        <router-link to="contact">Contact</router-link>
        <router-link to="vue">VueJs Learn</router-link> -->
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <!-- <router-view></router-view> -->
        <img
          alt="Vue logo"
          src="../assets/images/logo.png"
          style="max-width: 50px"
        />
        Home
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
