(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{286:function(e,a,t){"use strict";t.r(a);var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t,n=arguments[a];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[[e("aex-tabs",{on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[e("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[a._v("资产总览")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[a._v("币币账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[a._v("流动性账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[a._v("合约账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[a._v("理财账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[a._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first"}},methods:{handleClick:function(e,a){console.log(e,a)}}}),"aex-demo1":n({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[[e("aex-tabs",{staticStyle:{marginBottom:"20px"},attrs:{type:"card"},on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[e("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[a._v("资产总览")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[a._v("币币账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[a._v("流动性账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[a._v("合约账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[a._v("理财账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[a._v("质押资金")])],1),a._v(" "),e("aex-tabs",{attrs:{type:"border-card"},on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[e("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[a._v("资产总览")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[a._v("币币账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[a._v("流动性账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[a._v("合约账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[a._v("理财账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[a._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first"}},methods:{handleClick:function(e,a){console.log(e,a)}}}),"aex-demo2":n({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[[e("aex-button-group",{staticStyle:{"margin-bottom":"30px"}},[e("aex-button",{attrs:{type:"outline"},on:{click:function(e){a.tabPosition="top"}}},[a._v("top")]),a._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:function(e){a.tabPosition="right"}}},[a._v("right")]),a._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:function(e){a.tabPosition="bottom"}}},[a._v("bottom")]),a._v(" "),e("aex-button",{attrs:{type:"outline"},on:{click:function(e){a.tabPosition="left"}}},[a._v("left")])],1),a._v(" "),e("aex-tabs",{staticStyle:{height:"300px"},attrs:{tabPosition:a.tabPosition},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[e("aex-tab-pane",{attrs:{label:"资产总览",name:"first"}},[a._v("资产总览")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"币币账户",name:"second"}},[a._v("币币账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"流动性账户",name:"third"}},[a._v("流动性账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"合约账户",name:"fourth"}},[a._v("合约账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"理财账户",name:"five"}},[a._v("理财账户")]),a._v(" "),e("aex-tab-pane",{attrs:{label:"质押资金",name:"six"}},[a._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeName:"first",tabPosition:"top"}}}),"aex-demo3":n({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[[a("aex-tabs",{on:{"tab-click":e.handleClick}},[a("aex-tab-pane",[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"aex-icon-value"}),e._v("资产总览")]),e._v("\n            资产总览\n        ")]),e._v(" "),a("aex-tab-pane",[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"aex-icon-assetsCNC"}),e._v("币币账户")]),e._v("\n            币币账户\n        ")]),e._v(" "),a("aex-tab-pane",{attrs:{label:"流动性账户"}},[e._v("流动性账户")]),e._v(" "),a("aex-tab-pane",{attrs:{label:"合约账户"}},[e._v("合约账户")]),e._v(" "),a("aex-tab-pane",{attrs:{label:"理财账户"}},[e._v("理财账户")]),e._v(" "),a("aex-tab-pane",{attrs:{label:"质押资金"}},[e._v("质押资金")])],1)]],2)},staticRenderFns:[]},{data:function(){return{}},methods:{handleClick:function(e,a){console.log(e,a)}}})}},t=t(1),n=Object(t.a)(n,function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("section",{staticClass:"content aex-doc"},[a("h1",[e._v("Tabs 标签页")]),a("h3",[e._v("按需引入")]),e._m(0),a("h3",[e._v("基础用法")]),e._m(1),a("demo-block",[a("template",{slot:"source"},[a("aex-demo0")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-tabs v-model="activeName" @tab-click="handleClick">\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\'\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),a("h3",[e._v("选项卡样式")]),e._m(2),a("demo-block",[a("template",{slot:"source"},[a("aex-demo1")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-tabs v-model="activeName" @tab-click="handleClick" type=\'card\' style=\'marginBottom:20px\'>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n    <aex-tabs v-model="activeName" @tab-click="handleClick" type=\'border-card\'>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\'\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),a("h3",[e._v("位置")]),e._m(3),a("demo-block",[a("template",{slot:"source"},[a("aex-demo2")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-button-group style="margin-bottom: 30px;">\n        <aex-button type=\'outline\' @click=\'tabPosition="top"\'>top</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="right"\'>right</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="bottom"\'>bottom</aex-button>\n        <aex-button type=\'outline\' @click=\'tabPosition="left"\'>left</aex-button>\n    </aex-button-group>\n    <aex-tabs v-model="activeName" :tabPosition=\'tabPosition\' style=\'height:300px\'>\n        <aex-tab-pane label="资产总览" name="first">资产总览</aex-tab-pane>\n        <aex-tab-pane label="币币账户" name="second">币币账户</aex-tab-pane>\n        <aex-tab-pane label="流动性账户" name="third">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户" name="fourth">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户" name="five">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金" name="six">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                activeName: \'first\',\n                tabPosition: \'top\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),a("h3",[e._v("自定义标签页")]),e._m(4),a("demo-block",[a("template",{slot:"source"},[a("aex-demo3")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-tabs @tab-click="handleClick">\n        <aex-tab-pane>\n            <span slot="label"><i class=\'aex-icon-value\' />资产总览</span>\n            资产总览\n        </aex-tab-pane>\n        <aex-tab-pane>\n            <span slot="label"><i class=\'aex-icon-assetsCNC\' />币币账户</span>\n            币币账户\n        </aex-tab-pane>\n        <aex-tab-pane label="流动性账户">流动性账户</aex-tab-pane>\n        <aex-tab-pane label="合约账户">合约账户</aex-tab-pane>\n        <aex-tab-pane label="理财账户">理财账户</aex-tab-pane>\n        <aex-tab-pane label="质押资金">质押资金</aex-tab-pane>\n    </aex-tabs>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n\n            };\n        },\n        methods: {\n            handleClick(tab, event) {\n                console.log(tab, event);\n            }\n        }\n    };\n<\/script>\n')])])])],2),a("h3",[e._v("Tabs Attributes")]),e._m(5),a("h3",[e._v("Tabs Events")]),e._m(6),a("h3",[e._v("Tab-pane Attributes")]),e._m(7)],1)},[function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("pre",[a("code",[e._v("import { Tabs,TabPane } from 'aex-ui';\nVue.use(Tabs)\nVue.use(TabPane)\n")])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[e._v("通过 "),a("code",[e._v("v-model")]),e._v(" 属性来绑定 tab的切换数据，"),a("br"),e._v("\n通过 "),a("code",[e._v("@tab-click")]),e._v(" 来监听点击事件, 返回(el, event)=>void, el 是选中标签的实例，el.paneName 就是当前标签的 name / index(没有设置name时)")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("type")]),e._v(" 设置为card / border-card")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("tab-position")]),e._v(" 设置为 "),a("code",[e._v("top/right/bottom/left")]),e._v(" 来确定标签的位置，默认是 top")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[e._v("可以通过具名 "),a("code",[e._v('slot="label"')]),e._v(" 来实现自定义标签页的内容")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value / v-model")]),a("td",[e._v("绑定值，选中选项卡的 name")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("第一个选项卡的 name")])]),a("tr",[a("td",[e._v("type")]),a("td",[e._v("风格类型")]),a("td",[e._v("string")]),a("td",[e._v("card/border-card")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("closable")]),a("td",[e._v("标签是否可关闭")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("addable")]),a("td",[e._v("标签是否可增加")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("editable")]),a("td",[e._v("标签是否同时可增加和关闭")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("tab-position")]),a("td",[e._v("选项卡所在位置")]),a("td",[e._v("string")]),a("td",[e._v("top/right/bottom/left")]),a("td",[e._v("top")])]),a("tr",[a("td",[e._v("stretch")]),a("td",[e._v("标签的宽度是否自撑开")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("before-leave")]),a("td",[e._v("切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。")]),a("td",[e._v("Function(activeName, oldActiveName)")]),a("td",[e._v("—")]),a("td",[e._v("—")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[e._v("tab-click")]),a("td",[e._v("tab 被选中时触发")]),a("td",[e._v("被选中的标签 tab 实例")])]),a("tr",[a("td",[e._v("tab-remove")]),a("td",[e._v("点击 tab 移除按钮后触发")]),a("td",[e._v("被删除的标签的 name")])]),a("tr",[a("td",[e._v("tab-add")]),a("td",[e._v("点击 tabs 的新增按钮后触发")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("edit")]),a("td",[e._v("点击 tabs 的新增按钮或 tab 被关闭后触发")]),a("td",[e._v("(targetName, action)")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("label")]),a("td",[e._v("选项卡标题")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("name")]),a("td",[e._v("与选项卡绑定值 value 对应的标识符，表示选项卡别名")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'")])]),a("tr",[a("td",[e._v("closable")]),a("td",[e._v("标签是否可关闭")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("lazy")]),a("td",[e._v("标签是否延迟渲染")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])])])])}],!1,null,null,null);a.default=n.exports}}]);