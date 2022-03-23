(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{166:function(n,e,a){"use strict";a.r(e);a=a(0),a=Object(a.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("国际化")]),e("p",[n._v("Aex UI 组件内部预设了 中(zh)/英文(en) 两种，默认使用中文，若希望使用其他语言，则需要进行多语言设置；"),e("br"),n._v("\n下面介绍配合 "),e("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/zh/installation.html"}},[n._v("vue-i18n")]),n._v(" 插件的使用方法：")]),e("h2",[n._v("安装插件")]),e("pre",[e("code",[n._v("yarn add vue-i18n\n")])]),e("h2",[n._v("项目添加 i8n-setup.js")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("//i18n-setup.js\nimport Vue from 'vue';\nimport Cookies from 'js-cookie';\nimport VueI18n from 'vue-i18n';\nimport en from './en';\nimport zh from './zh';\nimport aexLocale from 'aex-ui/lib/locale'; // 引入 aex-ui locale\nimport aexLocaleEn from 'aex-ui/lib/locale/lang/en'; // 引入 aex-ui 英文包\nimport aexLocaleZh from 'aex-ui/lib/locale/lang/zh-CN'; // 引入 aex-ui 中文文包\n\nVue.use(VueI18n); // 实例化\n\n// 浏览器默认语言\nconst SYS_LANG = (navigator.language || navigator.userLanguage).toLowerCase().split('-')[0];\n\n// Cookies 里保存的语言\nconst COOKIES_LANG = !Cookies.get('AEX_language') || Cookies.get('AEX_language') == 'undefined' ? '' : Cookies.get('AEX_language');\n\n// URL 里设置的语言,例如: www.aex.cash/page/xxx.html#/?lang=zh\nconst LINK_LANG =\n    location.hash.indexOf('aex-lang') != -1 ?\n    location.hash\n    .split('?')[1]\n    .split('aex-lang')[1]\n    .split('=')[1]\n    .split('&')[0] :\n    '';\n\n// 当前语言环境, 优先级:  url参数设置的 > Cookie保存的 > 浏览器默认的\n// 输出这个参数, 可以在项目entry 入口文件处获取当前语言环境, .vue 文件内部就不用这个了(用 this.$i18n.locale 来获取即可)\nexport const CURRENT_LANG = LINK_LANG || COOKIES_LANG || SYS_LANG;\n\n// 把aex-ui 多语言介入项目\nconst messages = {\n    zh: Object.assign({}, zh, aexLocaleZh),\n    en: Object.assign({}, en, aexLocaleEn)\n};\n\n// 实例化 i18n\nexport const i18n = new VueI18n({\n    locale: 'zh', // 设置默认语言环境\n    fallbackLocale: 'zh', // 回滚设置\n    messages // 设置语言环境包\n});\n\naexLocale.i18n((key, value) => i18n.t(key, value)); // 兼容 aex-ui i18n函数\n\nconst loadedLanguages = [SYS_LANG]; // 预装浏览器默认语言\n\n// 改变语言环境\nfunction setI18nLanguage(lang) {\n    Cookies.set('AEX_language', lang, {\n        expires: 7,\n        path: '/'\n    }); // 添加到cookie\n    i18n.locale = lang; // 切换语言环境\n    document.querySelector('html').setAttribute('lang', lang); // html 加lang 备用\n    document.querySelector('body').setAttribute('id', lang); // 给body 加id 现在代码里有用到\n    return lang;\n}\n\n// 异步加载语言包\nexport function loadLanguageAsync(_lang) {\n    // 语言环境优先级: 需要设置的 > url参数设置的 > Cookie保存的 > 浏览器默认的\n    const lang = _lang || CURRENT_LANG;\n\n    // 如果语言相同\n    if (i18n.locale === lang) {\n        return Promise.resolve(setI18nLanguage(lang));\n    }\n\n    // 如果语言已经加载\n    if (loadedLanguages.includes(lang)) {\n        return Promise.resolve(setI18nLanguage(lang));\n    }\n\n    // 如果尚未加载语言\n    return import( /* webpackChunkName: \"lang-[request]\" */ `@/lang/${lang.toLocaleLowerCase()}.js`).then((messages) => {\n        i18n.setLocaleMessage(\n            lang,\n            Object.assign({},\n                messages.default, {\n                    zh: aexLocaleZh,\n                    en: aexLocaleEn\n                } [lang]\n            )\n        );\n        loadedLanguages.push(lang);\n        return setI18nLanguage(lang);\n    });\n}\n\ni18n.loadLanguageAsync = loadLanguageAsync;\n")])]),e("h2",[n._v("项目入口文件 entry.js 设置")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport App from './App.vue';\nimport routes from './router';\nimport store from './store';\nVue.config.productionTip = false;\n\nimport {\n    i18n\n} from '@/lang/i18n-setup.js'; // <-----------------------------------引入 i18n-setup.js\nimport aexLocale from 'aex-ui/lib/locale'; // <-----------------------引入 aex-ui locale\nimport aexLocaleEn from 'aex-ui/lib/locale/lang/en'; // <-------------引入 aex-ui 英文包\nimport aexLocaleZh from 'aex-ui/lib/locale/lang/zh-CN'; // <----------引入 aex-ui 中文包\n\n// 如果中/英文是不同的页面,就在entry.js 里根据 i18n.locale 判断直接切换\n// if (i18n.locale == 'en') {\n// \twindow.location.href = '/page/seas_home.html';\n// }\n\ni18n.loadLanguageAsync() // <----------------------------------------初始化加载语言包并根据环境切换,\n\nnew Vue({\n    el: '#app',\n    store,\n    router,\n    i18n, // <-------------------------------------------------------加入i18n到Vue 实例\n    render: h => h(App)\n})\n")])]),e("h3",[n._v(".vue 文件中使用")]),e("pre",[e("code",{staticClass:"language-html"},[n._v("<template>\n    <div class=\"about\">\n        带参数示例:\n        message:{\n        en:'hello{0}{1}{3}'\n        zh:'你好{0}{1}{3}'\n        }\n        \x3c!-- 项目中使用 方式一 （推荐），原来的中文还可以保留在代码中，方便以后查找--\x3e\n        <h2 v-t=\"'message.key'\">指令方式</h2>\n        \x3c!-- 指令带参数的方式vscode 插件不会产生提示，可以使用下面$t()的方式处理 --\x3e\n        <h2 v-t=\"{path:message.key,agrs:['agr1','agr2','arg3']}\">指令方式带参数</h2>\n\n        \x3c!-- 项目中使用 方式二 --\x3e\n        <h2>\\{\\{ $t('message.key') \\}\\}</h2>\n        <h2>\\{\\{ $t('message.key',['agr1','agr2','arg3']) \\}\\}</h2>\n\n        <div @click=\"onSwitchLang\">切换语言环境</div>\n    </div>\n</template>\n<script>\n    export default {\n        name: 'Home',\n        methods: {\n            onSwitchLang() {\n                this.$i18n.loadLanguageAsync('en') // 此方法切换语言\n            },\n        },\n    };\n<\/script>\n")])])])}],!1,null,null,null),e.default=a.exports}}]);