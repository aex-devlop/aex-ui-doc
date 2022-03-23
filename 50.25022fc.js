(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{311:function(e,t,r){"use strict";r.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{width:"400px"}},[t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{percentage:50}}),e._v(" "),t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{percentage:100,format:e.format}}),e._v(" "),t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{percentage:100,status:"success"}}),e._v(" "),t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{percentage:100,status:"warning"}}),e._v(" "),t("aex-progress",{attrs:{percentage:50,status:"exception"}})],1)])},staticRenderFns:[]},{methods:{format:function(e){return 100===e?"满":e+"%"}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{width:"400px"}},[t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{"text-inside":!0,"stroke-width":26,percentage:70}}),e._v(" "),t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{"text-inside":!0,"stroke-width":24,percentage:100,status:"success"}}),e._v(" "),t("aex-progress",{staticStyle:{marginBottom:"14px"},attrs:{"text-inside":!0,"stroke-width":22,percentage:80,status:"warning"}}),e._v(" "),t("aex-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:50,status:"exception"}})],1)])},staticRenderFns:[]},{}),"aex-demo2":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{width:"400px"}},[t("aex-progress",{attrs:{percentage:e.percentage,color:e.customColor}}),e._v(" "),t("aex-progress",{attrs:{percentage:e.percentage,color:e.customColorMethod}}),e._v(" "),t("aex-progress",{attrs:{percentage:e.percentage,color:e.customColors}})],1),e._v(" "),t("div",[t("aex-button-group",[t("aex-button",{attrs:{size:"mini",type:"outline",icon:"aex-icon-minus"},on:{click:e.decrease}}),e._v(" "),t("aex-button",{attrs:{size:"mini",type:"outline",icon:"aex-icon-plus"},on:{click:e.increase}})],1)],1)])},staticRenderFns:[]},{data:function(){return{percentage:20,customColor:"#409eff",customColors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}},methods:{customColorMethod:function(e){return e<30?"#909399":e<70?"#e6a23c":"#67c23a"},increase:function(){this.percentage+=10,100<this.percentage&&(this.percentage=100)},decrease:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}}),"aex-demo3":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-progress",{attrs:{type:"circle",percentage:0}}),e._v(" "),t("aex-progress",{attrs:{type:"circle",percentage:25}}),e._v(" "),t("aex-progress",{attrs:{type:"circle",percentage:100,status:"success"}}),e._v(" "),t("aex-progress",{attrs:{type:"circle",percentage:70,status:"warning"}}),e._v(" "),t("aex-progress",{attrs:{type:"circle",percentage:50,status:"exception"}})],1)},staticRenderFns:[]},{}),"aex-demo4":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-progress",{attrs:{type:"dashboard",percentage:e.percentage,color:e.colors}}),e._v(" "),t("div",[t("aex-button-group",[t("aex-button",{attrs:{type:"outline",icon:"aex-icon-minus"},on:{click:e.decrease}}),e._v(" "),t("aex-button",{attrs:{type:"outline",icon:"aex-icon-plus"},on:{click:e.increase}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{percentage:10,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}},methods:{increase:function(){this.percentage+=10,100<this.percentage&&(this.percentage=100)},decrease:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}})}},r=r(0),n=Object(r.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h2",[e._v("Progress 进度条")]),t("p",[e._v("用于展示操作进度，告知用户当前状态和预期。")]),t("h3",[e._v("线形进度条")]),e._m(0),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style=\'width:400px\'>\n    <aex-progress :percentage="50" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :percentage="100" :format="format" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :percentage="100" status="success" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :percentage="100" status="warning" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :percentage="50" status="exception"></aex-progress>\n</div>\n\n<script>\n    export default {\n        methods: {\n            format(percentage) {\n                return percentage === 100 ? \'满\' : `${percentage}%`;\n            }\n        }\n    };\n<\/script>\n')])])])],2),t("h3",[e._v("百分比内显")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style=\'width:400px\'>\n    <aex-progress :text-inside="true" :stroke-width="26" :percentage="70" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" style=\'marginBottom:14px\'></aex-progress>\n    <aex-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></aex-progress>\n</div>\n')])])])],2),t("h3",[e._v("自定义颜色")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<div style='width:400px'>\n    <aex-progress :percentage=\"percentage\" :color=\"customColor\"></aex-progress>\n\n    <aex-progress :percentage=\"percentage\" :color=\"customColorMethod\"></aex-progress>\n\n    <aex-progress :percentage=\"percentage\" :color=\"customColors\"></aex-progress>\n</div>\n<div>\n    <aex-button-group>\n        <aex-button size='mini' type='outline' icon=\"aex-icon-minus\" @click=\"decrease\"></aex-button>\n        <aex-button size='mini' type='outline' icon=\"aex-icon-plus\" @click=\"increase\"></aex-button>\n    </aex-button-group>\n</div>\n\n<script>\n    export default {\n        data() {\n            return {\n                percentage: 20,\n                customColor: '#409eff',\n                customColors: [{\n                        color: '#f56c6c',\n                        percentage: 20\n                    },\n                    {\n                        color: '#e6a23c',\n                        percentage: 40\n                    },\n                    {\n                        color: '#5cb87a',\n                        percentage: 60\n                    },\n                    {\n                        color: '#1989fa',\n                        percentage: 80\n                    },\n                    {\n                        color: '#6f7ad3',\n                        percentage: 100\n                    }\n                ]\n            };\n        },\n        methods: {\n            customColorMethod(percentage) {\n                if (percentage < 30) {\n                    return '#909399';\n                } else if (percentage < 70) {\n                    return '#e6a23c';\n                } else {\n                    return '#67c23a';\n                }\n            },\n            increase() {\n                this.percentage += 10;\n                if (this.percentage > 100) {\n                    this.percentage = 100;\n                }\n            },\n            decrease() {\n                this.percentage -= 10;\n                if (this.percentage < 0) {\n                    this.percentage = 0;\n                }\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("环形进度条")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-progress type="circle" :percentage="0"></aex-progress>\n<aex-progress type="circle" :percentage="25"></aex-progress>\n<aex-progress type="circle" :percentage="100" status="success"></aex-progress>\n<aex-progress type="circle" :percentage="70" status="warning"></aex-progress>\n<aex-progress type="circle" :percentage="50" status="exception"></aex-progress>\n')])])])],2),t("h3",[e._v("仪表盘形进度条")]),t("demo-block",[t("div",[t("p",[e._v("通过 "),t("code",[e._v("type")]),e._v(" 属性来指定使用仪表盘形进度条。")])]),t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-progress type=\"dashboard\" :percentage=\"percentage\" :color=\"colors\"></aex-progress>\n<div>\n    <aex-button-group>\n        <aex-button type='outline' icon=\"aex-icon-minus\" @click=\"decrease\"></aex-button>\n        <aex-button type='outline' icon=\"aex-icon-plus\" @click=\"increase\"></aex-button>\n    </aex-button-group>\n</div>\n\n<script>\n    export default {\n        data() {\n            return {\n                percentage: 10,\n                colors: [{\n                        color: '#f56c6c',\n                        percentage: 20\n                    },\n                    {\n                        color: '#e6a23c',\n                        percentage: 40\n                    },\n                    {\n                        color: '#5cb87a',\n                        percentage: 60\n                    },\n                    {\n                        color: '#1989fa',\n                        percentage: 80\n                    },\n                    {\n                        color: '#6f7ad3',\n                        percentage: 100\n                    }\n                ]\n            };\n        },\n        methods: {\n            increase() {\n                this.percentage += 10;\n                if (this.percentage > 100) {\n                    this.percentage = 100;\n                }\n            },\n            decrease() {\n                this.percentage -= 10;\n                if (this.percentage < 0) {\n                    this.percentage = 0;\n                }\n            }\n        }\n    }\n<\/script>\n")])])])],2),t("h3",[e._v("Attributes")]),e._m(4)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("Progress 组件设置 "),t("code",[e._v("percentage")]),e._v(" 属性即可，表示进度条对应的百分比，"),t("strong",[e._v("必填")]),e._v("，必须在 0-100。通过 "),t("code",[e._v("format")]),e._v(" 属性来指定进度条文字内容。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("百分比不占用额外控件，适用于文件上传等场景。\nProgress 组件可通过 "),t("code",[e._v("stroke-width")]),e._v(" 属性更改进度条的高度，并可通过 "),t("code",[e._v("text-inside")]),e._v(" 属性来将进度条描述置于进度条内部。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("可以通过 "),t("code",[e._v("color")]),e._v(" 设置进度条的颜色， "),t("code",[e._v("color")]),e._v(" 可以接受颜色字符串，函数和数组。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("Progress 组件可通过 "),t("code",[e._v("type")]),e._v(" 属性来指定使用环形进度条，在环形进度条中，还可以通过 "),t("code",[e._v("width")]),e._v(" 属性来设置其大小。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[t("strong",[e._v("percentage")])]),t("td",[t("strong",[e._v("百分比（必填）")])]),t("td",[e._v("number")]),t("td",[e._v("0-100")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("进度条类型")]),t("td",[e._v("string")]),t("td",[e._v("line/circle/dashboard")]),t("td",[e._v("line")])]),t("tr",[t("td",[e._v("stroke-width")]),t("td",[e._v("进度条的宽度，单位 px")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("6")])]),t("tr",[t("td",[e._v("text-inside")]),t("td",[e._v("进度条显示文字内置在进度条内（只在 type=line 时可用）")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("status")]),t("td",[e._v("进度条当前状态")]),t("td",[e._v("string")]),t("td",[e._v("success/exception/warning")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("color")]),t("td",[e._v("进度条背景色（会覆盖 status 状态颜色）")]),t("td",[e._v("string/function/array")]),t("td",[e._v("—")]),t("td",[e._v("''")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）")]),t("td",[e._v("number")]),t("td"),t("td",[e._v("126")])]),t("tr",[t("td",[e._v("show-text")]),t("td",[e._v("是否显示进度条文字内容")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("stroke-linecap")]),t("td",[e._v("circle/dashboard 类型路径两端的形状")]),t("td",[e._v("string")]),t("td",[e._v("butt/round/square")]),t("td",[e._v("round")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("指定进度条文字内容")]),t("td",[e._v("function(percentage)")]),t("td",[e._v("—")]),t("td",[e._v("—")])])])])}],!1,null,null,null);t.default=n.exports}}]);