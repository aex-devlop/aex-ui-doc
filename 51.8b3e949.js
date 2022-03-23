(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{258:function(n,t,e){"use strict";e.r(t);var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e,o=arguments[t];for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("div",[n("aex-button",{on:{click:function(n){t.show=!t.show}}},[t._v("点击查看效果")]),t._v(" "),n("div",{staticStyle:{display:"flex","margin-top":"20px",height:"100px"}},[n("transition",{attrs:{name:"aex-fade-in-linear"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"transition-box"},[t._v(".aex-fade-in-linear")])]),t._v(" "),n("transition",{attrs:{name:"aex-fade-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"transition-box"},[t._v(".aex-fade-in")])])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{show:!0}}}),"aex-demo1":o({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("div",[n("aex-button",{on:{click:function(n){t.show2=!t.show2}}},[t._v("点击查看效果")]),t._v(" "),n("div",{staticStyle:{display:"flex","margin-top":"20px",height:"100px"}},[n("transition",{attrs:{name:"aex-zoom-in-center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],staticClass:"transition-box"},[t._v(".aex-zoom-in-center")])]),t._v(" "),n("transition",{attrs:{name:"aex-zoom-in-top"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],staticClass:"transition-box"},[t._v(".aex-zoom-in-top")])]),t._v(" "),n("transition",{attrs:{name:"aex-zoom-in-bottom"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],staticClass:"transition-box"},[t._v(".aex-zoom-in-bottom")])])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{show2:!0}}}),"aex-demo2":o({render:function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("div",[[n("div",[n("aex-button",{on:{click:function(n){t.show3=!t.show3}}},[t._v("点击查看效果")]),t._v(" "),n("div",{staticStyle:{"margin-top":"20px",height:"200px"}},[n("aex-collapse-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}]},[n("div",{staticClass:"transition-box"},[t._v("aex-collapse-transition")]),t._v(" "),n("div",{staticClass:"transition-box"},[t._v("aex-collapse-transition")])])])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{show3:!0}}})}},e=e(1),o=Object(e.a)(o,function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[n._v("Transition 过渡动画")]),t("p",[n._v("Aex UI 过渡动画，可以直接使用。")]),t("h3",[n._v("fade 淡入淡出")]),t("demo-block",[t("div",[t("p",[n._v("提供 "),t("code",[n._v("aex-fade-in-linear")]),n._v(" 和 "),t("code",[n._v("aex-fade-in")]),n._v(" 两种效果。")])]),t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <aex-button @click="show = !show">点击查看效果</aex-button>\n\n        <div style="display: flex; margin-top: 20px; height: 100px;">\n            <transition name="aex-fade-in-linear">\n                <div v-show="show" class="transition-box">.aex-fade-in-linear</div>\n            </transition>\n            <transition name="aex-fade-in">\n                <div v-show="show" class="transition-box">.aex-fade-in</div>\n            </transition>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        data: () => ({\n            show: true\n        })\n    }\n<\/script>\n')])])])],2),t("h3",[n._v("zoom 缩放")]),t("demo-block",[t("div",[t("p",[n._v("提供 "),t("code",[n._v("aex-zoom-in-center")]),n._v(" ， "),t("code",[n._v("aex-zoom-in-top")]),n._v(" 和 "),t("code",[n._v("aex-zoom-in-bottom")]),n._v(" 三种效果。")])]),t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <aex-button @click="show2 = !show2">点击查看效果</aex-button>\n\n        <div style="display: flex; margin-top: 20px; height: 100px;">\n            <transition name="aex-zoom-in-center">\n                <div v-show="show2" class="transition-box">.aex-zoom-in-center</div>\n            </transition>\n\n            <transition name="aex-zoom-in-top">\n                <div v-show="show2" class="transition-box">.aex-zoom-in-top</div>\n            </transition>\n\n            <transition name="aex-zoom-in-bottom">\n                <div v-show="show2" class="transition-box">.aex-zoom-in-bottom</div>\n            </transition>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        data: () => ({\n            show2: true\n        })\n    }\n<\/script>\n')])])])],2),t("h3",[n._v("collapse 展开折叠")]),n._m(0),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <aex-button @click="show3 = !show3">点击查看效果</aex-button>\n\n        <div style="margin-top: 20px; height: 200px;">\n            <aex-collapse-transition>\n                <div v-show="show3">\n                    <div class="transition-box">aex-collapse-transition</div>\n                    <div class="transition-box">aex-collapse-transition</div>\n                </div>\n            </aex-collapse-transition>\n        </div>\n    </div>\n</template>\n\n<script>\n    export default {\n        data: () => ({\n            show3: true\n        })\n    }\n<\/script>\n')])])])],2),t("h3",[n._v("按需引入")]),n._m(1)],1)},[function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("p",[n._v("使用 "),t("code",[n._v("aex-collapse-transition")]),n._v(" 组件实现折叠展开效果。")])},function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[n._v("// fade/zoom 等\nimport 'aex-ui/lib/theme/base.css';\n// collapse 展开折叠\nimport CollapseTransition from 'aex-ui/lib/transitions/collapse-transition';\nimport Vue from 'vue'\n\nVue.component(CollapseTransition.name, CollapseTransition)\n")])])}],!1,null,null,null);t.default=o.exports}}]);