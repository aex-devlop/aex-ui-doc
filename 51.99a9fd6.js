(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{174:function(e,n,t){"use strict";t.r(n);t=t(0),t=Object(t.a)({},function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,n=e.$createElement,n=e._self._c||n;return n("section",{staticClass:"content aex-doc"},[n("h1",[e._v("命名规范")]),n("pre",[n("code",[e._v("* 变量命名：      下划线 -----------------\x3e let user_id = ''\n* CSS-Class 命名：中划线 ----------------\x3e .aex-button   \n* 方法函数命名：   小驼峰 ----------------\x3e getUserInfo()\n* 文件夹命名：     中划线 ----------------\x3e views/help-center\n* 文件命名：      中划线 -----------------\x3e views/help-center/help-center.vue\n* 组件导出命名：   大驼峰 -----------------\x3e ButtonGroup\n")])]),n("h1",[e._v("Css class 命名 采用 BEM的方式 (模块名 + 元素名 + 修饰器名)")]),n("ul",[n("li",[e._v("基本机构： .block__element--modify")]),n("li",[e._v("状态切换：.is-状态")]),n("li",[e._v("在日常的业务开发中，我们常用页面名字作为命名空间，写法：block = (页面名字+中划线+内部模块结构)")])]),n("pre",[n("code",[e._v("trade 页面，我们就把trade 作为 命名空间，\n页面大体模块分为：trade-body 和 trade-footer\n\n<div :class='[trade,is-drak:true]'>\n    <div class='trade-body'>\n        <div class='trade-body__left'></div>\n        <div class='trade-body__mid'></div>\n        <div class='trade-body__right--base'></div>\n        <div class='trade-body__right--large'></div>\n    </div>\n\n    <div class='trade-footer'>\n        <div class='trade-footer__current'></div>\n        <div class='trade-footer__history'></div>\n    </div>\n</div>\n\n<style lang='less'>\n    .trade {\n        &.is-drak {}\n        &-body {\n            &__left {}\n            &__mid {}\n            &__right {\n                &--base {}\n                &--large {}\n            }\n        }\n\n        &-footer {\n            &__current{}\n            &__history{}\n        }\n    }\n</style>\n")])]),n("div",{staticClass:"tip"},[n("p",[e._v("BEM 好处在于使结构明晰，团队维护方便，但也有不好的地方是如果用不好，就会使class 名字变得太长；"),n("br"),e._v("\n所以在实际业务开发中我们一般是用于一个页面的主要结构性模块，不必要太过深入细枝末节")])])])}],!1,null,null,null),n.default=t.exports}}]);