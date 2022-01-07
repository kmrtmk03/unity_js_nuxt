<!-- Please remove this file from your project -->
<template lang="pug">
  .tutorial
    #unity-container.unity-desktop
      canvas#unity-canvas(:width="win_w" :height="win_h")
      #unity-loading-bar
        #unity-logo
        #unity-progress-bar-empty
          #unity-progress-bar-full
      #unity-warning
</template>


<script>
  export default {
    data() {
      return {
        win_w: null,
        win_h: null,
        myCanvas: null,
        unityInstance: null
      }
    },

    mounted() {
      window.unityInstance = {}

      this.InitUnity()

      window.addEventListener('resize', () => {
        this.ResizeWindow()
      })

      window.unityInstance.WalkFront = this.WalkFront
      window.unityInstance.PlaySound = this.PlaySound
      window.unityInstance.PlayerColor = this.PlayerColor
    },

    methods: {
      InitUnity() {
        this.win_w = window.innerWidth
        this.win_h = window.innerHeight

        var container = document.querySelector("#unity-container");
        this.myCanvas = document.querySelector("#unity-canvas");
        var loadingBar = document.querySelector("#unity-loading-bar");
        var progressBarFull = document.querySelector("#unity-progress-bar-full");
        var warningBanner = document.querySelector("#unity-warning");

        function unityShowBanner(msg, type) {
          function updateBannerVisibility() {
            warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
          }
          var div = document.createElement('div');
          div.innerHTML = msg;
          warningBanner.appendChild(div);
          if (type == 'error') div.style = 'background: red; padding: 10px;';
          else {
            if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
            setTimeout(function() {
              warningBanner.removeChild(div);
              updateBannerVisibility();
            }, 5000);
          }
          updateBannerVisibility();
        }

        var buildUrl = "Build";
        var loaderUrl = buildUrl + "/mission-photon.loader.js";
        var config = {
          dataUrl: buildUrl + "/mission-photon.data",
          frameworkUrl: buildUrl + "/mission-photon.framework.js",
          codeUrl: buildUrl + "/mission-photon.wasm",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "mission-photon_temp",
          productVersion: "0.1",
          showBanner: unityShowBanner,
        };

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          container.className = "unity-mobile";
          config.devicePixelRatio = 1;
          unityShowBanner('WebGL builds are not supported on mobile devices.');
        } else {
          this.myCanvas.style.width = this.win_w + "px";
          this.myCanvas.style.height = this.win_h + "px";
        }
        loadingBar.style.display = "block";

        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
          createUnityInstance(this.myCanvas, config, (progress) => {
            progressBarFull.style.width = 100 * progress + "%";
          }).then((unityInstance) => {
            loadingBar.style.display = "none";

            this.unityInstance = unityInstance

            setTimeout(() => {
              //Uniyの読み込みが完了した時の処理をここに書く
              this.$store.commit('completeLoad')
            }, 3000)

          }).catch((message) => {
            alert(message);
          });
        };
        document.body.appendChild(script);
      },

      ResizeWindow() {
        this.win_w = window.innerWidth
        this.win_h = window.innerHeight

        this.myCanvas.style.width = this.win_w + "px";
        this.myCanvas.style.height = this.win_h + "px";
      },

      WalkFront() {
        this.unityInstance.SendMessage('shadow', 'WalkFront')
      },

      PlaySound() {
        this.unityInstance.SendMessage('3D_Audio', 'PlaySound')
      },

      PlayerColor() {
        this.unityInstance.SendMessage('myCharacter', 'ChangeMaterial', this.$store.getters['playerColor'])
      },

      SampleHoge() {
        console.log("hoge-hoge")
      }
    },

  }
</script>


<style lang="scss" scoped>
  .tutorial {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
