(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{255:function(e,t,c){"use strict";c.r(t);var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c,a=arguments[t];for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},a={name:"component-doc",components:{"aex-demo0":a({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("选项1")]),t._v(" "),e("aex-checkbox",{attrs:{disabled:""},model:{value:t.checked1,callback:function(e){t.checked1=e},expression:"checked1"}},[t._v("备选项2")]),t._v(" "),e("aex-checkbox",{attrs:{"true-label":"选中了","false-label":"不选这个"},on:{change:t._onChange},model:{value:t.checked2,callback:function(e){t.checked2=e},expression:"checked2"}},[t._v("备选项2")])]],2)},staticRenderFns:[]},{data:function(){return{checked:!0,checked1:!1,checked2:"选中了"}},methods:{_onChange:function(e){console.log(e)}}}),"aex-demo1":a({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-checkbox-group",{attrs:{min:0,max:3},on:{change:t._onChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox",{attrs:{label:"多选 A"}}),t._v(" "),e("aex-checkbox",{attrs:{label:"多选 B"}}),t._v(" "),e("aex-checkbox",{attrs:{label:"多选 C"}}),t._v(" "),e("aex-checkbox",{attrs:{label:"多选 D"}}),t._v(" "),e("aex-checkbox",{attrs:{label:"多选 E"}}),t._v(" "),e("aex-checkbox",{attrs:{label:"多选 F"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{checkList:[]}},methods:{_onChange:function(e){console.log(e)}}}),"aex-demo2":a({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox-button",{attrs:{label:"多选 A"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 B"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"medium"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox-button",{attrs:{label:"多选 A"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 B"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"small"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox-button",{attrs:{label:"多选 A"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 B"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{attrs:{size:"mini"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox-button",{attrs:{label:"多选 A"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 B"}}),t._v(" "),e("aex-checkbox-button",{attrs:{label:"多选 C"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{checkList:["多选 A"]}}}),"aex-demo3":a({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox",{attrs:{border:"",label:"多选 A"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 B"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"medium"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox",{attrs:{border:"",label:"多选 A"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 B"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{staticStyle:{"margin-bottom":"20px"},attrs:{size:"small"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox",{attrs:{border:"",label:"多选 A"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 B"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 C"}})],1),t._v(" "),e("aex-checkbox-group",{attrs:{size:"mini"},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[e("aex-checkbox",{attrs:{border:"",label:"多选 A"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 B"}}),t._v(" "),e("aex-checkbox",{attrs:{border:"",label:"多选 C"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{checkList:["多选 A"]}}}),"aex-demo4":a({render:function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[[c("aex-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" "),c("div",{staticStyle:{margin:"15px 0"}}),t._v(" "),c("aex-checkbox-group",{on:{change:t.handleCheckedCitiesChange},model:{value:t.checkedCoins,callback:function(e){t.checkedCoins=e},expression:"checkedCoins"}},t._l(t.coins,function(e){return c("aex-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}),1)]],2)},staticRenderFns:[]},{data:function(){return{checkAll:!1,checkedCoins:["BTC"],coins:["BTC","ETH","GAT","BCH","LTC"],isIndeterminate:!0}},methods:{handleCheckAllChange:function(e){this.checkedCoins=e?this.coins:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){e=e.length;this.checkAll=e===this.coins.length,this.isIndeterminate=0<e&&e<this.coins.length}}})}},c=c(2),a=Object(c.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Checkbox 多选框")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法(单选)")]),e._m(1),t("p",[e._v("disabled 属性 禁用")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-checkbox v-model=\"checked\">选项1</aex-checkbox>\n    <aex-checkbox v-model=\"checked1\" disabled>备选项2</aex-checkbox>\n    <aex-checkbox v-model=\"checked2\" true-label='选中了' false-label='不选这个' @change='_onChange'>备选项2</aex-checkbox>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                checked: true,\n                checked1: false,\n                checked2: '选中了'\n            };\n        },\n        methods: {\n            _onChange(val) {\n                console.log(val)\n            }\n        },\n    };\n<\/script>\n")])])])],2),t("h3",[e._v("多选")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-checkbox-group v-model="checkList" @change=\'_onChange\' :min=\'0\' :max=\'3\'>\n        <aex-checkbox label="多选 A"></aex-checkbox>\n        <aex-checkbox label="多选 B"></aex-checkbox>\n        <aex-checkbox label="多选 C"></aex-checkbox>\n        <aex-checkbox label="多选 D"></aex-checkbox>\n        <aex-checkbox label="多选 E"></aex-checkbox>\n        <aex-checkbox label="多选 F"></aex-checkbox>\n    </aex-checkbox-group>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                checkList: []\n            };\n        },\n        methods: {\n            _onChange(val) {\n                console.log(val)\n            }\n        },\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("按钮样式")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-checkbox-group v-model="checkList" style="margin-bottom: 20px">\n        <aex-checkbox-button label="多选 A"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 B"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 C"></aex-checkbox-button>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="medium" style="margin-bottom: 20px">\n        <aex-checkbox-button label="多选 A"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 B"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 C"></aex-checkbox-button>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="small" style="margin-bottom: 20px">\n        <aex-checkbox-button label="多选 A"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 B"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 C"></aex-checkbox-button>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="mini">\n        <aex-checkbox-button label="多选 A"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 B"></aex-checkbox-button>\n        <aex-checkbox-button label="多选 C"></aex-checkbox-button>\n    </aex-checkbox-group>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                checkList: [\'多选 A\']\n            };\n        },\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("边框样式")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-checkbox-group v-model="checkList" style="margin-bottom: 20px">\n        <aex-checkbox border label="多选 A"></aex-checkbox>\n        <aex-checkbox border label="多选 B"></aex-checkbox>\n        <aex-checkbox border label="多选 C"></aex-checkbox>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="medium" style="margin-bottom: 20px">\n        <aex-checkbox border label="多选 A"></aex-checkbox>\n        <aex-checkbox border label="多选 B"></aex-checkbox>\n        <aex-checkbox border label="多选 C"></aex-checkbox>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="small" style="margin-bottom: 20px">\n        <aex-checkbox border label="多选 A"></aex-checkbox>\n        <aex-checkbox border label="多选 B"></aex-checkbox>\n        <aex-checkbox border label="多选 C"></aex-checkbox>\n    </aex-checkbox-group>\n    <aex-checkbox-group v-model="checkList" size="mini">\n        <aex-checkbox border label="多选 A"></aex-checkbox>\n        <aex-checkbox border label="多选 B"></aex-checkbox>\n        <aex-checkbox border label="多选 C"></aex-checkbox>\n    </aex-checkbox-group>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                checkList: [\'多选 A\']\n            };\n        },\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("全选/全取消")]),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</aex-checkbox>\n    <div style="margin: 15px 0;"></div>\n    <aex-checkbox-group v-model="checkedCoins" @change="handleCheckedCitiesChange">\n        <aex-checkbox v-for="coin in coins" :label="coin" :key="coin">{{coin}}</aex-checkbox>\n    </aex-checkbox-group>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                checkAll: false,\n                checkedCoins: [\'BTC\'],\n                coins: [\'BTC\', \'ETH\', \'GAT\', \'BCH\', \'LTC\', ],\n                isIndeterminate: true\n            };\n        },\n        methods: {\n            handleCheckAllChange(val) {\n                this.checkedCoins = val ? this.coins : [];\n                this.isIndeterminate = false;\n            },\n            handleCheckedCitiesChange(value) {\n                let checkedCount = value.length;\n                this.checkAll = checkedCount === this.coins.length;\n                this.isIndeterminate = checkedCount > 0 && checkedCount < this.coins.length;\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("Checkbox Attributes")]),e._m(6),t("h3",[e._v("Checkbox Events")]),e._m(7),t("h3",[e._v("Checkbox-group Attributes")]),e._m(8),t("h3",[e._v("Checkbox-group Events")]),e._m(9),t("h3",[e._v("Checkbox-button Attributes")]),e._m(10)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Checkbox } from 'aex-ui';\nVue.use(Checkbox)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("在 "),t("code",[e._v("aex-checkbox")]),e._v(" 使用 "),t("code",[e._v("v-model")]),e._v(" 绑定变量，单一的 "),t("code",[e._v("checkbox")]),e._v(" 中，默认绑定变量的值会是 "),t("code",[e._v("Boolean")]),e._v(" ，选中为 "),t("code",[e._v("true")]),e._v(" , 反之为 "),t("code",[e._v("false")]),e._v(" 。"),t("br"),e._v("\n也可以通过 "),t("code",[e._v("true-label")]),e._v(" 和 "),t("code",[e._v("false-label")]),e._v(" 分别设置 "),t("code",[e._v("选中时的值")]),e._v(" 和 "),t("code",[e._v("没有选中时的值")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("checkbox-group")]),e._v(" 元素包裹，把多个 checkbox 管理为一组，并在 "),t("code",[e._v("checkbox-group")]),e._v(" 组件上使用 "),t("code",[e._v("v-model")]),e._v(" 绑定 "),t("code",[e._v("数组类型")]),e._v(" 的变量，选中的内容会添加到绑定的 "),t("code",[e._v("数组")]),e._v(" 中."),t("br"),e._v("\n跟单独使用不一样的是: 某个 "),t("code",[e._v("aex-checkbox")]),e._v(" 选中时，返回的是对应的 "),t("code",[e._v("label")]),e._v(" 的值，并把返回值装入绑定的 数组里\n"),t("code",[e._v("change")]),e._v(" 属性可以监听变化"),t("br"),t("code",[e._v("min")]),e._v(" 和 "),t("code",[e._v("max")]),e._v(" 属性能够限制可以被勾选的项目的数量")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("把aex-checkbox 换成 aex-checkbox-button元素即可实现 按钮样式\n"),t("code",[e._v("size")]),e._v(" 属性设置 大小 default / medium / small / mini")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("添加 "),t("code",[e._v("border")]),e._v(" 属性可以渲染为带有边框的单选框"),t("br"),t("code",[e._v("size")]),e._v(" 属性设置 大小 default / medium / small / mini")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("通过 "),t("code",[e._v("indeterminate")]),e._v(" 属性配合可实现全选效果，值为 "),t("code",[e._v("true")]),e._v(" 表示有选择但是没有全部选择, 值为 "),t("code",[e._v("false")]),e._v(" 时表示全部选择了或者全部取消了")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("选中状态的值（只有在 "),t("code",[e._v("checkbox-group")]),e._v(" 或者绑定对象类型为 "),t("code",[e._v("array")]),e._v(" 时有效）")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("true-label")]),t("td",[e._v("选中时的值")]),t("td",[e._v("string / number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("false-label")]),t("td",[e._v("没有选中时的值")]),t("td",[e._v("string / number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("border")]),t("td",[e._v("是否显示边框")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("Checkbox 的尺寸，仅在 border 为真时有效")]),t("td",[e._v("string")]),t("td",[e._v("medium / small / mini")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生 name 属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("checked")]),t("td",[e._v("当前是否勾选")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("indeterminate")]),t("td",[e._v("设置 indeterminate 状态，只负责样式控制")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("当绑定值变化时触发的事件")]),t("td",[e._v("更新后的值")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("array")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效")]),t("td",[e._v("string")]),t("td",[e._v("medium / small / mini")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("min")]),t("td",[e._v("可被勾选的 checkbox 的最小数量")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("max")]),t("td",[e._v("可被勾选的 checkbox 的最大数量")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("text-color")]),t("td",[e._v("按钮形式的 Checkbox 激活时的文本颜色")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#ffffff")])]),t("tr",[t("td",[e._v("fill")]),t("td",[e._v("按钮形式的 Checkbox 激活时的填充色和边框色")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#3378ff")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("当绑定值变化时触发的事件")]),t("td",[e._v("更新后的值")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("选中状态的值（只有在 "),t("code",[e._v("checkbox-group")]),e._v(" 或者绑定对象类型为 "),t("code",[e._v("array")]),e._v(" 时有效）")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("true-label")]),t("td",[e._v("选中时的值")]),t("td",[e._v("string / number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("false-label")]),t("td",[e._v("没有选中时的值")]),t("td",[e._v("string / number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生 name 属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("checked")]),t("td",[e._v("当前是否勾选")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])}],!1,null,null,null);t.default=a.exports}}]);