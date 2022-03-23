(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{180:function(n,e,t){"use strict";t.r(e);var o=[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("前端数据共享的那些事")]),e("h2",[n._v("发展历程")]),e("h3",[n._v("1，不辞辛苦的上下级组件间传递数据")]),e("pre",[e("code",[n._v("\x3c!-- parent.vue --\x3e\n<template>\n    <div>\n        \x3c!-- 利用 js json 对象的引用方式去传递对象，然后所有子组件一起用 --\x3e\n        <child :data='\\{ a: 1 \\}'></child>\n    </div>\n</template>\n\n\x3c!-- child.vue --\x3e\n<template>\n    <div>\n        \x3c!-- 子组件可以避开 vue.js 的警告对数据进行修改 --\x3e\n        \\{\\{ data.a \\}\\}\n    </div>\n</template>\n")])]),e("p",[n._v("评价：开发一时爽，接手火葬场！当共享对象被足够多的组件引用后，调试和定位问题将难以进行。比如：data.a 到底是被哪个组件修改的？又被改了多少次？")]),e("h3",[n._v("2，机智一点利用外部 js 文件共享数据")]),e("pre",[e("code",[n._v("\x3c!-- store.js --\x3e\nexport default {\n    a: 1\n}\n\n\x3c!-- anyone.vue --\x3e\n<template>\n    <div>\n        \x3c!-- common.a 等于 1 --\x3e\n        \\{\\{ common.a \\}\\}\n    </div>\n</template>\n\n<script>\nimport data from './store.js'\nexport default {\n    data() {\n        return {\n            common: data\n        }\n    }\n}\n<\/script>\n")])]),e("p",[n._v("评价：比 1 好一点，数据不再通过子组件传递。但问题依旧还在。")]),e("h3",[n._v("3，符合现代工程化的共享数据模式。即：flux 模型（本文将用 vuex 实现）")]),e("p",[n._v("先简单介绍一下什么是 flux 模型？")]),e("p",[e("strong",[n._v("flux")]),n._v(" 是一个“单向数据流”的思想模型，为的就是解决 1、2 两点的数据流程不清晰的问题。")]),e("p",[e("img",{attrs:{src:t(223),alt:""}})]),e("p",[n._v("这是最简单的实现方式，其中：")]),e("p",[n._v("View：代表视图")]),e("p",[n._v("Actions：代表操作数据的动作")]),e("p",[n._v("State：代表状态。即：共享的数据")]),e("p",[n._v("如图所示，这是一个单向流程的过程。不允许反悔往回走")]),e("blockquote",[e("p",[n._v("详情链接：http://www.ruanyifeng.com/blog/2016/01/flux.html")])]),e("p",[n._v("优点：可监控、可调试（基于 vue-devtools 上）、可实现良好的项目架构（体现在使用 vuex 上）")]),e("p",[n._v("对应的缺点：心智负担大（既要学习如何使用、还要考虑该如何配置、在项目工期赶的情况下显得回报率低，这就是为什么很多人不爱用 vuex 的原因）")]),e("h2",[n._v("技巧")]),e("h3",[n._v("1，modules （模块化）")]),e("p",[n._v("原先的合并 common-store 的方式")]),e("pre",[e("code",[n._v('// 粗暴式合并\nimport Vue from "vue";\nimport Vuex from "vuex";\nimport commonStore from "@/utils/common-store";\n\nVue.use(Vuex);\n\nconst store = {\n  state: {},\n  mutations: {}\n};\n\nfor (let key in commonStore) {\n  store[key] = {\n    ...store[key],\n    ...commonStore[key]\n  };\n}\n\nexport default new Vuex.Store(store);\n')])]),e("p",[n._v("现在可以通过添加 namespaced 属性并设置为 true ，就可以直接通过 this.$store.state.moduleName.xxx 引用数据")]),e("p",[n._v("具体例子：")]),e("pre",[e("code",[n._v("\x3c!-- user.js --\x3e\nexport default {\n  // 重点\n  namespaced: true,\n  state: {\n    userName: \"JJ\"\n  }\n};\n\n\x3c!-- index.js --\x3e\nimport Vue from 'vue'\nimport Vuex from 'vuex'\nimport user from './user'\n\nVue.use(Vuex)\n\nexport default new Vuex.Store({\n  state: {\n    a: 1\n  },\n  mutations: {\n  },\n  actions: {\n  },\n  modules: {\n    user\n  }\n})\n")])]),e("p",[n._v("总结：其实这种重复的配置可以用 vscode 自带的代码补全功能将 index.js 这种代码保存，在需要的时候直接一键导入即可。总之：don't repeat your self !")]),e("h3",[n._v("2，数据模型的设计")]),e("p",[n._v("适当的分类、尽可能的少扁平化")]),e("p",[n._v("如表单：（visibility 可视、loading 加载等等，可以提高代码的可读性）")]),e("pre",[e("code",[n._v("\x3c!-- 修改前 --\x3e\n{\n    a: 1,\n    b: 2,\n    c: 3\n}\n\n\x3c!-- 修改后 --\x3e\n{\n    form: {\n        a: 1,\n        b: 2,\n        c: 3\n    }\n}\n")])]),e("p",[n._v("这么做的好处是，你处理异步提交或批量数据更新就不需要逐个引用，直接引用对象即可（data也适用）")]),e("p",[n._v("如：")]),e("pre",[e("code",[n._v("axios.post('url', $store.state.form)\n\n\x3c!-- 而非这样（效果立竿见影） --\x3e\naxios.post('url', {\n    a: $store.state.a,\n    b: $store.state.b,\n    c: $store.state.c\n})\n")])]),e("p",[n._v("如无必要，别加新的 key 。尽量提早准备好（你的接手同事可没你清楚什么时候会多出一个 key 值哦！）")]),e("p",[n._v("如：")]),e("pre",[e("code",[n._v("\x3c!-- 原先默认的数据 --\x3e\n{\n    a: 1\n}\n\n\x3c!-- 经过一些业务代码后而添加的新数据 --\x3e\n{\n    a: 1,\n    b: 2\n}\n")])]),e("h3",[n._v("3，重置模型")]),e("p",[n._v("为什么要配一个初始化的方法？")]),e("p",[n._v("例如：登录后的用户、购物车 等类似较为庞大的数据，一旦用户推出登录了，该怎么快速且高效的重置这些信息？")]),e("p",[n._v("直接上答案：")]),e("pre",[e("code",[n._v('\x3c!-- 利用返回字面量对象的方式快速生成一个全新对象 --\x3e\nfunction defaultState() {\n  return {\n    userName: "",\n    userId: "",\n    dealerId:"",\n    dealerName:"",\n    accessToken: "",\n    isShowSignInOrSignUpDialog: false,\n    dealerId: "",\n    role: ""\n  };\n}\n\nconst state = defaultState();\n\nconst mutations = {\n  resetState(state) {\n    Object.assign(state, defaultState());\n  }\n};\n\nconst actions = {};\n\nexport default {\n  namespaced: true,\n  state,\n  mutations,\n  actions\n};\n')])]),e("h3",[n._v("4，持久化数据")]),e("p",[n._v("store 数据一旦遇到页面刷新就会被清空，这种情况下，建议用 "),e("strong",[n._v("vuex-persistedstate")]),n._v(" 解决。（可以选择保存到 local、sessionStorage、cookies 上）")]),e("p",[n._v("原理：利用 vuex 的 subscribe 去监听一切的数据变化。并将数据保存在本地上")]),e("blockquote",[e("p",[n._v("subscribe api 说明：https://vuex.vuejs.org/zh/api/#subscribe")])]),e("blockquote",[e("p",[n._v("文档： https://github.com/robinvdvleuten/vuex-persistedstate")])]),e("h2",[n._v("实践")]),e("h3",[n._v("1，vue-devTools 的 Time Traveling 查询数据修改情况")]),e("p",[n._v("如图所示，这里可以看到state的修改情况，甚至可以回到某一个特定的状态上进行调试")]),e("p",[e("img",{attrs:{src:t(224),alt:""}})]),e("p",[n._v("当然，也可以修改 store 和 data 里的数据。")]),e("p",[n._v("题外话：actions 和 mutations 的区别？")]),e("p",[n._v("一句话总结：在 Vuex 中，mutation 都是同步事务，而 actions 是用于处理异步任务的并最后通过 mutations 去修改状态。其实 mutations 中使用异步方法也可以，但就是 vue-devTools 无法监听到其中的数据变化。")]),e("h3",[n._v("2，关于减少共享数据的引用长度（即：何时使用 mapXXX 方法）")]),e("p",[n._v("常用的 store 属性 我个人建议是挂载到 vue 实例上，其次再用 mapState 做扩展 到 computed 上（讲真，这真的很麻烦，我也没这个耐心去做）")]),e("p",[n._v("一句话：嫌烦要经常用 . 去引入数据就用 mapXXX ，否则直接引用吧。")])])}],s=t(0),o=Object(s.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},o,!1,null,null,null);e.default=o.exports},223:function(n,e,t){n.exports=t.p+"static/flow.983ea11.png"},224:function(n,e,t){n.exports=t.p+"static/time-traveling.cd0d95b.gif"}}]);