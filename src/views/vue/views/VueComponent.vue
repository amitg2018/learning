<template>
  <div>
    <h1>{{ heading }}</h1>
    <div style="margin-top: 10px; margin-bottom: 50px;">
      <h3>Name Casing</h3>
      <ul>
        You have two options when defining component names:
      </ul>
      <li>- PascalCase - MyComponentName</li>
      <li>
        - Kebab-case - my-component-name <br />
        when you call this
      </li>
      <li>
        Prop names should always use camelCase during declaration <br />
        <code> props: { greetingText: String } </code>
      </li>
      <li>
        always use <strong>kebab-case</strong> for <strong>event names</strong>.
      </li>
    </div>

    <count-increase type="default" size="mini" style="margin-bottom: 5px;" />
    <count-increase type="primary" size="small" style="margin-bottom: 5px;" />
    <count-increase type="success" size="large" style="margin-bottom: 5px;" />
    <div style="margin-top: 50px; margin-bottom: 50px;">
      <list-creater
        v-for="employee of employees"
        :key="employee"
        :name="employee"
        style="background: #f2f2f2"
      >
      </list-creater>
    </div>
    <div style="margin-bottom: 50px;">
      <list-creater
        v-for="teacher of teachers"
        :key="teacher"
        :name="teacher"
        style="background: #fcfcfc"
      >
      </list-creater>
    </div>
    <div style="margin-top: 50px;">
      <!-- Types of Registration of components  -->
      There are two
      <strong>types of component registration: global and local</strong>. So
      far, <strong>we’ve only registered components globally</strong>, using
      <code>
        Vue.component: Vue.component('my-component-name', { // ... options ...
        })
      </code>
      <strong>
        Globally registered components can be used in the template of any root
        Vue
      </strong>
      instance (new Vue) created afterwards – and even inside all subcomponents
      of that Vue instance’s component tree. full guide on
      <a
        href="https://vuejs.org/v2/guide/components-registration.html"
        target="_blank"
        >Component Registration</a
      >.
    </div>
    <div style="margin-top: 50px;">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
</style>

<script>
import CountIncrease from "../component/CountIncrease";
import ListCreater from "../component/ListCreater";
import TabPosts from "../component/TabPost";
import TabArchive from "../component/TabArchive";
export default {
  components: { CountIncrease, ListCreater, TabPosts, TabArchive },
  data() {
    return {
      heading: "Vue Component",
      employees: ["Amit", "Pradeep", "Abhishek", "Prashant", "Bushan"],
      teachers: ["Shikha", "Malini", "Rekha", "Gyan", "Pradeep"],
      currentTab: "Posts",
      tabs: ["Posts", "Archive"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },
  methods: {}
};
</script>
