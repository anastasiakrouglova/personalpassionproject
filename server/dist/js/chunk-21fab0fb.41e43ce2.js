(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21fab0fb"],{"26d3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title"},[t._v("Settings")]),a("p",{ref:"bpm"}),a("div",{attrs:{id:"container"}},[a("div",{staticClass:"click-container",on:{click:function(e){return t.statusText()}},nativeOn:{click:function(e){return t.statusText()}}},[a("app-switch",{staticClass:"checkbox-settings",attrs:{unchecked:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"info-settings"},[a("img",{staticClass:"image-settings",attrs:{src:"/assets/img/bluetooth.svg",alt:"bluetooth",width:"15"}}),a("div",[a("span",{staticClass:"type-settings"},[t._v("Heart Rate Sensor")]),t._v(" "),a("br"),a("span",{staticClass:"subtitle-settings"},[t._v("Polar A70")])])])])],1),a("div",{staticClass:"click-container"},[a("app-switch",{staticClass:"checkbox-settings",attrs:{unchecked:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("div",{staticClass:"info-settings"},[a("img",{staticClass:"image-settings",attrs:{src:"/assets/img/mirror.svg",alt:"mirror",width:"30"}}),a("div",[a("span",{staticClass:"type-settings"},[t._v("Smart Mirror")]),t._v(" "),a("br"),a("span",{staticClass:"subtitle-settings"},[t._v("Fit to skate")])])])])],1)])])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],class:t.classes,attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:t.checked,checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var a=t.value,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=null,c=t._i(a,i);s.checked?c<0&&(t.value=a.concat([i])):c>-1&&(t.value=a.slice(0,c).concat(a.slice(c+1)))}else t.value=n}}}),a("span",[t._t("default")],2)])},c=[],r={props:{disabled:Boolean,classes:String,checked:Boolean,name:String},data:function(){return{value:null}},beforeMount:function(){this.value=this.checked},mounted:function(){this.$emit("input",this.value)},watch:{value:function(t){this.$emit("input",t)},checked:function(t){this.value=t}}},l=r,u=(a("72e0"),a("2877")),o=Object(u["a"])(l,i,c,!1,null,null,null),v=o.exports,h=a("8055"),d=a.n(h),p={name:"jumps",components:{"app-switch":v},data:function(){return{value:!1,text:""}},watch:{value:function(t){this.text=t?"Yes":"No"}},created:function(){this.socket=d()("https://mirrorcontrol.herokuapp.com/")},methods:{statusText:function(){var t=this;heartRateSensor.connect().then((function(){return heartRateSensor.startNotificationsHeartRateMeasurement().then(t.value=!0).then(t.handleHeartRateMeasurement)})).catch((function(e){t.value=!1}))},handleHeartRateMeasurement:function(t){var e=this;t.addEventListener("characteristicvaluechanged",(function(t){var a=heartRateSensor.parseHeartRate(t.target.value);e.$refs.bpm.innerHTML=a.heartRate+" &#x2764;",e.$store.state.heartRates.push(a.heartRate),e.$store.dispatch("sendBluetoothSocket")}))}}},f=p,m=(a("3e4b"),Object(u["a"])(f,s,n,!1,null,null,null));e["default"]=m.exports},"3e4b":function(t,e,a){"use strict";var s=a("bf50"),n=a.n(s);n.a},"72e0":function(t,e,a){"use strict";var s=a("a488"),n=a.n(s);n.a},a488:function(t,e,a){},bf50:function(t,e,a){}}]);
//# sourceMappingURL=chunk-21fab0fb.41e43ce2.js.map