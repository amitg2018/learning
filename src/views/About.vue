<template>
  <div>
    <div class="header">
      <div class="title">About</div>
      <div class="right-nav">
        <router-link to="services">Services</router-link>
        <router-link to="contact">Contact</router-link>
        <!-- <router-link to="/">Clients</router-link> -->
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
