(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",[e("strong",[t._v("Vue 生命周期")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(216),alt:"img"}})])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",[t._v("1、"),e("strong",[t._v("生命周期")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",[t._v("2、"),e("strong",[t._v("生命周期函数（钩子）")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",[t._v("3、"),e("strong",[t._v("初始化阶段")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(217),alt:"img"}})])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("执行的方法")]),e("th",[t._v("简介")])])]),e("tbody",[e("tr",[e("td",[t._v("initLifecycle(vm)")]),e("td",[t._v("初始化生命周期，其中定义了部分变量以及属性。主要设置$parent，$children，$refs，_watcher，isMounted，isDestroyed 等标志变量")])]),e("tr",[e("td",[t._v("initEvents(vm)")]),e("td",[t._v("初始化父组件绑定在实例上的事件以及事件的绑定(不是指 DOM 事件)。主要定义了$once、$off、$emit、$on")])]),e("tr",[e("td",[t._v("initRender(vm)")]),e("td",[t._v("初始化与渲染相关的属性和方法，主要定义了 createElement 函数（生成虚拟 vnode）")])]),e("tr",[e("td",[t._v("callHook(vm, 'beforeCreate')")]),e("td",[t._v("执行 beforeCreate 生命周期")])]),e("tr",[e("td",[t._v("initInjections(vm)")]),e("td",[t._v("初始化实例中的 Inject 选项的")])]),e("tr",[e("td",[t._v("initState(vm)")]),e("td",[t._v("进行数据初始化，其中按照顺序初始化了 5 个选项，props、methods、data、computed、watch。并完成 data 数据劫持 observe 以及给从 computed、watch 配置 watcher 观察者实例，后续当数据发生变化时，才能感知到数据的变化并完成页面的渲染")])]),e("tr",[e("td",[t._v("initProvide(vm)")]),e("td",[t._v("将 provide 属性绑定到 provided 上。和 inject 成对出现，在 initState 后面运行的原因是 provide 可能会使用到 data、props、methods 等。")])]),e("tr",[e("td",[t._v("callHook(vm, 'created')")]),e("td",[t._v("执行 creadted 生命周期函数，操作 data，methods 等最早只能在 created 生命周期函数")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",[t._v("4、"),e("strong",[t._v("模板编译阶段")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(218),alt:"img"}})])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",[t._v("5、"),e("strong",[t._v("挂载阶段")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(219),alt:"img"}})])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v("callHook(vm, 'beforeMount');\n\nlet updateComponent;\n\nupdateComponent = function() {\n\tvm._update(vm._render(), hydrating);\n};\n")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v("export function mountComponent(vm, el, hydrating) {\n\tvm.$el = el;\n\tif (!vm.$options.render) {\n\t\tvm.$options.render = createEmptyVNode;\n\t}\n\tcallHook(vm, 'beforeMount');\n\n\tlet updateComponent;\n\n\tupdateComponent = () => {\n\t\tvm._update(vm._render(), hydrating);\n\t};\n\tnew Watcher(\n\t\tvm,\n\t\tupdateComponent,\n\t\tnoop,\n\t\t{\n\t\t\tbefore() {\n\t\t\t\tif (vm._isMounted) {\n\t\t\t\t\tcallHook(vm, 'beforeUpdate');\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\ttrue /* isRenderWatcher */\n\t);\n\thydrating = false;\n\n\tif (vm.$vnode == null) {\n\t\tvm._isMounted = true;\n\t\tcallHook(vm, 'mounted');\n\t}\n\treturn vm;\n}\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(220),alt:"img"}})])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",[this._v("this.$nextTick():在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",[this._v("6、"),t("strong",[this._v("销毁阶段")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("img",{attrs:{src:n(221),alt:"img"}})])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",[t("strong",[this._v("总结：")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("生命周期")]),e("th",[t._v("简介")])])]),e("tbody",[e("tr",[e("td",[t._v("beforeCreated")]),e("td",[t._v("生成$options选项，并给实例添加生命周期相关属性。在实例初始化之后，在 数据观测(data observer) 和event/watcher 事件配置之前被调用，也就是说，data，watcher，methods都不存在这个阶段。但是有一个对象存在，那就是$route，因此此阶段就可以根据路由信息进行重定向等操作。")])]),e("tr",[e("td",[t._v("created")]),e("td",[t._v("初始化与依赖注入相关的操作，会遍历传入 methods 的选项，初始化选项数据，从$options获取数据选项(vm.$options.data)，给数据添加‘观察器’对象并创建观察器，定义 getter、setter 存储器属性。在实例创建之后被调用，该阶段可以访问 data，使用 watcher、events、methods，也就是说 数据观测(data observer) 和 event/watcher 事件配置 已完成。但是此时 dom 还没有被挂载。该阶段允许执行 http 请求操作")])]),e("tr",[e("td",[t._v("beforeMount")]),e("td",[t._v("相关 render 函数首次被调用")])]),e("tr",[e("td",[t._v("mounted")]),e("td",[t._v("在挂载完成之后被调用，执行 render 函数生成虚拟 dom，创建真实 dom 替换虚拟 dom，并挂载到实例。可以操作 dom，比如事件监听")])]),e("tr",[e("td",[t._v("beforeUpdate")]),e("td",[t._v("$vm.data更新之后，虚拟dom重新渲染之前被调用。在这个钩子可以修改$vm.data，并不会触发附加的冲渲染过程。")])]),e("tr",[e("td",[t._v("updated")]),e("td",[t._v("虚拟 dom 重新渲染后调用")])]),e("tr",[e("td",[t._v("beforeDestroy")]),e("td",[t._v("实例被销毁前调用，也就是说在这个阶段还是可以调用实例的。")])]),e("tr",[e("td",[t._v("destroyed")]),e("td",[t._v("实例被销毁后调用，所有的事件监听器已被移除，子实例被销毁。")])])])])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",[this._v("7、"),t("strong",[this._v("父子组件的生命周期加载顺序")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[this._v("// 子组件\nVue.component('child', {\n\ttemplate: '<h1>child</h1>',\n\tprops: ['message'],\n\tbeforeCreate() {\n\t\tconsole.log('I am child beforeCreated');\n\t},\n\tcreated() {\n\t\tconsole.log('I am child created');\n\t},\n\tbeforeMount() {\n\t\tconsole.log('I am child beforeMount');\n\t},\n\tmounted() {\n\t\tconsole.log(this.message); // null\n\t\tconsole.log('I am child mounted');\n\t}\n});\n// 父组件\nnew Vue({\n\tel: '#app',\n\ttemplate: `\n\t<div id='parent'><child :message='message'></child></div>\n  `,\n\tdata: {\n\t\tmessage: null\n\t},\n\tbeforeCreate() {\n\t\tconsole.log('I am parents beforeCreated');\n\t},\n\tcreated() {\n\t\tconsole.log('I am parents created');\n\t},\n\tbeforeMount() {\n\t\tconsole.log('I am parents beforeMount');\n\t},\n\tmounted() {\n\t\tthis.message = 'this is message';\n\t\tconsole.log('I am parents mounted');\n\t}\n});\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",[this._v('"I am parents beforeCreated"\n"I am parents created"\n"I am parents beforeMount"\n"I am child beforeCreated"\n"I am child created"\n"I am child beforeMount"\nnull\n"I am child mounted"\n"I am parents mounted"\n')])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("加载渲染过程：")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("更新过程：")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("销毁过程：")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("父子组件的生命周期加载顺序根据生命周期流程图也能理解，首先父组件先创建才能再创建子组件，子组件在父组件内，得先更新挂载完，父组件才算全部挂载完，销毁时如果父组件先销毁，会造成内层泄露。")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",[this._v("8、"),t("strong",[this._v("优化")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("（1）自定义事件、定时器等任务及时销毁（可以在 beforeDestory 中），避免内层泄露；")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("ol",[t("li",[t("p",[this._v("首先在 vue 实例的 data 中定义定时器的名称：")]),t("pre",[t("code",[this._v("export default {\n\tdata() {\n\t\ttimer: null;\n\t}\n};\n")])])])])},function(){var t=this.$createElement,t=this._self._c||t;return t("ol",{attrs:{start:"2"}},[t("li",[t("p",[this._v("在方法（methods）或者页面初始化（mounted()）的时候使用定时器")]),t("pre",[t("code",[this._v("this.timer = setInterval(() => {\n\t//需要做的事情\n}, 1000);\n")])])])])},function(){var t=this.$createElement,t=this._self._c||t;return t("ol",{attrs:{start:"3"}},[t("li",[t("p",[this._v("然后在页面销毁的生命周期函数（beforeDestroy()）中销毁定时器")]),t("pre",[t("code",[this._v("export default {\n\tdata() {\n\t\ttimer: null;\n\t},\n\n\tbeforeDestroy() {\n\t\tclearInterval(this.timer);\n\n\t\tthis.timer = null;\n\t}\n};\n")])])])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",[this._v("export default {\n\tmethods: {\n\t\tfun1() {\n\t\t\tconst timer = setInterval(() => {\n\t\t\t\t//需要做的事情\n\t\t\t}, 1000);\n\n\t\t\tthis.$once('hook:beforeDestroy', () => {\n\t\t\t\tclearInterval(timer);\n\n\t\t\t\ttimer = null;\n\t\t\t});\n\t\t}\n\t}\n};\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("（2）父子组件请求是异步的")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",{staticClass:"language-html"},[this._v('<div class="test">\n\t<children v-if="data1" :data="data1"></children>\n</div>\n')])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[this._v("watch:{\n\n  data:{\n\n   deep:true,\n\n   handler:function(newVal,oldVal) {\n    this.$nextTick(() => {\n\n     this.data = newVal\n\n     this.data = newVal.url ? newVal.url : ''\n\n    })\n\n   }\n\n  },\n\n}\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[this._v("props:['data1'],\n\nwatch:{\n\n  data1:{\n\n   deep:true,\n\n   handler:function(newVal,oldVal) {\n\n    this.$nextTick(() => {\n\n     this.data1 = newVal\n\n     this.showData1(this.data1)\n\n    })\n\n   }\n\n  },\n\n}\n")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("（3）避免在 updated 更改状态，因为这可能会导致更新无限循环。")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("（4）v-if 与 v-show")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("（5）KEY 的重要性")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("strong",[this._v("为什么不用 index 或者 random 作为 key")])])}],a=n(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[t._m(0),t._m(1),e("p",[t._v("生命周期流程图")]),t._m(2),e("p",[t._v("Vue 实例从创建到销毁的过程，根据流程图大致可以分为四个阶段：")]),e("p",[t._v("初始化阶段：为 vue 实例上初始化一些属性，事件以及响应式数据；")]),e("p",[t._v("模板编译阶段：将模板编译成渲染函数；")]),e("p",[t._v("挂载阶段：将实例挂载到指定的 DOM 上，即将模板渲染到真实 DOM 中；")]),e("p",[t._v("销毁阶段：将实例自身从父组件中删除，并取消依赖追踪及事件监听；")]),t._m(3),e("p",[t._v("在生命周期中，特定的时间点会被自动执行的函数。")]),t._m(4),t._m(5),e("p",[t._v("创建一个 vue 实例:new vue() == >核心代码:this._init(options)，_init 方法主要执行以下方法：")]),t._m(6),t._m(7),t._m(8),e("p",[t._v("初始化阶段最后会判断当前是否有 el 参数，如果没有 el，我们会等待调用$mount(el)方法。在有 el 参数的情况下，判断 template 参数前会先判断有无手写 render 函数，有存在 render 的话，则会直接去渲染当前的 render 函数，如果没有那么我们才开始去查找是否有 template 模板，如果没有 template，那么我们就会直接将获取到的 el（也就是我们常见的#app，#app 里面可能还会有其他标签）编译成 templae, 然后在将这个 template 转换成 render 函数。")]),e("pre",[e("code",{staticClass:"language-html"},[t._v('<div id="app">'+t._s(t.el)+"</div>\n\n<script>\n\tvar app = new Vue({\n\t\tel: '#app',\n\t\tdata: {\n\t\t\tel: '通过el渲染',\n\t\t\ttemplate: '通过template渲染',\n\t\t\trender: '通过render渲染'\n\t\t},\n\t\ttemplate: '<div>"+t._s(t.template)+"</div>',\n\t\trender(h) {\n\t\t\treturn h('div', this.render);\n\t\t}\n\t});\n\t//页面呈现的是 通过render渲染\n\t//优先级 render -> template -> el\n<\/script>\n")])]),e("p",[t._v("不管是用 el 还是 template 或者是我们常用的.vue 文件，最终都是转为 render 函数。")]),e("p",[t._v("Vue 基于源码构建的版本有两个：1.完整版 2.只包含运行时版")]),e("p",[t._v("两个版本的区别仅在于后者包含了一个编译器，拥有创建 vue 实例、渲染并处理虚拟 dom 等功能，使用 vue-loader 或 vueift 时，模板在构建时预编译成渲染函数，初始化阶段直接进入挂载阶段，模板编译阶段只存在于完整版。")]),t._m(9),t._m(10),e("p",[t._v("有了 render 渲染函数，触发 beforeMount 生命周期钩子函数，进入挂载阶段，执行了 updateComponent 函数。部分源码：")]),t._m(11),e("p",[t._v("从源码可以看到，在该函数内部，vm._render()内部会调用上述 render 函数，新生成一个虚拟 DOM。传递给组件 Vue.prototype._update 方法执行渲染到页面。")]),e("p",[t._v("_update 内部方法 patch，会根据是否存在旧的虚拟 DOM 来判断是首次渲染还是更新，如果存在对最新的虚拟 DOM 与上一次渲染的旧虚拟 DOM 进行对比并更新 DOM 节点。然后再开始将 render 渲染成为真实的 dom。渲染成真实 dom 后，会将渲染出来的真实 dom 替换掉原来的 vm.$el。然后再将替换后的$el 渲染到视图页面中。")]),e("p",[t._v("如果是首次渲染，则会对这个 vnode 进行 patch 操作，帮我们把 vnode 通过 createElm 函数创建新节点并且渲染到 dom 节点中。")]),e("p",[t._v("之后再执行 monut 生命周期函数，将标识生命周期的一个属性_isMounted 置为 true。所以 mounted 函数内，我们是可以操作 dom 的，因为这个时候 dom 已经渲染完成了。")]),e("p",[t._v("这时，挂载操作完成一半，挂在不仅要将模板渲染到视图中，同时还要开启对模板中数据（状态）的监控，当数据（状态）发生变化时通知其依赖进行视图更新。")]),t._m(12),e("p",[t._v("从挂载的源码可以看出，创建了一个 Watcher 实例，并将定义好的 updateComponent 函数传入。要想开启对模板中数据（状态）的监控。")]),e("p",[t._v("当我们状态数据发生变化时,触发了 beforeUpdate 生命周期函数，要开始将我们变化后的数据渲染到页面上了（判断当前的_isMounted 是不是为 ture 并且_isDestroyed 是不是为 false，也就是说，保证 dom 已经被挂载的情况下，且当前组件并未被销毁，才会走 update 流程）。")]),e("p",[t._v("beforeUpdate 调用之后，我们又会重新生成一个新的虚拟 dom(Vnode)，然后会拿这个最新的 Vnode 和原来的 Vnode 去做一个 diff 算，这里就涉及到一系列的计算，算出最小的更新范围，从而更新 render 函数中的最新数据，再将更新后的 render 函数渲染成真实 dom。也就完成了我们的数据更新")]),e("p",[t._v("然后再执行 updated，所以 updated 里面也可以操作 dom，并拿到最新更新后的 dom。")]),t._m(13),e("p",[t._v("mouted 和 updated 的执行，并不会等待所有子组件都被挂载完成后再执行，Vue 是异步执行 dom 更新的，一旦观察到数据变化，Vue 就会开启一个 Queue 队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个 Queue 队列。如果这个 watcher 被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和 DOm 操作。而在下一个事件循环时，Vue 会清空队列，并进行必要的 DOM 更新。")]),e("p",[t._v("例如：")]),e("pre",[e("code",[t._v('<template>\n\t<div>\n\t\t<ul ref="list">\n\t\t\t<li v-for="(item, index) in list" :key="index">'+t._s(t.item)+"</li>\n\t\t</ul>\n\t\t<button @click=\"additem\">增加</button>\n\t</div>\n</template>\n\n<script>\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tlist: ['第一个', '第二个', '第三个']\n\t\t};\n\t},\n\tmethods: {\n\t\tadditem() {\n\t\t\tthis.list.push('加一个');\n\t\t\tthis.list.push('加一个');\n\t\t\tthis.list.push('加一个');\n\n\t\t\tlet child = this.$refs.list.childNodes.length;\n\t\t\tconsole.log('list的长度:', child); //结果为3\n\n\t\t\tthis.$nextTick(() => {\n\t\t\t\tlet child = this.$refs.list.childNodes.length;\n\t\t\t\tconsole.log('list的长度:', child); //结果为6\n\t\t\t});\n\t\t}\n\t}\n};\n<\/script>\n")])]),e("p",[t._v("点击按钮的时候，列表循环出 6 个，但此时获取 dom 上的个数只能获取到 3，dom 还没进行更新。如果想要在修改数据后就获取 dom 更新后的状态，可以使用 this.$nextTick 方法。")]),t._m(14),t._m(15),t._m(16),e("p",[t._v("当调用了 vm.$destroy 方法，Vue 实例就进入了销毁阶段，该阶段所做的主要工作是将当前的 Vue 实例从其父级实例中删除，取消当前实例上的所有依赖追踪并且移除实例上的所有事件监听器。")]),e("p",[t._v("beforeDestroy 生命周期是实例销毁前，在这个函数内，还是可以操作实例的。")]),e("p",[t._v("之后会做一系列的销毁动作，解除各种数据引用，移除事件监听，删除组件_watcher，删除子实例，删除自身 self 等。同时将实例属性_isDestroyed 置为 true")]),e("p",[t._v("销毁完成后，再执行 destroyed，这时已经不能操作实例了。生命周期整个流程就结束了。")]),t._m(17),t._m(18),t._m(19),t._m(20),e("p",[t._v("分别在他们的钩子函数中打印日志，观察执行顺序。得到的结果如下，父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载。")]),t._m(21),e("p",[t._v("可以看到在子组件 mouted 中打印出来的是 null；子组件挂载完成后，父组件还未挂载。所以组件数据回显的时候，在父组件 mounted 中获取的数据，子组件的 mounted 是拿不到的。")]),t._m(22),e("p",[t._v("父 beforeCreate->父 created->父 beforeMount->子 beforeCreate->子 created->子 beforeMount->子 mounted->父 mounted")]),t._m(23),e("p",[t._v("父 beforeUpdate->子 beforeUpdate->子 updated->父 updated")]),t._m(24),e("p",[t._v("父 beforeDestroy->子 beforeDestroy->子 destroyed->父 destroyed")]),t._m(25),t._m(26),t._m(27),e("p",[t._v("清理定时器有两种方法：")]),e("p",[t._v("方法一：定时器的方法或者生命周期函数中声明并销毁")]),t._m(28),t._m(29),t._m(30),e("p",[t._v("方法二：使用 this.$once(‘hook:beforeDestory’,()=>{}); 直接在需要定时器的方法或者生命周期函数中声明并销毁")]),t._m(31),e("p",[t._v("方法一存在的问题：\n（1）vue 实例中需要有这个定时器的实例，感觉有点多余;")]),e("p",[t._v("（2）创建的定时器代码和销毁定时器的代码没有放在一起，通常很容易忘记去清理这个定时器，不容易维护;")]),e("p",[t._v("因此推荐用方法二")]),t._m(32),e("p",[t._v("在父组件调用接口传递数据给子组件时，请求接口响应是异步的。在父组件哪个钩子发请求，在子组件哪个钩子接收数据。都有可能取不到的。当子组件的 mounted 都执行完之后，此时可能父组件的请求才返回数据。会导致，从父组件传递给子组件的数据是 undefined。")]),e("p",[t._v("解决方法一：")]),t._m(33),e("p",[t._v("在渲染子组件的时候加上一个条件,data1 是父组件调用接口返回的数据。当有数据的时候在去渲染子组件。这样就会形成天然的阻塞。在父组件的 created 中的请求返回数据后，才会执行子组件的 created，mounted。最后执行父组件的 mounted。")]),e("p",[t._v("解决方法二：")]),e("p",[t._v("在子组件中 watch 监听，父组件获取到值，这个值就会变化，自然是可以监听到的")]),t._m(34),e("p",[t._v("从父组件点击调用接口并显示子组件，子组件拿到数据并监听在 watch 中调用方法并显示")]),t._m(35),t._m(36),e("p",[t._v("虚拟 dom 重新渲染后调用，若再次修改$vm.data，会再次触发 beforeUpdate、updated，进入死循环。")]),t._m(37),e("p",[t._v("这两个指令都可以把元素隐藏或显示。当传入的数据是 true 是展示，false 会隐藏。")]),e("p",[t._v("不同的是：v-if 会把元素或者组件删掉（不渲染），即在 DOM 中移除；v-show 则会使用 CSS 当中的 display 属性，将其设置成 none。v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),e("p",[t._v("v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")]),t._m(38),e("p",[t._v("使用 v-for 更新已渲染的元素列表时，默认用就地复用策略；列表数据修改的时候，他会根据 key 值去判断某个值是否修改，如果修改，则重新渲染这一项,否则复用之前的元素；")]),e("p",[t._v("在循环中应使用 key，且最好不要是 index 或者 random。diff 算法中通过 tag 和 key 来判断是否是同一个节点（sameNode），使用 key 可以减少渲染次数，提高渲染性能。")]),e("hr"),t._m(39),e("p",[t._v("diff 算法过程中，会对比新旧节点是否相同类型的节点。")]),e("p",[t._v("如果渲染的列表会被改变，用 index 作为 key，数组的顺序怎么改变，index 都是 0, 1, 2 这样排列的，在对比新旧节点时，复用不了，就会重新渲染。同理，random 随机数作为 key，在对比时也找不到相同，复用不了，重新渲染。")])])},r,!1,null,null,null);e.default=r.exports},216:function(t,e,n){t.exports=n.p+"static/1.809763a.png"},217:function(t,e,n){t.exports=n.p+"static/2.d086402.png"},218:function(t,e,n){t.exports=n.p+"static/3.8fb4fb5.png"},219:function(t,e,n){t.exports=n.p+"static/8.4c45da1.png"},220:function(t,e,n){t.exports=n.p+"static/9.c6040b2.png"},221:function(t,e,n){t.exports=n.p+"static/11.88e0d78.png"}}]);