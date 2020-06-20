<template>
  <div>
    <h1>{{ name }}</h1>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/e--K9kCz-v0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KgsdpYgu9RA"
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
      name: "Object"
    };
  }
};
</script>
