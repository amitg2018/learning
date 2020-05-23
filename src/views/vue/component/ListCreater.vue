<template>
  <div>
    <div class="list">{{ name }}</div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {
        lastName: "Gupta",
        firstName: "Amit"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.list {
  border: 1px solid #e2e2e2;
  background: #f7f7f7;
  padding: 5px 10px;
  margin: 5px 0;
}
</style>
