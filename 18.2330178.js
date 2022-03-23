(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{266:function(n,e,t){"use strict";t.r(e);t=t(1),t=Object(t.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("国际化")]),e("p",[n._v("Aex UI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置(目前只包含了中/英文两种)；\n下面介绍配合 "),e("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/zh/installation.html"}},[n._v("vue-i18n")]),n._v(" 插件的使用方法：")]),e("h2",[n._v("安装插件")]),e("pre",[e("code",[n._v("yarn add vue-i18n\n")])]),e("h2",[n._v("main.js 设置")]),e("pre",[e("code",[n._v("import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport App from './App.vue';\nimport routes from './router';\nimport store from './store';\nimport VueI18n from 'vue-i18n'; // 引入插件\nimport { Button } from 'aex-ui';\nVue.config.productionTip = false;\nimport aexLocale from 'aex-ui/lib/locale'; // 引入 aex-ui locale\nimport aexLocaleEn from 'aex-ui/lib/locale/lang/en'; // 引入 aex-ui 英文包\nimport aexLocaleZh from 'aex-ui/lib/locale/lang/zh-CN'; // 引入 aex-ui 中文文包\n\nVue.use(VueI18n);\nVue.use(Button);\n\n// 把aex-ui 语言包放入对应的项目语言包(实际项目这里会是个单独的文件，然后通过import引入)\nconst messages = {\n    en: {\n        txt: 'hello',\n        ...aexLocaleEn,\n    },\n    zh: {\n        txt: '你好',\n        ...aexLocaleZh,\n    },\n};\n\n// 构造i18n 实例\nconst i18n = new VueI18n({\n    locale: 'zh', // 设置项目默认语言\n    messages, // 添加上面的语言包\n});\n\n// 兼容 aex-ui i18n函数\naexLocale.i18n((key, value) => i18n.t(key, value));\n\nnew Vue({\n    el: '#app',\n    store,\n    router,\n    i18n, // 加入i18n到Vue 实例\n    render: h => h(App)\n})\n")])]),e("h3",[n._v(".vue 文件中使用")]),e("pre",[e("code",[n._v("<template>\n    <div class=\"about\">\n        <h1>This is an about page</h1>\n        \x3c!-- 项目中使用 --\x3e\n        <h2>\\{{ $t('txt') }\\}</h2> \n\n        \x3c!-- 此处aex-ui 组件，在项目切换语言时会自动切换 --\x3e\n        <aex-button></aex-button>\n        <div @click=\"switchLang\">switchLang</div>\n    </div>\n</template>\n<script>\n    export default {\n        name: 'Home',\n        methods: {\n            switchLang() {\n                this.$i18n.locale = 'en'; // 此方法切换语言\n            },\n        },\n    };\n<\/script>\n")])])])}],!1,null,null,null),e.default=t.exports}}]);