(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{292:function(t,e,n){"use strict";n.r(e);var d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,d=arguments[e];for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n])}return t},d={name:"component-doc",components:{"aex-demo0":d({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{width:"300px",padding:"90px 0",textAlign:"center",backgroundColor:"#ccc"}},[t._v("\n        内容区域\n    ")])]],2)},staticRenderFns:[]},{}),"aex-demo1":d({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{width:"300px",padding:"90px",textAlign:"center"},attrs:{"aex-loading-text":"拼命加载中","aex-loading-spinner":"aex-icon-loading","aex-loading-background":"rgba(0, 0, 0, 0.2)"}})]],2)},staticRenderFns:[]},{})}},n=n(1),d=Object(n.a)(d,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Loading 加载")]),e("h3",[t._v("按需引入")]),t._m(0),t._m(1),e("h3",[t._v("容器内使用")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <div v-loading=\"true\" style='width:300px; padding:90px 0;textAlign:center; backgroundColor:#ccc'>\n        内容区域\n    </div>\n</template>\n")])])])],2),e("h3",[t._v("自定义")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div style=\'width:300px; padding:90px;textAlign:center;\' v-loading="true" aex-loading-text="拼命加载中" aex-loading-spinner="aex-icon-loading" aex-loading-background="rgba(0, 0, 0, 0.2)" />\n</template>\n')])])])],2),e("h3",[t._v("参数")]),t._m(3)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Loading } from 'aex-ui';\nVue.use(Loading)\n\n如果要通过服务的方式调用则使用一下方式引入：\nVue.prototype.$loading = Loading.service;\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("提供了两种调用 Loading 的方法："),e("br"),t._v("\n指令(推荐): 对于自定义指令 "),e("code",[t._v("v-loading")]),t._v(" ，只需要绑定 "),e("code",[t._v("Boolean")]),t._v(" 即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加 "),e("code",[t._v("body")]),t._v(" 修饰符，可以使遮罩插入至 DOM 中的 body 上。"),e("br"),t._v("\n服务: 通过 this.$loading(options)来调用")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("在绑定了 "),e("code",[t._v("v-loading")]),t._v(" 指令的元素上添加:"),e("br"),e("code",[t._v("aex-loading-text")]),t._v(" 属性，其值会被渲染为加载文案，并显示在加载图标的下方。"),e("br"),e("code",[t._v("aex-loading-spinner")]),t._v(" 属性设定图标类名"),e("br"),e("code",[t._v("aex-loading-background")]),t._v(" 属性设定背景色值。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("target")]),e("td",[t._v("Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 "),e("code",[t._v("document.querySelector")]),t._v(" 以获取到对应 DOM 节点")]),e("td",[t._v("object/string")]),e("td",[t._v("—")]),e("td",[t._v("document.body")])]),e("tr",[e("td",[t._v("body")]),e("td",[t._v("同 "),e("code",[t._v("v-loading")]),t._v(" 指令中的 "),e("code",[t._v("body")]),t._v(" 修饰符")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("fullscreen")]),e("td",[t._v("同 "),e("code",[t._v("v-loading")]),t._v(" 指令中的 "),e("code",[t._v("fullscreen")]),t._v(" 修饰符")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("lock")]),e("td",[t._v("同 "),e("code",[t._v("v-loading")]),t._v(" 指令中的 "),e("code",[t._v("lock")]),t._v(" 修饰符")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("text")]),e("td",[t._v("显示在加载图标下方的加载文案")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("spinner")]),e("td",[t._v("自定义加载图标类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("background")]),e("td",[t._v("遮罩背景色")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("customClass")]),e("td",[t._v("Loading 的自定义类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=d.exports}}]);