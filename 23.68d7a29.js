(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{281:function(t,e,n){"use strict";n.r(e);var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,i=arguments[e];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i={name:"component-doc",components:{"aex-demo0":i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{"overflow-x":"hidden"}},e._l(e.count,function(t){return n("aex-text",{staticClass:"infinite-list-item",attrs:{title:"h3"}},[e._v(e._s(t))])}),1)]],2)},staticRenderFns:[]},{data:function(){return{count:0}},methods:{load:function(){this.count+=2}}}),"aex-demo1":i({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",{staticClass:"infinite-list-wrapper",staticStyle:{overflow:"auto"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"disabled"}},e._l(e.count,function(t){return n("li",{staticClass:"list-item"},[e._v(e._s(t))])}),0),e._v(" "),e.loading?n("p",[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?n("p",[e._v("没有更多了")]):e._e()])]],2)},staticRenderFns:[]},{data:function(){return{count:10,loading:!1}},computed:{noMore:function(){return 20<=this.count},disabled:function(){return this.loading||this.noMore}},methods:{load:function(){var t=this;this.loading=!0,setTimeout(function(){t.count+=2,t.loading=!1},2e3)}}})}},n=n(2),i=Object(n.a)(i,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("InfiniteScroll 无限滚动")]),e("h3",[t._v("按需引入")]),t._m(0),e("p",[t._v("滚动至底部时，自动加载更多数据。"),e("br"),e("aex-text",{attrs:{type:"info"}},[t._v("(要给需要滚动的容器设置好 overflow, 和height，如果没有设置会一直向上寻找，直到 Document)")])],1),e("h3",[t._v("基础用法")]),t._m(1),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div class="infinite-list" v-infinite-scroll="load" style="overflow-x:hidden">\n        <aex-text title=\'h3\' v-for="i in count" class="infinite-list-item">{{ i }}</aex-text>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                count: 0\n            }\n        },\n        methods: {\n            load() {\n                this.count += 2\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("禁用自动加载")]),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div class="infinite-list-wrapper" style="overflow:auto">\n        <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">\n            <li v-for="i in count" class="list-item">{{ i }}</li>\n        </ul>\n        <p v-if="loading">加载中...</p>\n        <p v-if="noMore">没有更多了</p>\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                count: 10,\n                loading: false\n            }\n        },\n        computed: {\n            noMore() {\n                return this.count >= 20\n            },\n            disabled() {\n                return this.loading || this.noMore\n            }\n        },\n        methods: {\n            load() {\n                this.loading = true\n                setTimeout(() => {\n                    this.count += 2\n                    this.loading = false\n                }, 2000)\n            }\n        }\n    }\n<\/script>\n')])])])],2),e("h3",[t._v("参数")]),t._m(3)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",[t._v("import { InfiniteScroll } from 'aex-ui';\nVue.use(InfiniteScroll)\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("在要实现滚动加载的列表上上添加 "),e("code",[t._v("v-infinite-scroll")]),t._v(" ，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("组件提供 "),e("code",[t._v("infinite-scroll-disabled")]),t._v(" 属性禁止执行加载，一般用于后端数据没有时，设置为 "),e("code",[t._v("true")]),t._v(" 即可")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("infinite-scroll-disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("infinite-scroll-delay")]),e("td",[t._v("节流时延，单位为ms")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("200")])]),e("tr",[e("td",[t._v("infinite-scroll-distance")]),e("td",[t._v("触发加载的距离阈值，单位为px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("infinite-scroll-immediate")]),e("td",[t._v("是否立即执行加载方法，以防初始状态下内容无法撑满容器。")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])])])])}],!1,null,null,null);e.default=i.exports}}]);