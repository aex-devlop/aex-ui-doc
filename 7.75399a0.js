(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(t,e,a){"use strict";a.r(e);var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a,n=arguments[e];for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-carousel",{attrs:{height:"200px"}},[e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"red"}},[t._v("1")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"blue"}},[t._v("2")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"gray"}},[t._v("3")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"#0098fa"}},[t._v("4")])])],1)]],2)},staticRenderFns:[]},{}),"aex-demo1":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-carousel",{attrs:{height:"200px",type:"card"}},[e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"red"}},[t._v("1")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"blue"}},[t._v("2")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"gray"}},[t._v("3")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"#0098fa"}},[t._v("4")])])],1)]],2)},staticRenderFns:[]},{}),"aex-demo2":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("aex-carousel",{staticClass:"custom",attrs:{height:"200px",arrow:"never",trigger:"click"}},[e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"red"}},[t._v("1")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"blue"}},[t._v("2")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"gray"}},[t._v("3")])]),t._v(" "),e("aex-carousel-item",[e("div",{staticClass:"carousel-item-content",staticStyle:{background:"#0098fa"}},[t._v("4")])])],1)]],2)},staticRenderFns:[]},{})}},a=a(2),n=Object(a.a)(n,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h2",[t._v("Carousel 轮播图")]),e("h3",[t._v("基础用法")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-carousel height="200px">\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:red">1</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:blue">2</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:gray">3</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:#0098fa">4</div>\n        </aex-carousel-item>\n    </aex-carousel>\n</template>\n\n<style>\n    .carousel-item-content {\n        color: #fff;\n        font-size: 40px;\n        line-height: 200px;\n        text-align: center;\n        margin: 0;\n        background: #999;\n    }\n</style>\n')])])])],2),e("h3",[t._v("卡片化")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-carousel height="200px" type=\'card\'>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:red">1</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:blue">2</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:gray">3</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:#0098fa">4</div>\n        </aex-carousel-item>\n    </aex-carousel>\n</template>\n\n<style>\n    .carousel-item-content {\n        color: #fff;\n        font-size: 40px;\n        line-height: 200px;\n        text-align: center;\n        margin: 0;\n        background: #999;\n    }\n</style>\n')])])])],2),e("h3",[t._v("自定义样式")]),e("p",[t._v("添加自定义Class 直接覆盖即可, 下方模拟aex 官网首页轮播图，修改下方指针样式")]),e("demo-block",[e("template",{slot:"source"},[e("aex-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <aex-carousel height="200px" arrow=\'never\' trigger=\'click\' class=\'custom\'>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:red">1</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:blue">2</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:gray">3</div>\n        </aex-carousel-item>\n        <aex-carousel-item>\n            <div class="carousel-item-content" style="background:#0098fa">4</div>\n        </aex-carousel-item>\n    </aex-carousel>\n</template>\n\n<style>\n    .custom {\n        .carousel-item-content {\n            color: #fff;\n            font-size: 40px;\n            line-height: 200px;\n            text-align: center;\n            margin: 0;\n            background: #999;\n        }\n\n        .aex-carousel__button {\n            width: 4px;\n            height: 8px;\n            border-radius: 4px;\n        }\n\n        .aex-carousel__indicator.is-active .aex-carousel__button {\n            height: 14px;\n        }\n\n        .aex-carousel__indicators {\n            right: 12px;\n            left: initial;\n            transform: none;\n        }\n    }\n</style>\n')])])])],2),e("h3",[t._v("参数")]),t._m(0),e("h3",[t._v("Carousel Events")]),t._m(1),e("h3",[t._v("Carousel Methods")]),t._m(2),e("h3",[t._v("Carousel-Item")]),t._m(3)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("height")]),e("td",[t._v("高度")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("initial-index")]),e("td",[t._v("初始状态激活的幻灯片的索引，从 0 开始")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("0")])]),e("tr",[e("td",[t._v("trigger")]),e("td",[t._v("指示器的触发方式")]),e("td",[t._v("string")]),e("td",[t._v("click")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("autoplay")]),e("td",[t._v("是否自动切换")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("interval")]),e("td",[t._v("自动切换的时间间隔，单位为毫秒")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("3000")])]),e("tr",[e("td",[t._v("indicator-position")]),e("td",[t._v("指示器的位置")]),e("td",[t._v("string")]),e("td",[t._v("outside/none")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("arrow")]),e("td",[t._v("切换箭头的显示时机")]),e("td",[t._v("string")]),e("td",[t._v("always/hover/never")]),e("td",[t._v("hover")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("string")]),e("td",[t._v("card")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("loop")]),e("td",[t._v("是否循环显示")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("direction")]),e("td",[t._v("走马灯展示的方向")]),e("td",[t._v("string")]),e("td",[t._v("horizontal/vertical")]),e("td",[t._v("horizontal")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("幻灯片切换时触发")]),e("td",[t._v("目前激活的幻灯片的索引，原幻灯片的索引")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("setActiveItem")]),e("td",[t._v("手动切换幻灯片")]),e("td",[t._v("需要切换的幻灯片的索引，从 0 开始；或相应 "),e("code",[t._v("el-carousel-item")]),t._v(" 的 "),e("code",[t._v("name")]),t._v(" 属性值")])]),e("tr",[e("td",[t._v("prev")]),e("td",[t._v("切换至上一张幻灯片")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("next")]),e("td",[t._v("切换至下一张幻灯片")]),e("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("name")]),e("td",[t._v("幻灯片的名字，可用作 "),e("code",[t._v("setActiveItem")]),t._v(" 的参数")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("label")]),e("td",[t._v("该幻灯片所对应指示器的文本")]),e("td",[t._v("string")]),e("td",[t._v("—")]),e("td",[t._v("—")])])])])}],!1,null,null,null);e.default=n.exports}}]);