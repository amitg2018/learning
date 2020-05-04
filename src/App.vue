<template>
  <div id="app">
    <div id="leraning-container">
      <div id="navigation-part">
        <div id="company-logo">
          <!-- <img src="./assets/images/logo-company.png" /> -->
          Learning
          <span>Studio...</span>
        </div>
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/array">Array</router-link>
          <router-link to="/objects">Objects</router-link>
          <router-link to="/scss">Scss</router-link>
          <router-link to="/flexbox">Flexbox</router-link>
          <router-link to="/git">Git</router-link>
          <router-link to="/jenkins">Jenkins</router-link>
          <router-link to="/vuejs">Vuejs</router-link>
          <router-link to="/javascript">Javascript</router-link>
          <router-link to="/html">Html 5</router-link>
          <router-link to="/css">Css</router-link>
          <router-link to="/resume">Resume</router-link>
        </div>
      </div>
      <div id="body-part"><router-view> </router-view></div>
    </div>
  </div>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss" scoped>
#leraning-container {
  width: 100%;
  height: 100%;
  display: flex;
  background: red;
  #navigation-part {
    width: 15%;
    height: 100%;
    background: #fff;
    border-right: 1px solid #e2e2e2;
    box-sizing: border-box;
    #company-logo {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      background: #fff;
      color: #147d91;
      padding: 10px 20px;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #e2e2e2;
      box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
      span {
        color: #000;
        padding-left: 50px;
        padding-bottom: 5px;
      }
      img {
        max-width: 100px;
      }
    }
    #nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 15px;

      a {
        padding: 10px 20px;
        color: #000;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        width: 100%;
        display: block;
        box-sizing: border-box;
        border-bottom: 1px solid #e9e9e9;
        &.router-link-exact-active {
          color: #147d91;
        }
      }
    }
  }
  #body-part {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    background: #fff;
  }
}
</style>
