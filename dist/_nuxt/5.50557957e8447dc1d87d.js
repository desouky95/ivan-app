(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{298:function(t,n,e){"use strict";e.r(n);var c,r=e(140);!function(t){t.primary="primary",t.secondary="secondary"}(c||(c={}));var o=Object(r.a)({props:{color:{type:String,default:c.primary}},emits:["clicked"],methods:{emitValue:function(t){this.$emit("clicked",t)}},computed:{getButtonColor:function(){return"btn-".concat(this.color)}}}),l=e(59),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{staticClass:"i-btn",on:{click:t.emitValue}},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},304:function(t,n,e){},307:function(t,n,e){"use strict";e(304)},312:function(t,n,e){"use strict";e.r(n);var c=e(298),r=e(140),o=Object(r.a)({components:{Button:c.default},setup:function(){},data:function(){return{desStop:this.$store.state.destionation,route:this.$store.state.route}}}),l=(e(307),e(59)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container fullscreen p-5"},[e("h2",{staticClass:"text-center"},[t._v(t._s(t.$t("tripInfo.name")))]),t._v(" "),e("div",{staticClass:"justify-content-center row my-5"},[e("div",{staticClass:"col-8"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-info"},[e("label",[t._v(t._s(t.$t("tripInfo.id")))]),t._v(" "),e("span",[t._v("23123123")])]),t._v(" "),e("div",{staticClass:"card-info"},[e("label",[t._v(t._s(t.$t("tripInfo.destination")))]),t._v(" "),e("span",[t._v(t._s(t.desStop.value))])]),t._v(" "),e("div",{staticClass:"card-info"},[e("label",[t._v(t._s(t.$t("tripInfo.route")))]),t._v(" "),e("span",[t._v(t._s(t.route.name))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("Button",{staticClass:"col-6"},[t._v(t._s(t.$t("tripInfo.confirm")))])],1)])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-info"},[e("label",[t._v("Fair")]),t._v(" "),e("span",[t._v("1.2x")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card-info"},[e("label",[t._v("Car No.")]),t._v(" "),e("span",[t._v("14D23")])])}],!1,null,null,null);n.default=component.exports}}]);