(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{305:function(t,e,n){},308:function(t,e,n){"use strict";n(305)},314:function(t,e,n){"use strict";n.r(e);var r=n(140),o=Object(r.a)({data:function(){return{routesOptions:[{name:"Route 1",path:["Street1","Street2","Street3"]},{name:"Route 2",path:["Street1","Street2","Street3"]},{name:"Route 3",path:["Street1","Street2","Street3"]}],routesLength:3}},methods:{selectRoute:function(t){this.$store.commit("setRoute",t),this.$router.push("checkout")}}}),c=(n(308),n(59)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullscreen p-5"},[n("h2",{staticClass:"text-center"},[t._v(t._s(t.$t("routes")))]),t._v(" "),n("div",{staticClass:"justify-content-center d-grid row my-5 routes",style:{gridTemplateColumns:"repeat("+t.routesOptions.length+",1fr)"}},t._l(t.routesOptions,(function(e){return n("ul",{key:e,on:{click:function(n){return t.selectRoute(e)}}},[n("li",[t._v(t._s(e.name))]),t._v(" "),t._l(e.path,(function(path){return n("li",{key:path},[t._v(t._s(path))])}))],2)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);