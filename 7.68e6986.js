(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{264:function(o,t,r){"use strict";r.r(t);var a=r(320),e=r.n(a),a={name:"color",data:function(){return{primary:{"@--color-primary-dark-2":["#2A62CE","#FFF"],"@--color-primary-dark-1":["#306FE9","#FFF"],"@--color-primary":["#3378FF","#FFF"],"@--color-primary-light-1":["#99BBFF","#FFF"],"@--color-primary-light-2":["#EAF1FF","#697384"],"@--color-primary-light-3":["#F3F7FF","#697384"],"@--color-primary-light-4":["#FAFBFD","#697384"]},gray:{"@--color-gray-dark-2":["#0C1627","#FFF"],"@--color-gray-dark-1":["#111D30","#FFF"],"@--color-gray":["#3E495C","#FFF"],"@--color-gray-light-1":["#697384","#FFF"],"@--color-gray-light-2":["#99A1B1","#FFF"],"@--color-gray-light-3":["#C7CBD5","#3E495C"],"@--color-gray-light-4":["#DBDEE6","#3E495C"],"@--color-gray-light-5":["#ECEDF0","#3E495C"],"@--color-gray-light-6":["#F6F7F9","#3E495C"],"@--color-white":["#FFFFFF","#697384"]},success:{"@--color-success":["#3AB293","#FFF"],"@--color-success-light-1":["#B2E8DD","#3AB293"],"@--color-success-light-2":["#EBF7F4","#3AB293"]},info:{"@--color-info":["#3378FF","#FFF"],"@--color-info-light-1":["#C1D6FF","#3378FF"],"@--color-info-light-2":["#EAF1FF","#3378FF"]},warning:{"@--color-warning":["#FA6400","#FFF"],"@--color-warning-light-1":["#FDD0B2","#FA6400"],"@--color-warning-light-2":["#FEEFE5","#FA6400"]},danger:{"@--color-danger":["#E5575A","#FFF"],"@--color-danger-light-1":["#F7CCCD","#E5575A"],"@--color-danger-light-2":["#FCEEEE","#E5575A"]}}},methods:{_onCopy:function(o){e()(o),this.$message.success("已复制到剪贴板！")}}},r=(r(328),r(1)),a=Object(r.a)(a,function(){var r=this,o=r.$createElement,a=r._self._c||o;return a("div",{attrs:{id:"color"}},[a("h2",[r._v("Color 颜色/文字/阴影")]),a("aex-text",[r._v("整理了常用的颜色和阴影变量，使用时可以在全局引入UI变量,之后直接点击即可复制到剪贴版使用即可")]),a("pre",[r._v("    引入路径：@import 'aex-ui/packages/theme/src/common/var.less'\n    ")]),a("h3",[r._v("主色调/品牌色")]),a("div",{staticClass:"color-group"},r._l(r.primary,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("h3",[r._v("灰色系")]),a("div",{staticClass:"color-group"},r._l(r.gray,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("h3",[r._v("辅助色")]),a("div",{staticClass:"color-group"},r._l(r.success,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("div",{staticClass:"color-group"},r._l(r.info,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("div",{staticClass:"color-group"},r._l(r.warning,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("div",{staticClass:"color-group"},r._l(r.danger,function(o,t){return a("div",{key:t,staticClass:"color-item",style:{background:o[0],color:o[1]},on:{click:function(o){r._onCopy(t)}}},[a("div",[r._v(r._s(o[0]))]),a("div",[r._v(r._s(t))])])}),0),a("h3",[r._v("阴影 Box-shadow")]),a("div",{staticClass:"color-group"},[a("div",{staticClass:"shadow-item shadow1",on:{click:function(o){r._onCopy("@--box-shadow-1")}}},[a("b",[r._v("@--box-shadow-1")]),a("i",[r._v(" 0 1px 6px rgba(@--color-gray-dark-1, 10%)")]),a("span",[r._v("S1基础投影，应用于默认状态的卡片、导航栏、组件里局部投影等。")])]),a("div",{staticClass:"shadow-item shadow2",on:{click:function(o){r._onCopy("@--box-shadow-2")}}},[a("b",[r._v("@--box-shadow-2")]),a("i",[r._v("0 4px 12px rgba(@--color-gray-dark-1,10%)")]),a("span",[r._v("S2是升起投影，应用于悬停状态的卡片等，是S1的激活态。")])]),a("div",{staticClass:"shadow-item shadow3",on:{click:function(o){r._onCopy("@--box-shadow-3")}}},[a("b",[r._v("@--box-shadow-3")]),a("i",[r._v("0 6px 18px rgba(@--color-gray-dark-1,12%)")]),a("span",[r._v("S3是覆盖投影，应用于信息提示等投影。")])]),a("div",{staticClass:"shadow-item shadow4",on:{click:function(o){r._onCopy("@--box-shadow-4")}}},[a("b",[r._v("@--box-shadow-4")]),a("i",[r._v("0 10px 32px rgba(@--color-gray-dark-1,24%)")]),a("span",[r._v("S4是弹出投影，应用于模态弹窗投影。")])])])],1)},[],!1,null,null,null);t.default=a.exports},320:function(o,t,r){"use strict";var u=r(321),p={"text/plain":"Text","text/html":"Url",default:"Text"};o.exports=function(r,a){var t,o,e,c,n=!1,i=(a=a||{}).debug||!1;try{var l=u(),s=document.createRange(),d=document.getSelection();if((o=document.createElement("span")).textContent=r,o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(o){var t;o.stopPropagation(),a.format&&(o.preventDefault(),void 0===o.clipboardData?(i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData(),t=p[a.format]||p.default,window.clipboardData.setData(t,r)):(o.clipboardData.clearData(),o.clipboardData.setData(a.format,r))),a.onCopy&&(o.preventDefault(),a.onCopy(o.clipboardData))}),document.body.appendChild(o),s.selectNodeContents(o),d.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");n=!0}catch(o){i&&console.error("unable to copy using execCommand: ",o),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",r),a.onCopy&&a.onCopy(window.clipboardData),n=!0}catch(o){i&&console.error("unable to copy using clipboardData: ",o),i&&console.error("falling back to prompt"),e="message"in a?a.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",t=e.replace(/#{\s*key\s*}/g,c),window.prompt(t,r)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(s):d.removeAllRanges()),o&&document.body.removeChild(o),l()}return n}},321:function(o,t){o.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var o=document.activeElement,r=[],a=0;a<t.rangeCount;a++)r.push(t.getRangeAt(a));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||r.forEach(function(o){t.addRange(o)}),o&&o.focus()}}},323:function(o,t,r){},328:function(o,t,r){"use strict";r(323)}}]);