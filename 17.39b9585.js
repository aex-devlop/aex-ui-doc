(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{314:function(t,e,n){"use strict";n.r(e);var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-backtop",{attrs:{target:".doc-components__content"}})]],2)},staticRenderFns:[]},{}),"aex-demo1":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-backtop",{attrs:{bottom:120,target:".doc-components__content"}},[t._v("\n        UP\n    ")])]],2)},staticRenderFns:[]},{})}},n=n(1),o=Object(n.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Backtop 回到顶部")]),e("p",[t._v("返回页面顶部的操作按钮")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),e("p",[t._v("滑动页面即可看到右下方的按钮。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-backtop target='.doc-components__content'></aex-backtop>\n</template>\n")])])])],2),e("h3",[t._v("自定义显示内容")]),e("p",[t._v("显示区域被固定为 60px * 60px 的区域, 其中的内容可支持自定义。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-backtop :bottom=\"120\" target='.doc-components__content'>\n        UP\n    </aex-backtop>\n</template>\n")])])])],2),e("h3",[t._v("参数")]),t._m(1),e("h3",[t._v("Events")]),t._m(2)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Backtop } from 'aex-ui';\nVue.use(Backtop)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("target")]),e("td",[t._v("触发滚动的对象, 指定在某个区域内, class / id")]),e("td",[t._v("string")]),e("td"),e("td")]),e("tr",[e("td",[t._v("visibility-height")]),e("td",[t._v("滚动高度达到此参数值才出现")]),e("td",[t._v("number")]),e("td"),e("td",[t._v("200")])]),e("tr",[e("td",[t._v("right")]),e("td",[t._v("控制其显示位置, 距离页面右边距")]),e("td",[t._v("number")]),e("td"),e("td",[t._v("40")])]),e("tr",[e("td",[t._v("bottom")]),e("td",[t._v("控制其显示位置, 距离页面底部距离")]),e("td",[t._v("number")]),e("td"),e("td",[t._v("40")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("click")]),e("td",[t._v("点击按钮触发的事件")]),e("td",[t._v("点击事件")])])])])}],!1,null,null,null);e.default=o.exports}}]);