<template>
  <div class="right-container">
    <div class="header">
      <div class="title">VueJs</div>
      <div class="right-nav">
        <router-link to="vuebasic">Basic</router-link>
        <router-link to="vueapicall">API Call</router-link>
        <router-link to="vuecomponent">Components</router-link>
        <router-link to="vuex">VueX</router-link>
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
