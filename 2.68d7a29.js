(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{244:function(t,e,n){"use strict";n.r(e);var a=n(176),r={name:"App",components:{SideBar:n(293).a},data:function(){return{activeIndex:"guide"}},computed:{routeConf:function(){return a.a.children}}},n=(n(299),n(2)),r=Object(n.a)(r,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"doc-components"},[e("side-bar",{attrs:{activeIndex:t.activeIndex,routeConf:t.routeConf}}),e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-components__content"}},[e("router-view")],1),e("aex-backtop",{attrs:{target:".doc-components__content"}})],1)},[],!1,null,null,null);e.default=r.exports},289:function(t,e,n){},290:function(t,e,n){"use strict";n(289)},293:function(t,e,n){"use strict";var a={name:"SideBar",props:{activeIndex:String,routeConf:Array},data:function(){return{defaultActive:this.activeIndex}}},n=(n(290),n(2)),a=Object(n.a)(a,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-sidebar"}},[a("aex-menu",{attrs:{"default-active":n.defaultActive,router:""}},n._l(n.routeConf,function(t,e){return a("aex-menu-item-group",{key:e,class:!t.group&&"no-group"},[a("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.title))]),n._l(t.group,function(t){return a("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n                "+n._s(t.title)+"\n            ")])})],2)}),1)],1)},[],!1,null,null,null);e.a=a.exports},294:function(t,e,n){},299:function(t,e,n){"use strict";n(294)}}]);