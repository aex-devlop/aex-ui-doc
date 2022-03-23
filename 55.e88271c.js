(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{340:function(n,e,s){"use strict";s.r(e);s=s(0),s=Object(s.a)({},function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,e=n.$createElement,e=n._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[n._v("前端开发文档")]),e("h3",[n._v("技术栈")]),e("ul",[e("li",[n._v("打包工具: webpack5")]),e("li",[n._v("前端框架: vue2, vue-router，vuex")]),e("li",[n._v("样式预编译: Less")]),e("li",[n._v("UI 库:\n"),e("ul",[e("li",[n._v("PC端: aex-ui (自建),")]),e("li",[n._v("移动端: vant")])])]),e("li",[n._v("网络请求: axios")]),e("li",[n._v("国际化: vue-i18n")]),e("li",[n._v("基础缓存: vuex-persistedstate")]),e("li",[n._v("日期处理: dayjs")]),e("li",[n._v("常用工具: lodash")]),e("li",[n._v("图表库: echarts")]),e("li",[n._v("轮播图: swiper")]),e("li",[n._v("截图工具: html2canvas")]),e("li",[n._v("模拟数据: mockjs")]),e("li",[n._v("CDN服务: 腾讯云")])]),e("h3",[n._v("静态资源服务")]),e("p",[n._v("webpack 生产环境打包时，静态资源路径要替换地址为: https://aex1.yxds.net.cn")]),e("h3",[n._v("目录结构 (h5相同)")]),e("pre",[e("code",{staticClass:"language-js"},[n._v("bitcc_web\n|--build -----------------------------------------\x3e webpack 配置\n\n    |--lang --------------------------------------\x3e 多语言脚本，用于生成上传后台的多语言格式\n    |--pagesConfig -------------------------------\x3e 入口文件配置\n        |--dev.js --------------------------------\x3e 开发环境\n        |--prod.js -------------------------------\x3e 生产环境\n    |--uitls -------------------------------------\x3e 配置工具函数\n    |--config.js ---------------------------------\x3e webpack 配置文件\n    |--proxy.config.js ---------------------------\x3e proxy配置(开发用)\n    |--webpack.common.js -------------------------\x3e webpack基础配置\n    |--webpack.dev.js ----------------------------\x3e webpack开发环境配置\n    |--webpack.prod.js ---------------------------\x3e webpack生产环境配置\n\n|--mock ------------------------------------------\x3e mock 数据配置(开发用)\n|--page ------------------------------------------\x3e 打包输出路径(根据项目配置)\n|--public\n|--src\n\n    |--api ---------------------------------------\x3e 后端api (按页面分类)\n    |--components --------------------------------\x3e 业务组件\n    |--img ---------------------------------------\x3e 公用图片(后面逐步清理，并放至CDN)\n    |--lang --------------------------------------\x3e 多语言相关\n        |--locale --------------------------------\x3e 语言包\n        |--i18n-setup.js -------------------------\x3e 语言包\n        |--meta-info.js --------------------------\x3e 动态更新meta\n    |--mixins ------------------------------------\x3e 公用混合方法\n    |--proto -------------------------------------\x3e proto文件\n    |--store\n        |--plugin --------------------------------\x3e store 插件\n        |--defaultState.js -----------------------\x3e 默认store\n        |--index.js ------------------------------\x3e store输出\n        |--mutation-types.js ---------------------\x3e 类型定义\n    |--style\n        |--var.less ------------------------------\x3e 全局Less变量 (在webpack自动注入)\n    |--utils -------------------------------------\x3e 共用工具函数\n    |--views -------------------------------------\x3e 页面vue文件\n\n|--template  -------------------------------------\x3e html 模版(部分页面在标准模版功能不足时, 另外建立)\n|--babel.config.js\n|--jsconfig.json\n|--package.json\n|--prettier.config.js ----------------------------\x3e 代码格式化配置 (见 代码风格 说明)\n")])])])}],!1,null,null,null),e.default=s.exports}}]);