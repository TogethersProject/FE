(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{8445:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return r(1642)}])},1642:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),s=r(7),a=r(1163);r(8586),t.default=()=>{let[e,t]=(0,o.useState)("sign-in"),[r,i]=(0,o.useState)(""),[l,c]=(0,o.useState)(""),[u,p]=(0,o.useState)(!1),[d,f]=(0,o.useState)(!1),m=(0,o.useRef)(null),[y,b]=(0,o.useState)(!1),h=(0,a.useRouter)();(0,o.useEffect)(()=>{"true"===localStorage.getItem("isLoggedIn")&&f(!0)},[]);let j=e=>{b(!1),h.push(e)};return(0,n.jsxs)("div",{className:"main-screen ".concat(y?"sidebar-open":""),onClick:y?e=>{m.current&&!m.current.contains(e.target)&&b(!1)}:void 0,children:[(0,n.jsxs)("div",{className:"sidebar ".concat(y?"open":"closed"),ref:m,children:[(0,n.jsx)("div",{className:"sidebar-link",onClick:()=>j("/Search"),children:"Search"}),(0,n.jsx)("div",{className:"sidebar-link",onClick:()=>j("/Login"),children:"Login"}),(0,n.jsx)("div",{className:"sidebar-link",onClick:()=>j("/Mypage"),children:"My"}),(0,n.jsx)("div",{className:"sidebar-link",onClick:()=>j("/Chat"),children:"ChatBot"})]}),(0,n.jsxs)("div",{className:"body-wrapper",children:[(0,n.jsx)("div",{className:"login-wrap",children:(0,n.jsxs)("div",{className:"login-html",children:[(0,n.jsx)("input",{id:"tab-1",type:"radio",name:"tab",className:"radio sign-in",checked:"sign-in"===e,onChange:()=>t("sign-in")}),(0,n.jsx)("label",{htmlFor:"tab-1",className:"tab",onClick:()=>t("sign-in"),children:"로그인"}),(0,n.jsx)("input",{id:"tab-2",type:"radio",name:"tab",className:"radio sign-up",checked:"sign-up"===e,onChange:()=>t("sign-up")}),(0,n.jsx)("label",{htmlFor:"tab-2",className:"tab",onClick:()=>t("sign-up"),children:"회원가입"}),(0,n.jsxs)("div",{className:"login-form",children:[(0,n.jsxs)("div",{className:"sign-in-html",style:{transform:"sign-in"===e?"rotateY(0deg)":"rotateY(-180deg)"},children:[(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"user-signin",className:"label",children:"아이디"}),(0,n.jsx)("input",{id:"user-signin",type:"id",className:"input"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"pass-signin",className:"label",children:"비밀번호"}),(0,n.jsx)("input",{id:"pass-signin",type:"password",className:"input","data-type":"password"}),(0,n.jsx)("input",{type:"button",className:"button",value:"로그인",onClick:()=>{let e=document.getElementById("user-signin").value;f(!0),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("username",e),h.push("/Mypage")}})]}),(0,n.jsx)("div",{className:"hr"}),(0,n.jsx)("div",{className:"foot-lnk",children:(0,n.jsx)("a",{href:"#",children:"비밀번호 찾기"})})]}),(0,n.jsxs)("div",{className:"sign-up-html",style:{transform:"sign-up"===e?"rotateY(0deg)":"rotateY(180deg)"},children:[(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"user-signup",className:"label",children:"아이디"}),(0,n.jsx)("input",{id:"user-signup",type:"id",className:"input"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"email-signup",className:"label",children:"이메일"}),(0,n.jsx)("input",{id:"email-signup",type:"email",className:"input"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"pass-signup",className:"label",children:"비밀번호"}),(0,n.jsx)("input",{id:"pass-signup",type:"password",className:"input","data-type":"password"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"pass-confirm",className:"label",children:"비밀번호 확인"}),(0,n.jsx)("input",{id:"pass-confirm",type:"password",className:"input","data-type":"password"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"name",className:"label",children:"이름"}),(0,n.jsx)("input",{id:"name",type:"text",className:"input"})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"address",className:"label",children:"주소"}),(0,n.jsx)("input",{id:"address",type:"text",className:"input",value:r,readOnly:!0}),(0,n.jsx)("button",{type:"button",className:"postcode-button",onClick:()=>{p(!u)},children:"주소 검색"}),u&&(0,n.jsx)("div",{className:"postcode-wrapper",children:(0,n.jsx)(s.ZP,{onComplete:e=>{i(e.address),p(!1)}})})]}),(0,n.jsxs)("div",{className:"group",children:[(0,n.jsx)("label",{htmlFor:"detail-address",className:"label",children:"상세 주소"}),(0,n.jsx)("input",{id:"detail-address",type:"text",className:"input",value:l,onChange:e=>c(e.target.value)})]}),(0,n.jsx)("div",{className:"group",children:(0,n.jsx)("input",{type:"button",className:"button",value:"회원가입",onClick:()=>{let e=document.getElementById("name").value;f(!0),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("username",e),h.push("/dashboard")}})})]})]})]})}),(0,n.jsxs)("footer",{className:"footer",children:[(0,n.jsx)("div",{className:"footer-icon",onClick:()=>{b(!y)},children:"="}),(0,n.jsx)("div",{className:"footer-icon",onClick:()=>{h.push("/First")},children:"\uD83C\uDFE0"}),(0,n.jsx)("div",{className:"footer-icon",onClick:()=>{h.push("/Mypage")},children:"\uD83D\uDC64"})]})]})]})}},8586:function(){},1163:function(e,t,r){e.exports=r(6036)},651:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r(7294)),s=l(r(2171)),a=["scriptUrl","className","style","defaultQuery","autoClose","errorMessage","onComplete","onClose","onResize","onSearch"];function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!=a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))});return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=o.default.createElement("p",null,"현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요."),b={width:"100%",height:400},h={scriptUrl:s.postcodeScriptUrl,errorMessage:y,autoClose:!0},j=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=Array(r),s=0;s<r;s++)n[s]=arguments[s];return m(d(e=l.call.apply(l,[this].concat(n))),"mounted",!1),m(d(e),"wrap",(0,o.createRef)()),m(d(e),"state",{hasError:!1}),m(d(e),"initiate",function(t){if(e.wrap.current){var r=e.props,n=(r.scriptUrl,r.className,r.style,r.defaultQuery),o=r.autoClose,s=(r.errorMessage,r.onComplete),i=r.onClose,l=r.onResize,c=r.onSearch;new t(u(u({},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,a)),{},{oncomplete:function(t){s&&s(t),o&&e.wrap.current&&e.wrap.current.remove()},onsearch:c,onresize:l,onclose:i,width:"100%",height:"100%"})).embed(e.wrap.current,{q:n,autoClose:o})}}),m(d(e),"onError",function(t){console.error(t),e.setState({hasError:!0})}),e}!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e);var r,i,l=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,o=f(t);return e=r?Reflect.construct(o,arguments,f(this).constructor):o.apply(this,arguments),e&&("object"===n(e)||"function"==typeof e)?e:d(this)});return i=[{key:"componentDidMount",value:function(){var e=this.initiate,t=this.onError,r=this.props.scriptUrl;r&&(this.mounted||((0,s.default)(r).then(e).catch(t),this.mounted=!0))}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,n=e.errorMessage,s=this.state.hasError;return o.default.createElement("div",{ref:this.wrap,className:t,style:u(u({},b),r)},s&&n)}}],function(e,t){for(var r,n=0;n<t.length;n++)(r=t[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}(t.prototype,i),t}(o.Component);m(j,"defaultProps",h),t.default=j},7:function(e,t,r){"use strict";t.ZP=void 0;var n=o(r(651));function o(e){return e&&e.__esModule?e:{default:e}}o(r(339)),o(r(2171));var s=n.default;t.ZP=s},2171:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.postcodeScriptUrl=void 0,t.postcodeScriptUrl="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";var r,n=(r=null,function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";return r||(r=new Promise(function(t,r){var n=document.createElement("script");n.src=e,n.onload=function(){var e,n;return null!==(e=window)&&void 0!==e&&null!==(n=e.daum)&&void 0!==n&&n.Postcode?t(window.daum.Postcode):void r(Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."))},n.onerror=function(e){return r(e)},n.id="daum_postcode_script",document.body.appendChild(n)}))});t.default=n},339:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(7294),s=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=i(void 0);if(r&&r.has(e))return r.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!=a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,r&&r.set(e,o),o}(r(2171)),a=["defaultQuery","left","top","popupKey","popupTitle","autoClose","onComplete","onResize","onClose","onSearch","onError"];function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?l(Object(t),!0).forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))});return e}t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.postcodeScriptUrl;return(0,o.useEffect)(function(){(0,s.default)(e)},[e]),(0,o.useCallback)(function(t){var r=c({},t),n=r.defaultQuery,o=r.left,i=r.top,l=r.popupKey,u=r.popupTitle,p=r.autoClose,d=r.onComplete,f=r.onResize,m=r.onClose,y=r.onSearch,b=r.onError,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,a);return(0,s.default)(e).then(function(e){new e(c(c({},h),{},{oncomplete:d,onsearch:y,onresize:f,onclose:m})).open({q:n,left:o,top:i,popupTitle:u,popupKey:l,autoClose:p})}).catch(b)},[e])}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8445)}),_N_E=e.O()}]);