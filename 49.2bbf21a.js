(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{289:function(e,t,a){"use strict";a.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-tag",{attrs:{closable:""}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"success",closable:""}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"info",closable:""}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"warning",closable:""}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"danger",closable:""}},[e._v("Aex UI")])],1)},staticRenderFns:[]},{}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-tag",[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{size:"medium"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{size:"small"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{size:"mini"}},[e._v("Aex UI")])],1)},staticRenderFns:[]},{}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{marginBottom:"20px"}},[t("aex-tag",{attrs:{effect:"plain"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"success",effect:"plain"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"info",effect:"plain"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"warning",effect:"plain"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"danger",effect:"plain"}},[e._v("Aex UI")])],1),e._v(" "),t("div",[t("aex-tag",{attrs:{effect:"dark"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"success",effect:"dark"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"info",effect:"dark"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"warning",effect:"dark"}},[e._v("Aex UI")]),e._v(" "),t("aex-tag",{attrs:{type:"danger",effect:"dark"}},[e._v("Aex UI")])],1)])},staticRenderFns:[]},{}),"aex-demo3":n({render:function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[a._l(a.coins,function(t){return n("aex-tag",{key:t,staticStyle:{marginRight:"10px"},attrs:{closable:""},on:{close:function(e){a.handleClose(t)}}},[a._v("\n    "+a._s(t)+"\n")])}),a._v(" "),a.inputVisible?n("aex-input",{ref:"saveTagInput",staticStyle:{width:"100px"},attrs:{size:"small"},on:{blur:a.handleInputConfirm},nativeOn:{keyup:function(e){return"button"in e||!a._k(e.keyCode,"enter",13,e.key,"Enter")?a.handleInputConfirm(e):null}},model:{value:a.inputValue,callback:function(e){a.inputValue=e},expression:"inputValue"}}):n("aex-button",{attrs:{size:"small"},on:{click:a.showInput}},[a._v("Add Coin")])],2)},staticRenderFns:[]},{data:function(){return{coins:["BTC","ETH","GAT"],inputVisible:!1,inputValue:""}},methods:{handleClose:function(e){this.coins.splice(this.coins.indexOf(e),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.coins.push(e),this.inputVisible=!1,this.inputValue=""}}})}},a=a(1),n=Object(a.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Tag 标签")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-tag closable>Aex UI</aex-tag>\n<aex-tag type="success" closable>Aex UI</aex-tag>\n<aex-tag type="info" closable>Aex UI</aex-tag>\n<aex-tag type="warning" closable>Aex UI</aex-tag>\n<aex-tag type="danger" closable>Aex UI</aex-tag>\n')])])])],2),t("h3",[e._v("尺寸")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-tag>Aex UI</aex-tag>\n<aex-tag size='medium'>Aex UI</aex-tag>\n<aex-tag size='small'>Aex UI</aex-tag>\n<aex-tag size='mini'>Aex UI</aex-tag>\n")])])])],2),t("h3",[e._v("主题")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<div style='marginBottom:20px'>\n    <aex-tag effect='plain'>Aex UI</aex-tag>\n    <aex-tag type=\"success\" effect='plain'>Aex UI</aex-tag>\n    <aex-tag type=\"info\" effect='plain'>Aex UI</aex-tag>\n    <aex-tag type=\"warning\" effect='plain'>Aex UI</aex-tag>\n    <aex-tag type=\"danger\" effect='plain'>Aex UI</aex-tag>\n</div>\n<div>\n    <aex-tag effect='dark'>Aex UI</aex-tag>\n    <aex-tag type=\"success\" effect='dark'>Aex UI</aex-tag>\n    <aex-tag type=\"info\" effect='dark'>Aex UI</aex-tag>\n    <aex-tag type=\"warning\" effect='dark'>Aex UI</aex-tag>\n    <aex-tag type=\"danger\" effect='dark'>Aex UI</aex-tag>\n</div>\n")])])])],2),t("h3",[e._v("动态编辑标签")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-tag style=\'marginRight:10px\' :key="tag" v-for="tag in coins" closable @close="handleClose(tag)">\n    {{tag}}\n</aex-tag>\n<aex-input style=\'width:100px\' v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">\n</aex-input>\n<aex-button v-else size="small" @click="showInput">Add Coin</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                coins: [\'BTC\', \'ETH\', \'GAT\'],\n                inputVisible: false,\n                inputValue: \'\'\n            };\n        },\n        methods: {\n            handleClose(tag) {\n                this.coins.splice(this.coins.indexOf(tag), 1);\n            },\n\n            showInput() {\n                this.inputVisible = true;\n                this.$nextTick(_ => {\n                    this.$refs.saveTagInput.$refs.input.focus();\n                });\n            },\n\n            handleInputConfirm() {\n                let inputValue = this.inputValue;\n                if (inputValue) {\n                    this.coins.push(inputValue);\n                }\n                this.inputVisible = false;\n                this.inputValue = \'\';\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("Attributes")]),e._m(5),t("h3",[e._v("Events")]),e._m(6)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Tag } from 'aex-ui';\nVue.use(Tag)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("type")]),e._v(" 属性选择颜色体系: success/info/warning/danger, 也可以通过 "),t("code",[e._v("color")]),e._v(" 属性来自定义背景色。"),t("br"),t("code",[e._v("closable")]),e._v(" 属性添加关闭按钮, 通过close 时间自行处理关闭事件")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("size")]),e._v(" 属性设置大小: default /medium / small / mini")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("effect")]),e._v(" 属性改变主题: light(默认) /dark / plain")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("动态编辑标签可以通过点击标签关闭按钮后触发的 "),t("code",[e._v("close")]),e._v(" 事件来实现")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("type")]),t("td",[e._v("类型")]),t("td",[e._v("string")]),t("td",[e._v("success/info/warning/danger")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("closable")]),t("td",[e._v("是否可关闭")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disable-transitions")]),t("td",[e._v("是否禁用渐变动画")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("hit")]),t("td",[e._v("是否有边框描边")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("color")]),t("td",[e._v("背景色")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("尺寸")]),t("td",[e._v("string")]),t("td",[e._v("medium / small / mini")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("effect")]),t("td",[e._v("主题")]),t("td",[e._v("string")]),t("td",[e._v("dark / light / plain")]),t("td",[e._v("light")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("click")]),t("td",[e._v("点击 Tag 时触发的事件")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("关闭 Tag 时触发的事件")]),t("td",[e._v("—")])])])])}],!1,null,null,null);t.default=n.exports}}]);