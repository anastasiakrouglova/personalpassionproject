(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b115056e"],{"93e0":function(n,t,e){},a9d8:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"launch-container"},[e("p",{staticClass:"timer",on:{click:function(t){return n.start()}}},[n._v(n._s(n.countDown))]),e("img",{staticClass:"img-connection",attrs:{src:"/assets/img/connection.svg",alt:"connection"}}),e("p",{staticClass:"text"},[n._v("Leg je gsm aan de kant en ga voor de spiegel staan.")])])},a=[],u={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},i={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],c={CSS:{},springs:{}};function s(n,t,e){return Math.min(Math.max(n,t),e)}function f(n,t){return n.indexOf(t)>-1}function l(n,t){return n.apply(null,t)}var d={arr:function(n){return Array.isArray(n)},obj:function(n){return f(Object.prototype.toString.call(n),"Object")},pth:function(n){return d.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||d.svg(n)},str:function(n){return"string"===typeof n},fnc:function(n){return"function"===typeof n},und:function(n){return"undefined"===typeof n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return d.hex(n)||d.rgb(n)||d.hsl(n)},key:function(n){return!u.hasOwnProperty(n)&&!i.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function p(n){var t=/\(([^)]+)\)/.exec(n);return t?t[1].split(",").map((function(n){return parseFloat(n)})):[]}function h(n,t){var e=p(n),r=s(d.und(e[0])?1:e[0],.1,100),a=s(d.und(e[1])?100:e[1],.1,100),u=s(d.und(e[2])?10:e[2],.1,100),i=s(d.und(e[3])?0:e[3],.1,100),o=Math.sqrt(a/r),f=u/(2*Math.sqrt(a*r)),l=f<1?o*Math.sqrt(1-f*f):0,h=1,v=f<1?(f*o-i)/l:-i+o;function g(n){var e=t?t*n/1e3:n;return e=f<1?Math.exp(-e*f*o)*(h*Math.cos(l*e)+v*Math.sin(l*e)):(h+v*e)*Math.exp(-e*o),0===n||1===n?n:1-e}function m(){var t=c.springs[n];if(t)return t;var e=1/6,r=0,a=0;while(1)if(r+=e,1===g(r)){if(a++,a>=16)break}else a=0;var u=r*e*1e3;return c.springs[n]=u,u}return t?g:m}function v(n){return void 0===n&&(n=10),function(t){return Math.round(t*n)*(1/n)}}var g=function(){var n=11,t=1/(n-1);function e(n,t){return 1-3*t+3*n}function r(n,t){return 3*t-6*n}function a(n){return 3*n}function u(n,t,u){return((e(t,u)*n+r(t,u))*n+a(t))*n}function i(n,t,u){return 3*e(t,u)*n*n+2*r(t,u)*n+a(t)}function o(n,t,e,r,a){var i,o,c=0;do{o=t+(e-t)/2,i=u(o,r,a)-n,i>0?e=o:t=o}while(Math.abs(i)>1e-7&&++c<10);return o}function c(n,t,e,r){for(var a=0;a<4;++a){var o=i(t,e,r);if(0===o)return t;var c=u(t,e,r)-n;t-=c/o}return t}function s(e,r,a,s){if(0<=e&&e<=1&&0<=a&&a<=1){var f=new Float32Array(n);if(e!==r||a!==s)for(var l=0;l<n;++l)f[l]=u(l*t,e,a);return function(n){return e===r&&a===s?n:0===n||1===n?n:u(d(n),r,s)}}function d(r){for(var u=0,s=1,l=n-1;s!==l&&f[s]<=r;++s)u+=t;--s;var d=(r-f[s])/(f[s+1]-f[s]),p=u+d*t,h=i(p,e,a);return h>=.001?c(r,p,e,a):0===h?p:o(r,u,u+t,e,a)}}return s}(),m=function(){var n={linear:function(){return function(n){return n}}},t={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){var t,e=4;while(n<((t=Math.pow(2,--e))-1)/11);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*t-2)/22-n,2)}},Elastic:function(n,t){void 0===n&&(n=1),void 0===t&&(t=.5);var e=s(n,1,10),r=s(t,.1,2);return function(n){return 0===n||1===n?n:-e*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/e))*(2*Math.PI)/r)}}},e=["Quad","Cubic","Quart","Quint","Expo"];return e.forEach((function(n,e){t[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(t).forEach((function(e){var r=t[e];n["easeIn"+e]=r,n["easeOut"+e]=function(n,t){return function(e){return 1-r(n,t)(1-e)}},n["easeInOut"+e]=function(n,t){return function(e){return e<.5?r(n,t)(2*e)/2:1-r(n,t)(-2*e+2)/2}}})),n}();function y(n,t){if(d.fnc(n))return n;var e=n.split("(")[0],r=m[e],a=p(n);switch(e){case"spring":return h(n,t);case"cubicBezier":return l(g,a);case"steps":return l(v,a);default:return l(r,a)}}function w(n){try{var t=document.querySelectorAll(n);return t}catch(e){return}}function b(n,t){for(var e=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<e;u++)if(u in n){var i=n[u];t.call(r,i,u,n)&&a.push(i)}return a}function M(n){return n.reduce((function(n,t){return n.concat(d.arr(t)?M(t):t)}),[])}function x(n){return d.arr(n)?n:(d.str(n)&&(n=w(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function k(n,t){return n.some((function(n){return n===t}))}function C(n){var t={};for(var e in n)t[e]=n[e];return t}function O(n,t){var e=C(n);for(var r in n)e[r]=t.hasOwnProperty(r)?t[r]:n[r];return e}function D(n,t){var e=C(n);for(var r in t)e[r]=d.und(n[r])?t[r]:n[r];return e}function B(n){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return t?"rgba("+t[1]+",1)":n}function I(n){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,e=n.replace(t,(function(n,t,e,r){return t+t+e+e+r+r})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),a=parseInt(r[1],16),u=parseInt(r[2],16),i=parseInt(r[3],16);return"rgba("+a+","+u+","+i+",1)"}function P(n){var t,e,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,o=parseInt(a[3],10)/100,c=a[4]||1;function s(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+6*(t-n)*e:e<.5?t:e<2/3?n+(t-n)*(2/3-e)*6:n}if(0==i)t=e=r=o;else{var f=o<.5?o*(1+i):o+i-o*i,l=2*o-f;t=s(l,f,u+1/3),e=s(l,f,u),r=s(l,f,u-1/3)}return"rgba("+255*t+","+255*e+","+255*r+","+c+")"}function T(n){return d.rgb(n)?B(n):d.hex(n)?I(n):d.hsl(n)?P(n):void 0}function E(n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(t)return t[1]}function F(n){return f(n,"translate")||"perspective"===n?"px":f(n,"rotate")||f(n,"skew")?"deg":void 0}function N(n,t){return d.fnc(n)?n(t.target,t.id,t.total):n}function A(n,t){return n.getAttribute(t)}function L(n,t,e){var r=E(t);if(k([e,"deg","rad","turn"],r))return t;var a=c.CSS[t+e];if(!d.und(a))return a;var u=100,i=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=u+e;var s=u/i.offsetWidth;o.removeChild(i);var f=s*parseFloat(t);return c.CSS[t+e]=f,f}function j(n,t,e){if(t in n.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[t]||getComputedStyle(n).getPropertyValue(r)||"0";return e?L(n,a,e):a}}function S(n,t){return d.dom(n)&&!d.inp(n)&&(A(n,t)||d.svg(n)&&n[t])?"attribute":d.dom(n)&&k(o,t)?"transform":d.dom(n)&&"transform"!==t&&j(n,t)?"css":null!=n[t]?"object":void 0}function $(n){if(d.dom(n)){var t,e=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;while(t=r.exec(e))a.set(t[1],t[2]);return a}}function q(n,t,e,r){var a=f(t,"scale")?1:0+F(t),u=$(n).get(t)||a;return e&&(e.transforms.list.set(t,u),e.transforms["last"]=t),r?L(n,u,r):u}function X(n,t,e,r){switch(S(n,t)){case"transform":return q(n,t,r,e);case"css":return j(n,t,e);case"attribute":return A(n,t);default:return n[t]||0}}function _(n,t){var e=/^(\*=|\+=|-=)/.exec(n);if(!e)return n;var r=E(n)||0,a=parseFloat(t),u=parseFloat(n.replace(e[0],""));switch(e[0][0]){case"+":return a+u+r;case"-":return a-u+r;case"*":return a*u+r}}function Y(n,t){if(d.col(n))return T(n);if(/\s/g.test(n))return n;var e=E(n),r=e?n.substr(0,n.length-e.length):n;return t?r+t:r}function Z(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function Q(n){return 2*Math.PI*A(n,"r")}function V(n){return 2*A(n,"width")+2*A(n,"height")}function z(n){return Z({x:A(n,"x1"),y:A(n,"y1")},{x:A(n,"x2"),y:A(n,"y2")})}function H(n){for(var t,e=n.points,r=0,a=0;a<e.numberOfItems;a++){var u=e.getItem(a);a>0&&(r+=Z(t,u)),t=u}return r}function J(n){var t=n.points;return H(n)+Z(t.getItem(t.numberOfItems-1),t.getItem(0))}function R(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return Q(n);case"rect":return V(n);case"line":return z(n);case"polyline":return H(n);case"polygon":return J(n)}}function G(n){var t=R(n);return n.setAttribute("stroke-dasharray",t),t}function W(n){var t=n.parentNode;while(d.svg(t)){if(!d.svg(t.parentNode))break;t=t.parentNode}return t}function K(n,t){var e=t||{},r=e.el||W(n),a=r.getBoundingClientRect(),u=A(r,"viewBox"),i=a.width,o=a.height,c=e.viewBox||(u?u.split(" "):[0,0,i,o]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:i/c[2],h:o/c[3]}}function U(n,t){var e=d.str(n)?w(n)[0]:n,r=t||100;return function(n){return{property:n,el:e,svg:K(e),totalLength:R(e)*(r/100)}}}function nn(n,t){function e(e){void 0===e&&(e=0);var r=t+e>=1?t+e:0;return n.el.getPointAtLength(r)}var r=K(n.el,n.svg),a=e(),u=e(-1),i=e(1);switch(n.property){case"x":return(a.x-r.x)*r.w;case"y":return(a.y-r.y)*r.h;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function tn(n,t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=Y(d.pth(n)?n.totalLength:n,t)+"";return{original:r,numbers:r.match(e)?r.match(e).map(Number):[0],strings:d.str(n)||t?r.split(e):[]}}function en(n){var t=n?M(d.arr(n)?n.map(x):x(n)):[];return b(t,(function(n,t,e){return e.indexOf(n)===t}))}function rn(n){var t=en(n);return t.map((function(n,e){return{target:n,id:e,total:t.length,transforms:{list:$(n)}}}))}function an(n,t){var e=C(t);if(/^spring/.test(e.easing)&&(e.duration=h(e.easing)),d.arr(n)){var r=n.length,a=2===r&&!d.obj(n[0]);a?n={value:n}:d.fnc(t.duration)||(e.duration=t.duration/r)}var u=d.arr(n)?n:[n];return u.map((function(n,e){var r=d.obj(n)&&!d.pth(n)?n:{value:n};return d.und(r.delay)&&(r.delay=e?0:t.delay),d.und(r.endDelay)&&(r.endDelay=e===u.length-1?t.endDelay:0),r})).map((function(n){return D(n,e)}))}function un(n){for(var t=b(M(n.map((function(n){return Object.keys(n)}))),(function(n){return d.key(n)})).reduce((function(n,t){return n.indexOf(t)<0&&n.push(t),n}),[]),e={},r=function(r){var a=t[r];e[a]=n.map((function(n){var t={};for(var e in n)d.key(e)?e==a&&(t.value=n[e]):t[e]=n[e];return t}))},a=0;a<t.length;a++)r(a);return e}function on(n,t){var e=[],r=t.keyframes;for(var a in r&&(t=D(un(r),t)),t)d.key(a)&&e.push({name:a,tweens:an(t[a],n)});return e}function cn(n,t){var e={};for(var r in n){var a=N(n[r],t);d.arr(a)&&(a=a.map((function(n){return N(n,t)})),1===a.length&&(a=a[0])),e[r]=a}return e.duration=parseFloat(e.duration),e.delay=parseFloat(e.delay),e}function sn(n,t){var e;return n.tweens.map((function(r){var a=cn(r,t),u=a.value,i=d.arr(u)?u[1]:u,o=E(i),c=X(t.target,n.name,o,t),s=e?e.to.original:c,f=d.arr(u)?u[0]:s,l=E(f)||E(c),p=o||l;return d.und(i)&&(i=s),a.from=tn(f,p),a.to=tn(_(i,f),p),a.start=e?e.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=d.pth(u),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),e=a,a}))}var fn={css:function(n,t,e){return n.style[t]=e},attribute:function(n,t,e){return n.setAttribute(t,e)},object:function(n,t,e){return n[t]=e},transform:function(n,t,e,r,a){if(r.list.set(t,e),t===r.last||a){var u="";r.list.forEach((function(n,t){u+=t+"("+n+") "})),n.style.transform=u}}};function ln(n,t){var e=rn(n);e.forEach((function(n){for(var e in t){var r=N(t[e],n),a=n.target,u=E(r),i=X(a,e,u,n),o=u||E(i),c=_(Y(r,o),i),s=S(a,e);fn[s](a,e,c,n.transforms,!0)}}))}function dn(n,t){var e=S(n.target,t.name);if(e){var r=sn(t,n),a=r[r.length-1];return{type:e,property:t.name,animatable:n,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}function pn(n,t){return b(M(n.map((function(n){return t.map((function(t){return dn(n,t)}))}))),(function(n){return!d.und(n)}))}function hn(n,t){var e=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=e?Math.max.apply(Math,n.map((function(n){return r(n)+n.duration}))):t.duration,a.delay=e?Math.min.apply(Math,n.map((function(n){return r(n)+n.delay}))):t.delay,a.endDelay=e?a.duration-Math.max.apply(Math,n.map((function(n){return r(n)+n.duration-n.endDelay}))):t.endDelay,a}var vn=0;function gn(n){var t=O(u,n),e=O(i,n),r=on(e,n),a=rn(n.targets),o=pn(a,r),c=hn(o,e),s=vn;return vn++,D(t,{id:s,children:[],animatables:a,animations:o,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var mn,yn=[],wn=[],bn=function(){function n(){mn=requestAnimationFrame(t)}function t(t){var e=yn.length;if(e){var r=0;while(r<e){var a=yn[r];if(a.paused){var u=yn.indexOf(a);u>-1&&(yn.splice(u,1),e=yn.length)}else a.tick(t);r++}n()}else mn=cancelAnimationFrame(mn)}return n}();function Mn(){document.hidden?(yn.forEach((function(n){return n.pause()})),wn=yn.slice(0),xn.running=yn=[]):wn.forEach((function(n){return n.play()}))}function xn(n){void 0===n&&(n={});var t,e=0,r=0,a=0,u=0,i=null;function o(n){var t=window.Promise&&new Promise((function(n){return i=n}));return n.finished=t,t}var c=gn(n);o(c);function f(){var n=c.direction;"alternate"!==n&&(c.direction="normal"!==n?"normal":"reverse"),c.reversed=!c.reversed,t.forEach((function(n){return n.reversed=c.reversed}))}function l(n){return c.reversed?c.duration-n:n}function d(){e=0,r=l(c.currentTime)*(1/xn.speed)}function p(n,t){t&&t.seek(n-t.timelineOffset)}function h(n){if(c.reversePlayback)for(var e=u;e--;)p(n,t[e]);else for(var r=0;r<u;r++)p(n,t[r])}function v(n){var t=0,e=c.animations,r=e.length;while(t<r){var a=e[t],u=a.animatable,i=a.tweens,o=i.length-1,f=i[o];o&&(f=b(i,(function(t){return n<t.end}))[0]||f);for(var l=s(n-f.start-f.delay,0,f.duration)/f.duration,d=isNaN(l)?1:f.easing(l),p=f.to.strings,h=f.round,v=[],g=f.to.numbers.length,m=void 0,y=0;y<g;y++){var w=void 0,M=f.to.numbers[y],x=f.from.numbers[y]||0;w=f.isPath?nn(f.value,d*M):x+d*(M-x),h&&(f.isColor&&y>2||(w=Math.round(w*h)/h)),v.push(w)}var k=p.length;if(k){m=p[0];for(var C=0;C<k;C++){p[C];var O=p[C+1],D=v[C];isNaN(D)||(m+=O?D+O:D+" ")}}else m=v[0];fn[a.type](u.target,a.property,m,u.transforms),a.currentValue=m,t++}}function g(n){c[n]&&!c.passThrough&&c[n](c)}function m(){c.remaining&&!0!==c.remaining&&c.remaining--}function y(n){var u=c.duration,d=c.delay,p=u-c.endDelay,y=l(n);c.progress=s(y/u*100,0,100),c.reversePlayback=y<c.currentTime,t&&h(y),!c.began&&c.currentTime>0&&(c.began=!0,g("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,g("loopBegin")),y<=d&&0!==c.currentTime&&v(0),(y>=p&&c.currentTime!==u||!u)&&v(u),y>d&&y<p?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,g("changeComplete")),c.currentTime=s(y,0,u),c.began&&g("update"),n>=u&&(r=0,m(),c.remaining?(e=a,g("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&f()):(c.paused=!0,c.completed||(c.completed=!0,g("loopComplete"),g("complete"),!c.passThrough&&"Promise"in window&&(i(),o(c)))))}return c.reset=function(){var n=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===n,c.remaining=c.loop,t=c.children,u=t.length;for(var e=u;e--;)c.children[e].reset();(c.reversed&&!0!==c.loop||"alternate"===n&&1===c.loop)&&c.remaining++,v(c.reversed?c.duration:0)},c.set=function(n,t){return ln(n,t),c},c.tick=function(n){a=n,e||(e=a),y((a+(r-e))*xn.speed)},c.seek=function(n){y(l(n))},c.pause=function(){c.paused=!0,d()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,yn.push(c),d(),mn||bn())},c.reverse=function(){f(),d()},c.restart=function(){c.reset(),c.play()},c.reset(),c.autoplay&&c.play(),c}function kn(n,t){for(var e=t.length;e--;)k(n,t[e].animatable.target)&&t.splice(e,1)}function Cn(n){for(var t=en(n),e=yn.length;e--;){var r=yn[e],a=r.animations,u=r.children;kn(t,a);for(var i=u.length;i--;){var o=u[i],c=o.animations;kn(t,c),c.length||o.children.length||u.splice(i,1)}a.length||u.length||r.pause()}}function On(n,t){void 0===t&&(t={});var e=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,u=t.axis,i=t.from||0,o="first"===i,c="center"===i,s="last"===i,f=d.arr(n),l=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,h=E(f?n[1]:n)||0,v=t.start||0+(f?l:0),g=[],m=0;return function(n,t,d){if(o&&(i=0),c&&(i=(d-1)/2),s&&(i=d-1),!g.length){for(var y=0;y<d;y++){if(a){var w=c?(a[0]-1)/2:i%a[0],b=c?(a[1]-1)/2:Math.floor(i/a[0]),M=y%a[0],x=Math.floor(y/a[0]),k=w-M,C=b-x,O=Math.sqrt(k*k+C*C);"x"===u&&(O=-k),"y"===u&&(O=-C),g.push(O)}else g.push(Math.abs(i-y));m=Math.max.apply(Math,g)}r&&(g=g.map((function(n){return r(n/m)*m}))),"reverse"===e&&(g=g.map((function(n){return u?n<0?-1*n:-n:Math.abs(m-n)})))}var D=f?(p-l)/m:l;return v+D*(Math.round(100*g[t])/100)+h}}function Dn(n){void 0===n&&(n={});var t=xn(n);return t.duration=0,t.add=function(e,r){var a=yn.indexOf(t),u=t.children;function o(n){n.passThrough=!0}a>-1&&yn.splice(a,1);for(var c=0;c<u.length;c++)o(u[c]);var s=D(e,O(i,n));s.targets=s.targets||n.targets;var f=t.duration;s.autoplay=!1,s.direction=t.direction,s.timelineOffset=d.und(r)?f:_(r,f),o(t),t.seek(s.timelineOffset);var l=xn(s);o(l),u.push(l);var p=hn(u,n);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}"undefined"!==typeof document&&document.addEventListener("visibilitychange",Mn),xn.version="3.1.0",xn.speed=1,xn.running=yn,xn.remove=Cn,xn.get=X,xn.set=ln,xn.convertPx=L,xn.path=U,xn.setDashoffset=G,xn.stagger=On,xn.timeline=Dn,xn.easing=y,xn.penner=m,xn.random=function(n,t){return Math.floor(Math.random()*(t-n+1))+n};var Bn=xn,In={data:function(){return{countDown:5}},created:function(){var n=this;this.isRunning=!0,this.countDown>0&&setInterval((function(){n.countDown--}),1e3)},updated:function(){this.countDown<0&&(this.countDown=0,this.$router.push("/detail/"+this.$route.params.id+"/training"))},methods:{animeTest:function(){Bn({targets:".css-selector-demo",translateX:250})}}},Pn=In,Tn=(e("dd92"),e("2877")),En=Object(Tn["a"])(Pn,r,a,!1,null,null,null);t["default"]=En.exports},dd92:function(n,t,e){"use strict";var r=e("93e0"),a=e.n(r);a.a}}]);
//# sourceMappingURL=chunk-b115056e.3fbfcf92.js.map