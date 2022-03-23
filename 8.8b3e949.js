(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{299:function(t,e,r){"use strict";r.r(e);var n={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t})({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("aex-scrollbar",{attrs:{tag:"div",noresize:"","wrap-style":"height:180px;"}},e._l(50,function(t){return r("aex-text",{key:t},[e._v("Scrollbar 展示 "+e._s(t))])}),1)]],2)},staticRenderFns:[]},{methods:{}})}},r=r(1),n=Object(r.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Scrollbar 滚动条")]),e("p",[t._v("此组件的作用是为了美化滚动条")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    \x3c!-- wrap-class='cus-scroll-wrap'  --\x3e\n    <aex-scrollbar tag=\"div\" noresize wrap-style='height:180px;'>\n        <aex-text v-for='i in 50' :key='i'>Scrollbar 展示 {{i}}</aex-text>\n    </aex-scrollbar>\n</template>\n\n<script>\n    export default {\n        methods: {\n\n        }\n    }\n<\/script>\n<style lang='less'>\n    .cus-scroll-wrap {\n        max-height: 200px\n    }\n</style>\n")])])])],2),e("h3",[t._v("Attributes")]),t._m(2)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Scrollbar } from 'aex-ui';\nVue.use(Scrollbar)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("给组件设置 "),e("code",[t._v("wrap-class 或者 wrap-style")]),t._v(" , 需要设置 "),e("code",[t._v("height 或者 max-height")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("wrap-class")]),e("td",[t._v("设置滚动外框类")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("wrap-style")]),e("td",[t._v("设置滚动外框行内样式")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("view-class")]),e("td",[t._v("设置滚动体类")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("view-style")]),e("td",[t._v("设置滚动体行内样式")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("native")]),e("td",[t._v("是否展示滚动条")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("noresize")]),e("td",[t._v("如果 container 尺寸不会发生变化，最好设置它可以优化性能")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("tag")]),e("td",[t._v("滚动体渲染的标签")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("div")])])])])}],!1,null,null,null);e.default=n.exports}}]);