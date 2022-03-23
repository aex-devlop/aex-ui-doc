(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{331:function(n,t,e){"use strict";e.r(t);e=e(1),e=Object(e.a)({},function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[n._v("其他")]),t("h3",[n._v("引入")]),t("pre",[t("code",[n._v("import { importCDN,getUrlParam } from 'aex-ui/src/utils/cdn'\n")])]),t("h3",[n._v("importCDN")]),t("div",{staticClass:"tip"},[t("p",[n._v("此方法会在 head 中插入一个 script 标签")])]),t("pre",[t("code",{staticClass:"language-js"},[n._v("/**\n * @description 获取cdn 链接\n * @param {string} CDNUrl cdn 链接\n * @param {string} name 文件声明的全局变量名\n * @return {promise} \n */\nimportCDN(CDNUrl, name)\n\n示例：\n\n// cnd 文件 https://aexphoto-1251755124.file.myqcloud.com/js/config/layout.js\nvar CND_HEADER_CONF = [1, 2, 3]\n\n// 引入\nimportCDN('https://aexphoto-1251755124.file.myqcloud.com/js/config/layout.js', 'CND_HEADER_CONF').then(res => {\n    console.log(res) // ---\x3e [1, 2, 3]\n})\n")])]),t("h3",[n._v("getUrlParam")]),t("pre",[t("code",{staticClass:"language-js"},[n._v("/**\n * @description 获取url里的参数\n * @param {string} key 参数名字\n * @return {string}\n * @example http://aex.uidoc.com?aex-lang=zh-CN --\x3e zh-CN\n */\ngetUrlParam(key)\n")])])])}],!1,null,null,null),t.default=e.exports}}]);