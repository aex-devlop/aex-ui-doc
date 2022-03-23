(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{262:function(t,e,o){"use strict";o.r(e);var v={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o,v=arguments[e];for(o in v)Object.prototype.hasOwnProperty.call(v,o)&&(t[o]=v[o])}return t})({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("基础用法")]),e._v(" "),t("aex-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("span",[e._v("这是一段信息")]),e._v(" "),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("aex-button",{attrs:{size:"mini",type:"outline"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),t("aex-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])]],2)},staticRenderFns:[]},{data:function(){return{dialogVisible:!1}},methods:{handleClose:function(e){this.$msgbox("确认关闭？").then(function(t){e()}).catch(function(t){})}}})}},o=o(1),v=Object(o.a)(v,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Dialog 模态对话框")]),e("p",[t._v("Dialog 弹出一个模态对话框，适合需要定制性更大的场景")]),t._m(0),e("h3",[t._v("基础用法")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-button type="text" @click="dialogVisible = true">基础用法</aex-button>\n\n    <aex-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">\n        <span>这是一段信息</span>\n\n        <span slot="footer">\n            <aex-button size=\'mini\' type=\'outline\' @click="dialogVisible = false">取 消</aex-button>\n            <aex-button size=\'mini\' type="primary" @click="dialogVisible = false">确 定</aex-button>\n        </span>\n    </aex-dialog>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                dialogVisible: false\n            };\n        },\n        methods: {\n            handleClose(done) {\n                this.$msgbox(\'确认关闭？\')\n                    .then(_ => {\n                        done();\n                    })\n                    .catch(_ => {});\n            }\n        }\n    };\n<\/script>\n')])])])],2),t._m(1),t._m(2),e("h3",[t._v("Attributes")]),t._m(3),e("h3",[t._v("Slot")]),t._m(4),e("h3",[t._v("Events")]),t._m(5)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("通过设置 "),e("code",[t._v("visible")]),t._v(" 属性 "),e("code",[t._v("true/false")]),t._v(" ，来显示/隐藏"),e("br"),e("code",[t._v("footer")]),t._v(" 需要通过具名为 "),e("code",[t._v("footer")]),t._v(" 的 "),e("code",[t._v("slot")]),t._v(" 来自定义"),e("br"),e("code",[t._v("title")]),t._v(" 属性用于定义标题，它是可选的，默认值为空，也可通过具名为 "),e("code",[t._v("title")]),t._v(" 的 "),e("code",[t._v("slot")]),t._v(" 来自定义")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 "),e("code",[t._v("ref")]),t._v(" 获取相应组件，请在 "),e("code",[t._v("open")]),t._v(" 事件回调中进行。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("如果 "),e("code",[t._v("visible")]),t._v(" 属性绑定的变量位于 Vuex 的 store 内，那么 "),e("code",[t._v(".sync")]),t._v(" 不会正常工作。此时需要去除 "),e("code",[t._v(".sync")]),t._v(" 修饰符，同时监听 Dialog 的 "),e("code",[t._v("open")]),t._v(" 和 "),e("code",[t._v("close")]),t._v(" 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 "),e("code",[t._v("visible")]),t._v(" 属性绑定的变量的值。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("visible")]),e("td",[t._v("是否显示 Dialog，支持 .sync 修饰符")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("Dialog 的标题，也可通过具名 slot （见下表）传入")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("Dialog 的宽度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("50%")])]),e("tr",[e("td",[t._v("fullscreen")]),e("td",[t._v("是否为全屏 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("top")]),e("td",[t._v("Dialog CSS 中的 margin-top 值")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("15vh")])]),e("tr",[e("td",[t._v("modal")]),e("td",[t._v("是否需要遮罩层")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("modal-append-to-body")]),e("td",[t._v("遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("append-to-body")]),e("td",[t._v("Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("lock-scroll")]),e("td",[t._v("是否在 Dialog 出现时将 body 滚动锁定")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("custom-class")]),e("td",[t._v("Dialog 的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("close-on-click-modal")]),e("td",[t._v("是否可以通过点击 modal 关闭 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("close-on-press-escape")]),e("td",[t._v("是否可以通过按下 ESC 关闭 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-close")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("before-close")]),e("td",[t._v("关闭前的回调，会暂停 Dialog 的关闭")]),e("td",[t._v("function(done)，done 用于关闭 Dialog")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("center")]),e("td",[t._v("是否对头部和底部采用居中布局")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("destroy-on-close")]),e("td",[t._v("关闭时销毁 Dialog 中的元素")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("—")]),e("td",[t._v("Dialog 的内容")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("Dialog 标题区的内容")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("Dialog 按钮操作区的内容")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("open")]),e("td",[t._v("Dialog 打开的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("opened")]),e("td",[t._v("Dialog 打开动画结束时的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("Dialog 关闭的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("closed")]),e("td",[t._v("Dialog 关闭动画结束时的回调")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=v.exports}}]);