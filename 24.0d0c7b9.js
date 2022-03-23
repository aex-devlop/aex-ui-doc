(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{295:function(n,e,a){"use strict";a.r(e);a=a(1),a=Object(a.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("国际化")]),e("p",[n._v("Aex UI 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置(目前只包含了中/英文两种)；\n下面介绍配合 "),e("a",{attrs:{href:"https://kazupon.github.io/vue-i18n/zh/installation.html"}},[n._v("vue-i18n")]),n._v(" 插件的使用方法：")]),e("h2",[n._v("安装插件")]),e("pre",[e("code",[n._v("yarn add vue-i18n\n")])]),e("h2",[n._v("添加 i8n-setup.js")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("//i18n-setup.js\nimport Vue from 'vue';\nimport Cookies from 'js-cookie';\nimport VueI18n from 'vue-i18n';\nimport zh from './aex_CH';\nimport en from './aex_EN';\nimport aexLocale from 'aex-ui/lib/locale'; // 引入 aex-ui locale\nimport aexLocaleEn from 'aex-ui/lib/locale/lang/en'; // 引入 aex-ui 英文包\nimport aexLocaleZh from 'aex-ui/lib/locale/lang/zh-CN'; // 引入 aex-ui 中文文包\n\nVue.use(VueI18n);\nconst SYS_LANG = (navigator.language || navigator.userLanguage).toLowerCase().split('-')[0]; // 浏览器默认语言\n\nconst AexuiMessage = {\n    zh: aexLocaleZh,\n    en: aexLocaleEn,\n};\n\n// 把aex-ui 多语言介入项目\nconst messages = {\n    zh: Object.assign({}, zh, aexLocaleZh),\n    en: Object.assign({}, en, aexLocaleEn),\n};\n\n// 实例化 i18n\nexport const i18n = new VueI18n({\n    locale: 'ch', // 设置默认语言环境\n    fallbackLocale: 'ch', // 回滚设置\n    messages // 设置语言环境包\n});\n\naexLocale.i18n((key, value) => i18n.t(key, value)); // 兼容 aex-ui i18n函数\n\nconst loadedLanguages = ['ch']; // 我们的预装默认语言\n\n// 改变语言环境\nfunction setI18nLanguage(lang) {\n    Cookies.set('AEX_language', lang, {\n        expires: 7,\n        path: '/'\n    }); // 添加到cookie\n    i18n.locale = lang; // 切换语言环境\n    document.querySelector('html').setAttribute('lang', lang); // html 加lang 备用\n    document.querySelector('body').setAttribute('id', lang); // 给body 加id 现在代码里有用到\n    return lang;\n}\n\n// 异步加载语言包\nexport function loadLanguageAsync(_lang) {\n    let LINK_LANG =\n        location.hash.indexOf('aex-lang') != -1 ?\n        location.hash\n        .split('?')[1]\n        .split('aex-lang')[1]\n        .split('=')[1]\n        .split('&')[0] :\n        '';\n    const COOKIES_LANG = !Cookies.get('AEX_language') || Cookies.get('AEX_language') == 'undefined' ? '' : Cookies.get('AEX_language')\n\n    // 语言环境优先级: 需要设置的 > url参数设置的 > Cookie保存的 > 浏览器默认的\n    const lang = _lang || LINK_LANG || COOKIES_LANG || SYS_LANG\n\n    // 如果语言相同\n    if (i18n.locale === lang) {\n        return Promise.resolve(setI18nLanguage(lang));\n    }\n\n    // 如果语言已经加载\n    if (loadedLanguages.includes(lang)) {\n        return Promise.resolve(setI18nLanguage(lang));\n    }\n\n    // 如果尚未加载语言\n    return import( /* webpackChunkName: \"lang-[request]\" */ `@/lang/${lang.toLocaleUpperCase()}.js`).then((messages) => {\n        i18n.setLocaleMessage(lang, Object.assign({}, messages.default, AexuiMessage[lang]));\n        loadedLanguages.push(lang);\n        return setI18nLanguage(lang);\n    });\n}\n")])]),e("h2",[n._v("项目入口文件 entry.js 设置")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport App from './App.vue';\nimport routes from './router';\nimport store from './store';\n\nimport {\n    i18n,\n    loadLanguageAsync\n} from '@/lang/i18n-setup.js'; // 引入 i18n-setup.js\nimport aexLocale from 'aex-ui/lib/locale'; // 引入 aex-ui locale\nimport aexLocaleEn from 'aex-ui/lib/locale/lang/en'; // 引入 aex-ui 英文包\nimport aexLocaleZh from 'aex-ui/lib/locale/lang/zh-CN'; // 引入 aex-ui 中文包\n\nVue.config.productionTip = false;\n\nloadLanguageAsync() // 切换默认语言设置(Cookie保存的 或者是 浏览器默认的)\n\nnew Vue({\n    el: '#app',\n    store,\n    router,\n    i18n, // 加入i18n到Vue 实例\n    render: h => h(App)\n})\n")])]),e("h3",[n._v(".vue 文件中使用")]),e("pre",[e("code",{staticClass:"language-html"},[n._v("<template>\n    <div class=\"about\">\n        <h1>This is an about page</h1>\n        \x3c!-- 项目中使用 方式一 （推荐），原来的中文还可以保留在代码中，方便以后查找--\x3e\n        <h2 v-t=\"'message.key'\">这里是原来的中文</h2>\n\n        \x3c!-- 项目中使用 方式二 --\x3e\n        \x3c!-- <h2>\\{\\{ $t('message.key') \\}\\}</h2> --\x3e\n\n        <div @click=\"onSwitchLang\">切换语言环境</div>\n    </div>\n</template>\n<script>\n    import {\n        loadLanguageAsync\n    } from '@/lang/i18n-setup.js'; // 引入 i18n-setup.js\n    export default {\n        name: 'Home',\n        methods: {\n            onSwitchLang() {\n                loadLanguageAsync('en') // 此方法切换语言\n            },\n        },\n    };\n<\/script>\n")])])])}],!1,null,null,null),e.default=a.exports}}]);