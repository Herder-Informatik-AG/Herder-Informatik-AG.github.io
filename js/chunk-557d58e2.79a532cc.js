(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-557d58e2"],{"037b":function(t,e,n){"use strict";n("d7c2")},"18cd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-onepage-height",attrs:{id:"landing-container"}},[n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.codeSidebar",modifiers:{codeSidebar:!0}}],attrs:{id:"showCodeButton",variant:"primary"}},[t._v("Show code")]),n("b-sidebar",{attrs:{id:"codeSidebar",title:"HTML-Code",shadow:"",visible:"","bg-variant":"dark","text-variant":"light"}},[n("div",{staticClass:"px-3 py-2"},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter HTML Code here...",state:t.validHTMLCode,rows:"30"},model:{value:t.HTMLtext,callback:function(e){t.HTMLtext=e},expression:"HTMLtext"}}),n("br"),n("b-button",{attrs:{variant:"danger"},on:{click:function(e){t.HTMLtext=""}}},[t._v("Clear")])],1)])],1),n("div",{staticClass:"container container-onepage",attrs:{id:"landing"}},[n("div",{staticClass:"container"},[n("div",{domProps:{innerHTML:t._s(t.HTMLtext)}})])])])])},i=[],r=(n("3b2b"),{name:"Terminvorschau",data:function(){return{HTMLtext:""}},computed:{validHTMLCode:function(){var t=new RegExp("<(\"[^\"]*\"|'[^']*'|[^'\">])*>");return t.test(this.HTMLtext)}}}),o=r,c=(n("037b"),n("2877")),s=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=s.exports},"3b2b":function(t,e,n){var a=n("7726"),i=n("5dbc"),r=n("86cc").f,o=n("9093").f,c=n("aae3"),s=n("0bfb"),d=a.RegExp,u=d,l=d.prototype,b=/a/g,v=/a/g,f=new d(b)!==b;if(n("9e1e")&&(!f||n("79e5")((function(){return v[n("2b4c")("match")]=!1,d(b)!=b||d(v)==v||"/a/i"!=d(b,"i")})))){d=function(t,e){var n=this instanceof d,a=c(t),r=void 0===e;return!n&&a&&t.constructor===d&&r?t:i(f?new u(a&&!r?t.source:t,e):u((a=t instanceof d)?t.source:t,a&&r?s.call(t):e),n?this:l,d)};for(var p=function(t){t in d||r(d,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=o(u),x=0;g.length>x;)p(g[x++]);l.constructor=d,d.prototype=l,n("2aba")(a,"RegExp",d)}n("7a56")("RegExp")},aae3:function(t,e,n){var a=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},d7c2:function(t,e,n){}}]);
//# sourceMappingURL=chunk-557d58e2.79a532cc.js.map