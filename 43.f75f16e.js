(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{260:function(e,t,r){"use strict";r.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-time-select",{attrs:{"picker-options":{start:"00:00",step:"00:15",end:"23:59"},placeholder:"选择时间"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},staticRenderFns:[]},{data:function(){return{value:""}}}),"aex-demo1":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-time-picker",{attrs:{"picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"任意时间点"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),e("aex-time-picker",{attrs:{"arrow-control":"","picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"任意时间点"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})]],2)},staticRenderFns:[]},{data:function(){return{value1:new Date(2016,9,10,18,40),value2:new Date(2016,9,10,18,40)}}}),"aex-demo2":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"08:30",step:"00:15",end:"18:30"}},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),e("aex-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"08:30",step:"00:15",end:"18:30",minTime:t.startTime}},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})]],2)},staticRenderFns:[]},{data:function(){return{startTime:"",endTime:""}}}),"aex-demo3":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-time-picker",{attrs:{"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),e("aex-time-picker",{attrs:{"is-range":"","arrow-control":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})]],2)},staticRenderFns:[]},{data:function(){return{value1:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)],value2:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]}}})}},r=r(2),n=Object(r.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("TimePicker 时间选择器")]),t("p",[e._v("用于选择或输入日期")]),t("h3",[e._v("按需引入")]),e._m(0),t("h3",[e._v("固定时间点")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-time-select v-model=\"value\" :picker-options=\"{\n    start: '00:00',\n    step: '00:15',\n    end: '23:59'\n  }\" placeholder=\"选择时间\">\n</aex-time-select>\n\n<script>\n    export default {\n        data() {\n            return {\n                value: ''\n            };\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("任意时间点")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-time-picker v-model="value1" :picker-options="{\n      selectableRange: \'18:30:00 - 20:30:00\'\n    }" placeholder="任意时间点">\n    </aex-time-picker>\n    <aex-time-picker arrow-control v-model="value2" :picker-options="{\n      selectableRange: \'18:30:00 - 20:30:00\'\n    }" placeholder="任意时间点">\n    </aex-time-picker>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: new Date(2016, 9, 10, 18, 40),\n                value2: new Date(2016, 9, 10, 18, 40)\n            };\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("固定时间范围")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <aex-time-select placeholder=\"起始时间\" v-model=\"startTime\" :picker-options=\"{\n      start: '08:30',\n      step: '00:15',\n      end: '18:30'\n    }\">\n    </aex-time-select>\n    <aex-time-select placeholder=\"结束时间\" v-model=\"endTime\" :picker-options=\"{\n      start: '08:30',\n      step: '00:15',\n      end: '18:30',\n      minTime: startTime\n    }\">\n    </aex-time-select>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                startTime: '',\n                endTime: ''\n            };\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("任意时间范围")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <aex-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">\n    </aex-time-picker>\n    <aex-time-picker is-range arrow-control v-model="value2" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">\n    </aex-time-picker>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],\n                value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]\n            };\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("Attributes")]),e._m(5),t("h3",[e._v("Time Select Options")]),e._m(6),t("h3",[e._v("Time Picker Options")]),e._m(7),t("h3",[e._v("Events")]),e._m(8),t("h3",[e._v("Methods")]),e._m(9)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",[e._v("import { TimeSelect } from 'aex-ui';\nVue.use(TimeSelect)\n如果是用自由选定时间就选用：TimePicker\n")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("提供几个固定的时间点供用户选择"),t("br"),e._v("\n使用 aex-time-select 标签，分别通过 "),t("code",[e._v("start")]),e._v(" 、 "),t("code",[e._v("end")]),e._v(" 和 "),t("code",[e._v("step")]),e._v(" 指定可选的起始时间、结束时间和步长")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("可以选择任意时间"),t("br"),e._v("\n使用 aex-time-picker 标签，通过 "),t("code",[e._v("selectableRange")]),e._v(" 限制可选时间范围。"),t("br"),e._v("\n提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，"),t("br"),e._v("\n打开 "),t("code",[e._v("arrow-control")]),e._v(" 属性则通过界面上的箭头进行选择。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("若先选择开始时间，则结束时间设置 "),t("code",[e._v("minTime: startTime")]),e._v(" 内备选项的状态会随之改变")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("可选择任意的时间范围"),t("br"),e._v("\n添加 "),t("code",[e._v("is-range")]),e._v(" 属性即可选择时间范围，同样支持 "),t("code",[e._v("arrow-control")]),e._v(" 属性。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("value / v-model")]),t("td",[e._v("绑定值")]),t("td",[e._v("date(TimePicker) / string(TimeSelect)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("readonly")]),t("td",[e._v("完全只读")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("editable")]),t("td",[e._v("文本框可输入")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("clearable")]),t("td",[e._v("是否显示清除按钮")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("输入框尺寸")]),t("td",[e._v("string")]),t("td",[e._v("medium / small / mini")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("非范围选择时的占位内容")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("start-placeholder")]),t("td",[e._v("范围选择时开始日期的占位内容")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("end-placeholder")]),t("td",[e._v("范围选择时开始日期的占位内容")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("is-range")]),t("td",[e._v("是否为时间范围选择，仅对 "),t("code",[e._v("<aex-time-picker>")]),e._v(" 有效")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("arrow-control")]),t("td",[e._v("是否使用箭头进行时间选择，仅对 "),t("code",[e._v("<aex-time-picker>")]),e._v(" 有效")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("align")]),t("td",[e._v("对齐方式")]),t("td",[e._v("string")]),t("td",[e._v("left / center / right")]),t("td",[e._v("left")])]),t("tr",[t("td",[e._v("popper-class")]),t("td",[e._v("TimePicker 下拉框的类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("picker-options")]),t("td",[e._v("当前时间日期选择器特有的选项参考下表")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("{}")])]),t("tr",[t("td",[e._v("range-separator")]),t("td",[e._v("选择范围时的分隔符")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("'-'")])]),t("tr",[t("td",[e._v("value-format")]),t("td",[e._v("可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象")]),t("td",[e._v("string")]),t("td",[e._v("日期格式 见 DatePicker 文档")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("default-value")]),t("td",[e._v("可选，选择器打开时默认显示的时间")]),t("td",[e._v("Date(TimePicker) / string(TimeSelect)")]),t("td",[e._v("可被 "),t("code",[e._v("new Date()")]),e._v(" 解析(TimePicker) / 可选值(TimeSelect)")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("prefix-icon")]),t("td",[e._v("自定义头部图标的类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("aex-icon-time")])]),t("tr",[t("td",[e._v("clear-icon")]),t("td",[e._v("自定义清空图标的类名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("aex-icon-error")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("start")]),t("td",[e._v("开始时间")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("09:00")])]),t("tr",[t("td",[e._v("end")]),t("td",[e._v("结束时间")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("18:00")])]),t("tr",[t("td",[e._v("step")]),t("td",[e._v("间隔时间")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("00:30")])]),t("tr",[t("td",[e._v("minTime")]),t("td",[e._v("最小时间，小于该时间的时间段将被禁用")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("00:00")])]),t("tr",[t("td",[e._v("maxTime")]),t("td",[e._v("最大时间，大于该时间的时间段将被禁用")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("selectableRange")]),t("td",[e._v("可选时间段，例如 "),t("code",[e._v("'18:30:00 - 20:30:00'")]),e._v(" 或者传入数组 "),t("code",[e._v("['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']")])]),t("td",[e._v("string / array")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("时间格式化(TimePicker)")]),t("td",[e._v("string")]),t("td",[e._v("小时： "),t("code",[e._v("HH")]),e._v(" ，分： "),t("code",[e._v("mm")]),e._v(" ，秒： "),t("code",[e._v("ss")]),e._v(" ，AM/PM "),t("code",[e._v("A")])]),t("td",[e._v("'HH:mm:ss'")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("用户确认选定的值时触发")]),t("td",[e._v("组件绑定值")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("当 input 失去焦点时触发")]),t("td",[e._v("组件实例")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("当 input 获得焦点时触发")]),t("td",[e._v("组件实例")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("focus")]),t("td",[e._v("使 input 获取焦点")]),t("td",[e._v("-")])])])])}],!1,null,null,null);t.default=n.exports}}]);