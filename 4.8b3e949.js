(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(t,e,n){"use strict";n.r(e);var r=n(137),a={components:{SideBar:n(310).a},data:function(){return{activeIndex:"articles"}},computed:{routeConf:function(){return r.a.children}}},n=(n(322),n(1)),a=Object(n.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"doc-source"},[e("side-bar",{attrs:{activeIndex:t.activeIndex,routeConf:t.routeConf}}),e("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-source__content"}},[e("router-view")],1),e("aex-backtop",{attrs:{target:".doc-source__content"}})],1)},[],!1,null,null,null);e.default=a.exports},308:function(t,e,n){},309:function(t,e,n){"use strict";n(308)},310:function(t,e,n){"use strict";var r={name:"SideBar",props:{activeIndex:String,routeConf:Array},data:function(){return{defaultActive:this.activeIndex}}},n=(n(309),n(1)),r=Object(n.a)(r,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("aex-scrollbar",{attrs:{tag:"div","wrap-class":"doc-sidebar"}},[r("aex-menu",{attrs:{"default-active":n.defaultActive,router:""}},[n._l(n.routeConf,function(t,e){return[t.group?[r("aex-menu-item-group",{key:e},[r("span",{attrs:{slot:"title"},slot:"title"},[n._v(n._s(t.title))]),n._l(t.group,function(t){return r("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t\t")])})],2)]:[r("aex-menu-item",{key:t.name,attrs:{index:t.path}},[n._v("\n\t\t\t\t\t"+n._s(t.title)+"\n\t\t\t\t")])]]})],2)],1)},[],!1,null,null,null);e.a=r.exports},317:function(t,e,n){},322:function(t,e,n){"use strict";n(317)}}]);