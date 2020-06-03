<template>
  <div>
    <div>{{ count }}</div>
    <el-button :type="type" :size="size" @click="counter()">
      Click {{ addNum }} times..
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
    },
    addNum: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    counter() {
      this.count += this.addNum;
    }
  }
};
</script>
