(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-680a8264"],{"3b2b":function(t,n,e){var r=e("7726"),i=e("5dbc"),a=e("86cc").f,o=e("9093").f,c=e("aae3"),u=e("0bfb"),s=r.RegExp,h=s,f=s.prototype,d=/a/g,p=/a/g,l=new s(d)!==d;if(e("9e1e")&&(!l||e("79e5")((function(){return p[e("2b4c")("match")]=!1,s(d)!=d||s(p)==p||"/a/i"!=s(d,"i")})))){s=function(t,n){var e=this instanceof s,r=c(t),a=void 0===n;return!e&&r&&t.constructor===s&&a?t:i(l?new h(r&&!a?t.source:t,n):h((r=t instanceof s)?t.source:t,r&&a?u.call(t):n),e?this:f,s)};for(var v=function(t){t in s||a(s,t,{configurable:!0,get:function(){return h[t]},set:function(n){h[t]=n}})},m=o(h),g=0;m.length>g;)v(m[g++]);f.constructor=s,s.prototype=f,e("2aba")(r,"RegExp",s)}e("7a56")("RegExp")},"6c6e":function(t,n,e){},"98ba":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container-onepage-height",attrs:{id:"landing-container"}},[e("div"),e("div",{staticClass:"container container-onepage",attrs:{id:"landing"}},[e("div",{staticClass:"container"},[e("div",{domProps:{innerHTML:t._s(t.projektHTML)}})]),t.invalidHTML?e("div",[t._v("\n                HTML Code nicht valide\n                "),e("b-button",{attrs:{variant:"danger"},on:{click:function(n){return t.showInvalidHTML()}}},[t._v("\n                    Trotzdem anzeigen\n                ")])],1):t._e()])])])},i=[],a=(e("3b2b"),e("96cf"),e("1da1")),o=(e("7f7f"),"https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Projekte"),c={name:"Projekte",data:function(){return{name:this.$route.params.name,projektHTML:"",invalidHTML:""}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCode();case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),watch:{$route:function(t,n){this.name=t.params.name},name:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCode();case 2:case"end":return t.stop()}}),t,this)})));function n(n,e){return t.apply(this,arguments)}return n}()},methods:{validHTMLCode:function(t){var n=new RegExp("^((<(\"[^\"]*\"|'[^']*'|[^'\">])*>)((.|\\n)*)(</(\"[^\"]*\"|'[^']*'|[^'\">])*>)\\n*)*$");return n.test(t)},showInvalidHTML:function(){this.invalidHTML&&(this.projektHTML=this.invalidHTML,this.invalidHTML="")},fetchCode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch("".concat(o,"/").concat(this.name,".html")).then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n.text());case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).then((function(t){n.applyContent(t)}));case 1:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),applyContent:function(t){this.invalidHTML="",this.projektHTML="","404: Not Found"===t?(console.log("Seite existiert nicht"),this.projektHTML="<h1> Diese Seite existiert nocht nicht </h1>"):this.validHTMLCode(t)?this.projektHTML=t:(this.invalidHTML=t,console.log("HTML Code nicht valide:"),console.log(t))}}},u=c,s=(e("bae8"),e("2877")),h=Object(s["a"])(u,r,i,!1,null,null,null);n["default"]=h.exports},aae3:function(t,n,e){var r=e("d3f4"),i=e("2d95"),a=e("2b4c")("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==i(t))}},bae8:function(t,n,e){"use strict";e("6c6e")}}]);
//# sourceMappingURL=chunk-680a8264.e205689f.js.map