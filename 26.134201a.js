(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{307:function(e,n,t){"use strict";t.r(n);t=t(1),t=Object(t.a)({},function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("section",{staticClass:"content aex-doc"},[n("h1",[e._v("快速上手")]),n("h2",[e._v("安装依赖")]),n("pre",[n("code",[e._v("yarn add git+ssh://git@192.168.1.6:10022/AEX_WEB/aex-ui.git\n或者\nyarn add git+http://git@192.168.1.6:10022/AEX_WEB/aex-ui.git\n\n")])]),n("p",[e._v("默认安装的是 master 分支, 也可以安装其他指定的分支或指定tag:")]),n("pre",[n("code",[e._v("// 安装tag为v0.1.0: \nyarn add git+ssh://git@192.168.1.6:10022/AEX_WEB/aex-ui.git#v0.1.0   \n\n// 安装dev分支:\nyarn add git+ssh://git@192.168.1.6:10022/AEX_WEB/aex-ui.git#dev\n")])]),n("h2",[e._v("本地安装")]),n("p",[e._v("将代码clone 到本地, 然后修改package.json，然后 yarn 安装即可:")]),n("pre",[n("code",[e._v('  "dependencies": {\n    "aex-ui": "file:./aex-ui", 添加此行，file: 换成你本地的路径\n    ...\n  },\n')])]),n("h2",[e._v("引入 Aex UI")]),n("h3",[e._v("完整引入")]),n("p",[e._v("在 main.js 中写入以下内容")]),n("pre",[n("code",[e._v("import Vue from 'vue';\nimport AexUI from 'aex-ui';\nimport 'aex-ui/lib/theme/index.css';\nimport App from './App.vue';\n\nVue.use(AexUI);\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n")])]),n("h3",[e._v("按需引入(推荐)")]),n("p",[e._v("借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的")]),n("ol",[n("li",[e._v("安装 babel-plugin-component")])]),n("pre",[n("code",[e._v("yarn add babel-plugin-component -D\n")])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("将 .babelrc 修改为：")])]),n("pre",[n("code",[e._v('{\n  "presets": [["es2015", { "modules": false }]],\n  "plugins": [\n    [\n      "component",\n      {\n        "libraryName": "aex-ui",\n        "styleLibraryName": "theme"\n      }\n    ]\n  ]\n}\n')])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("在 main.js 中引入所需组件")])]),n("pre",[n("code",[e._v("import Vue from 'vue';\nimport { Button } from 'aex-ui';\nimport App from './App.vue';\n\nVue.use(Button)\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n});\n")])]),n("h3",[e._v("使用")]),n("p",[e._v("引入之后就可以在.vue 文件中使用:")]),n("pre",[n("code",[e._v('<template>\n    <div id="app">\n        <aex-button></aex-button>\n    </div>\n</template>\n')])])])}],!1,null,null,null),n.default=t.exports}}]);