(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{300:function(e,d,t){"use strict";t.r(d);var o=Object.assign||function(e){for(var d=1;d<arguments.length;d++){var t,o=arguments[d];for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},o={name:"component-doc",components:{"aex-demo0":o({render:function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("div",[d("aex-dropdown",[d("aex-text",[e._v("下拉菜单 "),d("i",{staticClass:"aex-icon-down"})]),e._v(" "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{}),"aex-demo1":o({render:function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("div",[d("aex-dropdown",{attrs:{"split-button":""}},[e._v("\n    默认尺寸\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1),e._v(" "),d("aex-dropdown",{attrs:{"split-button":"",size:"medium",type:"tertiary"}},[e._v("\n    medium\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1),e._v(" "),d("aex-dropdown",{attrs:{"split-button":"",size:"small",type:"success"}},[e._v("\n    small\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1),e._v(" "),d("aex-dropdown",{attrs:{"split-button":"",size:"mini",type:"outline"}},[e._v("\n    mini\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{}),"aex-demo2":o({render:function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("div",[d("aex-dropdown",{attrs:{"split-button":""},on:{click:e.handleClick}},[e._v("\n    下拉菜单\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{disabled:""}},[e._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{methods:{handleClick:function(){this.$message("你点击了左侧按钮！")}}}),"aex-demo3":o({render:function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("div",[d("aex-dropdown",{attrs:{"split-button":""},on:{command:e.handleCommand,click:e.handleClick}},[e._v("\n    "+e._s(e.value)+"\n    "),d("aex-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[d("aex-dropdown-item",{attrs:{command:"BTC 比特币"}},[e._v("BTC 比特币")]),e._v(" "),d("aex-dropdown-item",{attrs:{command:"ETH 以太坊"}},[e._v("ETH 以太坊")]),e._v(" "),d("aex-dropdown-item",{attrs:{command:"ADA 艾达币"}},[e._v("ADA 艾达币")]),e._v(" "),d("aex-dropdown-item",{attrs:{command:"EOS 柚子",divided:""}},[e._v("EOS 柚子 ")]),e._v(" "),d("aex-dropdown-item",{attrs:{command:"泰达币 USDT",disabled:""}},[e._v("泰达币 USDT")])],1)],1)],1)},staticRenderFns:[]},{data:function(){return{value:"BTC 比特币"}},methods:{handleClick:function(){this.$message("你点击了左侧按钮！")},handleCommand:function(e){this.value=e}}})}},t=t(1),o=Object(t.a)(o,function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("section",{staticClass:"content aex-doc"},[d("h1",[e._v("Dropdown 下拉菜单")]),d("h3",[e._v("按需引入")]),e._m(0),d("h3",[e._v("基础用法")]),e._m(1),e._m(2),d("demo-block",[d("template",{slot:"source"},[d("aex-demo0")],1),d("template",{slot:"highlight"},[d("pre",{pre:!0},[d("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-dropdown>\n    <aex-text>下拉菜单 <i class="aex-icon-down" /></aex-text>\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n')])])])],2),d("h3",[e._v("不同尺寸/样式")]),e._m(3),d("demo-block",[d("template",{slot:"source"},[d("aex-demo1")],1),d("template",{slot:"highlight"},[d("pre",{pre:!0},[d("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-dropdown split-button>\n    默认尺寸\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='medium' type='tertiary'>\n    medium\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='small' type='success'>\n    small\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<aex-dropdown split-button size='mini' type='outline'>\n    mini\n    <aex-dropdown-menu slot=\"dropdown\">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n")])])])],2),d("h3",[e._v("触发对象")]),e._m(4),d("demo-block",[d("template",{slot:"source"},[d("aex-demo2")],1),d("template",{slot:"highlight"},[d("pre",{pre:!0},[d("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-dropdown split-button @click="handleClick">\n    下拉菜单\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item>BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item>ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item>ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<script>\n    export default {\n        methods: {\n            handleClick() {\n                this.$message(\'你点击了左侧按钮！\')\n            }\n        }\n    }\n<\/script>\n')])])])],2),d("h3",[e._v("触发事件")]),e._m(5),d("demo-block",[d("template",{slot:"source"},[d("aex-demo3")],1),d("template",{slot:"highlight"},[d("pre",{pre:!0},[d("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-dropdown split-button @command="handleCommand" @click="handleClick">\n    {{value}}\n    <aex-dropdown-menu slot="dropdown">\n        <aex-dropdown-item command="BTC 比特币">BTC 比特币</aex-dropdown-item>\n        <aex-dropdown-item command="ETH 以太坊">ETH 以太坊</aex-dropdown-item>\n        <aex-dropdown-item command="ADA 艾达币">ADA 艾达币</aex-dropdown-item>\n        <aex-dropdown-item command="EOS 柚子" divided>EOS 柚子 </aex-dropdown-item>\n        <aex-dropdown-item command="泰达币 USDT" disabled>泰达币 USDT</aex-dropdown-item>\n    </aex-dropdown-menu>\n</aex-dropdown>\n<script>\n    export default {\n        data() {\n            return {\n                value: \'BTC 比特币\'\n            }\n        },\n        methods: {\n            handleClick() {\n                this.$message(\'你点击了左侧按钮！\')\n            },\n            handleCommand(val) {\n                this.value = val\n            }\n        }\n    }\n<\/script>\n')])])])],2),d("h3",[e._v("Dropdown Attributes")]),e._m(6),d("h3",[e._v("Dropdown Slots")]),e._m(7),d("h3",[e._v("Dropdown Events")]),e._m(8),d("h3",[e._v("Dropdown Menu Item Attributes")]),e._m(9)],1)},[function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("pre",[d("code",[e._v("import { Dropdown,DropdownItem } from 'aex-ui';\nVue.use(Dropdown)\nVue.use(DropdownItem)\n")])])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("p",[e._v("通过组件 "),d("code",[e._v("slot")]),e._v(" 来设置下拉触发的元素（必须是一个元素或者或者组件）"),d("br"),e._v("\n通过具名 "),d("code",[e._v('slot="dropdown"')]),e._v(" 来设置下拉菜单。")])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("p",[d("code",[e._v("divided")]),e._v(" : 设置分割线"),d("br"),d("code",[e._v("disabled")]),e._v(" : 禁用")])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("p",[e._v("通过 "),d("code",[e._v("size")]),e._v(" 属性设置尺寸，组件提供了 默认/ medium / small / mini 三个尺寸")])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("p",[d("code",[e._v("split-button")]),e._v(" 属性设置为true, 来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮")])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("p",[e._v("给 "),d("code",[e._v("aex-dropdown-item")]),e._v(" 添加 "),d("code",[e._v("command")]),e._v(" 指令 为 菜单项添加点击会触发事件"),d("br"),e._v("\n然后在 "),d("code",[e._v('<aex-dropdown @command="handleCommand" >')]),e._v(" 添加接收指令")])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("table",[d("thead",[d("tr",[d("th",[e._v("参数")]),d("th",[e._v("说明")]),d("th",[e._v("类型")]),d("th",[e._v("可选值")]),d("th",[e._v("默认值")])])]),d("tbody",[d("tr",[d("td",[e._v("type")]),d("td",[e._v("菜单按钮类型，同 Button 组件(只在 "),d("code",[e._v("split-button")]),e._v(" 为 true 的情况下有效)")]),d("td",[e._v("string")]),d("td",[e._v("—")]),d("td",[e._v("—")])]),d("tr",[d("td",[e._v("size")]),d("td",[e._v("菜单尺寸，在 "),d("code",[e._v("split-button")]),e._v(" 为 true 的情况下也对触发按钮生效")]),d("td",[e._v("string")]),d("td",[e._v("medium / small / mini")]),d("td",[e._v("—")])]),d("tr",[d("td",[e._v("split-button")]),d("td",[e._v("下拉触发元素呈现为按钮组")]),d("td",[e._v("boolean")]),d("td",[e._v("—")]),d("td",[e._v("false")])]),d("tr",[d("td",[e._v("placement")]),d("td",[e._v("菜单弹出位置")]),d("td",[e._v("string")]),d("td",[e._v("top/top-start/top-end/bottom/bottom-start/bottom-end")]),d("td",[e._v("bottom-end")])]),d("tr",[d("td",[e._v("trigger")]),d("td",[e._v("触发下拉的行为")]),d("td",[e._v("string")]),d("td",[e._v("hover, click")]),d("td",[e._v("hover")])]),d("tr",[d("td",[e._v("hide-on-click")]),d("td",[e._v("是否在点击菜单项后隐藏菜单")]),d("td",[e._v("boolean")]),d("td",[e._v("—")]),d("td",[e._v("true")])]),d("tr",[d("td",[e._v("show-timeout")]),d("td",[e._v("展开下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),d("td",[e._v("number")]),d("td",[e._v("—")]),d("td",[e._v("250")])]),d("tr",[d("td",[e._v("hide-timeout")]),d("td",[e._v("收起下拉菜单的延时（仅在 trigger 为 hover 时有效）")]),d("td",[e._v("number")]),d("td",[e._v("—")]),d("td",[e._v("150")])]),d("tr",[d("td",[e._v("tabindex")]),d("td",[e._v("Dropdown 组件的 tabindex")]),d("td",[e._v("number")]),d("td",[e._v("—")]),d("td",[e._v("0")])])])])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("table",[d("thead",[d("tr",[d("th",[e._v("Name")]),d("th",[e._v("说明")])])]),d("tbody",[d("tr",[d("td",[e._v("default")]),d("td",[e._v("触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件")])]),d("tr",[d("td",[e._v("dropdown")]),d("td",[e._v("下拉列表， "),d("code",[e._v('<aex-dropdown-menu slot="dropdown">')]),e._v(" 组件")])])])])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("table",[d("thead",[d("tr",[d("th",[e._v("事件名称")]),d("th",[e._v("说明")]),d("th",[e._v("回调参数")])])]),d("tbody",[d("tr",[d("td",[e._v("click")]),d("td",[d("code",[e._v("split-button")]),e._v(" 为 true 时，点击左侧按钮的回调")]),d("td",[e._v("—")])]),d("tr",[d("td",[e._v("command")]),d("td",[e._v("点击菜单项触发的事件回调")]),d("td",[e._v("dropdown-item 的指令")])]),d("tr",[d("td",[e._v("visible-change")]),d("td",[e._v("下拉框出现/隐藏时触发")]),d("td",[e._v("出现则为 true，隐藏则为 false")])])])])},function(){var e=this,d=e.$createElement,d=e._self._c||d;return d("table",[d("thead",[d("tr",[d("th",[e._v("参数")]),d("th",[e._v("说明")]),d("th",[e._v("类型")]),d("th",[e._v("可选值")]),d("th",[e._v("默认值")])])]),d("tbody",[d("tr",[d("td",[e._v("command")]),d("td",[e._v("指令")]),d("td",[e._v("string/number/object")]),d("td",[e._v("—")]),d("td",[e._v("—")])]),d("tr",[d("td",[e._v("disabled")]),d("td",[e._v("禁用")]),d("td",[e._v("boolean")]),d("td",[e._v("—")]),d("td",[e._v("false")])]),d("tr",[d("td",[e._v("divided")]),d("td",[e._v("显示分割线")]),d("td",[e._v("boolean")]),d("td",[e._v("—")]),d("td",[e._v("false")])]),d("tr",[d("td",[e._v("icon")]),d("td",[e._v("图标类名")]),d("td",[e._v("string")]),d("td",[e._v("—")]),d("td",[e._v("—")])])])])}],!1,null,null,null);d.default=o.exports}}]);