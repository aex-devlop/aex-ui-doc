(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{119:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",{attrs:{gutter:30}},[t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"请输入内容"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onKeyup(t):null},keydown:function(t){return"button"in t||!e._k(t.keyCode,"tab",9,t.key,"Tab")?e.onKeydown(t):null}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"禁用",disabled:"",size:"medium"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"带有清空按钮",clearable:"",size:"small"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}})],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"密码框","show-password":"",size:"mini"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{input:"",input1:"",input2:"",input3:""}},methods:{onKeyup:function(t){console.log("onKeyup",t)},onKeydown:function(t){console.log("onKeydown",t)}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",{attrs:{gutter:30}},[t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"搜索","prefix-icon":"aex-icon-search"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"请输入金额","suffix-icon":"aex-icon-lock"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}})],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"slot 方式"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}},[t("i",{staticClass:"aex-input__icon aex-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),t("aex-col",{attrs:{span:4}},[t("aex-input",{attrs:{placeholder:"slot 自定义"},model:{value:e.input3,callback:function(t){e.input3=t},expression:"input3"}},[t("i",{staticClass:"aex-input__icon",attrs:{slot:"prefix"},slot:"prefix"},[e._v("US")])])],1)],1)],1)},staticRenderFns:[]},{data:function(){return{input:"",input1:"",input2:"",input3:""}}}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",{attrs:{gutter:20}},[t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{type:"textarea",rows:2,placeholder:"rows='2'"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{type:"textarea",autosize:"",placeholder:"autosize"},model:{value:e.textarea1,callback:function(t){e.textarea1=t},expression:"textarea1"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:':autosize="{ minRows: 2, maxRows: 4}"'},model:{value:e.textarea2,callback:function(t){e.textarea2=t},expression:"textarea2"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"120","show-word-limit":""},model:{value:e.textarea3,callback:function(t){e.textarea3=t},expression:"textarea3"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{textarea:"",textarea1:"",textarea2:"",textarea3:""}}}),"aex-demo3":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",{attrs:{gutter:20}},[t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{placeholder:"只能输入10个字符",maxlength:"10"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-input",{attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"120","show-word-limit":""},model:{value:e.textarea1,callback:function(t){e.textarea1=t},expression:"textarea1"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{textarea:"",textarea1:""}}}),"aex-demo4":n({render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aex-row",{attrs:{gutter:20}},[a("aex-col",{attrs:{span:8}},[a("aex-input",{attrs:{placeholder:"请输入内容"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[a("aex-button",{attrs:{slot:"append",width:"50px",icon:"aex-icon-search"},slot:"append"})],1)],1),e._v(" "),a("aex-col",{attrs:{span:8}},[a("aex-input",{staticStyle:{width:"300px"},attrs:{placeholder:"限额 15 - 7,000"},model:{value:e.input1,callback:function(t){e.input1=t},expression:"input1"}},[a("template",{slot:"prepend"},[a("aex-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择"},model:{value:e.inputSelect,callback:function(t){e.inputSelect=t},expression:"inputSelect"}},[a("aex-option",{attrs:{label:"按金额购买",value:"1"}}),e._v(" "),a("aex-option",{attrs:{label:"按数量购买",value:"2"}})],1)],1),e._v(" "),a("span",{staticClass:"aex-input__icon",staticStyle:{marginRight:"10px"},attrs:{slot:"suffix"},slot:"suffix"},[e._v("USDT")])],2)],1),e._v(" "),a("aex-col",{attrs:{span:8}},[a("aex-input",{attrs:{placeholder:"0.00"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}},[a("template",{slot:"prepend"},[a("aex-select",{staticStyle:{width:"120px"},attrs:{placeholder:"请选择",filterable:"","default-first-option":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[e._l(e.options,function(t){return a("aex-option",{key:t.value,attrs:{label:t.label,value:t.value}},[a("span",{staticStyle:{float:"left"}},[a("i",{staticClass:"aex-icon-value"}),e._v(" "+e._s(t.label))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#999","font-size":"12px"}},[e._v(e._s(t.value))])])}),e._v(" "),a("i",{staticClass:"aex-input__icon aex-icon-value",attrs:{slot:"prefix"},slot:"prefix"})],2)],1),e._v(" "),a("aex-button",{attrs:{slot:"append",width:"50px"},slot:"append"},[e._v("全部")])],2)],1)],1)],1)},staticRenderFns:[]},{data:function(){return{input:"",input1:"",input2:"",inputSelect:"1",options:[{value:"1",label:"BTC"},{value:"2",label:"ETH"},{value:"98",label:"GAT"},{value:"0",label:"LTC",disabled:!0},{value:"3",label:"USDT"}],value:[]}}})}},a=a(0),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Input 输入框")]),e("h3",[t._v("按需引入")]),t._m(0),e("p",[t._v("组件默认宽度100%，可使用容器包裹，或者设置style 来设置宽度")]),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-row :gutter='30'>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input\" placeholder=\"请输入内容\" @keyup.enter='onKeyup' @keydown.tab='onKeydown'></aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input1\" placeholder=\"禁用\" disabled size='medium'></aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input2\" placeholder=\"带有清空按钮\" clearable size='small'></aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input3\" placeholder=\"密码框\" show-password size='mini'></aex-input>\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                input: '',\n                input1: '',\n                input2: '',\n                input3: '',\n            }\n        },\n        methods: {\n            onKeyup(e) {\n                console.log('onKeyup', e)\n            },\n            onKeydown(e) {\n                console.log('onKeydown', e)\n            }\n        },\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("带 icon 的输入框 (前缀/后缀内容)")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-row :gutter='30'>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input\" placeholder=\"搜索\" prefix-icon=\"aex-icon-search\"></aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input1\" placeholder=\"请输入金额\" suffix-icon='aex-icon-lock'></aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input2\" placeholder=\"slot 方式\">\n            <i slot='prefix' class='aex-input__icon aex-icon-search'></i>\n        </aex-input>\n    </aex-col>\n    <aex-col :span='4'>\n        <aex-input v-model=\"input3\" placeholder=\"slot 自定义\">\n            <i slot='prefix' class='aex-input__icon'>US</i>\n        </aex-input>\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                input: '',\n                input1: '',\n                input2: '',\n                input3: '',\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("文本域")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-row :gutter=\'20\'>\n    <aex-col :span=\'6\'>\n        <aex-input type="textarea" :rows="2" placeholder="rows=\'2\'" v-model="textarea" />\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-input type="textarea" autosize placeholder="autosize" v-model="textarea1" />\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder=\':autosize="{ minRows: 2, maxRows: 4}"\' v-model="textarea2" />\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-input type="textarea" placeholder=\'请输入内容\' v-model="textarea3" maxlength="120" show-word-limit />\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                textarea: \'\',\n                textarea1: \'\',\n                textarea2: \'\',\n                textarea3: \'\',\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("输入长度限制")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-row :gutter='20'>\n    <aex-col :span='6'>\n        <aex-input placeholder=\"只能输入10个字符\" v-model=\"textarea\" maxlength=\"10\" />\n    </aex-col>\n    <aex-col :span='6'>\n        <aex-input type=\"textarea\" placeholder='请输入内容' v-model=\"textarea1\" maxlength=\"120\" show-word-limit />\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                textarea: '',\n                textarea1: '',\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("p",[t._v(":::")]),e("h3",[t._v("复合型输入框 （添加前置或后置元素）")]),t._m(5),e("demo-block",[e("template",{slot:"source"},[e("aex-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-row :gutter=\'20\'>\n    <aex-col :span=\'8\'>\n        <aex-input placeholder=\'请输入内容\' v-model="input">\n            <aex-button width=\'50px\' slot="append" icon="aex-icon-search"></aex-button>\n        </aex-input>\n    </aex-col>\n    <aex-col :span=\'8\'>\n        <aex-input placeholder="限额 15 - 7,000" v-model="input1" style="width:300px">\n            <template slot="prepend">\n                <aex-select v-model="inputSelect" placeholder="请选择" style="width:120px">\n                    <aex-option label="按金额购买" value="1" />\n                    <aex-option label="按数量购买" value="2" />\n                </aex-select>\n            </template>\n            <span slot="suffix" class="aex-input__icon" style="marginRight:10px">USDT</span>\n        </aex-input>\n    </aex-col>\n    <aex-col :span=\'8\'>\n        <aex-input placeholder="0.00" v-model="input2">\n            <template slot="prepend">\n                <aex-select v-model="value" placeholder="请选择" filterable default-first-option style="width:120px">\n                    <aex-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">\n                        <span style="float: left"><i class=\'aex-icon-value\' />&nbsp;{{ item.label }}</span>\n                        <span style="float: right; color: #999; font-size: 12px">{{ item.value }}</span>\n                    </aex-option>\n                    <i slot=\'prefix\' class=\'aex-input__icon aex-icon-value\'></i>\n                </aex-select>\n            </template>\n            \x3c!-- <span slot="suffix" class="aex-input__icon">全部</span> --\x3e\n            <aex-button width=\'50px\' slot="append">全部</aex-button>\n        </aex-input>\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                input: \'\',\n                input1: \'\',\n                input2: \'\',\n                inputSelect: \'1\',\n                options: [{\n                    value: \'1\',\n                    label: \'BTC\',\n                }, {\n                    value: \'2\',\n                    label: \'ETH\'\n                }, {\n                    value: \'98\',\n                    label: \'GAT\'\n                }, {\n                    value: \'0\',\n                    label: \'LTC\',\n                    disabled: true\n                }, {\n                    value: \'3\',\n                    label: \'USDT\'\n                }],\n                value: [],\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("Input Attributes")]),t._m(6),e("h3",[t._v("Input Slots")]),t._m(7),e("h3",[t._v("Input Events")]),t._m(8),e("h3",[t._v("Input Methods")]),t._m(9)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Input } from 'aex-ui';\nVue.use(Input)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过 "),e("code",[t._v("size")]),t._v(" 属性 设置高度 "),e("code",[t._v("default:40px, medium:36px, small:32px, mini:28px")]),t._v(" ，"),e("br"),t._v("\n通过 "),e("code",[t._v("disabled")]),t._v(" 属性 设置是否禁用"),e("br"),t._v("\n通过 "),e("code",[t._v("clearable")]),t._v(" 属性 设置是否显示清楚按钮"),e("br"),t._v("\n通过 "),e("code",[t._v("show-password")]),t._v(" 属性 设置是否显示密码 显/隐 按钮")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可以通过 "),e("code",[t._v("prefix-icon")]),t._v(" 和 "),e("code",[t._v("suffix-icon")]),t._v(" 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。"),e("br"),t._v("\n当通过 slot显示图标时，需要给 i元素添加 "),e("code",[t._v("aex-input__icon")]),t._v(" 类或自行设置样式"),e("br"),t._v("\n也可以通过slot 可以添加其他任意你想要内容【目前只有30px 的宽度，如需要可自行通过样式覆盖修改】")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过 "),e("code",[t._v("rows")]),t._v(" 属性控制文本域高度\n通过 "),e("code",[t._v("autosize")]),t._v(" 属性可以使得文本域的高度能够根据文本内容自动进行调整，"),e("br"),t._v('\n并且 autosize 还可以设定为一个对象，指定最小高度和最大高度 例如:autosize="{ minRows: 2, maxRows: 4}"'),e("br"),t._v("\n通过")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过 "),e("code",[t._v("maxlength")]),t._v(" ， "),e("code",[t._v("minlength")]),t._v(" ， 用来限制输入框的字符长度；\n通过 "),e("code",[t._v("show-word-limit")]),t._v(" , 属性来显示字数统计。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过slot "),e("code",[t._v("prepend")]),t._v(" ， "),e("code",[t._v("append")]),t._v(" ， 用来添加前置或后置元素")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("string")]),e("td",[t._v("text，textarea 和其他 原生 input 的 type 值")]),e("td",[t._v("text")])]),e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("maxlength")]),e("td",[t._v("原生属性，最大输入长度")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("minlength")]),e("td",[t._v("原生属性，最小输入长度")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("show-word-limit")]),e("td",[t._v("是否显示输入字数统计，只在 "),e("code",[t._v('type = "text"')]),t._v(" 或 "),e("code",[t._v('type = "textarea"')]),t._v(" 时有效")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("输入框占位文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("是否可清空")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-password")]),e("td",[t._v("是否显示切换密码图标")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("输入框尺寸，只在 "),e("code",[t._v('type!="textarea"')]),t._v(" 时有效")]),e("td",[t._v("string")]),e("td",[t._v("medium / small / mini")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("prefix-icon")]),e("td",[t._v("输入框头部图标")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("suffix-icon")]),e("td",[t._v("输入框尾部图标")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("rows")]),e("td",[t._v("输入框行数，只对 "),e("code",[t._v('type="textarea"')]),t._v(" 有效")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("2")])]),e("tr",[e("td",[t._v("autosize")]),e("td",[t._v("自适应内容高度，只对 "),e("code",[t._v('type="textarea"')]),t._v(" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }")]),e("td",[t._v("boolean / object")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("autocomplete")]),e("td",[t._v("原生属性，自动补全")]),e("td",[t._v("string")]),e("td",[t._v("on, off")]),e("td",[t._v("off")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("原生属性，是否只读")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("原生属性，设置最大值")]),e("td",[t._v("—")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("min")]),e("td",[t._v("原生属性，设置最小值")]),e("td",[t._v("—")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("step")]),e("td",[t._v("原生属性，设置输入字段的合法数字间隔")]),e("td",[t._v("—")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("resize")]),e("td",[t._v("控制是否能被用户缩放")]),e("td",[t._v("string")]),e("td",[t._v("none, both, horizontal, vertical")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("autofocus")]),e("td",[t._v("原生属性，自动获取焦点")]),e("td",[t._v("boolean")]),e("td",[t._v("true, false")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("form")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("输入框关联的label文字")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("tabindex")]),e("td",[t._v("输入框的tabindex")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("validate-event")]),e("td",[t._v("输入时是否触发表单的校验")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("prefix")]),e("td",[t._v("输入框头部内容，只对 "),e("code",[t._v('type="text"')]),t._v(" 有效")])]),e("tr",[e("td",[t._v("suffix")]),e("td",[t._v("输入框尾部内容，只对 "),e("code",[t._v('type="text"')]),t._v(" 有效")])]),e("tr",[e("td",[t._v("prepend")]),e("td",[t._v("输入框前置内容，只对 "),e("code",[t._v('type="text"')]),t._v(" 有效")])]),e("tr",[e("td",[t._v("append")]),e("td",[t._v("输入框后置内容，只对 "),e("code",[t._v('type="text"')]),t._v(" 有效")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("blur")]),e("td",[t._v("在 Input 失去焦点时触发")]),e("td",[t._v("(event: Event)")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("在 Input 获得焦点时触发")]),e("td",[t._v("(event: Event)")])]),e("tr",[e("td",[t._v("change")]),e("td",[t._v("仅在输入框失去焦点或用户按下回车时触发")]),e("td",[t._v("(value: string | number)")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("在 Input 值改变时触发")]),e("td",[t._v("(value: string | number)")])]),e("tr",[e("td",[t._v("clear")]),e("td",[t._v("在点击由 "),e("code",[t._v("clearable")]),t._v(" 属性生成的清空按钮时触发")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("keyup")]),e("td",[t._v("键盘up事件")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("keydown")]),e("td",[t._v("键盘down事件")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 input 获取焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("使 input 失去焦点")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("select")]),e("td",[t._v("选中 input 中的文字")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=n.exports}}]);