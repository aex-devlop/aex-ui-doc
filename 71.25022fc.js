(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{336:function(n,e,r){"use strict";r.r(e);r=r(0),r=Object(r.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("Number 相关")]),e("h3",[n._v("引入")]),e("pre",[e("code",[n._v("import { exponentToNumber, clearzero, zeroize, thousands } from 'aex-ui/src/utils/number'\n")])]),e("h3",[n._v("exponentToNumber")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("/**\n * @description 把有可能是科学技术法的数字转换为 数字字符串\n * @param {string | Number} number\n * @returns {string}\n * @example 9.2e-7 --\x3e 0.00000092\n */\nexponentToNumber(number)\n")])]),e("h3",[n._v("clearzero")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("/**\n * @description 去掉小数位多余的0\n * @param {string} number 要处理的数字字符串\n * @return {string}\n */\nclearzero(number)\n")])]),e("h3",[n._v("zeroize")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("/**\n * @description 小数位处理 少则补0多则截取, 包含了科学计数的处理\n * @param {string} number 要处理的数字字符串\n * @param {string} digits 要保留的位数\n * @param {boolean} isFill 是否要自动补0 默认true\n * @return {string}\n */\nzeroize(number, digits, isFill = true)\n")])]),e("h3",[n._v("thousands")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("/**\n * @description 把数字转换为千分位分割\n * @param {string | Number } num 要转换的数字或数字字符串\n * @param {string } [lang] 要根据语言区分 分隔符, 例如 vi-VN 转换后  1.222.33,05，默认null 直接从Cookie 里获取 AEX_language\n * @returns {string}\n * @example 1234567.89 --\x3e 1,234,567.89\n */\nthousands(number, lang)\n")])])])}],!1,null,null,null),e.default=r.exports}}]);