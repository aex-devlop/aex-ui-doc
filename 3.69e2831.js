(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{291:function(t,e,n){"use strict";n.r(e);var r=n(183),a={components:{SideBar:n(301).a},data:function(){return{activeIndex:"code-style"}},computed:{routeConf:function(){return r.a.children}}},n=(n(312),n(1)),a=Object(n.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"doc-rules"},[e("side-bar",{attrs:{activeIndex:t.activeIndex,routeConf:t.routeConf}}),e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-rules__content"}},[e("router-view")],1),e("aex-backtop",{attrs:{target:".doc-rules__content"}})],1)},[],!1,null,null,null);e.default=a.exports},299:function(t,e,n){},300:function(t,e,n){"use strict";n(299)},301:function(t,e,n){"use strict";var r={name:"SideBar",props:{activeIndex:String,routeConf:Array},data:function(){return{defaultActive:this.activeIndex}}},n=(n(300),n(1)),r=Object(n.a)(r,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-sidebar"}},[r("aex-menu",{attrs:{"default-active":n.defaultActive,router:""}},[n._l(n.routeConf,function(t,e){return[t.group?[r("aex-menu-item-group",{key:e},[r("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.title))]),n._l(t.group,function(t){return r("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t\t")])})],2)]:[r("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t")])]]})],2)],1)},[],!1,null,null,null);e.a=r.exports},307:function(t,e,n){},312:function(t,e,n){"use strict";n(307)}}]);