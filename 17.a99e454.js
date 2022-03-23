(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{269:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("带快捷选项")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("设置默认时间")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间","default-time":"12:00:00"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{pickerOptions:{shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]},value1:"",value2:"",value3:""}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("默认")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("带快捷选项")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},value1:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value2:""}}}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("aex-row",[t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("起始日期时刻为 12:00:00")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00"]},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),t("aex-col",{attrs:{span:8}},[t("aex-text",{staticStyle:{marginBottom:"10px"}},[e._v("起始日期时刻为 12:00:00，结束日期时刻为 08:00:00")]),e._v(" "),t("aex-date-picker",{attrs:{type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00","08:00:00"]},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1)]],2)},staticRenderFns:[]},{data:function(){return{value1:"",value2:""}}})}},a=a(1),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("DateTimePicker 日期时间选择器")]),e("p",[t._v("在同一个选择器里选择日期和时间")]),e("h3",[t._v("按需引入")]),t._m(0),t._m(1),e("h3",[t._v("日期和时间点")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-row>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>默认</aex-text>\n            <aex-date-picker v-model=\"value1\" type=\"datetime\" placeholder=\"选择日期时间\">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>带快捷选项</aex-text>\n            <aex-date-picker v-model=\"value2\" type=\"datetime\" placeholder=\"选择日期时间\" align=\"right\" :picker-options=\"pickerOptions\">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span='8'>\n            <aex-text style='marginBottom:10px'>设置默认时间</aex-text>\n            <aex-date-picker v-model=\"value3\" type=\"datetime\" placeholder=\"选择日期时间\" default-time=\"12:00:00\">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                pickerOptions: {\n                    shortcuts: [{\n                        text: '今天',\n                        onClick(picker) {\n                            picker.$emit('pick', new Date());\n                        }\n                    }, {\n                        text: '昨天',\n                        onClick(picker) {\n                            const date = new Date();\n                            date.setTime(date.getTime() - 3600 * 1000 * 24);\n                            picker.$emit('pick', date);\n                        }\n                    }, {\n                        text: '一周前',\n                        onClick(picker) {\n                            const date = new Date();\n                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n                            picker.$emit('pick', date);\n                        }\n                    }]\n                },\n                value1: '',\n                value2: '',\n                value3: ''\n            };\n        }\n    };\n<\/script>\n")])])])],2),e("h3",[t._v("日期和时间范围")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-row>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>默认</aex-text>\n            <aex-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>带快捷选项</aex-text>\n            <aex-date-picker v-model="value2" type="datetimerange" :picker-options="pickerOptions" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                pickerOptions: {\n                    shortcuts: [{\n                        text: \'最近一周\',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n                            picker.$emit(\'pick\', [start, end]);\n                        }\n                    }, {\n                        text: \'最近一个月\',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n                            picker.$emit(\'pick\', [start, end]);\n                        }\n                    }, {\n                        text: \'最近三个月\',\n                        onClick(picker) {\n                            const end = new Date();\n                            const start = new Date();\n                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n                            picker.$emit(\'pick\', [start, end]);\n                        }\n                    }]\n                },\n                value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],\n                value2: \'\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("默认的起始与结束时刻")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-row>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>起始日期时刻为 12:00:00</aex-text>\n            <aex-date-picker v-model="value1" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="[\'12:00:00\']">\n            </aex-date-picker>\n        </aex-col>\n        <aex-col :span=\'8\'>\n            <aex-text style=\'marginBottom:10px\'>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</aex-text>\n            <aex-date-picker v-model="value2" type="datetimerange" align="right" start-placeholder="开始日期" end-placeholder="结束日期" :default-time="[\'12:00:00\', \'08:00:00\']">\n            </aex-date-picker>\n        </aex-col>\n    </aex-row>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: \'\',\n                value2: \'\'\n            };\n        }\n    };\n<\/script>\n')])])])],2),e("h3",[t._v("Attributes")]),t._m(5),e("h3",[t._v("Picker Options")]),t._m(6),e("h3",[t._v("Shortcuts")]),t._m(7),e("h3",[t._v("Events")]),t._m(8),e("h3",[t._v("Methods")]),t._m(9),e("h3",[t._v("Slots")]),t._m(10)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { DatePicker } from 'aex-ui';\nVue.use(DatePicker)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("DateTimePicker 由 DatePicker 和 TimePicker 派生， "),e("code",[t._v("Picker Options")]),t._v(" 或者其他选项可以参照 DatePicker 和 TimePicker。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("通过设置 "),e("code",[t._v("type")]),t._v(" 属性为 "),e("code",[t._v("datetime")]),t._v(" ，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("设置 "),e("code",[t._v("type")]),t._v(" 为 "),e("code",[t._v("datetimerange")]),t._v(" 即可选择日期和时间范围")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("使用 "),e("code",[t._v("datetimerange")]),t._v(" 进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的 "),e("code",[t._v("00:00:00")]),t._v(" 作为起始与结束的时刻；"),e("br"),t._v("\n通过选项 "),e("code",[t._v("default-time")]),t._v(" 可以控制选中起始与结束日期时所使用的具体时刻。 "),e("code",[t._v("default-time")]),t._v(" 接受一个数组，数组每项值为字符串，形如 "),e("code",[t._v("12:00:00")]),t._v(" ，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("value / v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("date(DateTimePicker) / array(DateTimeRangePicker)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("完全只读")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("editable")]),e("td",[t._v("文本框可输入")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("clearable")]),e("td",[t._v("是否显示清除按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("输入框尺寸")]),e("td",[t._v("string")]),e("td",[t._v("large, small, mini")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("非范围选择时的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("start-placeholder")]),e("td",[t._v("范围选择时开始日期的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("end-placeholder")]),e("td",[t._v("范围选择时结束日期的占位内容")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("time-arrow-control")]),e("td",[t._v("是否使用箭头进行时间选择")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("显示类型")]),e("td",[t._v("string")]),e("td",[t._v("year/month/date/week/ datetime/datetimerange/daterange")]),e("td",[t._v("date")])]),e("tr",[e("td",[t._v("format")]),e("td",[t._v("显示在输入框中的格式")]),e("td",[t._v("string")]),e("td",[t._v("日期格式 见 DatePicker 文档")]),e("td",[t._v("yyyy-MM-dd HH:mm:ss")])]),e("tr",[e("td",[t._v("align")]),e("td",[t._v("对齐方式")]),e("td",[t._v("string")]),e("td",[t._v("left, center, right")]),e("td",[t._v("left")])]),e("tr",[e("td",[t._v("popper-class")]),e("td",[t._v("DateTimePicker 下拉框的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("picker-options")]),e("td",[t._v("当前时间日期选择器特有的选项参考下表")]),e("td",[t._v("object")]),e("td",[t._v("—")]),e("td",[t._v("{}")])]),e("tr",[e("td",[t._v("range-separator")]),e("td",[t._v("选择范围时的分隔符")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("'-'")])]),e("tr",[e("td",[t._v("default-value")]),e("td",[t._v("可选，选择器打开时默认显示的时间")]),e("td",[t._v("Date")]),e("td",[t._v("可被 "),e("code",[t._v("new Date()")]),t._v(" 解析")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("default-time")]),e("td",[t._v("选中日期后的默认具体时刻")]),e("td",[t._v("非范围选择时：string / 范围选择时：string[]")]),e("td",[t._v("非范围选择时：形如 "),e("code",[t._v("12:00:00")]),t._v(" 的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如 "),e("code",[t._v("12:00:00")]),t._v(" ，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 "),e("code",[t._v("00:00:00")])]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("value-format")]),e("td",[t._v("可选，绑定值的格式。不指定则绑定值为 Date 对象")]),e("td",[t._v("string")]),e("td",[t._v("日期格式 见 DatePicker 文档")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("unlink-panels")]),e("td",[t._v("在范围选择器里取消两个日期面板之间的联动")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("prefix-icon")]),e("td",[t._v("自定义头部图标的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("el-icon-date")])]),e("tr",[e("td",[t._v("clear-icon")]),e("td",[t._v("自定义清空图标的类名")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("el-icon-circle-close")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("shortcuts")]),e("td",[t._v("设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表")]),e("td",[t._v("Object[]")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("disabledDate")]),e("td",[t._v("设置禁用状态，参数为当前日期，要求返回 Boolean")]),e("td",[t._v("Function")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("cellClassName")]),e("td",[t._v("设置日期的 className")]),e("td",[t._v("Function(Date)")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("firstDayOfWeek")]),e("td",[t._v("周起始日")]),e("td",[t._v("Number")]),e("td",[t._v("1 到 7")]),e("td",[t._v("7")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("标题文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("onClick")]),e("td",[t._v("选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())")]),e("td",[t._v("function")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("Event Name")]),e("th",[t._v("Description")]),e("th",[t._v("Parameters")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("用户确认选定的值时触发")]),e("td",[t._v("组件绑定值。格式与绑定值一致，可受 "),e("code",[t._v("value-format")]),t._v(" 控制")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("当 input 失去焦点时触发")]),e("td",[t._v("组件实例")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("当 input 获得焦点时触发")]),e("td",[t._v("组件实例")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("focus")]),e("td",[t._v("使 input 获取焦点")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("range-separator")]),e("td",[t._v("自定义分隔符")])])])])}],!1,null,null,null);e.default=n.exports}}]);