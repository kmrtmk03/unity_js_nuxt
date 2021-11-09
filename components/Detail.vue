<template lang="pug">
  .detail
    transition(name="fade")
      .inner(v-if="isShow")
        .content
          .head
            .head_text
              h2 <span class="small">No.{{displayNum+1}}</span> {{contents[displayNum].title}}

          img(src="~/assets/img/art-0.png")

          p(v-html="contents[displayNum].desc")

</template>

<script>
  export default {

    data() {
      return {
        isShow: false,
        displayNum: 0,
        contents: [
          {
            title: "後ろに向かって走る人",
            desc: "無料アセットのアニメーションパックに入っていた<br>「後ろ走りをする人」です。<br>後方を確認しない潔さに感心するも、使い所がありません。"
          }
        ]
      }
    },

    mounted() {
      window.unityMethods = {}

      window.unityMethods.displayModal = this.displayModal
      window.unityMethods.hiddenModal = this.hiddenModal
    },

    methods: {
      displayModal() {
        this.isShow = true
      },

      hiddenModal() {
        this.isShow = false
      }
    }

  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }

  .detail {
  }

  .inner {
    width: 540px;
    height: 100vh;
    background-color: #fff;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;

    &.fade-enter, &.fade-leave-to {
      left: -40vw;
    }
  }

  .content {
    position: relative;
    background-color: white;
    height: 100vh;
    margin: 0 auto;
    // overflow-y: scroll;
    padding: 50px 40px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transform: scale(1.1);
      transition: 0.5s;
    }

  }

  .head {
    margin-bottom: 20px;

    &_text {
      text-align: center;

      h2 {
        font-size: 32px;
        margin-bottom: 10px;

        .small {
          font-size: 18px;
        }
      }
    }
  }

  img {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    line-height: 2;
  }
</style>
