(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{306:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("aex-button",{attrs:{slot:"extra"},slot:"extra"},[e._v("Extra")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[e._v("资产总览")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[e._v("币币账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[e._v("流动性账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[e._v("合约账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[e._v("理财账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[e._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first"}},methods:{handleClick:function(t,e){console.log(t,e)}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-tabs",{staticStyle:{marginBottom:"20px"},attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[e._v("资产总览")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[e._v("币币账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[e._v("流动性账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[e._v("合约账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[e._v("理财账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[e._v("质押资金")])],1),e._v(" "),t("aex-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[e._v("资产总览")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[e._v("币币账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[e._v("流动性账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[e._v("合约账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[e._v("理财账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[e._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first"}},methods:{handleClick:function(t,e){console.log(t,e)}}}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-button-group",{staticStyle:{"margin-bottom":"30px"}},[t("aex-button",{attrs:{type:"outline"},on:{click:function(t){e.tabPosition="top"}}},[e._v("top")]),e._v(" "),t("aex-button",{attrs:{type:"outline"},on:{click:function(t){e.tabPosition="right"}}},[e._v("right")]),e._v(" "),t("aex-button",{attrs:{type:"outline"},on:{click:function(t){e.tabPosition="bottom"}}},[e._v("bottom")]),e._v(" "),t("aex-button",{attrs:{type:"outline"},on:{click:function(t){e.tabPosition="left"}}},[e._v("left")])],1),e._v(" "),t("aex-tabs",{staticStyle:{height:"300px"},attrs:{tabPosition:e.tabPosition},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("div",{attrs:{slot:"extra"},slot:"extra"},[e._v("extra")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[e._v("资产总览")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[e._v("币币账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[e._v("流动性账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[e._v("合约账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[e._v("理财账户")]),e._v(" "),t("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[e._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first",tabPosition:"top"}}}),"aex-demo3":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-tabs",{on:{"tab-click":t.handleClick}},[e("aex-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"aex-icon-value"}),t._v("资产总览")]),t._v("\n            资产总览\n        ")]),t._v(" "),e("aex-tab-pane",[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"aex-icon-assetsCNC"}),t._v("币币账户")]),t._v("\n            币币账户\n        ")]),t._v(" "),e("aex-tab-pane",{attrs:{label:"流动性账户"}},[t._v("流动性账户")]),t._v(" "),e("aex-tab-pane",{attrs:{label:"合约账户"}},[t._v("合约账户")]),t._v(" "),e("aex-tab-pane",{attrs:{label:"理财账户"}},[t._v("理财账户")]),t._v(" "),e("aex-tab-pane",{attrs:{label:"质押资金"}},[t._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{}},methods:{handleClick:function(t,e){console.log(t,e)}}})}},a=a(0),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Tabs 标签页")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-tabs v-model="activeName" @tab-click="handleClick">\n        <aex-button slot=\'extra\'>Extra</aex-button>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\'\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("选项卡样式")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-tabs v-model="activeName" @tab-click="handleClick" type=\'card\' style=\'marginBottom:20px\'>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n    <aex-tabs v-model="activeName" @tab-click="handleClick" type=\'border-card\'>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\'\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("位置")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-button-group style="margin-bottom: 30px;">\n        <aex-button type=\'outline\' @click=\'tabPosition="top"\'>top</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="right"\'>right</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="bottom"\'>bottom</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="left"\'>left</aex-button>\n    </aex-button-group>\n    <aex-tabs v-model="activeName" :tabPosition=\'tabPosition\' style=\'height:300px\'>\n        <div slot="extra">extra</div>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\',\n                tabPosition: \'top\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("自定义标签页")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-tabs @tab-click="handleClick">\n        <aex-tab-pane>\n            <span slot="label"><i class=\'aex-icon-value\' />资产总览</span>\n            资产总览\n        </aex-tab-pane>\n        <aex-tab-pane>\n            <span slot="label"><i class=\'aex-icon-assetsCNC\' />币币账户</span>\n            币币账户\n        </aex-tab-pane>\n        <aex-tab-pane label="流动性账户">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("Tabs Attributes")]),t._m(5),e("h3",[t._v("Tabs Events")]),t._m(6),e("h3",[t._v("Tabs Slot")]),t._m(7),e("h3",[t._v("Tab-pane Attributes")]),t._m(8)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Tabs,TabPane } from 'aex-ui';\nVue.use(Tabs)\nVue.use(TabPane)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过 "),e("code",[t._v("v-model")]),t._v(" 属性来绑定 tab的切换数据，"),e("br"),t._v("\n通过 "),e("code",[t._v("@tab-click")]),t._v(" 来监听点击事件, 返回(el, event)=>void, el 是选中标签的实例，el.paneName 就是当前标签的 name / index(没有设置name时)"),e("br"),t._v("\n添加 "),e("code",[t._v("slot='extra'")]),t._v(" 来扩展头部操作")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("type")]),t._v(" 设置为card / border-card")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("tab-position")]),t._v(" 设置为 "),e("code",[t._v("top/right/bottom/left")]),t._v(" 来确定标签的位置，默认是 top")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可以通过具名 "),e("code",[t._v('slot="label"')]),t._v(" 来实现自定义标签页的内容")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值，选中选项卡的 name")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("第一个选项卡的 name")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("风格类型")]),e("td",[t._v("string")]),e("td",[t._v("card/border-card")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("closable")]),e("td",[t._v("标签是否可关闭")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("addable")]),e("td",[t._v("标签是否可增加")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("editable")]),e("td",[t._v("标签是否同时可增加和关闭")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("tab-position")]),e("td",[t._v("选项卡所在位置")]),e("td",[t._v("string")]),e("td",[t._v("top/right/bottom/left")]),e("td",[t._v("top")])]),e("tr",[e("td",[t._v("stretch")]),e("td",[t._v("标签的宽度是否自撑开")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("before-leave")]),e("td",[t._v("切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。")]),e("td",[t._v("Function(activeName, oldActiveName)")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("tab-click")]),e("td",[t._v("tab 被选中时触发")]),e("td",[t._v("被选中的标签 tab 实例")])]),e("tr",[e("td",[t._v("tab-remove")]),e("td",[t._v("点击 tab 移除按钮后触发")]),e("td",[t._v("被删除的标签的 name")])]),e("tr",[e("td",[t._v("tab-add")]),e("td",[t._v("点击 tabs 的新增按钮后触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("edit")]),e("td",[t._v("点击 tabs 的新增按钮或 tab 被关闭后触发")]),e("td",[t._v("(targetName, action)")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("extra")]),e("td",[t._v("header 扩展")]),e("td",[t._v("null")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("label")]),e("td",[t._v("选项卡标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("与选项卡绑定值 value 对应的标识符，表示选项卡别名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'")])]),e("tr",[e("td",[t._v("closable")]),e("td",[t._v("标签是否可关闭")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("lazy")]),e("td",[t._v("标签是否延迟渲染")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])}],!1,null,null,null);e.default=n.exports}}]);