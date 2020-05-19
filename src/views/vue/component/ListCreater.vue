<template>
  <div class="list" :bgcolor="bgcolor">{{ name }}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    bgcolor: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.list {
  border: 1px solid #e2e2e2;
  background: #f7f7f7f;
  padding: 5px 10px;
  margin: 5px 0;
}
</style>
