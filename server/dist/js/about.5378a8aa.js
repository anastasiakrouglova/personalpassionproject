(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"188f":function(t,n,e){},"1a95":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pirouette"},[e("Navigation"),e("SingleWorkout",{attrs:{msg:"Pirouette"}})],1)},i=[],s=e("b5e1"),r=e("74ae"),o={name:"pirouette",components:{SingleWorkout:s["a"],Navigation:r["a"]}},c=o,u=e("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);n["default"]=l.exports},5178:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"charts"},[e("p",[t._v("GOOD JOB! Hier is jouw grafiek")]),e("router-link",{attrs:{to:"/"}},[e("span",{staticClass:"button-start"},[t._v("ga terug naar oefeningen")])]),e("trend",{attrs:{data:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradient:["#6fa8dc","#42b983","#2c3e50"],"auto-draw":"",smooth:""}})],1)},i=[];function s(t){return parseInt(t,10)}function r(t,n,e){return s(t.x+e.x)===s(2*n.x)&&s(t.y+e.y)===s(2*n.y)}function o(t,n){return Math.sqrt(Math.pow(n.x-t.x,2)+Math.pow(n.y-t.y,2))}function c(t,n,e){var a={x:t.x-n.x,y:t.y-n.y},i=Math.sqrt(a.x*a.x+a.y*a.y),s={x:a.x/i,y:a.y/i};return{x:n.x+s.x*e,y:n.y+s.y*e}}function u(t,n,e){var a=n.minX,i=n.minY,s=n.maxX,r=n.maxY,o=e.max,c=e.min;t=t.map((function(t){return"number"===typeof t?t:t.value}));var u=Math.min.apply(Math,t.concat([c]))-.001,l=(s-a)/(t.length-1),d=(r-i)/(Math.max.apply(Math,t.concat([o]))+.001-u);return t.map((function(n,e){return{x:e*l+a,y:r-(n-u)*d+1e-5*+(e===t.length-1)-1e-5*+(0===e)}}))}function l(t,n){var e=t.shift();return"M"+e.x+" "+e.y+t.map((function(a,i){var s=t[i+1],u=t[i-1]||e,l=s&&r(s,a,u);if(!s||l)return"L"+a.x+" "+a.y;var d=Math.min(o(u,a),o(s,a)),h=d/2<n,p=h?d/2:n,f=c(u,a,p),m=c(s,a,p);return"L"+f.x+" "+f.y+"S"+a.x+" "+a.y+" "+m.x+" "+m.y})).join("")}var d={props:["smooth","data","boundary","radius","id","max","min"],render:function(t){var n=this,e=n.data,a=n.smooth,i=n.boundary,s=n.radius,r=n.id,o=n.max,c=n.min,d=u(e,i,{max:o,min:c}),h=l(d,a?s:0);return t("path",{attrs:{d:h,fill:"none",stroke:"url(#"+r+")"}})}},h={props:["gradient","gradientDirection","id"],render:function(t){var n=this,e=n.gradient,a=n.gradientDirection,i=n.id,s=e.length-1||1,r=e.slice().reverse().map((function(n,e){return t("stop",{attrs:{offset:e/s,"stop-color":n}})}));return t("defs",[t("linearGradient",{attrs:{id:i,x1:+("left"===a),y1:+("top"===a),x2:+("right"===a),y2:+("bottom"===a)}},r)])}},p={name:"Trend",props:{data:{type:Array,required:!0},autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},gradient:{type:Array,default:function(){return["#000"]}},gradientDirection:{type:String,default:"top"},max:{type:Number,default:-1/0},min:{type:Number,default:1/0},height:Number,width:Number,padding:{type:Number,default:8},radius:{type:Number,default:10},smooth:Boolean},watch:{data:{immediate:!0,handler:function(t){var n=this;this.$nextTick((function(){if(!n.$isServer&&n.$refs.path&&n.autoDraw){var t=n.$refs.path.$el,e=t.getTotalLength();t.style.transition="none",t.style.strokeDasharray=e+" "+e,t.style.strokeDashoffset=Math.abs(e-(n.lastLength||0)),t.getBoundingClientRect(),t.style.transition="stroke-dashoffset "+n.autoDrawDuration+"ms "+n.autoDrawEasing,t.style.strokeDashoffset=0,n.lastLength=e}}))}}},render:function(t){if(this.data&&!(this.data.length<2)){var n=this,e=n.width,a=n.height,i=n.padding,s=e||300,r=a||75,o={minX:i,minY:i,maxX:s-i,maxY:r-i},c=this.$props;return c.boundary=o,c.id="vue-trend-"+this._uid,t("svg",{attrs:{width:e||"100%",height:a||"25%",viewBox:"0 0 "+s+" "+r}},[t(h,{props:c}),t(d,{props:c,ref:"path"})])}},install:function(t){t.component(p.name,p)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(p);var f=p,m={name:"jumps",components:{Trend:f}},v=m,g=(e("d674"),e("2877")),y=Object(g["a"])(v,a,i,!1,null,null,null);n["default"]=y.exports},"5f6c":function(t,n,e){"use strict";var a=e("188f"),i=e.n(a);i.a},7152:function(t,n,e){},"93e0":function(t,n,e){},a632:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"stretch"},[e("Navigation"),e("SingleWorkout",{attrs:{msg:"Stretch"}})],1)},i=[],s=e("b5e1"),r=e("74ae"),o={name:"Stretch",components:{SingleWorkout:s["a"],Navigation:r["a"]}},c=o,u=e("2877"),l=Object(u["a"])(c,a,i,!1,null,null,null);n["default"]=l.exports},a9d8:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"launch-container"},[e("p",{staticClass:"timer",on:{click:function(n){return t.start()}}},[t._v(t._s(t.countDown))]),e("img",{attrs:{clas:"img-connection",src:"/assets/img/connection.svg",alt:"connection"}}),e("p",{staticClass:"text"},[t._v("Leg je gsm aan de kant en ga voor de spiegel staan.")])])},i=[],s={data:function(){return{countDown:5}},created:function(){var t=this;this.isRunning=!0,this.countDown>0&&setInterval((function(){t.countDown--}),1e3)},updated:function(){console.log(this.countDown),this.countDown<0&&(console.log("stooop"),this.countDown=0,this.$router.push("/detail/"+this.$route.params.id+"/training"))}},r=s,o=(e("dd92"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,null,null);n["default"]=c.exports},b707:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"training-container"},[e("video",{ref:"videoTraining",attrs:{autoplay:"",src:"/assets/video/workout1.mp4",width:"100"},on:{ended:function(n){return t.onPlayerEnded()}}}),e("div",[e("span",{on:{click:function(n){return t.play()}}},[e("PlayIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"play-control-item play",attrs:{w:"30",h:"30"}})],1),e("span",{on:{click:function(n){return t.pauze()}}},[e("PauseIcon",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"play-control-item pauze",attrs:{w:"30",h:"30"}})],1)])])},i=[],s=e("8055"),r=e.n(s),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-play-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M96 52v408l320-204L96 52z"}})])])},c=[],u=e("2141"),l={name:"md-play-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Md Play Icon";return{iconTitle:t}}},d=l,h=e("2877"),p=Object(h["a"])(d,o,c,!1,null,null,null),f=p.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-pause-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"}})])])},v=[],g={name:"md-pause-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Md Pause Icon";return{iconTitle:t}}},y=g,w=Object(h["a"])(y,m,v,!1,null,null,null),x=w.exports,b={name:"App",components:{PlayIcon:f,PauseIcon:x},data:function(){return{isPlaying:!0,fill:{gradient:["red","green","blue"]}}},created:function(){this.socket=r()("http://localhost:3000")},methods:{play:function(){this.$store.dispatch("playVideoSocket"),this.$refs.videoTraining.play(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1},pauze:function(){this.$store.dispatch("pauzeVideoSocket"),this.$refs.videoTraining.pause(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1},onPlayerEnded:function(){console.log("video is ten einde"),this.$router.push("/chart")}}},k=b,_=(e("b898"),Object(h["a"])(k,a,i,!1,null,null,null));n["default"]=_.exports},b896:function(t,n,e){},b898:function(t,n,e){"use strict";var a=e("b896"),i=e.n(a);i.a},c84b:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"detail"},[e("router-link",{staticClass:"arrowback",attrs:{to:"/"},on:{click:function(n){return t.stop()}}},[e("ArrowBackIcon",{staticClass:"arrowback",attrs:{w:"30",h:"30"}})],1),e("h1",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].title))]),e("p",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].time)+" ")]),e("div",{staticClass:"column"},[e("router-link",{attrs:{to:"/detail/"+t.$route.params.id+"/launch"}},[e("span",{staticClass:"button-start",on:{click:function(n){return t.socketToevoegen()}}},[t._v("start now")])])],1)],1)},i=[],s=e("8055"),r=e.n(s),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-arrow-back-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[e("path",{attrs:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}})])])},c=[],u=e("2141"),l={name:"md-arrow-back-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Md Arrow Back Icon";return{iconTitle:t}}},d=l,h=e("2877"),p=Object(h["a"])(d,o,c,!1,null,null,null),f=p.exports,m={name:"App",components:{ArrowBackIcon:f},data:function(){return{loading:"getLoadingState"}},created:function(){this.socket=r()("http://localhost:3000"),console.log(this.socket)},methods:{socketToevoegen:function(){this.$store.dispatch("sendSocket")}}},v=m,g=(e("5f6c"),Object(h["a"])(v,a,i,!1,null,null,null));n["default"]=g.exports},d674:function(t,n,e){"use strict";var a=e("7152"),i=e.n(a);i.a},dd92:function(t,n,e){"use strict";var a=e("93e0"),i=e.n(a);i.a}}]);
//# sourceMappingURL=about.5378a8aa.js.map