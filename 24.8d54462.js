(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{206:function(a,e,t){"use strict";t.r(e);var r=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t,r=arguments[e];for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},r={name:"component-doc",components:{"aex-demo0":r({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[[a("aex-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:"3",disabled:""},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[e._v("GAT")])]],2)},staticRenderFns:[]},{data:function(){return{radio:"1"}}}),"aex-demo1":r({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[[a("aex-radio-group",{on:{change:e._onChange},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio",{attrs:{label:1}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:2}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:3}},[e._v("GAT")])],1)]],2)},staticRenderFns:[]},{data:function(){return{radio:1}},methods:{_onChange:function(a){console.log(a)}}}),"aex-demo2":r({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[[a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio-button",{attrs:{label:1}},[e._v("BTC")]),e._v(" "),a("aex-radio-button",{attrs:{label:2}},[e._v("ETH")]),e._v(" "),a("aex-radio-button",{attrs:{label:3}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"medium"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio-button",{attrs:{label:1}},[e._v("BTC")]),e._v(" "),a("aex-radio-button",{attrs:{label:2}},[e._v("ETH")]),e._v(" "),a("aex-radio-button",{attrs:{label:3}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"small"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio-button",{attrs:{label:1}},[e._v("BTC")]),e._v(" "),a("aex-radio-button",{attrs:{label:2}},[e._v("ETH")]),e._v(" "),a("aex-radio-button",{attrs:{label:3}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"mini"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio-button",{attrs:{label:1}},[e._v("BTC")]),e._v(" "),a("aex-radio-button",{attrs:{label:2}},[e._v("ETH")]),e._v(" "),a("aex-radio-button",{attrs:{label:3}},[e._v("GAT")])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{radio:1}}}),"aex-demo3":r({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[[a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio",{attrs:{label:1,border:""}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:2,border:""}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:3,border:""}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"medium"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio",{attrs:{label:1,border:""}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:2,border:""}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:3,border:""}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"small"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio",{attrs:{label:1,border:""}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:2,border:""}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:3,border:""}},[e._v("GAT")])],1)],1),e._v(" "),a("div",{staticStyle:{marginBottom:"20px"}},[a("aex-radio-group",{attrs:{size:"mini"},model:{value:e.radio,callback:function(a){e.radio=a},expression:"radio"}},[a("aex-radio",{attrs:{label:1,border:""}},[e._v("BTC")]),e._v(" "),a("aex-radio",{attrs:{label:2,border:""}},[e._v("ETH")]),e._v(" "),a("aex-radio",{attrs:{label:3,border:""}},[e._v("GAT")])],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{radio:1}}})}},t=t(1),r=Object(t.a)(r,function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[a._v("Radio 单选框")]),e("h3",[a._v("基础用法")]),a._m(0),a._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[a._v('<template>\n    <aex-radio v-model="radio" label="1">BTC</aex-radio>\n    <aex-radio v-model="radio" label="2">ETH</aex-radio>\n    <aex-radio v-model="radio" label="3" disabled>GAT</aex-radio>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radio: \'1\'\n            };\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[a._v("分组")]),a._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[a._v('<template>\n    <aex-radio-group v-model="radio" @change=\'_onChange\'>\n        <aex-radio :label="1">BTC</aex-radio>\n        <aex-radio :label="2">ETH</aex-radio>\n        <aex-radio :label="3">GAT</aex-radio>\n    </aex-radio-group>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radio: 1\n            };\n        },\n        methods: {\n            _onChange(val) {\n                console.log(val)\n            }\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[a._v("按钮样式")]),a._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[a._v('<template>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio">\n            <aex-radio-button :label="1">BTC</aex-radio-button>\n            <aex-radio-button :label="2">ETH</aex-radio-button>\n            <aex-radio-button :label="3">GAT</aex-radio-button>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'medium\'>\n            <aex-radio-button :label="1">BTC</aex-radio-button>\n            <aex-radio-button :label="2">ETH</aex-radio-button>\n            <aex-radio-button :label="3">GAT</aex-radio-button>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'small\'>\n            <aex-radio-button :label="1">BTC</aex-radio-button>\n            <aex-radio-button :label="2">ETH</aex-radio-button>\n            <aex-radio-button :label="3">GAT</aex-radio-button>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'mini\'>\n            <aex-radio-button :label="1">BTC</aex-radio-button>\n            <aex-radio-button :label="2">ETH</aex-radio-button>\n            <aex-radio-button :label="3">GAT</aex-radio-button>\n        </aex-radio-group>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radio: 1\n            };\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[a._v("带有边框的样式")]),a._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[a._v('<template>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio">\n            <aex-radio :label="1" border>BTC</aex-radio>\n            <aex-radio :label="2" border>ETH</aex-radio>\n            <aex-radio :label="3" border>GAT</aex-radio>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'medium\'>\n            <aex-radio :label="1" border>BTC</aex-radio>\n            <aex-radio :label="2" border>ETH</aex-radio>\n            <aex-radio :label="3" border>GAT</aex-radio>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'small\'>\n            <aex-radio :label="1" border>BTC</aex-radio>\n            <aex-radio :label="2" border>ETH</aex-radio>\n            <aex-radio :label="3" border>GAT</aex-radio>\n        </aex-radio-group>\n    </div>\n    <div style=\'marginBottom:20px\'>\n        <aex-radio-group v-model="radio" size=\'mini\'>\n            <aex-radio :label="1" border>BTC</aex-radio>\n            <aex-radio :label="2" border>ETH</aex-radio>\n            <aex-radio :label="3" border>GAT</aex-radio>\n        </aex-radio-group>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radio: 1\n            };\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[a._v("Radio Attributes")]),a._m(5),e("h3",[a._v("Radio Events")]),a._m(6),e("h3",[a._v("Radio-group Attributes")]),a._m(7),e("h3",[a._v("Radio-group Events")]),a._m(8),e("h3",[a._v("Radio-button Attributes")]),a._m(9)],1)},[function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("p",[e("code",[a._v("v-model")]),a._v(" 绑定变量，选中的值为相应 "),e("code",[a._v("label")]),a._v(" 属性的值, "),e("code",[a._v("label")]),a._v(" 可以是 "),e("code",[a._v("String")]),a._v(" 、 "),e("code",[a._v("Number")]),a._v(" 或 "),e("code",[a._v("Boolean")])])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("p",[e("code",[a._v("disabled")]),a._v(" 属性 禁用")])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("p",[a._v("如果有多个选项组，则使用 "),e("code",[a._v("aex-radio-group")]),a._v(" 包裹来分组， 此时 "),e("code",[a._v("v-model")]),a._v(" 则设置在 "),e("code",[a._v("aex-radio-group")]),a._v(" 标签上即可，"),e("br"),e("code",[a._v("change")]),a._v(" 属性可以监听变化")])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("p",[a._v("把aex-radio 换成 aex-radio-button元素即可实现 按钮样式\n"),e("code",[a._v("size")]),a._v(" 属性设置 大小 default / medium / small / mini")])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("p",[a._v("添加 "),e("code",[a._v("border")]),a._v(" 属性可以渲染为带有边框的单选框"),e("br"),e("code",[a._v("size")]),a._v(" 属性设置 大小 default / medium / small / mini")])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[a._v("参数")]),e("th",[a._v("说明")]),e("th",[a._v("类型")]),e("th",[a._v("可选值")]),e("th",[a._v("默认值")])])]),e("tbody",[e("tr",[e("td",[a._v("value / v-model")]),e("td",[a._v("绑定值")]),e("td",[a._v("string / number / boolean")]),e("td",[a._v("—")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("label")]),e("td",[a._v("Radio 的 value")]),e("td",[a._v("string / number / boolean")]),e("td",[a._v("—")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("disabled")]),e("td",[a._v("是否禁用")]),e("td",[a._v("boolean")]),e("td",[a._v("—")]),e("td",[a._v("false")])]),e("tr",[e("td",[a._v("border")]),e("td",[a._v("是否显示边框")]),e("td",[a._v("boolean")]),e("td",[a._v("—")]),e("td",[a._v("false")])]),e("tr",[e("td",[a._v("size")]),e("td",[a._v("Radio 的尺寸，仅在 border 为真时有效")]),e("td",[a._v("string")]),e("td",[a._v("medium / small / mini")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("name")]),e("td",[a._v("原生 name 属性")]),e("td",[a._v("string")]),e("td",[a._v("—")]),e("td",[a._v("—")])])])])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[a._v("事件名称")]),e("th",[a._v("说明")]),e("th",[a._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[a._v("change")]),e("td",[a._v("绑定值变化时触发的事件")]),e("td",[a._v("选中的 Radio label 值")])])])])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[a._v("参数")]),e("th",[a._v("说明")]),e("th",[a._v("类型")]),e("th",[a._v("可选值")]),e("th",[a._v("默认值")])])]),e("tbody",[e("tr",[e("td",[a._v("value / v-model")]),e("td",[a._v("绑定值")]),e("td",[a._v("string / number / boolean")]),e("td",[a._v("—")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("size")]),e("td",[a._v("单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效")]),e("td",[a._v("string")]),e("td",[a._v("medium / small / mini")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("disabled")]),e("td",[a._v("是否禁用")]),e("td",[a._v("boolean")]),e("td",[a._v("—")]),e("td",[a._v("false")])]),e("tr",[e("td",[a._v("text-color")]),e("td",[a._v("按钮形式的 Radio 激活时的文本颜色")]),e("td",[a._v("string")]),e("td",[a._v("—")]),e("td",[a._v("#ffffff")])]),e("tr",[e("td",[a._v("fill")]),e("td",[a._v("按钮形式的 Radio 激活时的填充色和边框色")]),e("td",[a._v("string")]),e("td",[a._v("—")]),e("td",[a._v("#409EFF")])])])])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[a._v("事件名称")]),e("th",[a._v("说明")]),e("th",[a._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[a._v("change")]),e("td",[a._v("绑定值变化时触发的事件")]),e("td",[a._v("选中的 Radio label 值")])])])])},function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[a._v("参数")]),e("th",[a._v("说明")]),e("th",[a._v("类型")]),e("th",[a._v("可选值")]),e("th",[a._v("默认值")])])]),e("tbody",[e("tr",[e("td",[a._v("label")]),e("td",[a._v("Radio 的 value")]),e("td",[a._v("string / number")]),e("td",[a._v("—")]),e("td",[a._v("—")])]),e("tr",[e("td",[a._v("disabled")]),e("td",[a._v("是否禁用")]),e("td",[a._v("boolean")]),e("td",[a._v("—")]),e("td",[a._v("false")])]),e("tr",[e("td",[a._v("name")]),e("td",[a._v("原生 name 属性")]),e("td",[a._v("string")]),e("td",[a._v("—")]),e("td",[a._v("—")])])])])}],!1,null,null,null);e.default=r.exports}}]);