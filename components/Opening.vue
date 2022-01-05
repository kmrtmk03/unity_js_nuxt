<template lang="pug">
  transition(name="fade")
    .opening(v-show="isShow")
      transition(name="fade")
        .loading(v-show="isLoading")
          .inner
            p 読み込み中...
      transition(name="fade")
        .color(v-show="isColor")
          .inner
            p 操作キャラクターの色を選択してください
            .items
              span(v-for="n in 4" :key="n" :class="'item item-' + n" @click="closeColor(n-1)")
      transition(name="fade")
        .checkSound(v-show="isCheckSound")
          .inner
            p サウンドを再生しますか？
            ul
              li(@click="onSoundYes()") はい
              li(@click="onSoundNo()") いいえ
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isLoading: true,
      isColor: false,
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
          this.isColor = true
        }, 1000)
      })
    }
  },

  methods: {

    closeColor(_color) {
      this.$store.commit('playerColor', _color)
      this.isColor = false
      setTimeout(() => {
        this.isCheckSound = true
      }, 1000)
    },

    async onSoundYes() {
      await this.closeSound()

      window.unityInstance.PlaySound()
    },

    async onSoundNo() {
      await this.closeSound()
    },

    closeSound() {
      return new Promise((resolve, reject) => {
        // サウンド選択をフェードアウト
        this.isCheckSound = false

        // プレイヤーの色を変更
        window.unityInstance.PlayerColor()

        // サウンド選択のフェードアウト待ち
        setTimeout(() => {
          this.closeOpening()
          resolve()
        }, 1500)
      })
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

    .color {
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

        .items {
          display: flex;
          justify-content: center;
          margin-top: 10px;

          .item {
            $_size: 48px;
            display: block;
            width: $_size;
            height: $_size;
            border-radius: 50%;
            border: 2px solid #333;
            margin-left: 10px;

            &:hover {
              cursor: pointer;
              border-color: #fff;
              transition: 0.3s;
            }

            &-1 {
              margin-left: 0;
              background-color: blue;
            }

            &-2 {
              background-color: yellow;
            }

            &-3 {
              background-color: green;
            }

            &-4 {
              background-color: red;
            }

          }
        }
      }
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
