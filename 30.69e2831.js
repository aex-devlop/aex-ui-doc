(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{277:function(e,t,n){"use strict";n.r(t);var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a={name:"component-doc",components:{"aex-demo0":a({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-menu",{attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[t("aex-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),t("aex-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")]),e._v(" "),t("aex-submenu",{attrs:{index:"2-4"}},[t("template",{slot:"title"},[e._v("选项4")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),t("aex-menu-item",{attrs:{index:"3",disabled:""}},[e._v("消息中心")]),e._v(" "),t("aex-menu-item",{attrs:{index:"4"}},[e._v("订单管理")]),e._v(" "),t("aex-submenu",[t("template",{slot:"title"},[e._v("自定义弹出菜单")]),e._v(" "),t("div",[e._v("这里随便写")])],2)],1)]],2)},staticRenderFns:[]},{data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}}),"aex-demo1":a({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:6}},[t("div",{staticStyle:{width:"220px",background:"#fafbfd"}},[t("aex-menu",{attrs:{"default-active":e.activeIndex},on:{select:e.handleSelect}},[t("aex-menu-item",{attrs:{index:"1"}},[e._v("处理中心")]),e._v(" "),t("aex-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")]),e._v(" "),t("aex-submenu",{attrs:{index:"2-4"}},[t("template",{slot:"title"},[e._v("选项4")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),t("aex-menu-item",{attrs:{index:"3",disabled:""}},[e._v("消息中心")]),e._v(" "),t("aex-menu-item",{attrs:{index:"4"}},[e._v("订单管理")])],1)],1)]),e._v(" "),t("aex-col",{attrs:{span:6}},[t("div",{staticStyle:{width:"220px",background:"#fafbfd"}},[t("aex-menu",{attrs:{"default-active":e.activeIndex},on:{select:e.handleSelect}},[t("aex-menu-item-group",[t("div",{attrs:{slot:"title"},slot:"title"},[t("i",{staticClass:"aex-icon-yield",staticStyle:{marginRight:"6px"}}),e._v("资产管理")]),e._v(" "),t("aex-menu-item",{attrs:{index:"1"}},[e._v("我的资产")]),e._v(" "),t("aex-menu-item",{attrs:{index:"2"}},[e._v("我的订单")]),e._v(" "),t("aex-menu-item",{attrs:{index:"3"}},[e._v("交易优惠")])],1),e._v(" "),t("aex-menu-item-group",[t("div",{attrs:{slot:"title"},slot:"title"},[t("i",{staticClass:"aex-icon-order",staticStyle:{marginRight:"6px"}}),e._v("账户信息")]),e._v(" "),t("aex-menu-item",{attrs:{index:"4"}},[e._v("身份认证")]),e._v(" "),t("aex-menu-item",{attrs:{index:"5"}},[e._v("收款设置")]),e._v(" "),t("aex-menu-item",{attrs:{index:"6"}},[e._v("安全中心")])],1)],1)],1)])],1)]],2)},staticRenderFns:[]},{data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}})}},n=n(1),a=Object(n.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Menu 导航菜单")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("顶部导航栏")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">\n        <aex-menu-item index="1">处理中心</aex-menu-item>\n        <aex-submenu index="2">\n            <template slot="title">我的工作台</template>\n            <aex-menu-item index="2-1">选项1</aex-menu-item>\n            <aex-menu-item index="2-2">选项2</aex-menu-item>\n            <aex-menu-item index="2-3">选项3</aex-menu-item>\n            <aex-submenu index="2-4">\n                <template slot="title">选项4</template>\n                <aex-menu-item index="2-4-1">选项1</aex-menu-item>\n                <aex-menu-item index="2-4-2">选项2</aex-menu-item>\n                <aex-menu-item index="2-4-3">选项3</aex-menu-item>\n            </aex-submenu>\n        </aex-submenu>\n        <aex-menu-item index="3" disabled>消息中心</aex-menu-item>\n        <aex-menu-item index="4">订单管理</aex-menu-item>\n        <aex-submenu>\n            <template slot="title">自定义弹出菜单</template>\n            <div>这里随便写</div>\n        </aex-submenu>\n    </aex-menu>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                activeIndex: \'1\',\n            };\n        },\n        methods: {\n            handleSelect(key, keyPath) {\n                console.log(key, keyPath);\n            },\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("侧边栏")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-row>\n        <aex-col :span=\'6\'>\n            <div style=\'width:220px;background: #fafbfd\'>\n                <aex-menu :default-active="activeIndex" @select="handleSelect">\n                    <aex-menu-item index="1">处理中心</aex-menu-item>\n                    <aex-submenu index="2">\n                        <template slot="title">我的工作台</template>\n                        <aex-menu-item index="2-1">选项1</aex-menu-item>\n                        <aex-menu-item index="2-2">选项2</aex-menu-item>\n                        <aex-menu-item index="2-3">选项3</aex-menu-item>\n                        <aex-submenu index="2-4">\n                            <template slot="title">选项4</template>\n                            <aex-menu-item index="2-4-1">选项1</aex-menu-item>\n                            <aex-menu-item index="2-4-2">选项2</aex-menu-item>\n                            <aex-menu-item index="2-4-3">选项3</aex-menu-item>\n                        </aex-submenu>\n                    </aex-submenu>\n                    <aex-menu-item index="3" disabled>消息中心</aex-menu-item>\n                    <aex-menu-item index="4">订单管理</aex-menu-item>\n                </aex-menu>\n            </div>\n        </aex-col>\n        <aex-col :span=\'6\'>\n            <div style=\'width:220px;background: #fafbfd\'>\n                <aex-menu :default-active="activeIndex" @select="handleSelect">\n                    <aex-menu-item-group>\n                        <div slot="title"><i class="aex-icon-yield" style=\'marginRight:6px\'></i>资产管理</div>\n                        <aex-menu-item index="1">我的资产</aex-menu-item>\n                        <aex-menu-item index="2">我的订单</aex-menu-item>\n                        <aex-menu-item index="3">交易优惠</aex-menu-item>\n                    </aex-menu-item-group>\n                    <aex-menu-item-group>\n                        <div slot="title"><i class="aex-icon-order" style=\'marginRight:6px\'></i>账户信息</div>\n                        <aex-menu-item index="4">身份认证</aex-menu-item>\n                        <aex-menu-item index="5">收款设置</aex-menu-item>\n                        <aex-menu-item index="6">安全中心</aex-menu-item>\n                    </aex-menu-item-group>\n                </aex-menu>\n            </div>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                activeIndex: \'1\',\n            };\n        },\n        methods: {\n            handleSelect(key, keyPath) {\n                console.log(key, keyPath);\n            },\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("Menu Attribute")]),e._m(1),t("h3",[e._v("Menu Methods")]),e._m(2),t("h3",[e._v("Menu Events")]),e._m(3),t("h3",[e._v("SubMenu Attribute")]),e._m(4),t("h3",[e._v("Menu-Item Attribute")]),e._m(5),t("h3",[e._v("Menu-Group Attribute")]),e._m(6)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Menu,MenuItem,Submenu } from 'aex-ui';\nVue.use(Menu)\nVue.use(MenuItem)\nVue.use(Submenu) // 根据需要引入\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("mode")]),t("td",[e._v("模式")]),t("td",[e._v("string")]),t("td",[e._v("horizontal / vertical")]),t("td",[e._v("vertical")])]),t("tr",[t("td",[e._v("collapse")]),t("td",[e._v("是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("background-color")]),t("td",[e._v("菜单的背景色（仅支持 hex 格式）")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#ffffff")])]),t("tr",[t("td",[e._v("text-color")]),t("td",[e._v("菜单的文字颜色（仅支持 hex 格式）")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#303133")])]),t("tr",[t("td",[e._v("active-text-color")]),t("td",[e._v("当前激活菜单的文字颜色（仅支持 hex 格式）")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("#409EFF")])]),t("tr",[t("td",[e._v("default-active")]),t("td",[e._v("当前激活菜单的 index")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("default-openeds")]),t("td",[e._v("当前打开的 sub-menu 的 index 的数组")]),t("td",[e._v("Array")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("unique-opened")]),t("td",[e._v("是否只保持一个子菜单的展开")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("menu-trigger")]),t("td",[e._v("子菜单打开的触发方式(只在 mode 为 horizontal 时有效)")]),t("td",[e._v("string")]),t("td",[e._v("hover / click")]),t("td",[e._v("hover")])]),t("tr",[t("td",[e._v("router")]),t("td",[e._v("是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("collapse-transition")]),t("td",[e._v("是否开启折叠动画")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名称")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("open")]),t("td",[e._v("展开指定的 sub-menu")]),t("td",[e._v("index: 需要打开的 sub-menu 的 index")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("收起指定的 sub-menu")]),t("td",[e._v("index: 需要收起的 sub-menu 的 index")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("select")]),t("td",[e._v("菜单激活回调")]),t("td",[e._v("index: 选中菜单项的 index, indexPath: 选中菜单项的 index path")])]),t("tr",[t("td",[e._v("open")]),t("td",[e._v("sub-menu 展开的回调")]),t("td",[e._v("index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path")])]),t("tr",[t("td",[e._v("close")]),t("td",[e._v("sub-menu 收起的回调")]),t("td",[e._v("index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("index")]),t("td",[e._v("唯一标志")]),t("td",[e._v("string/null")]),t("td",[e._v("—")]),t("td",[e._v("null")])]),t("tr",[t("td",[e._v("popper-class")]),t("td",[e._v("弹出菜单的自定义类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("show-timeout")]),t("td",[e._v("展开 sub-menu 的延时")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("300")])]),t("tr",[t("td",[e._v("hide-timeout")]),t("td",[e._v("收起 sub-menu 的延时")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("300")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("popper-append-to-body")]),t("td",[e._v("是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("一级子菜单：true / 非一级子菜单：false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("index")]),t("td",[e._v("唯一标志")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("route")]),t("td",[e._v("Vue Router 路径对象")]),t("td",[e._v("Object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("title")]),t("td",[e._v("分组标题")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])}],!1,null,null,null);t.default=a.exports}}]);