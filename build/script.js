!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=67)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(31))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),o=n(13),i=n(18);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(34),o=n(35);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(0),o=n(17).f,i=n(3),c=n(22),u=n(14),a=n(39),f=n(49);t.exports=function(t,e){var n,l,s,p,d,v=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[v]||u(v,{}):(r[v]||{}).prototype)for(l in e){if(p=e[l],s=t.noTargetGet?(d=o(n,l))&&d.value:n[l],!f(h?l:v+(g?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),c(n,l,p,t)}}},function(t,e,n){var r=n(19),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(4),o=n(21),i=n(7),c=n(20),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(3);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(9),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r,o,i=n(59),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(f||l)&&(a=function(t){var e,n,r,o,a=this;return l&&(n=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(e=a.lastIndex),r=c.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),l&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,e,n){var r=n(4),o=n(32),i=n(18),c=n(11),u=n(20),a=n(2),f=n(21),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=u(e,!0),f)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),o=n(1),i=n(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(8),i=n(3),c=n(2),u=n(14),a=n(23),f=n(36),l=f.get,s=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,e,n,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),s(n).source=p.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(t,e,n){var r=n(8);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(50).forEach,o=n(56);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(0),o=n(8),i=n(2),c=n(24),u=n(29),a=n(55),f=o("wks"),l=r.Symbol,s=a?l:c;t.exports=function(t){return i(f,t)||(u&&i(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(10),o=n(26);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(14),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r,o,i,c=n(37),u=n(0),a=n(5),f=n(3),l=n(2),s=n(38),p=n(25),d=u.WeakMap;if(c){var v=new d,h=v.get,g=v.has,y=v.set;r=function(t,e){return y.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var x=s("state");p[x]=!0,r=function(t,e){return f(t,x,e),e},o=function(t){return l(t,x)?t[x]:{}},i=function(t){return l(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(23),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(8),o=n(24),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(2),o=n(40),i=n(17),c=n(13);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var l=n[f];r(t,l)||u(t,l,a(e,l))}}},function(t,e,n){var r=n(41),o=n(43),i=n(48),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(42),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(44),o=n(47).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(11),i=n(45).indexOf,c=n(25);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(11),o=n(15),i=n(46),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),l=i(c,f);if(t&&n!=n){for(;f>l;)if((u=a[l++])!=u)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(9),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(51),o=n(19),i=n(27),c=n(15),u=n(53),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,l=4==t,s=6==t,p=5==t||s;return function(d,v,h,g){for(var y,x,b=i(d),m=o(b),S=r(v,h,3),w=c(m.length),E=0,L=g||u,O=e?L(d,w):n?L(d,0):void 0;w>E;E++)if((p||E in m)&&(x=S(y=m[E],E,b),t))if(e)O[E]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:a.call(O,y)}else if(l)return!1;return s?-1:f||l?l:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5),o=n(54),i=n(28)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(29);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(10),o=n(4);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(13).f})},function(t,e,n){"use strict";var r=n(10),o=n(16);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(61),o=n(7),i=n(27),c=n(15),u=n(9),a=n(6),f=n(62),l=n(64),s=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n){return[function(n,r){var o=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,i){var a=n(e,t,this,i);if(a.done)return a.value;var d=o(t),v=String(this),h="function"==typeof i;h||(i=String(i));var g=d.global;if(g){var y=d.unicode;d.lastIndex=0}for(var x=[];;){var b=l(d,v);if(null===b)break;if(x.push(b),!g)break;""===String(b[0])&&(d.lastIndex=f(v,c(d.lastIndex),y))}for(var m,S="",w=0,E=0;E<x.length;E++){b=x[E];for(var L=String(b[0]),O=s(p(u(b.index),v.length),0),j=[],k=1;k<b.length;k++)j.push(void 0===(m=b[k])?m:String(m));var P=b.groups;if(h){var A=[L].concat(j,O,v);void 0!==P&&A.push(P);var T=String(i.apply(void 0,A))}else T=r(L,v,O,j,P,i);O>=w&&(S+=v.slice(w,O)+T,w=O+L.length)}return S+v.slice(w)}];function r(t,n,r,o,c,u){var a=r+t.length,f=o.length,l=h;return void 0!==c&&(c=i(c),l=v),e.call(u,l,(function(e,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":u=c[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>f){var s=d(l/10);return 0===s?e:s<=f?void 0===o[s-1]?i.charAt(1):o[s-1]+i.charAt(1):e}u=o[l-1]}return void 0===u?"":u}))}}))},function(t,e,n){"use strict";var r=n(3),o=n(22),i=n(1),c=n(28),u=n(16),a=c("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,s){var p=c(t),d=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=d&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!d||!v||"replace"===t&&!f||"split"===t&&!l){var h=/./[p],g=n(p,""[t],(function(t,e,n,r,o){return e.exec===u?d&&!o?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),y=g[0],x=g[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)}),s&&r(RegExp.prototype[p],"sham",!0)}}},function(t,e,n){"use strict";var r=n(63).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(9),o=n(6),i=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(12),o=n(16);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(0),o=n(66),i=n(26),c=n(3);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";n.r(e);n(30),n(57),n(58),n(60),n(65);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.btnBlock=document.createElement("div"),this.colorPicker=document.createElement("input"),this.clear=document.createElement("div"),this.scale=localStorage.getItem("scale")||1,this.color=localStorage.getItem("color")||"#ffffff",this.btnBlock.addEventListener("click",(function(t){return e.onScaleChange(t)})),this.colorPicker.addEventListener("input",(function(t){return e.onColorChange(t)})),this.clear.addEventListener("click",(function(){return e.reset()}))}var e,n,o;return e=t,(n=[{key:"onScaleChange",value:function(t){var e=this,n=document.querySelector("body");t&&(this.scale=+t.target.value.replace(/x/g,"")),function t(n){n.childNodes.forEach((function(n){if("#text"===n.nodeName&&n.nodeValue.replace(/\s+/g,"").length>0)if(n.parentNode.getAttribute("data-fz"))n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fz")*e.scale+"px";else{var r=window.getComputedStyle(n.parentNode,null).fontSize;n.parentNode.setAttribute("data-fz",+r.replace(/px/g,"")),n.parentNode.style.fontSize=n.parentNode.getAttribute("data-fz")*e.scale+"px"}else t(n)}))}(n),localStorage.setItem("scale",this.scale)}},{key:"onColorChange",value:function(t){document.querySelector("body").style.backgroundColor=t.target.value,localStorage.setItem("color",t.target.value)}},{key:"setBgColor",value:function(){document.querySelector("body").style.backgroundColor=this.color,this.colorPicker.value=this.color}},{key:"injectStyle",value:function(){var t=document.createElement("style");t.innerHTML="\n            .panel {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                position: fixed;\n                top: 10px;\n                right: 0;\n                border: 1px solid rgba(0,0,0, .2);\n                box-shadow: 0 0 20px rgba(0,0,0, .5);\n                width: 300px;\n                height: 60px;\n                background-color: #fff;\n            \n            }\n            \n            .scale {\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                width: 100px;\n                height: 40px;\n            }\n\n            .scale_btn {\n                display: block;\n                width: 40px;\n                height: 40px;\n                border: 1px solid rgba(0,0,0, .2);\n                border-radius: 4px;\n                font-size: 18px;\n            }\n            \n            .color {\n                width: 40px;\n                height: 40px;\n            }\n\n            .clear {\n                font-size: 20px;\n                cursor: pointer;\n            }\n        ",document.querySelector("head").appendChild(t)}},{key:"reset",value:function(){localStorage.clear(),this.scale=1,this.color="#ffffff",this.setBgColor(),this.onScaleChange()}},{key:"render",value:function(){this.injectStyle(),this.setBgColor(),this.onScaleChange();var t=document.createElement("input"),e=document.createElement("input"),n=document.createElement("div");n.append(this.btnBlock,this.colorPicker,this.clear),this.clear.innerHTML="$times",this.clear.classList.add("clear"),t.classList.add("scale_btn"),e.classList.add("scale_btn"),this.btnBlock.classList.add("scale"),this.colorPicker.classList.add("color"),t.setAttribute("type","button"),e.setAttribute("type","button"),t.setAttribute("value","1x"),e.setAttribute("value","1.5x"),this.colorPicker.setAttribute("type","color"),this.colorPicker.setAttribute("value","#ffffff"),this.btnBlock.append(t,e),n.classList.add("panel"),document.querySelector("body").append(n)}}])&&r(e.prototype,n),o&&r(e,o),t}();window.addEventListener("DOMContentLoaded",(function(){(new o).render()}))}]);