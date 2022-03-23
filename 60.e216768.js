(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{308:function(t,e,o){"use strict";o.r(e);var a={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o,a=arguments[e];for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t})({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-row",{staticStyle:{marginBottom:"20px"},attrs:{gutter:20}},[e("aex-col",{attrs:{span:4,offset:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"top-start"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("top-start")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"top","visible-arrow":!1}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("top")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"top-end",effect:"light"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("top-end")])],1)],1)],1),t._v(" "),e("aex-row",{staticStyle:{marginBottom:"20px"},attrs:{gutter:20}},[e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"left-start"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("left-start")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4,offset:12}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"right-start"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("rigth-start")])],1)],1)],1),t._v(" "),e("aex-row",{staticStyle:{marginBottom:"20px"},attrs:{gutter:20}},[e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"left"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("left")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4,offset:12}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"right"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("right")])],1)],1)],1),t._v(" "),e("aex-row",{staticStyle:{marginBottom:"20px"},attrs:{gutter:20}},[e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"left-end"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("left-end")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4,offset:12}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"right-end"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("right-end")])],1)],1)],1),t._v(" "),e("aex-row",{staticStyle:{marginBottom:"20px"},attrs:{gutter:20}},[e("aex-col",{attrs:{span:4,offset:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"bottom-start"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("bottom-start")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"bottom"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("bottom")])],1)],1),t._v(" "),e("aex-col",{attrs:{span:4}},[e("aex-tooltip",{attrs:{content:"提示文字",placement:"bottom-end"}},[e("aex-button",{attrs:{block:"",size:"medium"}},[t._v("bottom-end")])],1)],1)],1)]],2)},staticRenderFns:[]},{})}},o=o(1),a=Object(o.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Tooltip 文字提示")]),e("p",[t._v("用于展示鼠标 hover 时的提示信息, 组件提供了 9 种不同方向的展示方式")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row :gutter='20' style='marginBottom:20px'>\n        <aex-col :span='4' :offset='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"top-start\">\n                <aex-button block size='medium'>top-start</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"top\" :visible-arrow='false'>\n                <aex-button block size='medium'>top</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"top-end\" effect='light'>\n                <aex-button block size='medium'>top-end</aex-button>\n            </aex-tooltip>\n        </aex-col>\n    </aex-row>\n    <aex-row :gutter='20' style='marginBottom:20px'>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"left-start\">\n                <aex-button block size='medium'>left-start</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4' :offset='12'>\n            <aex-tooltip content=\"提示文字\" placement=\"right-start\">\n                <aex-button block size='medium'>rigth-start</aex-button>\n            </aex-tooltip>\n        </aex-col>\n    </aex-row>\n    <aex-row :gutter='20' style='marginBottom:20px'>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"left\">\n                <aex-button block size='medium'>left</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4' :offset='12'>\n            <aex-tooltip content=\"提示文字\" placement=\"right\">\n                <aex-button block size='medium'>right</aex-button>\n            </aex-tooltip>\n        </aex-col>\n    </aex-row>\n    <aex-row :gutter='20' style='marginBottom:20px'>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"left-end\">\n                <aex-button block size='medium'>left-end</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4' :offset='12'>\n            <aex-tooltip content=\"提示文字\" placement=\"right-end\">\n                <aex-button block size='medium'>right-end</aex-button>\n            </aex-tooltip>\n        </aex-col>\n    </aex-row>\n    <aex-row :gutter='20' style='marginBottom:20px'>\n        <aex-col :span='4' :offset='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"bottom-start\">\n                <aex-button block size='medium'>bottom-start</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"bottom\">\n                <aex-button block size='medium'>bottom</aex-button>\n            </aex-tooltip>\n        </aex-col>\n        <aex-col :span='4'>\n            <aex-tooltip content=\"提示文字\" placement=\"bottom-end\">\n                <aex-button block size='medium'>bottom-end</aex-button>\n            </aex-tooltip>\n        </aex-col>\n    </aex-row>\n</template>\n")])])])],2),e("h3",[t._v("参数")]),t._m(2)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Tooltip } from 'aex-ui';\nVue.use(Tooltip)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("使用 "),e("code",[t._v("content")]),t._v(" 属性来决定 "),e("code",[t._v("hover")]),t._v(" 时的提示信息。"),e("br"),t._v("\n由 "),e("code",[t._v("placement")]),t._v(" 属性决定展示效果： "),e("code",[t._v("placement")]),t._v(" 属性值为： "),e("code",[t._v("方向-对齐位置")]),t._v(" ；四个方向： "),e("code",[t._v("top")]),t._v(" 、 "),e("code",[t._v("left")]),t._v(" 、 "),e("code",[t._v("right")]),t._v(" 、 "),e("code",[t._v("bottom")]),t._v(" ；三种对齐位置： "),e("code",[t._v("start")]),t._v(" , "),e("code",[t._v("end")]),t._v(" ，默认为空。如 "),e("code",[t._v('placement="left-end"')]),t._v(" ，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("effect")]),e("td",[t._v("默认提供的主题")]),e("td",[t._v("String")]),e("td",[t._v("dark/light")]),e("td",[t._v("dark")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("显示的内容，也可以通过 "),e("code",[t._v("slot#content")]),t._v(" 传入 DOM")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("Tooltip 的出现位置")]),e("td",[t._v("String")]),e("td",[t._v("top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end")]),e("td",[t._v("bottom")])]),e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("状态是否可见")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Tooltip 是否可用")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("offset")]),e("td",[t._v("出现位置的偏移量")]),e("td",[t._v("Number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("transition")]),e("td",[t._v("定义渐变动画")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("el-fade-in-linear")])]),e("tr",[e("td",[t._v("visible-arrow")]),e("td",[t._v("是否显示 Tooltip 箭头")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("open-delay")]),e("td",[t._v("延迟出现，单位毫秒")]),e("td",[t._v("Number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("manual")]),e("td",[t._v("手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("为 Tooltip 的 popper 添加类名")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("enterable")]),e("td",[t._v("鼠标是否可进入到 tooltip 中")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])])])])}],!1,null,null,null);e.default=a.exports}}]);