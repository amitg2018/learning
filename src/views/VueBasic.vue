<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- shortcut directive instead of v-bind:value = "email" -->
    <input :value="email" />
    <input v-model="email" />
    {{ email }}
    <!-- I want to create one form which one add every time email address push on our given div block -->

    <!-- Show hide 1 -->
    <div class="mar-t20" v-if="show">Hello Learner</div>
    <div class="mar-t20" v-if="!show">Thanks Bro</div>
    <!-- shortcut method instead of v-on:click="toggle" -->
    <button @click="toggle">Show/hide- both from v-if</button>

    <!-- Show Hide 2 -->
    <div class="mar-t20" v-if="show">Hello Learner</div>
    <div class="mar-t20" v-else>Thanks Bro</div>
    <button @click.prevent="toggle">Show/hide v-if and else</button>

    <!-- Show Hide 3  when we use v-show directive then block only display none and block but all data have in DOM so this is not useful for -->
    <div class="mar-t20" v-show="show">Hello Learner</div>
    <div class="mar-t20" v-cloak v-show="!show">Thanks Bro</div>
    <button @click="toggle">Show/hide v-show</button>
    <!-- 
    <div class="mar-t20"
    Notes: 
    1. v-cloak directive ka use tab kerte hai jab hum refresh kerte hai
    to one time hidden div bhi show hoti hai. css ========= [v-cloak] { display:
    none;} 
    </div>
     -->
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      name: "Vue Basic",
      email: "amit@gmail.com",
      show: true
    };
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
};
</script>
