(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{308:function(t,e,o){"use strict";o.r(e);var r={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o,r=arguments[e];for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t})({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:4}},[t("aex-popover",{attrs:{placement:"top-start",title:"标题",width:"100",trigger:"hover",content:"Popover 使用hover方式触发"}},[t("aex-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("hover 激活")])],1)],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-popover",{attrs:{placement:"top",title:"标题",width:"100",trigger:"click",content:"Popover 使用click方式触发"}},[t("aex-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("click 激活")])],1)],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-popover",{attrs:{placement:"top-start",title:"标题",width:"100",trigger:"manual",content:"Popover 使用manual方式触发"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("aex-button",{attrs:{slot:"reference"},on:{click:function(t){e.visible=!e.visible}},slot:"reference"},[e._v("手动激活")])],1)],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-popover",{ref:"popover",attrs:{placement:"top-start",title:"标题",width:"100",trigger:"hover",content:"Popover 指令绑定触发"}}),e._v(" "),t("aex-button",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}]},[e._v("指令绑定")])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{visible:!1}}})}},o=o(1),r=Object(o.a)(r,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Popover 弹出框")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基本用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-row>\n        <aex-col :span=\'4\'>\n            <aex-popover placement="top-start" title="标题" width="100" trigger="hover" content="Popover 使用hover方式触发">\n                <aex-button slot="reference">hover 激活</aex-button>\n            </aex-popover>\n        </aex-col>\n        <aex-col :span=\'4\'>\n            <aex-popover placement="top" title="标题" width="100" trigger="click" content="Popover 使用click方式触发">\n                <aex-button slot="reference">click 激活</aex-button>\n            </aex-popover>\n        </aex-col>\n        <aex-col :span=\'4\'>\n            <aex-popover placement="top-start" title="标题" width="100" trigger="manual" content="Popover 使用manual方式触发" v-model="visible">\n                <aex-button slot="reference" @click="visible = !visible">手动激活</aex-button>\n            </aex-popover>\n        </aex-col>\n        <aex-col :span=\'4\'>\n            <aex-popover ref="popover" placement="top-start" title="标题" width="100" trigger="hover" content="Popover 指令绑定触发" />\n            <aex-button v-popover:popover>指令绑定</aex-button>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                visible: false\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("Attributes")]),t._m(2),e("h3",[t._v("Slot")]),t._m(3),e("h3",[t._v("Events")]),t._m(4)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Popover } from 'aex-ui';\nVue.use(Popover)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("trigger")]),t._v(" 属性用于设置何时触发 Popover，支持四种触发方式： "),e("code",[t._v("hover")]),t._v(" ， "),e("code",[t._v("click")]),t._v(" ， "),e("code",[t._v("focus")]),t._v(" 和 "),e("code",[t._v("manual")]),t._v(" 。"),e("br"),t._v("\n对于触发 Popover 的元素，有两种写法：使用 "),e("code",[t._v('slot="reference"')]),t._v(" 的具名插槽，或使用自定义指令 "),e("code",[t._v("v-popover")]),t._v(" 指向 Popover 的索引 "),e("code",[t._v("ref")]),t._v(" 。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("trigger")]),e("td",[t._v("触发方式")]),e("td",[t._v("String")]),e("td",[t._v("click/focus/hover/manual")]),e("td",[t._v("click")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("content")]),e("td",[t._v("显示的内容，也可以通过 "),e("code",[t._v("slot")]),t._v(" 传入 DOM")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("宽度")]),e("td",[t._v("String, Number")]),e("td",[t._v("—")]),e("td",[t._v("最小宽度 120px")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("出现位置")]),e("td",[t._v("String")]),e("td",[t._v("top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end")]),e("td",[t._v("bottom")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Popover 是否可用")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("状态是否可见")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("offset")]),e("td",[t._v("出现位置的偏移量")]),e("td",[t._v("Number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("transition")]),e("td",[t._v("定义渐变动画")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("fade-in-linear")])]),e("tr",[e("td",[t._v("visible-arrow")]),e("td",[t._v("是否显示 Tooltip 箭头")]),e("td",[t._v("Boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("为 popper 添加类名")]),e("td",[t._v("String")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("open-delay")]),e("td",[t._v("触发方式为 hover 时的显示延迟，单位为毫秒")]),e("td",[t._v("Number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("close-delay")]),e("td",[t._v("触发方式为 hover 时的隐藏延迟，单位为毫秒")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("200")])]),e("tr",[e("td",[t._v("tabindex")]),e("td",[t._v("Popover 组件的 tabindex")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("—")]),e("td",[t._v("Popover 内嵌 HTML 文本")])]),e("tr",[e("td",[t._v("reference")]),e("td",[t._v("触发 Popover 显示的 HTML 元素")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("show")]),e("td",[t._v("显示时触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("after-enter")]),e("td",[t._v("显示动画播放完毕后触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("hide")]),e("td",[t._v("隐藏时触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("after-leave")]),e("td",[t._v("隐藏动画播放完毕后触发")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=r.exports}}]);