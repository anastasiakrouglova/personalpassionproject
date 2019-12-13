(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39bddc72"],{"161d":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-play-icon"}},[i("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M96 52v408l320-204L96 52z"}})])])},a=[],n=i("2141"),o={name:"md-play-icon",mixins:[n["a"]],data:function(){var t=this.title?this.title:"Md Play Icon";return{iconTitle:t}}},r=o,c=i("2877"),l=Object(c["a"])(r,e,a,!1,null,null,null);s["a"]=l.exports},"1c68":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-arrow-back-icon"}},[i("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[i("path",{attrs:{d:"M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"}})])])},a=[],n=i("2141"),o={name:"md-arrow-back-icon",mixins:[n["a"]],data:function(){var t=this.title?this.title:"Md Arrow Back Icon";return{iconTitle:t}}},r=o,c=i("2877"),l=Object(c["a"])(r,e,a,!1,null,null,null);s["a"]=l.exports},b707:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"training-container"},[i("router-link",{staticClass:"arrowback",attrs:{to:"/"}},[i("ArrowBackIcon",{staticClass:"arrowback-training",attrs:{w:"30",h:"30"}})],1),i("h2",{staticClass:"name-training"},[t._v(t._s(this.$store.state.workouts[t.$route.params.id-1].title)+" ")]),i("video",{ref:"videoTraining",staticClass:"video-workout",attrs:{muted:"",autoplay:"",src:"/assets/video/"+this.$store.state.workouts[t.$route.params.id-1].img+".mp4",width:"100"},domProps:{muted:!0},on:{ended:function(s){return t.onPlayerEnded()},canplay:function(s){return t.onPlayerStarted()}}}),i("div",{on:{click:!1,drag:!1}},[i("circle-slider",{staticClass:"circle-slider-class",staticStyle:{"pointer-events":"none"},attrs:{min:0,max:this.$store.state.workouts[t.$route.params.id-1].time,"knob-radius":1e-6,"circle-color":"#cecece","progress-color":"#3E74B8",side:150},model:{value:t.timeLeft,callback:function(s){t.timeLeft=s},expression:"timeLeft"}})],1),i("div",{staticClass:"minutes-left"},[t._v("minutes left")]),i("div",{staticClass:"time-left"},[t._v(t._s(t.secondsToMinutes))]),i("p",[t._v(t._s(this.$store.state.heartRates[this.$store.state.heartRates.length-1].heartRates)+" BPM")]),i("div",[i("span",{on:{click:function(s){return t.play()}}},[i("PlayIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isPlaying,expression:"!isPlaying"}],staticClass:"play-control-item play",attrs:{w:"30",h:"30"}})],1),i("span",{on:{click:function(s){return t.pauze()}}},[i("PauseIcon",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}],staticClass:"play-control-item pauze",attrs:{w:"30",h:"30"}})],1)])],1)},a=[],n=i("8055"),o=i.n(n),r=i("161d"),c=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"ion",class:t.ionClass,attrs:{title:t.iconTitle,name:"md-pause-icon"}},[i("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"}})])])},l=[],u=i("2141"),h={name:"md-pause-icon",mixins:[u["a"]],data:function(){var t=this.title?this.title:"Md Pause Icon";return{iconTitle:t}}},d=h,p=i("2877"),m=Object(p["a"])(d,c,l,!1,null,null,null),v=m.exports,f=i("1c68"),w={name:"App",components:{PlayIcon:r["a"],PauseIcon:v,ArrowBackIcon:f["a"]},data:function(){return{isPlaying:!0,amount:50,timeLeft:300}},created:function(){this.socket=o()("https://mirrorcontrol.herokuapp.com/")},computed:{secondsToMinutes:function(){var t=Math.floor(this.timeLeft/60),s=this.timeLeft-60*t;if(s<10){var i=t+":0"+s;return i}if(s>10){var e=t+":"+s;return e}return timeInMinutes}},methods:{play:function(){this.$store.dispatch("playVideoSocket"),this.$refs.videoTraining.play(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1},pauze:function(){this.$store.dispatch("pauzeVideoSocket"),this.$refs.videoTraining.pause(),!1===this.isPlaying?this.isPlaying=!0:this.isPlaying=!1,this.$store.state.workoutDone="true",this.$store.dispatch("postWorkoutifDone"),this.$store.dispatch("postHeartRates"),this.$router.push("/transition")},onPlayerEnded:function(){this.$store.state.workoutDone="true",this.$store.dispatch("postWorkoutifDone"),this.$store.dispatch("postHeartRates")},onPlayerStarted:function(){var t=this;this.$store.state.workoutDone="false",this.timeLeft=this.$refs.videoTraining.duration,this.isRunning=!0,this.timeLeft>0&&setInterval((function(){t.isPlaying&&t.timeLeft--}),1e3)}}},g=w,y=(i("b898"),Object(p["a"])(g,e,a,!1,null,null,null));s["default"]=y.exports},b896:function(t,s,i){},b898:function(t,s,i){"use strict";var e=i("b896"),a=i.n(e);a.a}}]);
//# sourceMappingURL=chunk-39bddc72.eaa20fdd.js.map