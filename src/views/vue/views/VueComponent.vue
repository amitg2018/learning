<template>
  <div>
    <h1>{{ heading }}</h1>
    <count-increase type="default" size="mini" />
    <count-increase type="primary" size="small" />
    <count-increase type="success" size="large" />
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
      Vue.component: Vue.component('my-component-name', { // ... options ... })
      <strong>
        Globally registered components can be used in the template of any root
        Vue
      </strong>
      instance (new Vue) created afterwards – and even inside all subcomponents
      of that Vue instance’s component tree. full guide on Component
      Registration.
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
</style>

<script>
import CountIncrease from "../component/CountIncrease.vue";
import ListCreater from "../component/ListCreater.vue";
export default {
  components: { CountIncrease, ListCreater },
  data() {
    return {
      heading: "Vue Component",
      employees: ["Amit", "Pradeep", "Abhishek", "Prashant", "Bushan"],
      teachers: ["Shikha", "Malini", "Rekha", "Gyan", "Pradeep"]
    };
  },
  methods: {}
};
</script>
