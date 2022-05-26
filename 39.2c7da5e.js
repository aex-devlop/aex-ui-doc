(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{322:function(t,n,e){"use strict";e.r(n);var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e,i=arguments[n];for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}return t},i={name:"component-doc",components:{"aex-demo0":i({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"infinite-list"}},[e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:n.load,expression:"load"}]},n._l(n.count,function(t){return e("aex-text",{staticClass:"infinite-list-item",attrs:{title:"h3"}},[n._v(n._s(t))])}),1)])]],2)},staticRenderFns:[]},{data:function(){return{count:10}},methods:{load:function(){this.count+=2}}}),"aex-demo1":i({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[[e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"infinite-list-wrapper"}},[e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:n.load,expression:"load"}],staticClass:"list",attrs:{"infinite-scroll-disabled":n.disabled}},n._l(n.count,function(t){return e("li",{staticClass:"list-item"},[n._v(n._s(t))])}),0),n._v(" "),n.loading?e("p",[n._v("加载中...")]):n._e(),n._v(" "),n.noMore?e("p",[n._v("没有更多了")]):n._e()])]],2)},staticRenderFns:[]},{data:function(){return{count:10,loading:!1}},computed:{noMore:function(){return 20<=this.count},disabled:function(){return this.loading||this.noMore}},methods:{load:function(){var t=this;this.loading=!0,setTimeout(function(){t.count+=2,t.loading=!1},2e3)}}})}},e=e(1),i=Object(e.a)(i,function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("section",{staticClass:"content aex-doc"},[n("h1",[t._v("InfiniteScroll 无限滚动")]),n("h3",[t._v("按需引入")]),t._m(0),n("p",[t._v("滚动至底部时，自动加载更多数据。"),n("br"),n("aex-text",{attrs:{type:"info"}},[t._v("(要给需要滚动的容器设置好 overflow, 和height，如果没有设置会一直向上寻找，直到 Document)")])],1),n("h3",[t._v("基础用法")]),t._m(1),n("demo-block",[n("template",{slot:"source"},[n("aex-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-scrollbar tag="div" wrap-class=\'infinite-list\'>\n        <div v-infinite-scroll="load">\n            <aex-text title=\'h3\' v-for="i in count" class="infinite-list-item">{{ i }}</aex-text>\n        </div>\n    </aex-scrollbar>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                count: 10\n            }\n        },\n        methods: {\n            load() {\n                this.count += 2\n            }\n        }\n    }\n<\/script>\n<style lang=\'less\'>\n    .infinite-list {\n        height: 300px;\n        overflow-x: hidden;\n\n        .infinite-list-item {\n            height: 50px;\n            line-height: 50px;\n            text-align: center;\n            background: @--color-primary-light-2;\n            color: @--color-primary-dark-1;\n\n            &+.infinite-list-item {\n                margin-top: 10px;\n            }\n        }\n    }\n</style>\n')])])])],2),n("h3",[t._v("禁用自动加载")]),t._m(2),n("demo-block",[n("template",{slot:"source"},[n("aex-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-scrollbar tag="div" wrap-class=\'infinite-list-wrapper\'>\n        <ul class="list" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">\n            <li v-for="i in count" class="list-item">{{ i }}</li>\n        </ul>\n        <p v-if="loading">加载中...</p>\n        <p v-if="noMore">没有更多了</p>\n    </aex-scrollbar>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                count: 10,\n                loading: false\n            }\n        },\n        computed: {\n            noMore() {\n                return this.count >= 20\n            },\n            disabled() {\n                return this.loading || this.noMore\n            }\n        },\n        methods: {\n            load() {\n                this.loading = true\n                setTimeout(() => {\n                    this.count += 2\n                    this.loading = false\n                }, 2000)\n            }\n        }\n    }\n<\/script>\n<style>\n    .infinite-list-wrapper {\n        height: 300px;\n        text-align: center;\n\n        .list {\n            padding: 0;\n            margin: 0;\n            list-style: none;\n        }\n\n        .list-item {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            height: 50px;\n            background: @--color-gray-light-6;\n            color: @--color-gray-light-1;\n\n            &+.list-item {\n                margin-top: 10px;\n            }\n        }\n    }\n</style>\n')])])])],2),n("h3",[t._v("参数")]),t._m(3)],1)},[function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("pre",[n("code",[t._v("import { InfiniteScroll } from 'aex-ui';\nVue.use(InfiniteScroll)\n")])])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[t._v("在要实现滚动加载的列表上上添加 "),n("code",[t._v("v-infinite-scroll")]),t._v(" ，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[t._v("组件提供 "),n("code",[t._v("infinite-scroll-disabled")]),t._v(" 属性禁止执行加载，一般用于后端数据没有时，设置为 "),n("code",[t._v("true")]),t._v(" 即可")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("infinite-scroll-disabled")]),n("td",[t._v("是否禁用")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("infinite-scroll-delay")]),n("td",[t._v("节流时延，单位为ms")]),n("td",[t._v("number")]),n("td",[t._v("-")]),n("td",[t._v("200")])]),n("tr",[n("td",[t._v("infinite-scroll-distance")]),n("td",[t._v("触发加载的距离阈值，单位为px")]),n("td",[t._v("number")]),n("td",[t._v("-")]),n("td",[t._v("0")])]),n("tr",[n("td",[t._v("infinite-scroll-immediate")]),n("td",[t._v("是否立即执行加载方法，以防初始状态下内容无法撑满容器。")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])])])])}],!1,null,null,null);n.default=i.exports}}]);