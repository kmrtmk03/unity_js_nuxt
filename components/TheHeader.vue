<template lang="pug">
  .header
    .inner
      .left
        .logo
          h1 Unity_Nuxt
      .right
        .menu(@click="sampleCall")
          span.menu_bar
          span.menu_bar
          span.menu_bar
</template>

<script>

  export default {
    data() {
      return {}
    },

    methods: {
      sampleCall() {
        window.unityMethods.displayModalInt(0)
      }
    }
  }

</script>

<style lang="scss" scoped>
  .header {

    $mainColor: rgba(255, 255, 255, 0.5);

    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;

    .inner {
      width: 100%;
      background-color: rgba(0, 0, 0, 0);
      padding: 30px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {

      }

      .right {

      }

      .logo {
        h1 {
          font-size: 24px;
          color: $mainColor;
        }
      }

      .menu {
        width: 50px;
        height: 30px;
        position: relative;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
          transition: 0.4s;
        }

        &_bar {
          height: 3px;
          width: 100%;
          background-color: $mainColor;
          display: block;

          position: absolute;
          left: 0;

          &:nth-child(1) {
            top: 0;
          }

          &:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
          }

          &:nth-child(3) {
            bottom: 0;
          }
        }
      }
    }
  }
</style>
