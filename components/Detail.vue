<template lang="pug">
  .detail( :class="{isActive: isShow}" )
    transition(name="fade")
      .inner(v-if="isShow")
        .content
          .head
            .head_text
              h2 {{contents[displayNum].title}}

          img(:src='"~/assets/img/photo-" + displayNum + ".png"')

          .text
            p.camera 機材 ： {{contents[displayNum].camera}}

            p.place 撮影場所 ： {{contents[displayNum].place}}

            p.desc(v-html="contents[displayNum].desc")

</template>

<script>
  export default {

    data() {
      return {
        isShow: false,
        displayNum: 0,
        contents: [
          {
            title: "Photo-0",
            camera: "SONY RX100",
            place: "大阪 あびこ駅ホーム",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-1",
            camera: "SONY RX100",
            place: "大阪",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-2",
            camera: "SONY RX100",
            place: "大阪",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-3",
            camera: "SONY RX100",
            place: "大阪 布施駅周辺",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-4",
            camera: "FUJIFILM X-T2",
            place: "大阪 大阪城公園",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-5",
            camera: "Nikon D40",
            place: "大阪 自宅周辺",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-6",
            camera: "Nikon D40",
            place: "大阪 箕面の滝",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-7",
            camera: "FUJIFILM X-T2",
            place: "大阪 箕面の滝",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-8",
            camera: "Nikon D100",
            place: "京都 嵐山周辺",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-9",
            camera: "FUJIFILM X-T2",
            place: "大阪 万博記念公園",
            desc: "粒度荒目のモノクロームです"
          },
          {
            title: "Photo-10",
            camera: "FUJIFILM X-T2",
            place: "大阪",
            desc: "粒度荒目のモノクロームです"
          }
        ]
      }
    },

    mounted() {
      window.unityMethods = {}

      window.unityMethods.displayModal = this.displayModal
      window.unityMethods.hiddenModal = this.hiddenModal

      window.unityMethods.displayModalInt = this.displayModalInt

    },

    methods: {
      displayModal() {
        this.isShow = true
      },

      hiddenModal() {
        this.isShow = false
      },

      displayModalInt(_index) {
        this.displayNum = _index
        this.displayModal()
      }
    }

  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }

  .detail {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.8s;
    z-index: 999;

    &.isActive {
      background-color: rgba(0,0,0,0.5);
    }
  }

  .inner {
    width: 540px;
    height: 100vh;
    background-color: #fff;
    position: absolute;
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

  .text {
    p {
      font-size: 14px;
      line-height: 2;

      &.camera {
        margin-bottom: 10px;
      }

      &.place {
        margin-bottom: 10px;
      }
    }
  }

</style>
