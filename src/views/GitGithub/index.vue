<template>
  <div class="right-container">
    <div class="header">
      <div class="title">Git n Github</div>
      <div class="right-nav">
        <router-link to="ggbasic">Basic</router-link>
        <router-link to="git">Git</router-link>
        <router-link to="github">Github</router-link>
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
