(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{120:function(e,t,n){"use strict";n.r(t);var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r={name:"component-doc",components:{"aex-demo0":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{min:1,max:10,label:"描述文字"},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:1}},methods:{handleChange:function(e){console.log(e)}}}),"aex-demo1":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{disabled:!0},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:1}}}),"aex-demo2":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{step:2},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:5}}}),"aex-demo3":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{step:2,"step-strictly":""},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:2}}}),"aex-demo4":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{precision:2,step:.1,max:10},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:1}}}),"aex-demo5":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{model:{value:t.num1,callback:function(e){t.num1=e},expression:"num1"}}),t._v(" "),e("aex-input-number",{attrs:{size:"medium"},model:{value:t.num2,callback:function(e){t.num2=e},expression:"num2"}}),t._v(" "),e("aex-input-number",{attrs:{size:"small"},model:{value:t.num3,callback:function(e){t.num3=e},expression:"num3"}}),t._v(" "),e("aex-input-number",{attrs:{size:"mini"},model:{value:t.num4,callback:function(e){t.num4=e},expression:"num4"}})]],2)},staticRenderFns:[]},{data:function(){return{num1:1,num2:1,num3:1,num4:1}}}),"aex-demo6":r({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-input-number",{attrs:{"controls-position":"right",min:1,max:10},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})]],2)},staticRenderFns:[]},{data:function(){return{num:1}},methods:{handleChange:function(e){console.log(e)}}})}},n=n(0),r=Object(n.a)(r,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("InputNumber 计数器")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 1\n            };\n        },\n        methods: {\n            handleChange(value) {\n                console.log(value);\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("禁用状态")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" :disabled="true"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 1\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("步数")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" :step="2"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 5\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("严格步数")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" :step="2" step-strictly></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 2\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("精度")]),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" :precision="2" :step="0.1" :max="10"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 1\n            }\n        }\n    };\n<\/script>\n')])])])],2),e._m(6),t("h3",[e._v("尺寸")]),e._m(7),t("demo-block",[t("template",{slot:"source"},[t("aex-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num1"></aex-input-number>\n    <aex-input-number size="medium" v-model="num2"></aex-input-number>\n    <aex-input-number size="small" v-model="num3"></aex-input-number>\n    <aex-input-number size="mini" v-model="num4"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num1: 1,\n                num2: 1,\n                num3: 1,\n                num4: 1\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("按钮位置")]),e._m(8),t("demo-block",[t("template",{slot:"source"},[t("aex-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></aex-input-number>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                num: 1\n            };\n        },\n        methods: {\n            handleChange(value) {\n                console.log(value);\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("Attributes")]),e._m(9),t("h3",[e._v("Events")]),e._m(10),t("h3",[e._v("Methods")]),e._m(11)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { InputNumber } from 'aex-ui';\nVue.use(InputNumber)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("在 "),t("code",[e._v("aex-input-number")]),e._v(" 元素中使用 "),t("code",[e._v("v-model")]),e._v(" 绑定变量即可，变量的初始值即为默认值。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("disabled")]),e._v(" 属性接受一个 "),t("code",[e._v("Boolean")]),e._v(" ，设置为 "),t("code",[e._v("true")]),e._v(" 即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置 "),t("code",[e._v("min")]),e._v(" 属性和 "),t("code",[e._v("max")]),e._v(" 属性，不设置 "),t("code",[e._v("min")]),e._v(" 和 "),t("code",[e._v("max")]),e._v(" 时，最小值为 0。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("允许定义递增递减的步数控制\n设置 "),t("code",[e._v("step")]),e._v(" 属性可以控制步长，接受一个 "),t("code",[e._v("Number")]),e._v(" 。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("step-strictly")]),e._v(" 属性接受一个 "),t("code",[e._v("Boolean")]),e._v(" 。如果这个属性被设置为 "),t("code",[e._v("true")]),e._v(" ，则只能输入步数的倍数。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("precision")]),e._v(" 属性可以控制数值精度，接收一个 "),t("code",[e._v("Number")]),e._v(" 。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{staticClass:"tip"},[t("p",[t("code",[e._v("precision")]),e._v(" 的值必须是一个非负整数，并且不能小于 "),t("code",[e._v("step")]),e._v(" 的小数位数。")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("medium")]),e._v(" 、 "),t("code",[e._v("small")]),e._v(" 、 "),t("code",[e._v("mini")]),e._v(" 三种尺寸的数字输入框")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("controls-position")]),e._v(" 属性可以控制按钮位置。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("设置计数器允许的最小值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("-Infinity")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("设置计数器允许的最大值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("Infinity")])]),t("tr",[t("td",[e._v("step")]),t("td",[e._v("计数器步长")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("1")])]),t("tr",[t("td",[e._v("step-strictly")]),t("td",[e._v("是否只能输入 step 的倍数")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("precision")]),t("td",[e._v("数值精度")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("计数器尺寸")]),t("td",[e._v("string")]),t("td",[e._v("large, small")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用计数器")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("controls")]),t("td",[e._v("是否使用控制按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("controls-position")]),t("td",[e._v("控制按钮位置")]),t("td",[e._v("string")]),t("td",[e._v("right")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("输入框关联的label文字")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("输入框默认 placeholder")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("绑定值被改变时触发")]),t("td",[e._v("currentValue, oldValue")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("在组件 Input 失去焦点时触发")]),t("td",[e._v("(event: Event)")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("在组件 Input 获得焦点时触发")]),t("td",[e._v("(event: Event)")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("focus")]),t("td",[e._v("使 input 获取焦点")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("select")]),t("td",[e._v("选中 input 中的文字")]),t("td",[e._v("—")])])])])}],!1,null,null,null);t.default=r.exports}}]);