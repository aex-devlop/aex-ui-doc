(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{222:function(e,t,a){"use strict";a.r(t);var n=a(253),o=a.n(n),n={name:"color",methods:{_onCopy:function(e){o()(e),this.$message.success("已复制到剪贴板！")}}},a=(a(258),a(1)),n=Object(a.a)(n,function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"icon"}},[n("h2",[a._v("Icon 图标")]),n("aex-text",[a._v("提供了一套常用的图标集合。")]),n("h3",[a._v("使用方法")]),n("aex-text",[a._v("通过设置类名为 aex-icon-iconName 来使用，例如：")]),n("pre",[a._v(' <i class="aex-icon-edit"></i> ')]),n("aex-text",[a._v("或者通过设置 name 属性 来使用即可。例如：")]),n("pre",[a._v(' <aex-icon name="edit"></aex-icon> ')]),n("h3",[a._v("图标集合")]),n("aex-row",a._l(a.$icon,function(t){return n("aex-col",{key:t,attrs:{span:4}},[n("div",{staticClass:"icon-item",on:{click:function(e){a._onCopy("aex-icon-"+t)}}},[n("i",{class:"aex-icon-"+t}),n("span",{staticClass:"icon-name"},[a._v(a._s("aex-icon-"+t))])])])}),1)],1)},[],!1,null,null,null);t.default=n.exports},253:function(e,t,a){"use strict";var p=a(254),d={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(a,n){var t,e,o,c,r=!1,s=(n=n||{}).debug||!1;try{var i=p(),l=document.createRange(),u=document.getSelection();if((e=document.createElement("span")).textContent=a,e.style.all="unset",e.style.position="fixed",e.style.top=0,e.style.clip="rect(0, 0, 0, 0)",e.style.whiteSpace="pre",e.style.webkitUserSelect="text",e.style.MozUserSelect="text",e.style.msUserSelect="text",e.style.userSelect="text",e.addEventListener("copy",function(e){var t;e.stopPropagation(),n.format&&(e.preventDefault(),void 0===e.clipboardData?(s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData(),t=d[n.format]||d.default,window.clipboardData.setData(t,a)):(e.clipboardData.clearData(),e.clipboardData.setData(n.format,a))),n.onCopy&&(e.preventDefault(),n.onCopy(e.clipboardData))}),document.body.appendChild(e),l.selectNodeContents(e),u.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");r=!0}catch(e){s&&console.error("unable to copy using execCommand: ",e),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",a),n.onCopy&&n.onCopy(window.clipboardData),r=!0}catch(e){s&&console.error("unable to copy using clipboardData: ",e),s&&console.error("falling back to prompt"),o="message"in n?n.message:"Copy to clipboard: #{key}, Enter",c=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",t=o.replace(/#{\s*key\s*}/g,c),window.prompt(t,a)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),e&&document.body.removeChild(e),i()}return r}},254:function(e,t){e.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],n=0;n<t.rangeCount;n++)a.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||a.forEach(function(e){t.addRange(e)}),e&&e.focus()}}},256:function(e,t,a){},258:function(e,t,a){"use strict";a(256)}}]);