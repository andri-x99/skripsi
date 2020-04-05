(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ba={G:!0},ca={};try{ca.__proto__=ba;m=ca.G;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=l;
function da(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(n)n(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.i=b.prototype}var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function fa(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ha=fa(this);function p(a,b){if(b){var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ea(c,a,{configurable:!0,writable:!0,value:b})}}
p("Array.prototype.findIndex",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++)if(b.call(c,d[f],f,d)){b=f;break a}b=-1}return b}});p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
var ia=function(){function a(){function c(){}new c;Reflect.construct(c,[],function(){});return new c instanceof c}if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();p("Reflect.construct",function(){return ia});
p("Object.setPrototypeOf",function(a){return a||n});p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(k){return k};var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var h=0;!(f=b.next()).done;)e.push(c.call(d,f.value,h++))}else for(f=b.length,h=0;h<f;h++)e.push(c.call(d,b[h],h));return e}});var q=this||self;function r(){}
function t(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ja(a){var b=t(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function la(a,b){function c(){}c.prototype=b.prototype;a.i=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.S=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};var ma=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function na(a,b){if(b)a=a.replace(oa,"&amp;").replace(pa,"&lt;").replace(qa,"&gt;").replace(ra,"&quot;").replace(sa,"&#39;").replace(ta,"&#0;");else{if(!ua.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ta,"&#0;"))}return a}
var oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/;function va(a,b){return a<b?-1:a>b?1:0};var v;a:{var wa=q.navigator;if(wa){var xa=wa.userAgent;if(xa){v=xa;break a}}v=""};var ya;var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Aa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ba=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,
b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,h=0;h<c;h++)if(h in f){var k=f[h];b.call(void 0,k,h,a)&&(d[e++]=k)}return d};function Ca(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Da(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function Ea(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}var Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ga(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function w(a){this.b=Ha===Ha&&a||"";this.c=Ia}w.prototype.s=!0;w.prototype.m=function(){return this.b.toString()};w.prototype.B=!0;w.prototype.a=function(){return 1};var Ia={},Ha={};function x(){this.b="";this.f=Ja;this.c=null}x.prototype.B=!0;x.prototype.a=function(){return this.c};x.prototype.s=!0;x.prototype.m=function(){return this.b.toString()};function y(a){return a instanceof x&&a.constructor===x&&a.f===Ja?a.b:"type_error:SafeHtml"}function z(a){if(a instanceof x)return a;var b="object"==typeof a,c=null;b&&a.B&&(c=a.a());a=na(b&&a.s?a.m():String(a));return A(a,c)}
function Ka(a){function b(f){Array.isArray(f)?Aa(f,b):(f=z(f),e.push(y(f).toString()),f=f.a(),0==d?d=f:0!=f&&d!=f&&(d=null))}var c=z(La),d=c.a(),e=[];Aa(a,b);return A(e.join(y(c).toString()),d)}function Ma(a){return Ka(Array.prototype.slice.call(arguments))}var Ja={};function A(a,b){var c=new x;c.b=a;c.c=b;return c}A("<!DOCTYPE html>",0);var La=A("",0),Na=A("<br>",0);var Oa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=y(La);return!b.parentElement});function Pa(a,b){if(Oa())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=y(b)};function Qa(a){return a=na(a,void 0)};var Ra={},Sa={};function B(){throw Error("Do not instantiate directly");}B.prototype.u=null;B.prototype.b=function(){return this.a};B.prototype.toString=function(){return this.a};B.prototype.c=function(){if(this.v!==Sa)throw Error("Sanitized content was not of kind URI.");return new w(this.toString())};function Ta(){B.call(this)}la(Ta,B);Ta.prototype.v=Ra;function Ua(a){Ua[" "](a);return a}Ua[" "]=r;function Va(a,b){var c=Wa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Xa=-1!=v.indexOf("Opera"),C=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"),Ya=-1!=v.indexOf("Edge"),D=-1!=v.indexOf("Gecko")&&!(-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"))&&!(-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE"))&&-1==v.indexOf("Edge"),E=-1!=v.toLowerCase().indexOf("webkit")&&-1==v.indexOf("Edge"),Za=-1!=v.indexOf("Macintosh");function $a(){var a=q.document;return a?a.documentMode:void 0}var ab;
a:{var bb="",cb=function(){var a=v;if(D)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ya)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(E)return/WebKit\/(\S+)/.exec(a);if(Xa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();cb&&(bb=cb?cb[1]:"");if(C){var db=$a();if(null!=db&&db>parseFloat(bb)){ab=String(db);break a}}ab=bb}var eb=ab,Wa={};
function F(a){return Va(a,function(){for(var b=0,c=ma(String(eb)).split("."),d=ma(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;b=va(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==h[2].length,0==k[2].length)||va(h[2],k[2]);h=h[3];k=k[3]}while(0==b)}return 0<=b})}var G;G=q.document&&C?$a():void 0;var fb=function(a){function b(c){this.a=c}b.prototype=a.prototype;return function(c,d){c=new b(String(c));void 0!==d&&(c.u=d);return c}}(Ta),gb={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function hb(a){return gb[a]}var ib=/[\x00\x22\x27\x3c\x3e]/g;var jb=!C||9<=Number(G),kb=!D&&!C||C&&9<=Number(G)||D&&F("1.9.1"),lb=C&&!F("9"),mb=C||Xa||E;function H(a,b){this.a=void 0!==a?a:0;this.b=void 0!==b?b:0}g=H.prototype;g.Xa=function(){return new H(this.a,this.b)};g.V=function(a){return a instanceof H&&(this==a?!0:this&&a?this.a==a.a&&this.b==a.b:!1)};g.ceil=function(){this.a=Math.ceil(this.a);this.b=Math.ceil(this.b);return this};g.floor=function(){this.a=Math.floor(this.a);this.b=Math.floor(this.b);return this};g.round=function(){this.a=Math.round(this.a);this.b=Math.round(this.b);return this};
g.Za=function(a,b){a instanceof H?(this.a+=a.a,this.b+=a.b):(this.a+=Number(a),"number"===typeof b&&(this.b+=b));return this};g.Ya=function(a,b){this.a*=a;this.b*="number"===typeof b?b:a;return this};g.ub=function(a,b){a=a*Math.PI/180;b=b||new H(0,0);var c=this.a,d=this.b,e=Math.cos(a);a=Math.sin(a);this.a=(c-b.a)*e-(d-b.b)*a+b.a;this.b=(c-b.a)*a+(d-b.b)*e+b.b};function nb(a,b){this.width=a;this.height=b}g=nb.prototype;g.$a=function(){return new nb(this.width,this.height)};g.ua=function(){return Math.max(this.width,this.height)};g.Ha=function(){return Math.min(this.width,this.height)};g.qb=function(){return 2*(this.width+this.height)};g.aspectRatio=function(){return this.width/this.height};g.gb=function(){return!(this.width*this.height)};g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.Z=function(a){return this.width<=a.width&&this.height<=a.height};g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ob(a,b){a.width*=b;a.height*=b;return a}g.wb=function(a){a=this.aspectRatio()<=a.aspectRatio()?a.width/this.width:a.height/this.height;return ob(this,a)};
g.xb=function(a){a=this.aspectRatio()>a.aspectRatio()?a.width/this.width:a.height/this.height;return ob(this,a)};function pb(a){return a?new I(J(a)):ya||(ya=new I)}function qb(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:d=rb(document,"*",a,b);return d||null}
function sb(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,h;h=b[f];f++)e==h.nodeName&&(a[d++]=h);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;h=b[f];f++){e=h.className;var k;if(k="function"==typeof e.split)k=0<=za(e.split(/\s+/),c);k&&(a[d++]=h)}a.length=d;return a}return b}
function rb(a,b,c,d){var e=d||a,f=b&&"*"!=b?String(b).toUpperCase():"";return e.querySelectorAll&&e.querySelector&&(f||c)?e.querySelector(f+(c?"."+c:"")):sb(a,b,c,d)[0]||null}function tb(a,b){Da(b,function(c,d){c&&"object"==typeof c&&c.s&&(c=c.m());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ub.hasOwnProperty(d)?a.setAttribute(ub[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var ub={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function xb(a){a=a.document;a=K(a)?a.documentElement:a.body;return new nb(a.clientWidth,a.clientHeight)}function yb(a){return a.scrollingElement?a.scrollingElement:!E&&K(a)?a.documentElement:a.body||a.documentElement}
function L(a){return a.parentWindow||a.defaultView}function zb(a,b,c,d){function e(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}for(;d<c.length;d++){var f=c[d];ja(f)&&!Ab(f)?Aa(Bb(f)?Ca(f):f,e):e(f)}}function M(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function K(a){return"CSS1Compat"==a.compatMode}function Cb(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Db(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}function N(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a}function Ab(a){return u(a)&&0<a.nodeType}function Eb(a){return u(a)&&1==a.nodeType}function Fb(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Gb(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return Hb(b,a)}function Hb(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1}function J(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ib(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Cb(a),a.appendChild(J(a).createTextNode(String(b)))}function Jb(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Jb(a,b,c,d))return!0;a=a.nextSibling}return!1}var Kb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},O={IMG:" ",BR:"\n"};
function Lb(a){return Mb(a)&&Nb(a)}function Mb(a){return C&&!F("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}function Nb(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}function Ob(a){if(lb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Pb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");lb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Pb(a,b,c){if(!(a.nodeName in Kb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in O)b.push(O[a.nodeName]);else for(a=a.firstChild;a;)Pb(a,b,c),a=a.nextSibling}function Bb(a){if(a&&"number"==typeof a.length){if(u(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==t(a))return"function"==typeof a.item}return!1}
function P(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Qb(a,function(f){var h;(h=!e||f.nodeName==e)&&!(h=!c)&&(h="string"===typeof f.className)&&(h=0<=za(f.className.split(/\s+/),c));return h},!0,d)}function Qb(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}function I(a){this.a=a||q.document||document}g=I.prototype;g.la=pb;g.yb=function(a){this.a=a};g.ha=function(){return this.a};
g.I=function(a){return"string"===typeof a?this.a.getElementById(a):a};g.Fa=function(a){return"string"===typeof a?this.a.getElementById(a):a};g.O=I.prototype.I;g.Oa=function(a,b){return(b||this.a).getElementsByTagName(String(a))};g.J=function(a,b,c){return sb(this.a,a,b,c)};g.na=function(a,b,c){return rb(this.a,a,b,c)};g.oa=function(a,b){var c=(b=b||this.a)||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):sb(document,"*",a,b)};g.ma=function(a,b){return qb(a,b||this.a)};
g.Ga=function(a,b){return qb(a,b||this.a)};g.P=I.prototype.J;g.Ab=tb;g.Ja=function(a){return xb(a||L(this.a)||window)};g.ia=function(){var a=L(this.a),b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=xb(a).height,K(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}return c};
g.H=function(a,b,c){var d=this.a,e=arguments,f=String(e[0]),h=e[1];if(!jb&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Qa(h.name),'"');if(h.type){f.push(' type="',Qa(h.type),'"');var k={};Ga(k,h);delete k.type;h=k}f.push(">");f=f.join("")}f=M(d,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):tb(f,h));2<e.length&&zb(d,f,e,2);return f};g.R=I.prototype.H;g.Na=function(a){return this.a.createTextNode(String(a))};
g.U=function(a,b,c){var d=this.a;c=!!c;for(var e=M(d,"TABLE"),f=e.appendChild(M(d,"TBODY")),h=0;h<a;h++){for(var k=M(d,"TR"),vb=0;vb<b;vb++){var wb=M(d,"TD");c&&Ib(wb,"\u00a0");k.appendChild(wb)}f.appendChild(k)}return e};g.vb=function(a){var b=this.a;var c=M(b,"DIV");C?(a=Ma(Na,a),Pa(c,a),c.removeChild(c.firstChild)):Pa(c,a);if(1==c.childNodes.length)c=c.removeChild(c.firstChild);else{for(b=b.createDocumentFragment();c.firstChild;)b.appendChild(c.firstChild);c=b}return c};g.eb=function(){return K(this.a)};
g.ka=function(){return yb(this.a)};g.ja=function(){var a=this.a,b=yb(a);a=L(a);return C&&F("10")&&a.pageYOffset!=b.scrollTop?new H(b.scrollLeft,b.scrollTop):new H(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};g.aa=function(a){a=a||this.a;try{var b=a&&a.activeElement;var c=b&&b.nodeName?b:null}catch(d){c=null}return c};g.La=function(a,b){a.appendChild(b)};g.Ka=function(a,b){zb(J(a),a,arguments,1)};g.Ma=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.tb=Cb;g.cb=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};g.bb=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};g.ab=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};g.Pa=Db;g.Qa=function(a,b){var c=b.parentNode;c&&c.replaceChild(a,b)};g.$=function(a){var b,c=a.parentNode;if(c&&11!=c.nodeType){if(a.removeNode)return a.removeNode(!1);for(;b=a.firstChild;)c.insertBefore(b,a);return Db(a)}};
g.fa=function(a){return kb&&void 0!=a.children?a.children:Ba(a.childNodes,function(b){return 1==b.nodeType})};g.pa=function(a){return void 0!==a.firstElementChild?a.firstElementChild:N(a.firstChild,!0)};g.sa=function(a){return void 0!==a.lastElementChild?a.lastElementChild:N(a.lastChild,!1)};g.va=function(a){return void 0!==a.nextElementSibling?a.nextElementSibling:N(a.nextSibling,!0)};g.Da=function(a){return void 0!==a.previousElementSibling?a.previousElementSibling:N(a.previousSibling,!1)};
g.wa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};g.Ea=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};g.jb=Ab;g.fb=Eb;g.lb=function(a){return u(a)&&a.window==a};g.Ca=function(a){var b;if(mb&&!(C&&F("9")&&!F("10")&&q.SVGElement&&a instanceof q.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return Eb(b)?b:null};
g.contains=Fb;
g.T=function(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(C&&!(9<=Number(G))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Hb(a,b):!c&&Fb(e,b)?-1*Gb(a,b):!d&&Fb(f,a)?Gb(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=J(a);c=d.createRange();
c.selectNode(a);c.collapse(!0);a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(q.Range.START_TO_END,a)};g.W=function(a){var b,c=arguments.length;if(!c)return null;if(1==c)return arguments[0];var d=[],e=Infinity;for(b=0;b<c;b++){for(var f=[],h=arguments[b];h;)f.unshift(h),h=h.parentNode;d.push(f);e=Math.min(e,f.length)}f=null;for(b=0;b<e;b++){h=d[0][b];for(var k=1;k<c;k++)if(h!=d[k][b])return f;f=h}return f};g.Ba=J;g.qa=function(a){return a.contentDocument||a.contentWindow.document};
g.ra=function(a){try{var b;if(!(b=a.contentWindow)){if(a.contentDocument){var c=a.contentDocument;var d=c?L(c):window}else d=null;b=d}return b}catch(e){}return null};g.Bb=Ib;g.Aa=function(a){if("outerHTML"in a)return a.outerHTML;var b=M(J(a),"DIV");b.appendChild(a.cloneNode(!0));return b.innerHTML};g.X=function(a,b){var c=[];return Jb(a,b,c,!0)?c[0]:void 0};g.Y=function(a,b){var c=[];Jb(a,b,c,!1);return c};g.ib=Lb;g.zb=function(a,b){b?a.tabIndex=0:(a.tabIndex=-1,a.removeAttribute("tabIndex"))};
g.hb=function(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Mb(a)||Nb(a)):Lb(a))&&C){var c;"function"!=t(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};g.Ia=Ob;g.ya=function(a){return Ob(a).length};
g.za=function(a,b){b=b||J(a).body;for(var c=[];a&&a!=b;){for(var d=a;d=d.previousSibling;)c.unshift(Ob(d));a=a.parentNode}return c.join("").replace(/^[\s\xa0]+/,"").replace(/ +/g," ").length};
g.xa=function(a,b,c){a=[a];for(var d=0,e=null;0<a.length&&d<b;)if(e=a.pop(),!(e.nodeName in Kb))if(3==e.nodeType){var f=e.nodeValue.replace(/(\r\n|\r|\n)/g,"").replace(/ +/g," ");d+=f.length}else if(e.nodeName in O)d+=O[e.nodeName].length;else for(f=e.childNodes.length-1;0<=f;f--)a.push(e.childNodes[f]);u(c)&&(c.sb=e?e.nodeValue.length+b-d-1:0,c.node=e);return e};g.kb=Bb;g.da=P;g.ca=function(a,b,c){return P(a,null,b,c)};g.ba=Qb;g.ea=function(a){return a.getContext("2d")};var Rb=!/^\s*class\s*\{\s*\}\s*$/.test(function(){}.toString());/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){if(Rb&&!HTMLElement.es5Shimmed&&void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;HTMLElement.es5Shimmed=!0;Object.setPrototypeOf(HTMLElement,a)}})();function Q(a){var b=HTMLElement.call(this)||this;a&&("string"===typeof a&&(a=[a]),document.body.dispatchEvent(new CustomEvent("devsite-load-custom-elements",{bubbles:!0,detail:a})));return b}da(Q,HTMLElement);Q.prototype.F=function(){console.warn(this.tagName,"has not implemented update")};Q.prototype.o=function(a){a=void 0===a?"":a;return document.createRange().createContextualFragment(a||"")};
Q.prototype.D=function(a,b,c){a&&b?a.parentNode.replaceChild(document.importNode(b,!0),a):!b&&a?a.parentNode.removeChild(a):!a&&b&&(c?(a=document.importNode(b,!0),c.parentElement.insertBefore(a,c.nextSibling)):this.appendChild(document.importNode(b,!0)))};function R(){this.g=this.g;this.b=this.b}g=R.prototype;g.g=!1;g.K=function(){return this.g};g.ga=R.prototype.K;g.w=function(){this.g||(this.g=!0,this.l())};g.rb=function(a){a=ka(Sb,a);this.g?a():(this.b||(this.b=[]),this.b.push(a))};g.l=function(){if(this.b)for(;this.b.length;)this.b.shift()()};function Sb(a){a&&"function"==typeof a.w&&a.w()};var Tb=!C||9<=Number(G),Ub=!C||9<=Number(G),Vb=C&&!F("9"),Wb=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{q.addEventListener("test",r,b),q.removeEventListener("test",r,b)}catch(c){}return a}();function S(a,b){this.type=a;this.b=this.target=b;this.M=this.f=!1}S.prototype.o=function(){this.f=!0};S.prototype.c=function(){this.M=!0};function T(a,b){S.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.F=this.D=0;this.key="";this.A=this.C=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.L=null;this.N=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(D){a:{try{Ua(b.nodeName);
var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.D=E||void 0!==a.offsetX?a.offsetX:a.layerX,this.F=E||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||
0,this.screenY=a.screenY||0);this.button=a.button;this.C=a.keyCode||0;this.key=a.key||"";this.A=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.N=Za?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Xb[a.pointerType]||"";this.L=a.state;this.a=a;a.defaultPrevented&&this.c()}}la(T,S);var Yb=[1,4,2],Xb={2:"touch",3:"pen",4:"mouse"};
T.prototype.Eb=function(){return(Tb?0==this.a.button:"click"==this.type?!0:!!(this.a.button&Yb[0]))&&!(E&&Za&&this.ctrlKey)};T.prototype.o=function(){T.i.o.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};T.prototype.c=function(){T.i.c.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Vb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};T.prototype.Db=function(){return this.a};var U="closure_listenable_"+(1E6*Math.random()|0),Zb=0;function $b(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.b=e;this.key=++Zb;this.h=this.j=!1}function V(a){a.h=!0;a.listener=null;a.a=null;a.src=null;a.b=null};function ac(a){this.src=a;this.a={};this.b=0}g=ac.prototype;g.Ta=function(){var a=0,b;for(b in this.a)a+=this.a[b].length;return a};g.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=bc(a,b,d,e);-1<h?(b=a[h],c||(b.j=!1)):(b=new $b(b,this.src,f,!!d,e),b.j=c,a.push(b));return b};
g.Va=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=bc(e,b,c,d);return-1<b?(V(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};g.Wa=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,V(d[e]);delete this.a[c];this.b--}return b};g.ta=function(a,b){a=this.a[a.toString()];var c=[];if(a)for(var d=0;d<a.length;++d){var e=a[d];e.capture==b&&c.push(e)}return c};
g.Ua=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return Ea(this.a,function(f){for(var h=0;h<f.length;++h)if(!(c&&f[h].type!=d||e&&f[h].capture!=b))return!0;return!1})};function bc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.h&&f.listener==b&&f.capture==!!c&&f.b==d)return e}return-1};var cc="closure_lm_"+(1E6*Math.random()|0),dc={},ec=0;function fc(a,b,c,d,e){if(d&&d.once)return gc(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)fc(a,b[f],c,d,e);return null}c=hc(c);return a&&a[U]?W(a,b,c,u(d)?!!d.capture:!!d,e):ic(a,b,c,!1,d,e)}
function ic(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=u(e)?!!e.capture:!!e,k=X(a);k||(a[cc]=k=new ac(a));c=k.add(b,c,d,h,f);if(c.a)return c;d=jc();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Wb||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(kc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ec++;return c}
function jc(){var a=lc,b=Ub?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function gc(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)gc(a,b[f],c,d,e);return null}c=hc(c);return a&&a[U]?a.C(b,c,u(d)?!!d.capture:!!d,e):ic(a,b,c,!0,d,e)}
function mc(a){if("number"!==typeof a&&a&&!a.h){var b=a.src;if(b&&b[U])b.a(a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(kc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ec--;if(c=X(b)){d=a.type;if(d in c.a){var e=c.a[d],f=za(e,a),h;(h=0<=f)&&Array.prototype.splice.call(e,f,1);h&&(V(a),0==c.a[d].length&&(delete c.a[d],c.b--))}0==c.b&&(c.src=null,b[cc]=null)}else V(a)}}}
function kc(a){return a in dc?dc[a]:dc[a]="on"+a}function nc(a,b,c,d){var e=!0;if(a=X(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.h&&(f=oc(f,d),e=e&&!1!==f)}return e}function oc(a,b){var c=a.listener,d=a.b||a.src;a.j&&mc(a);return c.call(d,b)}
function lc(a,b){if(a.h)return!0;if(!Ub){if(!b)a:{b=["window","event"];for(var c=q,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new T(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.f&&0<=e;e--){b.b=d[e];var f=nc(d[e],a,!0,b);c=c&&f}for(e=0;!b.f&&e<d.length;e++)b.b=d[e],f=nc(d[e],a,!1,b),c=
c&&f}return c}return oc(a,new T(b,this))}function X(a){a=a[cc];return a instanceof ac?a:null}var pc="__closure_events_fn_"+(1E9*Math.random()>>>0);function hc(a){if("function"==t(a))return a;a[pc]||(a[pc]=function(b){return a.handleEvent(b)});return a[pc]};function Y(a){R.call(this);this.c=a;this.a={}}la(Y,R);var qc=[];g=Y.prototype;g.nb=function(a,b,c,d,e){return W(this,a,b,c,d,e)};function W(a,b,c,d,e,f){Array.isArray(c)||(c&&(qc[0]=c.toString()),c=qc);for(var h=0;h<c.length;h++){var k=fc(b,c[h],d||a.handleEvent,e||!1,f||a.c||a);if(!k)break;a.a[k.key]=k}return a}g.Sa=function(a,b,c,d){return rc(this,a,b,c,d)};g.mb=function(a,b,c,d,e){return rc(this,a,b,c,d,e)};
function rc(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)rc(a,b,c[h],d,e,f);else{b=gc(b,c,d||a.handleEvent,e,f||a.c||a);if(!b)return a;a.a[b.key]=b}return a}g.ob=function(a,b,c,d){W(b,a,c,d,this.c||this);return this};g.pb=function(a,b,c,d,e){W(b,a,c,d,e||this.c||this);return this};g.Ra=function(){var a=0,b;for(b in this.a)Object.prototype.hasOwnProperty.call(this.a,b)&&a++;return a};
function sc(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)sc(a,b,c[h],d,e,f);else d=d||a.handleEvent,e=u(e)?!!e.capture:!!e,f=f||a.c||a,d=hc(d),e=!!e,b&&b[U]?c=b.A(c,d,e,f):b?(b=X(b))?(c=b.a[c.toString()],b=-1,c&&(b=bc(c,d,e,f)),c=-1<b?c[b]:null):c=null:c=null,c&&(mc(c),delete a.a[c.key])}g.Cb=function(a,b,c,d,e){sc(b,a,c,d,e||this.c||this,this);return this};function tc(a){Da(a.a,function(b,c){this.a.hasOwnProperty(c)&&mc(b)},a);a.a={}}g.l=function(){Y.i.l.call(this);tc(this)};
g.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Z(){var a=Q.call(this,["devsite-snackbar"])||this;a.f=new Y;a.c=!1;a.a=null;a.b=null;return a}da(Z,Q);function uc(){return"devsite-heading"}
Z.prototype.connectedCallback=function(){if(!this.c){vc(this);if(this.parentNode){if(this.a&&"docs"===document.body.getAttribute("layout")&&"h2"===this.getAttribute("level")){var a="Kembali ke atas".replace(ib,hb);var b=fb('<a href="#top_of_page" class="devsite-back-to-top-link material-icons" data-title="'+a+'"></a>');a=pb();a=M(a.a,"DIV");if(u(b))if(b instanceof B){if(b.v!==Ra)throw Error("Sanitized content was not of kind HTML.");b=A(b.toString(),b.u||null)}else b=z("zSoyz");else b=z(String(b));
Pa(a,b);1==a.childNodes.length&&(b=a.firstChild,1==b.nodeType&&(a=b));this.a.appendChild(a);this.setAttribute("back-to-top","")}document.body.dispatchEvent(new CustomEvent("devsite-heading-connected"))}this.c=!0}};Z.prototype.disconnectedCallback=function(){tc(this.f)};
function vc(a){a.a=a.querySelector("h1, h2, h3, h4, h5, h6");if(a.a){var b=P(a,"header");if(!b||-1!==Array.from(b.classList).findIndex(function(d){return d.includes("devsite-landing-")})){b=a.a.tagName.toLowerCase();var c=wc(a.a);if(!a.hasAttribute("text")){if(!c){Db(a);return}a.setAttribute("text",c)}a.b||(c=xc(a.a),a.a.removeAttribute("name"),a.b=a.a.id=c);a.setAttribute("for",a.b);a.hasAttribute("level")||a.setAttribute("level",b);a.hasAttribute("link")||(b="h1"!==b&&"docs"===document.body.getAttribute("layout")&&
!a.a.classList.contains("no-link")&&!P(a,"th"),c=a.a.classList.contains("add-link"),(b||c)&&a.setAttribute("link",""));a.hasAttribute("toc")||a.a.matches('h2:not(.hide-from-toc):not([id="contents"]):not([name="contents"]):not([id="table-of-contents"]), h3:not(.hide-from-toc):not([id="contents"]):not([name="contents"]):not([id="table-of-contents"])')&&a.setAttribute("toc","")}}}
function xc(a){var b=a.id||a.getAttribute("name");if(b)b=encodeURI(decodeURI(b));else{a=wc(a);b=a=encodeURI((void 0===a?"":a).toLowerCase().trim().replace(/\s+/g,"-").replace(/[!@#\$%\^&\*\(\)\{\}<>\?\\\/'"]+/g,"").trim()||"heading");for(var c=1;document.getElementById(b);)b=a+"_"+c++}return b}
function wc(a){return Array.from(a.childNodes).filter(function(b){return b.textContent&&(3===b.nodeType||1===b.nodeType&&!b.classList.contains("material-icons")&&null!==b.offsetParent)}).map(function(b){return b.textContent.trim()}).join(" ")}Z.getTocHeadingSelector=function(){return'h2:not(.hide-from-toc):not([id="contents"]):not([name="contents"]):not([id="table-of-contents"]), h3:not(.hide-from-toc):not([id="contents"]):not([name="contents"]):not([id="table-of-contents"])'};
Z.prototype.disconnectedCallback=Z.prototype.disconnectedCallback;Z.prototype.connectedCallback=Z.prototype.connectedCallback;Z.getTagName=uc;try{window.customElements.define(uc(),Z)}catch(a){console.warn("devsite.app.customElement.DevsiteHeading",a)};}).call(this);
