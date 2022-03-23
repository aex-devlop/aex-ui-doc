(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(t,e,n){"use strict";n.r(e);var a=[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content aex-doc"},[e("h1",[t._v("Firebase第三方登录（google）")]),e("p",[e("strong",[t._v("网址")]),t._v("：https://firebase.google.com\n"),e("strong",[t._v("准备")]),t._v("：需公司申请一个firebase账号，相应的开发人员开通相应权限\n"),e("strong",[t._v("要求")]),t._v("：开发此项目必须开启VPN")]),e("p",[t._v("参考文档：https://firebase.google.com/docs/auth/web/google-signin?authuser=0")]),e("h4",[t._v("步骤一：创建项目")]),e("p",[e("img",{attrs:{src:n(224),alt:"1642474884087"}})]),e("h4",[t._v("步骤二：添加对应应用")]),e("p",[e("img",{attrs:{src:n(225),alt:"1642475633377"}})]),e("p",[t._v("完成后点开相应的设置，即可看到详细信息和配置（根据需要npm安装或CDN引入）")]),e("p",[e("img",{attrs:{src:n(226),alt:"1642475948161"}})]),e("h4",[t._v("步骤三：设置第三方授权登录信息")]),e("p",[e("img",{attrs:{src:n(227),alt:"1642476383456"}})]),e("h4",[t._v("步骤四：js项目中使用")]),e("p",[t._v("js中安装firebse")]),e("pre",[e("code",{staticClass:"language-javascript"},[t._v("yarn add firebase\n")])]),e("p",[t._v("项目中导入")]),e("pre",[e("code",{staticClass:"language-javascript"},[t._v("import {\n    initializeApp\n} from 'firebase/app';\n//基本配置和添加应用生成的配置保持一致\nconst firebaseConfig = {\n    apiKey: 'AIzaSyAw1ksogZT8qxk1lanacGsdJm9CkTB9OcY',\n    authDomain: 'causal-bindery-334409.firebaseapp.com',\n    projectId: 'causal-bindery-334409',\n    storageBucket: 'causal-bindery-334409.appspot.com',\n    messagingSenderId: '559420313769',\n    appId: '1:559420313769:web:6b5f50e8e02845a010d9b8',\n    measurementId: 'G-S8W5K9JVLQ'\n};\n// 初始化 Firebase\nconst app = initializeApp(firebaseConfig);\nconst analytics = getAnalytics(app);\n//创建 Google 提供方对象实例(signInWithPopup,signInWithRedirect使用弹窗或者使用从定向)\nimport {\n    getAuth,\n    signInWithPopup,\n    GoogleAuthProvider\n} from 'firebase/auth';\nconst auth = getAuth();\nconst provider = new GoogleAuthProvider();\n")])]),e("pre",[e("code",{staticClass:"language-javascript"},[t._v("\t\t// 第三方谷歌登录\n\t\tgoogleLogin(type) {\n\t\t    this.authType = type;\n\t\t    signInWithPopup(auth, provider)\n\t\t        .then((result) => {\n\t\t            //result有用户的信息，根据后端要求拿需要的，如果是弹窗,授权成功会自动关闭弹窗\n\t\t            //这里处理你需要的逻辑\n\t\t        })\n\t\t        .catch((error) => {\n\t\t            //可处理授权失败后的逻辑\n\t\t            console.log(error, '错误信息');\n\t\t        });\n\t\t},\n")])]),e("p",[e("strong",[t._v("可能出现的问题：")])]),e("p",[t._v("问题一：无法唤起第三方登录弹窗？")]),e("p",[t._v("原因：网络请求报错，拿不到步骤三设置的白名单网域(重新检查配置、VPN不稳定等）、环境问题和运维沟通")]),e("pre",[e("code",{staticClass:"language-javascript"},[t._v('{\n    "projectId": "559420313769",\n    "authorizedDomains": [\n        "localhost",\n        "causal-bindery-334409.firebaseapp.com",\n        "causal-bindery-334409.web.app",\n        "www.test_auth_login.cc",\n        "www.aextest.cc",\n        "www.aex.cash",\n        "aex1.yxds.net.cn",\n        "www.aex.com"\n    ]\n}\n')])]),e("p",[t._v("问题二：正式环境无法弹起\n原因：可能需要https://apis.google.com、https://identitytoolkit.googleapis.com、https://www.googleapis.com等添加到Content-Security-Policy(csp)，具体看报错")]),e("p",[e("strong",[t._v("待优化问题：")])]),e("p",[t._v("第一次授权登录后，会自动记录Google账号（用户不能选择某个谷歌账号进行授权，除非清除浏览器缓存）")]),e("p",[t._v("firebase里面有三种Auth状态保留(local、session、none)，上述情况是默认的local保留")]),e("p",[t._v("文档：https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0")]),e("p",[t._v("后续有补充再添加...")])])}],s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a,!1,null,null,null);e.default=a.exports},224:function(t,e,n){t.exports=n.p+"static/1.8e964e3.png"},225:function(t,e,n){t.exports=n.p+"static/2.dda2d0c.png"},226:function(t,e,n){t.exports=n.p+"static/3.f1c9053.png"},227:function(t,e,n){t.exports=n.p+"static/4.d8dc22a.png"}}]);