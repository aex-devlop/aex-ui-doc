(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{338:function(n,r,t){"use strict";t.r(r);t=t(0),t=Object(t.a)({},function(){var n=this,r=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,r=n.$createElement,r=n._self._c||r;return r("section",{staticClass:"content aex-doc"},[r("h1",[n._v("其他")]),r("h3",[n._v("引入")]),r("pre",[r("code",[n._v("import { importCDN } from 'aex-ui/src/utils/cdn'\nimport { getUrlParam } from 'aex-ui/src/utils/url'\nimport { randomString } from 'aex-ui/src/utils/util'\n")])]),r("h3",[n._v("importCDN")]),r("div",{staticClass:"tip"},[r("p",[n._v("此方法会在 head 中插入一个 script 标签")])]),r("pre",[r("code",{staticClass:"language-js"},[n._v("/**\n * @description 获取cdn 链接\n * @param {string} CDNUrl cdn 链接\n * @param {string?} name 文件声明的全局变量名,如果没有 name,那就直接添加script 标签完事\n * @return {promise} \n */\nimportCDN(CDNUrl, name)\n\n示例：\n\n// cnd 文件 https://cdn.aex.news/js/config/layout.js\nvar CND_HEADER_CONF = [1, 2, 3]\n\n// 引入\nimportCDN('https://cdn.aex.news/js/config/layout.js', 'CND_HEADER_CONF').then(res => {\n    console.log(res) // ---\x3e [1, 2, 3]\n})\n")])]),r("h3",[n._v("getUrlParam")]),r("pre",[r("code",{staticClass:"language-js"},[n._v("/**\n * @description 获取url里的参数\n * @param {string} key 参数名字\n * @return {string}\n * @example http://aex.uidoc.com?aex-lang=zh-CN --\x3e zh-CN\n */\ngetUrlParam(key)\n")])]),r("h3",[n._v("randomString")]),r("pre",[r("code",{staticClass:"language-js"},[n._v("/**\n * @description 生成随机字符串\n * @param {string} length 生成的字符串长度\n * @param {string} chars 字符串范围, 默认：0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\n * @return {string} \n */\nrandomString(length, chars)\n")])])])}],!1,null,null,null),r.default=t.exports}}]);