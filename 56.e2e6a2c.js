(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{328:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("aex-skeleton")]],2)},staticRenderFns:[]},{}),"aex-demo1":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-skeleton",{attrs:{rows:6}})],1)},staticRenderFns:[]},{}),"aex-demo2":n({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("aex-skeleton",{attrs:{rows:6,animated:""}})],1)},staticRenderFns:[]},{}),"aex-demo3":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-skeleton",{staticStyle:{width:"240px"}},[e("template",{slot:"template"},[e("aex-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),t._v(" "),e("div",{staticStyle:{padding:"14px"}},[e("aex-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"p"}}),t._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between"}},[e("aex-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),t._v(" "),e("aex-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)],1)],2)]],2)},staticRenderFns:[]},{}),"aex-demo4":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("div",{staticStyle:{width:"240px"}},[t("p",[t("label",{staticStyle:{"margin-right":"16px"}},[e._v("切换 Loading")]),e._v(" "),t("aex-switch",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}})],1),e._v(" "),t("aex-skeleton",{staticStyle:{width:"240px"},attrs:{loading:e.loading,animated:""}},[t("template",{slot:"template"},[t("aex-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e._v(" "),t("div",{staticStyle:{padding:"14px"}},[t("aex-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e._v(" "),t("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[t("aex-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e._v(" "),t("aex-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)],1),e._v(" "),[t("div",[t("aex-image",{staticStyle:{width:"240px",height:"240px"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg",fit:"cover"}}),e._v(" "),t("div",{staticStyle:{padding:"14px"}},[t("aex-text",{attrs:{title:"h3"}},[e._v("可爱的小狗")]),e._v(" "),t("aex-text",[e._v("可爱的小狗可爱的小狗可爱的小狗")])],1)],1)]],2)],1)]],2)},staticRenderFns:[]},{data:function(){return{loading:!0}}}),"aex-demo5":n({render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[[a("div",{staticStyle:{width:"400px"}},[a("p",[a("aex-button",{on:{click:e.setLoading}},[e._v("点我重新加载")])],1),e._v(" "),a("aex-skeleton",{staticStyle:{width:"400px"},attrs:{loading:e.loading,animated:"",count:3}},[a("template",{slot:"template"},[a("aex-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e._v(" "),a("div",{staticStyle:{padding:"14px"}},[a("aex-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e._v(" "),a("aex-skeleton-item",{attrs:{variant:"text"}})],1)],1),e._v(" "),e._l(3,function(t){return a("div",{key:t,staticStyle:{width:"100%"}},[a("aex-image",{staticStyle:{width:"240px",height:"240px"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg",fit:"cover"}}),e._v(" "),a("div",{staticStyle:{padding:"14px"}},[a("aex-text",{attrs:{title:"h3"}},[e._v("可爱的小狗")]),e._v(" "),a("aex-text",[e._v("可爱的小狗可爱的小狗可爱的小狗")])],1)],1)})],2)],1)]],2)},staticRenderFns:[]},{data:function(){return{loading:!0}},mounted:function(){this.loading=!1},methods:{setLoading:function(){var t=this;this.loading=!0,setTimeout(function(){return t.loading=!1},2e3)}}}),"aex-demo6":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("div",{staticStyle:{width:"240px"}},[t("p",[t("label",{staticStyle:{"margin-right":"16px"}},[e._v("快速切换模拟")]),e._v(" "),t("aex-switch",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}})],1),e._v(" "),t("aex-skeleton",{staticStyle:{width:"240px"},attrs:{loading:e.loading,animated:"",throttle:500}},[t("template",{slot:"template"},[t("aex-skeleton-item",{staticStyle:{width:"240px",height:"240px"},attrs:{variant:"image"}}),e._v(" "),t("div",{staticStyle:{padding:"14px"}},[t("aex-skeleton-item",{staticStyle:{width:"50%"},attrs:{variant:"h3"}}),e._v(" "),t("div",{staticStyle:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},[t("aex-skeleton-item",{staticStyle:{"margin-right":"16px"},attrs:{variant:"text"}}),e._v(" "),t("aex-skeleton-item",{staticStyle:{width:"30%"},attrs:{variant:"text"}})],1)],1)],1),e._v(" "),[t("div",{staticStyle:{width:"100%"}},[t("aex-image",{staticStyle:{width:"240px",height:"240px"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg",fit:"cover"}}),e._v(" "),t("div",{staticStyle:{padding:"14px"}},[t("aex-text",{attrs:{title:"h3"}},[e._v("可爱的小狗")]),e._v(" "),t("aex-text",[e._v("可爱的小狗可爱的小狗可爱的小狗")])],1)],1)]],2)],1)]],2)},staticRenderFns:[]},{data:function(){return{loading:!1,currentDate:"2021-06-01"}}})}},a=a(0),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Skeleton 骨架屏")]),e("p",[t._v("在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。")]),e("h3",[t._v("按需引入")]),t._m(0),e("h3",[t._v("基础用法")]),e("p",[t._v("基础的骨架效果。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n    <aex-skeleton />\n</template>\n")])])])],2),e("h3",[t._v("更多参数")]),e("p",[t._v("可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 33% 的段首。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-skeleton :rows="6" />\n')])])])],2),e("h3",[t._v("动画效果")]),e("p",[t._v("显示动画效果。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<aex-skeleton :rows="6" animated />\n')])])])],2),e("h3",[t._v("自定义样式")]),e("p",[t._v("ElementPlus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。")]),e("p",[t._v("我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-skeleton style="width: 240px">\n        <template slot="template">\n            <aex-skeleton-item variant="image" style="width: 240px; height: 240px;" />\n            <div style="padding: 14px;">\n                <aex-skeleton-item variant="p" style="width: 50%" />\n                <div style="display: flex; align-items: center; justify-items: space-between;">\n                    <aex-skeleton-item variant="text" style="margin-right: 16px;" />\n                    <aex-skeleton-item variant="text" style="width: 30%;" />\n                </div>\n            </div>\n        </template>\n    </aex-skeleton>\n</template>\n')])])])],2),e("h3",[t._v("Loading 状态")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div style="width: 240px">\n        <p>\n            <label style="margin-right: 16px;">切换 Loading</label>\n            <aex-switch v-model="loading" />\n        </p>\n        <aex-skeleton style="width: 240px" :loading="loading" animated>\n            <template slot="template">\n                <aex-skeleton-item variant="image" style="width: 240px; height: 240px;" />\n                <div style="padding: 14px;">\n                    <aex-skeleton-item variant="h3" style="width: 50%;" />\n                    <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">\n                        <aex-skeleton-item variant="text" style="margin-right: 16px;" />\n                        <aex-skeleton-item variant="text" style="width: 30%;" />\n                    </div>\n                </div>\n            </template>\n            <template>\n                <div>\n                    <aex-image style=\'width: 240px; height: 240px;\' src=\'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\' fit=\'cover\' />\n                    <div style="padding: 14px;">\n                        <aex-text title=\'h3\'>可爱的小狗</aex-text>\n                        <aex-text>可爱的小狗可爱的小狗可爱的小狗</aex-text>\n                    </div>\n                </div>\n            </template>\n        </aex-skeleton>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: true,\n            }\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("渲染多条数据")]),t._m(2),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("aex-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div style="width: 400px">\n        <p>\n            <aex-button @click="setLoading">点我重新加载</aex-button>\n        </p>\n        <aex-skeleton style="width:400px" :loading="loading" animated :count="3">\n            <template slot="template">\n                <aex-skeleton-item variant="image" style="width: 240px; height: 240px;" />\n                <div style="padding: 14px;">\n                    <aex-skeleton-item variant="h3" style="width: 50%;" />\n                    <aex-skeleton-item variant="text" />\n                </div>\n            </template>\n            <template>\n                <div v-for="item in 3" :key="item" style=\'width:100%\'>\n                    <aex-image style=\'width: 240px; height: 240px;\' src=\'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\' fit=\'cover\' />\n                    <div style="padding: 14px;">\n                        <aex-text title=\'h3\'>可爱的小狗</aex-text>\n                        <aex-text>可爱的小狗可爱的小狗可爱的小狗</aex-text>\n                    </div>\n                </div>\n            </template>\n        </aex-skeleton>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: true,\n            }\n        },\n        mounted() {\n            this.loading = false\n        },\n        methods: {\n            setLoading() {\n                this.loading = true\n                setTimeout(() => (this.loading = false), 2000)\n            },\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("防止渲染抖动")]),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("aex-demo6")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div style="width: 240px">\n        <p>\n            <label style="margin-right: 16px;">快速切换模拟</label>\n            <aex-switch v-model="loading" />\n        </p>\n        <aex-skeleton style="width: 240px" :loading="loading" animated :throttle="500">\n            <template slot="template">\n                <aex-skeleton-item variant="image" style="width: 240px; height: 240px;" />\n                <div style="padding: 14px;">\n                    <aex-skeleton-item variant="h3" style="width: 50%;" />\n                    <div style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;">\n                        <aex-skeleton-item variant="text" style="margin-right: 16px;" />\n                        <aex-skeleton-item variant="text" style="width: 30%;" />\n                    </div>\n                </div>\n            </template>\n            <template>\n                <div style=\'width:100%\'>\n                    <aex-image style=\'width: 240px; height: 240px;\' src=\'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\' fit=\'cover\' />\n                    <div style="padding: 14px;">\n                        <aex-text title=\'h3\'>可爱的小狗</aex-text>\n                        <aex-text>可爱的小狗可爱的小狗可爱的小狗</aex-text>\n                    </div>\n                </div>\n            </template>\n        </aex-skeleton>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: false,\n                currentDate: \'2021-06-01\'\n            }\n        },\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("Skeleton Attributes")]),t._m(5),e("h3",[t._v("Skeleton Item Attributes")]),t._m(6),e("h3",[t._v("Skeleton Slots")]),t._m(7)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { Skeleton,SkeletonItem } from 'aex-ui';\nVue.use(Skeleton)\nVue.use(SkeletonItem) // 根据需要引入\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 "),e("code",[t._v("loading")]),t._v(" 的值来控制是否显示真实的 DOM。然后通过\n具名 Slot 来设置当 loading 结束之后需要展示的 UI。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 "),e("code",[t._v("count")]),t._v(" 这个属性就能控制渲染多少条假的数据在页面上")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"tip"},[e("p",[t._v("请注意, 请尽可能的将 "),e("code",[t._v("count")]),t._v(" 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长(相对的)。")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 "),e("code",[t._v("throttle")]),t._v(" 属性来避免这个问题。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("animated")]),e("td",[t._v("是否使用动画")]),e("td",[t._v("boolean")]),e("td",[t._v("true / false")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("count")]),e("td",[t._v("渲染多少个 template, 建议使用尽可能小的数字")]),e("td",[t._v("number")]),e("td",[t._v("integer")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("是否显示 skeleton 骨架屏")]),e("td",[t._v("boolean")]),e("td",[t._v("true / false")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("rows")]),e("td",[t._v("骨架屏段落数量")]),e("td",[t._v("number")]),e("td",[t._v("正整数")]),e("td",[t._v("4")])]),e("tr",[e("td",[t._v("throttle")]),e("td",[t._v("延迟占位 DOM 渲染的时间, 单位是毫秒")]),e("td",[t._v("number")]),e("td",[t._v("正整数")]),e("td",[t._v("0")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("variant")]),e("td",[t._v("当前显示的占位元素的样式")]),e("td",[t._v("Enum(string)")]),e("td",[t._v("p / text / h1 / h3 / text / caption / button / image / circle / rect")]),e("td",[t._v("text")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("description")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("\b用来展示真实 UI")])]),e("tr",[e("td",[t._v("template")]),e("td",[t._v("用来展示自定义占位符")])])])])}],!1,null,null,null);e.default=n.exports}}]);