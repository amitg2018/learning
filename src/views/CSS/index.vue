<template>
  <div class="right-container">
    <div class="header">
      <div class="title">CSS</div>
      <div class="right-nav">
        <router-link to="css3">Css3</router-link>
        <router-link to="scss">Scss</router-link>
        <router-link to="less">Less</router-link>
        <router-link to="flexbox">Flexbox</router-link>
        <router-link to="grid">Grid</router-link>
        <router-link to="cssanimation">Animation</router-link>
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
