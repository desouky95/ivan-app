(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{298:function(t,e,n){"use strict";n.r(e);var c,o=n(140);!function(t){t.primary="primary",t.secondary="secondary"}(c||(c={}));var l=Object(o.a)({props:{color:{type:String,default:c.primary}},emits:["clicked"],methods:{emitValue:function(t){this.$emit("clicked",t)}},computed:{getButtonColor:function(){return"btn-".concat(this.color)}}}),r=n(59),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"i-btn",on:{click:t.emitValue}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);var c=n(298),o=n(140),l=Object(o.a)({mounted:function(){this.$i18n.setLocale(localStorage.getItem("i18n")||"en")},components:{Button:c.default},methods:{selectLanguage:function(t){this.$store.commit("setLanguage",t),this.$i18n.setLocale(t),this.$router.push("destination")}}}),r=n(59),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container fullscreen"},[n("div",{staticClass:"align-items-center flex-column h-100 justify-content-center row"},[n("Button",{staticClass:"col-6 mb-4",attrs:{color:"secondary"},on:{clicked:function(e){return t.selectLanguage("ar")}}},[t._v("اللغة العربية")]),t._v(" "),n("Button",{staticClass:"col-6",on:{clicked:function(e){return t.selectLanguage("en")}}},[t._v("English")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);