(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39bddc72"],{"161d":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-play-icon"}},[a("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M96 52v408l320-204L96 52z"}})])])},n=[],e=a("2141"),o={name:"md-play-icon",mixins:[e["a"]],data:function(){var t=this.title?this.title:"Md Play Icon";return{iconTitle:t}}},r=o,c=a("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);i["a"]=l.exports},"1c68":function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-arrow-back-icon"}},[a("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[a("path",{attrs:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}})])])},n=[],e=a("2141"),o={name:"md-arrow-back-icon",mixins:[e["a"]],data:function(){var t=this.title?this.title:"Md Arrow Back Icon";return{iconTitle:t}}},r=o,c=a("2877"),l=Object(c["a"])(r,s,n,!1,null,null,null);i["a"]=l.exports},b707:function(t,i,a){"use strict";a.r(i);var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"training-container"},[a("router-link",{staticClass:"arrowback",attrs:{to:"/"}},[a("ArrowBackIcon",{staticClass:"arrowback-training",attrs:{w:"30",h:"30"}})],1),a("video",{ref:"videoTraining",staticClass:"video-workout",attrs:{autoplay:"",src:"/assets/video/"+this.$store.state.workouts[t.$route.params.id-1].img+".mp4",width:"300"},on:{ended:function(i){return t.onPlayerEnded()}}}),a("div",[a("span",{on:{click:function(i){return t.play()}}},[a("PlayIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"play-control-item play",attrs:{w:"30",h:"30"}})],1),a("span",{on:{click:function(i){return t.pauze()}}},[a("PauseIcon",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"play-control-item pauze",attrs:{w:"30",h:"30"}})],1)])],1)},n=[],e=a("8055"),o=a.n(e),r=a("161d"),c=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-pause-icon"}},[a("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"}})])])},l=[],u=a("2141"),h={name:"md-pause-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Md Pause Icon";return{iconTitle:t}}},d=h,p=a("2877"),v=Object(p["a"])(d,c,l,!1,null,null,null),w=v.exports,m=a("1c68"),f={name:"App",components:{PlayIcon:r["a"],PauseIcon:w,ArrowBackIcon:m["a"]},data:function(){return{isPlaying:!0,amount:50}},created:function(){this.socket=o()("https://mirrorcontrol.herokuapp.com/")},methods:{play:function(){this.$store.dispatch("playVideoSocket"),this.$refs.videoTraining.play(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1},pauze:function(){this.$store.dispatch("pauzeVideoSocket"),this.$refs.videoTraining.pause(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1},onPlayerEnded:function(){this.$store.workoutDone=!0,this.$router.push("/chart")}}},g=f,y=(a("b898"),Object(p["a"])(g,s,n,!1,null,null,null));i["default"]=y.exports},b896:function(t,i,a){},b898:function(t,i,a){"use strict";var s=a("b896"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-39bddc72.99e7f77a.js.map