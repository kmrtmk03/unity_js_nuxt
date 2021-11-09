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
        win_h: null
      }
    },

    mounted() {
      this.InitUnity()
    },

    methods: {
      InitUnity() {
        this.win_w = window.innerWidth
        this.win_h = window.innerHeight

        var container = document.querySelector("#unity-container");
        var canvas = document.querySelector("#unity-canvas");
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
        var loaderUrl = buildUrl + "/unity_js.loader.js";
        var config = {
          dataUrl: buildUrl + "/unity_js.data.unityweb",
          frameworkUrl: buildUrl + "/unity_js.framework.js.unityweb",
          codeUrl: buildUrl + "/unity_js.wasm.unityweb",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "unity_js_temp",
          productVersion: "0.1",
          showBanner: unityShowBanner,
        };

        if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
          container.className = "unity-mobile";
          // Avoid draining fillrate performance on mobile devices,
          // and default/override low DPI mode on mobile browsers.
          config.devicePixelRatio = 1;
          unityShowBanner('WebGL builds are not supported on mobile devices.');
        } else {
          canvas.style.width = this.win_w + "px";
          canvas.style.height = this.win_h + "px";
        }
        loadingBar.style.display = "block";

        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
          createUnityInstance(canvas, config, (progress) => {
            progressBarFull.style.width = 100 * progress + "%";
          }).then((unityInstance) => {
            loadingBar.style.display = "none";
          }).catch((message) => {
            alert(message);
          });
        };
        document.body.appendChild(script);
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
