(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{349:function(t,e,p){"use strict";p.r(e);var n=[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("div",{staticClass:"tip"},[e("p",[t._v("资料整理: 刘嘉健"),e("br"),t._v("\n更新日期: 2022-03-10")])]),e("h1",[t._v("背景")]),e("p",[t._v("经历去年（2021）的新版社区翻车事件，才有这篇文章。由于习惯单人作战，一旦遇上多人协作就会乱套，比如：页面、组件的设计上存在许多不合理的地方，主要是在分配工作和沟通上出现问题。那么我们就需要通过科学有效的方法去做好上述需要改进的工作。（而非单凭一张嘴把工作分配完）")]),e("h1",[t._v("做这个的动机")]),e("ol",[e("li",[t._v("提高多人协作的工作效率")]),e("li",[t._v("减少不必要的沟通成本")]),e("li",[t._v("提高工时估计的准确性")]),e("li",[t._v("把写过的文档按页面保存到相应的路径下可以作为指引，帮助新入手的同事更快的了解项目的任务流程，而非单纯的通过读代码去认识项目。且该文档就有版本管理功能，可以随时修改。")])]),e("h1",[t._v("Vue.js 提高封装组件效率的前置知识点")]),e("h2",[t._v("Props 属性继承")]),e("p",[t._v("和 React 的高阶组件（HOC）道理相同")]),e("p",[t._v("有 A、B、C 三个组件，对应的关系是 A（父）→ B（子）→ C（孙）。")]),e("p",[t._v('此时的场景是在 A 的作用域需要把 C 的 props（price） 传递到 C 上，此时利用 v-bind="$attrs" 将 price 值，从 A 继承到 B 再继承到 C 了。而非通过逐个传 props 值。')]),e("p",[t._v("具体代码实现")]),e("pre",[e("code",[t._v("\x3c!-- 根组件 App.vue --\x3e\n<template>\n    <CompA :price=\"'Some Price'\"></CompA>\n</template>\n")])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v('\x3c!-- A.vue --\x3e\n<template>\n    <CompB v-bind="$attrs"></CompB>\n</template>\n')])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v('\x3c!-- B.vue --\x3e\n<template>\n    <CompC v-bind="$attrs"></CompC>\n</template>\n')])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v("\x3c!-- C.vue --\x3e\n<template>\n    <div>Your Price \\{\\{ price \\}\\}</div>\n</template>\n")])]),e("p",[t._v("PS: 若某个 props 需要使用 .sync 修饰符（例如常见的 dialog 组件），只需要给 v-bind 添加 .sync 值即可，然后再补上相应的 emit 事件即可。")]),e("p",[t._v("示例：")]),e("pre",[e("code",[t._v('<dialog v-bind.sync="$attrs" @close="$emit(\'update:visible\', false)">\n</dialog>\n')])]),e("blockquote",[e("p",[t._v("$attrs 相关文档 https://cn.vuejs.org/v2/api/#vm-attrs")])]),e("h2",[t._v("事件冒泡传递")]),e("p",[t._v('还是沿用以上例子，如果父组件 A 需要监听 B 或 C 组件的事件，不需要手动地从组件 B 或 C 通过 $emit 逐个向上传递，是通过 v-on="$listeners" 监听 $emit 事件并向上冒泡。')]),e("p",[t._v("示例代码如下：")]),e("pre",[e("code",[t._v('\x3c!-- 根组件 App.vue --\x3e\n<template>\n    <CompA @eventFromC="eventFromC"></CompA>\n</template>\n')])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v('\x3c!-- A.vue --\x3e\n<template>\n    <CompB v-on="$listeners"></CompB>\n</template>\n')])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v('\x3c!-- B.vue --\x3e\n<template>\n    <CompC v-on="$listeners"></CompC>\n</template>\n')])]),e("p",[t._v("↓")]),e("pre",[e("code",[t._v("\x3c!-- C.vue --\x3e\n<template>\n    <div @click=\"$emit('eventFromC')\">Your Price \\{\\{ price \\}\\}</div>\n</template>\n")])]),e("p",[t._v("PS: 当然，组件 B 也可以继续监听组件 C 的事件，并不影响组件 A 的监听。")]),e("h1",[t._v("正文")]),e("p",[t._v("我个人偏向用绘图的方式表达逻辑，这里推荐使用 diagram 的画图工具 https://app.diagrams.net/ ，该工具开源且免费，可以使用 VSCode 的插件（Draw.io Integration）直接打开对应的文档文件。")]),e("p",[t._v("文档的规划应该考虑到以下几个方面")]),e("h2",[t._v("业务流程的梳理")]),e("p",[t._v("这里并不是简单的把PM的需求文档抄过来即可，而是通过自己的理解将代码的架构通过 "),e("strong",[t._v("流程图")]),t._v(" 或 "),e("strong",[t._v("UML 时序图")]),t._v(" 表达出程序在不同的时间段要做的事情（不需要详细的指出细节，下面模块设计会补充）。在此我们把相应的事件连接起来形成一个代码"),e("strong",[t._v("大纲（outline）")]),t._v("。")]),e("blockquote",[e("p",[t._v("对应示例 Listing-Desk流程图.drawio （以该线上项目作为案列）")])]),e("h2",[t._v("模块设计")]),e("p",[t._v("将业务梳理的结果转化成详细的代码，即：有对应的 "),e("strong",[t._v("页面")]),t._v(" → "),e("strong",[t._v("组件")]),t._v("的结构。")]),e("p",[t._v("需要细化到代码细节的设计，具体到画图中需要理清组件之间的 "),e("strong",[t._v("数据（props）")]),t._v(" / "),e("strong",[t._v("事件（event）")]),t._v(" 流向和单位组件间的逻辑流程说明。合理分割代码，拒绝臃肿💩🗻。")]),e("blockquote",[e("p",[t._v("对应示例 Listing-Desk 组件规划.drawio")])]),e("h3",[t._v("关于文件目录设计的一些建议")]),e("p",[t._v("可以参考 nuxt 项目，将页面（容器）文件用 index 命名，组件统一放到页面文件夹下的 components 文件夹中。")]),e("p",[t._v("简化版的示例：")]),e("p",[e("img",{attrs:{src:p(398),alt:"文件树示例"}})]),e("blockquote",[e("p",[t._v("具体可以参考 nuxt 的文档。https://www.nuxtjs.cn/guide/directory-structure")])]),e("h2",[t._v("状态设计（特指使用 vue.js 的项目）")]),e("p",[t._v("在模块设计的过程中需要考虑是用 props + $emit 组合的形式进行状态分享，抑或是使用 Vuex 全局共享。至于 session\\localStorage 就不推荐使用了。前者两种方式已经能满足绝大部分的应用场景，再加上 vuex-persisitedstate 已经应用在项目之中，已经可以代替 localStorage 的功能。（若万不得已，不要用这个东西，状态量一多，维护起来将十分麻烦）")]),e("h2",[t._v("文档索引（可选）")]),e("p",[t._v("建议使用 npm 的 tree-node-cli 创建文件树目录，并附上注释说明。")]),e("p",[t._v("示例：")]),e("pre",[e("code",[t._v("practise // 项目文件夹~~~\n├── 15206552590846or8n6o1pn.gif // 说明~~~\n├── Listing-Desk 组件规划.drawio\n├── Listing-Desk流程图.drawio\n├── a.js\n├── a.json\n├── contract_protocol_zh.html\n├── extract-i18n.js\n├── index.html\n├── index.js\n├── package-lock.json\n├── package.json\n├── str.txt\n├── zh.json\n├── 关于代码设计与多人协作存在的问题.md\n└── 文件树示例.png\n")])]),e("h1",[t._v("态度（回归人性）")]),e("p",[t._v("坚持到这里，已经算是有一个比较完善的文档，在编码上应该是胸有成竹的，但过程还是比较繁琐，从人性上我们总会下意识的逃避这种对业务没有任何帮助的事情，**‘时间不够’**成为永远的借口。")]),e("p",[t._v("写代码心急是大忌，当然文档的编写理应要做，但可以根据时间的充裕程度去控制文档的细节程度（或者后续再继续细化）。")]),e("h1",[t._v("draw.io 使用说明及相关注意")]),e("ol",[e("li",[t._v("常用功能介绍")])]),e("p",[t._v("如图：")]),e("p",[e("img",{attrs:{src:p(399),alt:"drawio介绍"}})]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("常用表达的方式（vue组件、props、emit、vuex状态）")])]),e("p",[t._v("vue组件（代指一个容器装载着各种逻辑）。如图：")]),e("p",[e("img",{attrs:{src:p(400),alt:"vue组件"}})]),e("p",[t._v("props、emit 事件 在连接线上标好对应的props与emit事件名称（双击线条就可以写上文本）即可。如图：")]),e("p",[e("img",{attrs:{src:p(401),alt:"vue-props"}})]),e("p",[e("img",{attrs:{src:p(402),alt:"vue-emit"}})]),e("p",[t._v("vuex 状态。这也是一个容器，但里面主要都是状态，所以从优先级上是高于任何一个组件的，故放到最顶端，为提高模型的阅读性，可以不画引用的线条（可能会有许多地方被引用，导致阅读性较差），画好 setMutations 和 setActions 即可。如图：")]),e("p",[e("img",{attrs:{src:p(403),alt:"vue-emit"}})]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("画图的坑")])]),e("p",[t._v("将直线改成曲线（表达自己调用自己的方法）")]),e("p",[t._v("PS: 貌似这个工具有一个 bug 不能把刚生成好的曲线直接拖动位移，需要用键盘的‘上下左右’按键左右移动后才能拖动。演示如以下动图")]),e("p",[e("img",{attrs:{src:p(404),alt:"画曲线"}})]),e("p",[t._v("线条太多可以将相交部分的线换成虚线（注意选中组件时右侧会有侧边栏修改样式）")]),e("p",[t._v("Listing-Desk 组件规划.drawio 中的 detail 页有示例")]),e("p",[e("a",{attrs:{href:"./static/Listing-Desk2.drawio"}},[t._v("Listing-Desk组件规划.drawio")])]),e("p",[e("a",{attrs:{href:"./static/Listing-Desk1.drawio"}},[t._v("Listing-Desk流程图.drawio")])]),e("blockquote",[e("p",[t._v("参考链接：")])]),e("ol",[e("li",[t._v("https://jishuin.proginn.com/p/763bfbd639da")]),e("li",[t._v("https://segmentfault.com/a/1190000015590301")]),e("li",[t._v("https://juejin.cn/post/6844903936504119304")])])])}],i=p(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n,!1,null,null,null);e.default=n.exports},398:function(t,e,p){t.exports=p.p+"static/directory.5079dbf.png"},399:function(t,e,p){t.exports=p.p+"static/drawio-introduce.8782ea4.png"},400:function(t,e,p){t.exports=p.p+"static/vue-component.bc7a1f1.png"},401:function(t,e,p){t.exports=p.p+"static/vue-props.e98e5d5.png"},402:function(t,e,p){t.exports=p.p+"static/vue-emit.843d340.png"},403:function(t,e,p){t.exports=p.p+"static/vuex-state.8da1f91.png"},404:function(t,e,p){t.exports=p.p+"static/drawio-draw-line.e271ef4.gif"}}]);