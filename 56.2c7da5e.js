(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{290:function(e,t,l){"use strict";l.r(t);var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l,a=arguments[t];for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},a={name:"component-doc",components:{"aex-demo0":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1),t._v(" "),l("aex-select",{attrs:{placeholder:"请选择",clearable:"",size:"medium"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1),t._v(" "),l("aex-select",{attrs:{placeholder:"请选择",clearable:"",size:"small"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1),t._v(" "),l("aex-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)]],2)},staticRenderFns:[]},{data:function(){return{options:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"},{value:"gat",label:"GAT"},{value:"ltc",label:"LTC",disabled:!0},{value:"usdt",label:"USDT"}],value:""}}}),"aex-demo1":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1),t._v(" "),l("aex-select",{attrs:{placeholder:"请选择",multiple:"","collapse-tags":""},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)]],2)},staticRenderFns:[]},{data:function(){return{options:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"},{value:"gat",label:"GAT"},{value:"ltc",label:"LTC",disabled:!0},{value:"usdt",label:"USDT"}],value:[],value1:[]}}}),"aex-demo2":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"请选择",filterable:"","default-first-option":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value}},[l("span",{staticStyle:{float:"left"}},[t._v(t._s(e.label))]),t._v(" "),l("span",{staticStyle:{float:"right",color:"#999","font-size":"12px"}},[t._v(t._s(e.value))])])}),t._v(" "),l("i",{staticClass:"aex-input__icon aex-icon-value",attrs:{slot:"prefix"},slot:"prefix"})],2)]],2)},staticRenderFns:[]},{data:function(){return{options:[{value:"1",label:"BTC"},{value:"2",label:"ETH"},{value:"98",label:"GAT"},{value:"0",label:"LTC",disabled:!0},{value:"0",label:"USDT"}],value:[],value1:[]}}}),"aex-demo3":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option-group",{key:e.label,attrs:{label:e.label}},t._l(e.children,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)}),1)]],2)},staticRenderFns:[]},{data:function(){return{options:[{label:"主板",children:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"}]},{label:"创新板",children:[{value:"gat",label:"GAT"},{value:"ltc",label:"LTC",disabled:!0},{value:"usdt",label:"USDT"}]}],value:[]}}}),"aex-demo4":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"输入搜索",filterable:"","default-first-option":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2)},staticRenderFns:[]},{data:function(){return{options:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"},{value:"gat",label:"GAT"},{value:"ltc",label:"LTC"},{value:"usdt",label:"USDT"}],value:[],value1:[]}}}),"aex-demo5":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"输入搜索",filterable:"",remote:"","remote-method":t.remoteMethod,loading:t.loading},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2)},staticRenderFns:[]},{data:function(){return{loading:!1,options:[],value:[],vlist:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"},{value:"gat",label:"GAT"},{value:"ltc",label:"LTC"},{value:"usdt",label:"USDT"}]}},methods:{remoteMethod:function(t){var e=this;""!==t?(this.loading=!0,setTimeout(function(){e.loading=!1,e.options=e.vlist.filter(function(e){return-1<e.label.toLowerCase().indexOf(t.toLowerCase())})},1e3)):this.options=[]}}}),"aex-demo6":a({render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[[l("aex-select",{attrs:{placeholder:"创建选项",multiple:"",filterable:"","allow-create":"","default-first-option":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(e){return l("aex-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)]],2)},staticRenderFns:[]},{data:function(){return{options:[{value:"btc",label:"BTC"},{value:"eth",label:"ETH"},{value:"gat",label:"GAT"},{value:"ltc",label:"LTC"},{value:"usdt",label:"USDT"}],value:[],value1:[]}}})}},l=l(1),a=Object(l.a)(a,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("Select 选择器")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("基础用法（单选）")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-select v-model="value" placeholder="请选择" clearable>\n        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled=\'item.disabled\'>\n        </aex-option>\n    </aex-select>\n    <aex-select v-model="value" placeholder="请选择" clearable size=\'medium\'>\n        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled=\'item.disabled\'>\n        </aex-option>\n    </aex-select>\n    <aex-select v-model="value" placeholder="请选择" clearable size=\'small\'>\n        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled=\'item.disabled\'>\n        </aex-option>\n    </aex-select>\n    <aex-select v-model="value" placeholder="请选择" clearable size=\'mini\'>\n        <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled=\'item.disabled\'>\n        </aex-option>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                    value: \'btc\',\n                    label: \'BTC\',\n                }, {\n                    value: \'eth\',\n                    label: \'ETH\'\n                }, {\n                    value: \'gat\',\n                    label: \'GAT\'\n                }, {\n                    value: \'ltc\',\n                    label: \'LTC\',\n                    disabled: true\n                }, {\n                    value: \'usdt\',\n                    label: \'USDT\'\n                }],\n                value: \'\'\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("多选")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"请选择\" multiple>\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\" :disabled='item.disabled'>\n        </aex-option>\n    </aex-select>\n    <aex-select v-model=\"value1\" placeholder=\"请选择\" multiple collapse-tags>\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\" :disabled='item.disabled'>\n        </aex-option>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                    value: 'btc',\n                    label: 'BTC',\n                }, {\n                    value: 'eth',\n                    label: 'ETH'\n                }, {\n                    value: 'gat',\n                    label: 'GAT'\n                }, {\n                    value: 'ltc',\n                    label: 'LTC',\n                    disabled: true\n                }, {\n                    value: 'usdt',\n                    label: 'USDT'\n                }],\n                value: [],\n                value1: [],\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("自定义option")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"请选择\" filterable default-first-option>\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n            <span style=\"float: left\">{{ item.label }}</span>\n            <span style=\"float: right; color: #999; font-size: 12px\">{{ item.value }}</span>\n        </aex-option>\n        <i slot='prefix' class='aex-input__icon aex-icon-value'></i>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                    value: '1',\n                    label: 'BTC',\n                }, {\n                    value: '2',\n                    label: 'ETH'\n                }, {\n                    value: '98',\n                    label: 'GAT'\n                }, {\n                    value: '0',\n                    label: 'LTC',\n                    disabled: true\n                }, {\n                    value: '0',\n                    label: 'USDT'\n                }],\n                value: [],\n                value1: [],\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("分组option")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"请选择\">\n        <aex-option-group v-for=\"group in options\" :key=\"group.label\" :label=\"group.label\">\n            <aex-option v-for=\"item in group.children\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n            </aex-option>\n        </aex-option-group>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                        label: '主板',\n                        children: [{\n                            value: 'btc',\n                            label: 'BTC',\n                        }, {\n                            value: 'eth',\n                            label: 'ETH'\n                        }, ]\n                    },\n                    {\n                        label: '创新板',\n                        children: [{\n                            value: 'gat',\n                            label: 'GAT'\n                        }, {\n                            value: 'ltc',\n                            label: 'LTC',\n                            disabled: true\n                        }, {\n                            value: 'usdt',\n                            label: 'USDT'\n                        }]\n                    },\n                ],\n                value: [],\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("带输入搜索")]),e._m(5),t("demo-block",[t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"输入搜索\" filterable default-first-option>\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n        </aex-option>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                    value: 'btc',\n                    label: 'BTC',\n                }, {\n                    value: 'eth',\n                    label: 'ETH'\n                }, {\n                    value: 'gat',\n                    label: 'GAT'\n                }, {\n                    value: 'ltc',\n                    label: 'LTC',\n                }, {\n                    value: 'usdt',\n                    label: 'USDT'\n                }],\n                value: [],\n                value1: [],\n            }\n        },\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("远程搜索")]),e._m(6),t("demo-block",[t("template",{slot:"source"},[t("aex-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"输入搜索\" filterable remote :remote-method=\"remoteMethod\" :loading=\"loading\">\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n        </aex-option>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: false,\n                options: [],\n                value: [],\n                vlist: [{\n                    value: 'btc',\n                    label: 'BTC',\n                }, {\n                    value: 'eth',\n                    label: 'ETH'\n                }, {\n                    value: 'gat',\n                    label: 'GAT'\n                }, {\n                    value: 'ltc',\n                    label: 'LTC',\n                }, {\n                    value: 'usdt',\n                    label: 'USDT'\n                }],\n            }\n        },\n        methods: {\n            remoteMethod(val) {\n                if (val !== '') {\n                    this.loading = true;\n                    setTimeout(() => {\n                        this.loading = false;\n                        this.options = this.vlist.filter(item => {\n                            return item.label.toLowerCase()\n                                .indexOf(val.toLowerCase()) > -1;\n                        });\n                    }, 1000);\n                } else {\n                    this.options = [];\n                }\n            }\n        },\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("创建选项")]),e._m(7),t("demo-block",[t("template",{slot:"source"},[t("aex-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-select v-model=\"value\" placeholder=\"创建选项\" multiple filterable allow-create default-first-option>\n        <aex-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\">\n        </aex-option>\n    </aex-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                    value: 'btc',\n                    label: 'BTC',\n                }, {\n                    value: 'eth',\n                    label: 'ETH'\n                }, {\n                    value: 'gat',\n                    label: 'GAT'\n                }, {\n                    value: 'ltc',\n                    label: 'LTC',\n                }, {\n                    value: 'usdt',\n                    label: 'USDT'\n                }],\n                value: [],\n                value1: [],\n            }\n        },\n    }\n<\/script>\n")])])])],2),e._m(8),t("h3",[e._v("Select Attributes")]),e._m(9),t("h3",[e._v("Select Events")]),e._m(10),t("h3",[e._v("Select Slots")]),e._m(11),t("h3",[e._v("Option Group Attributes")]),e._m(12),t("h3",[e._v("Option Attributes")]),e._m(13),t("h3",[e._v("Methods")]),e._m(14)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { Select,Option } from 'aex-ui';\nVue.use(Select)\nVue.use(Option)\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("v-model")]),e._v(" 的值为当前被选中的 "),t("code",[e._v("aex-option")]),e._v(" 的 value 属性值"),t("br"),e._v("\naex-select, 设置 "),t("code",[e._v("clearable")]),e._v(" 属性，添加清除按钮"),t("br"),e._v("\naex-select, 设置 "),t("code",[e._v("size")]),e._v(" 属性，调整大小，default/medium/samll/mini"),t("br"),e._v("\naex-option，设定 "),t("code",[e._v("disabled")]),e._v(" 值为 true，即可禁用该选项")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("aex-select, 设置 "),t("code",[e._v("multiple")]),e._v(" 属性，启用多选, 此时 "),t("code",[e._v("v-model")]),e._v(" 的值为当前选中值所组成的数组"),t("br"),e._v("\n若容器宽度不够，多选会换行，可设置 "),t("code",[e._v("collapse-tags")]),e._v(" 属性隐藏多余的tag")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("aex-option")]),e._v(" 的 slot 即可自定义")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("aex-option-grou")]),e._v(" 包裹 "),t("code",[e._v("aex-option")]),e._v(" 分组")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("aex-select, 添加 "),t("code",[e._v("filterable")]),e._v(" 属性即可启用搜索功能, 默认情况下，Select 会找出所有 "),t("code",[e._v("label")]),e._v(" 属性包含输入值的选项"),t("br"),t("code",[e._v("filter-method")]),e._v(" 可以用来自行处理搜索的逻辑。filter-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。"),t("br"),t("code",[e._v("default-first-option")]),e._v(" ，在该属性打开的情况下，输入搜索后，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("aex-select, 添加 "),t("code",[e._v("filterable")]),e._v(" 和 "),t("code",[e._v("remote")]),e._v(" 为 "),t("code",[e._v("true")]),e._v(" 同时传入一个remote-method, 属性可启用远程搜索功能"),t("br"),e._v("\nremote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("创建并选中选项中不存在的条目"),t("br"),e._v("\n使用 "),t("code",[e._v("allow-create")]),e._v(" 属性即可通过在输入框中输入文字来创建新的条目。注意此时 "),t("code",[e._v("filterable")]),e._v(" 必须为真")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",{staticClass:"tip"},[t("p",[e._v("如果 Select 的绑定值为对象类型，请务必指定 "),t("code",[e._v("value-key")]),e._v(" 作为它的唯一性标识。")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("boolean / string / number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("是否多选")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("value-key")]),t("td",[e._v("作为 value 唯一标识的键名，绑定值为对象类型时必填")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("value")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("输入框尺寸")]),t("td",[e._v("string")]),t("td",[e._v("medium/small/mini")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("clearable")]),t("td",[e._v("是否可以清空选项")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("collapse-tags")]),t("td",[e._v("多选时是否将选中值按文字的形式展示")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("multiple-limit")]),t("td",[e._v("多选时用户最多可以选择的项目数，为 0 则不限制")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("select input 的 name 属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("autocomplete")]),t("td",[e._v("select input 的 autocomplete 属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("off")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("占位符")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("请选择")])]),t("tr",[t("td",[e._v("filterable")]),t("td",[e._v("是否可搜索")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("allow-create")]),t("td",[e._v("是否允许用户创建新条目，需配合 "),t("code",[e._v("filterable")]),e._v(" 使用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("filter-method")]),t("td",[e._v("自定义搜索方法")]),t("td",[e._v("function")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("remote")]),t("td",[e._v("是否为远程搜索")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("remote-method")]),t("td",[e._v("远程搜索方法")]),t("td",[e._v("function")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("loading")]),t("td",[e._v("是否正在从远程获取数据")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("loading-text")]),t("td",[e._v("远程加载时显示的文字")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("加载中")])]),t("tr",[t("td",[e._v("no-match-text")]),t("td",[e._v("搜索条件无匹配时显示的文字，也可以使用 "),t("code",[e._v('slot="empty"')]),e._v(" 设置")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("无匹配数据")])]),t("tr",[t("td",[e._v("no-data-text")]),t("td",[e._v("选项为空时显示的文字，也可以使用 "),t("code",[e._v('slot="empty"')]),e._v(" 设置")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("无数据")])]),t("tr",[t("td",[e._v("popper-class")]),t("td",[e._v("Select 下拉框的类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("reserve-keyword")]),t("td",[e._v("多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("default-first-option")]),t("td",[e._v("在输入框按下回车，选择第一个匹配项。需配合 "),t("code",[e._v("filterable")]),e._v(" 或 "),t("code",[e._v("remote")]),e._v(" 使用")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("popper-append-to-body")]),t("td",[e._v("是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("automatic-dropdown")]),t("td",[e._v("对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名称")]),t("th",[e._v("说明")]),t("th",[e._v("回调参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("选中值发生变化时触发")]),t("td",[e._v("目前的选中值")])]),t("tr",[t("td",[e._v("visible-change")]),t("td",[e._v("下拉框出现/隐藏时触发")]),t("td",[e._v("出现则为 true，隐藏则为 false")])]),t("tr",[t("td",[e._v("remove-tag")]),t("td",[e._v("多选模式下移除tag时触发")]),t("td",[e._v("移除的tag值")])]),t("tr",[t("td",[e._v("clear")]),t("td",[e._v("可清空的单选模式下用户点击清空按钮时触发")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("当 input 失去焦点时触发")]),t("td",[e._v("(event: Event)")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("当 input 获得焦点时触发")]),t("td",[e._v("(event: Event)")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("—")]),t("td",[e._v("Option 组件列表")])]),t("tr",[t("td",[e._v("prefix")]),t("td",[e._v("Select 组件头部内容")])]),t("tr",[t("td",[e._v("empty")]),t("td",[e._v("无选项时的列表")])]),t("tr",[t("td",[e._v("footer")]),t("td",[e._v("自定义下拉选项底部")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("分组的组名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否将该分组下所有选项置为禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value")]),t("td",[e._v("选项的值")]),t("td",[e._v("string/number/object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("label")]),t("td",[e._v("选项的标签，若不设置则默认与 "),t("code",[e._v("value")]),e._v(" 相同")]),t("td",[e._v("string/number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用该选项")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("focus")]),t("td",[e._v("使 input 获取焦点")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("使 input 失去焦点，并隐藏下拉框")]),t("td",[e._v("-")])])])])}],!1,null,null,null);t.default=a.exports}}]);