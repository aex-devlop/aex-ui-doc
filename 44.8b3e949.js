(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{269:function(t,e,a){"use strict";a.r(e);var v={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,v=arguments[e];for(a in v)Object.prototype.hasOwnProperty.call(v,a)&&(t[a]=v[a])}return t})({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",[t("aex-col",{attrs:{span:3}},[t("aex-switch",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("aex-col",{attrs:{span:3}},[t("aex-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",showInnerText:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("aex-col",{attrs:{span:3}},[t("aex-switch",{attrs:{"show-inner-icon":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("aex-col",{attrs:{span:3}},[t("aex-switch",{attrs:{disabled:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("aex-col",{attrs:{span:3}},[t("aex-switch",{attrs:{"active-text":"打开","inactive-text":"关闭"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),t("aex-col",{attrs:{span:3}},[t("aex-switch",{attrs:{"active-icon-class":"aex-icon-invite","inactive-icon-class":"aex-icon-huoli"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{value:!0}}})}},a=a(1),v=Object(a.a)(v,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Switch 开关")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基本用法")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-row>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" />\n    </aex-col>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" active-color=\"#13ce66\" inactive-color=\"#ff4949\" showInnerText />\n    </aex-col>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" show-inner-icon />\n    </aex-col>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" disabled />\n    </aex-col>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" active-text='打开' inactive-text='关闭' />\n    </aex-col>\n    <aex-col :span='3'>\n        <aex-switch v-model=\"value\" active-icon-class='aex-icon-invite' inactive-icon-class='aex-icon-huoli' />\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: true\n            }\n        }\n    };\n<\/script>\n")])])])],2),e("h3",[t._v("Attributes")]),t._m(1),e("h3",[t._v("Events")]),t._m(2),e("h3",[t._v("Methods")]),t._m(3)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Switch } from 'aex-ui';\nVue.use(Switch)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("switch 的宽度（像素）")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("40")])]),e("tr",[e("td",[t._v("show-inner-icon")]),e("td",[t._v("内部展示的图标")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-inner-text")]),e("td",[t._v("内部展示的文字（和show-inner-icon 只能选其一）")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("active-icon-class")]),e("td",[t._v("switch 打开时所显示图标的类名，设置此项会忽略 "),e("code",[t._v("active-text")])]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("inactive-icon-class")]),e("td",[t._v("switch 关闭时所显示图标的类名，设置此项会忽略 "),e("code",[t._v("inactive-text")])]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("active-text")]),e("td",[t._v("switch 打开时的文字描述")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("inactive-text")]),e("td",[t._v("switch 关闭时的文字描述")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("active-value")]),e("td",[t._v("switch 打开时的值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("inactive-value")]),e("td",[t._v("switch 关闭时的值")]),e("td",[t._v("boolean / string / number")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("active-color")]),e("td",[t._v("switch 打开时的背景色")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#409EFF")])]),e("tr",[e("td",[t._v("inactive-color")]),e("td",[t._v("switch 关闭时的背景色")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("#C0CCDA")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("switch 对应的 name 属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("validate-event")]),e("td",[t._v("改变 switch 状态时是否触发表单的校验")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("switch 状态发生变化时的回调函数")]),e("td",[t._v("新状态的值")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 Switch 获取焦点")]),e("td",[t._v("-")])])])])}],!1,null,null,null);e.default=v.exports}}]);