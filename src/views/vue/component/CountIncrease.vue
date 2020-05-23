<template>
  <div>
    <el-button :type="type" :size="size" @click="counter()">
      Click {{ count }} times..
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "mini"
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    counter() {
      return this.count++;
    }
  }
};
</script>
