(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{312:function(t,e,n){"use strict";n.r(e);var o={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t})({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{attrs:{plain:!0},on:{click:t.open}},[t._v("打开消息提示")])]],2)},staticRenderFns:[]},{methods:{open:function(){this.$toast("这是一条消息提示")}}})}},n=n(1),o=Object(n.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Toast 提示")]),e("p",[t._v("常用于主动操作后的反馈提示")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基本用法")]),e("p",[t._v("从顶部出现，3 秒后自动消失")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-button :plain="true" @click="open">打开消息提示</aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$toast(\'这是一条消息提示\');\n            },\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("options 参数")]),t._m(1)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Toast } from 'aex-ui';\nVue.prototype.$toast = Toast;\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("message")]),e("td",[t._v("消息文字")]),e("td",[t._v("string / VNode")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("dangerouslyUseHTMLString")]),e("td",[t._v("是否将 message 属性作为 HTML 片段处理")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("customClass")]),e("td",[t._v("自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("duration")]),e("td",[t._v("显示时间, 毫秒。设为 0 则不会自动关闭")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("3000")])]),e("tr",[e("td",[t._v("showClose")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])}],!1,null,null,null);e.default=o.exports}}]);