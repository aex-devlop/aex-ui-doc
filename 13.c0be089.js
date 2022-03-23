(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{282:function(e,n,l){"use strict";l.r(n);l=l(2),l=Object(l.a)({},function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("section",{staticClass:"content aex-doc"},[n("h1",[e._v("Aex-UI")]),n("h2",[e._v("安装依赖")]),n("pre",[n("code",[e._v("\nyarn install\n")])]),n("div",{staticClass:"tip"},[n("p",[e._v('关于windows系统用户可能会出现的问题：由于gulp-less@5.0.0的版本需要python进行编译，可能在yarn install的时候提示没有python执行环境。在此你需要用"管理员权限"打开powershell，然后执行npm install windows-build-tools -g，会自动安装所需要的编译工具。安装完成后会自动重启电脑。然后就可以正常执行yarn install了。')])]),n("hr"),n("h2",[e._v("新建组件")]),n("pre",[n("code",[e._v("\nyarn new:comp [组件名称]\n例如：yarn new:comp button\n")])]),n("blockquote",[n("p",[e._v("自动生成组件模版包含以下文件：")])]),n("ul",[n("li",[e._v("packages/组件模版")]),n("li",[e._v("packages/theme/src/组件样式模版")]),n("li",[e._v("examples/docs/组件文档模版")]),n("li",[e._v("把组件样式模版导入 packages/theme/src/index.less")]),n("li",[e._v("把组件路径导入/components.json")])]),n("hr"),n("h2",[e._v("开发 （localhost:8085）")]),n("h3",[e._v("组件开发模式")]),n("pre",[n("code",[e._v("yarn dev:play\n")])]),n("ul",[n("li",[e._v("入口文件：/examples/play/index.js （已全局引入组件）")]),n("li",[e._v("调试目录：/examples/play/App.vue")])]),n("h3",[e._v("文档开发模式")]),n("pre",[n("code",[e._v("yarn dev\n")])]),n("ul",[n("li",[e._v("入口文件：/examples/main.js （已全局引入组件）")]),n("li",[e._v("路由文件：/examples/route.config.js")]),n("li",[e._v("文档目录：/examples/docs/")])]),n("hr"),n("h2",[e._v("打包")]),n("h3",[e._v("打包组件库")]),n("pre",[n("code",[e._v("yarn build:lib\n\n输出目录: /lib\n")])]),n("h3",[e._v("打包文档网页")]),n("pre",[n("code",[e._v("yarn build:doc\n\n输出目录: /examples/aex-ui/\n")])])])}],!1,null,null,null),n.default=l.exports}}]);