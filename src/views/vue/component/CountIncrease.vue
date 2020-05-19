<template>
  <div>
    <el-button :type="type" :size="size" @click.prevent="count++">
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
  }
};
</script>
