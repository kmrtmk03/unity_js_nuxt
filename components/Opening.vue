<template lang="pug">
  transition(name="fade")
    .opening(v-show="isShow")
      transition(name="fade")
        .loading(v-show="isLoading")
          .inner
            p 読み込み中...
      transition(name="fade")
        .checkSound(v-show="isCheckSound")
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
      isShow: true,
      isLoading: true,
      isCheckSound: false
    }
  },

  computed: {
    isLoad: function() {
      return this.$store.getters['isEndLoad']
    }
  },

  watch: {
    isLoad() {
      this.$nextTick(() => {
        this.isLoading = false
        setTimeout(() => {
          this.isCheckSound = true
        }, 1000)
      })
    }
  },

  methods: {

    clickOn() {
      this.isCheckSound = false
      setTimeout(() => {
        this.closeOpening()
        window.unityInstance.PlaySound()
      }, 1500)
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

  @mixin center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .opening {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ccc;
    z-index: 1000;

    &.fade-leave-active {
      opacity: 0;
      transition: 1s;
    }

    &.fade-leave-to {
      opacity: 0;
    }

    .loading {
      @include center();

      &.fade-leave-active {
        opacity: 0;
        transition: 1s;
      }

      &.fade-leave-to {
        opacity: 0;
      }

      .inner {
        p {
          font-size: 24px;
        }
      }
    }

    .checkSound {
      @include center();

      &.fade-enter-active {
        opacity: 1;
        transition: 1s;
      }

      &.fade-leave-active {
        opacity: 0;
        transition: 1s;
      }

      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }

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
