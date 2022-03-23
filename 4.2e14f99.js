(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(t,e,n){"use strict";n.r(e);var a={name:"component-doc",components:{"aex-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,a=arguments[e];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t})({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("aex-row",{attrs:{gutter:20}},[n("aex-col",{attrs:{span:8}},[n("aex-autocomplete",{attrs:{"fetch-suggestions":e.onSearch,placeholder:"请输入内容"},on:{select:e.handleSelect},model:{value:e.state1,callback:function(t){e.state1=t},expression:"state1"}})],1),e._v(" "),n("aex-col",{attrs:{span:8}},[n("aex-autocomplete",{attrs:{"fetch-suggestions":e.onSearch,placeholder:"自定义展示模版"},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){t=t._VALUE_;return[n("span",{staticClass:"addr"},[e._v(e._s(t.value)+":"+e._s(t.name))])]}}]),model:{value:e.state2,callback:function(t){e.state2=t},expression:"state2"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{suggestionsList:[],state1:"",state2:""}},methods:{handleSelect:function(t){console.log(t)},onSearch:function(t,e){var n=this.suggestionsList;e(t?n.filter(this.createFilter(t)):n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadSuggestionsList:function(){return[{value:"USDT",name:"usdt"},{value:"ETH",name:"eth"},{value:"BTC",name:"btc"},{value:"GAT",name:"gat"},{value:"LTC",name:"ltc"},{value:"BCH",name:"bch"},{value:"BTS",name:"bts"},{value:"BSV",name:"bsv"},{value:"BTM",name:"btm"},{value:"ADA",name:"ada"}]}},mounted:function(){this.suggestionsList=this.loadSuggestionsList()}})}},n=n(2),a=Object(n.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Autocomplete 输入建议")]),t._m(0),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-row :gutter=\'20\'>\n    <aex-col :span=\'8\'>\n        <aex-autocomplete v-model="state1" :fetch-suggestions="onSearch" placeholder="请输入内容" @select="handleSelect"></aex-autocomplete>\n    </aex-col>\n    <aex-col :span=\'8\'>\n        <aex-autocomplete v-model="state2" :fetch-suggestions="onSearch" placeholder="自定义展示模版" @select="handleSelect">\n            <template slot-scope="{ _VALUE_ }">\n                <span class="addr">{{ _VALUE_.value }}:{{ _VALUE_.name }}</span>\n            </template>\n        </aex-autocomplete>\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                suggestionsList: [],\n                state1: \'\',\n                state2: \'\'\n            };\n        },\n        methods: {\n            handleSelect(item) {\n                console.log(item);\n            },\n\n            // 这里也可以直接从服务端获取数据\n            onSearch(inputVal, cb) {\n                var suggestionsList = this.suggestionsList;\n                var results = inputVal ? suggestionsList.filter(this.createFilter(inputVal)) : suggestionsList;\n                // 调用 callback 返回建议列表的数据\n                cb(results);\n            },\n            // 从列表里过滤搜索的数据\n            createFilter(inputVal) {\n                return (suggestionsList) => {\n                    return (suggestionsList.value.toLowerCase().indexOf(inputVal.toLowerCase()) === 0);\n                };\n            },\n            // 这里一般是后端获取的数据列表\n            loadSuggestionsList() {\n                return [{\n                        "value": "USDT",\n                        "name": \'usdt\'\n                    },\n                    {\n                        "value": "ETH",\n                        "name": \'eth\'\n                    },\n                    {\n                        "value": "BTC",\n                        "name": \'btc\'\n                    },\n                    {\n                        "value": "GAT",\n                        "name": \'gat\'\n                    },\n                    {\n                        "value": "LTC",\n                        "name": \'ltc\'\n                    },\n                    {\n                        "value": "BCH",\n                        "name": \'bch\'\n                    },\n                    {\n                        "value": "BTS",\n                        "name": \'bts\'\n                    },\n                    {\n                        "value": "BSV",\n                        "name": \'bsv\'\n                    },\n                    {\n                        "value": "BTM",\n                        "name": \'btm\'\n                    },\n                    {\n                        "value": "ADA",\n                        "name": \'ada\'\n                    },\n                ]\n            }\n        },\n        mounted() {\n            this.suggestionsList = this.loadSuggestionsList();\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("Autocomplete Attributes")]),t._m(2),e("h3",[t._v("Autocomplete Slots")]),t._m(3),e("h3",[t._v("Autocomplete Scoped Slot")]),t._m(4),e("h3",[t._v("Autocomplete Events")]),t._m(5),e("h3",[t._v("Autocomplete Methods")]),t._m(6)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("根据输入内容提供对应的输入建议"),e("br"),t._v("\n组件已默认做了输入防抖处理，尤其对于需要远程获取数据的情景极大提高了搜索优化")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过 "),e("code",[t._v("fetch-suggestions")]),t._v(" 是一个返回输入建议的方法属性：(inputVal, cb)=>{..., cb(data:[])}"),e("br"),t._v("\n通过 "),e("code",[t._v("trigger-on-focus")]),t._v(" 确认是否在输入框 focus 时显示建议列表，默认是true，若设置为false 则是在开始输入的时候显示"),e("br"),t._v("\n通过 "),e("code",[t._v('slot-scope="{ _VALUE_ }"')]),t._v(" 作用域插槽获取建议值，自定义列表展示的样式")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("输入框占位文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("value-key")]),e("td",[t._v("输入建议对象中用于显示的键名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("value")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("必填值，输入绑定值")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("debounce")]),e("td",[t._v("获取输入建议的去抖延时")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("300")])]),e("tr",[e("td",[t._v("placement")]),e("td",[t._v("菜单弹出位置")]),e("td",[t._v("string")]),e("td",[t._v("top / top-start / top-end / bottom / bottom-start / bottom-end")]),e("td",[t._v("bottom-start")])]),e("tr",[e("td",[t._v("fetch-suggestions")]),e("td",[t._v("返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它")]),e("td",[t._v("Function(inputVal, callback)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("Autocomplete 下拉列表的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("trigger-on-focus")]),e("td",[t._v("是否在输入框 focus 时显示建议列表")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("select-when-unmatched")]),e("td",[t._v("在输入没有任何匹配建议的情况下，按下回车是否触发 "),e("code",[t._v("select")]),t._v(" 事件")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("输入框关联的label文字")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("prefix-icon")]),e("td",[t._v("输入框头部图标")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("suffix-icon")]),e("td",[t._v("输入框尾部图标")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("hide-loading")]),e("td",[t._v("是否隐藏远程加载时的加载图标")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("popper-append-to-body")]),e("td",[t._v("是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("highlight-first-item")]),e("td",[t._v("是否默认突出显示远程搜索建议中的第一项")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("prefix")]),e("td",[t._v("输入框头部内容")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("输入框尾部内容")])]),e("tr",[e("td",[t._v("prepend")]),e("td",[t._v("输入框前置内容")])]),e("tr",[e("td",[t._v("append")]),e("td",[t._v("输入框后置内容")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("—")]),e("td",[t._v("自定义输入建议，参数为 { item }")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("select")]),e("td",[t._v("点击选中建议项时触发")]),e("td",[t._v("选中建议项")])]),e("tr",[e("td",[t._v("change")]),e("td",[t._v("在 Input 值改变时触发")]),e("td",[t._v("(value: string | number)")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 input 获取焦点")]),e("td",[t._v("-")])])])])}],!1,null,null,null);e.default=a.exports}}]);