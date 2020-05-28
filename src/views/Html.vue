<template>
  <div>
    <div class="right-container">
      <div class="header">
        <div class="title">{{ name }}</div>
        <!-- <div class="right-nav">
        <router-link to="services">Services</router-link>
        <router-link to="contact">Contact</router-link>
        <router-link to="vue">VueJs Learn</router-link> -->
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <!-- <router-view></router-view> -->
        <!-- {{ name }} -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Html 5"
    };
  },
  methods: {}
};
</script>
