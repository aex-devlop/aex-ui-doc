(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(t,e,n){"use strict";n.r(e);var a=n(138),r={name:"App",components:{SideBar:n(315).a},data:function(){return{activeIndex:"guide"}},computed:{routeConf:function(){return a.a.children}}},n=(n(323),n(1)),r=Object(n.a)(r,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"doc-components"},[e("side-bar",{attrs:{activeIndex:t.activeIndex,routeConf:t.routeConf}}),e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-components__content"}},[e("router-view")],1),e("aex-backtop",{attrs:{target:".doc-components__content"}})],1)},[],!1,null,null,null);e.default=r.exports},313:function(t,e,n){},314:function(t,e,n){"use strict";n(313)},315:function(t,e,n){"use strict";var a={name:"SideBar",props:{activeIndex:String,routeConf:Array},data:function(){return{defaultActive:this.activeIndex}}},n=(n(314),n(1)),a=Object(n.a)(a,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-sidebar"}},[a("aex-menu",{attrs:{"default-active":n.defaultActive,router:""}},[n._l(n.routeConf,function(t,e){return[t.group?[a("aex-menu-item-group",{key:e},[a("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.title))]),n._l(t.group,function(t){return a("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t\t")])})],2)]:[a("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t")])]]})],2)],1)},[],!1,null,null,null);e.a=a.exports},318:function(t,e,n){},323:function(t,e,n){"use strict";n(318)}}]);