<template>
  <div id="app">
    <div id="project-container">
      <div id="navigation-part">
        <div id="company-logo">
          <!-- <img src="./assets/images/logo-company.png" /> -->
          Learning
          <span>Studio...</span>
        </div>
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/gitGithub">Git & Github</router-link>
          <router-link to="/array">Array</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/vuejs">Vuejs</router-link>
          <!--  <router-link to="/objects">Objects</router-link>
          <router-link to="/scss">Scss</router-link>
          <router-link to="/flexbox">Flexbox</router-link>
          <router-link to="/jenkins">Jenkins</router-link>
          
          <router-link to="/javascript">Javascript</router-link>
          <router-link to="/html">Html 5</router-link>
          <router-link to="/css">Css</router-link>
          <router-link to="/resume">Resume</router-link> -->
        </div>
      </div>
      <div id="right-part"><router-view> </router-view></div>
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss" scoped></style>
