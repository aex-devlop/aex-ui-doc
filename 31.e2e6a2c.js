(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{321:function(t,e,i){"use strict";i.r(e);var o={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i,o=arguments[e];for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t})({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[[i("aex-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible1=!0}}},[e._v("基础用法")]),e._v(" "),i("aex-dialog",{attrs:{title:"提示",visible:e.dialogVisible1,width:"30%","before-close":e.handleClose,center:""},on:{"update:visible":function(t){e.dialogVisible1=t}}},[i("span",[e._v("这是一段信息")]),e._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("aex-button",{attrs:{size:"mini",type:"outline"},on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")]),e._v(" "),i("aex-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible1=!1}}},[e._v("确 定")])],1)]),e._v(" "),i("aex-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible2=!0}}},[e._v("内容嵌套")]),e._v(" "),i("aex-dialog",{attrs:{title:"提示",visible:e.dialogVisible2,width:"30%"},on:{"update:visible":function(t){e.dialogVisible2=t}}},[i("aex-text",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}]},[e._v("第一部分内容...")]),e._v(" "),i("aex-text",{directives:[{name:"show",rawName:"v-show",value:2==e.step,expression:"step == 2"}]},[e._v("第二部分内容...")]),e._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("aex-button",{directives:[{name:"show",rawName:"v-show",value:1<e.step,expression:"step > 1"}],attrs:{size:"small",type:"outline"},on:{click:e.prev}},[e._v("上一步")]),e._v(" "),i("aex-button",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],attrs:{size:"small",type:"outline"},on:{click:e.next}},[e._v("下一步")]),e._v(" "),i("aex-button",{directives:[{name:"show",rawName:"v-show",value:1<e.step,expression:"step > 1"}],attrs:{size:"small",type:"primary"},on:{click:e.complete}},[e._v("确 定")])],1)],1),e._v(" "),i("aex-button",{attrs:{type:"text",width:"300px"},on:{click:function(t){e.dialogVisible3=!0}}},[e._v("弹框最大高度600像素")]),e._v(" "),i("aex-dialog",{attrs:{title:"提示",visible:e.dialogVisible3,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible3=t}}},[i("aex-scrollbar",{attrs:{tag:"div",noresize:"","wrap-style":"height:470px;"}},e._l(50,function(t){return i("aex-text",{key:t},[e._v("弹框最大高度600像素")])}),1),e._v(" "),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("aex-button",{attrs:{size:"mini",type:"outline"},on:{click:function(t){e.dialogVisible3=!1}}},[e._v("取 消")]),e._v(" "),i("aex-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible3=!1}}},[e._v("确 定")])],1)],1),e._v(" "),i("aex-button",{attrs:{type:"text"},on:{click:function(t){e.dialogVisible4=!0}}},[e._v("完全自定义内容")]),e._v(" "),i("aex-dialog",{attrs:{title:"提示",visible:e.dialogVisible4,width:"30%","before-close":e.handleClose,center:"",custom:""},on:{"update:visible":function(t){e.dialogVisible4=t}}},[i("div",{staticStyle:{background:"#fff"}},[e._v("这里随便折腾")])])]],2)},staticRenderFns:[]},{data:function(){return{dialogVisible1:!1,dialogVisible2:!1,step:"1",dialogVisible3:!1,dialogVisible4:!1}},methods:{prev:function(){this.step--},next:function(){this.step++},complete:function(){this.dialogVisible2=!1,this.step=1},handleClose:function(t){t()}}})}},i=i(0),o=Object(i.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Dialog 模态对话框")]),e("p",[t._v("Dialog 弹出一个模态对话框，适合需要定制性更大的场景")]),e("h3",[t._v("按需引入")]),t._m(0),t._m(1),e("h3",[t._v("基础用法")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-button type="text" @click="dialogVisible1 = true">基础用法</aex-button>\n    <aex-dialog title="提示" :visible.sync="dialogVisible1" width="30%" :before-close="handleClose" center>\n        <span>这是一段信息</span>\n\n        <span slot="footer">\n            <aex-button size=\'mini\' type=\'outline\' @click="dialogVisible1 = false">取 消</aex-button>\n            <aex-button size=\'mini\' type="primary" @click="dialogVisible1 = false">确 定</aex-button>\n        </span>\n    </aex-dialog>\n\n    <aex-button type="text" @click="dialogVisible2 = true">内容嵌套</aex-button>\n    <aex-dialog title="提示" :visible.sync="dialogVisible2" width="30%">\n\n        <aex-text v-show=\'step == 1\'>第一部分内容...</aex-text>\n        <aex-text v-show=\'step == 2\'>第二部分内容...</aex-text>\n        <span slot="footer">\n            <aex-button size=\'small\' type=\'outline\' @click="prev" v-show=\'step > 1\'>上一步</aex-button>\n            <aex-button size=\'small\' type=\'outline\' @click="next" v-show=\'step == 1\'>下一步</aex-button>\n            <aex-button size=\'small\' type="primary" @click="complete" v-show=\'step > 1\'>确 定</aex-button>\n        </span>\n    </aex-dialog>\n\n    <aex-button type="text" @click="dialogVisible3 = true" width=\'300px\'>弹框最大高度600像素</aex-button>\n    <aex-dialog title="提示" :visible.sync="dialogVisible3" width="30%" :before-close="handleClose">\n        <aex-scrollbar tag="div" noresize wrap-style=\'height:470px;\'>\n            <aex-text v-for=\'i in 50\' :key=\'i\'>弹框最大高度600像素</aex-text>\n        </aex-scrollbar>\n\n        <span slot="footer">\n            <aex-button size=\'mini\' type=\'outline\' @click="dialogVisible3 = false">取 消</aex-button>\n            <aex-button size=\'mini\' type="primary" @click="dialogVisible3 = false">确 定</aex-button>\n        </span>\n    </aex-dialog>\n\n    <aex-button type="text" @click="dialogVisible4 = true">完全自定义内容</aex-button>\n    <aex-dialog title="提示" :visible.sync="dialogVisible4" width="30%" :before-close="handleClose" center custom>\n        <div style=\'background:#fff\'>这里随便折腾</div>\n    </aex-dialog>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                dialogVisible1: false,\n                dialogVisible2: false,\n                step: \'1\',\n                dialogVisible3: false,\n                dialogVisible4: false\n            };\n        },\n        methods: {\n            prev() {\n                this.step--\n            },\n            next() {\n                this.step++\n            },\n            complete() {\n                this.dialogVisible2 = false\n                this.step = 1\n            },\n            handleClose(done) {\n                // this.$msgbox(\'确认关闭？\')\n                //     .then(_ => {\n                //         done();\n                //     })\n                //     .catch(_ => {});\n                done()\n            }\n        }\n    };\n<\/script>\n')])])])],2),t._m(2),t._m(3),e("h3",[t._v("Attributes")]),t._m(4),e("h3",[t._v("Slot")]),t._m(5),e("h3",[t._v("Events")]),t._m(6)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Dialog } from 'aex-ui';\nVue.use(Dialog)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("通过设置 "),e("code",[t._v("visible")]),t._v(" 属性 "),e("code",[t._v("true/false")]),t._v(" ，来显示/隐藏"),e("br"),e("code",[t._v("footer")]),t._v(" 需要通过具名为 "),e("code",[t._v("footer")]),t._v(" 的 "),e("code",[t._v("slot")]),t._v(" 来自定义"),e("br"),e("code",[t._v("title")]),t._v(" 属性用于定义标题，它是可选的，默认值为空，也可通过具名为 "),e("code",[t._v("title")]),t._v(" 的 "),e("code",[t._v("slot")]),t._v(" 来自定义")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 "),e("code",[t._v("ref")]),t._v(" 获取相应组件，请在 "),e("code",[t._v("open")]),t._v(" 事件回调中进行。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("如果 "),e("code",[t._v("visible")]),t._v(" 属性绑定的变量位于 Vuex 的 store 内，那么 "),e("code",[t._v(".sync")]),t._v(" 不会正常工作。此时需要去除 "),e("code",[t._v(".sync")]),t._v(" 修饰符，同时监听 Dialog 的 "),e("code",[t._v("open")]),t._v(" 和 "),e("code",[t._v("close")]),t._v(" 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 "),e("code",[t._v("visible")]),t._v(" 属性绑定的变量的值。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("visible")]),e("td",[t._v("是否显示 Dialog，支持 .sync 修饰符")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("Dialog 的标题，也可通过具名 slot （见下表）传入")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("Dialog 的宽度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("50%")])]),e("tr",[e("td",[t._v("fullscreen")]),e("td",[t._v("是否为全屏 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("top")]),e("td",[t._v("Dialog CSS 中的 margin-top 值")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("15vh")])]),e("tr",[e("td",[t._v("modal")]),e("td",[t._v("是否需要遮罩层")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("modal-append-to-body")]),e("td",[t._v("遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("append-to-body")]),e("td",[t._v("Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("lock-scroll")]),e("td",[t._v("是否在 Dialog 出现时将 body 滚动锁定")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("custom-class")]),e("td",[t._v("Dialog 的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("close-on-click-modal")]),e("td",[t._v("是否可以通过点击 modal 关闭 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("close-on-press-escape")]),e("td",[t._v("是否可以通过按下 ESC 关闭 Dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-close")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("before-close")]),e("td",[t._v("关闭前的回调，会暂停 Dialog 的关闭")]),e("td",[t._v("function(done)，done 用于关闭 Dialog")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("center")]),e("td",[t._v("屏幕居中布局")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("custom")]),e("td",[t._v("自定义内容")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("destroy-on-close")]),e("td",[t._v("关闭时销毁 Dialog 中的元素")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("—")]),e("td",[t._v("Dialog 的内容")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("Dialog 标题区的内容")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("Dialog 按钮操作区的内容")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("open")]),e("td",[t._v("Dialog 打开的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("opened")]),e("td",[t._v("Dialog 打开动画结束时的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("close")]),e("td",[t._v("Dialog 关闭的回调")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("closed")]),e("td",[t._v("Dialog 关闭动画结束时的回调")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=o.exports}}]);