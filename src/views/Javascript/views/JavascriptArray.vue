<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Javascript Array",
      commonOperations: false,
      increaseLength: false,
      arrayTypes: false
    };
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this dialog?")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
  }
};
</script>
