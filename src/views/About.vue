<template>
  <div class="right-container">
    <div class="header">
      <div class="title">About</div>
      <div class="right-nav">
        <router-link to="services">Services</router-link>
        <router-link to="contact">Contact</router-link>
        <router-link to="vue">VueJs Learn</router-link>
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
