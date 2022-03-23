(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{318:function(t,e,n){"use strict";n.r(e);var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("aex-row",{attrs:{gutter:30}},e._l(e.types,function(t){return n("aex-col",{key:t,staticStyle:{marginBottom:"30px"},attrs:{span:4}},[n("aex-text",{staticStyle:{marginBottom:"5px"},attrs:{title:"h3"}},[e._v(e._s(t))]),e._v(" "),n("aex-empty",{attrs:{"image-width":"100px",type:t},on:{click:e.handleClick}})],1)}),1)]],2)},staticRenderFns:[]},{data:function(){return{types:["coming_soon","no_address","no_assests","no_block","no_comment","no_coupon","no_data","no_follow","no_login","no_network","no_news","no_optional_coin","no_order","no_record","no_result"]}},methods:{handleClick:function(){this.$message("Empty data callback!!!")}}}),"aex-demo1":o({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-row",[e("aex-col",{attrs:{span:12}},[e("aex-empty",{attrs:{"image-width":"100px",type:"coming_soon",text:"有点击事件","button-text":"点击回调"},on:{click:t.handleClick}})],1),t._v(" "),e("aex-col",{attrs:{span:12}},[e("aex-empty",{attrs:{"image-width":"100px",type:"coming_soon",text:"没有有点击事件"}})],1)],1)]],2)},staticRenderFns:[]},{methods:{handleClick:function(){this.$message("Empty data callback!!!")}}})}},n=n(1),o=Object(n.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Empty 空数据")]),t._m(0),e("h3",[t._v("基本用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row :gutter='30'>\n        <aex-col :span='4' style='marginBottom:30px' v-for='item in types' :key='item'>\n            <aex-text title='h3' style='marginBottom:5px'>{{item}}</aex-text>\n            <aex-empty image-width=\"100px\" :type=\"item\" @click='handleClick' />\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                types: [\n                    'coming_soon',\n                    'no_address',\n                    'no_assests',\n                    'no_block',\n                    'no_comment',\n                    'no_coupon',\n                    'no_data',\n                    'no_follow',\n                    'no_login',\n                    'no_network',\n                    'no_news',\n                    'no_optional_coin',\n                    'no_order',\n                    'no_record',\n                    'no_result'\n                ]\n            }\n        },\n        methods: {\n            handleClick() {\n                this.$message('Empty data callback!!!')\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("自定义文字")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row>\n        <aex-col :span='12'>\n            <aex-empty image-width=\"100px\" type=\"coming_soon\" @click='handleClick' text='有点击事件' button-text='点击回调' />\n        </aex-col>\n        <aex-col :span='12'>\n            <aex-empty image-width=\"100px\" type=\"coming_soon\" text='没有有点击事件' />\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        methods: {\n            handleClick() {\n                this.$message('Empty data callback!!!')\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("参数")]),t._m(3),e("h3",[t._v("Events")]),t._m(4),e("h3",[t._v("Slots")]),t._m(5)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Empty } from 'aex-ui';\nVue.use(Empty)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("组件提供 15种类型供选择, (现有的图片比例都是10:9 的比例)"),e("br"),t._v("\n组件的默认宽度是200px, 可直接通过 style 修改")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("text")]),t._v(" : 属性，自定义文字,\n"),e("code",[t._v("button-text")]),t._v(" : 属性，自定义按钮文字，不写就没有按钮"),e("br"),t._v("\n或者通过 slot='text' 自定义")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("空数据类型")]),e("td",[t._v("string")]),e("td",[t._v("见顶部 types")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("image-width")]),e("td",[t._v("-")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("100%")])]),e("tr",[e("td",[t._v("image-height")]),e("td",[t._v("-")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("auto")])]),e("tr",[e("td",[t._v("text")]),e("td",[t._v("文字")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("button-text")]),e("td",[t._v("按钮文字")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("auto")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("click")]),e("td",[t._v("按钮点击")]),e("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("自定义底部文字")])])])])}],!1,null,null,null);e.default=o.exports}}]);