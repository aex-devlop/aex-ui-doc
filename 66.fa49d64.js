(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{294:function(e,t,i){"use strict";i.r(t);var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i,n=arguments[t];for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n={name:"component-doc",components:{"aex-demo0":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{width:"400px"}},[t("aex-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList}},[t("aex-button",{attrs:{size:"small",type:"outline",icon:"aex-icon-plus"}},[e._v("上传")]),e._v(" "),t("div",{staticClass:"aex-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)])},staticRenderFns:[]},{data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$msgbox("确定移除 "+e.name+"？")}}}),"aex-demo1":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{attrs:{src:e.imageUrl}}):t("i",{staticClass:"aex-icon-plus"})])],1)},staticRenderFns:[]},{data:function(){return{imageUrl:""}},methods:{handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,e=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),e||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&e}}}),"aex-demo2":n({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("aex-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[e("i",{staticClass:"aex-icon-plus"})]),t._v(" "),e("aex-dialog",{attrs:{visible:t.dialogVisible,custom:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},{data:function(){return{dialogImageUrl:"",dialogVisible:!1}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}}),"aex-demo3":n({render:function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",[n("aex-upload",{attrs:{action:"#","list-type":"picture-card","auto-upload":!1,"on-change":i.onChange},scopedSlots:i._u([{key:"file",fn:function(e){var t=e.file;return n("div",{},[n("img",{staticClass:"aex-upload-list__item-thumbnail",attrs:{src:t.url,alt:""}}),i._v(" "),n("span",{staticClass:"aex-upload-list__item-actions"},[n("span",{staticClass:"aex-upload-list__item-preview",on:{click:function(e){i.handlePictureCardPreview(t)}}},[n("i",{staticClass:"aex-icon-zoom-in"})]),i._v(" "),i.disabled?i._e():n("span",{staticClass:"aex-upload-list__item-delete",on:{click:function(e){i.handleRemove(t)}}},[n("i",{staticClass:"aex-icon-error"})])])])}}])},[n("i",{staticClass:"aex-icon-plus",attrs:{slot:"default"},slot:"default"})]),i._v(" "),n("aex-dialog",{attrs:{visible:i.dialogVisible,custom:""},on:{"update:visible":function(e){i.dialogVisible=e}}},[n("img",{attrs:{width:"100%",src:i.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},{data:function(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1}},methods:{handleRemove:function(e){console.log(e)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},onChange:function(e,t){console.log("onChange",e,t)}}}),"aex-demo4":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticStyle:{width:"400px"}},[t("aex-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[t("aex-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"aex-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)])},staticRenderFns:[]},{data:function(){return{fileList:[{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"},{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"}]}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}}),"aex-demo5":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[t("aex-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"aex-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},staticRenderFns:[]},{data:function(){return{fileList:[{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"},{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"}]}},methods:{handleChange:function(e,t){this.fileList=t.slice(-3)}}}),"aex-demo6":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[t("i",{staticClass:"aex-icon-upload aex-icon-top"}),e._v(" "),t("div",{staticClass:"aex-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),e._v(" "),t("div",{staticClass:"aex-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])],1)},staticRenderFns:[]},{}),"aex-demo7":n({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("aex-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1}},[t("aex-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),t("aex-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传")]),e._v(" "),t("div",{staticClass:"aex-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},staticRenderFns:[]},{data:function(){return{fileList:[{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"},{name:"dog.jpeg",url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg"}]}},methods:{submitUpload:function(){this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}})}},i=i(1),n=Object(i.a)(n,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h2",[e._v("Upload 上传")]),t("p",[e._v("通过点击或者拖拽上传文件")]),t("h3",[e._v("点击上传")]),e._m(0),t("demo-block",[t("template",{slot:"source"},[t("aex-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style=\'width:400px\'>\n    <aex-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">\n        <aex-button size="small" type="outline" icon=\'aex-icon-plus\'>上传</aex-button>\n        <div slot="tip" class="aex-upload__tip">只能上传jpg/png文件，且不超过500kb</div>\n    </aex-upload>\n</div>\n<script>\n    export default {\n        data() {\n            return {\n                fileList: [{\n                    name: \'food.jpeg\',\n                    url: \'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100\'\n                }, {\n                    name: \'food2.jpeg\',\n                    url: \'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100\'\n                }]\n            };\n        },\n        methods: {\n            handleRemove(file, fileList) {\n                console.log(file, fileList);\n            },\n            handlePreview(file) {\n                console.log(file);\n            },\n            handleExceed(files, fileList) {\n                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);\n            },\n            beforeRemove(file, fileList) {\n                return this.$msgbox(`确定移除 ${ file.name }？`);\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("用户头像上传")]),e._m(1),t("demo-block",[t("template",{slot:"source"},[t("aex-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">\n    <img v-if="imageUrl" :src="imageUrl">\n    <i v-else class="aex-icon-plus"></i>\n</aex-upload>\n\n<script>\n    export default {\n        data() {\n            return {\n                imageUrl: \'\'\n            };\n        },\n        methods: {\n            handleAvatarSuccess(res, file) {\n                this.imageUrl = URL.createObjectURL(file.raw);\n            },\n            beforeAvatarUpload(file) {\n                const isJPG = file.type === \'image/jpeg\';\n                const isLt2M = file.size / 1024 / 1024 < 2;\n\n                if (!isJPG) {\n                    this.$message.error(\'上传头像图片只能是 JPG 格式!\');\n                }\n                if (!isLt2M) {\n                    this.$message.error(\'上传头像图片大小不能超过 2MB!\');\n                }\n                return isJPG && isLt2M;\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("照片墙")]),e._m(2),t("demo-block",[t("template",{slot:"source"},[t("aex-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">\n    <i class="aex-icon-plus"></i>\n</aex-upload>\n<aex-dialog :visible.sync="dialogVisible" custom>\n    <img width="100%" :src="dialogImageUrl" alt="">\n</aex-dialog>\n<script>\n    export default {\n        data() {\n            return {\n                dialogImageUrl: \'\',\n                dialogVisible: false\n            };\n        },\n        methods: {\n            handleRemove(file, fileList) {\n                console.log(file, fileList);\n            },\n            handlePictureCardPreview(file) {\n                this.dialogImageUrl = file.url;\n                this.dialogVisible = true;\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("文件缩略图")]),e._m(3),t("demo-block",[t("template",{slot:"source"},[t("aex-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload action="#" list-type="picture-card" :auto-upload="false" :on-change=\'onChange\'>\n    <i slot="default" class="aex-icon-plus"></i>\n    <div slot="file" slot-scope="{file}">\n        <img class="aex-upload-list__item-thumbnail" :src="file.url" alt="">\n        <span class="aex-upload-list__item-actions">\n            <span class="aex-upload-list__item-preview" @click="handlePictureCardPreview(file)">\n                <i class="aex-icon-zoom-in"></i>\n            </span>\n            <span v-if="!disabled" class="aex-upload-list__item-delete" @click="handleRemove(file)">\n                <i class="aex-icon-error"></i>\n            </span>\n        </span>\n    </div>\n</aex-upload>\n\n<aex-dialog :visible.sync="dialogVisible" custom>\n    <img width="100%" :src="dialogImageUrl" alt="">\n</aex-dialog>\n<script>\n    export default {\n        data() {\n            return {\n                dialogImageUrl: \'\',\n                dialogVisible: false,\n                disabled: false\n            };\n        },\n        methods: {\n            handleRemove(file) {\n                console.log(file);\n            },\n            handlePictureCardPreview(file) {\n                this.dialogImageUrl = file.url;\n                this.dialogVisible = true;\n            },\n            onChange(file, fileList) {\n                console.log(\'onChange\', file, fileList)\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("图片列表缩略图")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style=\'width:400px\'>\n    <aex-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" list-type="picture">\n        <aex-button size="small" type="primary">点击上传</aex-button>\n        <div slot="tip" class="aex-upload__tip">只能上传jpg/png文件，且不超过500kb</div>\n    </aex-upload>\n</div>\n<script>\n    export default {\n        data() {\n            return {\n                fileList: [{\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }, {\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }]\n            };\n        },\n        methods: {\n            handleRemove(file, fileList) {\n                console.log(file, fileList);\n            },\n            handlePreview(file) {\n                console.log(file);\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("上传文件列表控制")]),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("aex-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList">\n    <aex-button size="small" type="primary">点击上传</aex-button>\n    <div slot="tip" class="aex-upload__tip">只能上传jpg/png文件，且不超过500kb</div>\n</aex-upload>\n<script>\n    export default {\n        data() {\n            return {\n                fileList: [{\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }, {\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }]\n            };\n        },\n        methods: {\n            handleChange(file, fileList) {\n                this.fileList = fileList.slice(-3);\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("拖拽上传")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>\n    <i class="aex-icon-upload aex-icon-top"></i>\n    <div class="aex-upload__text">将文件拖到此处，或<em>点击上传</em></div>\n    <div class="aex-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>\n</aex-upload>\n')])])])],2),t("h3",[e._v("手动上传")]),t("demo-block",[t("template",{slot:"source"},[t("aex-demo7")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<aex-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">\n    <aex-button slot="trigger" size="small" type="primary">选取文件</aex-button>\n    <aex-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</aex-button>\n    <div slot="tip" class="aex-upload__tip">只能上传jpg/png文件，且不超过500kb</div>\n</aex-upload>\n<script>\n    export default {\n        data() {\n            return {\n                fileList: [{\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }, {\n                    name: \'dog.jpeg\',\n                    url: \'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3681880960,455182084&fm=26&gp=0.jpg\'\n                }]\n            };\n        },\n        methods: {\n            submitUpload() {\n                this.$refs.upload.submit();\n            },\n            handleRemove(file, fileList) {\n                console.log(file, fileList);\n            },\n            handlePreview(file) {\n                console.log(file);\n            }\n        }\n    }\n<\/script>\n')])])])],2),t("h3",[e._v("Attribute")]),e._m(5),t("h3",[e._v("Slot")]),e._m(6),t("h3",[e._v("Methods")]),e._m(7)],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置 "),t("code",[e._v("limit")]),e._v(" 和 "),t("code",[e._v("on-exceed")]),e._v(" 来限制上传文件的个数和定义超出限制时的行为。可通过设置 "),t("code",[e._v("before-remove")]),e._v(" 来阻止文件移除操作。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("before-upload")]),e._v(" 限制用户上传的图片格式和大小。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("list-type")]),e._v(" 属性来设置文件列表的样式。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("使用 "),t("code",[e._v("scoped-slot")]),e._v(" 去设置缩略图模版。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("通过 "),t("code",[e._v("on-change")]),e._v(" 钩子函数来对列表进行控制")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("action")]),t("td",[e._v("必选参数，上传的地址")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("headers")]),t("td",[e._v("设置上传的请求头部")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("multiple")]),t("td",[e._v("是否支持多选文件")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("data")]),t("td",[e._v("上传时附带的额外参数")]),t("td",[e._v("object")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("上传的文件字段名")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("file")])]),t("tr",[t("td",[e._v("with-credentials")]),t("td",[e._v("支持发送 cookie 凭证信息")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("show-file-list")]),t("td",[e._v("是否显示已上传文件列表")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("drag")]),t("td",[e._v("是否启用拖拽上传")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("accept")]),t("td",[e._v("接受上传的"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept"}},[e._v("文件类型")]),e._v("（thumbnail-mode 模式下此参数无效）")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-preview")]),t("td",[e._v("点击文件列表中已上传的文件时的钩子")]),t("td",[e._v("function(file)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-remove")]),t("td",[e._v("文件列表移除文件时的钩子")]),t("td",[e._v("function(file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-success")]),t("td",[e._v("文件上传成功时的钩子")]),t("td",[e._v("function(response, file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-error")]),t("td",[e._v("文件上传失败时的钩子")]),t("td",[e._v("function(err, file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-progress")]),t("td",[e._v("文件上传时的钩子")]),t("td",[e._v("function(event, file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-change")]),t("td",[e._v("文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用")]),t("td",[e._v("function(file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("before-upload")]),t("td",[e._v("上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。")]),t("td",[e._v("function(file)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("before-remove")]),t("td",[e._v("删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。")]),t("td",[e._v("function(file, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("list-type")]),t("td",[e._v("文件列表的类型")]),t("td",[e._v("string")]),t("td",[e._v("text/picture/picture-card")]),t("td",[e._v("text")])]),t("tr",[t("td",[e._v("auto-upload")]),t("td",[e._v("是否在选取文件后立即进行上传")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("file-list")]),t("td",[e._v("上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]")]),t("td",[e._v("array")]),t("td",[e._v("—")]),t("td",[e._v("[]")])]),t("tr",[t("td",[e._v("http-request")]),t("td",[e._v("覆盖默认的上传行为，可以自定义上传的实现")]),t("td",[e._v("function")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("limit")]),t("td",[e._v("最大允许上传个数")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("on-exceed")]),t("td",[e._v("文件超出个数限制时的钩子")]),t("td",[e._v("function(files, fileList)")]),t("td",[e._v("—")]),t("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),t("th",[e._v("说明")])])]),t("tbody",[t("tr",[t("td",[e._v("trigger")]),t("td",[e._v("触发文件选择框的内容")])]),t("tr",[t("td",[e._v("tip")]),t("td",[e._v("提示说明文字")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("clearFiles")]),t("td",[e._v("清空已上传的文件列表（该方法不支持在 before-upload 中调用）")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("abort")]),t("td",[e._v("取消上传请求")]),t("td",[e._v("（ file: fileList 中的 file 对象 ）")])]),t("tr",[t("td",[e._v("submit")]),t("td",[e._v("手动上传文件列表")]),t("td",[e._v("—")])])])])}],!1,null,null,null);t.default=n.exports}}]);