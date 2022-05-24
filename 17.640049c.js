(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{318:function(t,e,n){"use strict";n.r(e);var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{on:{click:t.open1}},[t._v("\n        可自动关闭\n    ")]),t._v(" "),e("aex-button",{on:{click:t.open2}},[t._v("\n        不会自动关闭\n    ")])]],2)},staticRenderFns:[]},{methods:{open1:function(){var t=this.$createElement;this.$notify({title:"自动关闭",message:t("i",{style:"color: teal"},"我是通过vue render 渲染处理的,本条消失将在4.5秒后关闭")})},open2:function(){this.$notify({title:"提示",message:"必须点击右上角角按钮才能关闭本条提示！！！",duration:0})}}}),"aex-demo1":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{attrs:{type:"success"},on:{click:t.open1}},[t._v("\n        成功\n    ")]),t._v(" "),e("aex-button",{attrs:{type:"warning"},on:{click:t.open2}},[t._v("\n        警告\n    ")]),t._v(" "),e("aex-button",{on:{click:t.open3}},[t._v("\n        消息\n    ")]),t._v(" "),e("aex-button",{attrs:{type:"danger"},on:{click:t.open4}},[t._v("\n        错误\n    ")])]],2)},staticRenderFns:[]},{methods:{open1:function(){this.$notify({title:"成功",message:"这是一条成功的提示消息",type:"success"})},open2:function(){this.$notify({title:"警告",message:"这是一条警告的提示消息",type:"warning"})},open3:function(){this.$notify.info({title:"消息",message:"这是一条消息的提示消息"})},open4:function(){this.$notify.error({title:"错误",message:"这是一条错误的提示消息"})}}}),"aex-demo2":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{attrs:{type:"outline"},on:{click:t.open1}},[t._v("\n        右上角\n    ")]),t._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:t.open2}},[t._v("\n        右下角\n    ")]),t._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:t.open3}},[t._v("\n        左下角\n    ")]),t._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:t.open4}},[t._v("\n        左上角\n    ")])]],2)},staticRenderFns:[]},{methods:{open1:function(){this.$notify({title:"自定义位置",message:"右上角弹出的消息"})},open2:function(){this.$notify({title:"自定义位置",message:"右下角弹出的消息",position:"bottom-right"})},open3:function(){this.$notify({title:"自定义位置",message:"左下角弹出的消息",position:"bottom-left"})},open4:function(){this.$notify({title:"自定义位置",message:"左上角弹出的消息",position:"top-left"})}}}),"aex-demo3":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-button",{attrs:{plain:""},on:{click:this.open}},[this._v("\n        偏移的消息\n    ")])]],2)},staticRenderFns:[]},{methods:{open:function(){this.$notify({title:"偏移",message:"这是一条带有偏移的提示消息",offset:100})}}}),"aex-demo4":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-button",{on:{click:this.open}},[this._v("\n        使用 HTML 片段\n    ")])]],2)},staticRenderFns:[]},{methods:{open:function(){this.$notify({title:"HTML 片段",dangerouslyUseHTMLString:!0,message:"<strong>这是 <i>HTML</i> 片段</strong>"})}}}),"aex-demo5":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-button",{attrs:{plain:""},on:{click:this.open}},[this._v("\n        隐藏关闭按钮\n    ")])]],2)},staticRenderFns:[]},{methods:{open:function(){this.$notify.success({title:"Tips",message:"这是一条没有关闭按钮的消息,你只能坐等自动关闭！！！",showClose:!1})}}})}},n=n(0),o=Object(n.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Notification 通知")]),e("p",[t._v("悬浮出现在页面角落，显示全局的通知提醒消息。")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基本用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button @click=\"open1\">\n        可自动关闭\n    </aex-button>\n    <aex-button @click=\"open2\">\n        不会自动关闭\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open1() {\n                const h = this.$createElement;\n\n                this.$notify({\n                    title: '自动关闭',\n                    message: h('i', {\n                        style: 'color: teal'\n                    }, '我是通过vue render 渲染处理的,本条消失将在4.5秒后关闭')\n                });\n            },\n\n            open2() {\n                this.$notify({\n                    title: '提示',\n                    message: '必须点击右上角角按钮才能关闭本条提示！！！',\n                    duration: 0\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("带有倾向性")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='success' @click=\"open1\">\n        成功\n    </aex-button>\n    <aex-button type='warning' @click=\"open2\">\n        警告\n    </aex-button>\n    <aex-button @click=\"open3\">\n        消息\n    </aex-button>\n    <aex-button type='danger' @click=\"open4\">\n        错误\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open1() {\n                this.$notify({\n                    title: '成功',\n                    message: '这是一条成功的提示消息',\n                    type: 'success'\n                });\n            },\n\n            open2() {\n                this.$notify({\n                    title: '警告',\n                    message: '这是一条警告的提示消息',\n                    type: 'warning'\n                });\n            },\n\n            open3() {\n                this.$notify.info({\n                    title: '消息',\n                    message: '这是一条消息的提示消息'\n                });\n            },\n\n            open4() {\n                this.$notify.error({\n                    title: '错误',\n                    message: '这是一条错误的提示消息'\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("自定义弹出位置")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='outline' @click=\"open1\">\n        右上角\n    </aex-button>\n    <aex-button type='outline' @click=\"open2\">\n        右下角\n    </aex-button>\n    <aex-button type='outline' @click=\"open3\">\n        左下角\n    </aex-button>\n    <aex-button type='outline' @click=\"open4\">\n        左上角\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open1() {\n                this.$notify({\n                    title: '自定义位置',\n                    message: '右上角弹出的消息'\n                });\n            },\n\n            open2() {\n                this.$notify({\n                    title: '自定义位置',\n                    message: '右下角弹出的消息',\n                    position: 'bottom-right'\n                });\n            },\n\n            open3() {\n                this.$notify({\n                    title: '自定义位置',\n                    message: '左下角弹出的消息',\n                    position: 'bottom-left'\n                });\n            },\n\n            open4() {\n                this.$notify({\n                    title: '自定义位置',\n                    message: '左上角弹出的消息',\n                    position: 'top-left'\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("带有偏移")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button plain @click=\"open\">\n        偏移的消息\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$notify({\n                    title: '偏移',\n                    message: '这是一条带有偏移的提示消息',\n                    offset: 100\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("使用 HTML 片段")]),t._m(5),e("demo-block",[e("template",{slot:"source"},[e("aex-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button @click=\"open\">\n        使用 HTML 片段\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$notify({\n                    title: 'HTML 片段',\n                    dangerouslyUseHTMLString: true,\n                    message: '<strong>这是 <i>HTML</i> 片段</strong>'\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),t._m(6),e("h3",[t._v("隐藏关闭按钮")]),t._m(7),e("demo-block",[e("template",{slot:"source"},[e("aex-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button plain @click=\"open\">\n        隐藏关闭按钮\n    </aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$notify.success({\n                    title: 'Tips',\n                    message: '这是一条没有关闭按钮的消息,你只能坐等自动关闭！！！',\n                    showClose: false\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("单独引用")]),e("p",[t._v("单独引入 Notification：")]),t._m(8),t._m(9),e("h3",[t._v("Options")]),t._m(10),e("h3",[t._v("方法")]),t._m(11),t._m(12)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Notification } from 'aex-ui';\nVue.prototype.$notify = Notification;\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("Notification AexUI 注册了 "),e("code",[t._v("$notify")]),t._v(" 方法，接收一个 "),e("code",[t._v("options")]),t._v(" 字面量参数，在最简单的情况下，你可以设置 "),e("code",[t._v("title")]),t._v(" 字段和 "),e("code",[t._v("message")]),t._v(" 字段，用于设置通知的标题和正文。"),e("br"),t._v("\n设置 "),e("code",[t._v("duration")]),t._v(" ，可以控制关闭的时间间隔，特别的是，如果设置为 "),e("code",[t._v("0")]),t._v(" ，则不会自动关闭。"),e("br"),t._v("\n注意： "),e("code",[t._v("duration")]),t._v(" 接收一个 "),e("code",[t._v("Number")]),t._v(" ，单位为毫秒，默认为 "),e("code",[t._v("4500")]),t._v(" 。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息\nAexUI 为 Notification 组件准备了四种通知类型： "),e("code",[t._v("success")]),t._v(" , "),e("code",[t._v("warning")]),t._v(" , "),e("code",[t._v("info")]),t._v(" , "),e("code",[t._v("error")]),t._v(" 。通过 "),e("code",[t._v("type")]),t._v(" 字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入 "),e("code",[t._v("type")]),t._v(" 字段的情况下像 "),e("code",[t._v("open3")]),t._v(" 和 "),e("code",[t._v("open4")]),t._v(" 那样直接调用。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可以让 Notification 从屏幕四角中的任意一角弹出\n使用 "),e("code",[t._v("position")]),t._v(" 属性定义 Notification 的弹出位置，支持四个选项： "),e("code",[t._v("top-right")]),t._v(" 、 "),e("code",[t._v("top-left")]),t._v(" 、 "),e("code",[t._v("bottom-right")]),t._v(" 、 "),e("code",[t._v("bottom-left")]),t._v(" ，默认为 "),e("code",[t._v("top-right")]),t._v(" 。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("让 Notification 偏移一些位置\nNotification 提供设置偏移量的功能，通过设置 "),e("code",[t._v("offset")]),t._v(" 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("message")]),t._v(" 属性支持传入 HTML 片段"),e("br"),t._v("\n将 "),e("code",[t._v("dangerouslyUseHTMLString")]),t._v(" 属性设置为 true， "),e("code",[t._v("message")]),t._v(" 就会被当作 HTML 片段处理。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"warning"},[e("p",[t._v("开发提示:"),e("br"),e("code",[t._v("message")]),t._v(" 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting"}},[t._v("XSS 攻击")]),t._v("。因此在 "),e("code",[t._v("dangerouslyUseHTMLString")]),t._v(" 打开的情况下，请确保 "),e("code",[t._v("message")]),t._v(" 的内容是可信的，"),e("strong",[t._v("永远不要")]),t._v("将用户提交的内容赋值给 "),e("code",[t._v("message")]),t._v(" 属性。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可以不显示关闭按钮\n将 "),e("code",[t._v("showClose")]),t._v(" 属性设置为 "),e("code",[t._v("false")]),t._v(" 即可隐藏关闭按钮。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-javascript"},[t._v("import {\n    Notification\n} from 'aex-ui';\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("此时调用方法为 "),e("code",[t._v("Notification(options)")]),t._v(" 。我们也为每个 type 定义了各自的方法，如 "),e("code",[t._v("Notification.success(options)")]),t._v(" 。并且可以调用 "),e("code",[t._v("Notification.closeAll()")]),t._v(" 手动关闭所有实例。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("说明文字")]),e("td",[t._v("string/Vue. VNode")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("dangerouslyUseHTMLString")]),e("td",[t._v("是否将 message 属性作为 HTML 片段处理")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("主题样式，如果不在可选值内将被忽略")]),e("td",[t._v("string")]),e("td",[t._v("success/warning/info/error")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("iconClass")]),e("td",[t._v("自定义图标的类名。若设置了 "),e("code",[t._v("type")]),t._v(" ，则 "),e("code",[t._v("iconClass")]),t._v(" 会被覆盖")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("customClass")]),e("td",[t._v("自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("duration")]),e("td",[t._v("显示时间, 毫秒。设为 0 则不会自动关闭")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("4500")])]),e("tr",[e("td",[t._v("position")]),e("td",[t._v("自定义弹出位置")]),e("td",[t._v("string")]),e("td",[t._v("top-right/top-left/bottom-right/bottom-left")]),e("td",[t._v("top-right")])]),e("tr",[e("td",[t._v("showClose")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("onClose")]),e("td",[t._v("关闭时的回调函数")]),e("td",[t._v("function")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("onClick")]),e("td",[t._v("点击 Notification 时的回调函数")]),e("td",[t._v("function")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("offset")]),e("td",[t._v("偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("调用 "),e("code",[t._v("Notification")]),t._v(" 或 "),e("code",[t._v("this.$notify")]),t._v(" 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 "),e("code",[t._v("close")]),t._v(" 方法。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭当前的 Notification")])])])])}],!1,null,null,null);e.default=o.exports}}]);