(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{291:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:12}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认")]),e._v(" "),t("aex-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:12}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("带快捷选项")]),e._v(" "),t("aex-date-picker",{attrs:{align:"right",type:"date",placeholder:"选择日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},value1:"",value2:""}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-row",[t("aex-col",{attrs:{span:6}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("周")]),e._v(" "),t("aex-date-picker",{attrs:{type:"week",format:"yyyy 第 WW 周",placeholder:"选择周"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("月")]),e._v(" "),t("aex-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("年")]),e._v(" "),t("aex-date-picker",{attrs:{type:"year",placeholder:"选择年"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),t("aex-col",{attrs:{span:6}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("多个日期")]),e._v(" "),t("aex-date-picker",{attrs:{type:"dates",placeholder:"选择一个或多个日期"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{value1:"",value2:"",value3:"",value4:""}}}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认")]),e._v(" "),t("aex-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("带快捷选项")]),e._v(" "),t("aex-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},value1:"",value2:""}}}),"aex-demo3":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认")]),e._v(" "),t("aex-date-picker",{attrs:{type:"monthrange","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("带快捷选项")]),e._v(" "),t("aex-date-picker",{attrs:{type:"monthrange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始月份","end-placeholder":"结束月份","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{pickerOptions:{shortcuts:[{text:"本月",onClick:function(t){t.$emit("pick",[new Date,new Date])}},{text:"今年至今",onClick:function(t){var e=new Date,a=new Date((new Date).getFullYear(),0);t.$emit("pick",[a,e])}},{text:"最近六个月",onClick:function(t){var e=new Date,a=new Date;a.setMonth(a.getMonth()-6),t.$emit("pick",[a,e])}}]},value1:"",value2:""}}}),"aex-demo4":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认为 Date 对象:"+e._s(e.value1))]),e._v(" "),t("aex-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("使用 value-format:"+e._s(e.value2))]),e._v(" "),t("aex-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("时间戳:"+e._s(e.value3))]),e._v(" "),t("aex-date-picker",{attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"timestamp"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{value1:"",value2:"",value3:""}}}),"aex-demo5":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("div",{staticClass:"block"},[t("p",[e._v("组件值："+e._s(e.value))]),e._v(" "),t("aex-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{value:""}}})}},a=a(1),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("DatePicker 日期选择器")]),e("h3",[t._v("按需引入")]),t._m(0),e("p",[t._v("用于选择或输入日期")]),e("h3",[t._v("选择日")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row>\n        <aex-col :span='12'>\n            <aex-text style='marginBottom:10px'>默认</aex-text>\n            <aex-date-picker v-model=\"value1\" type=\"date\" placeholder=\"选择日期\">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span='12'>\n            <aex-text style='marginBottom:10px'>带快捷选项</aex-text>\n            <aex-date-picker v-model=\"value2\" align=\"right\" type=\"date\" placeholder=\"选择日期\" :picker-options=\"pickerOptions\">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                pickerOptions: {\n                    disabledDate(time) {\n                        return time.getTime() > Date.now();\n                    },\n                    shortcuts: [{\n                        text: '今天',\n                        onClick(picker) {\n                            picker.$emit('pick', new Date());\n                        }\n                    }, {\n                        text: '昨天',\n                        onClick(picker) {\n                            const date = new Date();\n                            date.setTime(date.getTime() - 3600 * 1000 * 24);\n                            picker.$emit('pick', date);\n                        }\n                    }, {\n                        text: '一周前',\n                        onClick(picker) {\n                            const date = new Date();\n                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n                            picker.$emit('pick', date);\n                        }\n                    }]\n                },\n                value1: '',\n                value2: '',\n            };\n        }\n    };\n<\/script>\n")])])])],2),e("h3",[t._v("其他日期单位")]),e("p",[t._v("通过扩展基础的日期选择，可以选择周、月、年或多个日期")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-row>\n    <aex-col :span=\'6\'>\n        <aex-text style=\'marginBottom:10px\'>周</aex-text>\n        <aex-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周">\n        </aex-date-picker>\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-text style=\'marginBottom:10px\'>月</aex-text>\n        <aex-date-picker v-model="value2" type="month" placeholder="选择月">\n        </aex-date-picker>\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-text style=\'marginBottom:10px\'>年</aex-text>\n        <aex-date-picker v-model="value3" type="year" placeholder="选择年">\n        </aex-date-picker>\n    </aex-col>\n    <aex-col :span=\'6\'>\n        <aex-text style=\'marginBottom:10px\'>多个日期</aex-text>\n        <aex-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期">\n        </aex-date-picker>\n    </aex-col>\n</aex-row>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: \'\',\n                value2: \'\',\n                value3: \'\',\n                value4: \'\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("选择日期范围")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>默认</aex-text>\n            <aex-date-picker v-model=\"value1\" type=\"daterange\" range-separator=\"至\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>带快捷选项</aex-text>\n            <aex-date-picker v-model=\"value2\" type=\"daterange\" align=\"right\" unlink-panels range-separator=\"至\" start-placeholder=\"开始日期\" end-placeholder=\"结束日期\" :picker-options=\"pickerOptions\">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                pickerOptions: {\n                    shortcuts: [{\n                        text: '最近一周',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n                            picker.$emit('pick', [start, end]);\n                        }\n                    }, {\n                        text: '最近一个月',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n                            picker.$emit('pick', [start, end]);\n                        }\n                    }, {\n                        text: '最近三个月',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n                            picker.$emit('pick', [start, end]);\n                        }\n                    }]\n                },\n                value1: '',\n                value2: ''\n            };\n        }\n    };\n<\/script>\n")])])])],2),e("h3",[t._v("选择月份范围")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>默认</aex-text>\n            <aex-date-picker v-model=\"value1\" type=\"monthrange\" range-separator=\"至\" start-placeholder=\"开始月份\" end-placeholder=\"结束月份\">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>带快捷选项</aex-text>\n            <aex-date-picker v-model=\"value2\" type=\"monthrange\" align=\"right\" unlink-panels range-separator=\"至\" start-placeholder=\"开始月份\" end-placeholder=\"结束月份\" :picker-options=\"pickerOptions\">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                pickerOptions: {\n                    shortcuts: [{\n                        text: '本月',\n                        onClick(picker) {\n                            picker.$emit('pick', [new Date(), new Date()]);\n                        }\n                    }, {\n                        text: '今年至今',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date(new Date().getFullYear(), 0);\n                            picker.$emit('pick', [start, end]);\n                        }\n                    }, {\n                        text: '最近六个月',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setMonth(start.getMonth() - 6);\n                            picker.$emit('pick', [start, end]);\n                        }\n                    }]\n                },\n                value1: '',\n                value2: ''\n            };\n        }\n    };\n<\/script>\n")])])])],2),e("h3",[t._v("日期格式")]),t._m(4),t._m(5),t._m(6),t._m(7),e("demo-block",[e("template",{slot:"source"},[e("aex-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-row>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>默认为 Date 对象:{{value1}}</aex-text>\n            <aex-date-picker v-model="value1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>使用 value-format:{{value2}}</aex-text>\n            <aex-date-picker v-model="value2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>时间戳:{{value3}}</aex-text>\n            <aex-date-picker v-model="value3" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: \'\',\n                value2: \'\',\n                value3: \'\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("默认显示日期")]),t._m(8),e("demo-block",[e("template",{slot:"source"},[e("aex-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div class="block">\n        <p>组件值：{{ value }}</p>\n        <aex-date-picker v-model="value" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="[\'00:00:00\', \'23:59:59\']">\n        </aex-date-picker>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: \'\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("Attributes")]),t._m(9),e("h3",[t._v("Picker Options")]),t._m(10),e("h3",[t._v("Shortcuts")]),t._m(11),e("h3",[t._v("Events")]),t._m(12),e("h3",[t._v("Methods")]),t._m(13)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { DatePicker } from 'aex-ui';\nVue.use(DatePicker)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("以「日」为基本单位，基础的日期选择控件"),e("br"),t._v("\n基本单位由 "),e("code",[t._v("type")]),t._v(" 属性指定。"),e("br"),t._v("\n快捷选项需配置 "),e("code",[t._v("picker-options")]),t._v(" 对象中的 "),e("code",[t._v("shortcuts")]),t._v(" ，禁用日期通过 "),e("code",[t._v("disabledDate")]),t._v(" 设置，传入函数")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可在一个选择器中便捷地选择一个时间范围"),e("br"),t._v("\n在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用 "),e("code",[t._v("unlink-panels")]),t._v(" 属性解除联动。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("可在一个选择器中便捷地选择一个月份范围"),e("br"),t._v("\n在选择月份范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前年份，可以使用 "),e("code",[t._v("unlink-panels")]),t._v(" 属性解除联动。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("使用 "),e("code",[t._v("format")]),t._v(" 指定输入框的格式；使用 "),e("code",[t._v("value-format")]),t._v(" 指定绑定值的格式。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("默认情况下，组件接受并返回 "),e("code",[t._v("Date")]),t._v(" 对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"warning"},[e("p",[t._v("请注意大小写")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("格式")]),e("th",[t._v("含义")]),e("th",[t._v("备注")]),e("th",[t._v("举例")])])]),e("tbody",[e("tr",[e("td",[e("code",[t._v("yyyy")])]),e("td",[t._v("年")]),e("td"),e("td",[t._v("2017")])]),e("tr",[e("td",[e("code",[t._v("M")])]),e("td",[t._v("月")]),e("td",[t._v("不补0")]),e("td",[t._v("1")])]),e("tr",[e("td",[e("code",[t._v("MM")])]),e("td",[t._v("月")]),e("td"),e("td",[t._v("01")])]),e("tr",[e("td",[e("code",[t._v("W")])]),e("td",[t._v("周")]),e("td",[t._v("仅周选择器的 "),e("code",[t._v("format")]),t._v(" 可用；不补0")]),e("td",[t._v("1")])]),e("tr",[e("td",[e("code",[t._v("WW")])]),e("td",[t._v("周")]),e("td",[t._v("仅周选择器的 "),e("code",[t._v("format")]),t._v(" 可用")]),e("td",[t._v("01")])]),e("tr",[e("td",[e("code",[t._v("d")])]),e("td",[t._v("日")]),e("td",[t._v("不补0")]),e("td",[t._v("2")])]),e("tr",[e("td",[e("code",[t._v("dd")])]),e("td",[t._v("日")]),e("td"),e("td",[t._v("02")])]),e("tr",[e("td",[e("code",[t._v("H")])]),e("td",[t._v("小时")]),e("td",[t._v("24小时制；不补0")]),e("td",[t._v("3")])]),e("tr",[e("td",[e("code",[t._v("HH")])]),e("td",[t._v("小时")]),e("td",[t._v("24小时制")]),e("td",[t._v("03")])]),e("tr",[e("td",[e("code",[t._v("h")])]),e("td",[t._v("小时")]),e("td",[t._v("12小时制，须和 "),e("code",[t._v("A")]),t._v(" 或 "),e("code",[t._v("a")]),t._v(" 使用；不补0")]),e("td",[t._v("3")])]),e("tr",[e("td",[e("code",[t._v("hh")])]),e("td",[t._v("小时")]),e("td",[t._v("12小时制，须和 "),e("code",[t._v("A")]),t._v(" 或 "),e("code",[t._v("a")]),t._v(" 使用")]),e("td",[t._v("03")])]),e("tr",[e("td",[e("code",[t._v("m")])]),e("td",[t._v("分钟")]),e("td",[t._v("不补0")]),e("td",[t._v("4")])]),e("tr",[e("td",[e("code",[t._v("mm")])]),e("td",[t._v("分钟")]),e("td"),e("td",[t._v("04")])]),e("tr",[e("td",[e("code",[t._v("s")])]),e("td",[t._v("秒")]),e("td",[t._v("不补0")]),e("td",[t._v("5")])]),e("tr",[e("td",[e("code",[t._v("ss")])]),e("td",[t._v("秒")]),e("td"),e("td",[t._v("05")])]),e("tr",[e("td",[e("code",[t._v("A")])]),e("td",[t._v("AM/PM")]),e("td",[t._v("仅 "),e("code",[t._v("format")]),t._v(" 可用，大写")]),e("td",[t._v("AM")])]),e("tr",[e("td",[e("code",[t._v("a")])]),e("td",[t._v("am/pm")]),e("td",[t._v("仅 "),e("code",[t._v("format")]),t._v(" 可用，小写")]),e("td",[t._v("am")])]),e("tr",[e("td",[e("code",[t._v("timestamp")])]),e("td",[t._v("JS时间戳")]),e("td",[t._v("仅 "),e("code",[t._v("value-format")]),t._v(" 可用；组件绑定值为 "),e("code",[t._v("number")]),t._v(" 类型")]),e("td",[t._v("1483326245000")])]),e("tr",[e("td",[e("code",[t._v("[MM]")])]),e("td",[t._v("不需要格式化字符")]),e("td",[t._v("使用方括号标识不需要格式化的字符 (如  [A] [MM])")]),e("td",[t._v("MM")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("在选择日期范围时，指定起始日期和结束日期的默认时刻。"),e("br"),t._v("\n选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒。"),e("br"),t._v("\n通过 "),e("code",[t._v("default-time")]),t._v(" 可以分别指定二者的具体时刻。 "),e("code",[t._v("default-time")]),t._v(" 接受一个数组，其中的值为形如 "),e("code",[t._v("12:00:00")]),t._v(" 的字符串，第一个值控制起始日期的时刻，第二个值控制结束日期的时刻。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("date(DatePicker) / array(DateRangePicker)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("完全只读")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("editable")]),e("td",[t._v("文本框可输入")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("是否显示清除按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("输入框尺寸")]),e("td",[t._v("string")]),e("td",[t._v("large, small, mini")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("非范围选择时的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("start-placeholder")]),e("td",[t._v("范围选择时开始日期的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("end-placeholder")]),e("td",[t._v("范围选择时结束日期的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("显示类型")]),e("td",[t._v("string")]),e("td",[t._v("year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange")]),e("td",[t._v("date")])]),e("tr",[e("td",[t._v("format")]),e("td",[t._v("显示在输入框中的格式")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("yyyy-MM-dd")])]),e("tr",[e("td",[t._v("align")]),e("td",[t._v("对齐方式")]),e("td",[t._v("string")]),e("td",[t._v("left, center, right")]),e("td",[t._v("left")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("DatePicker 下拉框的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("picker-options")]),e("td",[t._v("当前时间日期选择器特有的选项参考下表")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td",[t._v("{}")])]),e("tr",[e("td",[t._v("range-separator")]),e("td",[t._v("选择范围时的分隔符")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("'-'")])]),e("tr",[e("td",[t._v("default-value")]),e("td",[t._v("可选，选择器打开时默认显示的时间")]),e("td",[t._v("Date")]),e("td",[t._v("可被 "),e("code",[t._v("new Date()")]),t._v(" 解析")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("default-time")]),e("td",[t._v("范围选择时选中日期所使用的当日内具体时刻")]),e("td",[t._v("string[]")]),e("td",[t._v("数组，长度为 2，每项值为字符串，形如 "),e("code",[t._v("12:00:00")]),t._v(" ，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 "),e("code",[t._v("00:00:00")])]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("value-format")]),e("td",[t._v("可选，绑定值的格式。不指定则绑定值为 Date 对象")]),e("td",[t._v("string")]),e("td",[t._v("见上面 日期格式")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("unlink-panels")]),e("td",[t._v("在范围选择器里取消两个日期面板之间的联动")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("prefix-icon")]),e("td",[t._v("自定义头部图标的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("el-icon-date")])]),e("tr",[e("td",[t._v("clear-icon")]),e("td",[t._v("自定义清空图标的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("el-icon-circle-close")])]),e("tr",[e("td",[t._v("validate-event")]),e("td",[t._v("输入时是否触发表单的校验")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("shortcuts")]),e("td",[t._v("设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表")]),e("td",[t._v("Object[]")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabledDate")]),e("td",[t._v("设置禁用状态，参数为当前日期，要求返回 Boolean")]),e("td",[t._v("Function")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("cellClassName")]),e("td",[t._v("设置日期的 className")]),e("td",[t._v("Function(Date)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("firstDayOfWeek")]),e("td",[t._v("周起始日")]),e("td",[t._v("Number")]),e("td",[t._v("1 到 7")]),e("td",[t._v("7")])]),e("tr",[e("td",[t._v("onPick")]),e("td",[t._v("选中日期后会执行的回调，只有当 "),e("code",[t._v("daterange")]),t._v(" 或 "),e("code",[t._v("datetimerange")]),t._v(" 才生效")]),e("td",[t._v("Function({ maxDate, minDate })")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("标题文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("onClick")]),e("td",[t._v("选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())")]),e("td",[t._v("function")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("用户确认选定的值时触发")]),e("td",[t._v("组件绑定值。格式与绑定值一致，可受 "),e("code",[t._v("value-format")]),t._v(" 控制")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("当 input 失去焦点时触发")]),e("td",[t._v("组件实例")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("当 input 获得焦点时触发")]),e("td",[t._v("组件实例")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 input 获取焦点")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=n.exports}}]);