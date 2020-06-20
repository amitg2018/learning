<template>
  <div>
    <h1>{{ name }}</h1>
    <img
      alt="Vue logo"
      src="../../../assets/images/logo.png"
      style="max-width: 50px"
    />
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9M4XKi25I2M"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
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
      name: "Javascript Basic"
    };
  },
  methods: {}
};
</script>
