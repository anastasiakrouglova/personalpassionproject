(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fde8340"],{"4e82":function(t,e,a){"use strict";var n=a("23e7"),r=a("1c0b"),s=a("7b0b"),o=a("d039"),i=a("b301"),u=[],d=u.sort,c=o((function(){u.sort(void 0)})),h=o((function(){u.sort(null)})),y=i("sort"),f=c||!h||y;n({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?d.call(s(this)):d.call(s(this),r(t))}})},5178:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"charts"},[a("p",[t._v("Well done! Here are some stats of your workout today")]),t._l(t.doneDays,(function(e){return a("li",{key:e.id,staticClass:"days-container"},["2"===e.week?a("span",[t._v(t._s(t.days[e.day-1])+" "),"true"===e.workoutDone?a("input",{ref:"checkedBox",refInFor:!0,attrs:{checked:"",type:"checkbox",name:t.days[e.day-1]},domProps:{value:t.days[e.day-1]}}):t._e(),"false"===e.workoutDone?a("input",{ref:"uncheckedBox",refInFor:!0,attrs:{type:"checkbox",name:t.days[e.day-1]},domProps:{value:t.days[e.day-1]}}):t._e()]):t._e()])})),a("button",{on:{click:function(e){return t.postWorkout()}}},[t._v("WORKOUT POSTEN")]),a("p",[t._v(" checkedboxvalue: "+t._s(t.checkBoxInputValues)+" ")]),a("h2",{staticClass:"week-title"},[t._v("this week")]),a("div",{staticClass:"week-container"},t._l(7,(function(e){return a("div",{key:e},[!0===t.dayActive[e-1]?a("span",{staticClass:"weekday-container"},[t._v(" "+t._s(t.days[e-1])+" "),a("img",{staticClass:"week-img",attrs:{src:"/assets/img/done.svg",alt:"done"}})]):!0!==t.dayActive[e-1]?a("span",{staticClass:"weekday-container"},[t._v(" "+t._s(t.days[e-1])+" "),a("img",{staticClass:"week-img",attrs:{src:"/assets/img/notDone.svg",alt:"done"}})]):t._e()])})),0),a("trend",{attrs:{data:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0],gradient:["#6fa8dc","#42b983","#2c3e50"],"auto-draw":"",smooth:""}})],2)},r=[];a("4e82"),a("0d03");function s(t){return parseInt(t,10)}function o(t,e,a){return s(t.x+a.x)===s(2*e.x)&&s(t.y+a.y)===s(2*e.y)}function i(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function u(t,e,a){var n={x:t.x-e.x,y:t.y-e.y},r=Math.sqrt(n.x*n.x+n.y*n.y),s={x:n.x/r,y:n.y/r};return{x:e.x+s.x*a,y:e.y+s.y*a}}function d(t,e,a){var n=e.minX,r=e.minY,s=e.maxX,o=e.maxY,i=a.max,u=a.min;t=t.map((function(t){return"number"===typeof t?t:t.value}));var d=Math.min.apply(Math,t.concat([u]))-.001,c=(s-n)/(t.length-1),h=(o-r)/(Math.max.apply(Math,t.concat([i]))+.001-d);return t.map((function(e,a){return{x:a*c+n,y:o-(e-d)*h+1e-5*+(a===t.length-1)-1e-5*+(0===a)}}))}function c(t,e){var a=t.shift();return"M"+a.x+" "+a.y+t.map((function(n,r){var s=t[r+1],d=t[r-1]||a,c=s&&o(s,n,d);if(!s||c)return"L"+n.x+" "+n.y;var h=Math.min(i(d,n),i(s,n)),y=h/2<e,f=y?h/2:e,l=u(d,n,f),p=u(s,n,f);return"L"+l.x+" "+l.y+"S"+n.x+" "+n.y+" "+p.x+" "+p.y})).join("")}var h={props:["smooth","data","boundary","radius","id","max","min"],render:function(t){var e=this,a=e.data,n=e.smooth,r=e.boundary,s=e.radius,o=e.id,i=e.max,u=e.min,h=d(a,r,{max:i,min:u}),y=c(h,n?s:0);return t("path",{attrs:{d:y,fill:"none",stroke:"url(#"+o+")"}})}},y={props:["gradient","gradientDirection","id"],render:function(t){var e=this,a=e.gradient,n=e.gradientDirection,r=e.id,s=a.length-1||1,o=a.slice().reverse().map((function(e,a){return t("stop",{attrs:{offset:a/s,"stop-color":e}})}));return t("defs",[t("linearGradient",{attrs:{id:r,x1:+("left"===n),y1:+("top"===n),x2:+("right"===n),y2:+("bottom"===n)}},o)])}},f={name:"Trend",props:{data:{type:Array,required:!0},autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},gradient:{type:Array,default:function(){return["#000"]}},gradientDirection:{type:String,default:"top"},max:{type:Number,default:-1/0},min:{type:Number,default:1/0},height:Number,width:Number,padding:{type:Number,default:8},radius:{type:Number,default:10},smooth:Boolean},watch:{data:{immediate:!0,handler:function(t){var e=this;this.$nextTick((function(){if(!e.$isServer&&e.$refs.path&&e.autoDraw){var t=e.$refs.path.$el,a=t.getTotalLength();t.style.transition="none",t.style.strokeDasharray=a+" "+a,t.style.strokeDashoffset=Math.abs(a-(e.lastLength||0)),t.getBoundingClientRect(),t.style.transition="stroke-dashoffset "+e.autoDrawDuration+"ms "+e.autoDrawEasing,t.style.strokeDashoffset=0,e.lastLength=a}}))}}},render:function(t){if(this.data&&!(this.data.length<2)){var e=this,a=e.width,n=e.height,r=e.padding,s=a||300,o=n||75,i={minX:r,minY:r,maxX:s-r,maxY:o-r},u=this.$props;return u.boundary=i,u.id="vue-trend-"+this._uid,t("svg",{attrs:{width:a||"100%",height:n||"25%",viewBox:"0 0 "+s+" "+o}},[t(y,{props:u}),t(h,{props:u,ref:"path"})])}},install:function(t){t.component(f.name,f)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(f);var l=f,p={name:"jumps",components:{Trend:l},data:function(){return{loading:"getLoadingState",days:["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],dayActive:[!1,!1,!1,!1,!1,!1,!1],todayNumber:(new Date).getDay(),currentday:null,checkBoxInputValues:[],flag:!1}},mounted:function(){this.days[this.todayNumber-1];this.currentday=this.todayNumber,this.$store.workoutDone;for(var t=0;t<this.$refs.checkedBox.length;t++)this.checkBoxInputValues.push(this.$refs.checkedBox[t].value)},computed:{doneDays:function(){return this.filterDays(),this.flagChange(),this.iDay(),this.$store.state.stats}},methods:{filterDays:function(){this.$store.state.stats.sort((function(t,e){return-(e.day-t.day)}))},flagChange:function(){this.flag=!0},postWorkout:function(){this.$store.dispatch("postWorkoutifDone")},iDay:function(){for(var t=0;t<7;t++){this.dayActive[t]=!1;for(var e=0;e<this.$store.state.stats.length;e++)if("2"===this.$store.state.stats[e].week&&"true"===this.$store.state.stats[e].workoutDone){var a=this.$store.state.stats[e].day;a==t+1&&(this.dayActive[t]=!0)}}}}},m=p,v=(a("d674"),a("2877")),g=Object(v["a"])(m,n,r,!1,null,null,null);e["default"]=g.exports},7152:function(t,e,a){},d674:function(t,e,a){"use strict";var n=a("7152"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-3fde8340.6956570b.js.map