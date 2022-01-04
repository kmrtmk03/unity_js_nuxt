<template lang="pug">
  .opening(v-if="isShow")
    .checkSound
      .inner
        p サウンドをONにしますか？
        ul
          li(@click="clickOn()") ON
          li(@click="clickOff()") OFF
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },

  methods: {

    clickOn() {
      this.closeOpening()
    },

    clickOff() {
      this.closeOpening()
    },

    closeOpening() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .opening {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ccc;
    z-index: 1000;

    .checkSound {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      .inner {
        p {
          font-size: 24px;
        }

        ul {
          display: flex;
          justify-content: center;
          margin-top: 10px;

          li {
            padding: 10px 40px;
            font-weight: bold;
            border-radius: 100px;
            border: 2px solid #333;

            &:first-child {
              margin-right: 10px;
              background-color: #fff;
            }

            &:last-child {
              background-color: #ccc;
            }

            &:hover {
              $_color: #333;
              cursor: pointer;
              background-color: $_color;
              border-color: $_color;
              color: #fff;
              transition: 0.2s;
            }
          }
        }
      }
    }
  }
</style>
