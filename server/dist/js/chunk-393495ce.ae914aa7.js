(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-393495ce"],{"161d":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-play-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M96 52v408l320-204L96 52z"}})])])},a=[],o=e("2141"),n={name:"md-play-icon",mixins:[o["a"]],data:function(){var t=this.title?this.title:"Md Play Icon";return{iconTitle:t}}},r=n,l=e("2877"),c=Object(l["a"])(r,i,a,!1,null,null,null);s["a"]=c.exports},"188f":function(t,s,e){},"1c68":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-arrow-back-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[e("path",{attrs:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}})])])},a=[],o=e("2141"),n={name:"md-arrow-back-icon",mixins:[o["a"]],data:function(){var t=this.title?this.title:"Md Arrow Back Icon";return{iconTitle:t}}},r=n,l=e("2877"),c=Object(l["a"])(r,i,a,!1,null,null,null);s["a"]=c.exports},"5f6c":function(t,s,e){"use strict";var i=e("188f"),a=e.n(i);a.a},c84b:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail"},[e("router-link",{staticClass:"arrowback",attrs:{to:"/"},on:{click:function(s){return t.stop()}}},[e("ArrowBackIcon",{staticClass:"arrowback",attrs:{w:"30",h:"30"}})],1),e("div",{staticClass:"column"},[e("router-link",{attrs:{to:"/detail/"+t.$route.params.id+"/launch"}},[e("span",{on:{click:function(s){return t.socketToevoegen()}}},[e("PlayIcon",{staticClass:"button-start-workout",staticStyle:{fill:"white"},attrs:{w:"25",h:"25"}})],1)])],1),e("img",{staticClass:"img-detail",attrs:{src:"/assets/img/cover/"+this.$store.state.workouts[t.$route.params.id-1].img+".png",alt:"img"}}),e("div",{staticClass:"detail-container"},[e("div",{staticClass:"info-container"},[e("div",[e("IosTimeIcon",{attrs:{w:"25",h:"25"}}),e("p",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].time)+" ")])],1),e("div",[e("IosMusicalNoteIcon",{attrs:{w:"25",h:"25"}}),e("p",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].song)+" ")])],1),e("div",["beginner"===this.$store.state.workouts[t.$route.params.id-1].level?e("img",{staticClass:"level-icon",attrs:{src:"/assets/img/level/level1.svg",alt:"level"}}):t._e(),"easy"===this.$store.state.workouts[t.$route.params.id-1].level?e("img",{staticClass:"level-icon",attrs:{src:"/assets/img/level/level2.svg",alt:"level"}}):t._e(),"intermediate"===this.$store.state.workouts[t.$route.params.id-1].level?e("img",{staticClass:"level-icon",attrs:{src:"/assets/img/level/level3.svg",alt:"level"}}):t._e(),"experienced"===this.$store.state.workouts[t.$route.params.id-1].level?e("img",{staticClass:"level-icon",attrs:{src:"/assets/img/level/level4.svg",alt:"level"}}):t._e(),e("p",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].level)+" ")])])]),e("h1",[t._v(" "+t._s(this.$store.state.workouts[t.$route.params.id-1].title))]),e("p",{staticClass:"info-text"},[t._v("In kunstschaatsen is het zeer belangrijk om goed op je landing te letten. Hoe gecontrolleerder en sterker, hoe meer punten je zult krijgen van de jury. Deze workout is daarom dus een harde training om je been en buikspieren te versterken.")])])],1)},a=[],o=e("8055"),n=e.n(o),r=e("1c68"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"ios-musical-note-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M364.3 48.2c-4.7.9-118 24.1-122.2 24.9-4.2.8-8.1 3.6-8.1 8v255.1c0 1.6-.1 7.2-2.4 11.7-3.1 5.9-8.5 10.2-16.1 12.7-3.3 1.1-7.8 2.1-13.1 3.3-24.1 5.4-64.4 14.6-64.4 51.8 0 30.1 21.7 44.5 35 47.1 5 1 11 1 13.8 1 8.2 0 36-3.3 51.2-13.2 11-7.2 24.1-21.4 24.1-47.8V173.1c0-3.8 2.7-7.1 6.4-7.8l92.8-19c7.4-1.5 12.8-8.1 12.8-15.7V55.8c-.1-4.3-3.8-8.8-9.8-7.6z"}})])])},c=[],u=e("2141"),v={name:"ios-musical-note-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Ios Musical Note Icon";return{iconTitle:t}}},d=v,h=e("2877"),m=Object(h["a"])(d,l,c,!1,null,null,null),p=m.exports,g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"ios-time-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm14 226c0 7.7-6.3 14-14 14h-96c-7.7 0-14-6.3-14-14s6.3-14 14-14h82V128c0-7.7 6.3-14 14-14s14 6.3 14 14v146z"}})])])},w=[],k={name:"ios-time-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Ios Time Icon";return{iconTitle:t}}},f=k,_=Object(h["a"])(f,g,w,!1,null,null,null),$=_.exports,C=e("161d"),I={name:"App",components:{ArrowBackIcon:r["a"],IosMusicalNoteIcon:p,IosTimeIcon:$,PlayIcon:C["a"]},data:function(){return{loading:"getLoadingState"}},created:function(){this.socket=n()("https://mirrorcontrol.herokuapp.com/"),this.$store.state.videoSrc=this.$store.state.workouts[this.$route.params.id-1].img,this.$store.dispatch("sendVideoId")},methods:{socketToevoegen:function(){this.$store.dispatch("sendSocket")}}},b=I,x=(e("5f6c"),Object(h["a"])(b,i,a,!1,null,null,null));s["default"]=x.exports}}]);
//# sourceMappingURL=chunk-393495ce.ae914aa7.js.map