(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{228:function(d,e,t){"use strict";t.r(e);var o=Object.assign||function(d){for(var e=1;e<arguments.length;e++){var t,o=arguments[e];for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(d[t]=o[t])}return d},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("div",[e("aex-dropdown",[e("aex-text",[d._v("下拉菜单 "),e("i",{staticClass:"aex-icon-return_down"})]),d._v(" "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{}),"aex-demo1":o({render:function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("div",[e("aex-dropdown",{attrs:{"split-button":""}},[d._v("\n    默认尺寸\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1),d._v(" "),e("aex-dropdown",{attrs:{"split-button":"",size:"medium",type:"tertiary"}},[d._v("\n    medium\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1),d._v(" "),e("aex-dropdown",{attrs:{"split-button":"",size:"small",type:"success"}},[d._v("\n    small\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1),d._v(" "),e("aex-dropdown",{attrs:{"split-button":"",size:"mini",type:"outline"}},[d._v("\n    mini\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{}),"aex-demo2":o({render:function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("div",[e("aex-dropdown",{attrs:{"split-button":""},on:{click:d.handleClick}},[d._v("\n    下拉菜单\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{disabled:""}},[d._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{methods:{handleClick:function(){this.$message("你点击了左侧按钮！")}}}),"aex-demo3":o({render:function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("div",[e("aex-dropdown",{attrs:{"split-button":""},on:{command:d.handleCommand,click:d.handleClick}},[d._v("\n    "+d._s(d.value)+"\n    "),e("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("aex-dropdown-item",{attrs:{command:"BTC 比特币"}},[d._v("BTC 比特币")]),d._v(" "),e("aex-dropdown-item",{attrs:{command:"ETH 以太坊"}},[d._v("ETH 以太坊")]),d._v(" "),e("aex-dropdown-item",{attrs:{command:"ADA 艾达币"}},[d._v("ADA 艾达币")]),d._v(" "),e("aex-dropdown-item",{attrs:{command:"EOS 柚子",divided:""}},[d._v("EOS 柚子 ")]),d._v(" "),e("aex-dropdown-item",{attrs:{command:"泰达币 USDT",disabled:""}},[d._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{data:function(){return{value:"BTC 比特币"}},methods:{handleClick:function(){this.$message("你点击了左侧按钮！")},handleCommand:function(d){this.value=d}}})}},t=t(1),o=Object(t.a)(o,function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[d._v("Dropdown 下拉菜单")]),e("h3",[d._v("基础用法")]),d._m(0),d._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[d._v('<aex-dropdown>\n    <aex-text>下拉菜单 <i class="aex-icon-return_down" /></aex-text>\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n')])])])],2),e("h3",[d._v("不同尺寸/样式")]),d._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[d._v("<aex-dropdown split-button>\n    默认尺寸\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='medium' type='tertiary'>\n    medium\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='small' type='success'>\n    small\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='mini' type='outline'>\n    mini\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n")])])])],2),e("h3",[d._v("触发对象")]),d._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[d._v('<aex-dropdown split-button @click="handleClick">\n    下拉菜单\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<script>\n    export default {\n        methods: {\n            handleClick() {\n                this.$message(\'你点击了左侧按钮！\')\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[d._v("触发事件")]),d._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[d._v('<aex-dropdown split-button @command="handleCommand" @click="handleClick">\n    {{value}}\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item command="BTC 比特币">BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item command="ETH 以太坊">ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item command="ADA 艾达币">ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item command="EOS 柚子" divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item command="泰达币 USDT" disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<script>\n    export default {\n        data() {\n            return {\n                value: \'BTC 比特币\'\n            }\n        },\n        methods: {\n            handleClick() {\n                this.$message(\'你点击了左侧按钮！\')\n            },\n            handleCommand(val) {\n                this.value = val\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[d._v("Dropdown Attributes")]),d._m(5),e("h3",[d._v("Dropdown Slots")]),d._m(6),e("h3",[d._v("Dropdown Events")]),d._m(7),e("h3",[d._v("Dropdown Menu Item Attributes")]),d._m(8)],1)},[function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("p",[d._v("通过组件 "),e("code",[d._v("slot")]),d._v(" 来设置下拉触发的元素（必须是一个元素或者或者组件）"),e("br"),d._v("\n通过具名 "),e("code",[d._v('slot="dropdown"')]),d._v(" 来设置下拉菜单。")])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("p",[e("code",[d._v("divided")]),d._v(" : 设置分割线"),e("br"),e("code",[d._v("disabled")]),d._v(" : 禁用")])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("p",[d._v("通过 "),e("code",[d._v("size")]),d._v(" 属性设置尺寸，组件提供了 默认/ medium / small / mini 三个尺寸")])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("p",[e("code",[d._v("split-button")]),d._v(" 属性设置为true, 来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮")])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("p",[d._v("给 "),e("code",[d._v("aex-dropdown-item")]),d._v(" 添加 "),e("code",[d._v("command")]),d._v(" 指令 为 菜单项添加点击会触发事件"),e("br"),d._v("\n然后在 "),e("code",[d._v('<aex-dropdown @command="handleCommand" >')]),d._v(" 添加接收指令")])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[d._v("参数")]),e("th",[d._v("说明")]),e("th",[d._v("类型")]),e("th",[d._v("可选值")]),e("th",[d._v("默认值")])])]),e("tbody",[e("tr",[e("td",[d._v("type")]),e("td",[d._v("菜单按钮类型，同 Button 组件(只在 "),e("code",[d._v("split-button")]),d._v(" 为 true 的情况下有效)")]),e("td",[d._v("string")]),e("td",[d._v("—")]),e("td",[d._v("—")])]),e("tr",[e("td",[d._v("size")]),e("td",[d._v("菜单尺寸，在 "),e("code",[d._v("split-button")]),d._v(" 为 true 的情况下也对触发按钮生效")]),e("td",[d._v("string")]),e("td",[d._v("medium / small / mini")]),e("td",[d._v("—")])]),e("tr",[e("td",[d._v("split-button")]),e("td",[d._v("下拉触发元素呈现为按钮组")]),e("td",[d._v("boolean")]),e("td",[d._v("—")]),e("td",[d._v("false")])]),e("tr",[e("td",[d._v("placement")]),e("td",[d._v("菜单弹出位置")]),e("td",[d._v("string")]),e("td",[d._v("top/top-start/top-end/bottom/bottom-start/bottom-end")]),e("td",[d._v("bottom-end")])]),e("tr",[e("td",[d._v("trigger")]),e("td",[d._v("触发下拉的行为")]),e("td",[d._v("string")]),e("td",[d._v("hover, click")]),e("td",[d._v("hover")])]),e("tr",[e("td",[d._v("hide-on-click")]),e("td",[d._v("是否在点击菜单项后隐藏菜单")]),e("td",[d._v("boolean")]),e("td",[d._v("—")]),e("td",[d._v("true")])]),e("tr",[e("td",[d._v("show-timeout")]),e("td",[d._v("展开下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),e("td",[d._v("number")]),e("td",[d._v("—")]),e("td",[d._v("250")])]),e("tr",[e("td",[d._v("hide-timeout")]),e("td",[d._v("收起下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),e("td",[d._v("number")]),e("td",[d._v("—")]),e("td",[d._v("150")])]),e("tr",[e("td",[d._v("tabindex")]),e("td",[d._v("Dropdown 组件的 tabindex")]),e("td",[d._v("number")]),e("td",[d._v("—")]),e("td",[d._v("0")])])])])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[d._v("Name")]),e("th",[d._v("说明")])])]),e("tbody",[e("tr",[e("td",[d._v("default")]),e("td",[d._v("触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件")])]),e("tr",[e("td",[d._v("dropdown")]),e("td",[d._v("下拉列表， "),e("code",[d._v('<aex-dropdown-menu slot="dropdown">')]),d._v(" 组件")])])])])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[d._v("事件名称")]),e("th",[d._v("说明")]),e("th",[d._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[d._v("click")]),e("td",[e("code",[d._v("split-button")]),d._v(" 为 true 时，点击左侧按钮的回调")]),e("td",[d._v("—")])]),e("tr",[e("td",[d._v("command")]),e("td",[d._v("点击菜单项触发的事件回调")]),e("td",[d._v("dropdown-item 的指令")])]),e("tr",[e("td",[d._v("visible-change")]),e("td",[d._v("下拉框出现/隐藏时触发")]),e("td",[d._v("出现则为 true，隐藏则为 false")])])])])},function(){var d=this,e=d.$createElement,e=d._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[d._v("参数")]),e("th",[d._v("说明")]),e("th",[d._v("类型")]),e("th",[d._v("可选值")]),e("th",[d._v("默认值")])])]),e("tbody",[e("tr",[e("td",[d._v("command")]),e("td",[d._v("指令")]),e("td",[d._v("string/number/object")]),e("td",[d._v("—")]),e("td",[d._v("—")])]),e("tr",[e("td",[d._v("disabled")]),e("td",[d._v("禁用")]),e("td",[d._v("boolean")]),e("td",[d._v("—")]),e("td",[d._v("false")])]),e("tr",[e("td",[d._v("divided")]),e("td",[d._v("显示分割线")]),e("td",[d._v("boolean")]),e("td",[d._v("—")]),e("td",[d._v("false")])]),e("tr",[e("td",[d._v("icon")]),e("td",[d._v("图标类名")]),e("td",[d._v("string")]),e("td",[d._v("—")]),e("td",[d._v("—")])])])])}],!1,null,null,null);e.default=o.exports}}]);