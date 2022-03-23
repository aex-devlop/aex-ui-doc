(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{181:function(t,n,e){"use strict";e.r(n);var s=[function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("section",{staticClass:"content aex-doc"},[n("h1",[t._v("Firebase第三方登录（google）")]),n("p",[n("strong",[t._v("网址")]),t._v("：https://firebase.google.com")]),n("p",[n("strong",[t._v("准备")]),t._v("：需公司申请一个firebase账号，相应的开发人员开通相应权限\n"),n("strong",[t._v("要求")]),t._v("：开发此项目必须开启VPN")]),n("p",[t._v("参考文档：https://firebase.google.com/docs/auth/web/google-signin?authuser=0")]),n("h4",[t._v("步骤一：创建项目")]),n("p",[n("img",{attrs:{src:e(224),alt:"1642474884087"}})]),n("h4",[t._v("步骤二：添加对应应用")]),n("p",[n("img",{attrs:{src:e(225),alt:"1642475633377"}})]),n("p",[t._v("完成后点开相应的设置，即可看到详细信息和配置（根据需要npm安装或CDN引入）")]),n("p",[n("img",{attrs:{src:e(226),alt:"1642475948161"}})]),n("h4",[t._v("步骤三：设置第三方授权登录信息")]),n("p",[n("img",{attrs:{src:e(227),alt:"1642476383456"}})]),n("h4",[t._v("步骤四：js项目中使用")]),n("p",[t._v("js中安装firebse")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("yarn add firebase\n")])]),n("p",[t._v("项目中导入")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("import {\n    initializeApp\n} from 'firebase/app';\n//基本配置和添加应用生成的配置保持一致\nconst firebaseConfig = {\n    apiKey: 'AIzaSyAw1ksogZT8qxk1lanacGsdJm9CkTB9OcY',\n    authDomain: 'causal-bindery-334409.firebaseapp.com',\n    projectId: 'causal-bindery-334409',\n    storageBucket: 'causal-bindery-334409.appspot.com',\n    messagingSenderId: '559420313769',\n    appId: '1:559420313769:web:6b5f50e8e02845a010d9b8',\n    measurementId: 'G-S8W5K9JVLQ'\n};\n// 初始化 Firebase\nconst app = initializeApp(firebaseConfig);\nconst analytics = getAnalytics(app);\n//创建 Google 提供方对象实例(signInWithPopup,signInWithRedirect使用弹窗或者使用从定向)\nimport {\n    getAuth,\n    signInWithPopup,\n    GoogleAuthProvider\n} from 'firebase/auth';\nconst auth = getAuth();\nconst provider = new GoogleAuthProvider();\n")])]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("// 第三方谷歌登录\ngoogleLogin() {\n    signInWithPopup(auth, provider)\n        .then((result) => {\n            //result有用户的信息，根据后端要求拿需要的，如果是弹窗,授权成功会自动关闭弹窗\n            //这里处理你需要的逻辑\n        })\n        .catch((error) => {\n            //可处理授权失败后的逻辑\n            console.log(error, '错误信息');\n        });\n},\n")])]),n("p",[n("strong",[t._v("可能出现的问题：")])]),n("p",[t._v("问题一：无法唤起第三方登录弹窗？")]),n("p",[t._v("原因：网络请求报错，拿不到步骤三设置的白名单网域(重新检查配置、VPN不稳定等）、环境问题和运维沟通")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v('{\n    "projectId": "559420313769",\n    "authorizedDomains": [\n        "localhost",\n        "causal-bindery-334409.firebaseapp.com",\n        "causal-bindery-334409.web.app",\n        "www.test_auth_login.cc",\n        "www.aextest.cc",\n        "www.aex.cash",\n        "aex1.yxds.net.cn",\n        "www.aex.com"\n    ]\n}\n')])]),n("p",[t._v("问题二：正式环境无法弹起")]),n("p",[t._v("原因：可能需要运维将https://apis.google.com、https://identitytoolkit.googleapis.com、https://www.googleapis.com等添加到Content-Security-Policy(csp)，具体看报错")]),n("p",[n("strong",[t._v("优化问题：")])]),n("p",[n("code",[t._v("这不是bug，只是浏览器的特性，能处理的是第三方的退出和登录。如第三方每次登陆需要输入密码和账户的话，那第三方登录就没啥意义了，只是阐述有这么个问题存在，不是设置了没效果")])]),n("p",[t._v("问题三：第一次授权登录后，会自动记录Google账号，不能切换谷歌账号（除非手动清除浏览器缓存）")]),n("p",[t._v("原因：授权登录后，谷歌浏览器会自动授权登录google账号，其他浏览器也记录了账户和密码")]),n("p",[n("strong",[t._v("代码优化（两种方式）")])]),n("p",[t._v("方式一：firebase中的signOut方法")]),n("pre",[n("code",{staticClass:"language-js"},[t._v('import { getAuth, signOut } from "firebase/auth";\n\nconst auth = getAuth();\n\nsignOut(auth).then(() => {\n\n  //这里写退出登录后的逻辑处理\n\n  // Sign-out successful.\n\n}).catch((error) => {\n\n  // An error happened.\n\n});\n')])]),n("p",[t._v("方式二：修改firebase身份验证状态保留方式,firebase里面有三种Auth状态保留(local、session、none)，上述情况是默认的local保留,现在改为session(以signInWithPopup为例)")]),n("p",[t._v("网址：https://firebase.google.com/docs/auth/web/auth-state-persistence?authuser=0")]),n("pre",[n("code",{staticClass:"language-js"},[t._v('import { getAuth, setPersistence, signInWithPopup, browserSessionPersistence } from "firebase/auth";\n\nconst auth = getAuth();\n\n//browserSessionPersistence改为session固定写法\n\nsetPersistence(auth, browserSessionPersistence)\n\n  .then(() => {\n\n    //return signInWithEmailAndPassword(auth, email, password);\n\n    //return signInWithRedirect(auth, provider);\n\n   return signInWithPopup(auth, provider)//根据你使用的方式进行修改,对应上述的导入方式\n\n  })\n\n  .catch((error) => {\n\n   const errorCode = error.code;\n\n   const errorMessage = error.message;\n\n  });\n')])]),n("p",[t._v("完整代码")]),n("pre",[n("code",{staticClass:"language-js"},[t._v("// 第三方谷歌登录\ngoogleLogin() {\n\tsignOut(auth).then(() => {\n\t\tsetPersistence(auth, browserSessionPersistence)\n\t\t\t.then(() => {\n\t\t\t\treturn signInWithPopup(auth, provider)\n\t\t\t\t\t.then((result) => {\n\t\t\t\t\t\tconsole.log(result,'用户信息');\n\t\t\t\t\t\t})\n\t\t\t\t\t.catch((error) => {\n\t\t\t\t\t\tconsole.log(error, '错误信息');\n\t\t\t\t\t\t});\n\t\t\t\t\t})\n\t\t\t.catch((error) => {\n\t\t\t\t\t// Handle Errors here.\n\t\t\t\t\tconst errorCode = error.code;\n\t\t\t\t\tconst errorMessage = error.message;\n\t\t\t\t});\n\t\t\t});\n\t\t},\n")])]),n("p",[n("strong",[t._v("非代码处理（针对浏览器）")])]),n("p",[t._v("谷歌：进行谷歌授权登录后，谷歌浏览器会自动授权登录谷歌账号，手动退出浏览器的谷歌账号即可")]),n("p",[t._v("非谷歌+谷歌：在浏览器设置中不勾选记录账号和密码即可")]),n("p",[t._v("后续有补充再添加...")])])}],r=e(0),s=Object(r.a)({},function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s,!1,null,null,null);n.default=s.exports},224:function(t,n,e){t.exports=e.p+"static/1.8e964e3.png"},225:function(t,n,e){t.exports=e.p+"static/2.dda2d0c.png"},226:function(t,n,e){t.exports=e.p+"static/3.f1c9053.png"},227:function(t,n,e){t.exports=e.p+"static/4.d8dc22a.png"}}]);