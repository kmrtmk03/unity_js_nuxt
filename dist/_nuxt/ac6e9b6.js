(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{219:function(n,e,t){var content=t(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(98).default)("0ba3045e",content,!0,{sourceMap:!1})},225:function(n,e,t){"use strict";t(219)},226:function(n,e,t){var o=t(97)(!1);o.push([n.i,".opening[data-v-683a5cfd]{width:100vw;height:100vh;position:fixed;top:0;left:0;background-color:#ccc;z-index:1000}.opening.fade-leave-active[data-v-683a5cfd]{opacity:0;transition:1s}.opening.fade-leave-to[data-v-683a5cfd]{opacity:0}.opening .color[data-v-683a5cfd]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.opening .color.fade-enter-active[data-v-683a5cfd]{opacity:1;transition:1s}.opening .color.fade-leave-active[data-v-683a5cfd]{opacity:0;transition:1s}.opening .color.fade-enter[data-v-683a5cfd],.opening .color.fade-leave-to[data-v-683a5cfd]{opacity:0}.opening .color .inner p[data-v-683a5cfd]{font-size:24px}.opening .color .inner .items[data-v-683a5cfd]{display:flex;justify-content:center;margin-top:10px}.opening .color .inner .items .item[data-v-683a5cfd]{display:block;width:48px;height:48px;border-radius:50%;border:2px solid #333;margin-left:10px}.opening .color .inner .items .item[data-v-683a5cfd]:hover{cursor:pointer;border-color:#fff;transition:.3s}.opening .color .inner .items .item-1[data-v-683a5cfd]{margin-left:0;background-color:#00f}.opening .color .inner .items .item-2[data-v-683a5cfd]{background-color:#ff0}.opening .color .inner .items .item-3[data-v-683a5cfd]{background-color:green}.opening .color .inner .items .item-4[data-v-683a5cfd]{background-color:red}.opening .loading[data-v-683a5cfd]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.opening .loading.fade-leave-active[data-v-683a5cfd]{opacity:0;transition:1s}.opening .loading.fade-leave-to[data-v-683a5cfd]{opacity:0}.opening .loading .inner p[data-v-683a5cfd]{font-size:24px}.opening .checkSound[data-v-683a5cfd]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.opening .checkSound.fade-enter-active[data-v-683a5cfd]{opacity:1;transition:1s}.opening .checkSound.fade-leave-active[data-v-683a5cfd]{opacity:0;transition:1s}.opening .checkSound.fade-enter[data-v-683a5cfd],.opening .checkSound.fade-leave-to[data-v-683a5cfd]{opacity:0}.opening .checkSound .inner p[data-v-683a5cfd]{font-size:24px}.opening .checkSound .inner ul[data-v-683a5cfd]{display:flex;justify-content:center;margin-top:10px}.opening .checkSound .inner ul li[data-v-683a5cfd]{padding:10px 40px;font-weight:700;border-radius:100px;border:2px solid #333}.opening .checkSound .inner ul li[data-v-683a5cfd]:first-child{margin-right:10px;background-color:#fff}.opening .checkSound .inner ul li[data-v-683a5cfd]:last-child{background-color:#ccc}.opening .checkSound .inner ul li[data-v-683a5cfd]:hover{cursor:pointer;background-color:#333;border-color:#333;color:#fff;transition:.2s}",""]),n.exports=o},250:function(n,e,t){"use strict";t.r(e);var o=t(10),c=(t(53),t(68),t(15),{data:function(){return{isShow:!0,isLoading:!0,isColor:!1,isCheckSound:!1}},computed:{isLoad:function(){return this.$store.getters.isEndLoad}},watch:{isLoad:function(){var n=this;this.$nextTick((function(){n.isLoading=!1,setTimeout((function(){n.isColor=!0}),1e3)}))}},methods:{closeColor:function(n){var e=this;this.$store.commit("playerColor",n),this.isColor=!1,setTimeout((function(){e.isCheckSound=!0}),1e3)},onSoundYes:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.closeSound();case 2:window.unityInstance.PlaySound();case 3:case"end":return e.stop()}}),e)})))()},onSoundNo:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.closeSound();case 2:case"end":return e.stop()}}),e)})))()},closeSound:function(){var n=this;return new Promise((function(e,t){n.isCheckSound=!1,window.unityInstance.PlayerColor(),setTimeout((function(){n.closeOpening(),e()}),1500)}))},closeOpening:function(){this.isShow=!1}}}),r=(t(225),t(42)),component=Object(r.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.isShow,expression:"isShow"}],staticClass:"opening"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.isLoading,expression:"isLoading"}],staticClass:"loading"},[t("div",{staticClass:"inner"},[t("p",[n._v("読み込み中...")])])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.isColor,expression:"isColor"}],staticClass:"color"},[t("div",{staticClass:"inner"},[t("p",[n._v("操作キャラクターの色を選択してください")]),t("div",{staticClass:"items"},n._l(4,(function(e){return t("span",{key:e,class:"item item-"+e,on:{click:function(t){return n.closeColor(e)}}})})),0)])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.isCheckSound,expression:"isCheckSound"}],staticClass:"checkSound"},[t("div",{staticClass:"inner"},[t("p",[n._v("サウンドを再生しますか？")]),t("ul",[t("li",{on:{click:function(e){return n.onSoundYes()}}},[n._v("はい")]),t("li",{on:{click:function(e){return n.onSoundNo()}}},[n._v("いいえ")])])])])])],1)])}),[],!1,null,"683a5cfd",null);e.default=component.exports}}]);