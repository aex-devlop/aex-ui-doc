(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{329:function(e,t,n){"use strict";n.r(t);var i={name:"component-doc",components:{"aex-demo0":(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,i=arguments[t];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e})({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e._clickoutside,expression:"_clickoutside"}],staticStyle:{border:"1px solid #ccc",height:"100px",width:"200px",textAlign:"center",lineHeight:"100px"},on:{click:e._clickinside}},[e._v("\n        点击元素里面\n    ")])]],2)},staticRenderFns:[]},{data:function(){return{count:10}},methods:{_clickinside:function(){this.$message("你点击元素里面了")},_clickoutside:function(){this.$message.warning("你点击到元素【外面】了")}}})}},n=n(0),i=Object(n.a)(i,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Clickoutside 点击元素外面触发的事件")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <div style='border:1px solid #ccc;height:100px;width:200px;textAlign:center;lineHeight:100px' @click='_clickinside' v-clickoutside=\"_clickoutside\">\n        点击元素里面\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                count: 10\n            }\n        },\n        methods: {\n            _clickinside() {\n                this.$message('你点击元素里面了')\n            },\n            _clickoutside() {\n                this.$message.warning('你点击到元素【外面】了')\n            }\n        }\n    }\n<\/script>\n")])])])],2)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Clickoutside } from 'aex-ui';\nVue.use(Clickoutside)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("在要绑定的元素上添加 "),t("code",[e._v("v-clickoutside")]),e._v(" ，并赋值相应的方法，。")])}],!1,null,null,null);t.default=i.exports}}]);