(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{213:function(t,e,n){"use strict";n.r(e);var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{attrs:{type:"outline"},on:{click:t.open1}},[t._v("基础用法")]),t._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:t.open2}},[t._v("设置Options")])]],2)},staticRenderFns:[]},{methods:{open1:function(){this.$msgbox("API Key跟您的账号安全紧密相关，凡知晓您API","API确认")},open2:function(){var e=this;this.$msgbox({title:"API确认",message:"API Key跟您的账号安全紧密相关，凡知晓您API",confirmButtonText:"确定",callback:function(t){e.$message({message:"action: "+t})}})}}}),"aex-demo1":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-button",{attrs:{type:"outline"},on:{click:t.open}},[t._v("确认弹框")])]],2)},staticRenderFns:[]},{methods:{open:function(){var t=this;this.$msgbox({title:"认证",message:"请使用手机扫描下方二维码，打开实名认证界面。",confirmButtonText:"确定",cancelButtonText:"取消",showCancelButton:!0}).then(function(){t.$message({type:"success",message:"成功!"})}).catch(function(){t.$message({type:"info",message:"已取消"})})}}}),"aex-demo2":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-button",{attrs:{type:"outline"},on:{click:this.open}},[this._v("使用 HTML")])]],2)},staticRenderFns:[]},{methods:{open:function(){var e=this;this.$msgbox({title:"HTML",message:"<div style='height:100px;overflow-y:auto'>\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                </div>",confirmButtonText:"确定",dangerouslyUseHTMLString:!0,callback:function(t){e.$message({message:"action: "+t})}})}}}),"aex-demo3":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-button",{attrs:{type:"outline"},on:{click:this.open}},[this._v("居中布局")])]],2)},staticRenderFns:[]},{methods:{open:function(){var e=this;this.$msgbox({title:"居中布局",message:"居中布局居中布局居中布局居中布局居中布局",confirmButtonText:"确定",cancelButtonText:"取消",center:!0,callback:function(t){e.$message({message:"action: "+t})}})}}})}},n=n(1),o=Object(n.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("MessageBox 提示弹框")]),t._m(0),e("h3",[t._v("基础用法")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='outline' @click=\"open1\">基础用法</aex-button>\n    <aex-button type='outline' @click=\"open2\">设置Options</aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open1() {\n                this.$msgbox('API Key跟您的账号安全紧密相关，凡知晓您API', 'API确认');\n            },\n            open2() {\n                this.$msgbox({\n                    title: 'API确认',\n                    message: 'API Key跟您的账号安全紧密相关，凡知晓您API',\n                    confirmButtonText: '确定',\n                    callback: action => {\n                        this.$message({\n                            message: `action: ${ action }`\n                        });\n                    }\n                });\n            },\n\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("确认弹框")]),e("p",[t._v("询问是/否进行此操作时会用到此对话框。")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='outline' @click=\"open\">确认弹框</aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$msgbox({\n                    title: '认证',\n                    message: '请使用手机扫描下方二维码，打开实名认证界面。',\n                    confirmButtonText: '确定',\n                    cancelButtonText: '取消',\n                    showCancelButton: true,\n                }).then(() => {\n                    this.$message({\n                        type: 'success',\n                        message: '成功!'\n                    });\n                }).catch(() => {\n                    this.$message({\n                        type: 'info',\n                        message: '已取消'\n                    });\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("使用 HTML")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='outline' @click=\"open\">使用 HTML</aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$msgbox({\n                    title: 'HTML',\n                    message: `<div style='height:100px;overflow-y:auto'>\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                    HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML 片段HTML\n                </div>`,\n                    confirmButtonText: '确定',\n                    dangerouslyUseHTMLString: true,\n                    callback: action => {\n                        this.$message({\n                            message: `action: ${ action }`\n                        });\n                    }\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("居中布局")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-button type='outline' @click=\"open\">居中布局</aex-button>\n</template>\n\n<script>\n    export default {\n        methods: {\n            open() {\n                this.$msgbox({\n                    title: '居中布局',\n                    message: '居中布局居中布局居中布局居中布局居中布局',\n                    confirmButtonText: '确定',\n                    cancelButtonText: '取消',\n                    center: true,\n                    callback: action => {\n                        this.$message({\n                            message: `action: ${ action }`\n                        });\n                    }\n                });\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("Options")]),t._m(4)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("适合展示较为简单的提示/确认信息。如果需要弹出较为复杂的内容，请使用 aex-dialog组件。"),e("br"),t._v("\n组件默认宽度380px，可以通过添加customClass 来修改")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("调用 "),e("code",[t._v("showCancelButton")]),t._v(" 属性添加取消按钮。可以用了 Promise 来处理后续callback。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("dangerouslyUseHTMLString")]),t._v(" 属性设置为 "),e("code",[t._v("true")]),t._v(" ，来使用html 构造message 内容。"),e("br"),t._v("\n这里也只能使用原生的html 字符串，如果要使用更复杂的内容/组件，请使用 "),e("code",[t._v("Dialog")]),t._v(" 组件")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("center")]),t._v(" 属性设置为 "),e("code",[t._v("true")]),t._v(" 即可开启居中布局")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("MessageBox 标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("message")]),e("td",[t._v("MessageBox 消息正文内容")]),e("td",[t._v("string / VNode")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("dangerouslyUseHTMLString")]),e("td",[t._v("是否将 message 属性作为 HTML 片段处理")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("customClass")]),e("td",[t._v("MessageBox 的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("callback")]),e("td",[t._v("若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调")]),e("td",[t._v("function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("showClose")]),e("td",[t._v("MessageBox 是否显示右上角关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("beforeClose")]),e("td",[t._v("MessageBox 关闭前的回调，会暂停实例的关闭")]),e("td",[t._v("function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("distinguishCancelAndClose")]),e("td",[t._v("是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("lockScroll")]),e("td",[t._v("是否在 MessageBox 出现时将 body 滚动锁定")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("showCancelButton")]),e("td",[t._v("是否显示取消按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("showConfirmButton")]),e("td",[t._v("是否显示确定按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("cancelButtonText")]),e("td",[t._v("取消按钮的文本内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("取消")])]),e("tr",[e("td",[t._v("confirmButtonText")]),e("td",[t._v("确定按钮的文本内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("确定")])]),e("tr",[e("td",[t._v("cancelButtonClass")]),e("td",[t._v("取消按钮的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("confirmButtonClass")]),e("td",[t._v("确定按钮的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("closeOnClickModal")]),e("td",[t._v("是否可通过点击遮罩关闭 MessageBox")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("closeOnPressEscape")]),e("td",[t._v("是否可通过按下 ESC 键关闭 MessageBox")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("closeOnHashChange")]),e("td",[t._v("是否在 hashchange 时关闭 MessageBox")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("center")]),e("td",[t._v("是否居中布局")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("roundButton")]),e("td",[t._v("是否使用圆角按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])}],!1,null,null,null);e.default=o.exports}}]);