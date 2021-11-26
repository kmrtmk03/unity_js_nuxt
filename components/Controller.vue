<template lang="pug">
  .controller
    .inner
      .buttons
        span(ref="btnFront").front
</template>

<script>
  export default {

    data() {
      return {
        pressed: false
      }
    },

    mounted() {
      this.$refs.btnFront.addEventListener('touchstart', () => {
        this.pressed = true
        this.CallWalkFront()
      })

      this.$refs.btnFront.addEventListener('mouseup', () => {
        this.pressed = false
      })
    },

    methods: {
      CallWalkFront() {
        window.unityInstance.WalkFront()
        if(this.pressed) {
          setTimeout(()=> {
            this.CallWalkFront()
          }, 20)
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  .controller {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;

    display: none;


    .inner {
      .buttons {
        width: 100%;
        height: 100px;

        .front {
          display: block;
          background-color: red;
          height: 100px;
          width: 100px;
        }
      }
    }
  }
</style>
