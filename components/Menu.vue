<template lang="pug">
  .menu
    .inner(v-if="isDisplay")
</template>

<script>

  export default {
    data() {
      return {
        isDisplay: false
      }
    }
  }

</script>

<style lang="scss" scoped>
  .menu {
    .inner {
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.85);
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
</style>
