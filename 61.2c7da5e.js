(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{348:function(e,t,n){"use strict";n.r(t);n=n(1),n=Object(n.a)({},function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content aex-doc"},[t("h1",[e._v("第三方登录----Telegram(电报)--授权方式为Callback")]),t("div",{staticClass:"tip"},[t("p",[e._v("资料整理: 付永顺"),t("br"),e._v("\n更新日期: 2022-03-25")])]),t("p",[e._v("最好有Telegram账户，官方提供程式码生成器（动态生成电报按钮）")]),t("p",[e._v("官方文档："),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fcore.telegram.org%2Fwidgets%2Flogin"}},[e._v("core.telegram.org/widgets/log…")])]),t("p",[e._v("中文文档："),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.letswrite.tw%2Ftelegram-login-widget"}},[e._v("www.letswrite.tw/telegram-lo…")])]),t("p",[e._v("前提：开启VPN")]),t("h3",[e._v("一：登录流程")]),t("pre",[t("code",[e._v("如果自己想试着用Telegram登录一下，可以进入官方页面进行整个登录流程操作\n地址：https://telegram.org/blog/login\n")])]),t("p",[e._v("大致分三个：")]),t("p",[e._v("1、Telegram弹框（要求输入Telegram账号：号码所在区+号码，点击NEXT）")]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b23ab486303b479fbf568fc10ea31456~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646645829978.png"}})]),t("p",[e._v("2、Telegram的app中消息弹框，点击confirm，即同意登录（或者Decline）")]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6437d5ecafbf4a319fdc7382eff86211~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646645904289.png"}})]),t("p",[e._v("3、Telegram授权登录成功页面or你的业务逻辑（此步骤已经可以通过Telegram拿到用户的电报信息，下面会详细讲解）")]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb45e07017c4485e864cdbf94d7ddcfa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646707114689.png"}})]),t("pre",[t("code",[e._v("Telegram登录按钮长这样（未登录&登录成功)\n")])]),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b20d6ad27cb849d7836cc1d1e777daaa~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646637961459.png"}})]),t("p",[e._v("以下是根据自己业务需求设置的两种样式")]),t("pre",[t("code",[e._v("可以根据需要进行样式修改（通过增加样式的权重）\n原有dom结构添加属性opcity:0，自定义样式\n")])]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7f7c5d155154271817d4fd89ff9f0b3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646645329337.png"}})]),t("h3",[e._v("二：Telegram 登入按钮生成器步骤（核心！！！）")]),t("pre",[t("code",[e._v("1、创建Telegram机器人\n")])]),t("p",[e._v("打开t.me/BotFather网站--\x3e打开Telegram Desktop--\x3e弹出Telegram消息弹窗")]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1d71e6a00994595aa5af5180c7bf7d7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646646706634.png"}})]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e170392d6f52476eb18dc4e3bee82777~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646646868183.png"}})]),t("pre",[t("code",[e._v("2、创建机器人信息\n")])]),t("ul",[t("li",[e._v("依次输入：/start--\x3e/newbot--\x3exxx(自己的机器人名称)，生成一段token即可（设置机器人其他信息可参考官网）")])]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a0f8d6ced1144a09c1b8826feeb65da~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646647216570.png"}})]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/275365a72dc44efa9d0497d4a1f43beb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646647378659.png"}})]),t("ul",[t("li",[e._v("设置机器人域名：")])]),t("p",[t("strong",[e._v("一个机器人只能设置一个有效域名（域名白名单有且有只一个，可随时更改，立马剩下）：xxx.com或IP或IP+端口号，只有在改域名下方可进行电报登录（非常关键，所有不成功都围绕这个问题！！！！！！）（设置的域名必须是能被Telegram访问到的）")])]),t("p",[e._v("依次输入：/setdomain→@fyszzxBox(手动选择或者输入上一步机器人名)→129.226.195.180(根据自己的设置)弹出Success！即可")]),t("p",[e._v("修改域名：重复楼上即可")]),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/507fe8bdd55c48bb951883c7efc7bce2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1646648029411.png"}})]),t("p",[t("strong",[e._v("（如果你想自定义Telegram按钮，不用Telgram原生按钮，从这里开始停止，直接跳到自定义引用）")])]),t("pre",[t("code",[e._v("3、修改登录按钮样式，产生出对应机器人的代码片段（即Telegram登录按钮）\n")])]),t("p",[e._v("地址："),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fcore.telegram.org%2Fwidgets%2Flogin%23widget-configuration"}},[e._v("core.telegram.org/widgets/log…")])]),t("p",[e._v("配置勾选按钮样式(根据需要进行勾选)--此处Authorization Type选择了Callback，以下都已Callback为主")]),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba75eb9e54b74b97bc3690a3b3dcc011~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?",alt:"1644655711741.png"}})]),t("p",[e._v("注意：这里的scr引入的"),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Ftelegram.org%2Fjs%2Ftelegram-widget.js"}},[e._v("telegram.org/js/telegram…")]),e._v(" 文件可查看源码了解电报登录，其中后面拼接的参数（?num）无影响，对比过文件无差异")]),t("h3",[e._v("三、引用")]),t("p",[e._v("在.html中")]),t("pre",[t("code",{staticClass:"language-js"},[e._v("\x3c!-- 想要放登入按鈕的地方，放這段 script （哪里使用哪里写）--\x3e\n<\nscript async src = \"https://telegram.org/js/telegram-widget.js?14\"\ndata - telegram - login = \"lifetifulBot\"\ndata - size = \"large\"\ndata - onauth = \"onTelegramAuth(user)\"\ndata - request - access = \"write\" >\n    <\n    /script>\n\n    <\n    !--Callback\nfunction --\x3e\n<\nscript >\n    function onTelegramAuth(user) {\n        alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');\n    } <\n    /script>\n复制代码\n")])]),t("p",[e._v("在vue中")]),t("ul",[t("li",[e._v("封装成一个子组件")])]),t("pre",[t("code",{staticClass:"language-javascript"},[e._v("< template >\n    <\n    div ref = \"telegram\"\nclass = \"test\" > < /div> <\n    /template>\n\n    <\n    script >\n    export default {\n        name: 'vue-telegram-login',\n        props: {\n            mode: {\n                type: String,\n                required: true,\n                validator(value) {\n                    return ['callback', 'redirect'].includes(value);\n                }\n            },\n            telegramLogin: {\n                type: String,\n                required: true,\n                validator(value) {\n                    return value.endsWith('bot') || value.endsWith('Bot');\n                }\n            },\n            redirectUrl: {\n                type: String,\n                default: ''\n            },\n            requestAccess: {\n                type: String,\n                default: 'write',\n                validator(value) {\n                    return ['read', 'write'].includes(value);\n                }\n            },\n            size: {\n                type: String,\n                default: 'large',\n                validator(value) {\n                    return ['small', 'medium', 'large'].includes(value);\n                }\n            },\n            userpic: {\n                type: Boolean,\n                default: true\n            },\n            radius: {\n                type: String\n            }\n        },\n        methods: {\n            onTelegramAuth(user) {\n                this.$emit('callback', user);\n            }\n        },\n        mounted() {\n            // 这里是根据步骤3的代码动态创建的，有需要可自行修改\n            const script = document.createElement('script');\n            script.async = true;\n            script.src = 'https://telegram.org/js/telegram-widget.js?14';\n            script.setAttribute('data-size', this.size);\n            script.setAttribute('data-userpic', this.userpic);\n            script.setAttribute('data-telegram-login', this.telegramLogin);\n            script.setAttribute('data-request-access', this.requestAccess);\n            if (this.radius) {\n                script.setAttribute('data-radius', this.radius);\n            }\n            if (this.mode === 'callback') {\n                window.onTelegramAuth = this.onTelegramAuth;\n                script.setAttribute('data-onauth', 'window.onTelegramAuth(user)');\n            } else {\n                script.setAttribute('data-auth-url', this.redirectUrl);\n            }\n            this.$refs.telegram.appendChild(script);\n        }\n    }; <\n/script> <\nstyle lang = \"less\" >\n    .test {\n        //这里可以自己调整外框样子\n        height: 100 px;\n        color: greenyellow;\n    } <\n    /style> <\n    style >\n    //这里可以在控制台找到Telegram的dom结构和样式，自行修改Telegram呈现的样式\n    .tgme_widget_login.large button.tgme_widget_login_button {\n        opcity: 0;\n        cursor: pointer;\n    } <\n    /style>\n\n复制代码\n")])]),t("ul",[t("li",[e._v("父组件")])]),t("pre",[t("code",{staticClass:"language-javascript"},[e._v('< template >\n    <\n    div >\n    <\n    p > 第三方登录 < /p> <\n    vue - telegram - login mode = "callback"\ntelegram - login = "YourTelegramBot"\n@callback = "yourCallbackFunction" / >\n    <\n    /div> <\n    /template> <\n    script >\n    import vueTelegramLogin from \'./vue-telegram-login.vue\';\n\nexport default {\n    components: {\n        vueTelegramLogin\n    },\n    data() {\n        return {};\n    },\n    created() {},\n    methods: {\n        yourCallbackFunction(user) {\n            console.log(user);\n            //正常回调拿到的user信息\n            //{\n            //\tauth_date: 1646705584, first_name: "zzx",…}\n            //\tauth_date: 1646705584\n            //\tfirst_name: "zzx"\n            //\thash: "9118f5e1c53d7cf3308c696565d26efc96f90d0fb59255b82bc39fd4636ddc50"\n            //\tid: 5021490450\n            //\tlast_name: "fys"\n            //\tphoto_url: "https://t.me/i/userpic/320/jvyC1v4qH7KrQqUBr5T0dK04wNm_Vr_Acl9WMynKMiuG-ToB9_E01-WCLJn8flUB.jpg"}\n            //}\n            //\t这里需要写你业务的逻辑需求\n        }\n    }; <\n    /script>\n\n    复制代码\n')])]),t("ul",[t("li",[t("strong",[e._v("自定义引用（真香香系列，不要太完美！！！！！！）")])])]),t("p",[e._v("附上资料地址："),t("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F56347902%2Ftelegram-authorization-without-default-button"}},[e._v("stackoverflow.com/questions/5…")])]),t("p",[e._v("如果是单页面，在public中的index.html文件中引入Telegram的.js文件（多页面应用雷同） index.html中")]),t("pre",[t("code",{staticClass:"language-js"},[e._v('< script src = "https://telegram.org/js/telegram-widget.js"\ntype = "text/javascript" > < /script>\n复制代码\n')])]),t("p",[e._v(".vue文件中(dom任意你写的dom结构）")]),t("pre",[t("code",{staticClass:"language-js"},[e._v("    < button @click = \"loginTelegram\" > 电报登录 < /button>\n    复制代码\n    loginTelegram() {\n        //这里唯一要做的就是把你机器人参数传入进去（获取机器人token哪里可以看到）\n        window.Telegram.Login.auth({\n            bot_id: '5136xxxxx',\n            request_access: 'write',\n            embed: 1\n        }, (data) => {\n            console.log(data, '这是回调数据'); //这里的data和之前返回的user数据和格式无差异\n            if (!data) {\n                //失败时你需要做的逻辑\n            }\n            //电报登录成功你需要做的逻辑（这里我是直接写了一个函数去调用登录成功后的业务逻辑）\n            this.yourCallbackFunction(data);\n        });\n    };\n    yourCallbackFunction(data) {\n        //我的业务逻辑\n    }\n    复制代码\n")])]),t("ul",[t("li",[e._v("未知还未解决的授权登录方式（需要大佬们帮助！！！！）")])]),t("pre",[t("code",[e._v("//你需要传入一些参数，这个可以走完整个Telegram电报登录流程，缺陷：拿不到用户信息\n//需要去了解Telegram登录源码，可能需要window.postMessage去进行一个页面间传值\n//目前还没有解决，需要有大佬提供思路和方法\nwindow.open('http://oauth.telegram.org/auth?bot_id=5136103xxxxorigin=http://129.226.195.180&embed=1&request_access=write', 'newwindow', 'height=500, width=500, top=100, left=100');\n复制代码\n5、和后端交互\n")])]),t("p",[e._v("需要把所有user信息传递给后端才能匹对成功，另外后端需要用到你设置机器人的token")]),t("pre",[t("code",[e._v("问题\n")])]),t("p",[e._v("1、Telegram登录按钮不出现")]),t("p",[e._v("引入Telegram的地方出现：Bot Domain invalid")]),t("p",[e._v("说明：已经引入成功，只是不在机器人白名单网域（代码打开地址域名和设置的白名单不一致）")]),t("p",[e._v("解决：需运维处理，进行反向代理")]),t("p",[e._v("本案例就是把129.226.195.180解析到www.test_auth_login.cc这个内部的测试地址（本机是不能被Telegram访问的，"),t("strong",[e._v("设置的域名必须能被Telegram访问到")]),e._v("） 影响：不好调试，前期只能通过模拟数据进行业务开放，或者每修改一次就打包到相应的环境查看，暂时没有找到好的调试上方，有更好的调试方法，小伙伴可以进行留言！！！！")])])}],!1,null,null,null),t.default=n.exports}}]);