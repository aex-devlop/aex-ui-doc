(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{276:function(e,t,a){"use strict";a.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a,n=arguments[t];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-text",[t._v("默认")]),t._v(" "),e("aex-slider",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("自定义初始值")]),t._v(" "),e("aex-slider",{model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("隐藏 Tooltip")]),t._v(" "),e("aex-slider",{attrs:{"show-tooltip":!1},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("格式化 Tooltip")]),t._v(" "),e("aex-slider",{attrs:{"format-tooltip":t.formatTooltip},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("禁用")]),t._v(" "),e("aex-slider",{attrs:{disabled:""},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("自定义颜色")]),t._v(" "),e("aex-slider",{attrs:{color:"#3ab293"},model:{value:t.value5,callback:function(e){t.value5=e},expression:"value5"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value1:0,value2:50,value3:36,value4:48,value5:42}},methods:{formatTooltip:function(e){return e/100}}}),"aex-demo1":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-text",[t._v("不显示间断点")]),t._v(" "),e("aex-slider",{attrs:{step:10},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),e("div",[e("aex-text",[t._v("显示间断点")]),t._v(" "),e("aex-slider",{attrs:{step:10,"show-stops":""},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value1:0,value2:50}}}),"aex-demo2":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-slider",{attrs:{"show-input":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value:0}}}),"aex-demo3":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-slider",{attrs:{range:"","show-stops":"",max:10},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value:[4,8]}}}),"aex-demo4":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-slider",{attrs:{vertical:"",height:"200px"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value:0}}}),"aex-demo5":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("div",[e("aex-slider",{attrs:{marks:t.marks},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value:10,marks:{10:"10%",25:"25%",50:"50%",75:{style:{color:"#1989FA"},label:this.$createElement("b",{style:{color:"red"}},"75%")}}}}})}},a=a(1),n=Object(a.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Slider 滑块")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法")]),t("p",[e._v("在拖动滑块时，显示当前值, 可以通过设置绑定值自定义滑块的初始值")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <aex-text>默认</aex-text>\n        <aex-slider v-model="value1"></aex-slider>\n    </div>\n    <div>\n        <aex-text>自定义初始值</aex-text>\n        <aex-slider v-model="value2"></aex-slider>\n    </div>\n    <div>\n        <aex-text>隐藏 Tooltip</aex-text>\n        <aex-slider v-model="value3" :show-tooltip="false"></aex-slider>\n    </div>\n    <div>\n        <aex-text>格式化 Tooltip</aex-text>\n        <aex-slider v-model="value4" :format-tooltip="formatTooltip"></aex-slider>\n    </div>\n    <div>\n        <aex-text>禁用</aex-text>\n        <aex-slider v-model="value5" disabled></aex-slider>\n    </div>\n    <div>\n        <aex-text>自定义颜色</aex-text>\n        <aex-slider v-model="value5" color=\'#3ab293\'></aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: 0,\n                value2: 50,\n                value3: 36,\n                value4: 48,\n                value5: 42\n            }\n        },\n        methods: {\n            formatTooltip(val) {\n                return val / 100;\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("离散值")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <aex-text>不显示间断点</aex-text>\n        <aex-slider v-model="value1" :step="10">\n        </aex-slider>\n    </div>\n    <div>\n        <aex-text>显示间断点</aex-text>\n        <aex-slider v-model="value2" :step="10" show-stops>\n        </aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: 0,\n                value2: 50\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("带有输入框")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <aex-slider v-model="value" show-input>\n        </aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: 0\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("范围选择")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <aex-slider v-model="value" range show-stops :max="10">\n        </aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: [4, 8]\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("竖向模式")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <aex-slider v-model="value" vertical height="200px">\n        </aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: 0\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("展示标记")]),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("aex-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <div>\n        <aex-slider v-model=\"value\" :marks=\"marks\">\n        </aex-slider>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: 10,\n                marks: {\n                    10: '10%',\n                    25: '25%',\n                    50: '50%',\n                    75: {\n                        style: {\n                            color: '#1989FA'\n                        },\n                        label: this.$createElement('b', {\n                            style: {\n                                color: 'red'\n                            }\n                        }, '75%')\n                    },\n                }\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("Attributes")]),e._m(6),t("h3",[e._v("Events")]),e._m(7)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Slider } from 'aex-ui';\nVue.use(Slider)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("改变 "),t("code",[e._v("step")]),e._v(" 的值可以改变步长"),t("br"),e._v("\n设置 "),t("code",[e._v("show-stops")]),e._v(" 属性可以显示间断点")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("show-input")]),e._v(" 属性会在右侧显示一个输入框, 输入后回车即可改变")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("range")]),e._v(" 即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("vertical")]),e._v(" 可使 Slider 变成竖向模式，此时必须设置高度 "),t("code",[e._v("height")]),e._v(" 属性")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置 "),t("code",[e._v("marks")]),e._v(" 属性可以展示标记")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("最小值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("最大值")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("100")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("step")]),t("td",[e._v("步长")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("1")])]),t("tr",[t("td",[e._v("show-input")]),t("td",[e._v("是否显示输入框，仅在非范围选择时有效")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-input-controls")]),t("td",[e._v("在显示输入框的情况下，是否显示输入框的控制按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("input-size")]),t("td",[e._v("输入框的尺寸")]),t("td",[e._v("string")]),t("td",[e._v("large / medium / small / mini")]),t("td",[e._v("small")])]),t("tr",[t("td",[e._v("show-stops")]),t("td",[e._v("是否显示间断点")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-tooltip")]),t("td",[e._v("是否显示 tooltip")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("format-tooltip")]),t("td",[e._v("格式化 tooltip message")]),t("td",[e._v("function(value)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("range")]),t("td",[e._v("是否为范围选择")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("vertical")]),t("td",[e._v("是否竖向模式")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("height")]),t("td",[e._v("Slider 高度，竖向模式时必填")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("屏幕阅读器标签")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("debounce")]),t("td",[e._v("输入时的去抖延迟，毫秒，仅在 "),t("code",[e._v("show-input")]),e._v(" 等于true时有效")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("300")])]),t("tr",[t("td",[e._v("marks")]),t("td",[e._v("标记， key 的类型必须为 number 且取值在闭区间 "),t("code",[e._v("[min, max]")]),e._v(" 内，每个标记可以单独设置样式")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("tooltip-class")]),t("td",[e._v("tooltip 的自定义类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("color")]),t("td",[e._v("自定义slider的颜色")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#3378ff")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）")]),t("td",[e._v("改变后的值")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("数据改变时触发（使用鼠标拖曳时，活动过程实时触发）")]),t("td",[e._v("改变后的值")])])])])}],!1,null,null,null);t.default=n.exports}}]);