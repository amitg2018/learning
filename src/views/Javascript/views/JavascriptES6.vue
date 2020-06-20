<template>
  <div>
    <h1>{{ name }}</h1>
    <br /><br />
    <strong><u>Module and Classes</u></strong>
    <br /><br />
    <div class="module-class" @click="abc">
      Check Console for Module and Classes
    </div>
    <br />

    <br /><br />
    <div>
      <p>
        <strong>
          Notes: <br />
          Modules - Strict Mode and Global Scope <br />
          <br />
          There are two important</strong
        ><br />
        Rules, which you need to understand if you're working with ES6
        Modules:<br />
        Modules are always in Strict Mode (no need to define "use strict")
        Modules don't have a shared, global Scope. Instead each Module has its
        own Scope
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
.module-class {
  cursor: pointer;
  color: green;
  border: 1px solid #e2e2e2;
  background: #f2f2f2;
  border-radius: 16px 16px 4px 16px;
  padding: 5px 10px;
  display: inline-block;
}
</style>

<script>
import * as imported from "./external.js";
export default {
  data() {
    return {
      name: "Javascript - ES6"
    };
  },

  methods: {
    abc() {
      console.log(imported); // whole js file as a object
      console.log(imported.keyValue); // get value of keyValue
      imported.test();
      //console.log(imported.test());
    }
  }
};
</script>
