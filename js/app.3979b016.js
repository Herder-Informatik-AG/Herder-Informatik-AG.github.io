(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-14380897":"5bbab18a","chunk-418aa427":"1d206237","chunk-439b1044":"a4715bdb","chunk-680a8264":"102ab52f","chunk-aa54bcdc":"1d129e7a","chunk-b29ea92a":"192f125e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-14380897":1,"chunk-418aa427":1,"chunk-439b1044":1,"chunk-680a8264":1,"chunk-aa54bcdc":1,"chunk-b29ea92a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-14380897":"2acd13d7","chunk-418aa427":"1eafea9d","chunk-439b1044":"5c639059","chunk-680a8264":"539f4eae","chunk-aa54bcdc":"496a177a","chunk-b29ea92a":"539f4eae"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f52":function(e,t,n){},"161f":function(e,t,n){"use strict";n("0f52")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d"),n("483b"),n("aeed");var r=n("2b0e"),a=n("5f5b"),o=(n("d06d"),n("0874")),c=n("f6f1"),u=n.n(c),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"base-container"}},[n("navbar"),n("div",{attrs:{id:"app"}},[n("router-view")],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{staticClass:"navbar-dark sticky-top bg-dark",attrs:{toggleable:"md",type:"dark"}},[r("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),r("b-navbar-brand",{staticClass:"navbar-brand",attrs:{to:"/Home"}},[r("img",{attrs:{src:n("9d64"),id:"navbar-logo"}}),e._v("\n        Informatik-AG\n    ")]),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/Home"}},[r("icon",{staticClass:"symbol",attrs:{name:"home",scale:"1.2"}}),e._v("\n                Home")],1),r("b-nav-item",{attrs:{to:"/Konzept"}},[r("icon",{staticClass:"symbol",attrs:{name:"flag",scale:"1.2"}}),e._v("\n                Konzept\n            ")],1),r("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[r("icon",{staticClass:"symbol",attrs:{name:"calendar",scale:"1.2"}}),e._v("\n                    Termine\n                ")]},proxy:!0}])},e._l(e.termine,(function(t){return r("b-dropdown-item",{key:t,attrs:{to:"/Termine/"+t}},[e._v(e._s(t))])})),1),r("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[r("icon",{staticClass:"symbol",attrs:{name:"folder-open",scale:"1.2"}}),e._v("\n                    Projekte\n                ")]},proxy:!0}])},e._l(e.projectCategories,(function(t){return r("b-dropdown-group",{key:t.name,attrs:{header:t.name}},e._l(t.projects,(function(t){return r("b-dropdown-item",{key:t,attrs:{to:"/Projekte/"+t}},[e._v(e._s(t))])})),1)})),1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-nav-item",{attrs:{to:"/Info"}},[r("icon",{staticClass:"symbol",attrs:{name:"info-circle",scale:"1.2"}})],1)],1)],1)],1)],1)},f=[],p=(n("96cf"),n("1da1"));function d(e){return m.apply(this,arguments)}function m(){return m=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new XMLHttpRequest,n.responseType="json",n.open("GET",t),r=new Promise((function(e,t){n.addEventListener("load",(function(r){200!==n.status?t(Error("HTTP ERROR: ".concat(n.status,": ").concat(n.responseText))):e(n.response)}))})),n.send(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var b="https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Termine/list.json",h="https://raw.githubusercontent.com/Herder-Informatik-AG/Herder-Informatik-AG.github.io/main/Projekte/list.json",v={name:"Navbar",data:function(){return{termine:[],projectCategories:[]}},methods:{getData:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d(b);case 2:return t=e.sent,e.next=5,d(h);case 5:n=e.sent,this.termine=t.filenames,this.projectCategories=n.categories;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.getData()}},g=v,k=(n("161f"),n("2877")),y=Object(k["a"])(g,l,f,!1,null,"038166df",null),w=y.exports,_={name:"app",components:{navbar:w}},j=_,C=(n("5c0b"),Object(k["a"])(j,i,s,!1,null,null,null)),T=C.exports,x=n("8c4f");r["default"].use(x["a"]);var O=new x["a"]({mode:"history",routes:[{path:"/",redirect:"/Home"},{path:"/Home",component:function(){return n.e("chunk-aa54bcdc").then(n.bind(null,"bb51"))}},{path:"/Konzept",component:function(){return n.e("chunk-14380897").then(n.bind(null,"219c"))}},{path:"/Info",component:function(){return n.e("chunk-418aa427").then(n.bind(null,"2469"))}},{path:"/Terminvorschau",component:function(){return n.e("chunk-439b1044").then(n.bind(null,"18cd"))}},{path:"/Termine/:date",component:function(){return n.e("chunk-b29ea92a").then(n.bind(null,"954a"))}},{path:"/Projekte/:name",component:function(){return n.e("chunk-680a8264").then(n.bind(null,"98ba"))}},{path:"*",redirect:"/"}]});r["default"].config.productionTip=!1,r["default"].use(u.a),r["default"].use(a["a"]),r["default"].component("icon",o["a"]),new r["default"]({router:O,render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("e332")},"9d64":function(e,t,n){e.exports=n.p+"img/logo.e0f22633.png"},e332:function(e,t,n){}});
//# sourceMappingURL=app.3979b016.js.map