(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{243:function(e,a,l){"use strict";l.r(a);var n,t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l,n=arguments[a];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},t={name:"component-doc",components:{"aex-demo0":t({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[e("aex-cascader",{attrs:{clearable:"",options:a.options,props:{expandTrigger:"hover"}},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),a._v(" "),e("aex-cascader",{attrs:{options:a.options,props:{expandTrigger:"hover"},size:"medium"},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),a._v(" "),e("aex-cascader",{attrs:{options:a.options,props:{expandTrigger:"hover"},size:"small","show-all-levels":!1,placeholder:"仅显示最后一级"},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),a._v(" "),e("aex-cascader",{attrs:{options:a.options,props:{expandTrigger:"hover",disabled:"is_disabled"},size:"mini"},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}},methods:{handleChange:function(e){console.log(e)}}}),"aex-demo1":t({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[e("aex-cascader",{attrs:{clearable:"",options:a.options,props:{expandTrigger:"hover",multiple:!0}},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),a._v(" "),e("aex-cascader",{attrs:{clearable:"",options:a.options,props:{expandTrigger:"hover",multiple:!0},"collapse-tags":""},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}},methods:{handleChange:function(e){console.log(e)}}}),"aex-demo2":t({render:function(){var a=this,e=a.$createElement,e=a._self._c||e;return e("div",[e("aex-cascader",{attrs:{clearable:"",options:a.options,props:{expandTrigger:"hover",checkStrictly:!0}},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}}),a._v(" "),e("aex-cascader",{attrs:{clearable:"",options:a.options,props:{expandTrigger:"hover",multiple:!0,checkStrictly:!0}},on:{change:a.handleChange},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}},methods:{handleChange:function(e){console.log(e)}}}),"aex-demo3":(n=0,t({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("aex-cascader",{attrs:{props:this.props}})],1)},staticRenderFns:[]},{data:function(){return{props:{lazy:!0,lazyLoad:function(e,a){var l=e.level;console.log("===",e),setTimeout(function(){var e=Array.from({length:l+1}).map(function(e){return{value:++n,label:"选项"+n,leaf:3<=l}});a(e)},1e3)}}}}})),"aex-demo4":t({render:function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("div",[a("aex-cascader",{attrs:{placeholder:"单选搜索",options:e.options,filterable:""}}),e._v(" "),a("aex-cascader",{attrs:{placeholder:"多选搜索",options:e.options,props:{multiple:!0},filterable:""}})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}}}),"aex-demo5":t({render:function(){var l=this,e=l.$createElement,n=l._self._c||e;return n("div",[n("aex-cascader",{attrs:{placeholder:"单选搜索",options:l.options,filterable:""},scopedSlots:l._u([{key:"default",fn:function(e){var a=e.node,e=e.data;return[n("span",[l._v(l._s(e.label))]),l._v(" "),a.isLeaf?l._e():n("span",[l._v(" ("+l._s(e.children.length)+") ")])]}}])})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}}}),"aex-demo6":t({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("aex-cascader-panel",{attrs:{options:this.options}})],1)},staticRenderFns:[]},{data:function(){return{options:[{value:"fontend",label:"前端",children:[{value:"js",label:"js"},{value:"css",label:"css",disabled:!0},{value:"vue",label:"vue",children:[{value:"aex-ui",label:"aex-ui"},{value:"element",label:"element"},{value:"iview",label:"iview"}]}]},{value:"backtend",label:"后端",children:[{value:"php",label:"php",is_disabled:!0},{value:"go",label:"go"},{value:"java",label:"java"}]}],value:""}}})}},l=l(1),t=Object(l.a)(t,function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("section",{staticClass:"content aex-doc"},[a("h2",[e._v("Cascader 级联选择")]),a("h3",[e._v("基础用法")]),e._m(0),e._m(1),a("demo-block",[a("template",{slot:"source"},[a("aex-demo0")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("        <aex-cascader clearable v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover' }\"></aex-cascader>\n        <aex-cascader v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover' }\" size='medium'></aex-cascader>\n        <aex-cascader v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover' }\" size='small' :show-all-levels='false' placeholder='仅显示最后一级' />\n        <aex-cascader v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover',disabled: 'is_disabled' }\" size='mini'></aex-cascader>\n        <script>\n            export default {\n                data() {\n                    return {\n                        options: [{\n                                value: 'fontend',\n                                label: '前端',\n                                children: [{\n                                        value: 'js',\n                                        label: 'js'\n                                    },\n                                    {\n                                        value: 'css',\n                                        label: 'css',\n                                        disabled: true // option里 设置禁用\n                                    },\n                                    {\n                                        value: 'vue',\n                                        label: 'vue',\n                                        children: [{\n                                                value: 'aex-ui',\n                                                label: 'aex-ui'\n                                            },\n                                            {\n                                                value: 'element',\n                                                label: 'element'\n                                            },\n                                            {\n                                                value: 'iview',\n                                                label: 'iview'\n                                            },\n                                        ],\n                                    },\n                                ],\n                            },\n                            {\n                                value: 'backtend',\n                                label: '后端',\n                                children: [{\n                                        value: 'php',\n                                        label: 'php',\n                                        is_disabled: true // 可以通过\n                                    },\n                                    {\n                                        value: 'go',\n                                        label: 'go'\n                                    },\n                                    {\n                                        value: 'java',\n                                        label: 'java'\n                                    },\n                                ],\n                            },\n                        ],\n                        value: '',\n                    };\n                },\n                methods: {\n                    handleChange(value) {\n                        console.log(value);\n                    },\n                },\n            };\n        <\/script>\n")])])])],2),a("h3",[e._v("多选")]),e._m(2),a("demo-block",[a("template",{slot:"source"},[a("aex-demo1")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("        <aex-cascader clearable v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover',multiple:true }\"></aex-cascader>\n        <aex-cascader clearable v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover',multiple:true }\" collapse-tags></aex-cascader>\n        <script>\n            export default {\n                data() {\n                    return {\n                        options: [{\n                                value: 'fontend',\n                                label: '前端',\n                                children: [{\n                                        value: 'js',\n                                        label: 'js'\n                                    },\n                                    {\n                                        value: 'css',\n                                        label: 'css',\n                                        disabled: true // option里 设置禁用\n                                    },\n                                    {\n                                        value: 'vue',\n                                        label: 'vue',\n                                        children: [{\n                                                value: 'aex-ui',\n                                                label: 'aex-ui'\n                                            },\n                                            {\n                                                value: 'element',\n                                                label: 'element'\n                                            },\n                                            {\n                                                value: 'iview',\n                                                label: 'iview'\n                                            },\n                                        ],\n                                    },\n                                ],\n                            },\n                            {\n                                value: 'backtend',\n                                label: '后端',\n                                children: [{\n                                        value: 'php',\n                                        label: 'php',\n                                        is_disabled: true // 可以通过\n                                    },\n                                    {\n                                        value: 'go',\n                                        label: 'go'\n                                    },\n                                    {\n                                        value: 'java',\n                                        label: 'java'\n                                    },\n                                ],\n                            },\n                        ],\n                        value: '',\n                    };\n                },\n                methods: {\n                    handleChange(value) {\n                        console.log(value);\n                    },\n                },\n            };\n        <\/script>\n")])])])],2),a("h3",[e._v("选择任意一级选项")]),e._m(3),a("demo-block",[a("template",{slot:"source"},[a("aex-demo2")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-cascader clearable v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover',checkStrictly: true }\" />\n<aex-cascader clearable v-model=\"value\" :options=\"options\" @change=\"handleChange\" :props=\"{ expandTrigger: 'hover',multiple:true,checkStrictly: true }\" />\n<script>\n    export default {\n        data() {\n            return {\n                options: [{\n                        value: 'fontend',\n                        label: '前端',\n                        children: [{\n                                value: 'js',\n                                label: 'js'\n                            },\n                            {\n                                value: 'css',\n                                label: 'css',\n                                disabled: true // option里 设置禁用\n                            },\n                            {\n                                value: 'vue',\n                                label: 'vue',\n                                children: [{\n                                        value: 'aex-ui',\n                                        label: 'aex-ui'\n                                    },\n                                    {\n                                        value: 'element',\n                                        label: 'element'\n                                    },\n                                    {\n                                        value: 'iview',\n                                        label: 'iview'\n                                    },\n                                ],\n                            },\n                        ],\n                    },\n                    {\n                        value: 'backtend',\n                        label: '后端',\n                        children: [{\n                                value: 'php',\n                                label: 'php',\n                                is_disabled: true // 可以通过\n                            },\n                            {\n                                value: 'go',\n                                label: 'go'\n                            },\n                            {\n                                value: 'java',\n                                label: 'java'\n                            },\n                        ],\n                    },\n                ],\n                value: '',\n            };\n        },\n        methods: {\n            handleChange(value) {\n                console.log(value);\n            },\n        },\n    };\n<\/script>\n")])])])],2),a("h3",[e._v("动态加载子项")]),e._m(4),a("demo-block",[a("template",{slot:"source"},[a("aex-demo3")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("<aex-cascader :props=\"props\"></aex-cascader>\n\n<script>\n    let id = 0;\n\n    export default {\n        data() {\n            return {\n                props: {\n                    lazy: true,\n                    lazyLoad(node, resolve) {\n                        const {\n                            level\n                        } = node;\n                        console.log('===', node)\n                        setTimeout(() => {\n                            const nodes = Array.from({\n                                    length: level + 1\n                                })\n                                .map(item => ({\n                                    value: ++id,\n                                    label: `选项${id}`,\n                                    leaf: level >= 3 // level 从0 开始这里会有4层\n                                }));\n                            // 通过调用resolve将子节点数据返回，通知组件数据加载完成\n                            resolve(nodes);\n                        }, 1000);\n                    }\n                }\n            };\n        }\n    };\n<\/script>\n")])])])],2),a("h3",[e._v("搜索")]),e._m(5),a("demo-block",[a("template",{slot:"source"},[a("aex-demo4")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("  <aex-cascader placeholder=\"单选搜索\" :options=\"options\" filterable></aex-cascader>\n  <aex-cascader placeholder=\"多选搜索\" :options=\"options\" :props=\"{ multiple: true }\" filterable></aex-cascader>\n  <script>\n      let id = 0;\n\n      export default {\n          data() {\n              return {\n                  options: [{\n                          value: 'fontend',\n                          label: '前端',\n                          children: [{\n                                  value: 'js',\n                                  label: 'js'\n                              },\n                              {\n                                  value: 'css',\n                                  label: 'css',\n                                  disabled: true // option里 设置禁用\n                              },\n                              {\n                                  value: 'vue',\n                                  label: 'vue',\n                                  children: [{\n                                          value: 'aex-ui',\n                                          label: 'aex-ui'\n                                      },\n                                      {\n                                          value: 'element',\n                                          label: 'element'\n                                      },\n                                      {\n                                          value: 'iview',\n                                          label: 'iview'\n                                      },\n                                  ],\n                              },\n                          ],\n                      },\n                      {\n                          value: 'backtend',\n                          label: '后端',\n                          children: [{\n                                  value: 'php',\n                                  label: 'php',\n                                  is_disabled: true // 可以通过\n                              },\n                              {\n                                  value: 'go',\n                                  label: 'go'\n                              },\n                              {\n                                  value: 'java',\n                                  label: 'java'\n                              },\n                          ],\n                      },\n                  ],\n                  value: '',\n              };\n          }\n      };\n  <\/script>\n")])])])],2),a("h3",[e._v("自定义节点展示")]),e._m(6),a("demo-block",[a("template",{slot:"source"},[a("aex-demo5")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("  <aex-cascader placeholder=\"单选搜索\" :options=\"options\" filterable>\n      <template slot-scope=\"{ node, data }\">\n          <span>{{ data.label }}</span>\n          \x3c!-- 不是叶子节点，就展示下级的数量 --\x3e\n          <span v-if=\"!node.isLeaf\"> ({{ data.children.length }}) </span>\n      </template>\n  </aex-cascader>\n  <script>\n      let id = 0;\n\n      export default {\n          data() {\n              return {\n                  options: [{\n                          value: 'fontend',\n                          label: '前端',\n                          children: [{\n                                  value: 'js',\n                                  label: 'js'\n                              },\n                              {\n                                  value: 'css',\n                                  label: 'css',\n                                  disabled: true // option里 设置禁用\n                              },\n                              {\n                                  value: 'vue',\n                                  label: 'vue',\n                                  children: [{\n                                          value: 'aex-ui',\n                                          label: 'aex-ui'\n                                      },\n                                      {\n                                          value: 'element',\n                                          label: 'element'\n                                      },\n                                      {\n                                          value: 'iview',\n                                          label: 'iview'\n                                      },\n                                  ],\n                              },\n                          ],\n                      },\n                      {\n                          value: 'backtend',\n                          label: '后端',\n                          children: [{\n                                  value: 'php',\n                                  label: 'php',\n                                  is_disabled: true // 可以通过\n                              },\n                              {\n                                  value: 'go',\n                                  label: 'go'\n                              },\n                              {\n                                  value: 'java',\n                                  label: 'java'\n                              },\n                          ],\n                      },\n                  ],\n                  value: '',\n              };\n          }\n      };\n  <\/script>\n")])])])],2),a("h3",[e._v("面板")]),a("p",[e._v("只是没有了下拉选择器及其下拉框的相关属性，其它属性则与下拉选择器一样")]),a("demo-block",[a("template",{slot:"source"},[a("aex-demo6")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v("  <aex-cascader-panel :options=\"options\" />\n  <script>\n      let id = 0;\n\n      export default {\n          data() {\n              return {\n                  options: [{\n                          value: 'fontend',\n                          label: '前端',\n                          children: [{\n                                  value: 'js',\n                                  label: 'js'\n                              },\n                              {\n                                  value: 'css',\n                                  label: 'css',\n                                  disabled: true // option里 设置禁用\n                              },\n                              {\n                                  value: 'vue',\n                                  label: 'vue',\n                                  children: [{\n                                          value: 'aex-ui',\n                                          label: 'aex-ui'\n                                      },\n                                      {\n                                          value: 'element',\n                                          label: 'element'\n                                      },\n                                      {\n                                          value: 'iview',\n                                          label: 'iview'\n                                      },\n                                  ],\n                              },\n                          ],\n                      },\n                      {\n                          value: 'backtend',\n                          label: '后端',\n                          children: [{\n                                  value: 'php',\n                                  label: 'php',\n                                  is_disabled: true // 可以通过\n                              },\n                              {\n                                  value: 'go',\n                                  label: 'go'\n                              },\n                              {\n                                  value: 'java',\n                                  label: 'java'\n                              },\n                          ],\n                      },\n                  ],\n                  value: '',\n              };\n          }\n      };\n  <\/script>\n")])])])],2),a("h3",[e._v("Cascader Attributes")]),e._m(7),a("h3",[e._v("Cascader Events")]),e._m(8),a("h3",[e._v("Cascader Methods")]),e._m(9),a("h3",[e._v("Cascader Slots")]),e._m(10),a("h3",[e._v("CascaderPanel Attributes")]),e._m(11),a("h3",[e._v("CascaderPanel Events")]),e._m(12),a("h3",[e._v("CascaderPanel Methods")]),e._m(13),a("h3",[e._v("CascaderPanel Slots")]),e._m(14),a("h3",[e._v("Props")]),e._m(15)],1)},[function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("props")]),e._v(" 添加 "),a("code",[e._v("expandTrigger")]),e._v(" 属性，可以控制子菜单打开方式（ "),a("code",[e._v("click/hover")]),e._v(" ），默认 "),a("code",[e._v("click")])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("size")]),e._v(" 控制大小， medium / small / mini"),a("br"),a("code",[e._v("clearable")]),e._v(" 属性，添加清空按钮"),a("br"),a("code",[e._v("disabled")]),e._v(" , 禁用有两种方式:"),a("br"),e._v("\n--- 可以通过给optino项添加 "),a("code",[e._v("disabled: true")]),e._v(" ."),a("br"),e._v("\n--- 可以通过给props 添加 "),a("code",[e._v("disabled")]),e._v(" 来禁用.\n"),a("code",[e._v("show-all-levels")]),e._v(" 属性: 是否显示完整的路径，设置为false则仅显示最后一级")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("props")]),e._v(" 添加 "),a("code",[e._v("multiple:true")]),e._v(" 属性，开启多选模式，是 "),a("code",[e._v("tag")]),e._v(" 组件来展示选中项"),a("br"),e._v("\n默认会展示所有已选中的选项的Tag，你可以使用collapse-tags来折叠Tag")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[a("code",[e._v("props")]),e._v(" 添加 "),a("code",[e._v("checkStrictly: true")]),e._v(" 属性，可以选择任意级别的节点项，")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[e._v("当选中某一级时，动态加载该级下的选项："),a("br"),e._v("\n通过 "),a("code",[e._v("lazy")]),e._v(" 开启动态加载"),a("br"),e._v("\n并通过 "),a("code",[e._v("lazyload")]),e._v(" 来设置加载数据源的方法: function(node, resolve)， node 为当前点击的节点， resolve 为数据加载完成的回调(必须调用)"),a("br"),e._v("\n为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为leaf，可通过props.leaf修改)，否则会简单的以有无子节点来判断是否为叶子节点。")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[e._v("将 "),a("code",[e._v("filterable")]),e._v(" 赋值为 "),a("code",[e._v("true")]),e._v(" 即可打开搜索功能，默认会匹配节点的 "),a("code",[e._v("label")]),e._v(" 或所有父节点的 "),a("code",[e._v("label")]),e._v(" (由 "),a("code",[e._v("show-all-levels")]),e._v(" 决定)中包含输入值的选项。"),a("br"),e._v("\n可以用 "),a("code",[e._v("filter-method")]),e._v(" 自定义搜索逻辑，接受一个函数，第一个参数是节点 "),a("code",[e._v("node")]),e._v(" ，第二个参数是搜索关键词 "),a("code",[e._v("keyword")]),e._v(" ，通过返回布尔值表示是否命中。")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("p",[e._v("可以通过 "),a("code",[e._v("scoped slot")]),e._v(" 对级联选择器的备选项的节点内容进行自定义，"),a("br"),e._v("\nscoped slot会传入两个字段 "),a("code",[e._v("node")]),e._v(" 和 "),a("code",[e._v("data")]),e._v(" ，分别表示当前节点的 Node 对象和数据。")])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value / v-model")]),a("td",[e._v("选中项绑定值")]),a("td",[e._v("-")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("options")]),a("td",[e._v("可选项数据源，键名可通过 "),a("code",[e._v("Props")]),e._v(" 属性配置")]),a("td",[e._v("array")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("props")]),a("td",[e._v("配置选项，具体见下表")]),a("td",[e._v("object")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("size")]),a("td",[e._v("尺寸")]),a("td",[e._v("string")]),a("td",[e._v("medium / small / mini")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("placeholder")]),a("td",[e._v("输入框占位文本")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("请选择")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("是否禁用")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("clearable")]),a("td",[e._v("是否支持清空选项")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("show-all-levels")]),a("td",[e._v("输入框中是否显示选中值的完整路径")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("collapse-tags")]),a("td",[e._v("多选模式下是否折叠Tag")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("separator")]),a("td",[e._v("选项分隔符")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("斜杠' / '")])]),a("tr",[a("td",[e._v("filterable")]),a("td",[e._v("是否可搜索选项")]),a("td",[e._v("boolean")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("filter-method")]),a("td",[e._v("自定义搜索逻辑，第一个参数是节点 "),a("code",[e._v("node")]),e._v(" ，第二个参数是搜索关键词 "),a("code",[e._v("keyword")]),e._v(" ，通过返回布尔值表示是否命中")]),a("td",[e._v("function(node, keyword)")]),a("td",[e._v("-")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("debounce")]),a("td",[e._v("搜索关键词输入的去抖延迟，毫秒")]),a("td",[e._v("number")]),a("td",[e._v("—")]),a("td",[e._v("300")])]),a("tr",[a("td",[e._v("before-filter")]),a("td",[e._v("筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选")]),a("td",[e._v("function(value)")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("popper-class")]),a("td",[e._v("自定义浮层类名")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("—")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[e._v("change")]),a("td",[e._v("当选中节点变化时触发")]),a("td",[e._v("选中节点的值")])]),a("tr",[a("td",[e._v("expand-change")]),a("td",[e._v("当展开节点发生变化时触发")]),a("td",[e._v("各父级选项值组成的数组")])]),a("tr",[a("td",[e._v("blur")]),a("td",[e._v("当失去焦点时触发")]),a("td",[e._v("(event: Event)")])]),a("tr",[a("td",[e._v("focus")]),a("td",[e._v("当获得焦点时触发")]),a("td",[e._v("(event: Event)")])]),a("tr",[a("td",[e._v("visible-change")]),a("td",[e._v("下拉框出现/隐藏时触发")]),a("td",[e._v("出现则为 true，隐藏则为 false")])]),a("tr",[a("td",[e._v("remove-tag")]),a("td",[e._v("在多选模式下，移除Tag时触发")]),a("td",[e._v("移除的Tag对应的节点的值")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("方法名")]),a("th",[e._v("说明")]),a("th",[e._v("参数")])])]),a("tbody",[a("tr",[a("td",[e._v("getCheckedNodes")]),a("td",[e._v("获取选中的节点")]),a("td",[e._v("(leafOnly) 是否只是叶子节点，默认值为 "),a("code",[e._v("false")])])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")])])]),a("tbody",[a("tr",[a("td",[e._v("-")]),a("td",[e._v("自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据")])]),a("tr",[a("td",[e._v("empty")]),a("td",[e._v("无匹配选项时的内容")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("value / v-model")]),a("td",[e._v("选中项绑定值")]),a("td",[e._v("-")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("options")]),a("td",[e._v("可选项数据源，键名可通过 "),a("code",[e._v("Props")]),e._v(" 属性配置")]),a("td",[e._v("array")]),a("td",[e._v("—")]),a("td",[e._v("—")])]),a("tr",[a("td",[e._v("props")]),a("td",[e._v("配置选项，具体见下表")]),a("td",[e._v("object")]),a("td",[e._v("—")]),a("td",[e._v("—")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("事件名称")]),a("th",[e._v("说明")]),a("th",[e._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[e._v("change")]),a("td",[e._v("当选中节点变化时触发")]),a("td",[e._v("选中节点的值")])]),a("tr",[a("td",[e._v("expand-change")]),a("td",[e._v("当展开节点发生变化时触发")]),a("td",[e._v("各父级选项值组成的数组")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("方法名")]),a("th",[e._v("说明")]),a("th",[e._v("参数")])])]),a("tbody",[a("tr",[a("td",[e._v("getCheckedNodes")]),a("td",[e._v("获取选中的节点数组")]),a("td",[e._v("(leafOnly) 是否只是叶子节点，默认值为 "),a("code",[e._v("false")])])]),a("tr",[a("td",[e._v("clearCheckedNodes")]),a("td",[e._v("清空选中的节点")]),a("td",[e._v("-")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("名称")]),a("th",[e._v("说明")])])]),a("tbody",[a("tr",[a("td",[e._v("-")]),a("td",[e._v("自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据")])])])])},function(){var e=this,a=e.$createElement,a=e._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选值")]),a("th",[e._v("默认值")])])]),a("tbody",[a("tr",[a("td",[e._v("expandTrigger")]),a("td",[e._v("次级菜单的展开方式")]),a("td",[e._v("string")]),a("td",[e._v("click / hover")]),a("td",[e._v("'click'")])]),a("tr",[a("td",[e._v("multiple")]),a("td",[e._v("是否多选")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("checkStrictly")]),a("td",[e._v("是否严格的遵守父子节点不互相关联")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("emitPath")]),a("td",[e._v("在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("true")])]),a("tr",[a("td",[e._v("lazy")]),a("td",[e._v("是否动态加载子节点，需与 lazyLoad 方法结合使用")]),a("td",[e._v("boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),a("tr",[a("td",[e._v("lazyLoad")]),a("td",[e._v("加载动态数据的方法，仅在 lazy 为 true 时有效")]),a("td",[e._v("function(node, resolve)， "),a("code",[e._v("node")]),e._v(" 为当前点击的节点， "),a("code",[e._v("resolve")]),e._v(" 为数据加载完成的回调(必须调用)")]),a("td",[e._v("-")]),a("td",[e._v("-")])]),a("tr",[a("td",[e._v("value")]),a("td",[e._v("指定选项的值为选项对象的某个属性值")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("'value'")])]),a("tr",[a("td",[e._v("label")]),a("td",[e._v("指定选项标签为选项对象的某个属性值")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("'label'")])]),a("tr",[a("td",[e._v("children")]),a("td",[e._v("指定选项的子选项为选项对象的某个属性值")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("'children'")])]),a("tr",[a("td",[e._v("disabled")]),a("td",[e._v("指定选项的禁用为选项对象的某个属性值")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("'disabled'")])]),a("tr",[a("td",[e._v("leaf")]),a("td",[e._v("指定选项的叶子节点的标志位为选项对象的某个属性值")]),a("td",[e._v("string")]),a("td",[e._v("—")]),a("td",[e._v("'leaf'")])])])])}],!1,null,null,null);a.default=t.exports}}]);