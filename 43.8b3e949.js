(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{280:function(t,e,i){"use strict";i.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i,n=arguments[e];for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-steps",{attrs:{active:t.active}},[e("aex-step",{attrs:{title:"步骤 1",description:t.getDesc(1)}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 2",description:t.getDesc(2)}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 3",description:t.getDesc(3)}})],1),t._v(" "),e("aex-button",{staticStyle:{"margin-top":"20px"},on:{click:t.next}},[t._v("下一步")])],1)},staticRenderFns:[]},{data:function(){return{active:0}},methods:{next:function(){2<this.active++&&(this.active=0)},getDesc:function(t){return this.active+1==t?"处理中":this.active+1<t?"待处理":this.active+1>t?"已完成":void 0}}}),"aex-demo1":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-steps",{attrs:{active:t.active,finishColor:"#fa6400"}},[e("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3"}})],1),t._v(" "),e("aex-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"warning"},on:{click:t.next}},[t._v("下一步")])],1)},staticRenderFns:[]},{data:function(){return{active:0}},methods:{next:function(){2<this.active++&&(this.active=0)}}}),"aex-demo2":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-steps",{attrs:{active:t.active,"text-direction":"horizontal"}},[e("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3"}})],1),t._v(" "),e("aex-button",{staticStyle:{"margin-top":"20px"},on:{click:t.next}},[t._v("下一步")])],1)},staticRenderFns:[]},{data:function(){return{active:0}},methods:{next:function(){2<this.active++&&(this.active=0)}}}),"aex-demo3":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-steps",{attrs:{space:120,active:t.active,"finished-icon":"aex-icon-check",finishColor:"#fa6400"}},[e("aex-step",{attrs:{title:"步骤 1",description:t.getDesc(1)}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 2",description:t.getDesc(2)}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 3",description:t.getDesc(3)}})],1),t._v(" "),e("aex-button",{staticStyle:{"margin-top":"20px"},on:{click:t.next}},[t._v("下一步")])],1)},staticRenderFns:[]},{data:function(){return{active:0}},methods:{next:function(){2<this.active++&&(this.active=0)},getDesc:function(t){return this.active+1==t?"处理中":this.active+1<t?"待处理":this.active+1>t?"已完成":void 0}}}),"aex-demo4":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-steps",{attrs:{active:2,"align-center":"","text-direction":"horizontal"}},[t("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3"}})],1)],1)},staticRenderFns:[]},{}),"aex-demo5":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-steps",{attrs:{active:2,"align-center":""}},[t("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1",icon:"aex-icon-order"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2",icon:"aex-icon-dig"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3",icon:"aex-icon-smallbell"}})],1)],1)},staticRenderFns:[]},{}),"aex-demo6":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-steps",{attrs:{active:1,space:100,direction:"vertical"}},[t("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1",icon:"aex-icon-order"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2",icon:"aex-icon-dig"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3",icon:"aex-icon-smallbell"}})],1)],1)},staticRenderFns:[]},{}),"aex-demo7":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-steps",{attrs:{active:2,dot:"",finishColor:"#fa6400","text-direction":"horizontal"}},[t("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3"}})],1)],1)},staticRenderFns:[]},{}),"aex-demo8":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-steps",{attrs:{active:2,simple:""}},[t("aex-step",{attrs:{title:"步骤 1",description:"这里是描述1",icon:"aex-icon-order"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 2",description:"这里是描述2",icon:"aex-icon-dig"}}),this._v(" "),t("aex-step",{attrs:{title:"步骤 3",description:"这里是描述3",icon:"aex-icon-smallbell"}})],1)],1)},staticRenderFns:[]},{}),"aex-demo9":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-steps",{attrs:{active:t.active,strip:""}},[e("aex-step",{attrs:{title:"步骤 1"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 2"}}),t._v(" "),e("aex-step",{attrs:{title:"步骤 3"}})],1),t._v(" "),e("aex-button",{staticStyle:{"margin-top":"20px"},on:{click:t.next}},[t._v("下一步")])],1)},staticRenderFns:[]},{data:function(){return{active:1}},methods:{next:function(){2<this.active++&&(this.active=0)}}})}},i=i(1),n=Object(i.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Steps 步骤条")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"active\">\n    <aex-step title=\"步骤 1\" :description='getDesc(1)'></aex-step>\n    <aex-step title=\"步骤 2\" :description='getDesc(2)'></aex-step>\n    <aex-step title=\"步骤 3\" :description='getDesc(3)'></aex-step>\n</aex-steps>\n\n<aex-button style=\"margin-top: 20px;\" @click=\"next\">下一步</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: 0\n            };\n        },\n\n        methods: {\n            next() {\n                if (this.active++ > 2) this.active = 0;\n            },\n            getDesc(index) {\n                if ((this.active + 1) == index) {\n                    return '处理中'\n                }\n                if ((this.active + 1) < index) {\n                    return '待处理'\n                }\n                if ((this.active + 1) > index) {\n                    return '已完成'\n                }\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("自定义颜色")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-steps :active="active" finishColor=\'#fa6400\'>\n    <aex-step title="步骤 1" description=\'这里是描述1\'></aex-step>\n    <aex-step title="步骤 2" description=\'这里是描述2\'></aex-step>\n    <aex-step title="步骤 3" description=\'这里是描述3\'></aex-step>\n</aex-steps>\n\n<aex-button style="margin-top: 20px;" type=\'warning\' @click="next">下一步</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: 0\n            };\n        },\n\n        methods: {\n            next() {\n                if (this.active++ > 2) this.active = 0;\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("文字排版方向")]),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-steps :active="active" text-direction=\'horizontal\'>\n    <aex-step title="步骤 1" description=\'这里是描述1\'></aex-step>\n    <aex-step title="步骤 2" description=\'这里是描述2\'></aex-step>\n    <aex-step title="步骤 3" description=\'这里是描述3\'></aex-step>\n</aex-steps>\n\n<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: 0\n            };\n        },\n\n        methods: {\n            next() {\n                if (this.active++ > 2) this.active = 0;\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("完成时icon")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :space='120' :active=\"active\" finished-icon=\"aex-icon-check\" finishColor='#fa6400'>\n    <aex-step title=\"步骤 1\" :description='getDesc(1)'></aex-step>\n    <aex-step title=\"步骤 2\" :description='getDesc(2)'></aex-step>\n    <aex-step title=\"步骤 3\" :description='getDesc(3)'></aex-step>\n</aex-steps>\n\n<aex-button style=\"margin-top: 20px;\" @click=\"next\">下一步</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: 0\n            };\n        },\n        methods: {\n            next() {\n                if (this.active++ > 2) this.active = 0;\n            },\n            getDesc(index) {\n                if ((this.active + 1) == index) {\n                    return '处理中'\n                }\n                if ((this.active + 1) < index) {\n                    return '待处理'\n                }\n                if ((this.active + 1) > index) {\n                    return '已完成'\n                }\n            }\n        }\n    }\n<\/script>\n")])])])],2),e("h3",[t._v("居中展示")]),t._m(5),e("demo-block",[e("template",{slot:"source"},[e("aex-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"2\" align-center text-direction='horizontal'>\n    <aex-step title=\"步骤 1\" description='这里是描述1'></aex-step>\n    <aex-step title=\"步骤 2\" description='这里是描述2'></aex-step>\n    <aex-step title=\"步骤 3\" description='这里是描述3'></aex-step>\n</aex-steps>\n")])])])],2),e("h3",[t._v("带图标")]),t._m(6),e("demo-block",[e("template",{slot:"source"},[e("aex-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"2\" align-center>\n    <aex-step title=\"步骤 1\" description='这里是描述1' icon='aex-icon-order'></aex-step>\n    <aex-step title=\"步骤 2\" description='这里是描述2' icon='aex-icon-dig'></aex-step>\n    <aex-step title=\"步骤 3\" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>\n</aex-steps>\n")])])])],2),e("h3",[t._v("竖直方向")]),t._m(7),e("demo-block",[e("template",{slot:"source"},[e("aex-demo6")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"1\" :space='100' direction='vertical'>\n    <aex-step title=\"步骤 1\" description='这里是描述1' icon='aex-icon-order'></aex-step>\n    <aex-step title=\"步骤 2\" description='这里是描述2' icon='aex-icon-dig'></aex-step>\n    <aex-step title=\"步骤 3\" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>\n</aex-steps>\n")])])])],2),e("h3",[t._v("点风格")]),t._m(8),e("demo-block",[e("template",{slot:"source"},[e("aex-demo7")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"2\" dot finishColor='#fa6400' text-direction='horizontal'>\n    <aex-step title=\"步骤 1\" description='这里是描述1'></aex-step>\n    <aex-step title=\"步骤 2\" description='这里是描述2'></aex-step>\n    <aex-step title=\"步骤 3\" description='这里是描述3'></aex-step>\n</aex-steps>\n")])])])],2),e("h3",[t._v("简洁风格")]),t._m(9),e("demo-block",[e("template",{slot:"source"},[e("aex-demo8")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<aex-steps :active=\"2\" simple>\n    <aex-step title=\"步骤 1\" description='这里是描述1' icon='aex-icon-order'></aex-step>\n    <aex-step title=\"步骤 2\" description='这里是描述2' icon='aex-icon-dig'></aex-step>\n    <aex-step title=\"步骤 3\" description='这里是描述3' icon='aex-icon-smallbell'></aex-step>\n</aex-steps>\n")])])])],2),e("h3",[t._v("条状风格")]),t._m(10),e("demo-block",[e("template",{slot:"source"},[e("aex-demo9")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-steps :active="active" strip>\n    <aex-step title="步骤 1"></aex-step>\n    <aex-step title="步骤 2"></aex-step>\n    <aex-step title="步骤 3"></aex-step>\n</aex-steps>\n<aex-button style="margin-top: 20px;" @click="next">下一步</aex-button>\n\n<script>\n    export default {\n        data() {\n            return {\n                active: 1\n            };\n        },\n\n        methods: {\n            next() {\n                if (this.active++ > 2) this.active = 0;\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("Steps Attributes")]),t._m(11),e("h3",[t._v("Step Attributes")]),t._m(12),e("h3",[t._v("Step Slot")]),t._m(13)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Steps } from 'aex-ui';\nVue.use(Steps)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("active")]),t._v(" 属性: 接受一个 "),e("code",[t._v("Number")]),t._v(" ，表明步骤的 index，从 0 开始"),e("br"),e("code",[t._v("title")]),t._v(" 属性: 设置标题，也可以通过具名slot来设置"),e("br"),e("code",[t._v("description")]),t._v(" 属性: 设置描述，也可以通过具名slot来设置")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("finishColor")]),t._v(" 属性: 自定义完成时的颜色, 默认颜色: "),e("code",[t._v("#3378ff")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("text-direction")]),t._v(" : 文字的方向, 属性可选值： "),e("code",[t._v("vertical, horizontal")]),t._v(" , 默认 "),e("code",[t._v("vertical")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("space")]),t._v(" 属性: 需要定宽的步骤条时设置，它接受 "),e("code",[t._v("Number")]),t._v(" ，单位为 "),e("code",[t._v("px")]),t._v(" , 如果不设置，则为自适应。"),e("br"),e("code",[t._v("finish-status")]),t._v(" 属性：用来设置步骤完成时要展示的状态，单个设置可以用 step 的 "),e("code",[t._v("status")]),t._v(" 属性")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("align-center")]),t._v(" 属性: 设置为剧中展示")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("icon")]),t._v(" 属性: 给每个步骤设置不同的图标, 也可以通过具名slot来设置")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("direction")]),t._v(" 属性设置为 "),e("code",[t._v("vertical")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("dot")]),t._v(" 属性设置为 "),e("code",[t._v("true")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("simple")]),t._v(" 属性设置为 "),e("code",[t._v("true")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("strip")]),t._v(" 属性设置为 "),e("code",[t._v("true")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("space")]),e("td",[t._v("每个 step 的间距，不填写将自适应间距。支持百分比。")]),e("td",[t._v("number / string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("direction")]),e("td",[t._v("显示方向")]),e("td",[t._v("string")]),e("td",[t._v("vertical/horizontal")]),e("td",[t._v("horizontal")])]),e("tr",[e("td",[t._v("active")]),e("td",[t._v("设置当前激活步骤")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("process-status")]),e("td",[t._v("设置当前步骤的状态")]),e("td",[t._v("string")]),e("td",[t._v("wait / process / finish / error / success")]),e("td",[t._v("process")])]),e("tr",[e("td",[t._v("finish-status")]),e("td",[t._v("设置结束步骤的状态")]),e("td",[t._v("string")]),e("td",[t._v("wait / process / finish / error / success")]),e("td",[t._v("finish")])]),e("tr",[e("td",[t._v("align-center")]),e("td",[t._v("进行居中对齐")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("dot")]),e("td",[t._v("是否应用点风格")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("simple")]),e("td",[t._v("是否应用简洁风格")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("finishColor")]),e("td",[t._v("自定义完成时的颜色")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("描述性文字")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("图标")]),e("td",[t._v("传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入")]),e("td",[t._v("string")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("status")]),e("td",[t._v("设置当前步骤的状态，不设置则根据 steps 确定状态")]),e("td",[t._v("wait / process / finish / error / success")]),e("td",[t._v("-")]),e("td")])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("icon")]),e("td",[t._v("自定义图标")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("自定义标题")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("自定义描述性文字")])])])])}],!1,null,null,null);e.default=n.exports}}]);