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
    <!-- Img call from API -->
    <img :src="imgSrc" :title="imgTitle" />

    <!-- 
    <div class="mar-t20"
    Notes: 1. v-cloak directive ka use tab kerte hai jab hum refresh kerte hai
    to one time hidden div bhi show hoti hai. css ========= [v-cloak] { display:
    none;} 2. api.nasa.gov - for API
    <img src="../assets/images/vue-api.png" style="max-width: 100%" />
    </div>
     -->
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
</style>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
  data() {
    return {
      name: "Vue Learn",
      email: "amit@gmail.com",
      show: true,
      imgSrc: "",
      imgTitle: ""
    };
  },
  created: function() {
    this.fetchApod();
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    fetchApod: function() {
      let apiKey = "lGyrcn6XzXfpeQYXFS6wsp03OScHdiN9jdRsHbZ2";
      let url = "https://api.nasa.gov/planetary/apod?api_key" + apiKey;
      axios.get(url).then(function(response) {
        this.imgSrc = response.data.url;
        this.imgTitle = response.data.title;
      });
    }
  }
};
</script>
