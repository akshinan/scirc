/*! This file is auto-generated */
!function(){"use strict";var t={d:function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ALT:function(){return j},BACKSPACE:function(){return d},COMMAND:function(){return T},CTRL:function(){return L},DELETE:function(){return b},DOWN:function(){return E},END:function(){return w},ENTER:function(){return h},ESCAPE:function(){return g},F10:function(){return P},HOME:function(){return A},LEFT:function(){return C},PAGEDOWN:function(){return v},PAGEUP:function(){return y},RIGHT:function(){return S},SHIFT:function(){return R},SPACE:function(){return m},TAB:function(){return p},UP:function(){return O},ZERO:function(){return _},displayShortcut:function(){return x},displayShortcutList:function(){return k},isAppleOS:function(){return s},isKeyboardEvent:function(){return V},modifiers:function(){return M},rawShortcut:function(){return Z},shortcutAriaLabel:function(){return D}});var e=function(){return e=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},e.apply(this,arguments)};Object.create;Object.create;function r(t){return t.toLowerCase()}var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],i=/[^A-Z0-9]+/gi;function u(t,n,e){return n instanceof RegExp?t.replace(n,e):n.reduce((function(t,n){return t.replace(n,e)}),t)}function c(t){return function(t){return t.charAt(0).toUpperCase()+t.substr(1)}(t.toLowerCase())}function f(t,n){return void 0===n&&(n={}),function(t,n){void 0===n&&(n={});for(var e=n.splitRegexp,c=void 0===e?o:e,f=n.stripRegexp,a=void 0===f?i:f,l=n.transform,s=void 0===l?r:l,d=n.delimiter,p=void 0===d?" ":d,h=u(u(t,c,"$1\0$2"),a,"\0"),g=0,m=h.length;"\0"===h.charAt(g);)g++;for(;"\0"===h.charAt(m-1);)m--;return h.slice(g,m).split("\0").map(s).join(p)}(t,e({delimiter:" ",transform:c},n))}var a=window.lodash,l=window.wp.i18n;function s(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!t){if("undefined"==typeof window)return!1;t=window}const{platform:n}=t.navigator;return-1!==n.indexOf("Mac")||(0,a.includes)(["iPad","iPhone"],n)}const d=8,p=9,h=13,g=27,m=32,y=33,v=34,w=35,A=36,C=37,O=38,S=39,E=40,b=46,P=121,j="alt",L="ctrl",T="meta",R="shift",_=48,M={primary:t=>t()?[T]:[L],primaryShift:t=>t()?[R,T]:[L,R],primaryAlt:t=>t()?[j,T]:[L,j],secondary:t=>t()?[R,j,T]:[L,R,j],access:t=>t()?[L,j]:[R,j],ctrl:()=>[L],alt:()=>[j],ctrlShift:()=>[L,R],shift:()=>[R],shiftAlt:()=>[R,j],undefined:()=>[]},Z=(0,a.mapValues)(M,(t=>function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return[...t(e),n.toLowerCase()].join("+")})),k=(0,a.mapValues)(M,(t=>function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const r=e(),o={[j]:r?"⌥":"Alt",[L]:r?"⌃":"Ctrl",[T]:"⌘",[R]:r?"⇧":"Shift"},i=t(e).reduce(((t,n)=>{const e=(0,a.get)(o,n,n);return r?[...t,e]:[...t,e,"+"]}),[]),u=f(n,{stripRegexp:/[^A-Z0-9`,\.]/gi});return[...i,u]})),x=(0,a.mapValues)(k,(t=>function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return t(n,e).join("")})),D=(0,a.mapValues)(M,(t=>function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const r=e(),o={[R]:"Shift",[T]:r?"Command":"Control",[L]:"Control",[j]:r?"Option":"Alt",",":(0,l.__)("Comma"),".":(0,l.__)("Period"),"`":(0,l.__)("Backtick")};return[...t(e),n].map((t=>f((0,a.get)(o,t,t)))).join(r?" ":" + ")}));function N(t){return[j,L,T,R].filter((n=>t[`${n}Key`]))}const V=(0,a.mapValues)(M,(t=>function(n,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;const o=t(r),i=N(n),u=o.filter((t=>!i.includes(t))),c=i.filter((t=>!o.includes(t)));if(u.length>0||c.length>0)return!1;let f=n.key.toLowerCase();return e?(n.altKey&&1===e.length&&(f=String.fromCharCode(n.keyCode).toLowerCase()),"del"===e&&(e="delete"),f===e.toLowerCase()):(0,a.includes)(o,f)}));(window.wp=window.wp||{}).keycodes=n}();