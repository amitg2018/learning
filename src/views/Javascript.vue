<!-- <div class="about">
    <div class="header">Javascript</div>
    <div class="details-container">
      <h1>Regular Expressions</h1>
      <div class="details">
        Regular expressions are special strings that represent a search pattern.
        Also known as "regex" or "regexp", they help programmers match, search,
        and replace text. Regular expressions can appear cryptic( * kriptik
        means - गुप्त) because a few characters have special meaning. The goal
        is to combine the symbols and text into a pattern that matches what you
        want, but only what you want. This section will cover the characters, a
        few shortcuts, and the common uses for writing regular expressions.
        Website for Write and check Regex: https://regexr.com/
        https://regex101.com https://regexpal.com Flags:
      </div>
      <div class="details">
        <strong>Imp Links</strong>
        <p>https://www.guru99.com/interactive-javascript-tutorials.html</p>
        <p>https://javascript.info/array</p>
        <p>
          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        </p>
      </div>
    </div>
  </div> -->
<template>
  <div class="right-container">
    <div class="header">
      <div class="title">Javascript</div>
      <div class="right-nav">
        <router-link to="jsbasic">Basic</router-link>
        <router-link to="jsregex">Regex</router-link>
        <router-link to="jses6">ES6</router-link>
      </div>
    </div>
    <div class="route-view-container">
      <div class="main-view-area">
        <!-- <router-view></router-view> -->
        <div id="block"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created: function() {
    // this.createBlock();
  },
  methods: {
    // some problem on this code how to create 45 div block inside block id with click event.
    // createBlock: function() {
    //   for (let i = 0; i < 45; i++) {
    //     let div = document.createElement("div");
    //     div.onclick = function() {
    //       alert("you are click on #" + i);
    //     };
    //     document.getElementById("block").appendChild(div);
    //   }
    // }
  }
};
</script>
<style>
#block > div {
  background: cadetblue;
  width: 50px;
  height: 50px;
  margin: 5px;
  padding: 0;
  cursor: pointer;
}
</style>
