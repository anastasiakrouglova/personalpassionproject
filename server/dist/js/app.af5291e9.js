(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b3289":"d48d0093","chunk-2d0b5a62":"738113d0","chunk-2d208a0a":"b8c6a1c3","chunk-393495ce":"2c4615f8","chunk-39bddc72":"99e7f77a","chunk-3fde8340":"6956570b","chunk-4d50334a":"54856f03"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-393495ce":1,"chunk-39bddc72":1,"chunk-3fde8340":1,"chunk-4d50334a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0b3289":"31d6cfe0","chunk-2d0b5a62":"31d6cfe0","chunk-2d208a0a":"31d6cfe0","chunk-393495ce":"40deb43d","chunk-39bddc72":"055d83f4","chunk-3fde8340":"1cffade2","chunk-4d50334a":"391d7ef8"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1:function(t,e){},3671:function(t,e,n){"use strict";var r=n("5d33"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router-container"}),n("Tabs",{staticClass:"tabs-container"})],1)},a=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"tabs"},[n("router-link",{attrs:{to:"/"}},[n("MdFitnessIcon",{attrs:{w:"25",h:"25"}})],1),n("router-link",{attrs:{to:"/chart"}},[n("MdStatsIcon",{attrs:{w:"25",h:"25"}})],1),n("router-link",{attrs:{to:"/settings"}},[n("MdSettingsIcon",{attrs:{w:"25",h:"25"}})],1)],1)])},u=[],l=n("6b01"),p=n("0f5e"),d=n("0096"),f={name:"Tabs",components:{MdFitnessIcon:p["a"],MdStatsIcon:l["a"],MdSettingsIcon:d["a"]}},h=f,m=(n("c59a"),n("2877")),v=Object(m["a"])(h,c,u,!1,null,null,null),b=v.exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y={name:"app",components:{Tabs:b},mounted:function(){this.$store.dispatch("loadWorkouts"),this.$store.dispatch("loadStats")},computed:k({},Object(s["b"])(["workouts"]))},w=y,_=(n("034f"),Object(m["a"])(w,o,a,!1,null,null,null)),S=_.exports,O=(n("d3b7"),n("8c4f")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workouts"},[n("Navigation"),(t.type="jump")?n("SingleWorkout",{attrs:{type:"jump",msg:"Jumps"}}):t._e()],1)},C=[],E=n("b5e1"),P=n("74ae"),T={name:"jumps",components:{SingleWorkout:E["a"],Navigation:P["a"]}},x=T,D=Object(m["a"])(x,j,C,!1,null,null,null),$=D.exports;r["a"].use(O["a"]);var A=[{path:"/",name:"jump",component:$},{path:"/pirouette",name:"pirouette",component:function(){return n.e("chunk-2d0b5a62").then(n.bind(null,"1a95"))}},{path:"/stretch",name:"stretch",component:function(){return n.e("chunk-2d208a0a").then(n.bind(null,"a632"))}},{path:"/detail/:id",name:"detail",component:function(){return n.e("chunk-393495ce").then(n.bind(null,"c84b"))}},{path:"/detail/:id/launch",name:"launch",component:function(){return n.e("chunk-4d50334a").then(n.bind(null,"a9d8"))}},{path:"/detail/:id/training",name:"training",component:function(){return n.e("chunk-39bddc72").then(n.bind(null,"b707"))}},{path:"/chart",name:"chart",component:function(){return n.e("chunk-3fde8340").then(n.bind(null,"5178"))}},,{path:"/settings",name:"settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}}],M=new O["a"]({mode:"history",base:"/",routes:A}),N=M,I=(n("0d03"),n("5132")),W=n.n(I),J=n("8055"),L=n.n(J),R=n("bc3a"),U=n.n(R);r["a"].use(s["a"],U.a),r["a"].use(new W.a({connection:"https://mirrorcontrol.herokuapp.com/api/workouts"}));var z=new s["a"].Store({state:{socket:L()("https://mirrorcontrol.herokuapp.com/"),videoStarted:!1,playing:!0,workout:"video mag afgespeeld worden",workouts:[],stats:[],workoutDone:!1,week:"2"},mutations:{SET_WORKOUTS:function(t,e){t.workouts=e},SET_STATS:function(t,e){t.stats=e}},actions:{playVideo:function(t){store.data.workouts.push(t)},loadWorkouts:function(t){var e=t.commit;U.a.get("https://mirrorcontrol.herokuapp.com/api/workouts").then((function(t){var n=t.data;e("SET_WORKOUTS",n)})).catch((function(t){}))},loadStats:function(t){var e=t.commit;U.a.get("https://mirrorcontrol.herokuapp.com/api/stats").then((function(t){var n=t.data;e("SET_STATS",n)})).catch((function(t){}))},postWorkoutifDone:function(t){t.commit;U.a.post("https://mirrorcontrol.herokuapp.com/api/stats",{day:(new Date).getDay(),workoutDone:this.state.workoutDone,week:this.state.week}).then((function(t){t.data})).catch((function(t){}))},sendSocket:function(){this.state.videoStarted=!1,this.state.socket.emit("SEND_STARTMIRROR",{videoStarted:this.state.videoStarted})},pauzeVideoSocket:function(){this.state.playing=!1,this.state.socket.emit("SEND_PAUZED",{playPauzed:this.state.playing})},playVideoSocket:function(){this.state.playing=!0,this.state.socket.emit("SEND_PLAYED",{playPauzed:this.state.playing})}}});r["a"].config.productionTip=!1,new r["a"]({router:N,store:z,render:function(t){return t(S)}}).$mount("#app")},"5d33":function(t,e,n){},"600e":function(t,e,n){},"60b4":function(t,e,n){},"74ae":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[t._v("Jumps")]),n("router-link",{attrs:{to:"/pirouette"}},[t._v("Pirouettes")]),n("router-link",{attrs:{to:"/stretch"}},[t._v("Stretch")])],1),n("router-view")],1)},o=[],a=(n("3671"),n("2877")),i={},s=Object(a["a"])(i,r,o,!1,null,null,null);e["a"]=s.exports},"84e1":function(t,e,n){"use strict";var r=n("600e"),o=n.n(r);o.a},"85ec":function(t,e,n){},b5e1:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["/"===this.$route.path?n("div",{staticClass:"maxi-container"},t._l(t.onlyJumps,(function(e){return n("li",{key:e.id,staticClass:"container"},[n("router-link",{staticClass:"router-item",attrs:{type:"type",to:"/detail/"+e.id}},[n("div",[n("p",{staticClass:"exercise"},[t._v(t._s(e.title))]),n("p",{staticClass:"time"},[t._v(t._s(e.time)+" - "+t._s(e.level))]),n("img",{staticClass:"bg-image",attrs:{src:"/assets/img/cover/"+e.img+".png",alt:"jump2",width:"60%"}})])])],1)})),0):t._e(),"/pirouette"===this.$route.path?n("div",{staticClass:"maxi-container"},t._l(t.onlyPirouettes,(function(e){return n("li",{key:e.id,staticClass:"container"},[n("router-link",{staticClass:"router-item",attrs:{type:"type",to:"/detail/"+e.id}},[n("div",[n("p",{staticClass:"exercise"},[t._v(t._s(e.title))]),n("p",{staticClass:"time"},[t._v(t._s(e.time)+" - "+t._s(e.level))]),n("img",{staticClass:"bg-image",attrs:{src:"/assets/img/cover/"+e.img+".png",alt:"jump2",width:"60%"}})])])],1)})),0):t._e(),"/stretch"===this.$route.path?n("div",{staticClass:"maxi-container"},t._l(t.onlyStretch,(function(e){return n("li",{key:e.id,staticClass:"container"},[n("router-link",{staticClass:"router-item",attrs:{type:"type",to:"/detail/"+e.id}},[n("div",[n("p",{staticClass:"exercise"},[t._v(t._s(e.title))]),n("p",{staticClass:"time"},[t._v(t._s(e.time)+" - "+t._s(e.level))]),n("img",{staticClass:"bg-image",attrs:{src:"/assets/img/cover/"+e.img+".png",alt:"jump2",width:"60%"}})])])],1)})),0):t._e()])},o=[],a=(n("4de4"),{props:{type:String,title:String},computed:{all:function(){return this.$store.state.workouts},onlyJumps:function(){return this.$store.state.workouts.filter((function(t){return"jump"===t.type}))},onlyPirouettes:function(){return this.$store.state.workouts.filter((function(t){return"pirouette"===t.type}))},onlyStretch:function(){return this.$store.state.workouts.filter((function(t){return"stretch"===t.type}))}}}),i=a,s=(n("84e1"),n("2877")),c=Object(s["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports},c59a:function(t,e,n){"use strict";var r=n("60b4"),o=n.n(r);o.a}});
//# sourceMappingURL=app.af5291e9.js.map