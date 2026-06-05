var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return te(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function O(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+O(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+O(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+O(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.7`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&O(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function T(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&O(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var D=new MessageChannel,ne=D.port2;D.port1.onmessage=T,E=function(){ne.postMessage(null)}}else E=function(){_(T,0)};function O(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,O(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.7`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),D=Symbol.for(`react.activity`),ne=Symbol.for(`react.memo_cache_sentinel`),O=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=O&&e[O]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case D:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function j(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function M(e,t){le++,ce[le]=e.current,e.current=t}var de=ue(null),fe=ue(null),pe=ue(null),me=ue(null);function N(e,t){switch(M(pe,t),M(fe,e),M(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}j(de),M(de,e)}function he(){j(de),j(fe),j(pe)}function ge(e){e.memoizedState!==null&&M(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(M(fe,e),M(de,n))}function _e(e){fe.current===e&&(j(de),j(fe)),me.current===e&&(j(me),Qf._currentValue=se)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,P=t.unstable_now,Ae=t.unstable_getCurrentPriorityLevel,je=t.unstable_ImmediatePriority,Me=t.unstable_UserBlockingPriority,Ne=t.unstable_NormalPriority,Pe=t.unstable_LowPriority,Fe=t.unstable_IdlePriority,Ie=t.log,Le=t.unstable_setDisableYieldValue,Re=null,ze=null;function Be(e){if(typeof Ie==`function`&&Le(e),ze&&typeof ze.setStrictMode==`function`)try{ze.setStrictMode(Re,e)}catch{}}var Ve=Math.clz32?Math.clz32:We,He=Math.log,Ue=Math.LN2;function We(e){return e>>>=0,e===0?32:31-(He(e)/Ue|0)|0}var Ge=256,Ke=262144,qe=4194304;function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qe(){var e=qe;return qe<<=1,!(qe&62914560)&&(qe=4194304),e}function $e(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function et(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ve(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&nt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ve(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:at(n),(n&(e.suspendedLanes|t))===0?n:0}function at(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ot(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function st(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ct(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var lt=Math.random().toString(36).slice(2),F=`__reactFiber$`+lt,I=`__reactProps$`+lt,ut=`__reactContainer$`+lt,dt=`__reactEvents$`+lt,ft=`__reactListeners$`+lt,pt=`__reactHandles$`+lt,mt=`__reactResources$`+lt,ht=`__reactMarker$`+lt;function gt(e){delete e[F],delete e[I],delete e[dt],delete e[ft],delete e[pt]}function _t(e){var t=e[F];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[F]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[F])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function vt(e){if(e=e[F]||e[ut]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function bt(e){var t=e[mt];return t||=e[mt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function xt(e){e[ht]=!0}var St=new Set,Ct={};function wt(e,t){Tt(e,t),Tt(e+`Capture`,t)}function Tt(e,t){for(Ct[e]=t,e=0;e<t.length;e++)St.add(t[e])}var Et=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Dt={},Ot={};function kt(e){return Te.call(Ot,e)?!0:Te.call(Dt,e)?!1:Et.test(e)?Ot[e]=!0:(Dt[e]=!0,!1)}function At(e,t,n){if(kt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Mt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Nt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Pt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ft(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function It(e){if(!e._valueTracker){var t=Pt(e)?`checked`:`value`;e._valueTracker=Ft(e,t,``+e[t])}}function Lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Pt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Rt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var zt=/[\n"\\]/g;function Bt(e){return e.replace(zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Vt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Nt(t)):e.value!==``+Nt(t)&&(e.value=``+Nt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ut(e,o,Nt(n)):Ut(e,o,Nt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Nt(s):e.removeAttribute(`name`)}function Ht(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){It(e);return}n=n==null?``:``+Nt(n),t=t==null?n:``+Nt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),It(e)}function Ut(e,t,n){t===`number`&&Rt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Wt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gt(e,t,n){if(t!=null&&(t=``+Nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Nt(n)}function Kt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Nt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),It(e)}function qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Yt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Jt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Xt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Yt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Yt(e,o,t[o])}function Zt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Qt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),$t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function en(e){return $t.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function tn(){}var nn=null;function rn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var an=null,on=null;function sn(e){var t=vt(e);if(t&&(e=t.stateNode)){var n=e[I]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Bt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[I]||null;if(!a)throw Error(i(90));Vt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lt(r)}break a;case`textarea`:Gt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Wt(e,!!n.multiple,t,!1)}}}var cn=!1;function ln(e,t,n){if(cn)return e(t,n);cn=!0;try{return e(t)}finally{if(cn=!1,(an!==null||on!==null)&&(bu(),an&&(t=an,e=on,on=an=null,sn(t),e)))for(t=0;t<e.length;t++)sn(e[t])}}function un(e,t){var n=e.stateNode;if(n===null)return null;var r=n[I]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var dn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),fn=!1;if(dn)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){fn=!0}}),window.addEventListener(`test`,pn,pn),window.removeEventListener(`test`,pn,pn)}catch{fn=!1}var mn=null,hn=null,gn=null;function _n(){if(gn)return gn;var e,t=hn,n=t.length,r,i=`value`in mn?mn.value:mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return gn=i.slice(e,1<r?1-r:void 0)}function vn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yn(){return!0}function bn(){return!1}function xn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?yn:bn,this.isPropagationStopped=bn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=yn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=yn)},persist:function(){},isPersistent:yn}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=xn(Sn),wn=h({},Sn,{view:0,detail:0}),Tn=xn(wn),En,Dn,On,kn=h({},wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==On&&(On&&e.type===`mousemove`?(En=e.screenX-On.screenX,Dn=e.screenY-On.screenY):Dn=En=0,On=e),En)},movementY:function(e){return`movementY`in e?e.movementY:Dn}}),An=xn(kn),jn=xn(h({},kn,{dataTransfer:0})),Mn=xn(h({},wn,{relatedTarget:0})),Nn=xn(h({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0})),Pn=xn(h({},Sn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Fn=xn(h({},Sn,{data:0})),In={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Ln={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Rn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function zn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rn[e])?!!t[e]:!1}function Bn(){return zn}var Vn=xn(h({},wn,{key:function(e){if(e.key){var t=In[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=vn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Ln[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bn,charCode:function(e){return e.type===`keypress`?vn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?vn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Hn=xn(h({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Un=xn(h({},wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bn})),Wn=xn(h({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Gn=xn(h({},kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Kn=xn(h({},Sn,{newState:0,oldState:0})),qn=[9,13,27,32],Jn=dn&&`CompositionEvent`in window,Yn=null;dn&&`documentMode`in document&&(Yn=document.documentMode);var Xn=dn&&`TextEvent`in window&&!Yn,Zn=dn&&(!Jn||Yn&&8<Yn&&11>=Yn),Qn=` `,$n=!1;function er(e,t){switch(e){case`keyup`:return qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function tr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var nr=!1;function rr(e,t){switch(e){case`compositionend`:return tr(t);case`keypress`:return t.which===32?($n=!0,Qn):null;case`textInput`:return e=t.data,e===Qn&&$n?null:e;default:return null}}function ir(e,t){if(nr)return e===`compositionend`||!Jn&&er(e,t)?(e=_n(),gn=hn=mn=null,nr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Zn&&t.locale!==`ko`?null:t.data;default:return null}}var ar={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ar[e.type]:t===`textarea`}function sr(e,t,n,r){an?on?on.push(r):on=[r]:an=r,t=Ed(t,`onChange`),0<t.length&&(n=new Cn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var cr=null,lr=null;function ur(e){yd(e,0)}function dr(e){if(Lt(yt(e)))return e}function fr(e,t){if(e===`change`)return t}var pr=!1;if(dn){var mr;if(dn){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;pr=mr&&(!document.documentMode||9<document.documentMode)}function _r(){cr&&(cr.detachEvent(`onpropertychange`,vr),lr=cr=null)}function vr(e){if(e.propertyName===`value`&&dr(lr)){var t=[];sr(t,lr,e,rn(e)),ln(ur,t)}}function yr(e,t,n){e===`focusin`?(_r(),cr=t,lr=n,cr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return dr(lr)}function xr(e,t){if(e===`click`)return dr(t)}function Sr(e,t){if(e===`input`||e===`change`)return dr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var wr=typeof Object.is==`function`?Object.is:Cr;function Tr(e,t){if(wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dr(e,t){var n=Er(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Er(n)}}function Or(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Or(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rt(e.document)}return t}function Ar(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var jr=dn&&`documentMode`in document&&11>=document.documentMode,Mr=null,Nr=null,Pr=null,Fr=!1;function Ir(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fr||Mr==null||Mr!==Rt(r)||(r=Mr,`selectionStart`in r&&Ar(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Tr(Pr,r)||(Pr=r,r=Ed(Nr,`onSelect`),0<r.length&&(t=new Cn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function Lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Rr={animationend:Lr(`Animation`,`AnimationEnd`),animationiteration:Lr(`Animation`,`AnimationIteration`),animationstart:Lr(`Animation`,`AnimationStart`),transitionrun:Lr(`Transition`,`TransitionRun`),transitionstart:Lr(`Transition`,`TransitionStart`),transitioncancel:Lr(`Transition`,`TransitionCancel`),transitionend:Lr(`Transition`,`TransitionEnd`)},zr={},Br={};dn&&(Br=document.createElement(`div`).style,`AnimationEvent`in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),`TransitionEvent`in window||delete Rr.transitionend.transition);function Vr(e){if(zr[e])return zr[e];if(!Rr[e])return e;var t=Rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Br)return zr[e]=t[n];return e}var Hr=Vr(`animationend`),Ur=Vr(`animationiteration`),Wr=Vr(`animationstart`),Gr=Vr(`transitionrun`),Kr=Vr(`transitionstart`),qr=Vr(`transitioncancel`),Jr=Vr(`transitionend`),Yr=new Map,Xr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Xr.push(`scrollEnd`);function Zr(e,t){Yr.set(e,t),wt(t,[e])}var Qr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},$r=[],ei=0,ti=0;function ni(){for(var e=ei,t=ti=ei=0;t<e;){var n=$r[t];$r[t++]=null;var r=$r[t];$r[t++]=null;var i=$r[t];$r[t++]=null;var a=$r[t];if($r[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&oi(n,i,a)}}function ri(e,t,n,r){$r[ei++]=e,$r[ei++]=t,$r[ei++]=n,$r[ei++]=r,ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ii(e,t,n,r){return ri(e,t,n,r),si(e)}function ai(e,t){return ri(e,null,null,t),si(e)}function oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ve(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function si(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ci={};function li(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(e,t,n,r){return new li(e,t,n,r)}function di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fi(e,t){var n=e.alternate;return n===null?(n=ui(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function mi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)di(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case D:return e=ui(31,n,t,a),e.elementType=D,e.lanes=o,e;case y:return hi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ui(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ui(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=ui(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ui(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function hi(e,t,n,r){return e=ui(7,e,r,t),e.lanes=n,e}function gi(e,t,n){return e=ui(6,e,null,t),e.lanes=n,e}function _i(e){var t=ui(18,null,null,0);return t.stateNode=e,t}function vi(e,t,n){return t=ui(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yi=new WeakMap;function bi(e,t){if(typeof e==`object`&&e){var n=yi.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},yi.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var xi=[],Si=0,Ci=null,wi=0,Ti=[],Ei=0,Di=null,Oi=1,ki=``;function Ai(e,t){xi[Si++]=wi,xi[Si++]=Ci,Ci=e,wi=t}function ji(e,t,n){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Di=e;var r=Oi;e=ki;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Oi=1<<32-Ve(t)+i|n<<i|r,ki=a+e}else Oi=1<<a|n<<i|r,ki=e}function Mi(e){e.return!==null&&(Ai(e,1),ji(e,1,0))}function Ni(e){for(;e===Ci;)Ci=xi[--Si],xi[Si]=null,wi=xi[--Si],xi[Si]=null;for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,ki=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null}function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=ki,Ti[Ei++]=Di,Oi=t.id,ki=t.overflow,Di=e}var Fi=null,L=null,R=!1,Ii=null,Li=!1,Ri=Error(i(519));function zi(e){throw Gi(bi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ri}function Bi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[F]=e,t[I]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Ht(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=tn),t=!0):t=!1,t||zi(e,!0)}function Vi(e){for(Fi=e.return;Fi;)switch(Fi.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fi=Fi.return}}function Hi(e){if(e!==Fi)return!1;if(!R)return Vi(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&L&&zi(e),Vi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=uf(e)}else t===27?(t=L,Zd(e.type)?(e=lf,lf=null,L=e):L=t):L=Fi?cf(e.stateNode.nextSibling):null;return!0}function Ui(){L=Fi=null,R=!1}function Wi(){var e=Ii;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ii=null),e}function Gi(e){Ii===null?Ii=[e]:Ii.push(e)}var Ki=ue(null),qi=null,Ji=null;function Yi(e,t,n){M(Ki,t._currentValue),t._currentValue=n}function Xi(e){e._currentValue=Ki.current,j(Ki)}function Zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Qi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Zi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Zi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function $i(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;wr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Qi(t,e,n,r),t.flags|=262144}function ea(e){for(e=e.firstContext;e!==null;){if(!wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ta(e){qi=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function na(e){return ia(qi,e)}function ra(e,t){return qi===null&&ta(e),ia(e,t)}function ia(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ji===null){if(e===null)throw Error(i(308));Ji=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ji=Ji.next=t;return n}var aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},oa=t.unstable_scheduleCallback,sa=t.unstable_NormalPriority,ca={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function la(){return{controller:new aa,data:new Map,refCount:0}}function ua(e){e.refCount--,e.refCount===0&&oa(sa,function(){e.controller.abort()})}var da=null,fa=0,pa=0,ma=null;function ha(e,t){if(da===null){var n=da=[];fa=0,pa=dd(),ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return fa++,t.then(ga,ga),t}function ga(){if(--fa===0&&da!==null){ma!==null&&(ma.status=`fulfilled`);var e=da;da=null,pa=0,ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _a(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var va=k.S;k.S=function(e,t){eu=P(),typeof t==`object`&&t&&typeof t.then==`function`&&ha(e,t),va!==null&&va(e,t)};var ya=ue(null);function ba(){var e=ya.current;return e===null?K.pooledCache:e}function xa(e,t){t===null?M(ya,ya.current):M(ya,t.pool)}function Sa(){var e=ba();return e===null?null:{parent:ca._currentValue,pool:e}}var Ca=Error(i(460)),wa=Error(i(474)),Ta=Error(i(542)),Ea={then:function(){}};function Da(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Oa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tn,tn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e;default:if(typeof t.status==`string`)t.then(tn,tn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ma(e),e}throw Aa=t,Ca}}function ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Aa=e,Ca):e}}var Aa=null;function ja(){if(Aa===null)throw Error(i(459));var e=Aa;return Aa=null,e}function Ma(e){if(e===Ca||e===Ta)throw Error(i(483))}var Na=null,Pa=0;function Fa(e){var t=Pa;return Pa+=1,Na===null&&(Na=[]),Oa(Na,e,t)}function Ia(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function La(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ra(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&ka(i)===t.type)?(t=a(t,n.props),Ia(t,n),t.return=e,t):(t=mi(n.type,n.key,n.props,null,e.mode,r),Ia(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=hi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=gi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=mi(t.type,t.key,t.props,null,e.mode,n),Ia(n,t),n.return=e,n;case v:return t=vi(t,e.mode,n),t.return=e,t;case E:return t=ka(t),f(e,t,n)}if(oe(t)||re(t))return t=hi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Fa(t),n);if(t.$$typeof===C)return f(e,ra(e,t),n);La(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=ka(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Fa(n),r);if(n.$$typeof===C)return p(e,t,ra(e,n),r);La(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=ka(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Fa(r),i);if(r.$$typeof===C)return m(e,t,n,ra(t,r),i);La(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&Ai(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&Ai(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&Ai(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&Ai(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&Ai(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&Ai(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ia(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=hi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=mi(o.type,o.key,o.props,null,e.mode,c),Ia(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=vi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=ka(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Fa(o),c);if(o.$$typeof===C)return b(e,r,ra(e,o),c);La(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=gi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Pa=0;var i=b(e,t,n,r);return Na=null,i}catch(t){if(t===Ca||t===Ta)throw t;var a=ui(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var za=Ra(!0),Ba=Ra(!1),Va=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=si(e),oi(e,null,n),t}return ri(e,r,t,n),si(e)}function Ka(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}function qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ja=!1;function Ya(){if(Ja){var e=ma;if(e!==null)throw e}}function Xa(e,t,n,r){Ja=!1;var i=e.updateQueue;Va=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===pa&&(Ja=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Va=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Za(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Za(n[e],t)}var $a=ue(null),eo=ue(0);function to(e,t){e=Wl,M(eo,e),M($a,t),Wl=e|t.baseLanes}function no(){M(eo,Wl),M($a,$a.current)}function ro(){Wl=eo.current,j($a),j(eo)}var io=ue(null),ao=null;function oo(e){var t=e.alternate;M(z,z.current&1),M(io,e),ao===null&&(t===null||$a.current!==null||t.memoizedState!==null)&&(ao=e)}function so(e){M(z,z.current),M(io,e),ao===null&&(ao=e)}function co(e){e.tag===22?(M(z,z.current),M(io,e),ao===null&&(ao=e)):lo(e)}function lo(){M(z,z.current),M(io,io.current)}function uo(e){j(io),ao===e&&(ao=null),j(z)}var z=ue(0);function fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=0,B=null,V=null,mo=null,ho=!1,go=!1,_o=!1,vo=0,yo=0,bo=null,xo=0;function H(){throw Error(i(321))}function So(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Co(e,t,n,r,i,a){return po=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,_o=!1,a=n(r,i),_o=!1,go&&(a=To(t,n,r,i)),wo(e),a}function wo(e){k.H=zs;var t=V!==null&&V.next!==null;if(po=0,mo=V=B=null,ho=!1,yo=0,bo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ea(e)&&(ic=!0))}function To(e,t,n,r){B=e;var a=0;do{if(go&&(bo=null),yo=0,go=!1,25<=a)throw Error(i(301));if(a+=1,mo=V=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(go);return o}function Eo(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(V===null?null:V.memoizedState)!==e&&(B.flags|=1024),t}function Do(){var e=vo!==0;return vo=0,e}function Oo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ko(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}po=0,mo=V=B=null,go=!1,yo=vo=0,bo=null}function Ao(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mo===null?B.memoizedState=mo=e:mo=mo.next=e,mo}function jo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=mo===null?B.memoizedState:mo.next;if(t!==null)mo=t,V=e;else{if(e===null)throw B.alternate===null?Error(i(467)):Error(i(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},mo===null?B.memoizedState=mo=e:mo=mo.next=e}return mo}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=yo;return yo+=1,bo===null&&(bo=[]),e=Oa(bo,e,t),t=B,(mo===null?t.memoizedState:mo.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return na(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=B.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ne;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(jo(),V,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(po&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===pa&&(d=!0);else if((po&p)===p){u=u.next,p===pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,B.lanes|=p,Gl|=p;f=u.action,_o&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,B.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!wr(o,e.memoizedState)&&(ic=!0,d&&(n=ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=jo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);wr(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=B,a=jo(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!wr((V||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||mo!==null&&mo.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||po&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Mo(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function Go(e){var t=ai(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=Ao();if(typeof e==`function`){var n=e;if(e=n(),_o){Be(!0);try{n()}finally{Be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,V,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(R){var n=K.formState;if(n!==null){a:{var r=B;if(R){if(L){b:{for(var i=L,a=Li;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=cf(i.nextSibling),r=i.data===`F!`;break a}}zi(r)}r=!1}r&&(t=n[0])}}return n=Ao(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,B,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,B,!1,r.queue),r=Ao(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,B,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(jo(),V,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ca?Ta:e}else r=t;t=jo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(B.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=jo(),n=V;if(n!==null)return rs(t,n,e);jo(),t=t.memoizedState,n=jo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=B.updateQueue,t===null&&(t=Mo(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return jo().memoizedState}function cs(e,t,n,r){var i=Ao();B.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=jo();r=r===void 0?null:r;var a=i.memoizedState.inst;V!==null&&r!==null&&So(r,V.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(B.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Mo(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=jo().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&So(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=jo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&So(t,r[1]))return r[0];if(r=e(),_o){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||po&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),B.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return wr(n,t)?n:$a.current===null?!(po&42)||po&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),B.lanes|=e,Gl|=e,t):(e=xs(e,n,r),wr(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,_a(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,se,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return na(Qf)}function ks(){return jo().memoizedState}function As(){return jo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Wa(n);var r=Ga(t,e,n);r!==null&&(hu(r,t,n),Ka(r,t,n)),t={cache:la()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=ii(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,wr(s,o))return ri(e,t,i,0),K===null&&ni(),!1}catch{}if(n=ii(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=ii(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ls(e,t){go=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rt(e,n)}}var zs={readContext:na,use:Po,useCallback:H,useContext:H,useEffect:H,useImperativeHandle:H,useLayoutEffect:H,useInsertionEffect:H,useMemo:H,useReducer:H,useRef:H,useState:H,useDebugValue:H,useDeferredValue:H,useTransition:H,useSyncExternalStore:H,useId:H,useHostTransitionStatus:H,useFormState:H,useActionState:H,useOptimistic:H,useMemoCache:H,useCacheRefresh:H};zs.useEffectEvent=H;var Bs={readContext:na,use:Po,useCallback:function(e,t){return Ao().memoizedState=[e,t===void 0?null:t],e},useContext:na,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=Ao();t=t===void 0?null:t;var r=e();if(_o){Be(!0);try{e()}finally{Be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ao();if(n!==void 0){var i=n(t);if(_o){Be(!0);try{n(t)}finally{Be(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ao();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(Ao(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,B,e.queue,!0,!1),Ao().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=B,a=Ao();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=Ao(),t=K.identifierPrefix;if(R){var n=ki,r=Oi;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=Ao();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return Ao().memoizedState=js.bind(null,B)},useEffectEvent:function(e){var t=Ao(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(jo(),V.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(jo(),V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:na,use:Po,useCallback:ys,useContext:na,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=jo();return V===null?xs(n,e,t):Ss(n,V.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=jo().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=jo();return V===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,V,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Wa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ga(e,i,r),t!==null&&(hu(t,e,r),Ka(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Wa(n);r.tag=2,t!=null&&(r.callback=t),t=Ga(e,r,n),t!==null&&(hu(t,e,n),Ka(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){Qr(e)}function Ys(e){console.error(e)}function Xs(e){Qr(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Wa(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&$i(t,n,a,!0),n=io.current,n!==null){switch(n.tag){case 31:case 13:return ao===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ea?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(R)return t=io.current,t===null?(r!==Ri&&(t=Error(i(423),{cause:r}),Gi(bi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=bi(r,n),a=$s(e.stateNode,r,a),qa(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ri&&(e=Error(i(422),{cause:r}),Gi(bi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=bi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=bi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),qa(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ba(t,null,n,r):za(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ta(t),r=Co(e,t,n,o,a,i),s=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&s&&Mi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Tr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Tr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xa(t,a===null?null:a.cachePool),a===null?no():to(t,a),co(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&xa(t,null),no(),lo(t)):(xa(t,a.cachePool),to(t,a),lo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=ba();return a=a===null?null:{parent:ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&xa(t,null),no(),co(t),e!==null&&$i(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return za(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,uo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(so(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||$i(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=it(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ai(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,L=cf(s.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=fc(t,r),t.flags|=4096;return t}return e=fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ta(t),n=Co(e,t,n,r,void 0,i),r=Do(),e!==null&&!ic?(Oo(e,t,i),Ac(e,t,i)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ta(t),t.updateQueue=null,n=To(t,r,n,i),wo(e),r=Do(),e!==null&&!ic?(Oo(e,t,a),Ac(e,t,a)):(R&&r&&Mi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ta(t),t.stateNode===null){var a=ci,o=n.contextType;typeof o==`object`&&o&&(a=na(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ha(t),o=n.contextType,a.context=typeof o==`object`&&o?na(o):ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Xa(t,r,a,i),Ya(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ci,typeof u==`object`&&u&&(o=na(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Va=!1;var f=t.memoizedState;a.state=f,Xa(t,r,a,i),Ya(),l=t.memoizedState,s||f!==l||Va?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Va||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ua(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ci,typeof l==`object`&&l&&(c=na(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Va=!1,f=t.memoizedState,a.state=f,Xa(t,r,a,i),Ya();var p=t.memoizedState;o!==d||f!==p||Va||e!==null&&e.dependencies!==null&&ea(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Va||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ea(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=za(t,e.child,null,i),t.child=za(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ui(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Sa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(z.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(R){if(a?oo(t):lo(t),(e=L)?(e=rf(e,Li),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Di===null?null:{id:Oi,overflow:ki},retryLane:536870912,hydrationErrors:null},n=_i(e),n.return=t,t.child=n,Fi=t,L=null)):e=null,e===null)throw zi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(lo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=hi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(oo(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(oo(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(lo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=hi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,za(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(lo(t),t.child=e.child,t.flags|=128,t=null);else if(oo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Gi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||$i(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=it(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ai(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,L=cf(c.nextSibling),Fi=t,R=!0,Ii=null,Li=!1,e!==null&&Pi(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(lo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=fi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=hi(c,a,n,null),c.flags|=2):c=fi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Sa():(l=ca._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(oo(t),n=e.child,e=n.sibling,n=fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=ui(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return za(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=z.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,M(z,o),ac(e,t,r,n),r=R?wi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ea(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:N(t,t.stateNode.containerInfo),Yi(t,ca,e.memoizedState.cache),Ui();break;case 27:case 5:ge(t);break;case 4:N(t,t.stateNode.containerInfo);break;case 10:Yi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(oo(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(oo(t),t.flags|=128,null);oo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=($i(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(z,z.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Yi(t,ca,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,R&&t.flags&1048576&&ji(t,wi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e==`function`)di(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(N(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ua(e,t),Xa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Yi(t,ca,r),r!==o.cache&&Qi(t,[ca],n,!0),Ya(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=bi(Error(i(424)),t),Gi(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=cf(e.firstChild),Fi=t,R=!0,Ii=null,Li=!0,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[F]=t,r[I]=e,Pd(r,n,e),xt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ge(t),e===null&&R&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Fi=t,Li=!0,a=L,Zd(t.type)?(lf=a,L=cf(r.firstChild)):L=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=tf(r,t.type,t.pendingProps,Li),r===null?a=!1:(t.stateNode=r,Fi=t,L=cf(r.firstChild),Li=!1,a=!0)),a||zi(t)),ge(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Co(e,t,Eo,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=nf(n,t.pendingProps,Li),n===null?e=!1:(t.stateNode=n,Fi=t,L=null,e=!0)),e||zi(t)),null;case 13:return Cc(e,t,n);case 4:return N(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=za(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ta(t),a=na(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ta(t),r=na(ca),e===null?(a=ba(),a===null&&(a=K,o=la(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ha(t),Yi(t,ca,a)):((e.lanes&n)!==0&&(Ua(e,t),Xa(t,null,null,n),Ya()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Yi(t,ca,r),r!==a.cache&&Qi(t,[ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Yi(t,ca,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Aa=Ea,wa}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Aa=Ea,wa}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Qe(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!R)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Xi(ca),he(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(_e(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=de.current,Hi(t)?Bi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(_e(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=de.current,Hi(t))Bi(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[F]=t,o[I]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Hi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[F]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||zi(t,!0)}else e=Bd(e).createTextNode(r),e[F]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Hi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[F]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(uo(t),t):(uo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[F]=t}else Ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(uo(t),t):(uo(t),null)}return uo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return he(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Xi(t.type),U(t),null;case 19:if(j(z),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pi(n,e),n=n.sibling;return M(z,z.current&1|2),R&&Ai(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&P()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!R)return U(t),null}else 2*P()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=P(),e.sibling=null,n=z.current,M(z,a?n&1|2:n&1),R&&Ai(t,r.treeForkCount),e);case 22:case 23:return uo(t),ro(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(ya),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xi(ca),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(ca),he(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _e(t),null;case 31:if(t.memoizedState!==null){if(uo(t),t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(uo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(z),null;case 4:return he(),null;case 10:return Xi(t.type),null;case 22:case 23:return uo(t),ro(),e!==null&&j(ya),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xi(ca),null;case 25:return null;default:return null}}function Vc(e,t){switch(Ni(t),t.tag){case 3:Xi(ca),he();break;case 26:case 27:case 5:_e(t);break;case 4:he();break;case 31:t.memoizedState!==null&&uo(t);break;case 13:uo(t);break;case 19:j(z);break;case 10:Xi(t.type);break;case 22:case 23:uo(t),ro(),e!==null&&j(ya);break;case 24:Xi(ca)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qa(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[I]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[F]=e,t[I]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=kr(e),Ar(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qa(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount==`function`)try{ze.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ht]||o[F]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[F]=e,xt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[F]=e,xt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=P()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Za(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ua(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ua(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=na(ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return na(ca).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:k.T===null?st():dd()}function mu(){if(Jl===0)if(!(J&536870912)||R){var e=Ke;Ke<<=1,!(Ke&3932160)&&(Ke=262144),Jl=e}else Jl=536870912;return e=io.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),et(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Xe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-P(),10<a)){if(yu(r,t,Jl,!Vl),Ye(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},Ml(t,a,d);var m=(a&62914560)===a?$l-P():(a&4194048)===a?eu-P():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ve(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&nt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Ji=qi=null,ko(e),Na=null,Pa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=fi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Xe(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ve(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ni(),n}function Cu(e,t){B=null,k.H=zs,t===Ca||t===Ta?(t=ja(),Y=3):t===wa?(t=ja(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,bi(t,e.current)))}function wu(){var e=io.current;return e===null?!0:(J&4194048)===J?ao===null:(J&62914560)===J||J&536870912?e===ao:!1}function Tu(){var e=k.H;return k.H=zs,e===null?zs:e}function Eu(){var e=k.A;return k.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&io.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:io.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Ji=qi=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,ni()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=P()+500,Su(e,t)):Hl=Xe(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Da(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Da(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Ji=qi=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,ni(),X):0}function ju(){for(;q!==null&&!Oe();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:ko(t);default:Vc(n,t),t=q=pi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Ji=qi=null,ko(t),Na=null,Pa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,bi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,bi(n,e.current)),q=null;return}t.flags&32768?(R||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=io.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ti,tt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ne,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=kr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Or(s.ownerDocument.documentElement,s)){if(c!==null&&Ar(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Dr(s,h),v=Dr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,ke();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ot(n),t=t.stateNode,ze&&typeof ze.onCommitFiberRoot==`function`)try{ze.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ua(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ot(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),ze&&typeof ze.onPostCommitFiberRoot==`function`)try{ze.onPostCommitFiberRoot(Re,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=bi(n,t),t=$s(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(et(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=bi(n,e),n=ec(2),r=Ga(t,n,2),r!==null&&(tc(n,r,t,e),et(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>P()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=Qe()),e=ai(e,t),e!==null&&(et(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ee(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ve(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Ye(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Xe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=P(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ve(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ze(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),ot(n)){case 2:case 8:n=Me;break;case 32:n=Ne;break;case 268435456:n=Fe;break;default:n=Ne}return r=cd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Ye(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,P()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ee(je,ad):od()})}function dd(){if(nd===0){var e=pa;e===0&&(e=Ge,Ge<<=1,!(Ge&261888)&&(Ge=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:en(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[I]||null).action),o=r.submitter;o&&(t=(t=o[I]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Cn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Xr.length;hd++){var gd=Xr[hd];Zr(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}Zr(Hr,`onAnimationEnd`),Zr(Ur,`onAnimationIteration`),Zr(Wr,`onAnimationStart`),Zr(`dblclick`,`onDoubleClick`),Zr(`focusin`,`onFocus`),Zr(`focusout`,`onBlur`),Zr(Gr,`onTransitionRun`),Zr(Kr,`onTransitionStart`),Zr(qr,`onTransitionCancel`),Zr(Jr,`onTransitionEnd`),Tt(`onMouseEnter`,[`mouseout`,`mouseover`]),Tt(`onMouseLeave`,[`mouseout`,`mouseover`]),Tt(`onPointerEnter`,[`pointerout`,`pointerover`]),Tt(`onPointerLeave`,[`pointerout`,`pointerover`]),wt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),wt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),wt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),wt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),wt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Qr(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[dt];n===void 0&&(n=t[dt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,St.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!fn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=_t(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}ln(function(){var r=a,i=rn(n),s=[];a:{var c=Yr.get(e);if(c!==void 0){var l=Cn,u=e;switch(e){case`keypress`:if(vn(n)===0)break a;case`keydown`:case`keyup`:l=Vn;break;case`focusin`:u=`focus`,l=Mn;break;case`focusout`:u=`blur`,l=Mn;break;case`beforeblur`:case`afterblur`:l=Mn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=An;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Un;break;case Hr:case Ur:case Wr:l=Nn;break;case Jr:l=Wn;break;case`scroll`:case`scrollend`:l=Tn;break;case`wheel`:l=Gn;break;case`copy`:case`cut`:case`paste`:l=Pn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Hn;break;case`toggle`:case`beforetoggle`:l=Kn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=un(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==nn&&(u=n.relatedTarget||n.fromElement)&&(_t(u)||u[ut]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?_t(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=An,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Hn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:yt(l),h=u==null?c:yt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,_t(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?yt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=fr;else if(or(c))if(pr)v=Sr;else{v=br;var y=yr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&Zt(r.elementType)&&(v=fr):v=xr;if(v&&=v(e,r)){sr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Ut(c,`number`,c.value)}switch(y=r?yt(r):window,e){case`focusin`:(or(y)||y.contentEditable===`true`)&&(Mr=y,Nr=r,Pr=null);break;case`focusout`:Pr=Nr=Mr=null;break;case`mousedown`:Fr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Fr=!1,Ir(s,n,i);break;case`selectionchange`:if(jr)break;case`keydown`:case`keyup`:Ir(s,n,i)}var b;if(Jn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else nr?er(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Zn&&n.locale!==`ko`&&(nr||x!==`onCompositionStart`?x===`onCompositionEnd`&&nr&&(b=_n()):(mn=i,hn=`value`in mn?mn.value:mn.textContent,nr=!0)),y=Ed(r,x),0<y.length&&(x=new Fn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=tr(n),b!==null&&(x.data=b)))),(b=Xn?rr(e,n):ir(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Fn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=un(e,n),i!=null&&r.unshift(Td(e,i,a)),i=un(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=un(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=un(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&qt(e,``+r);break;case`className`:jt(e,`class`,r);break;case`tabIndex`:jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:jt(e,n,r);break;case`style`:Xt(e,r,o);break;case`data`:if(t!==`object`){jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=en(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=en(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),At(e,`popover`,r);break;case`xlinkActuate`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Mt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Mt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:At(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Qt.get(n)||n,At(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Xt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=tn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ct.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[I]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):At(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Ht(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Wt(e,!!r,n,!0):Wt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Kt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(Zt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Vt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Wt(e,!!n,n?[]:``,!1):Wt(e,!!n,t,!0)):Wt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Gt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(Zt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),gt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=vt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Bt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Bt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Bt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Bt(n.imageSizes)+`"]`)):i+=`[href="`+Bt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),xt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Bt(r)+`"][href="`+Bt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),xt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=bt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);xt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=bt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),xt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=bt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=bt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=bt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Bt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),xt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Bt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Bt(n.href)+`"]`);if(r)return t.instance=r,xt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),xt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,xt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),xt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,xt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),xt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ht]||a[F]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,xt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),xt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ui(3,null,null,t),e.current=a,a.stateNode=e,t=la(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ha(a),e}function tp(e){return e?(e=ci,e):ci}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Wa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ga(e,r,t),n!==null&&(hu(n,e,t),Ka(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ai(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=at(t);var n=ai(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=vt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ve(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=P()+500,id(0,!1))}}break;case 31:case 13:s=ai(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=rn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=_t(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ae()){case je:return 2;case Me:return 8;case Ne:case Pe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=_t(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ct(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);nn=r,n.target.dispatchEvent(r),nn=null}else return t=vt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=vt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[I]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[I]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ut]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=st();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.7`)throw Error(i(527,Lp,`19.2.7`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.7`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.7`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Re=zp.inject(Rp),ze=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ut]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),v=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),b=e=>{let t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},x={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},S=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},C=c(u(),1),w=(0,C.createContext)({}),ee=()=>(0,C.useContext)(w),te=(0,C.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ee()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,C.createElement)(`svg`,{ref:c,...x,width:t??l??x.width,height:t??l??x.height,stroke:e??f,strokeWidth:m,className:_(`lucide`,p,i),...!a&&!S(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,C.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),T=(e,t)=>{let n=(0,C.forwardRef)(({className:n,...r},i)=>(0,C.createElement)(te,{ref:i,iconNode:t,className:_(`lucide-${v(b(e))}`,`lucide-${e}`,n),...r}));return n.displayName=b(e),n},E=T(`baggage-claim`,[[`path`,{d:`M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2`,key:`4irg2o`}],[`path`,{d:`M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10`,key:`14fcyx`}],[`rect`,{width:`13`,height:`8`,x:`8`,y:`6`,rx:`1`,key:`o6oiis`}],[`circle`,{cx:`18`,cy:`20`,r:`2`,key:`t9985n`}],[`circle`,{cx:`9`,cy:`20`,r:`2`,key:`e5v82j`}]]),D=T(`bed-double`,[[`path`,{d:`M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8`,key:`1k78r4`}],[`path`,{d:`M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4`,key:`fb3tl2`}],[`path`,{d:`M12 4v6`,key:`1dcgq2`}],[`path`,{d:`M2 18h20`,key:`ajqnye`}]]),ne=T(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),O=T(`coffee`,[[`path`,{d:`M10 2v2`,key:`7u0qdc`}],[`path`,{d:`M14 2v2`,key:`6buw04`}],[`path`,{d:`M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`,key:`pwadti`}],[`path`,{d:`M6 2v2`,key:`colzsn`}]]),re=T(`dollar-sign`,[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]),ie=T(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),ae=T(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),oe=T(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),k=T(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),A=T(`network`,[[`rect`,{x:`16`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`4q2zg0`}],[`rect`,{x:`2`,y:`16`,width:`6`,height:`6`,rx:`1`,key:`8cvhb9`}],[`rect`,{x:`9`,y:`2`,width:`6`,height:`6`,rx:`1`,key:`1egb70`}],[`path`,{d:`M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3`,key:`1jsf9p`}],[`path`,{d:`M12 12V8`,key:`2874zd`}]]),se=T(`plane`,[[`path`,{d:`M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z`,key:`1v9wt8`}]]),ce=T(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),le=T(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),ue=T(`sliders-horizontal`,[[`path`,{d:`M10 5H3`,key:`1qgfaw`}],[`path`,{d:`M12 19H3`,key:`yhmn1j`}],[`path`,{d:`M14 3v4`,key:`1sua03`}],[`path`,{d:`M16 17v4`,key:`1q0r14`}],[`path`,{d:`M21 12h-9`,key:`1o4lsq`}],[`path`,{d:`M21 19h-5`,key:`1rlt1p`}],[`path`,{d:`M21 5h-7`,key:`1oszz2`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M8 12H3`,key:`a7s4jb`}]]),j=T(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),M=T(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),de=T(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),fe=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),pe=o(((e,t)=>{t.exports=fe()})),me=g(),N=pe(),he=`
  @import url("https://fonts.googleapis.com/css2?family=Material+Icons&family=Open+Sans:wght@400;500;600;700;800;900&display=swap");

  .dv-main-wrapper { display: flex; flex-direction: column; width: 100%; max-width: 1380px; margin: 0 auto; padding: 20px 16px 28px; gap: 18px; }
  @media (min-width: 1024px) { .dv-main-wrapper { flex-direction: row; } }
  .dv-sidebar { display: none; width: 250px; flex-shrink: 0; }
  @media (min-width: 1024px) { .dv-sidebar { display: block; position: sticky; top: 16px; align-self: start; } }
  .dv-content-area { flex: 1; min-width: 0; }
  .dv-filter-card { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 20px; box-shadow: var(--shadow-sm); }
  .dv-filter-section { border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 16px; }
  .dv-filter-section:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
  .dv-filter-title { font-size: 14px; font-weight: 800; color: #1f2937; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; }
  .dv-checkbox-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #4b5563; margin-bottom: 8px; cursor: pointer; transition: color 0.2s; }
  .dv-checkbox-label:hover { color: #111827; }
  .dv-checkbox-label input { width: 16px; height: 16px; accent-color: var(--reserve-primary); border-radius: 4px; cursor: pointer; }
  .dv-range-input { width: 100%; accent-color: var(--reserve-primary); margin-top: 8px; }

  :root {
    --dv-primary: #0f2b60;
    --dv-primary-600: #143479;
    --dv-primary-100: #e6ebf5;
    --dv-primary-50: #f0f4fb;
    --dv-success: #059669;
    --dv-danger: #dc2626;
    --dv-warning: #d97706;
    --dv-border: #e5e7eb;
    --dv-text: #1f2937;
    --dv-text-muted: #6b7280;
    --dv-text-subtle: #9ca3af;
    --reserve-primary: #428f70;
    --reserve-secondary: #3957a5;
    --reserve-warning: #f2bb1d;
    --lowest-fare: #f2bb1d;
    --lowest-baggage: #67a353;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --shadow-sm: 0 1px 3px rgba(15, 43, 96, 0.06), 0 1px 2px rgba(15, 43, 96, 0.04);
    --shadow-md: 0 4px 12px rgba(15, 43, 96, 0.08);
    --shadow-lg: 0 8px 24px rgba(15, 43, 96, 0.12);
  }

  .dv-app-container * {
    box-sizing: border-box;
  }

  .dv-app-container {
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(180deg, #f6f8fb 0%, #edf1f6 100%);
    color: #4a5568;
    font-family: "Open Sans", Arial, sans-serif;
  }

  .dv-app-container button { border: 0; font: inherit; }

  .material-icons, .q-icon {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: "Material Icons"; font-weight: normal; font-style: normal;
    font-size: 16px; line-height: 1; letter-spacing: normal; text-transform: none;
    white-space: nowrap; direction: ltr; -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased; font-feature-settings: "liga";
  }

  .dv-root { width: 100%; max-width: 1400px; margin: 0 auto; padding: 16px 0 28px; overflow-x: hidden; }

  /* Search Screen */
  .dv-search-screen { min-height: 100vh; display: flex; align-items: center; padding: 32px 16px; }
  .dv-search-shell { width: 100%; max-width: 980px; margin: 0 auto; }
  .dv-search-heading { margin-bottom: 18px; }
  .dv-search-kicker { display: inline-flex; min-height: 32px; align-items: center; gap: 8px; padding: 6px 12px; border: 1px solid rgba(66, 143, 112, 0.2); border-radius: 999px; background: #ffffff; color: var(--reserve-primary); box-shadow: var(--shadow-sm); font-size: 11px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; }
  .dv-search-title { margin: 12px 0 8px; color: var(--dv-primary); font-size: 40px; font-weight: 900; line-height: 1.05; }
  .dv-search-subtitle { max-width: 640px; margin: 0; color: #64748b; font-size: 14px; font-weight: 700; line-height: 1.5; }
  .dv-search-card { padding: 24px; border: 1px solid rgba(229, 231, 235, 0.92); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-lg); }
  .dv-search-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .dv-search-field { display: flex; min-width: 0; flex-direction: column; gap: 6px; }
  .dv-search-field--wide { grid-column: span 2; }
  .dv-search-label { color: #64748b; font-size: 11px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; }
  .dv-search-control { width: 100%; min-height: 42px; padding: 9px 12px; border: 1px solid #dbe3ef; border-radius: 10px; background: #f8fafc; color: #1f2937; font: inherit; font-size: 13px; font-weight: 800; outline: none; transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease; }
  .dv-search-control:focus { border-color: var(--reserve-primary); background: #ffffff; box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.14); }
  .dv-passenger-autocomplete { position: relative; display: flex; flex-direction: column; gap: 8px; }
  .dv-passenger-chips { display: flex; min-height: 40px; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px; border: 1px solid #dbe3ef; border-radius: 12px; background: #f8fafc; }
  .dv-passenger-chip { display: inline-flex; max-width: 260px; min-height: 28px; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 11px; font-weight: 900; }
  .dv-passenger-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-chip button { display: inline-flex; width: 18px; height: 18px; align-items: center; justify-content: center; border-radius: 999px; background: rgba(66, 143, 112, 0.16); color: var(--reserve-primary); cursor: pointer; font-size: 14px; font-weight: 900; line-height: 1; }
  .dv-passenger-empty { color: #94a3b8; font-size: 12px; font-weight: 800; }
  .dv-passenger-input-wrap { position: relative; }
  .dv-passenger-input-wrap .q-icon { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94a3b8; }
  .dv-passenger-input { padding-left: 36px; }
  .dv-passenger-suggestions { display: grid; gap: 6px; max-height: 220px; overflow-y: auto; padding: 6px; border: 1px solid #dbe3ef; border-radius: 12px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-passenger-option { display: flex; min-width: 0; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: 10px; background: #ffffff; color: inherit; cursor: pointer; text-align: left; transition: background 0.18s ease; }
  .dv-passenger-option:hover { background: #f8fafc; }
  .dv-passenger-copy { display: flex; min-width: 0; flex-direction: column; gap: 2px; }
  .dv-passenger-name { overflow: hidden; color: #1f2937; font-size: 12px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-meta { overflow: hidden; color: #64748b; font-size: 10px; font-weight: 800; text-overflow: ellipsis; white-space: nowrap; }
  .dv-passenger-no-results { padding: 10px 12px; color: #94a3b8; font-size: 12px; font-weight: 800; }
  .dv-passenger-warning { color: #dc2626; font-size: 11px; font-weight: 800; }
  .dv-search-actions { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 20px; padding-top: 18px; border-top: 1px solid #edf2f7; }
  .dv-search-helper { color: #64748b; font-size: 12px; font-weight: 700; line-height: 1.45; }
  .dv-search-submit { display: inline-flex; min-height: 44px; min-width: 210px; align-items: center; justify-content: center; gap: 8px; padding: 11px 18px; border-radius: 10px; background: var(--dv-primary); color: #ffffff; box-shadow: var(--shadow-md); cursor: pointer; font-size: 13px; font-weight: 900; transition: transform 0.18s ease, background 0.18s ease; }
  .dv-search-submit:hover { transform: translateY(-1px); background: var(--dv-primary-600); }
  .dv-search-submit:disabled { cursor: not-allowed; transform: none; background: #cbd5e1; color: #64748b; box-shadow: none; }

  @media (max-width: 768px) {
    .dv-search-screen { align-items: flex-start; padding-top: 24px; }
    .dv-search-title { font-size: 30px; }
    .dv-search-card { padding: 18px; }
    .dv-search-grid { grid-template-columns: 1fr; }
    .dv-search-field--wide { grid-column: span 1; }
    .dv-search-actions { flex-direction: column; align-items: stretch; }
    .dv-search-submit { width: 100%; }
  }

  /* ARIA Card */
  .dv-aria-card-panel { margin: 0 16px 18px; }
  .aria-card { border: 1px solid #7c3aed; border-radius: 24px; background: #7c3aed; color: #ffffff; box-shadow: 0 24px 48px -24px rgba(46, 16, 101, 0.62); }
  .aria-card__body { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 14px 20px; padding: 20px; }
  .aria-card__identity { display: flex; min-width: 0; align-items: center; gap: 16px; }
  .aria-card__icon { display: inline-flex; width: 52px; height: 52px; flex: 0 0 auto; align-items: center; justify-content: center; border-radius: 999px; background: #ffffff; color: #5d12d2; box-shadow: 0 16px 30px -16px rgba(17, 24, 39, 0.5); }
  .aria-card__copy { display: flex; min-width: 0; flex-direction: column; gap: 4px; }
  .aria-card__badge { display: inline-flex; align-items: center; align-self: flex-start; gap: 6px; min-height: 22px; padding: 4px 10px; border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 999px; background: rgba(255, 255, 255, 0.14); color: #ffffff; font-size: 9px; font-weight: 900; letter-spacing: 0.08em; line-height: 1.2; text-transform: uppercase; }
  .aria-card__title { color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.12; }
  .aria-card__subtitle { max-width: 650px; color: rgba(237, 233, 254, 0.86); font-size: 14px; font-weight: 700; line-height: 1.45; }
  .aria-card__toggle { display: inline-flex; min-width: 168px; min-height: 42px; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; border-radius: 14px; background: #ffffff; color: #5d12d2; box-shadow: 0 16px 32px -18px rgba(17, 24, 39, 0.7); cursor: pointer; font-size: 13px; font-weight: 800; }
  .dv-summary-aria-card { margin-bottom: 14px; border-radius: 18px; }
  .dv-summary-aria-card .aria-card__body { grid-template-columns: minmax(0, 1fr) auto; padding: 16px; }
  .dv-summary-aria-card .aria-card__icon { width: 44px; height: 44px; }
  .dv-summary-aria-card .aria-card__title { font-size: 18px; }
  .dv-summary-aria-card .aria-card__subtitle { max-width: 720px; font-size: 13px; }
  .dv-summary-aria-card .aria-card__toggle { min-width: 156px; min-height: 40px; border-radius: 12px; }
  .dv-summary-aria-card .aria-insights { grid-column: 1 / -1; }
  .aria-insights { display: flex; grid-column: 1; gap: 8px; flex-wrap: wrap; margin: 0; padding: 0; list-style: none; }
  .aria-insights__chip { display: inline-flex; min-height: 34px; align-items: center; gap: 8px; padding: 7px 12px; border-radius: 12px; background: #ffffff; color: #5d12d2; box-shadow: 0 10px 22px -16px rgba(17, 24, 39, 0.72); font-size: 12px; font-weight: 800; line-height: 1.25; }

  /* Header & Tabs */
  .dv-header { width: 100%; max-width: 1400px; margin: 0 auto 16px; padding: 0 20px; }
  .dv-tabs-wrap { position: relative; width: 100%; margin: 4px 0 16px; }
  .dv-tabs { display: flex; width: 100%; gap: 4px; overflow-x: auto; padding: 6px; border: 1px solid rgba(229, 231, 235, 0.72); border-radius: 12px; background: rgba(243, 244, 246, 0.7); box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.04); scrollbar-width: none; }
  .dv-tab { display: flex; flex: 1; min-width: fit-content; align-items: center; justify-content: center; gap: 8px; padding: 10px 12px; border-radius: 10px; background: transparent; color: #6b7280; cursor: pointer; font-weight: 700; white-space: nowrap; transition: all 0.18s ease; }
  .dv-tab:hover { transform: translateY(-1px); background: rgba(255, 255, 255, 0.6); color: #374151; }
  .dv-tab[aria-selected="true"] { transform: translateY(-1px); background: #ffffff; color: var(--dv-primary); box-shadow: var(--shadow-md); font-weight: 900; }
  .dv-tab__copy { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.12; text-align: left; }
  .dv-tab__title { font-size: 13px; }
  .dv-tab__subtitle { margin-top: 2px; font-size: 10px; font-weight: 700; opacity: 0.7; }
  .dv-tab__count { display: inline-flex; align-items: center; justify-content: center; min-width: 22px; padding: 2px 8px; border-radius: 999px; background: #e5e7eb; color: #6b7280; font-size: 11px; font-weight: 800; line-height: 1.2; }
  .dv-tab[aria-selected="true"] .dv-tab__count { background: var(--dv-primary-100); color: var(--dv-primary); }

  /* SisRes Status */
  .dv-sisres { width: 100%; margin-bottom: 16px; overflow: hidden; border: 1px solid rgba(229, 231, 235, 0.8); border-bottom: 4px solid var(--reserve-primary); border-radius: 12px; background: #ffffff; box-shadow: var(--shadow-sm); }
  .dv-sisres-summary { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; background: #ffffff; color: inherit; text-align: left; }
  .dv-sisres-title { min-width: 0; overflow: hidden; color: #1f2937; font-size: 13px; font-weight: 800; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
  .dv-sisres-main, .dv-sisres-actions, .dv-sisres-kpis, .dv-kpi-item { display: flex; align-items: center; }
  .dv-sisres-main { min-width: 0; gap: 8px; }
  .dv-sisres-actions { gap: 8px; }
  .dv-sisres-kpis { gap: 10px; }
  .dv-sisres-toggle-icon { display: inline-flex; width: 30px; height: 30px; flex: 0 0 auto; align-items: center; justify-content: center; border-radius: 999px; background: #f8fafc; color: #64748b; transition: background 0.18s ease, color 0.18s ease; }
  .dv-sisres-summary:hover .dv-sisres-toggle-icon { background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); }
  .dv-kpi-item { gap: 3px; }
  .dv-kpi-dot { width: 8px; height: 8px; flex-shrink: 0; border-radius: 999px; }
  .dv-kpi-dot--success { background: #10b981; } .dv-kpi-dot--error { background: #f87171; } .dv-kpi-dot--warning { background: #f59e0b; }
  .dv-kpi-value, .dv-kpi-percent { color: #6b7280; font-size: 11px; font-weight: 800; }
  .dv-kpi-percent { color: #9ca3af; font-variant-numeric: tabular-nums; }
  .dv-sisres-content { position: relative; padding: 12px 0; background: #ffffff; border-top: 1px solid #f3f4f6; }
  .dv-sisres-list { display: flex; width: 100%; gap: 10px; overflow-x: auto; padding: 4px 20px 8px; scroll-snap-type: x proximity; scrollbar-width: none; }
  .dv-sisres-card { display: flex; width: 120px; min-height: 62px; flex: 0 0 auto; flex-direction: column; justify-content: center; padding: 10px 14px; border: 1px solid rgba(229, 231, 235, 0.8); border-radius: 8px; background: #ffffff; box-shadow: var(--shadow-sm); text-align: left; }
  .dv-sisres-logo-wrap { display: flex; width: 100%; height: 20px; min-width: 0; align-items: center; justify-content: flex-start; margin-bottom: 4px; font-weight: 800; color: var(--reserve-secondary); font-size: 14px; }
  .dv-sisres-logo { display: block; max-width: 92px; max-height: 20px; object-fit: contain; }
  .dv-sisres-logo-fallback { color: var(--reserve-secondary); font-size: 14px; font-weight: 900; }
  .dv-sisres-status { display: flex; min-width: 0; align-items: center; justify-content: flex-start; gap: 4px; font-size: 10px; font-weight: 800; }
  .dv-status--success { color: #059669; } .dv-status--error { color: #dc2626; } .dv-status--warning { color: #d97706; } .dv-status--loading { color: #3b82f6; }

  /* Toolbar */
  .dv-toolbar { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(229, 231, 235, 0.6); }
  .dv-toolbar__left, .dv-toolbar__right { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .dv-toolbar__right { justify-content: flex-end; }
  .dv-sort-select { display: inline-flex; width: 220px; max-width: 100%; height: 38px; align-items: center; justify-content: space-between; gap: 8px; padding: 0 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; color: #374151; box-shadow: var(--shadow-sm); font-size: 12px; font-weight: 800; }
  .dv-icon-btn, .dv-filter-btn, .dv-clear-btn, .dv-action-toggle { display: inline-flex; height: 38px; align-items: center; justify-content: center; gap: 6px; border-radius: 12px; background: #ffffff; color: #6b7280; cursor: pointer; font-size: 12px; font-weight: 800; white-space: nowrap; transition: transform 0.18s ease; }
  .dv-icon-btn { width: 38px; border: 1px solid #e5e7eb; }
  .dv-icon-btn--active { border-color: var(--reserve-primary); background: rgba(66, 143, 112, 0.08); color: var(--reserve-primary); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.15); }
  .dv-toolbar-menu { position: relative; display: inline-flex; }
  .dv-toolbar-menu__dropdown { position: absolute; top: calc(100% + 8px); right: 0; z-index: 90; display: grid; min-width: 220px; gap: 4px; padding: 6px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; box-shadow: 0 18px 42px -24px rgba(15, 23, 42, 0.42); }
  .dv-toolbar-menu__item { display: flex; width: 100%; min-height: 38px; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 9px; background: #ffffff; color: #374151; cursor: pointer; font-size: 12px; font-weight: 850; text-align: left; white-space: nowrap; }
  .dv-toolbar-menu__item:hover { background: rgba(66, 143, 112, 0.08); color: var(--reserve-primary); }
  .dv-toolbar-menu__item .q-icon { color: var(--reserve-primary); font-size: 18px; }
  .dv-filter-btn { padding: 0 12px; background: var(--reserve-primary); color: #ffffff; box-shadow: var(--shadow-sm); }
  .dv-clear-btn, .dv-action-toggle { padding: 0 12px; border: 1px solid #e5e7eb; }
  .dv-icon-btn:hover, .dv-filter-btn:hover { transform: translateY(-1px); }

  /* Selected fares */
  .dv-selection-panel { width: 100%; flex: none; }
  .dv-selection-panel--placeholder { display: none; }
  @media (min-width: 1024px) {
    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: fixed;
      top: 20px;
      right: 16px;
      z-index: 30;
      width: 300px;
      max-height: calc(100vh - 40px);
      overflow-y: auto;
    }
  }
  @media (min-width: 1280px) {
    .dv-selection-panel {
      width: 286px;
      flex: 0 0 286px;
    }
    .dv-selection-panel--placeholder {
      display: block;
      visibility: hidden;
      pointer-events: none;
    }
    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: sticky;
      top: 20px;
      right: auto;
      align-self: flex-start;
    }
  }
  .dv-selection-box { display: flex; flex-direction: column; gap: 12px; padding: 16px; border: 1px solid rgba(229, 231, 235, 0.9); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-selection-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-bottom: 10px; border-bottom: 1px solid #edf2f7; }
  .dv-selection-title { display: flex; min-width: 0; align-items: center; gap: 8px; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-selection-clear { display: inline-flex; height: 30px; align-items: center; justify-content: center; padding: 0 9px; border: 1px solid #e5e7eb; border-radius: 9px; background: #ffffff; color: #64748b; cursor: pointer; font-size: 11px; font-weight: 900; }
  .dv-selection-clear:disabled { cursor: default; opacity: 0.45; }
  .dv-selection-stack { display: flex; flex-direction: column; gap: 10px; }
  .dv-selection-card { display: flex; flex-direction: column; gap: 9px; padding: 12px; border: 1px solid rgba(66, 143, 112, 0.28); border-radius: 12px; background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%); }
  .dv-selection-card--empty { min-height: 116px; align-items: center; justify-content: center; border: 2px dashed #cbd5e1; background: #f8fafc; color: #94a3b8; text-align: center; }
  .dv-selection-badge { display: inline-flex; align-self: flex-start; min-height: 22px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-selection-route { display: flex; align-items: center; justify-content: space-between; gap: 8px; color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-selection-route span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-selection-fare { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #475569; font-size: 12px; font-weight: 800; }
  .dv-selection-price { color: var(--reserve-primary); font-size: 17px; font-weight: 900; white-space: nowrap; }
  .dv-selection-meta { display: flex; flex-wrap: wrap; gap: 6px; }
  .dv-selection-meta-chip { display: inline-flex; min-height: 22px; align-items: center; gap: 4px; padding: 3px 7px; border-radius: 999px; background: #eef2f7; color: #64748b; font-size: 10px; font-weight: 800; }
  .dv-selection-empty-icon { display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 999px; background: #eef2f7; color: #94a3b8; }
  .dv-selection-empty-title { color: #64748b; font-size: 12px; font-weight: 900; }
  .dv-selection-empty-subtitle { max-width: 210px; color: #94a3b8; font-size: 11px; font-weight: 700; line-height: 1.35; }
  .dv-selection-footer { display: flex; flex-direction: column; gap: 8px; padding-top: 2px; }
  .dv-selection-total { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #475569; font-size: 12px; font-weight: 900; }
  .dv-selection-total strong { color: var(--dv-primary); font-size: 18px; }
  .dv-tarifar-btn { display: inline-flex; min-height: 42px; width: 100%; align-items: center; justify-content: center; gap: 8px; border-radius: 12px; background: var(--dv-primary); color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 900; }
  .dv-tarifar-btn:disabled { cursor: not-allowed; background: #cbd5e1; color: #64748b; }
  .dv-selection-hint { min-height: 16px; color: #64748b; font-size: 11px; font-weight: 800; text-align: center; }

  /* Tariff summary */
  .dv-summary-screen { min-height: 100vh; padding: 24px 16px 36px; }
  .dv-summary-shell { width: 100%; max-width: 1280px; margin: 0 auto; }
  .dv-summary-topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
  .dv-summary-heading { min-width: 0; }
  .dv-summary-kicker { display: inline-flex; min-height: 26px; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 10px; font-weight: 900; letter-spacing: 0.06em; text-transform: uppercase; }
  .dv-summary-title { margin: 8px 0 4px; color: var(--dv-primary); font-size: 28px; font-weight: 900; line-height: 1.12; }
  .dv-summary-subtitle { margin: 0; color: #64748b; font-size: 13px; font-weight: 700; line-height: 1.45; }
  .dv-summary-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .dv-summary-layout { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 18px; align-items: start; }
  .dv-summary-main, .dv-summary-side { display: flex; flex-direction: column; gap: 14px; }
  .dv-summary-card { border: 1px solid rgba(229, 231, 235, 0.9); border-radius: 16px; background: #ffffff; box-shadow: var(--shadow-md); }
  .dv-summary-card__header { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; border-bottom: 1px solid #edf2f7; }
  .dv-summary-card__title { display: flex; align-items: center; gap: 8px; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-summary-card__body { padding: 16px; }
  .dv-summary-flight { display: grid; grid-template-columns: minmax(0, 1fr) 160px; gap: 14px; padding: 14px 0; border-bottom: 1px solid #edf2f7; }
  .dv-summary-flight:last-child { border-bottom: 0; padding-bottom: 0; }
  .dv-summary-flight__route { display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .dv-summary-flight__badge { display: inline-flex; align-self: flex-start; min-height: 22px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: #eef2f7; color: #475569; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-summary-airports { display: flex; align-items: center; gap: 8px; color: #1f2937; font-size: 17px; font-weight: 900; }
  .dv-summary-airports span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .dv-summary-flight__meta { display: flex; flex-wrap: wrap; gap: 6px; }
  .dv-summary-meta-pill { display: inline-flex; min-height: 24px; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 999px; background: #f8fafc; color: #64748b; font-size: 11px; font-weight: 800; }
  .dv-summary-flight__price { display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; text-align: right; }
  .dv-summary-price-label { color: #94a3b8; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-summary-price-value { color: var(--reserve-primary); font-size: 20px; font-weight: 900; }
  .dv-policy-list { display: grid; gap: 10px; }
  .dv-policy-card { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 10px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f8fafc; }
  .dv-policy-card--success { border-color: rgba(5, 150, 105, 0.26); background: #ecfdf5; }
  .dv-policy-card--warning { border-color: rgba(217, 119, 6, 0.28); background: #fffbeb; }
  .dv-policy-card--danger { border-color: rgba(220, 38, 38, 0.26); background: #fef2f2; }
  .dv-policy-icon { display: inline-flex; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 999px; background: #ffffff; color: #64748b; }
  .dv-policy-card--success .dv-policy-icon { color: #059669; }
  .dv-policy-card--warning .dv-policy-icon { color: #d97706; }
  .dv-policy-card--danger .dv-policy-icon { color: #dc2626; }
  .dv-policy-copy { display: flex; min-width: 0; flex-direction: column; gap: 4px; }
  .dv-policy-title-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .dv-policy-title { color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-policy-status { display: inline-flex; min-height: 22px; align-items: center; padding: 3px 8px; border-radius: 999px; background: #ffffff; color: #64748b; font-size: 10px; font-weight: 900; text-transform: uppercase; }
  .dv-policy-card--success .dv-policy-status { color: #059669; }
  .dv-policy-card--warning .dv-policy-status { color: #d97706; }
  .dv-policy-card--danger .dv-policy-status { color: #dc2626; }
  .dv-policy-description { color: #64748b; font-size: 11px; font-weight: 700; line-height: 1.4; }
  .dv-context-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .dv-context-item { display: flex; min-width: 0; flex-direction: column; gap: 4px; padding: 10px 12px; border: 1px solid #edf2f7; border-radius: 12px; background: #f8fafc; }
  .dv-context-item--wide { grid-column: span 3; }
  .dv-context-label { color: #94a3b8; font-size: 10px; font-weight: 900; letter-spacing: 0.04em; text-transform: uppercase; }
  .dv-context-value { overflow: hidden; color: #1f2937; font-size: 12px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .dv-context-value--wrap { white-space: normal; line-height: 1.35; }
  .dv-inclusion-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .dv-inclusion-item { display: flex; align-items: flex-start; gap: 8px; padding: 10px; border: 1px solid #edf2f7; border-radius: 12px; background: #f8fafc; color: #475569; font-size: 11px; font-weight: 800; }
  .dv-inclusion-item.is-included .q-icon { color: #059669; }
  .dv-inclusion-item.is-not-included .q-icon { color: #dc2626; }
  .dv-addons-list { display: flex; flex-direction: column; gap: 10px; }
  .dv-addon-option { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #ffffff; cursor: pointer; }
  .dv-addon-option input { width: 16px; height: 16px; accent-color: var(--reserve-primary); }
  .dv-addon-copy { display: flex; min-width: 0; flex-direction: column; gap: 3px; }
  .dv-addon-title { color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-addon-subtitle { color: #64748b; font-size: 11px; font-weight: 700; }
  .dv-addon-price { color: var(--reserve-primary); font-size: 13px; font-weight: 900; white-space: nowrap; }
  .dv-seat-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
  .dv-seat-button { min-height: 38px; border: 1px solid #dbe3ef; border-radius: 10px; background: #ffffff; color: #475569; cursor: pointer; font-size: 12px; font-weight: 900; }
  .dv-seat-button.is-selected { border-color: var(--reserve-primary); background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12); }
  .dv-totals-list { display: flex; flex-direction: column; gap: 8px; }
  .dv-total-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #475569; font-size: 12px; font-weight: 800; }
  .dv-total-row--grand { margin-top: 6px; padding-top: 12px; border-top: 1px solid #edf2f7; color: var(--dv-primary); font-size: 14px; font-weight: 900; }
  .dv-total-row--grand strong { font-size: 22px; }
  .dv-summary-final-btn { display: inline-flex; min-height: 44px; width: 100%; align-items: center; justify-content: center; gap: 8px; margin-top: 12px; border-radius: 12px; background: var(--dv-primary); color: #ffffff; cursor: pointer; font-size: 13px; font-weight: 900; }
  @media (max-width: 980px) {
    .dv-summary-layout { grid-template-columns: 1fr; }
    .dv-summary-flight { grid-template-columns: 1fr; }
    .dv-summary-flight__price { align-items: flex-start; text-align: left; }
  }
  @media (max-width: 640px) {
    .dv-summary-topbar { flex-direction: column; align-items: stretch; }
    .dv-summary-actions { width: 100%; }
    .dv-summary-actions .dv-action-toggle { flex: 1; }
    .dv-context-grid { grid-template-columns: 1fr; }
    .dv-context-item--wide { grid-column: span 1; }
    .dv-inclusion-grid { grid-template-columns: 1fr; }
  }

  /* Calendar Shop */
  .dv-calendar-shop { width: 100%; margin: 0 0 16px; padding: 0 2px 2px; color: #0f172a; }
  .dv-calendar-shop__header { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; }
  .dv-calendar-shop__heading { display: flex; min-width: 0; align-items: center; gap: 8px; }
  .dv-calendar-shop__header-bar { width: 4px; height: 20px; flex: 0 0 4px; border-radius: 999px; background: var(--reserve-primary); }
  .dv-calendar-shop__title { margin: 0; color: #1f2937; font-size: 16px; font-weight: 900; line-height: 1.25; }
  .dv-calendar-shop__title-month { color: var(--reserve-primary); }
  .dv-calendar-shop__list { display: flex; width: 100%; gap: 10px; overflow-x: auto; padding: 14px 6px 12px; scroll-snap-type: x proximity; scrollbar-width: none; }
  .dv-calendar-shop__item { position: relative; display: flex; width: 184px; min-height: 88px; flex: 0 0 184px; flex-direction: column; justify-content: space-between; padding: 0; border: 1px solid #eef2f7; border-radius: 8px; background: #ffffff; color: inherit; cursor: pointer; scroll-snap-align: start; text-align: left; box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.08); }
  .dv-calendar-shop__item--active { border-color: var(--reserve-primary); box-shadow: 0 0 0 1px rgba(66, 143, 112, 0.3), 0 8px 18px -10px rgba(66, 143, 112, 0.34); }
  .dv-calendar-shop__fare-delta { position: absolute; top: -8px; right: -6px; z-index: 2; display: inline-flex; align-items: center; gap: 4px; padding: 3px 7px; border-radius: 5px; background: #34d399; color: #ffffff; outline: 3px solid #ffffff; box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12); font-size: 11px; font-weight: 900; line-height: 1; text-transform: uppercase; }
  .dv-calendar-shop__date-line { display: flex; min-height: 38px; align-items: center; justify-content: center; padding: 8px 14px; border-bottom: 1px solid #f3f4f6; }
  .dv-calendar-shop__date { color: #6b7280; font-size: 15px; font-weight: 500; }
  .dv-calendar-shop__fare { display: flex; min-height: 48px; align-items: center; justify-content: center; gap: 10px; padding: 10px 14px 12px; }
  .dv-calendar-shop__company { display: inline-flex; min-width: 54px; align-items: center; font-weight: 800; color: var(--reserve-secondary); font-size: 14px; }
  .dv-calendar-shop__logo { display: block; max-width: 54px; max-height: 18px; object-fit: contain; }
  .dv-calendar-shop__price-group { display: inline-flex; align-items: baseline; color: #334155; }
  .dv-calendar-shop__price-group--best { color: #047857; }
  .dv-calendar-shop__price-symbol { font-size: 12px; font-weight: 750; }
  .dv-calendar-shop__price-integer { font-size: 17px; font-weight: 750; }

  /* FLIGHT CARDS - LIST */
  .lista-voos-container { width: 100%; margin: 0 auto; padding: 0 0 16px; }
  .flights-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  .flight-card-container { position: relative; display: flex; width: 100%; flex-direction: column; border: 1px solid rgba(66, 143, 112, 0.2); border-radius: 14px; background: #ffffff; box-shadow: 0 5px 18px rgba(15, 23, 42, 0.045); transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .flight-card-container:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08); }
  .flight-card-section-divider { height: 1px; margin: 0 14px; background: linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.08), transparent); }
  
  .flight-header-modern { display: flex; min-height: 48px; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 7px 14px; background: #ffffff; border-radius: 14px 14px 0 0; }
  .flight-header-modern.selected { background: rgba(66, 143, 112, 0.03); }
  .flight-details, .airline-info, .flight-actions, .info-badges, .booking-info { display: flex; align-items: center; }
  .flight-details { flex: 1; min-width: 0; gap: 12px; flex-wrap: wrap; }
  .airline-info { min-width: 0; gap: 5px; flex-wrap: wrap; }
  .preferred-star { color: #ffc107; }
  .airline-logo-wrapper { width: 76px; height: 24px; display: flex; align-items: center; justify-content: flex-start; font-weight: 900; color: var(--reserve-secondary); font-size: 15px; }
  .airline-logo-image { display: block; max-width: 76px; max-height: 24px; object-fit: contain; }
  .airline-logo-fallback { overflow: hidden; color: var(--reserve-secondary); font-size: 15px; font-weight: 900; text-overflow: ellipsis; white-space: nowrap; }
  .vertical-divider { width: 1px; height: 20px; margin: 0 4px; background: #dee2e6; }
  .q-chip { display: inline-flex; min-height: 22px; align-items: center; gap: 4px; padding: 3px 8px; border-radius: 12px; background: #ffffff; font-size: 10px; font-weight: 700; line-height: 1; white-space: nowrap; }
  .q-chip .q-icon { margin-right: 3px; font-size: 13px; }
  .connection-badge { border: 1px solid rgba(66, 143, 112, 0.2); color: var(--reserve-primary); }
  .roundtrip-badge { border: 1px solid rgba(66, 143, 112, 0.2); color: var(--reserve-primary); }
  .buy-now-badge, .limit-badge { border: 1px solid rgba(198, 40, 40, 0.2); color: #c62828; }
  .agency-badge { border: 1px solid rgba(230, 81, 0, 0.2); color: #e65100; }
  .info-badges { gap: 6px; row-gap: 5px; flex-wrap: wrap; }
  .flight-actions { gap: 10px; flex-shrink: 0; }
  .statistics-btn { display: inline-flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 999px; background: transparent; color: var(--reserve-primary); cursor: pointer; }
  .booking-info { gap: 6px; color: var(--reserve-primary); font-size: 13px; font-weight: 600; }
  .selection-checkbox { position: relative; width: 22px; height: 22px; flex-shrink: 0; border: 2px solid var(--reserve-primary); border-radius: 4px; background: var(--reserve-primary); box-shadow: 0 1px 3px rgba(66, 143, 112, 0.25); }
  .selection-checkbox::after { content: ""; position: absolute; left: 6px; top: 2px; width: 6px; height: 12px; border: solid #ffffff; border-width: 0 2px 2px 0; transform: rotate(45deg); }

  .flight-segments { padding: 0; }
  .segment { display: grid; max-width: 100%; min-width: 0; grid-template-columns: minmax(98px, 0.9fr) minmax(180px, 1.7fr) minmax(98px, 0.9fr) 210px; grid-template-areas: "origin route destination stats"; gap: 12px; align-items: center; padding: 12px 14px; background: transparent; }
  .combined-card .segment + .segment { border-top: 1px solid #f1f3f5; }
  
  .airport { position: relative; display: flex; min-width: 0; height: 108px; flex-direction: column; gap: 3px; padding: 10px; border-radius: 10px; background: rgba(255, 255, 255, 0.5); box-shadow: 0 2px 4px rgba(0, 0, 0, 0.035); }
  .airport.origin { grid-area: origin; align-items: flex-start; }
  .airport.destination { grid-area: destination; align-items: flex-end; text-align: right; }
  .airport-time { display: flex; align-items: center; gap: 5px; color: var(--reserve-primary); font-size: 24px; font-weight: 800; line-height: 1.1; letter-spacing: 0; filter: drop-shadow(0 1px 2px rgba(66, 143, 112, 0.12)); }
  .period-icon { font-size: 19px; opacity: 0.75; }
  .airport-code { color: #343a40; font-size: 14px; font-weight: 800; letter-spacing: 0.4px; }
  .airport-date { color: #6c757d; font-size: 11px; font-weight: 700; }
  .airport-name { max-width: 100%; margin-top: 2px; overflow: hidden; color: #868e96; font-size: 11px; font-weight: 600; text-overflow: ellipsis; white-space: nowrap; }
  
  .route-container { grid-area: route; display: flex; min-width: 0; flex-direction: column; align-items: center; gap: 6px; }
  .route-visual { display: grid; width: 100%; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #ced4da; } .dot.start { background: var(--reserve-primary); }
  .line { position: relative; width: 100%; height: 2px; background: #dee2e6; }
  .plane-icon { position: absolute; top: 50%; left: var(--plane-position, 50%); margin-top: -11px; margin-left: -11px; padding: 3px; border-radius: 50%; background: #ffffff; color: var(--reserve-primary); font-size: 16px; box-shadow: 0 2px 6px rgba(66, 143, 112, 0.2); transform: rotate(90deg); }
  .route-details { display: flex; width: 100%; align-items: center; justify-content: center; gap: 10px; margin-top: 4px; color: #495057; font-size: 11px; }
  .duration, .stops { display: flex; align-items: center; padding: 4px 9px; border-radius: 16px; background: rgba(66, 143, 112, 0.06); font-weight: 700; }
  .duration .q-icon, .stops .q-icon { margin-right: 6px; } .direct { color: #28a745; font-weight: 800; }

  .stats-column { grid-area: stats; display: flex; min-width: 0; align-items: stretch; gap: 10px; }
  .stats-divider { width: 1px; min-height: 78px; flex-shrink: 0; background: linear-gradient(to bottom, transparent 2%, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.1) 90%, transparent 98%); }
  .stats-triangle-layout { display: flex; width: 190px; height: 108px; flex-direction: column; gap: 10px; }
  .stat-card-top, .stat-card-bottom { display: flex; align-items: center; border: 1px solid rgba(0, 0, 0, 0.06); background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.95) 100%); box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); }
  .stat-card-top { width: 100%; gap: 8px; padding: 9px 10px; border-radius: 10px; }
  .stat-card-icon-top { display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border-radius: 8px; background: linear-gradient(135deg, #17a2b8 0%, #3dc1d3 100%); color: #ffffff; }
  .stat-card-label-top { color: #17a2b8; font-size: 9px; font-weight: 800; letter-spacing: 0.4px; text-transform: uppercase; }
  .stat-card-value-top { color: #17a2b8; font-size: 17px; font-weight: 900; line-height: 1; }
  .stat-card-unit-top { font-size: 10px; font-weight: 700; }
  .stat-cards-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
  .stat-card-bottom { gap: 5px; padding: 6px 7px; border-radius: 9px; }
  .stat-card-icon-bottom { display: flex; width: 22px; height: 22px; align-items: center; justify-content: center; border-radius: 6px; background: rgba(108, 117, 125, 0.1); color: #6c757d; }
  .stat-card-label-bottom { color: #6c757d; font-size: 7px; font-weight: 800; text-transform: uppercase; }
  .stat-card-value-bottom { color: #495057; font-size: 13px; font-weight: 900; line-height: 1; }

  /* Fares */
  .flight-fares { display: flex; min-width: 0; flex-direction: column; gap: 8px; padding: 10px 12px; background: #f8f9fa; border-radius: 0 0 14px 14px; }
  .fare-type-row { display: flex; min-width: 0; align-items: stretch; border-radius: 10px; background: #ffffff; }
  .fare-type-icon-wrapper { display: flex; min-width: 54px; flex-shrink: 0; align-items: center; justify-content: center; padding: 10px 0; background: linear-gradient(135deg, rgba(66, 143, 112, 0.08) 0%, rgba(66, 143, 112, 0.04) 100%); color: var(--reserve-primary); border-radius: 10px 0 0 10px; }
  .fare-type-icon-wrapper .q-icon { font-size: 24px; }
  .fares-horizontal-container { display: grid; flex: 1; min-width: 0; max-width: 100%; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 6px; padding: 7px 7px 10px; }
  .fare-card-compact { position: relative; display: flex; min-width: 0; flex-direction: column; padding: 8px 10px; overflow: visible; border: 2px solid rgba(221, 221, 221, 0.45); border-radius: 10px; background: rgba(221, 221, 221, 0.08); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); cursor: pointer; text-align: left; transition: all 0.2s; }
  .fare-card-compact:hover { border-color: rgba(221, 221, 221, 0.75); background: rgba(221, 221, 221, 0.13); }
  .fare-card-compact.lowest-fare { border-color: var(--lowest-fare); background: linear-gradient(135deg, rgba(242, 187, 29, 0.12) 0%, rgba(242, 187, 29, 0.06) 100%); }
  .fare-card-compact.lowest-baggage { border-color: var(--lowest-baggage); background: linear-gradient(135deg, rgba(103, 163, 83, 0.12) 0%, rgba(103, 163, 83, 0.06) 100%); }
  .fare-card-compact.is-selected { border-color: var(--reserve-primary); background: linear-gradient(135deg, rgba(66, 143, 112, 0.16) 0%, rgba(66, 143, 112, 0.07) 100%); box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.13); }
  .best-fare-badge { position: absolute; top: -12px; right: -12px; display: flex; width: 32px; height: 32px; align-items: center; justify-content: center; border: 2px solid #ffffff; border-radius: 50%; background: linear-gradient(135deg, var(--lowest-fare) 0%, #b98100 100%); box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25); color: #ffffff; z-index: 10; }
  .best-fare-badge.baggage-fare { width: 36px; border-radius: 16px; background: linear-gradient(135deg, var(--lowest-baggage) 0%, #3f7d33 100%); }
  
  .fare-name-with-class, .benefits-icons-inline, .fare-price-row, .fare-price-compact { display: flex; align-items: center; }
  .fare-name-with-class { gap: 6px; }
  .fare-name-text { max-width: 118px; overflow: hidden; color: #2c3e50; font-size: 10px; font-weight: 800; letter-spacing: 0.3px; text-overflow: ellipsis; text-transform: uppercase; white-space: nowrap; }
  .class-badge { padding: 3px 6px; border-radius: 6px; background: linear-gradient(135deg, #dddddd 0%, #555f68 100%); color: #ffffff; font-size: 9px; font-weight: 800; }
  .lowest-fare .class-badge { background: linear-gradient(135deg, var(--lowest-fare) 0%, #b98100 100%); }
  .lowest-baggage .class-badge { background: linear-gradient(135deg, var(--lowest-baggage) 0%, #3f7d33 100%); }
  .benefits-icons-inline { gap: 4px; margin-top: 5px; color: var(--reserve-primary); }
  .benefits-icons-inline .benefit-lucide-icon { width: 16px; height: 16px; flex: 0 0 auto; }
  .benefit-disabled { color: #c9ced4; opacity: 0.45; }
  .fare-price-row { justify-content: space-between; gap: 6px; margin-top: 5px; }
  .fare-price-compact { align-items: baseline; gap: 2px; }
  .currency-small { color: #6c757d; font-size: 10px; font-weight: 800; }
  .amount-large { color: #555f68; font-size: 19px; font-weight: 700; line-height: 1; letter-spacing: 0; }
  .cents-small { color: #6c757d; font-size: 13px; font-weight: 800; }
  .lowest-fare .currency-small, .lowest-fare .amount-large, .lowest-fare .cents-small { color: var(--lowest-fare); }
  .lowest-baggage .currency-small, .lowest-baggage .amount-large, .lowest-baggage .cents-small { color: var(--lowest-baggage); }
  .expand-btn-inline { color: #555f68; font-size: 18px; }

  .expanded-content { display: none; flex-direction: column; margin-top: 8px; }
  .fare-card-compact.is-expanded { align-self: stretch; height: 100%; }
  .fare-card-compact.is-expanded .expanded-content { display: flex; }
  .benefits-detailed { display: flex; flex-direction: column; gap: 5px; padding-top: 8px; border-top: 1px dashed #e9ecef; }
  .benefit-item { display: flex; align-items: flex-start; gap: 6px; padding: 4px; font-size: 10px; }
  .benefit-item.included .q-icon { color: #28a745; }
  .benefit-item:not(.included) .q-icon { color: #c62828; }
  .benefit-content { display: flex; flex-direction: column; gap: 1px; }
  .benefit-name { color: #2c3e50; font-weight: 600; }
  .benefit-obs { color: #6c757d; font-size: 9px; font-style: italic; }

  @media (max-width: 968px) {
    .segment { grid-template-columns: 1fr 1fr; grid-template-areas: "origin destination" "route route" "stats stats"; gap: 12px; padding: 12px; }
    .route-container { padding-top: 12px; border-top: 1px solid #f1f3f5; }
    .stats-divider { display: none; }
    .stats-triangle-layout { width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; gap: 10px; }
    .stat-card-top, .stat-cards-bottom { flex: 1; min-width: 0; }
    .fares-horizontal-container { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .dv-selection-panel { width: 100%; flex-basis: auto; }
  }

  @media (max-width: 768px) {
    .dv-root { padding-top: 12px; }
    .dv-header { padding: 0 16px; }
    .aria-card__body { display: flex; flex-direction: column; align-items: stretch; padding: 18px; }
    .aria-card__identity { align-items: flex-start; }
    .aria-card__toggle { width: 100%; min-width: 0; }
    .aria-insights { grid-column: auto; }
    .dv-toolbar { flex-direction: column; align-items: stretch; }
    .dv-toolbar__left { justify-content: flex-start; flex-wrap: wrap; }
    .dv-toolbar__right { justify-content: flex-end; flex-wrap: wrap; }
    .dv-sort-select { flex: 1 1 220px; min-width: 0; }
    .flight-header-modern { flex-direction: column; align-items: stretch; gap: 8px; padding: 10px 14px; }
    .flight-actions { order: -1; justify-content: space-between; gap: 8px; }
    .airline-info { width: 100%; gap: 4px; }
    .vertical-divider { display: none; }
    .info-badges { width: 100%; gap: 4px; row-gap: 4px; }
    .q-chip { padding: 2px 6px; font-size: 9px; }
    .flight-fares { gap: 8px; overflow-x: hidden; padding: 8px 10px; }
    .fare-type-row { flex-direction: column; }
    .fare-type-icon-wrapper { min-width: auto; justify-content: flex-start; padding: 8px 12px; border-radius: 10px 10px 0 0; }
    .fares-horizontal-container { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; padding: 6px; }
  }

  @media (max-width: 480px) {
    .dv-root { padding-bottom: 20px; }
    .dv-aria-card-panel { margin: 0 12px 14px; }
    .aria-card { border-radius: 20px; }
    .aria-card__body { padding: 14px; }
    .aria-card__identity { flex-direction: column; gap: 12px; }
    .aria-card__title { font-size: 20px; }
    .aria-card__subtitle { font-size: 13px; }
    .dv-tabs { gap: 6px; }
    .dv-tab { flex: 0 0 auto; padding: 9px 10px; }
    .dv-sisres-kpis { display: none; }
    .dv-toolbar__right { justify-content: flex-end; width: 100%; }
    .dv-toolbar__right .dv-action-toggle { flex: 1 1 210px; }
    .dv-toolbar__right .dv-filter-btn { flex: 1 1 128px; }
    .lista-voos-container { padding: 0 8px 12px; }
    .flight-card-container { width: min(380px, calc(100vw - 16px)); max-width: 100%; margin-right: auto; margin-left: auto; }
    .dv-selection-panel { width: 100%; flex-basis: auto; }
    .segment { gap: 4px; padding: 10px 12px; overflow: hidden; }
    .airport { height: auto; min-height: auto; gap: 2px; padding: 6px 8px; border-radius: 10px; background: rgba(248, 249, 252, 0.6); box-shadow: none; }
    .airport-time { gap: 4px; font-size: 24px; filter: none; }
    .period-icon { font-size: 16px; opacity: 0.55; }
    .route-container { gap: 4px; padding-top: 6px; border-top: 1px solid #f5f5f5; }
    .dot { width: 7px; height: 7px; }
    .stats-column { padding-top: 8px; border-top: 1px solid #f5f5f5; }
    .stats-triangle-layout { flex-direction: column; gap: 8px; }
    .fares-horizontal-container { display: flex; gap: 8px; overflow-x: auto; padding: 8px; scroll-snap-type: x proximity; scrollbar-width: none; }
    .fare-card-compact { min-width: 148px; max-width: 165px; flex: 0 0 auto; scroll-snap-align: start; }
  }

  /* UX polish */
  :root {
    --radius-xs: 4px;
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 8px;
    --radius-xl: 8px;
    --dv-surface: #ffffff;
    --dv-surface-soft: #f8fafc;
    --dv-surface-muted: #f1f5f9;
    --dv-line: #dfe6ef;
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
    --shadow-md: 0 8px 22px -18px rgba(15, 23, 42, 0.35);
    --shadow-lg: 0 18px 44px -30px rgba(15, 23, 42, 0.42);
  }

  .dv-app-container {
    background:
      linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.94) 42%, rgba(241,245,249,1) 100%);
    color: var(--dv-text);
  }

  .dv-app-container button,
  .dv-app-container select,
  .dv-app-container input {
    -webkit-tap-highlight-color: transparent;
  }

  .dv-app-container button:focus-visible,
  .dv-app-container select:focus-visible,
  .dv-app-container input:focus-visible {
    outline: 3px solid rgba(66, 143, 112, 0.22);
    outline-offset: 2px;
  }

  .dv-filter-card,
  .dv-search-card,
  .dv-selection-box,
  .dv-summary-card,
  .dv-sisres,
  .dv-calendar-shop__item,
  .dv-policy-card,
  .dv-context-item,
  .dv-inclusion-item,
  .dv-addon-option,
  .dv-passenger-chips,
  .dv-passenger-suggestions {
    border-radius: var(--radius-md);
  }

  .dv-search-card,
  .dv-filter-card,
  .dv-selection-box,
  .dv-summary-card,
  .dv-calendar-shop__item,
  .dv-sisres {
    border-color: var(--dv-line);
    background: var(--dv-surface);
    box-shadow: var(--shadow-md);
  }

  .dv-search-screen {
    align-items: flex-start;
    padding: 24px 16px 44px;
    background:
      linear-gradient(180deg, rgba(255,255,255,0.74) 0%, rgba(248,250,252,0.9) 42%, rgba(241,245,249,1) 100%),
      linear-gradient(90deg, rgba(57, 87, 165, 0.05) 1px, transparent 1px),
      linear-gradient(180deg, rgba(66, 143, 112, 0.045) 1px, transparent 1px);
    background-size: auto, 34px 34px, 34px 34px;
  }

  .dv-search-shell {
    max-width: 1040px;
  }

  .dv-search-heading {
    margin-bottom: 14px;
    padding: 0 4px;
  }

  .dv-search-kicker {
    border-color: rgba(66, 143, 112, 0.22);
    background: rgba(255, 255, 255, 0.9);
    color: var(--reserve-primary);
    box-shadow: 0 10px 24px -20px rgba(15, 23, 42, 0.5);
  }

  .dv-search-title {
    max-width: 760px;
    margin-top: 10px;
    font-size: 36px;
    letter-spacing: 0;
  }

  .dv-search-subtitle {
    max-width: 680px;
    color: #526173;
    font-size: 13px;
    font-weight: 650;
  }

  .dv-search-card {
    padding: 22px;
  }

  .dv-search-grid {
    gap: 14px;
  }

  .dv-search-control,
  .dv-sort-select,
  .dv-icon-btn,
  .dv-filter-btn,
  .dv-clear-btn,
  .dv-action-toggle,
  .dv-search-submit,
  .dv-tarifar-btn,
  .dv-summary-final-btn,
  .dv-seat-button,
  .dv-selection-clear {
    border-radius: var(--radius-md);
  }

  .dv-search-control,
  .dv-sort-select {
    border-color: var(--dv-line);
    background: var(--dv-surface-soft);
  }

  .dv-search-control:hover,
  .dv-sort-select:hover {
    border-color: #cbd5e1;
    background: #ffffff;
  }

  .dv-search-card.dv-search-card--structured {
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    overflow: visible;
  }

  .dv-search-card.dv-search-card--travel {
    padding: 12px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 24px 48px -32px rgba(15, 43, 96, 0.46);
  }

  .dv-trip-modebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 10px;
    padding: 4px;
    border: 1px solid #e0e7ef;
    border-radius: var(--radius-md);
    background: #f8fafc;
  }

  .dv-trip-modebar__item,
  .dv-trip-modebar__summary {
    display: inline-flex;
    min-height: 32px;
    align-items: center;
    gap: 7px;
    padding: 6px 10px;
    border-radius: var(--radius-sm);
    font-size: 12px;
    font-weight: 900;
    line-height: 1.25;
    white-space: nowrap;
  }

  .dv-trip-modebar__item.is-active {
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: var(--shadow-sm);
  }

  .dv-trip-modebar__summary {
    color: #64748b;
  }

  .dv-itinerary-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
    gap: 8px;
    align-items: stretch;
  }

  .dv-itinerary-field {
    display: flex;
    min-width: 0;
    min-height: 118px;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background:
      linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.92);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-itinerary-field:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-itinerary-label {
    color: #64748b;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .dv-itinerary-field__body {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 12px;
    align-items: end;
  }

  .dv-itinerary-code {
    color: var(--dv-primary);
    font-size: 38px;
    font-weight: 950;
    line-height: 0.95;
  }

  .dv-itinerary-input {
    width: 100%;
    min-width: 0;
    border: 0;
    background: transparent;
    color: #1f2937;
    font: inherit;
    font-size: 15px;
    font-weight: 850;
    line-height: 1.25;
    outline: none;
  }

  .dv-itinerary-swap {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7e1ec;
    border-radius: 999px;
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: 0 14px 26px -20px rgba(15, 43, 96, 0.56);
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
  }

  .dv-itinerary-swap:hover {
    border-color: var(--reserve-primary);
    background: #eef7f2;
    transform: translateY(-1px);
  }

  .dv-trip-control-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(180px, 0.8fr) auto;
    gap: 8px;
    align-items: stretch;
    margin-top: 8px;
  }

  .dv-trip-control {
    display: flex;
    min-width: 0;
    min-height: 64px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px 12px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-trip-control:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-trip-control .dv-search-control {
    min-height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    font-size: 14px;
  }

  .dv-search-submit.dv-search-submit--travel {
    min-width: 218px;
    min-height: 64px;
    border-radius: var(--radius-md);
    background: linear-gradient(90deg, var(--reserve-secondary), var(--dv-primary));
    box-shadow: 0 18px 30px -22px rgba(15, 43, 96, 0.72);
  }

  .dv-search-screen.dv-search-screen--reserve {
    position: relative;
    min-height: 100vh;
    display: block;
    padding: 0 0 64px;
    overflow: visible;
    background: #f8fafc;
  }

  .dv-search-screen.dv-search-screen--reserve::before {
    display: none;
  }

  .dv-search-hero {
    position: relative;
    z-index: 1;
    padding: 40px 16px 128px;
    background: #38634f;
  }

  .dv-search-screen--reserve .dv-search-shell {
    position: relative;
    z-index: 2;
    max-width: 1024px;
    margin-top: -96px;
    padding: 0 16px;
  }

  .dv-service-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
  }

  .dv-service-tab-list {
    display: flex;
    max-width: 100%;
    gap: 4px;
    overflow-x: auto;
    padding: 6px;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 999px;
    background: rgba(255,255,255,0.11);
    box-shadow: 0 20px 36px -28px rgba(0,0,0,0.7);
    scrollbar-width: none;
  }

  .dv-service-tab-list::-webkit-scrollbar {
    display: none;
  }

  .dv-service-tab {
    display: inline-flex;
    min-height: 38px;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 999px;
    background: transparent;
    color: rgba(255,255,255,0.86);
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    white-space: nowrap;
    transition: background 0.18s ease, color 0.18s ease;
  }

  .dv-service-tab:hover {
    background: rgba(255,255,255,0.18);
  }

  .dv-service-tab.is-active {
    background: #ffffff;
    color: #38634f;
    box-shadow: var(--shadow-sm);
  }

  .dv-search-hero-copy {
    max-width: 860px;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }

  .dv-search-hero-copy h1 {
    margin: 0 0 12px;
    color: #ffffff;
    font-size: clamp(30px, 4vw, 40px);
    font-weight: 900;
    line-height: 1.1;
  }

  .dv-search-hero-copy p {
    margin: 0;
    color: rgba(255,255,255,0.82);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
  }

  .dv-booking-card {
    position: relative;
    padding: 24px;
    border: 1px solid rgba(243, 244, 246, 0.98);
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 54px -30px rgba(15, 23, 42, 0.58);
  }

  .dv-booking-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 24px;
  }

  .dv-trip-segmented {
    display: inline-flex;
    gap: 3px;
    padding: 4px;
    border-radius: var(--radius-md);
    background: #f1f5f9;
  }

  .dv-trip-segmented__item {
    min-height: 34px;
    padding: 7px 12px;
    border-radius: var(--radius-sm);
    background: transparent;
    color: #64748b;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-trip-segmented__item.is-active {
    background: #ffffff;
    color: var(--reserve-primary);
    box-shadow: var(--shadow-sm);
  }

  .dv-booking-service-title {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #1f2937;
    font-size: 17px;
    font-weight: 900;
  }

  .dv-booking-service-title .q-icon {
    color: var(--reserve-primary);
    font-size: 21px;
  }

  .dv-booking-tools {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
  }

  .dv-passenger-control {
    position: relative;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: #334155;
    transition: background 0.18s ease, border-color 0.18s ease;
  }

  .dv-passenger-control:hover,
  .dv-passenger-control:focus-within {
    border-color: #e5e7eb;
    background: #f3f4f6;
  }

  .dv-passenger-control::after {
    display: none;
  }

  .dv-passenger-toolbar {
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    gap: 8px;
    padding: 8px 9px 8px 14px;
    border-radius: var(--radius-md);
    color: #334155;
    background: transparent;
    border: 0;
    font-size: 13px;
    font-weight: 800;
    white-space: nowrap;
    cursor: pointer;
  }

  .dv-passenger-toolbar > .q-icon {
    color: #64748b;
  }

  .dv-passenger-quick-add {
    display: inline-flex;
    width: 38px;
    height: 40px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border: 0;
    border-left: 1px solid #d1d5db;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--reserve-primary);
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-passenger-quick-add--decrease {
    border-left: 1px solid #d1d5db;
    border-radius: 0;
    color: #64748b;
  }

  .dv-passenger-quick-add--increase {
    border-left: 1px solid #d1d5db;
  }

  .dv-passenger-quick-add:hover {
    background: rgba(66, 143, 112, 0.1);
    color: #38634f;
  }

  .dv-passenger-quick-add:disabled {
    cursor: not-allowed;
    opacity: 0.48;
  }

  .dv-passenger-toolbar__stepper {
    display: inline-flex;
    gap: 4px;
  }

  .dv-passenger-toolbar .dv-stepper-btn {
    width: 28px;
    height: 28px;
  }

  .dv-passenger-selector {
    position: relative;
  }

  .dv-passenger-popover {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: auto;
    z-index: 120;
    display: grid;
    width: min(320px, calc(100vw - 32px));
    gap: 10px;
    padding: 16px;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 24px 48px -26px rgba(15, 23, 42, 0.58);
  }

  .dv-passenger-popover__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-passenger-popover__header span {
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
    white-space: nowrap;
  }

  .dv-passenger-popover .dv-passenger-chips {
    min-height: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  .dv-passenger-popover .dv-passenger-chip {
    min-height: 26px;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 800;
  }

  .dv-passenger-popover .dv-passenger-chip button {
    width: 18px;
    height: 18px;
    transition: background 0.18s ease, color 0.18s ease;
  }

  .dv-passenger-popover .dv-passenger-chip button:hover {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-passenger-chip--anonymous {
    background: #fef3c7;
    color: #92400e;
  }

  .dv-passenger-chip--anonymous button {
    background: #fde68a;
    color: #92400e;
  }

  .dv-passenger-chip button:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  .dv-passenger-popover .dv-passenger-input-wrap {
    position: relative;
  }

  .dv-passenger-popover .dv-passenger-input-wrap .q-icon {
    display: none;
  }

  .dv-passenger-popover .dv-passenger-input {
    width: 100%;
    min-height: 38px;
    padding: 8px 12px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #ffffff;
    color: #374151;
    font: inherit;
    font-size: 13px;
    font-weight: 700;
    outline: none;
  }

  .dv-passenger-hint {
    display: block;
    margin-top: 4px;
    color: #9ca3af;
    font-size: 11px;
    font-weight: 600;
  }

  .dv-passenger-popover .dv-passenger-input:focus {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-passenger-popover .dv-passenger-suggestions {
    position: static;
    display: block;
    max-height: 220px;
    overflow: hidden auto;
    gap: 0;
    padding: 0;
    border-color: #f3f4f6;
    border-radius: 8px;
    box-shadow: none;
  }

  .dv-passenger-popover .dv-passenger-option {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2px;
    padding: 9px 12px;
    border-radius: 0;
    border-bottom: 1px solid #f3f4f6;
  }

  .dv-passenger-popover .dv-passenger-option:last-child {
    border-bottom: 0;
  }

  .dv-passenger-popover .dv-passenger-option > .q-icon {
    display: none;
  }

  .dv-passenger-popover .dv-passenger-name {
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }

  .dv-passenger-popover .dv-passenger-meta {
    color: #9ca3af;
    font-size: 11px;
    font-weight: 650;
  }

  .dv-filter-toggle {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-filter-toggle:hover {
    border-color: #e5e7eb;
    background: #f3f4f6;
  }

  .dv-filter-toggle.is-active {
    border-color: rgba(66, 143, 112, 0.3);
    background: #eef7f2;
    color: var(--reserve-primary);
  }

  .dv-hotel-search-filter {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #edf2f7;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 18px 38px -30px rgba(15, 23, 42, 0.58);
  }

  .dv-hotel-search-filter__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 18px 14px;
    border-bottom: 1px solid #edf2f7;
  }

  .dv-hotel-search-filter__title {
    margin: 0;
    color: #1f2937;
    font-size: 16px;
    font-weight: 900;
  }

  .dv-hotel-search-filter__close {
    display: inline-flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: transparent;
    color: #94a3b8;
    cursor: pointer;
  }

  .dv-hotel-search-filter__close:hover {
    background: #f1f5f9;
    color: #475569;
  }

  .dv-hotel-search-filter__section {
    display: grid;
    gap: 12px;
    min-width: 0;
    padding: 18px;
    border-bottom: 1px solid #edf2f7;
  }

  .dv-hotel-search-filter__section:last-child {
    border-bottom: 0;
  }

  .dv-hotel-search-filter__section-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .dv-hotel-search-filter__price-badge {
    display: inline-flex;
    min-height: 26px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(66, 143, 112, 0.1);
    color: var(--reserve-primary);
    font-size: 11px;
    font-weight: 900;
    padding: 5px 8px;
    white-space: nowrap;
  }

  .dv-hotel-search-filter__row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .dv-hotel-search-filter__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .dv-hotel-search-filter__chip {
    display: inline-flex;
    min-height: 32px;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    background: #ffffff;
    color: #475569;
    cursor: pointer;
    font-size: 12px;
    font-weight: 850;
    padding: 7px 11px;
    transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
  }

  .dv-hotel-search-filter__chip:hover,
  .dv-hotel-search-filter__chip.is-active {
    border-color: rgba(66, 143, 112, 0.35);
    background: rgba(66, 143, 112, 0.08);
    color: var(--reserve-primary);
  }

  .dv-hotel-search-filter__stars {
    display: flex;
    gap: 8px;
  }

  .dv-hotel-search-filter__star {
    display: inline-flex;
    width: 43px;
    height: 43px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    color: #cbd5e1;
    cursor: pointer;
    font-size: 10px;
    font-weight: 900;
  }

  .dv-hotel-search-filter__star.is-active {
    border-color: #f5a623;
    background: #fff8e7;
    color: #f5a623;
  }

  .dv-hotel-search-filter__star svg {
    width: 17px;
    height: 17px;
  }

  .dv-hotel-search-filter__helper {
    margin: -4px 0 0;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 700;
  }

  .dv-hotel-search-filter__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 14px 18px 18px;
    border-top: 1px solid #edf2f7;
    background: #fbfcfd;
  }

  .dv-hotel-search-filter__clear,
  .dv-hotel-search-filter__apply {
    display: inline-flex;
    min-height: 38px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    padding: 9px 15px;
  }

  .dv-hotel-search-filter__clear {
    background: transparent;
    color: #64748b;
  }

  .dv-hotel-search-filter__clear:hover {
    background: #f1f5f9;
    color: #334155;
  }

  .dv-hotel-search-filter__apply {
    background: var(--reserve-primary);
    color: #ffffff;
    box-shadow: 0 12px 24px -18px rgba(66, 143, 112, 0.75);
  }

  .dv-hotel-search-filter__apply:hover {
    background: #38634f;
  }

  .dv-flight-search-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr) minmax(150px, 0.8fr) minmax(150px, 0.8fr);
    gap: 12px;
    align-items: stretch;
  }

  .dv-flight-search-grid--oneway {
    grid-template-columns: minmax(0, 1fr) 42px minmax(0, 1fr) minmax(150px, 0.8fr);
  }

  .dv-flight-search-grid--multi {
    grid-template-columns: 1fr;
  }

  .dv-booking-field {
    display: flex;
    min-width: 0;
    min-height: 56px;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-booking-field--route {
    min-height: 58px;
  }

  .dv-booking-field:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-booking-label {
    color: #6b7280;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .dv-booking-field__body {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 9px;
  }

  .dv-booking-field__body > .q-icon {
    flex: 0 0 auto;
    color: #9ca3af;
    font-size: 20px;
  }

  .dv-booking-route-copy {
    display: block;
    min-width: 0;
  }

  .dv-booking-input {
    width: 100%;
    min-width: 0;
    border: 0;
    background: transparent;
    color: #1f2937;
    font: inherit;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.25;
    outline: none;
  }

  .dv-multi-route-builder {
    display: grid;
    grid-column: 1 / -1;
    gap: 12px;
  }

  .dv-multi-route-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, 0.66fr) 42px;
    min-width: 0;
    align-items: center;
    gap: 12px;
  }

  .dv-booking-field--multi-route {
    min-height: 54px;
  }

  .dv-multi-route-remove {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fee2e2;
    border-radius: var(--radius-md);
    background: #fff7f7;
    color: #b91c1c;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  }

  .dv-multi-route-remove:hover:not(:disabled) {
    border-color: #fecaca;
    background: #fef2f2;
    color: #991b1b;
  }

  .dv-multi-route-remove:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  .dv-multi-route-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 2px;
  }

  .dv-multi-route-add {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 14px;
    border: 1px solid rgba(66,143,112,0.22);
    border-radius: var(--radius-md);
    background: rgba(66,143,112,0.08);
    color: var(--reserve-primary);
    font-size: 13px;
    font-weight: 850;
    cursor: pointer;
    transition: background 0.18s ease, border-color 0.18s ease;
  }

  .dv-multi-route-add:hover:not(:disabled) {
    border-color: rgba(66,143,112,0.35);
    background: rgba(66,143,112,0.14);
  }

  .dv-multi-route-add:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  .dv-multi-route-footer .dv-search-submit {
    min-width: 168px;
  }

  .dv-booking-swap {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-self: center;
    align-items: center;
    justify-content: center;
    border: 4px solid #ffffff;
    border-radius: 999px;
    background: #f3f4f6;
    color: #4b5563;
    box-shadow: 0 12px 22px -18px rgba(15, 43, 96, 0.55);
    cursor: pointer;
  }

  .dv-search-submit.dv-search-submit--booking {
    grid-column: 1 / -1;
    justify-self: end;
    min-width: 184px;
    min-height: 52px;
    margin-top: 12px;
    padding: 12px 28px;
    border-radius: 12px;
    background: var(--reserve-primary);
    box-shadow: 0 16px 28px -20px rgba(66, 143, 112, 0.72);
    font-size: 14px;
    text-transform: none;
  }

  .dv-search-submit.dv-search-submit--booking:hover {
    background: #38634f;
  }

  .dv-advanced-filters {
    position: absolute;
    top: 74px;
    right: 24px;
    z-index: 120;
    display: grid;
    width: min(320px, calc(100vw - 32px));
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 0;
    padding: 18px;
    border: 1px solid #f3f4f6;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 24px 52px -28px rgba(15, 23, 42, 0.6);
  }

  .dv-filter-block {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 9px;
  }

  .dv-filter-block__title {
    color: #334155;
    font-size: 12px;
    font-weight: 900;
  }

  .dv-filter-chip-group {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .dv-filter-chip {
    min-height: 32px;
    padding: 6px 11px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #64748b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-filter-chip.is-active {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-filter-select {
    width: 100%;
    min-height: 38px;
    padding: 8px 10px;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: #ffffff;
    color: #334155;
    font: inherit;
    font-size: 12px;
    font-weight: 850;
  }

  .dv-featured-flights {
    margin-top: 42px;
  }

  .dv-featured-flights__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 22px;
  }

  .dv-featured-flights__eyebrow {
    display: inline-flex;
    margin-bottom: 4px;
    color: #64748b;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .dv-featured-flights__header h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
    font-weight: 900;
    line-height: 1.15;
  }

  .dv-featured-flights__view-all {
    display: inline-flex;
    min-height: 34px;
    align-items: center;
    padding: 7px 12px;
    border-radius: var(--radius-md);
    background: #eef3ff;
    color: var(--reserve-secondary);
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-featured-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }

  .dv-featured-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid #f3f4f6;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
    cursor: pointer;
    transition: transform 0.24s ease, box-shadow 0.24s ease;
  }

  .dv-featured-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 36px -22px rgba(15, 23, 42, 0.28);
  }

  .dv-featured-card__image {
    position: relative;
    height: 192px;
    overflow: hidden;
    background: #e2e8f0;
  }

  .dv-featured-card__image::after {
    display: none;
  }

  .dv-featured-card__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.32s ease;
  }

  .dv-featured-card:hover .dv-featured-card__image img {
    transform: scale(1.08);
  }

  .dv-featured-card__date {
    position: absolute;
    left: 12px;
    bottom: 12px;
    z-index: 1;
    display: inline-flex;
    max-width: calc(100% - 24px);
    min-height: 26px;
    align-items: center;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    color: #334155;
    font-size: 11px;
    font-weight: 900;
  }

  .dv-featured-card__body {
    display: grid;
    gap: 14px;
    padding: 16px;
  }

  .dv-featured-route {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    color: #6b7280;
    font-size: 13px;
    font-weight: 600;
  }

  .dv-featured-route span,
  .dv-featured-route strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-featured-route .q-icon {
    flex: 0 0 auto;
    color: #94a3b8;
  }

  .dv-featured-route strong {
    color: #1f2937;
    font-size: 18px;
    font-weight: 900;
  }

  .dv-featured-price-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
  }

  .dv-featured-price-row span {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 2px;
  }

  .dv-featured-price-row small {
    color: #94a3b8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-featured-price-row strong {
    color: var(--reserve-primary);
    font-size: 20px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-featured-price-row button {
    min-height: 32px;
    padding: 7px 10px;
    border-radius: 8px;
    background: #f3f4f6;
    color: #374151;
    cursor: pointer;
    font-size: 12px;
    font-weight: 800;
    white-space: nowrap;
  }

  .dv-featured-price-row button:hover {
    background: var(--reserve-primary);
    color: #ffffff;
  }

  .dv-search-layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    align-items: stretch;
  }

  .dv-search-section {
    position: relative;
    min-width: 0;
    overflow: hidden;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.96);
    padding: 18px;
    box-shadow: 0 20px 38px -32px rgba(15, 43, 96, 0.46);
  }

  .dv-search-section::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 2px;
    background: linear-gradient(90deg, var(--reserve-primary), var(--reserve-secondary));
  }

  .dv-search-section--route {
    grid-column: 1 / -1;
    padding: 18px 20px 20px;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  }

  .dv-search-section--passengers,
  .dv-search-section--corporate {
    background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.92) 100%);
  }

  .dv-search-section__header {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 14px;
  }

  .dv-search-section__icon {
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    background: rgba(66, 143, 112, 0.1);
    color: var(--reserve-primary);
  }

  .dv-search-section__copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 2px;
  }

  .dv-search-section__title {
    color: var(--dv-primary);
    font-size: 14px;
    font-weight: 900;
    line-height: 1.2;
  }

  .dv-search-section__subtitle {
    color: #64748b;
    font-size: 11px;
    font-weight: 750;
    line-height: 1.35;
  }

  .dv-search-context {
    display: inline-flex;
    max-width: 100%;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;
    margin-top: 12px;
    padding: 5px;
    border: 1px solid rgba(215, 225, 236, 0.9);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 16px 34px -28px rgba(15, 43, 96, 0.45);
  }

  .dv-search-context-chip {
    display: inline-flex;
    min-height: 30px;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: #475569;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-search-context-chip:first-child {
    background: #eef7f2;
    color: var(--reserve-primary);
  }

  .dv-route-overview {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(120px, 0.6fr) minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    margin-bottom: 14px;
    padding: 16px 18px;
    border: 1px solid #e2e9f2;
    border-radius: var(--radius-md);
    background:
      linear-gradient(90deg, rgba(66, 143, 112, 0.08), rgba(255,255,255,0.96) 42%, rgba(57, 87, 165, 0.08)),
      #ffffff;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
  }

  .dv-route-code-block {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 4px;
    padding: 2px 0;
  }

  .dv-route-code-block--end {
    align-items: flex-end;
    text-align: right;
  }

  .dv-route-code-label {
    color: #94a3b8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .dv-route-code {
    color: var(--dv-primary);
    font-size: 34px;
    font-weight: 950;
    line-height: 1;
  }

  .dv-route-city {
    max-width: 100%;
    overflow: hidden;
    color: #64748b;
    font-size: 11px;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-route-bridge {
    position: relative;
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: center;
    color: var(--reserve-primary);
  }

  .dv-route-bridge::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 999px;
    background: repeating-linear-gradient(90deg, #b6c7d9 0 12px, transparent 12px 18px);
  }

  .dv-route-bridge .q-icon {
    position: relative;
    z-index: 1;
    width: 38px;
    height: 38px;
    border: 1px solid #d7e1ec;
    border-radius: 999px;
    background: #ffffff;
    box-shadow: 0 12px 24px -18px rgba(15, 43, 96, 0.55);
    transform: rotate(90deg);
  }

  .dv-route-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 38px minmax(0, 1fr);
    gap: 8px;
    align-items: end;
  }

  .dv-route-swap {
    display: inline-flex;
    width: 38px;
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-bottom: 1px;
    border: 1px solid #dbe3ef;
    border-radius: var(--radius-md);
    background: #f8fafc;
    color: #64748b;
  }

  .dv-route-dates {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 12px;
  }

  .dv-passenger-quantity {
    display: flex;
    min-width: 0;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
  }

  .dv-passenger-stepper {
    display: grid;
    grid-template-columns: 34px minmax(34px, 1fr) 34px;
    align-items: center;
    gap: 8px;
  }

  .dv-passenger-stepper strong {
    color: var(--dv-primary);
    font-size: 18px;
    font-weight: 950;
    line-height: 1;
    text-align: center;
  }

  .dv-stepper-btn {
    display: inline-flex;
    width: 34px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7e1ec;
    border-radius: var(--radius-sm);
    background: #f8fafc;
    color: var(--reserve-primary);
    cursor: pointer;
    transition: border-color 0.18s ease, background 0.18s ease;
  }

  .dv-stepper-btn:hover:not(:disabled) {
    border-color: var(--reserve-primary);
    background: #eef7f2;
  }

  .dv-stepper-btn:disabled {
    cursor: not-allowed;
    color: #94a3b8;
    background: #f1f5f9;
  }

  .dv-passenger-quantity__hint {
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
    text-align: center;
  }

  .dv-search-card.dv-search-card--structured .dv-search-field {
    gap: 4px;
    padding: 10px 12px;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  }

  .dv-search-card.dv-search-card--structured .dv-search-field:focus-within {
    border-color: var(--reserve-primary);
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-search-card.dv-search-card--structured .dv-search-label {
    color: #64748b;
    font-size: 10px;
    line-height: 1.2;
  }

  .dv-search-card.dv-search-card--structured .dv-search-control {
    min-height: 26px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
    font-size: 13px;
  }

  .dv-search-card.dv-search-card--structured .dv-search-control:hover,
  .dv-search-card.dv-search-card--structured .dv-search-control:focus {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .dv-search-card.dv-search-card--structured select.dv-search-control {
    cursor: pointer;
  }

  .dv-corporate-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .dv-corporate-strip {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }

  .dv-corporate-pill {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
    padding: 10px 11px;
    border: 1px solid #e4ebf3;
    border-radius: var(--radius-md);
    background: #ffffff;
    color: #334155;
    font-size: 12px;
    font-weight: 850;
    box-shadow: 0 10px 20px -18px rgba(15, 43, 96, 0.38);
  }

  .dv-corporate-pill .q-icon {
    color: var(--reserve-secondary);
  }

  .dv-corporate-pill span:last-child {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-passenger-panel {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 10px;
  }

  .dv-passenger-topline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .dv-passenger-count {
    display: inline-flex;
    min-height: 26px;
    align-items: center;
    gap: 6px;
    padding: 4px 9px;
    border-radius: 999px;
    background: #eef7f2;
    color: var(--reserve-primary);
    font-size: 11px;
    font-weight: 900;
    white-space: nowrap;
  }

  .dv-passenger-chips {
    min-height: 48px;
    padding: 9px;
    border-color: #dae3ee;
    border-style: dashed;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  }

  .dv-passenger-autocomplete {
    position: relative;
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap {
    position: relative;
    border: 1px solid #dae3ee;
    border-radius: var(--radius-md);
    background: #ffffff;
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap:focus-within {
    border-color: var(--reserve-primary);
    box-shadow: 0 0 0 3px rgba(66, 143, 112, 0.12);
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input-wrap .q-icon {
    left: 12px;
    color: var(--reserve-primary);
  }

  .dv-search-card.dv-search-card--structured .dv-passenger-input {
    min-height: 42px;
    padding: 0 12px 0 38px;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .dv-passenger-suggestions {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    z-index: 50;
  }

  .dv-passenger-option {
    width: 100%;
  }

  .dv-search-card.dv-search-card--structured .dv-search-actions {
    width: min(100%, 720px);
    margin: 16px auto 0;
    padding: 10px;
    border: 1px solid var(--dv-line);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 18px 34px -28px rgba(15, 43, 96, 0.46);
  }

  .dv-search-card.dv-search-card--structured .dv-search-helper {
    display: inline-flex;
    min-height: 34px;
    min-width: 0;
    align-items: center;
    padding: 7px 12px;
    border-radius: var(--radius-md);
    background: #f8fafc;
    color: #475569;
    font-size: 11px;
    font-weight: 850;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-search-card.dv-search-card--structured .dv-search-submit {
    min-width: 228px;
    background: linear-gradient(90deg, var(--reserve-secondary), var(--dv-primary));
    box-shadow: 0 14px 26px -18px rgba(15, 43, 96, 0.72);
  }

  .dv-main-wrapper {
    gap: 16px;
  }

  .dv-header {
    padding: 0;
    margin-bottom: 12px;
  }

  .dv-tabs {
    gap: 6px;
    padding: 5px;
    border-color: var(--dv-line);
    border-radius: var(--radius-md);
    background: #edf2f7;
    box-shadow: none;
  }

  .dv-tab {
    min-height: 42px;
    border-radius: var(--radius-sm);
    color: #526173;
  }

  .dv-tab:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.72);
  }

  .dv-tab[aria-selected="true"] {
    transform: none;
    box-shadow: var(--shadow-sm);
  }

  .dv-toolbar {
    margin-bottom: 14px;
    padding: 10px;
    border: 1px solid var(--dv-line);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, 0.86);
    box-shadow: var(--shadow-sm);
  }

  .dv-icon-btn,
  .dv-clear-btn,
  .dv-action-toggle {
    border-color: var(--dv-line);
    box-shadow: none;
  }

  .dv-icon-btn:hover,
  .dv-filter-btn:hover,
  .dv-clear-btn:hover,
  .dv-action-toggle:hover,
  .dv-search-submit:hover,
  .dv-tarifar-btn:hover,
  .dv-summary-final-btn:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .dv-calendar-shop {
    margin-bottom: 12px;
  }

  .dv-calendar-shop__list {
    gap: 8px;
    padding: 10px 2px 12px;
  }

  .dv-calendar-shop__item {
    min-height: 78px;
    box-shadow: var(--shadow-sm);
  }

  .dv-calendar-shop__item:hover {
    border-color: #cbd5e1;
    box-shadow: var(--shadow-md);
  }

  .dv-calendar-shop__item--active {
    box-shadow: 0 0 0 2px rgba(66, 143, 112, 0.14), var(--shadow-sm);
  }

  .dv-selection-box {
    gap: 10px;
    padding: 14px;
  }

  .dv-selection-card {
    border-radius: var(--radius-md);
    background: #ffffff;
  }

  .dv-selection-card--empty {
    border-radius: var(--radius-md);
    background: #f8fafc;
  }

  .dv-tarifar-btn,
  .dv-search-submit,
  .dv-summary-final-btn {
    box-shadow: none;
  }

  .dv-summary-screen {
    padding-top: 28px;
  }

  .dv-summary-card__header,
  .dv-summary-card__body {
    padding: 14px;
  }

  .dv-policy-card,
  .dv-context-item,
  .dv-inclusion-item,
  .dv-addon-option {
    background: var(--dv-surface-soft);
  }

  .dv-addon-option:hover,
  .dv-seat-button:hover {
    border-color: #cbd5e1;
    background: #ffffff;
  }

  .dv-summary-screen {
    min-height: 100vh;
    padding: 32px 16px 72px;
    background: #f8fafc;
  }

  .dv-summary-shell {
    max-width: 1152px;
  }

  .dv-summary-hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    overflow: hidden;
    margin-bottom: 16px;
    padding: 24px 30px;
    border-radius: 18px;
    background: #38634f;
    color: #ffffff;
    box-shadow: 0 18px 40px -30px rgba(15, 23, 42, 0.72);
  }

  .dv-summary-hero::after {
    content: "";
    position: absolute;
    top: -72px;
    right: -54px;
    width: 230px;
    height: 230px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    filter: blur(28px);
  }

  .dv-summary-heading {
    position: relative;
    z-index: 1;
  }

  .dv-summary-title {
    margin: 0 0 6px;
    color: #ffffff;
    font-size: 25px;
    font-weight: 900;
    line-height: 1.15;
  }

  .dv-summary-subtitle {
    margin: 0;
    color: rgba(255,255,255,0.78);
    font-size: 13px;
    font-weight: 650;
  }

  .dv-summary-back-button {
    position: relative;
    z-index: 1;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 15px;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px;
    background: rgba(255,255,255,0.12);
    color: #ffffff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    white-space: nowrap;
    box-shadow: inset 0 1px 8px rgba(255,255,255,0.04);
  }

  .dv-summary-back-button:hover {
    background: rgba(255,255,255,0.18);
  }

  .dv-summary-hero__meta {
    position: relative;
    z-index: 1;
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    gap: 9px;
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,0.13);
    border-radius: 10px;
    background: rgba(255,255,255,0.1);
    color: #ffffff;
    box-shadow: inset 0 1px 8px rgba(255,255,255,0.04);
  }

  .dv-summary-hero__meta .q-icon {
    color: #67a353;
    font-size: 20px;
  }

  .dv-summary-hero__meta strong {
    font-size: 13px;
    font-weight: 800;
  }

  .dv-summary-actions {
    justify-content: flex-end;
    margin: 0 0 16px;
  }

  .dv-summary-layout {
    grid-template-columns: minmax(0, 8fr) minmax(320px, 4fr);
    gap: 28px;
  }

  .dv-summary-main,
  .dv-summary-side {
    gap: 24px;
  }

  .dv-summary-side {
    position: sticky;
    top: 24px;
    z-index: 20;
    width: 100%;
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    align-self: start;
  }

  .dv-summary-card {
    overflow: visible;
    border: 1px solid #f3f4f6;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
  }

  .dv-summary-card--totals {
    width: 100%;
    max-height: calc(100vh - 156px);
    overflow-y: auto;
    box-shadow: 0 18px 42px -28px rgba(15, 23, 42, 0.42);
  }

  .dv-summary-card__header {
    align-items: flex-start;
    padding: 17px 24px;
    border-bottom: 1px solid #f3f4f6;
    border-radius: 18px 18px 0 0;
    background: #f8fafc;
  }

  .dv-summary-card__title {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #1f2937;
    font-size: 17px;
    font-weight: 900;
    line-height: 1.2;
  }

  .dv-summary-card__title .q-icon {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    color: #64748b;
    font-size: 20px;
  }

  .dv-summary-card__subtitle {
    margin: 6px 0 0;
    color: #64748b;
    font-size: 12px;
    font-weight: 650;
    line-height: 1.45;
  }

  .dv-summary-card__body {
    padding: 24px;
  }

  .dv-summary-card__body--flush {
    padding: 0;
  }

  .dv-summary-policy-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dv-summary-flat-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .dv-summary-policy-heading,
  .dv-summary-flat-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 2px;
    color: var(--dv-primary);
    font-size: 14px;
    font-weight: 950;
  }

  .dv-summary-policy-heading .q-icon,
  .dv-summary-flat-heading .q-icon {
    color: #64748b;
    font-size: 18px;
  }

  .dv-summary-flat-body {
    display: grid;
    gap: 14px;
  }

  .dv-summary-policy-section .dv-policy-list {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .dv-auth-policy-card {
    position: relative;
    overflow: hidden;
    border: 1px solid #eef2f7;
    border-left: 4px solid #cbd5e1;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .dv-auth-policy-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px -24px rgba(15, 23, 42, 0.46);
  }

  .dv-auth-policy-card--danger {
    border-color: rgba(239, 68, 68, 0.2);
    border-left-color: #ef4444;
    box-shadow: 0 1px 3px rgba(239, 68, 68, 0.06);
  }

  .dv-auth-policy-card--success {
    border-color: rgba(103, 163, 83, 0.22);
    border-left-color: #67a353;
    box-shadow: 0 1px 3px rgba(103, 163, 83, 0.06);
  }

  .dv-auth-policy-summary {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 14px 14px 16px;
    background: #ffffff;
    color: inherit;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease;
  }

  .dv-auth-policy-summary:hover {
    background: #f8fafc;
  }

  .dv-auth-policy-main {
    display: flex;
    min-width: 0;
    flex: 1;
    align-items: center;
    gap: 12px;
  }

  .dv-auth-policy-icon {
    display: inline-flex;
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #f8fafc;
    color: #94a3b8;
    transition: transform 0.22s ease;
  }

  .dv-auth-policy-card:hover .dv-auth-policy-icon {
    transform: scale(1.05) rotate(-4deg);
  }

  .dv-auth-policy-card--danger .dv-auth-policy-icon {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-icon {
    background: rgba(103, 163, 83, 0.1);
    color: #67a353;
  }

  .dv-auth-policy-icon .q-icon {
    font-size: 20px;
  }

  .dv-auth-policy-copy {
    display: flex;
    min-width: 0;
    flex: 1;
    flex-direction: column;
    gap: 5px;
  }

  .dv-auth-policy-title {
    overflow: hidden;
    color: #1f2937;
    font-size: 14px;
    font-weight: 900;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-auth-policy-meta {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
  }

  .dv-auth-policy-status {
    display: inline-flex;
    flex: 0 0 auto;
    min-height: 20px;
    align-items: center;
    padding: 3px 7px;
    border-radius: 4px;
    color: #ffffff;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.06em;
    line-height: 1;
    text-transform: uppercase;
  }

  .dv-auth-policy-card--danger .dv-auth-policy-status {
    background: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-status {
    background: #67a353;
  }

  .dv-auth-policy-insight {
    min-width: 0;
    overflow: hidden;
    margin: 0;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 750;
    line-height: 1.35;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-auth-policy-chevron {
    display: inline-flex;
    width: 30px;
    height: 30px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: #f8fafc;
    color: #94a3b8;
    transition: transform 0.22s ease, background 0.22s ease, color 0.22s ease;
  }

  .dv-auth-policy-card--danger .dv-auth-policy-chevron.is-expanded {
    background: rgba(239, 68, 68, 0.12);
    color: #ef4444;
  }

  .dv-auth-policy-card--success .dv-auth-policy-chevron.is-expanded {
    background: rgba(103, 163, 83, 0.12);
    color: #67a353;
  }

  .dv-auth-policy-chevron.is-expanded {
    transform: rotate(180deg);
  }

  .dv-auth-policy-detail {
    padding: 0 20px 16px;
  }

  .dv-auth-policy-divider {
    height: 1px;
    margin-bottom: 14px;
    background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
  }

  .dv-auth-policy-aria-insight {
    position: relative;
    display: flex;
    min-width: 0;
    align-items: flex-start;
    gap: 6px;
    margin: 4px 0 12px;
    padding: 6px 10px;
    border: 1px solid rgba(196, 181, 253, 0.6);
    border-radius: 8px;
    background: rgba(245, 243, 255, 0.8);
    color: #7c3aed;
    box-shadow: 0 8px 24px -18px rgba(139, 92, 246, 0.4);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .dv-auth-policy-aria-insight:hover {
    transform: translateY(-1px);
    border-color: rgba(167, 139, 250, 0.72);
    box-shadow: 0 18px 36px -22px rgba(139, 92, 246, 0.35);
  }

  .dv-auth-policy-aria-insight::after {
    position: absolute;
    inset: 1px;
    border-radius: 7px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.55), transparent 58%);
    content: "";
    pointer-events: none;
  }

  .dv-auth-policy-aria-insight__icon {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    color: #8b5cf6;
    transition: transform 0.2s ease;
    z-index: 1;
  }

  .dv-auth-policy-aria-insight:hover .dv-auth-policy-aria-insight__icon {
    transform: scale(1.1) rotate(-6deg);
  }

  .dv-auth-policy-aria-insight__icon .q-icon {
    font-size: 13px;
  }

  .dv-auth-policy-aria-insight__text {
    min-width: 0;
    margin: 0;
    color: #7c3aed;
    font-size: 10px;
    font-weight: 650;
    line-height: 1.35;
    z-index: 1;
  }

  .dv-auth-policy-aria-insight__label {
    font-weight: 950;
  }

  .dv-auth-policy-fare-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  .dv-auth-policy-kicker {
    display: block;
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dv-auth-policy-value {
    color: #ef4444;
    font-size: 20px;
    font-weight: 950;
    letter-spacing: -0.01em;
    line-height: 1;
  }

  .dv-auth-policy-card--success .dv-auth-policy-value {
    color: #67a353;
  }

  .dv-auth-policy-diff {
    color: #ef4444;
    font-size: 13px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-auth-policy-bar {
    display: flex;
    height: 10px;
    overflow: hidden;
    border-radius: 999px;
    background: #f1f5f9;
    box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.08);
  }

  .dv-auth-policy-bar__allowed {
    display: block;
    min-width: 6px;
    background: #67a353;
  }

  .dv-auth-policy-bar__exceeded {
    position: relative;
    display: block;
    min-width: 0;
    background: #ef4444;
  }

  .dv-auth-policy-bar__exceeded::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.22;
    background: repeating-linear-gradient(45deg, transparent 0, transparent 5px, #ffffff 5px, #ffffff 10px);
  }

  .dv-auth-policy-scale {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 8px;
    color: #67a353;
    font-size: 10px;
    font-weight: 900;
  }

  .dv-auth-policy-scale strong:last-child {
    color: #ef4444;
  }

  .dv-auth-policy-metrics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-top: 12px;
  }

  .dv-auth-policy-metrics--averages {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .dv-auth-policy-average-title {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 16px 0 10px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .dv-auth-policy-average-title .q-icon {
    color: #3b82f6;
    font-size: 15px;
  }

  .dv-auth-policy-metric {
    padding: 10px;
    border: 1px solid #f1f5f9;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 8px 20px -18px rgba(100, 116, 139, 0.42);
    text-align: center;
  }

  .dv-auth-policy-metric span {
    display: block;
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 9px;
    font-weight: 950;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .dv-auth-policy-metric strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 950;
  }

  .dv-auth-policy-metric small {
    display: block;
    margin-top: 4px;
    color: #64748b;
    font-size: 9px;
    font-weight: 850;
    line-height: 1.25;
  }

  @media (max-width: 768px) {
    .dv-auth-policy-metrics--averages {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .dv-auth-policy-timeline {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 14px;
    padding: 2px 2px 0;
  }

  .dv-auth-policy-timepoint {
    display: grid;
    justify-items: center;
    gap: 8px;
    color: #64748b;
    font-size: 10px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
  }

  .dv-auth-policy-timepoint .q-icon {
    width: 34px;
    height: 34px;
    border: 1px solid rgba(103, 163, 83, 0.3);
    border-radius: 999px;
    background: rgba(103, 163, 83, 0.1);
    color: #67a353;
    font-size: 18px;
  }

  .dv-auth-policy-timepoint--alert .q-icon {
    border-color: rgba(239, 68, 68, 0.3);
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }

  .dv-auth-policy-timepoint strong {
    display: block;
    color: inherit;
    font-size: 12px;
  }

  .dv-auth-policy-track {
    display: grid;
    gap: 6px;
    color: #67a353;
    font-size: 10px;
    font-weight: 950;
    letter-spacing: 0.04em;
    text-align: center;
    text-transform: uppercase;
  }

  .dv-auth-policy-track__line {
    display: block;
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(103, 163, 83, 0.18);
  }

  .dv-auth-policy-track__fill {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: #67a353;
  }

  .dv-auth-policy-track.is-danger {
    color: #ef4444;
  }

  .dv-auth-policy-track.is-danger .dv-auth-policy-track__line {
    background: rgba(239, 68, 68, 0.18);
  }

  .dv-auth-policy-track.is-danger .dv-auth-policy-track__fill {
    background: #ef4444;
  }

  .dv-confirm-leg {
    padding: 24px;
    border-bottom: 1px solid #f3f4f6;
    background: #ffffff;
  }

  .dv-confirm-leg--return {
    background: rgba(248,250,252,0.68);
  }

  .dv-confirm-leg__heading {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    color: #428f70;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-confirm-leg--return .dv-confirm-leg__heading {
    color: #3957a5;
  }

  .dv-confirm-leg__heading span:last-child {
    color: inherit;
    opacity: 0.82;
  }

  .dv-confirm-leg__content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 170px;
    gap: 24px;
    align-items: center;
  }

  .dv-confirm-route {
    display: grid;
    grid-template-columns: 92px minmax(120px, 1fr) 92px;
    gap: 16px;
    align-items: center;
  }

  .dv-confirm-airport {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    text-align: center;
  }

  .dv-confirm-airport strong {
    color: #1f2937;
    font-size: 25px;
    font-weight: 900;
    line-height: 1;
  }

  .dv-confirm-airport span {
    color: #64748b;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-airport small {
    max-width: 120px;
    overflow: hidden;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 650;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-confirm-route-line {
    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #94a3b8;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .dv-confirm-route-line div {
    position: relative;
    width: 100%;
    height: 2px;
    background: #e5e7eb;
  }

  .dv-confirm-route-line div .q-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0 8px;
    background: #ffffff;
    color: rgba(66,143,112,0.58);
    transform: translate(-50%, -50%);
  }

  .dv-confirm-leg--return .dv-confirm-route-line div .q-icon {
    color: rgba(57,87,165,0.58);
    transform: translate(-50%, -50%) rotate(180deg);
  }

  .dv-confirm-flight-meta {
    display: grid;
    justify-items: center;
    gap: 6px;
    padding: 15px;
    border: 1px solid #f3f4f6;
    border-radius: 14px;
    background: #f8fafc;
    text-align: center;
  }

  .dv-confirm-flight-meta span {
    color: #64748b;
    font-size: 11px;
    font-weight: 750;
  }

  .dv-confirm-flight-meta strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-flight-meta em {
    padding: 4px 8px;
    border-radius: 7px;
    background: #e5e7eb;
    color: #374151;
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
  }

  .dv-confirm-inclusions {
    padding: 24px;
    border-top: 1px solid #f3f4f6;
    background: #ffffff;
  }

  .dv-confirm-inclusions h3,
  .dv-confirm-subheading {
    margin: 0 0 14px;
    padding-bottom: 9px;
    border-bottom: 1px solid #f3f4f6;
    color: #428f70;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-inclusion-grid {
    gap: 10px 16px;
  }

  .dv-inclusion-item {
    padding: 0;
    border: 0;
    background: transparent;
    color: #374151;
    font-size: 13px;
    font-weight: 700;
  }

  .dv-inclusion-label {
    display: inline-flex;
    min-width: 0;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
  }

  .dv-inclusion-chip {
    display: inline-flex;
    min-height: 20px;
    align-items: center;
    padding: 3px 7px;
    border: 1px solid rgba(66,143,112,0.2);
    border-radius: 999px;
    background: rgba(66,143,112,0.08);
    color: #428f70;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1;
    text-transform: uppercase;
  }

  .dv-inclusion-item.is-not-included span:last-child {
    color: #81868b;
    text-decoration: line-through;
  }

  .dv-inclusion-item.is-not-included .dv-inclusion-chip {
    display: none;
  }

  .dv-confirm-baggage-box {
    display: grid;
    gap: 12px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid rgba(66,143,112,0.3);
    border-radius: 14px;
    background: rgba(66,143,112,0.05);
  }

  .dv-confirm-seat-box {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
    padding: 20px;
    border: 1px solid rgba(66,143,112,0.24);
    border-radius: 14px;
    background: linear-gradient(135deg, #ffffff 0%, #f7fbf9 100%);
    box-shadow: 0 12px 28px -24px rgba(56, 99, 79, 0.55);
    transition: border-color 0.18s ease, box-shadow 0.18s ease;
  }

  .dv-confirm-seat-box:hover {
    border-color: #428f70;
    box-shadow: 0 16px 32px -24px rgba(56, 99, 79, 0.72);
  }

  .dv-confirm-seat-top {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .dv-confirm-seat-top .dv-confirm-addon-heading {
    flex: 1 1 auto;
    min-width: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }

  .dv-confirm-seat-price {
    display: inline-flex;
    min-height: 30px;
    flex: 0 0 auto;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgba(66,143,112,0.18);
    background: rgba(66,143,112,0.08);
    color: #38634f;
    font-size: 12px;
    font-weight: 850;
    white-space: nowrap;
  }

  .dv-confirm-seat-actions {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  .dv-confirm-seat-action {
    display: inline-flex;
    flex: 0 0 auto;
    min-height: 38px;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 8px 14px;
    border: 1px solid #428f70;
    border-radius: 999px;
    background: #428f70;
    color: #ffffff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 900;
    transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
    white-space: nowrap;
  }

  .dv-confirm-seat-action:hover {
    border-color: #38634f;
    color: #ffffff;
    background: #38634f;
    box-shadow: 0 12px 24px -18px rgba(56, 99, 79, 0.85);
  }

  .dv-confirm-seat-action.is-selected {
    border-color: #38634f;
    background: #ffffff;
    color: #38634f;
    box-shadow: inset 0 0 0 1px rgba(56, 99, 79, 0.14), 0 10px 22px -20px rgba(56, 99, 79, 0.72);
  }

  .dv-confirm-seat-action .q-icon {
    font-size: 18px;
    line-height: 1;
  }

  .dv-confirm-seat-action::before {
    content: "event_seat";
    font-family: "Material Icons";
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }

  .dv-confirm-seat-action.is-selected::before {
    content: "check_circle";
  }

  .dv-confirm-seat-action.is-selected:hover {
    background: #38634f;
    color: #ffffff;
  }

  .dv-confirm-addon-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(66,143,112,0.18);
  }

  .dv-confirm-addon-heading > .q-icon,
  .dv-confirm-addon-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    margin-top: 0;
    border: 1px solid rgba(66,143,112,0.28);
    border-radius: 999px;
    background: #ffffff;
    color: #428f70;
    font-size: 21px;
    line-height: 1;
  }

  .dv-confirm-addon-icon svg {
    width: 22px;
    height: 22px;
    stroke-width: 2.2;
  }

  .dv-confirm-addon-heading strong {
    display: block;
    color: #1f2937;
    font-size: 16px;
    font-weight: 900;
  }

  .dv-confirm-addon-heading div > span {
    display: block;
    margin-top: 3px;
    color: #64748b;
    font-size: 12px;
    font-weight: 650;
  }

  .dv-confirm-baggage-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 15px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .dv-confirm-baggage-option strong,
  .dv-confirm-baggage-option span,
  .dv-confirm-baggage-option em {
    display: block;
  }

  .dv-confirm-baggage-option strong {
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-baggage-option span {
    margin-top: 3px;
    color: #64748b;
    font-size: 11px;
    font-weight: 650;
  }

  .dv-confirm-baggage-option em {
    width: max-content;
    margin-top: 7px;
    padding: 4px 7px;
    border-radius: 6px;
    background: rgba(66,143,112,0.1);
    color: #428f70;
    font-size: 11px;
    font-style: normal;
    font-weight: 850;
  }

  .dv-confirm-stepper {
    display: inline-flex;
    flex: 0 0 auto;
    overflow: hidden;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    background: #ffffff;
  }

  .dv-confirm-stepper button,
  .dv-confirm-stepper span {
    display: inline-flex;
    min-width: 36px;
    min-height: 32px;
    align-items: center;
    justify-content: center;
  }

  .dv-confirm-stepper button {
    color: #475569;
    cursor: pointer;
  }

  .dv-confirm-stepper button:hover {
    background: #f3f4f6;
  }

  .dv-confirm-stepper span {
    border-inline: 1px solid #d1d5db;
    color: #1f2937;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px 22px;
    margin-bottom: 26px;
  }

  .dv-confirm-field {
    position: relative;
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 7px;
  }

  .dv-confirm-field--wide {
    grid-column: 1 / -1;
  }

  .dv-confirm-label {
    color: #374151;
    font-size: 11px;
    font-weight: 900;
  }

  .dv-confirm-autocomplete,
  .dv-confirm-passenger-picker {
    position: relative;
    display: block;
  }

  .dv-confirm-input {
    width: 100%;
    min-height: 42px;
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: #ffffff;
    color: #1f2937;
    font: inherit;
    font-size: 13px;
    font-weight: 750;
    outline: none;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  }

  .dv-confirm-input:focus {
    border-color: #428f70;
    box-shadow: 0 0 0 3px rgba(66,143,112,0.14);
  }

  .dv-confirm-options {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 5px);
    z-index: 70;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 18px 38px -28px rgba(15, 23, 42, 0.58);
  }

  .dv-confirm-option {
    display: flex;
    width: 100%;
    min-height: 36px;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: #ffffff;
    color: #374151;
    cursor: pointer;
    font-size: 13px;
    font-weight: 700;
    text-align: left;
  }

  .dv-confirm-option:hover {
    background: rgba(66,143,112,0.1);
  }

  .dv-confirm-passenger-picker {
    width: min(100%, 420px);
    margin-bottom: 14px;
  }

  .dv-confirm-passenger-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 10px;
  }

  .dv-confirm-passenger-card {
    display: flex;
    min-width: 0;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px 10px;
    flex-wrap: wrap;
    padding: 10px 10px 11px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 8px 18px -18px rgba(15, 23, 42, 0.36);
  }

  .dv-confirm-passenger-identity {
    display: inline-flex;
    min-width: 0;
    flex: 1 1 calc(100% - 36px);
    order: 0;
    align-items: center;
    gap: 8px;
    color: #374151;
    font-size: 13px;
    font-weight: 900;
  }

  .dv-confirm-passenger-identity > .q-icon {
    color: #428f70;
  }

  .dv-confirm-passenger-identity strong {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dv-confirm-passenger-share {
    display: inline-flex;
    flex: 1 1 100%;
    order: 2;
    align-items: center;
    justify-content: flex-start;
    gap: 7px;
    padding-left: 28px;
    color: #64748b;
    cursor: pointer;
    font-size: 11px;
    font-weight: 800;
    line-height: 1.25;
    text-align: left;
  }

  .dv-confirm-passenger-share input {
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    accent-color: #428f70;
  }

  .dv-confirm-passenger-remove {
    display: inline-flex;
    width: 26px;
    height: 26px;
    flex: 0 0 auto;
    order: 1;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #81868b;
    cursor: pointer;
  }

  .dv-confirm-passenger-remove:hover {
    background: rgba(186,46,15,0.1);
    color: #ba2e0f;
  }

  .dv-confirm-passenger-chip {
    display: inline-flex;
    min-height: 34px;
    align-items: center;
    gap: 7px;
    padding: 6px 6px 6px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    background: #f3f4f6;
    color: #374151;
    font-size: 13px;
    font-weight: 800;
  }

  .dv-confirm-passenger-chip > .q-icon {
    color: #428f70;
  }

  .dv-confirm-passenger-chip--pending {
    padding-right: 12px;
    border: 1.5px dashed #d4a72c;
    background: #fffaf0;
    color: #7a5b10;
  }

  .dv-confirm-passenger-chip--pending > .q-icon {
    color: #d49b00;
  }

  .dv-confirm-passenger-chip button {
    display: inline-flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #81868b;
    cursor: pointer;
  }

  .dv-confirm-passenger-chip button:hover {
    background: rgba(186,46,15,0.1);
    color: #ba2e0f;
  }

  .dv-summary-card--totals .dv-summary-card__header {
    background: #ffffff;
  }

  .dv-totals-list {
    gap: 10px;
  }

  .dv-total-row {
    font-size: 13px;
    font-weight: 750;
  }

  .dv-total-row--muted {
    padding-top: 10px;
    border-top: 1px solid #f3f4f6;
    color: #64748b;
  }

  .dv-total-row--grand {
    margin-top: 8px;
    padding-top: 14px;
    border-top: 2px solid #1f2937;
    color: #1f2937;
  }

  .dv-total-row--grand strong {
    color: #428f70;
    font-size: 25px;
    font-weight: 950;
  }

  .dv-summary-final-btn {
    min-height: 54px;
    margin-top: 20px;
    border-radius: 14px;
    background: #428f70;
    font-size: 16px;
    font-weight: 900;
    box-shadow: 0 14px 26px -20px rgba(66,143,112,0.8);
  }

  .dv-summary-final-btn:hover {
    background: #38634f;
  }

  .dv-confirm-privacy {
    margin: 14px 0 0;
    color: #64748b;
    font-size: 11px;
    font-weight: 650;
    line-height: 1.45;
    text-align: center;
  }

  @media (max-width: 1023px) {
    .dv-summary-layout {
      grid-template-columns: 1fr;
      padding-bottom: 380px;
    }

    .dv-summary-side {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      top: auto;
      z-index: 80;
      order: initial;
    }

    .dv-summary-card--totals {
      max-height: min(46vh, 430px);
      overflow: auto;
      box-shadow: 0 22px 54px -24px rgba(15, 23, 42, 0.56);
    }

    .dv-summary-hero {
      align-items: flex-start;
      flex-direction: column;
    }

    .dv-confirm-leg__content {
      grid-template-columns: 1fr;
    }

    .dv-featured-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .dv-flight-search-grid {
      grid-template-columns: 1fr;
    }

    .dv-flight-search-grid--oneway,
    .dv-flight-search-grid--multi,
    .dv-multi-route-row {
      grid-template-columns: 1fr;
    }

    .dv-multi-route-remove {
      width: 100%;
    }

    .dv-multi-route-footer {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-booking-swap {
      justify-self: center;
      transform: rotate(90deg);
    }

    .dv-search-submit.dv-search-submit--booking {
      width: 100%;
      min-height: 54px;
    }

    .dv-advanced-filters {
      grid-template-columns: 1fr;
    }

    .dv-selection-panel:not(.dv-selection-panel--placeholder) {
      position: fixed;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 40;
      width: auto;
      max-height: min(62vh, 520px);
      overflow-y: auto;
    }

    .dv-content-area {
      padding-bottom: 96px;
    }

    .dv-selection-box {
      box-shadow: 0 22px 44px -24px rgba(15, 23, 42, 0.55);
    }
  }

  @media (max-width: 768px) {
    .dv-summary-screen {
      padding: 20px 12px 48px;
    }

    .dv-summary-hero {
      padding: 20px;
    }

    .dv-summary-actions {
      justify-content: stretch;
    }

    .dv-summary-actions .dv-action-toggle {
      flex: 1;
    }

    .dv-summary-card__header,
    .dv-summary-card__body,
    .dv-confirm-leg,
    .dv-confirm-inclusions {
      padding: 16px;
    }

    .dv-policy-list,
    .dv-confirm-form-grid,
    .dv-inclusion-grid {
      grid-template-columns: 1fr;
    }

    .dv-confirm-field--wide {
      grid-column: auto;
    }

    .dv-confirm-route {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .dv-confirm-route-line {
      min-height: 46px;
    }

    .dv-confirm-baggage-option {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-confirm-stepper {
      align-self: flex-start;
    }

    .dv-confirm-seat-box {
      align-items: stretch;
      flex-direction: column;
      gap: 0;
    }

    .dv-confirm-seat-top {
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;
    }

    .dv-confirm-seat-top .dv-confirm-addon-heading {
      flex: 1 1 190px;
    }

    .dv-confirm-seat-actions {
      flex: 0 1 auto;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .dv-confirm-seat-action {
      width: auto;
    }

    .dv-search-screen.dv-search-screen--reserve {
      padding: 0 0 44px;
    }

    .dv-search-hero {
      padding: 24px 12px 112px;
    }

    .dv-search-hero-copy h1 {
      font-size: 28px;
    }

    .dv-search-hero-copy p {
      font-size: 15px;
    }

    .dv-search-screen--reserve .dv-search-shell {
      margin-top: -86px;
      padding: 0 12px;
    }

    .dv-service-tabs {
      justify-content: flex-start;
      margin-bottom: 28px;
    }

    .dv-service-tab-list {
      width: 100%;
      gap: 8px;
    }

    .dv-service-tab {
      flex: 1 0 auto;
      justify-content: center;
      padding-inline: 14px;
    }

    .dv-booking-card {
      padding: 14px;
    }

    .dv-booking-top {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-trip-segmented {
      overflow-x: auto;
      scrollbar-width: none;
    }

    .dv-trip-segmented::-webkit-scrollbar {
      display: none;
    }

    .dv-booking-tools {
      justify-content: space-between;
    }

    .dv-passenger-control {
      flex: 1 1 auto;
      min-width: 0;
    }

    .dv-passenger-selector {
      flex: 1 1 auto;
      min-width: 0;
    }

    .dv-passenger-toolbar {
      flex: 1 1 auto;
      justify-content: space-between;
      width: 100%;
    }

    .dv-passenger-popover {
      left: 0;
      right: auto;
      width: min(320px, calc(100vw - 32px));
    }

    .dv-advanced-filters {
      top: 116px;
      left: 14px;
      right: 14px;
      width: auto;
    }

    .dv-featured-flights {
      margin-top: 28px;
    }

    .dv-featured-flights__header {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }

    .dv-featured-grid {
      grid-template-columns: 1fr;
    }

    .dv-featured-card__image {
      height: 176px;
    }

    .dv-booking-route-copy {
      grid-template-columns: 1fr;
      gap: 4px;
    }

    .dv-search-screen {
      padding-top: 24px;
    }

    .dv-search-title {
      font-size: 30px;
    }

    .dv-search-card {
      padding: 16px;
    }

    .dv-search-card.dv-search-card--structured {
      padding: 0;
    }

    .dv-trip-modebar {
      align-items: stretch;
      flex-direction: column;
    }

    .dv-trip-modebar__item,
    .dv-trip-modebar__summary {
      width: 100%;
      justify-content: center;
    }

    .dv-itinerary-row {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .dv-itinerary-field {
      min-height: 96px;
    }

    .dv-itinerary-code {
      font-size: 31px;
    }

    .dv-itinerary-field__body {
      grid-template-columns: auto minmax(0, 1fr);
    }

    .dv-itinerary-swap {
      justify-self: center;
      transform: rotate(90deg);
    }

    .dv-itinerary-swap:hover {
      transform: rotate(90deg) translateX(-1px);
    }

    .dv-trip-control-row {
      grid-template-columns: 1fr;
    }

    .dv-search-submit.dv-search-submit--travel {
      width: 100%;
      min-height: 54px;
    }

    .dv-search-layout {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 12px;
    }

    .dv-search-section {
      padding: 14px;
    }

    .dv-route-card,
    .dv-route-dates {
      grid-template-columns: 1fr;
    }

    .dv-route-overview {
      grid-template-columns: minmax(0, 1fr) 54px minmax(0, 1fr);
      gap: 8px;
      padding: 12px;
    }

    .dv-route-code {
      font-size: 28px;
    }

    .dv-route-bridge {
      justify-content: center;
      min-height: 24px;
    }

    .dv-route-bridge::before {
      left: 0;
      right: 0;
      width: auto;
      height: 2px;
    }

    .dv-route-bridge .q-icon {
      transform: rotate(90deg);
    }

    .dv-route-swap {
      display: none;
    }

    .dv-corporate-strip {
      grid-template-columns: 1fr;
    }

    .dv-corporate-grid {
      grid-template-columns: 1fr;
    }

    .dv-search-card.dv-search-card--structured .dv-search-actions {
      align-items: stretch;
    }

    .dv-search-card.dv-search-card--structured .dv-search-helper {
      justify-content: center;
    }

    .dv-toolbar {
      gap: 10px;
    }

    .dv-toolbar__left,
    .dv-toolbar__right {
      width: 100%;
    }

    .dv-sort-select,
    .dv-action-toggle {
      flex: 1 1 auto;
    }

  }

  /* Inline search flow */
  .dv-search-screen.dv-search-screen--inline {
    min-height: auto;
    padding-bottom: 22px;
    z-index: 80;
  }

  .dv-search-screen--inline .dv-search-hero {
    padding-bottom: 112px;
  }

  .dv-search-screen--inline .dv-search-shell {
    margin-bottom: 0;
    z-index: 90;
  }

  .dv-inline-results {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 0 0 48px;
    background: #f8fafc;
  }

  .dv-inline-results--availability .dv-main-wrapper {
    margin-top: 0;
    padding-top: 4px;
  }

  .dv-inline-results--summary .dv-summary-screen {
    min-height: auto;
    padding-top: 8px;
    background: #f8fafc;
  }

  /* Hotel availability */
  .dv-hotel-search-grid { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(150px, 0.75fr) minmax(150px, 0.75fr) minmax(150px, 0.7fr) auto; gap: 12px; align-items: stretch; }
  .dv-hotel-results { width: 100%; max-width: 1380px; margin: 0 auto; padding: 20px 16px 34px; }
  .dv-hotel-layout { display: grid; grid-template-columns: 280px minmax(0, 1fr); gap: 22px; align-items: start; }
  .dv-hotel-sidebar { position: sticky; top: 16px; }
  .dv-hotel-filter-card, .dv-hotel-progress, .dv-hotel-card { border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; box-shadow: 0 2px 12px rgba(15, 23, 42, 0.035); }
  .dv-hotel-filter-card { overflow: hidden; }
  .dv-hotel-filter-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 18px; border-bottom: 1px solid #f1f5f9; background: #fbfcfd; }
  .dv-hotel-filter-title { display: inline-flex; align-items: center; gap: 8px; color: #1f2937; font-size: 15px; font-weight: 900; }
  .dv-hotel-clear { border: 0; background: transparent; color: var(--reserve-secondary); cursor: pointer; font-size: 12px; font-weight: 850; }
  .dv-hotel-filter-section { border-bottom: 1px solid #f1f5f9; }
  .dv-hotel-filter-section:last-child { border-bottom: 0; }
  .dv-hotel-filter-header { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 18px; background: transparent; color: #1f2937; cursor: pointer; text-align: left; }
  .dv-hotel-filter-header strong { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 850; }
  .dv-hotel-filter-header svg { color: var(--reserve-primary); }
  .dv-hotel-filter-body { display: grid; gap: 8px; padding: 0 18px 16px; }
  .dv-hotel-check { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: #475569; cursor: pointer; font-size: 13px; font-weight: 750; }
  .dv-hotel-check-main { display: inline-flex; min-width: 0; align-items: center; gap: 8px; }
  .dv-hotel-check input { width: 16px; height: 16px; accent-color: var(--reserve-primary); }
  .dv-hotel-check-count { border-radius: 999px; background: #f1f5f9; color: #64748b; font-size: 11px; font-weight: 850; padding: 2px 7px; }
  .dv-hotel-price-row { display: flex; align-items: center; justify-content: space-between; color: #475569; font-size: 12px; font-weight: 850; }
  .dv-hotel-progress { overflow: hidden; margin-bottom: 18px; }
  .dv-hotel-progress-summary { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 16px; background: #fff; }
  .dv-hotel-progress-main { display: flex; min-width: 0; align-items: center; gap: 12px; }
  .dv-hotel-progress-icon { display: inline-flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 999px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); }
  .dv-hotel-progress-copy strong { display: block; color: #1f2937; font-size: 14px; font-weight: 900; }
  .dv-hotel-progress-copy span { display: block; color: #64748b; font-size: 12px; font-weight: 700; margin-top: 2px; }
  .dv-hotel-progress-bar { width: 190px; height: 8px; overflow: hidden; border-radius: 999px; background: #edf2f7; }
  .dv-hotel-progress-fill { height: 100%; border-radius: inherit; background: var(--reserve-primary); }
  .dv-hotel-provider-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; padding: 14px 16px 16px; border-top: 1px solid #f1f5f9; background: #fbfcfd; }
  .dv-hotel-provider { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; }
  .dv-hotel-provider-name { color: #1f2937; font-size: 12px; font-weight: 900; }
  .dv-hotel-provider-status { display: inline-flex; align-items: center; gap: 5px; border-radius: 8px; padding: 4px 7px; font-size: 11px; font-weight: 850; }
  .dv-hotel-provider-status--success { background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); }
  .dv-hotel-provider-status--failed { background: rgba(186, 46, 15, 0.1); color: #ba2e0f; }
  .dv-hotel-results-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
  .dv-hotel-results-head h2 { margin: 0; color: #1f2937; font-size: 22px; font-weight: 900; }
  .dv-hotel-results-head p { margin: 4px 0 0; color: #64748b; font-size: 13px; font-weight: 750; }
  .dv-hotel-list { display: grid; gap: 14px; }
  .dv-hotel-card { overflow: hidden; transition: box-shadow 0.18s ease, border-color 0.18s ease; }
  .dv-hotel-card:hover { box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08); }
  .dv-hotel-card.is-selected { border-color: var(--reserve-primary); box-shadow: 0 0 0 1px rgba(66, 143, 112, 0.25), 0 12px 28px rgba(15, 23, 42, 0.08); }
  .dv-hotel-card.is-blocked { opacity: 0.82; }
  .dv-hotel-card-main { display: grid; grid-template-columns: 235px minmax(0, 1fr) 230px; min-height: 208px; }
  .dv-hotel-image { position: relative; overflow: hidden; background: #eef2f7; }
  .dv-hotel-image img { display: block; width: 100%; height: 100%; min-height: 208px; object-fit: cover; }
  .dv-hotel-card.is-blocked .dv-hotel-image img { filter: grayscale(0.45); }
  .dv-hotel-badge { position: absolute; top: 12px; left: 12px; border-radius: 8px; background: var(--reserve-primary); color: #fff; font-size: 11px; font-weight: 900; padding: 5px 8px; box-shadow: var(--shadow-sm); }
  .dv-hotel-info { display: flex; min-width: 0; flex-direction: column; justify-content: space-between; padding: 18px; }
  .dv-hotel-title-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
  .dv-hotel-title-row h3 { margin: 0; color: #1f2937; font-size: 18px; font-weight: 900; line-height: 1.25; }
  .dv-hotel-stars { display: inline-flex; flex: 0 0 auto; gap: 1px; color: #f5a623; }
  .dv-hotel-address { display: flex; align-items: flex-start; gap: 6px; margin: 10px 0 14px; color: #64748b; font-size: 12px; font-weight: 700; line-height: 1.45; }
  .dv-hotel-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .dv-hotel-tag { display: inline-flex; align-items: center; gap: 6px; border: 1px solid #e5e7eb; border-radius: 9px; background: #f8fafc; color: #475569; font-size: 12px; font-weight: 850; padding: 6px 8px; }
  .dv-hotel-tag--green { border-color: rgba(66, 143, 112, 0.25); background: rgba(66, 143, 112, 0.08); color: var(--reserve-primary); }
  .dv-hotel-policy { display: inline-flex; width: fit-content; align-items: center; gap: 6px; margin-top: 14px; border-radius: 9px; padding: 7px 9px; font-size: 12px; font-weight: 800; }
  .dv-hotel-policy--warning { background: rgba(204, 95, 33, 0.12); color: #cc5f21; }
  .dv-hotel-policy--danger { background: rgba(186, 46, 15, 0.11); color: #ba2e0f; }
  .dv-hotel-action { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 18px; border-left: 1px solid #f1f5f9; background: #fbfcfd; text-align: center; }
  .dv-hotel-price-label, .dv-hotel-tax { color: #64748b; font-size: 11px; font-weight: 750; }
  .dv-hotel-price { margin: 4px 0 3px; color: #1f2937; font-size: 26px; font-weight: 900; letter-spacing: -0.02em; }
  .dv-hotel-provider-count { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; border-radius: 8px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 11px; font-weight: 900; padding: 5px 8px; }
  .dv-hotel-action-btn { display: inline-flex; width: 100%; min-height: 42px; align-items: center; justify-content: center; gap: 8px; border-radius: 11px; background: var(--reserve-primary); color: #fff; cursor: pointer; font-size: 13px; font-weight: 900; transition: background 0.18s ease, color 0.18s ease; }
  .dv-hotel-action-btn:hover:not(:disabled) { background: #38634f; }
  .dv-hotel-action-btn.is-muted { background: #e5e7eb; color: #1f2937; }
  .dv-hotel-action-btn:disabled { cursor: not-allowed; background: #e5e7eb; color: #94a3b8; }
  .dv-hotel-offers { border-top: 1px solid #f1f5f9; background: #fbfcfd; padding: 18px; }
  .dv-hotel-offers h4 { margin: 0 0 12px; color: #1f2937; font-size: 15px; font-weight: 900; }
  .dv-hotel-offer-list { display: grid; gap: 10px; }
  .dv-hotel-offer { position: relative; display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 16px; overflow: hidden; border: 1px solid #e5e7eb; border-radius: 13px; background: #fff; padding: 14px 16px 14px 18px; }
  .dv-hotel-offer.is-best::before, .dv-hotel-offer.is-selected::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px; background: var(--reserve-primary); }
  .dv-hotel-offer.is-selected { border-color: var(--reserve-primary); box-shadow: 0 0 0 1px rgba(66, 143, 112, 0.22); }
  .dv-hotel-offer-provider { display: flex; flex-direction: column; gap: 6px; color: #475569; font-size: 13px; font-weight: 750; }
  .dv-hotel-offer-provider strong { color: #1f2937; font-size: 14px; font-weight: 900; }
  .dv-hotel-best { display: inline-flex; width: fit-content; align-items: center; gap: 5px; border-radius: 7px; background: rgba(66, 143, 112, 0.1); color: var(--reserve-primary); font-size: 10px; font-weight: 900; letter-spacing: 0.04em; padding: 4px 7px; text-transform: uppercase; }
  .dv-hotel-offer-price { color: #1f2937; font-size: 20px; font-weight: 900; text-align: right; }
  .dv-hotel-offer-price span { display: block; color: #64748b; font-size: 11px; font-weight: 750; margin-top: 2px; }
  .dv-hotel-reserve { display: inline-flex; min-width: 132px; min-height: 38px; align-items: center; justify-content: center; gap: 7px; border: 1px solid var(--reserve-primary); border-radius: 10px; background: #fff; color: var(--reserve-primary); cursor: pointer; font-size: 12px; font-weight: 900; }
  .dv-hotel-reserve:hover:not(:disabled), .dv-hotel-reserve.is-selected { background: var(--reserve-primary); color: #fff; }
  .dv-hotel-reserve:disabled { cursor: not-allowed; border-color: #e5e7eb; background: #f1f5f9; color: #94a3b8; }

  @media (max-width: 1023px) {
    .dv-hotel-search-grid, .dv-hotel-layout, .dv-hotel-card-main, .dv-hotel-provider-grid, .dv-hotel-offer { grid-template-columns: 1fr; }
    .dv-hotel-sidebar { position: static; }
    .dv-hotel-action { border-left: 0; border-top: 1px solid #f1f5f9; }
    .dv-hotel-progress-summary, .dv-hotel-results-head { align-items: stretch; flex-direction: column; }
    .dv-hotel-progress-bar { width: 100%; }
    .dv-hotel-image img { height: 210px; min-height: 210px; }
  }

  /* Availability filters */
  .dv-main-wrapper {
    max-width: 1400px;
    padding-top: 24px;
    align-items: flex-start;
  }

  @media (min-width: 1024px) {
    .dv-sidebar {
      width: 280px;
      top: 20px;
    }
  }

  .dv-filter-card {
    overflow: hidden;
    padding: 0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 14px 34px -28px rgba(15, 23, 42, 0.5);
  }

  .dv-availability-filter__header {
    display: flex;
    min-height: 62px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-availability-filter__title {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;
    color: #172033;
    font-size: 15px;
    font-weight: 900;
  }

  .dv-availability-filter__title .q-icon {
    color: var(--reserve-primary);
    font-size: 20px;
  }

  .dv-availability-filter__counter {
    display: inline-flex;
    min-width: 22px;
    min-height: 22px;
    align-items: center;
    justify-content: center;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(66, 143, 112, 0.12);
    color: var(--reserve-primary);
    font-size: 11px;
    font-weight: 900;
  }

  .dv-availability-filter__clear {
    display: inline-flex;
    width: 34px;
    height: 34px;
    min-height: 34px;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 8px;
    background: #ffffff;
    color: #64748b;
    cursor: pointer;
    font-size: 0;
  }

  .dv-availability-filter__clear:hover {
    background: #eef7f3;
    color: var(--reserve-primary);
  }

  .dv-availability-filter__clear .q-icon {
    font-size: 18px;
  }

  .dv-availability-filter__content {
    display: flex;
    flex-direction: column;
  }

  .dv-availability-filter-section {
    border-bottom: 1px solid #f1f5f9;
  }

  .dv-availability-filter-section:last-child {
    border-bottom: 0;
  }

  .dv-availability-filter-section__header {
    display: flex;
    width: 100%;
    min-height: 48px;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 13px 16px;
    background: #ffffff;
    color: #172033;
    cursor: pointer;
    text-align: left;
  }

  .dv-availability-filter-section__header:hover {
    background: #f8fafc;
  }

  .dv-availability-filter-section__label {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 850;
  }

  .dv-availability-filter-section__label .q-icon {
    width: 20px;
    color: var(--reserve-primary);
    font-size: 18px;
  }

  .dv-availability-filter-section__chevron {
    color: #94a3b8;
  }

  .dv-availability-filter-section__body {
    display: grid;
    gap: 8px;
    padding: 0 16px 14px;
  }

  .dv-availability-checkbox {
    display: flex;
    min-height: 28px;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #4b5f76;
    cursor: pointer;
    font-size: 12px;
    font-weight: 750;
  }

  .dv-availability-checkbox:hover {
    color: #172033;
  }

  .dv-availability-checkbox__main {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 9px;
  }

  .dv-availability-checkbox input {
    width: 16px;
    height: 16px;
    flex: 0 0 auto;
    accent-color: var(--reserve-primary);
    cursor: pointer;
  }

  .dv-availability-checkbox__count {
    display: inline-flex;
    min-width: 24px;
    justify-content: center;
    padding: 3px 7px;
    border-radius: 999px;
    background: #f1f5f9;
    color: #718096;
    font-size: 10px;
    font-weight: 900;
  }

  .dv-availability-filter-empty {
    display: inline-flex;
    min-height: 30px;
    align-items: center;
    color: #94a3b8;
    font-size: 12px;
    font-weight: 750;
  }

  .dv-availability-range {
    display: grid;
    gap: 10px;
    padding-top: 2px;
  }

  .dv-availability-range__values {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #64748b;
    font-size: 11px;
    font-weight: 850;
  }

  .dv-availability-range__values strong {
    color: #172033;
    font-weight: 900;
  }

  .dv-availability-time-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .dv-availability-time-field {
    display: grid;
    gap: 5px;
  }

  .dv-availability-time-field span {
    color: #718096;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dv-availability-time-field input {
    width: 100%;
    min-height: 34px;
    padding: 6px 8px;
    border: 1px solid #dfe6ef;
    border-radius: 8px;
    background: #f8fafc;
    color: #172033;
    font-size: 12px;
    font-weight: 800;
  }

  .dv-filter-overlay {
    display: none;
  }

  .dv-filter-drawer-header {
    display: none;
  }

  .dv-filter-btn--mobile {
    display: none;
  }

  /* Selection sidebar */
  .dv-selection-box {
    gap: 0;
    overflow: hidden;
    padding: 0;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 14px 34px -26px rgba(15, 23, 42, 0.55);
  }

  .dv-selection-header {
    min-height: 62px;
    padding: 15px 16px;
    border-bottom: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-selection-title {
    color: #172033;
    font-size: 15px;
  }

  .dv-selection-title .q-icon {
    color: var(--reserve-primary);
    font-size: 20px;
  }

  .dv-selection-clear {
    width: 34px;
    min-width: 34px;
    height: 34px;
    padding: 0;
    border: 0;
    background: #ffffff;
    color: #64748b;
    font-size: 0;
  }

  .dv-selection-clear:hover:not(:disabled) {
    background: #fef2f2;
    color: #dc2626;
  }

  .dv-selection-clear .q-icon {
    font-size: 18px;
  }

  .dv-selection-clear:disabled {
    background: transparent;
    color: #94a3b8;
    opacity: 1;
  }

  .dv-selection-stack {
    gap: 12px;
    padding: 14px;
  }

  .dv-selection-card {
    position: relative;
    overflow: hidden;
    min-height: 128px;
    gap: 10px;
    padding: 16px 14px 14px;
    border: 1px solid #dfe6ef;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 10px 24px -22px rgba(15, 23, 42, 0.65);
  }

  .dv-selection-card:not(.dv-selection-card--empty)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--reserve-primary);
  }

  .dv-selection-card--combined::before {
    background: linear-gradient(90deg, var(--reserve-primary), var(--reserve-secondary));
  }

  .dv-selection-card--empty {
    min-height: 116px;
    align-items: center;
    justify-content: center;
    border: 1.5px dashed #cbd5e1;
    background: #f8fafc;
    box-shadow: none;
    color: #94a3b8;
  }

  .dv-selection-badge {
    border-radius: 999px;
    background: #eef7f3;
  }

  .dv-selection-route {
    font-size: 13px;
  }

  .dv-selection-fare {
    align-items: flex-end;
  }

  .dv-selection-price {
    color: #172033;
    font-size: 18px;
  }

  .dv-selection-footer {
    gap: 10px;
    padding: 14px 16px 16px;
    border-top: 1px solid #edf2f7;
    background: #f8fafc;
  }

  .dv-selection-total strong {
    color: #172033;
  }

  .dv-selection-hint {
    color: #718096;
  }

  .dv-tarifar-btn {
    background: var(--reserve-primary);
  }

  .dv-tarifar-btn:hover:not(:disabled) {
    background: #34765d;
  }

  @media (max-width: 1023px) {
    .dv-filter-overlay {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 40;
      background: rgba(15, 23, 42, 0.38);
    }

    .dv-sidebar.is-drawer-open {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 50;
      width: min(320px, 88vw);
      overflow-y: auto;
      padding: 14px;
      background: #ffffff;
      box-shadow: 24px 0 48px -34px rgba(15, 23, 42, 0.72);
    }

    .dv-filter-drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 12px;
    }

    .dv-filter-drawer-header h2 {
      margin: 0;
      color: #172033;
      font-size: 17px;
      font-weight: 900;
    }

    .dv-filter-drawer-header button {
      display: inline-flex;
      width: 36px;
      height: 36px;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      background: #f1f5f9;
      color: #526173;
      cursor: pointer;
    }

    .dv-filter-btn--mobile {
      display: inline-flex;
      flex: 0 0 auto;
    }

    .dv-content-area {
      order: 3;
      padding-bottom: 0;
    }

    .dv-selection-panel {
      order: 2;
    }

    .dv-selection-panel.is-empty {
      display: none;
      position: static;
      width: 100%;
      max-height: none;
      overflow: visible;
    }

    .dv-selection-panel.is-active {
      position: sticky;
      top: 8px;
      left: auto;
      right: auto;
      bottom: auto;
      z-index: 20;
      width: 100%;
      max-height: none;
      overflow: visible;
    }
  }

  @media (max-width: 520px) {
    .dv-itinerary-field__body {
      grid-template-columns: 1fr;
      gap: 6px;
      align-items: start;
    }

    .dv-itinerary-input {
      font-size: 14px;
    }

    .dv-route-overview {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .dv-route-code-block,
    .dv-route-code-block--end {
      align-items: flex-start;
      text-align: left;
    }

    .dv-route-bridge {
      justify-content: flex-start;
    }

    .dv-route-bridge::before {
      left: 18px;
      right: auto;
      width: 2px;
      height: 100%;
    }

    .dv-route-bridge .q-icon {
      transform: none;
    }
  }
`,ge={segmentLabels:{0:`RIO -> SAO`,1:`SAO -> RIO`,99:`Voos Combinados`},flightsBySegment:{0:[{IdViagem:`LA0`,CodSisRes:`LA`,Moeda:`R$`,BuyNow:!0,Voos:[{NumeroVoo:`3339`,NomeCia:`LATAM`,CodAeroportoOrigem:`GIG`,NomeAeroportoOrigem:`Rio de Janeiro, Galeão`,CodAeroportoDestino:`GRU`,NomeAeroportoDestino:`Guarulhos`,SaidaDate:`qui, 14 mai`,SaidaTime:`05:00`,ChegadaDate:`qui, 14 mai`,ChegadaTime:`06:15`,Duracao:75,Paradas:0,Seg:0}],Tarifas:[{IdTarifa:0,Nome:`LIGHT`,Valor:2188.15,Classe:`M`,Bagage:`0`},{IdTarifa:1,Nome:`STANDARD`,Valor:2320.28,Classe:`M`,Bagage:`1`}]}],1:[{IdViagem:`G3-VOLTA`,CodSisRes:`G3`,Moeda:`R$`,BuyNow:!1,Voos:[{NumeroVoo:`1683`,NomeCia:`GOL`,CodAeroportoOrigem:`CGH`,NomeAeroportoOrigem:`Congonhas`,CodAeroportoDestino:`CNF`,NomeAeroportoDestino:`Confins`,SaidaDate:`sex, 15 mai`,SaidaTime:`12:40`,ChegadaDate:`sex, 15 mai`,ChegadaTime:`13:45`,Duracao:65,Paradas:1,Seg:1},{NumeroVoo:`1412`,NomeCia:`GOL`,CodAeroportoOrigem:`CNF`,NomeAeroportoOrigem:`Confins`,CodAeroportoDestino:`GIG`,NomeAeroportoDestino:`Galeão`,SaidaDate:`sex, 15 mai`,SaidaTime:`14:10`,ChegadaDate:`sex, 15 mai`,ChegadaTime:`15:00`,Duracao:50,Paradas:0,Seg:1}],Tarifas:[{IdTarifa:20,Nome:`LIGHT`,Valor:1980.4,Classe:`B`,Bagage:`0`},{IdTarifa:21,Nome:`PLUS`,Valor:2174.9,Classe:`B`,Bagage:`1`}]}],99:[{IdViagem:`COMBINADO-LA-G3`,CodSisRes:`LA`,Moeda:`R$`,BuyNow:!0,isCombinado:!0,Voos:[{NumeroVoo:`3339`,NomeCia:`LATAM`,CodAeroportoOrigem:`GIG`,NomeAeroportoOrigem:`Galeão`,CodAeroportoDestino:`GRU`,NomeAeroportoDestino:`Guarulhos`,SaidaDate:`qui, 14 mai`,SaidaTime:`05:00`,ChegadaDate:`qui, 14 mai`,ChegadaTime:`06:15`,Duracao:75,Paradas:0,Seg:0},{NumeroVoo:`1683`,NomeCia:`GOL`,CodAeroportoOrigem:`CGH`,NomeAeroportoOrigem:`Congonhas`,CodAeroportoDestino:`GIG`,NomeAeroportoDestino:`Galeão`,SaidaDate:`sex, 15 mai`,SaidaTime:`12:40`,ChegadaDate:`sex, 15 mai`,ChegadaTime:`15:00`,Duracao:140,Paradas:1,Seg:1}],Tarifas:[{IdTarifa:990,Nome:`COMBINADA LIGHT`,Valor:4168.55,Classe:`M`,Bagage:`0`},{IdTarifa:991,Nome:`COMBINADA PLUS`,Valor:4495.18,Classe:`M`,Bagage:`1`},{IdTarifa:992,Nome:`FLEX CORPORATE`,Valor:4820.74,Classe:`Y`,Bagage:`1`}]}]}},_e=[{id:`LA`,name:`LATAM`,status:`idle`,count:0},{id:`G3`,name:`GOL`,status:`idle`,count:0},{id:`AD`,name:`Azul`,status:`idle`,count:0},{id:`SABRE`,name:`SabreV2`,status:`idle`,count:0}],ve=[{value:`oneway`,label:`So ida`},{value:`roundtrip`,label:`Ida e volta`},{value:`multi`,label:`Multiplos trechos`}],ye={oneway:{origin:`Sao Paulo`,destination:`Rio de Janeiro`,departureDate:`qui, 14 mai`,returnDate:``,multiSegments:[]},roundtrip:{origin:`Sao Paulo`,destination:`Rio de Janeiro`,departureDate:`qui, 14 mai`,returnDate:`sex, 15 mai`,multiSegments:[]},multi:{origin:`Sao Paulo`,destination:`Rio de Janeiro`,departureDate:`qui, 14 mai`,returnDate:`sex, 15 mai`,multiSegments:[{origin:`Sao Paulo`,destination:`Rio de Janeiro`,date:`qui, 14 mai`},{origin:`Rio de Janeiro`,destination:`Sao Paulo`,date:`sex, 15 mai`}]}},be={tripType:`roundtrip`,origin:`Sao Paulo`,destination:`Rio de Janeiro`,departureDate:`qui, 14 mai`,returnDate:`sex, 15 mai`,multiSegments:[],hotelDestination:`Rio de Janeiro`,checkInDate:`qui, 14 mai`,checkOutDate:`sex, 15 mai`,passengers:[`matheus-castro`],customPassengers:[],anonymousPassengerCount:0},xe=[{id:`matheus-castro`,name:`Matheus Castro (Você)`,role:`Você`,document:`CPF ***.321-00`,department:`Produto`},{id:`ana-costa`,name:`Ana Costa`,role:`Colaborador`,document:`CPF ***.884-11`,department:`Comercial`},{id:`carlos-oliveira`,name:`Carlos Oliveira`,role:`Colaborador`,document:`CPF ***.447-22`,department:`Operacoes`},{id:`marcos-silva`,name:`Marcos Silva`,role:`Colaborador`,document:`CPF ***.109-33`,department:`Financeiro`},{id:`juliana-mendes`,name:`Juliana Mendes`,role:`Colaborador`,document:`CPF ***.760-44`,department:`Diretoria`},{id:`felipe-ramos`,name:`Felipe Ramos`,role:`Colaborador`,document:`CPF ***.502-55`,department:`Tecnologia`}],Se=[{id:1,origin:`Rio de Janeiro`,destination:`São Paulo`,date:`Jun - Jul 2026`,price:`R$ 418`,imageUrl:`https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=600&q=80`},{id:2,origin:`Sao Paulo`,destination:`Shenzhen, China`,date:`Jul - Ago 2026`,price:`R$ 5.420`,imageUrl:`https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80`},{id:3,origin:`Sao Paulo`,destination:`Rio de Janeiro`,date:`Ago - Set 2026`,price:`R$ 452`,imageUrl:`https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80`},{id:4,origin:`Sao Paulo`,destination:`Paris, Franca`,date:`Out - Nov 2026`,price:`R$ 4.250`,imageUrl:`https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80`}],Ce=[{id:1,name:`Ibis Sao Paulo Paulista`,city:`Sao Paulo, SP`,rating:`3 estrelas`,price:`R$ 250`,imageUrl:`https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f?auto=format&fit=crop&w=600&q=80`},{id:2,name:`Novotel RJ Praia de Botafogo`,city:`Rio de Janeiro, RJ`,rating:`4 estrelas`,price:`R$ 380`,imageUrl:`https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80`},{id:3,name:`Mercure Brasilia Eixo`,city:`Brasilia, DF`,rating:`4 estrelas`,price:`R$ 320`,imageUrl:`https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80`},{id:4,name:`Windsor Barra Hotel`,city:`Rio de Janeiro, RJ`,rating:`5 estrelas`,price:`R$ 550`,imageUrl:`https://images.unsplash.com/photo-1542314831-c6a4d14d285b?auto=format&fit=crop&w=600&q=80`}],we={progressoPercentual:100,fontesConcluidas:5,totalFontes:5,fontesSucesso:1,fontesFalha:4,fontes:[{codSisRes:`B2B`,status:`Concluida`,quantidade:4,erro:null},{codSisRes:`BBT`,status:`Falha`,quantidade:0,erro:`104 Invalid Agency Header Details!`},{codSisRes:`CMN`,status:`Falha`,quantidade:0,erro:`Ocorreu um erro no fornecedor.`},{codSisRes:`OMN`,status:`Falha`,quantidade:0,erro:`Authorization error: Invalid username, password and/or id.`},{codSisRes:`TRD`,status:`Falha`,quantidade:0,erro:`Erro ao converter retorno do fornecedor.`}]},Te=[{idReferencia:`4b843fdfac5647dda4f9c73a52856699`,nomeHotel:`GRAN NOBILE RIO DE JANEIRO BARRA`,imagem:`https://dadosb2b.s3.us-west-2.amazonaws.com/dev/imgHotel/28062_201718120619_LUXO_TWIN.jpg`,categoria:5,endereco:`AV LUCIO COSTA, 3150 - BARRA DA TIJUCA - RIO DE JANEIRO`,cidade:`Rio de Janeiro`,menorDiaria:100,marcadores:[`OfereceCafeDaManha`,`MenorDiaria`],violouPolitica:!1,ofertas:[{id:`o1`,codSisRes:`B2B`,preco:100,violouPolitica:!1},{id:`o2`,codSisRes:`TRD`,preco:125,violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima da menor tarifa`},{id:`o3`,codSisRes:`OMN`,preco:140,violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima da menor tarifa`}]},{idReferencia:`a043883304bc4a5380c7abb0e907393c`,nomeHotel:`ARGENTINA HOTEL`,imagem:`https://dadosb2b.s3.us-west-2.amazonaws.com/dev/imgHotel/U9kQYcHCDE-aliceHTL3.jpg`,categoria:3,endereco:`RUA CRUZ LIMA, 30 - FLAMENGO - RIO DE JANEIRO`,cidade:`Rio de Janeiro`,menorDiaria:300,marcadores:[],violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima do limite da menor tarifa (R$ 100,00)`,ofertas:[{id:`o4`,codSisRes:`TRD`,preco:300,violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima do limite da menor tarifa (R$ 100,00)`}]},{idReferencia:`08d5cc9508084b2d89ca82b8c7962927`,nomeHotel:`VENIT BARRA HOTEL`,imagem:`https://dadosb2b.s3.us-west-2.amazonaws.com/dev/imgHotel/31526_201816124903_1.jpg`,categoria:4,endereco:`AVENIDA EMBAIXADOR ABELARDO BUENO 2710 - BARRA DA TIJUCA`,cidade:`Rio de Janeiro`,menorDiaria:1e3,marcadores:[`OfereceCafeDaManha`,`MaiorDiaria`],violouPolitica:!0,tratamento:`Bloqueio`,motivoViolacao:`Hotel bloqueado pela politica da empresa`,ofertas:[{id:`o5`,codSisRes:`OMN`,preco:1e3,violouPolitica:!0,tratamento:`Bloqueio`,motivoViolacao:`Hotel bloqueado pela politica da empresa`},{id:`o6`,codSisRes:`B2B`,preco:1050,violouPolitica:!0,tratamento:`Bloqueio`,motivoViolacao:`Hotel bloqueado pela politica da empresa`}]},{idReferencia:`d779a118844e45798b255b15ccce4f40`,nomeHotel:`VENIT MIO HOTEL`,imagem:`https://dadosb2b.s3.us-west-2.amazonaws.com/dev/imgHotel/18839_201628114231_13323.jpg`,categoria:4,endereco:`AVENIDA EMBAIXADOR ABELARDO BUENO 2710 - BARRA DA TIJUCA`,cidade:`Rio de Janeiro`,menorDiaria:1e3,marcadores:[`OfereceCafeDaManha`,`MaiorDiaria`],violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima do limite da menor tarifa (R$ 100,00)`,ofertas:[{id:`o7`,codSisRes:`B2B`,preco:1e3,violouPolitica:!0,tratamento:`Alerta`,motivoViolacao:`Acima do limite da menor tarifa (R$ 100,00)`}]}],Ee=()=>({0:[],1:[],99:[]}),De=()=>({segments:{0:null,1:null},combined:null}),Oe=(e,t)=>`${e.IdViagem}-${t.IdTarifa}`,ke=e=>{let t=Math.floor(e/60),n=e%60;return`${t}h${n>0?n:``}`},P=e=>{let t=e.toFixed(2).split(`.`);return{integer:t[0],decimals:t[1]}},Ae=e=>e.toLocaleString(`pt-BR`,{style:`currency`,currency:`BRL`}),je=e=>Math.min(...e.Tarifas.map(e=>e.Valor)),Me=e=>e.Voos.reduce((e,t)=>e+(t.Paradas||0),0),Ne=e=>e.Voos.reduce((e,t)=>e+(t.Duracao||0),0),Pe=e=>e.Voos[0]?.NomeCia||e.CodSisRes||``,Fe={LA:`img/airLines/LA.png`,LATAM:`img/airLines/LA.png`,G3:`img/airLines/G3.png`,GOL:`img/airLines/G3.png`,AD:`img/airLines/AD2.gif`,AZUL:`img/airLines/AD2.gif`,SBR:`img/sistemasReserva/aereo/SBR.gif`,SABRE:`img/sistemasReserva/aereo/SBR.gif`,SABREV2:`img/sistemasReserva/aereo/SBR.gif`},Ie=(e=``)=>{let t=Fe[String(e).replace(/[^a-zA-Z0-9]/g,``).toUpperCase()];return t?`./${t}`:``},Le=({code:e,name:t,className:n=`airline-logo-image`,fallbackClassName:r=`airline-logo-fallback`})=>{let i=t||e||``,a=Ie(e)||Ie(t);return a?(0,N.jsx)(`img`,{className:n,src:a,alt:i,loading:`lazy`,draggable:`false`}):(0,N.jsx)(`span`,{className:r,children:i})},Re=e=>e.Voos[0]?.CodAeroportoOrigem||``,ze=e=>e.Voos[e.Voos.length-1]?.CodAeroportoDestino||``,Be=e=>e.Voos[e.Voos.length-1]?.ChegadaTime||``,Ve=(e,t)=>e?!(t.from&&e<t.from||t.to&&e>t.to):!0,He=(e,t)=>{let n=e.Nome.toUpperCase(),r=e.Bagage!==`0`;return t===`baggage`?r:t===`seat`?r||n.includes(`PLUS`)||n.includes(`FLEX`):t===`flex`?n.includes(`FLEX`):!0},Ue=(e=[],t=[])=>[...xe,...t].filter(t=>e.includes(t.id)),We=e=>`custom-${e.trim().toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||Date.now()}`,Ge=(e={})=>Math.max(0,Number(e.anonymousPassengerCount)||0),Ke=(e={})=>{let t=Array.isArray(e.passengers)?e.passengers.length:0,n=Ge(e);return Math.max(1,t+n)},qe=e=>`${e} ${e===1?`passageiro`:`passageiros`}`,Je=(e=``)=>e.replace(/\s*\([^)]*\)/g,``).trim(),Ye=({criteria:e,onCriteriaChange:t,onSubmit:n,inline:r=!1,showFeaturedFlights:i=!0,serviceType:a=`air`,onServiceChange:o=()=>{}})=>{let[s,c]=(0,C.useState)(!1),[l,u]=(0,C.useState)(`all`),[d,f]=(0,C.useState)(`all`),[p,m]=(0,C.useState)(`+2`),[h,g]=(0,C.useState)({valorMinimo:``,valorMaximo:`1000`,nomeHotel:``,redeHoteleira:``,bairro:``,pontoDeInteresse:``,categoriaMinima:`3`,categoriaMaxima:`5`}),[_,v]=(0,C.useState)(!1),[y,b]=(0,C.useState)(``),x=Array.isArray(e.passengers)?e.passengers:be.passengers,S=Array.isArray(e.customPassengers)?e.customPassengers:[],w=[...xe,...S],ee=Ue(x,S),te=Ge(e),T=Ke(e),E=e.tripType||be.tripType,D=a===`hotel`,ne=h.valorMaximo?Number(h.valorMaximo).toLocaleString(`pt-BR`):`Ilimitado`,O=Array.isArray(e.multiSegments)?e.multiSegments:[],re=Je(e.origin),ie=Je(e.destination),ae=y.trim().toLowerCase(),oe=ae.length>0,k=w.filter(e=>x.includes(e.id)||!oe?!1:[e.name,e.role,e.department,e.document].join(` `).toLowerCase().includes(ae)).slice(0,5),A=e=>{x.includes(e)||(t(`passengers`,[...x,e]),b(``),v(!1))},se=()=>{let e=y.trim();if(!e)return;let n=w.find(t=>t.name.toLowerCase()===e.toLowerCase());if(n){A(n.id);return}let r=We(e),i=w.some(e=>e.id===r)?`${r}-${Date.now()}`:r,a={id:i,name:e,role:`Convidado`,document:``,department:`Adicionado manualmente`};t(`customPassengers`,[...S,a]),t(`passengers`,[...x,i]),b(``),v(!1)},le=e=>{x.length+te<=1||t(`passengers`,x.filter(t=>t!==e))},j=()=>{T>=9||t(`anonymousPassengerCount`,te+1)},de=()=>{te<=0||t(`anonymousPassengerCount`,te-1)},fe=e=>{if(e.key===`Escape`){v(!1);return}if(e.key===`Enter`&&oe){if(e.preventDefault(),k.length>0){A(k[0].id);return}se()}},pe=()=>{let n=e.origin;t(`origin`,e.destination),t(`destination`,n)},me=e=>{let n=ye[e]||ye.roundtrip;t(`tripType`,e),t(`origin`,n.origin),t(`destination`,n.destination),t(`departureDate`,n.departureDate),t(`returnDate`,n.returnDate),t(`multiSegments`,n.multiSegments.map(e=>({...e})))},he=e=>{t(`multiSegments`,e);let n=e[0],r=e[e.length-1];n&&(t(`origin`,n.origin),t(`departureDate`,n.date)),r&&(t(`destination`,r.destination),t(`returnDate`,r.date))},ge=(e,t,n)=>{he(O.map((r,i)=>i===e?{...r,[t]:n}:r))},_e=()=>{if(O.length>=6)return;let e=O[O.length-1]||ye.multi.multiSegments[0];he([...O,{origin:e?.destination||``,destination:``,date:``}])},we=e=>{O.length<=2||he(O.filter((t,n)=>n!==e))},Te=(e,t)=>{g(n=>({...n,[e]:t}))};return(0,N.jsxs)(`main`,{className:`dv-search-screen dv-search-screen--reserve ${r?`dv-search-screen--inline`:``}`,children:[(0,N.jsxs)(`section`,{className:`dv-search-hero`,children:[(0,N.jsx)(`div`,{className:`dv-service-tabs`,"aria-label":`Servicos de viagem`,children:(0,N.jsxs)(`div`,{className:`dv-service-tab-list`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-service-tab ${a===`air`?`is-active`:``}`,onClick:()=>o(`air`),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight`}),`Aereo`]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-service-tab ${a===`hotel`?`is-active`:``}`,onClick:()=>o(`hotel`),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`hotel`}),`Hotel`]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-service-tab`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`directions_car`}),`Carro`]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-service-tab`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`directions_bus`}),`Rodoviario`]})]})}),(0,N.jsxs)(`div`,{className:`dv-search-hero-copy`,children:[(0,N.jsx)(`h1`,{children:`Para onde sera sua proxima reuniao?`}),(0,N.jsx)(`p`,{children:`Busque e reserve com as melhores tarifas corporativas.`})]})]}),(0,N.jsxs)(`section`,{className:`dv-search-shell`,children:[(0,N.jsxs)(`form`,{className:`dv-booking-card`,onSubmit:n,children:[(0,N.jsxs)(`div`,{className:`dv-booking-top`,children:[D?(0,N.jsxs)(`div`,{className:`dv-booking-service-title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`hotel`}),`Hospedagem Corporativa`]}):(0,N.jsx)(`div`,{className:`dv-trip-segmented`,"aria-label":`Tipo de viagem`,children:ve.map(e=>(0,N.jsx)(`button`,{type:`button`,className:`dv-trip-segmented__item ${E===e.value?`is-active`:``}`,onClick:()=>me(e.value),children:e.label},e.value))}),(0,N.jsxs)(`div`,{className:`dv-booking-tools`,children:[(0,N.jsxs)(`div`,{className:`dv-passenger-control`,children:[(0,N.jsxs)(`div`,{className:`dv-passenger-selector`,onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||v(!1)},children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-passenger-toolbar`,"aria-expanded":_,"aria-label":`Selecionar passageiros`,onClick:()=>v(e=>!e),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`person`}),(0,N.jsx)(`strong`,{children:qe(T)}),(0,N.jsx)(`span`,{className:`q-icon`,children:`expand_more`})]}),_&&(0,N.jsxs)(`div`,{className:`dv-passenger-popover`,children:[(0,N.jsxs)(`div`,{className:`dv-passenger-chips`,children:[ee.map(e=>(0,N.jsxs)(`span`,{className:`dv-passenger-chip`,children:[(0,N.jsx)(`span`,{children:e.name}),(0,N.jsx)(`button`,{type:`button`,"aria-label":`Remover ${e.name}`,disabled:x.length+te<=1,onClick:()=>le(e.id),children:(0,N.jsx)(`span`,{className:`q-icon`,children:`close`})})]},e.id)),te>0&&(0,N.jsxs)(`span`,{className:`dv-passenger-chip dv-passenger-chip--anonymous`,children:[(0,N.jsxs)(`span`,{children:[qe(te),` sem nome`]}),(0,N.jsx)(`button`,{type:`button`,"aria-label":`Remover passageiro sem nome`,onClick:de,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`close`})})]})]}),(0,N.jsxs)(`div`,{className:`dv-passenger-input-wrap`,children:[(0,N.jsx)(`input`,{className:`dv-passenger-input`,value:y,onChange:e=>b(e.target.value),onKeyDown:fe,placeholder:`Buscar ou adicionar passageiro...`}),(0,N.jsx)(`span`,{className:`dv-passenger-hint`,children:`Pressione Enter para adicionar convidados.`})]}),oe&&(0,N.jsx)(`div`,{className:`dv-passenger-suggestions`,children:k.length>0?k.map(e=>(0,N.jsxs)(`button`,{type:`button`,className:`dv-passenger-option`,onMouseDown:t=>{t.preventDefault(),A(e.id)},children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`person_add`}),(0,N.jsxs)(`span`,{className:`dv-passenger-copy`,children:[(0,N.jsx)(`span`,{className:`dv-passenger-name`,children:e.name}),(0,N.jsx)(`span`,{className:`dv-passenger-meta`,children:[e.role,e.department,e.document].filter(Boolean).join(` - `)})]})]},e.id)):(0,N.jsx)(`span`,{className:`dv-passenger-no-results`,children:`Nenhum passageiro encontrado.`})})]})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-passenger-quick-add dv-passenger-quick-add--decrease`,"aria-label":`Diminuir quantidade de passageiros`,disabled:te<=0||T<=1,onClick:de,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`remove`})}),(0,N.jsx)(`button`,{type:`button`,className:`dv-passenger-quick-add dv-passenger-quick-add--increase`,"aria-label":`Adicionar passageiro sem especificar`,disabled:T>=9,onClick:j,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`add`})})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-filter-toggle ${s?`is-active`:``}`,"aria-pressed":s,onClick:()=>c(e=>!e),children:(0,N.jsx)(ue,{className:`w-4 h-4`})})]})]}),D?(0,N.jsxs)(`div`,{className:`dv-hotel-search-grid`,children:[(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--route`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Destino`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`location_on`}),(0,N.jsx)(`span`,{className:`dv-booking-route-copy`,children:(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.hotelDestination||`Rio de Janeiro`,placeholder:`Cidade, bairro, ponto de interesse ou nome do hotel`,onChange:e=>t(`hotelDestination`,e.target.value)})})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--date`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Check-in`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`calendar_month`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.checkInDate||`qui, 14 mai`,onChange:e=>t(`checkInDate`,e.target.value)})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--date`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Check-out`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`event_available`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.checkOutDate||`sex, 15 mai`,onChange:e=>t(`checkOutDate`,e.target.value)})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--date`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Hospedes`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`group`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:qe(T),readOnly:!0})]})]}),(0,N.jsxs)(`button`,{type:`submit`,className:`dv-search-submit dv-search-submit--booking`,children:[(0,N.jsx)(ce,{className:`w-4 h-4`}),`Buscar hoteis`]})]}):(0,N.jsx)(`div`,{className:`dv-flight-search-grid dv-flight-search-grid--${E}`,children:E===`multi`?(0,N.jsxs)(`div`,{className:`dv-multi-route-builder`,"aria-label":`Trechos adicionados`,children:[O.map((e,t)=>(0,N.jsxs)(`div`,{className:`dv-multi-route-row`,children:[(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--multi-route`,children:[(0,N.jsxs)(`span`,{className:`dv-booking-label`,children:[`Trecho `,t+1,` - Origem`]}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_takeoff`}),(0,N.jsx)(`span`,{className:`dv-booking-route-copy`,children:(0,N.jsx)(`input`,{className:`dv-booking-input`,value:Je(e.origin),onChange:e=>ge(t,`origin`,e.target.value)})})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--multi-route`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Destino`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_land`}),(0,N.jsx)(`span`,{className:`dv-booking-route-copy`,children:(0,N.jsx)(`input`,{className:`dv-booking-input`,value:Je(e.destination),onChange:e=>ge(t,`destination`,e.target.value)})})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--multi-route`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Data`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`calendar_month`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.date,onChange:e=>ge(t,`date`,e.target.value)})]})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-multi-route-remove`,"aria-label":`Remover trecho ${t+1}`,disabled:O.length<=2,onClick:()=>we(t),children:(0,N.jsx)(`span`,{className:`q-icon`,children:`close`})})]},`${e.origin}-${e.destination}-${t}`)),(0,N.jsxs)(`div`,{className:`dv-multi-route-footer`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-multi-route-add`,disabled:O.length>=6,onClick:_e,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`add`}),`Adicionar trecho`]}),(0,N.jsxs)(`button`,{type:`submit`,className:`dv-search-submit dv-search-submit--booking`,children:[(0,N.jsx)(ce,{className:`w-4 h-4`}),`Buscar voos`]})]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--route`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Origem`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_takeoff`}),(0,N.jsx)(`span`,{className:`dv-booking-route-copy`,children:(0,N.jsx)(`input`,{className:`dv-booking-input`,value:re,onChange:e=>t(`origin`,e.target.value)})})]})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-booking-swap`,"aria-label":`Inverter origem e destino`,onClick:pe,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`sync_alt`})}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--route`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Destino`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_land`}),(0,N.jsx)(`span`,{className:`dv-booking-route-copy`,children:(0,N.jsx)(`input`,{className:`dv-booking-input`,value:ie,onChange:e=>t(`destination`,e.target.value)})})]})]}),(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--date`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Ida`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`calendar_month`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.departureDate,onChange:e=>t(`departureDate`,e.target.value)})]})]}),E!==`oneway`&&(0,N.jsxs)(`label`,{className:`dv-booking-field dv-booking-field--date`,children:[(0,N.jsx)(`span`,{className:`dv-booking-label`,children:`Volta`}),(0,N.jsxs)(`span`,{className:`dv-booking-field__body`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`event_available`}),(0,N.jsx)(`input`,{className:`dv-booking-input`,value:e.returnDate,onChange:e=>t(`returnDate`,e.target.value)})]})]}),(0,N.jsxs)(`button`,{type:`submit`,className:`dv-search-submit dv-search-submit--booking`,children:[(0,N.jsx)(ce,{className:`w-4 h-4`}),`Buscar voos`]})]})}),s&&D&&(0,N.jsxs)(`div`,{className:`dv-advanced-filters dv-hotel-search-filter`,children:[(0,N.jsxs)(`header`,{className:`dv-hotel-search-filter__header`,children:[(0,N.jsx)(`h4`,{className:`dv-hotel-search-filter__title`,children:`Filtros Avançados`}),(0,N.jsx)(`button`,{type:`button`,className:`dv-hotel-search-filter__close`,"aria-label":`Fechar filtros`,onClick:()=>c(!1),children:(0,N.jsx)(`span`,{className:`q-icon`,children:`close`})})]}),(0,N.jsxs)(`section`,{className:`dv-hotel-search-filter__section`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-search-filter__section-head`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Faixa de Preço (Diária)`}),(0,N.jsx)(`span`,{className:`dv-hotel-search-filter__price-badge`,children:h.valorMaximo?`Até R$ ${ne}`:ne})]}),(0,N.jsx)(`input`,{type:`range`,min:`0`,max:`2000`,step:`50`,value:h.valorMaximo||2e3,onChange:e=>Te(`valorMaximo`,e.target.value),className:`dv-range-input`}),(0,N.jsxs)(`div`,{className:`dv-hotel-search-filter__row`,children:[(0,N.jsxs)(`label`,{className:`dv-filter-block`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Mínimo`}),(0,N.jsx)(`input`,{className:`dv-filter-select`,type:`number`,placeholder:`R$ 0`,value:h.valorMinimo,onChange:e=>Te(`valorMinimo`,e.target.value)})]}),(0,N.jsxs)(`label`,{className:`dv-filter-block`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Máximo`}),(0,N.jsx)(`input`,{className:`dv-filter-select`,type:`number`,placeholder:`R$ 1.000`,value:h.valorMaximo,onChange:e=>Te(`valorMaximo`,e.target.value)})]})]}),(0,N.jsx)(`div`,{className:`dv-hotel-search-filter__chips`,children:[[`300`,`Até R$ 300`],[`500`,`Até R$ 500`],[`1000`,`Até R$ 1.000`]].map(([e,t])=>(0,N.jsx)(`button`,{type:`button`,className:`dv-hotel-search-filter__chip ${h.valorMaximo===e?`is-active`:``}`,onClick:()=>Te(`valorMaximo`,e),children:t},e))})]}),(0,N.jsxs)(`section`,{className:`dv-hotel-search-filter__section`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Categoria Mínima`}),(0,N.jsx)(`div`,{className:`dv-hotel-search-filter__stars`,children:[1,2,3,4,5].map(e=>(0,N.jsxs)(`button`,{type:`button`,className:`dv-hotel-search-filter__star ${Number(h.categoriaMinima)>=e?`is-active`:``}`,onClick:()=>Te(`categoriaMinima`,String(e)),children:[(0,N.jsx)(M,{fill:`currentColor`}),(0,N.jsx)(`span`,{children:e})]},e))}),(0,N.jsxs)(`p`,{className:`dv-hotel-search-filter__helper`,children:[`Exibindo hotéis de `,h.categoriaMinima||1,` a 5 estrelas.`]})]}),(0,N.jsxs)(`section`,{className:`dv-hotel-search-filter__section`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Localização e Detalhes`}),(0,N.jsxs)(`div`,{className:`dv-hotel-search-filter__row`,children:[(0,N.jsx)(`input`,{className:`dv-filter-select`,placeholder:`Nome do hotel`,value:h.nomeHotel,onChange:e=>Te(`nomeHotel`,e.target.value)}),(0,N.jsx)(`input`,{className:`dv-filter-select`,placeholder:`Rede hoteleira`,value:h.redeHoteleira,onChange:e=>Te(`redeHoteleira`,e.target.value)}),(0,N.jsx)(`input`,{className:`dv-filter-select`,placeholder:`Bairro`,value:h.bairro,onChange:e=>Te(`bairro`,e.target.value)}),(0,N.jsx)(`input`,{className:`dv-filter-select`,placeholder:`Ponto de interesse`,value:h.pontoDeInteresse,onChange:e=>Te(`pontoDeInteresse`,e.target.value)})]})]}),(0,N.jsxs)(`footer`,{className:`dv-hotel-search-filter__footer`,children:[(0,N.jsx)(`button`,{type:`button`,className:`dv-hotel-search-filter__clear`,onClick:()=>{g({valorMinimo:``,valorMaximo:``,nomeHotel:``,redeHoteleira:``,bairro:``,pontoDeInteresse:``,categoriaMinima:`1`,categoriaMaxima:`5`})},children:`Limpar`}),(0,N.jsx)(`button`,{type:`button`,className:`dv-hotel-search-filter__apply`,onClick:()=>c(!1),children:`Aplicar filtros`})]})]}),s&&!D&&(0,N.jsxs)(`div`,{className:`dv-advanced-filters`,children:[(0,N.jsxs)(`div`,{className:`dv-filter-block`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Tipo de voo`}),(0,N.jsx)(`div`,{className:`dv-filter-chip-group`,children:[[`all`,`Qualquer`],[`direct`,`Direto`],[`connection`,`Com conexao`]].map(([e,t])=>(0,N.jsx)(`button`,{type:`button`,className:`dv-filter-chip ${l===e?`is-active`:``}`,onClick:()=>u(e),children:t},e))})]}),(0,N.jsxs)(`div`,{className:`dv-filter-block`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Periodo de partida`}),(0,N.jsx)(`div`,{className:`dv-filter-chip-group`,children:[[`all`,`Qualquer`],[`morning`,`Manha`],[`afternoon`,`Tarde`],[`night`,`Noite`]].map(([e,t])=>(0,N.jsx)(`button`,{type:`button`,className:`dv-filter-chip ${d===e?`is-active`:``}`,onClick:()=>f(e),children:t},e))})]}),(0,N.jsxs)(`label`,{className:`dv-filter-block`,children:[(0,N.jsx)(`span`,{className:`dv-filter-block__title`,children:`Faixa de horario`}),(0,N.jsxs)(`select`,{className:`dv-filter-select`,value:p,onChange:e=>m(e.target.value),children:[(0,N.jsx)(`option`,{value:`0`,children:`Somente horario exato`}),(0,N.jsx)(`option`,{value:`+2`,children:`+ 2 horas`}),(0,N.jsx)(`option`,{value:`+4`,children:`+ 4 horas`}),(0,N.jsx)(`option`,{value:`+6`,children:`+ 6 horas`}),(0,N.jsx)(`option`,{value:`+12`,children:`+ 12 horas`})]})]})]})]}),i&&!D&&(0,N.jsxs)(`section`,{className:`dv-featured-flights`,"aria-label":`Voos em destaque`,children:[(0,N.jsx)(`div`,{className:`dv-featured-flights__header`,children:(0,N.jsx)(`h2`,{children:`Voos em destaque`})}),(0,N.jsx)(`div`,{className:`dv-featured-grid`,children:Se.map(e=>(0,N.jsxs)(`article`,{className:`dv-featured-card`,children:[(0,N.jsx)(`div`,{className:`dv-featured-card__image`,children:(0,N.jsx)(`img`,{src:e.imageUrl,alt:e.destination})}),(0,N.jsxs)(`div`,{className:`dv-featured-card__body`,children:[(0,N.jsxs)(`div`,{className:`dv-featured-route`,children:[(0,N.jsx)(`strong`,{children:e.destination}),(0,N.jsxs)(`span`,{children:[`Saindo de `,e.origin]})]}),(0,N.jsxs)(`div`,{className:`dv-featured-price-row`,children:[(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`small`,{children:`A partir de`}),(0,N.jsx)(`strong`,{children:e.price})]}),(0,N.jsx)(`button`,{type:`button`,children:`Selecionar`})]})]})]},e.id))})]}),i&&D&&(0,N.jsxs)(`section`,{className:`dv-featured-flights`,"aria-label":`Hoteis corporativos em destaque`,children:[(0,N.jsx)(`div`,{className:`dv-featured-flights__header`,children:(0,N.jsx)(`h2`,{children:`Hoteis corporativos em destaque`})}),(0,N.jsx)(`div`,{className:`dv-featured-grid`,children:Ce.map(e=>(0,N.jsxs)(`article`,{className:`dv-featured-card`,children:[(0,N.jsx)(`div`,{className:`dv-featured-card__image`,children:(0,N.jsx)(`img`,{src:e.imageUrl,alt:e.name})}),(0,N.jsxs)(`div`,{className:`dv-featured-card__body`,children:[(0,N.jsxs)(`div`,{className:`dv-featured-route`,children:[(0,N.jsx)(`strong`,{children:e.city}),(0,N.jsx)(`span`,{children:e.name})]}),(0,N.jsxs)(`div`,{className:`dv-featured-price-row`,children:[(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`small`,{children:`Diaria a partir de`}),(0,N.jsx)(`strong`,{children:e.price})]}),(0,N.jsx)(`button`,{type:`button`,children:`Reservar`})]})]})]},e.id))})]})]})]})},Xe=({title:e,selection:t,emptyText:n})=>{if(!t)return(0,N.jsxs)(`div`,{className:`dv-selection-card dv-selection-card--empty`,children:[(0,N.jsx)(`span`,{className:`dv-selection-empty-icon`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`add_circle`})}),(0,N.jsx)(`span`,{className:`dv-selection-empty-title`,children:e}),(0,N.jsx)(`span`,{className:`dv-selection-empty-subtitle`,children:n})]});let r=P(t.fare.Valor);return(0,N.jsxs)(`div`,{className:`dv-selection-card ${t.isCombined?`dv-selection-card--combined`:``}`,children:[(0,N.jsxs)(`span`,{className:`dv-selection-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:t.isCombined?`connecting_airports`:`flight`}),e]}),(0,N.jsxs)(`div`,{className:`dv-selection-route`,children:[(0,N.jsx)(`span`,{children:t.origin}),(0,N.jsx)(`span`,{className:`q-icon`,children:`arrow_forward`}),(0,N.jsx)(`span`,{children:t.destination})]}),(0,N.jsxs)(`div`,{className:`dv-selection-fare`,children:[(0,N.jsx)(`span`,{children:t.fare.Nome}),(0,N.jsxs)(`strong`,{className:`dv-selection-price`,children:[t.currency,` `,r.integer,`,`,r.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-selection-meta`,children:[(0,N.jsxs)(`span`,{className:`dv-selection-meta-chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`confirmation_number`}),t.airline,`-`,t.flightNumber]}),(0,N.jsxs)(`span`,{className:`dv-selection-meta-chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`event`}),t.departureDate]}),(0,N.jsxs)(`span`,{className:`dv-selection-meta-chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`}),t.departureTime,` - `,t.arrivalTime]})]})]})},Ze=({selectedFares:e,tripType:t,onClear:n,onTarifar:r})=>{let i=e.segments[0],a=e.segments[1],o=e.combined,s=t===`oneway`,c=s?!!i:!!(o||i&&a),l=P(o?o.fare.Valor:s?i?.fare.Valor||0:(i?.fare.Valor||0)+(a?.fare.Valor||0)),u=!!(o||i||a),d=c&&!o?s?`Trecho selecionado para reservar.`:`Trechos selecionados para reservar.`:u?``:`Selecione uma tarifa para iniciar.`;return(0,N.jsx)(`aside`,{className:`dv-selection-panel ${u?`is-active`:`is-empty`}`,children:(0,N.jsxs)(`div`,{className:`dv-selection-box`,children:[(0,N.jsxs)(`div`,{className:`dv-selection-header`,children:[(0,N.jsxs)(`div`,{className:`dv-selection-title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`receipt_long`}),`Seleção de tarifas`]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-selection-clear`,disabled:!u,onClick:n,"aria-label":`Limpar seleção`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`backspace`})})]}),(0,N.jsx)(`div`,{className:`dv-selection-stack`,children:o?(0,N.jsx)(Xe,{title:`Combinado`,selection:o,emptyText:``}):s?(0,N.jsx)(Xe,{title:`Só ida`,selection:i,emptyText:`Aguardando a tarifa de ida.`}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Xe,{title:`Trecho 1`,selection:i,emptyText:`Aguardando a tarifa do trecho 1.`}),(0,N.jsx)(Xe,{title:`Trecho 2`,selection:a,emptyText:`Aguardando a tarifa do trecho 2.`})]})}),(0,N.jsxs)(`div`,{className:`dv-selection-footer`,children:[(0,N.jsxs)(`div`,{className:`dv-selection-total`,children:[(0,N.jsx)(`span`,{children:`Total selecionado`}),(0,N.jsxs)(`strong`,{children:[`R$ `,l.integer,`,`,l.decimals]})]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-tarifar-btn`,disabled:!c,onClick:r,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`event_seat`}),`Reservar`]}),d?(0,N.jsx)(`span`,{className:`dv-selection-hint`,children:d}):null]})]})})},Qe=e=>e.combined?[e.combined]:[e.segments[0],e.segments[1]].filter(Boolean),$e=e=>e.reduce((e,t)=>e+t.fare.Valor,0),et=(e=[])=>{let t=e.flatMap(e=>e.Tarifas.map(e=>e.Valor));return t.length>0?Math.min(...t):0},tt=(e,t)=>e.combined?et(t[99]):[`0`,`1`].reduce((n,r)=>e.segments[r]?n+et(t[r]):n,0),nt=e=>!!e?.fare?.AriaRecommended,rt=(e,t)=>{let n=e[0];if(!n||t<=0)return null;let r=n.flight.Voos[0],i=n.flight.Voos[n.flight.Voos.length-1],a=[...new Set(n.flight.Voos.map(e=>e.NomeCia||n.flight.CodSisRes).filter(Boolean))],o=n.flight.Voos.map(e=>`${e.NomeCia||n.flight.CodSisRes} ${e.NumeroVoo}`).join(` + `),s=$e(e),c=Math.max(0,s-t),l={...n.fare,IdTarifa:`aria-${n.fare.IdTarifa}`,Nome:n.fare.Nome.includes(`ARIA`)?n.fare.Nome:`${n.fare.Nome} ARIA`,Valor:t,AriaRecommended:!0};return{selection:{...n,key:`${n.key}-aria-recommended`,fare:l,flightNumber:o,airline:a.join(` + `)||n.airline,origin:r?.CodAeroportoOrigem||n.origin,destination:i?.CodAeroportoDestino||n.destination,departureDate:r?.SaidaDate||n.departureDate,departureTime:r?.SaidaTime||n.departureTime,arrivalTime:i?.ChegadaTime||n.arrivalTime},title:`Encontrei um voo melhor`,subtitle:`${a.join(` + `)||n.airline} tem uma alternativa mais aderente à política, economizando ${ct(c)} em relação ao voo escolhido.`,price:t,savings:c,route:`${r?.CodAeroportoOrigem||n.origin} → ${i?.CodAeroportoDestino||n.destination}`,schedule:`${r?.SaidaTime||n.departureTime} - ${i?.ChegadaTime||n.arrivalTime}`}},it=e=>e.isCombined?[`0`,`1`]:[String(e.segmentKey??`0`)],at=(e=[],t=[])=>e.length!==1||t.length<2?``:e[0]===`0`?`Somente ida`:`Somente volta`,ot=e=>{let t=e.fare.Nome.toUpperCase(),n=e.fare.Bagage!==`0`,r=n||t.includes(`PLUS`)||t.includes(`FLEX`),i=t.includes(`FLEX`),a=it(e),o=new Set(a);return[{label:`Bagagem de mao`,included:!0,segmentScope:a},{label:`Bagagem despachada`,included:n,segmentScope:a},{label:`Marcacao de assento`,included:r,segmentScope:a},{label:`Reembolso integral`,included:i,segmentScope:a},{label:`Embarque prioritario`,included:o.has(`0`),segmentScope:[`0`]},{label:`Wi-Fi a bordo`,included:o.has(`1`),segmentScope:[`1`]}]},st=e=>{let t=new Map,n=[...new Set(e.flatMap(it))].sort();return e.flatMap(ot).forEach(e=>{let n=t.get(e.label),r=new Set(n?.includedSegments||[]);e.included&&e.segmentScope.forEach(e=>r.add(e)),t.set(e.label,{label:e.label,included:!!(n?.included||e.included),includedSegments:[...r].sort()})}),Array.from(t.values()).map(e=>({...e,segmentChip:e.included?at(e.includedSegments,n):``}))},ct=e=>new Intl.NumberFormat(`pt-BR`,{style:`currency`,currency:`BRL`}).format(e),lt=(e={})=>{let t=Ue(e.passengers,e.customPassengers).map(e=>({id:e.id,name:e.name,quantity:1,fixed:e.id===`matheus-castro`,shareWithAirline:!0})),n=Ge(e);return n>0&&t.push({id:`anonymous-passengers`,name:`${qe(n)} sem nome`,quantity:n,anonymous:!0}),t.length>0?t:[{id:`matheus-castro`,name:`Matheus Castro (Você)`,quantity:1,fixed:!0,shareWithAirline:!0}]},F=e=>e.flatMap(e=>{if(!e.isCombined)return[{key:e.key,selection:e,segmentKey:e.segmentKey,flights:e.flight.Voos}];let t=e.flight.Voos.reduce((e,t)=>{let n=String(t.Seg??`0`);return{...e,[n]:[...e[n]||[],t]}},{});return Object.entries(t).map(([t,n])=>({key:`${e.key}-${t}`,selection:e,segmentKey:t,flights:n}))}),I=({label:e,value:t,onChange:n,options:r,placeholder:i,required:a,wide:o})=>{let[s,c]=(0,C.useState)(!1),l=t.trim().toLowerCase(),u=r.filter(e=>e.toLowerCase().includes(l)).slice(0,6);return(0,N.jsxs)(`label`,{className:`dv-confirm-field ${o?`dv-confirm-field--wide`:``}`,children:[(0,N.jsxs)(`span`,{className:`dv-confirm-label`,children:[e,a?` *`:``]}),(0,N.jsxs)(`span`,{className:`dv-confirm-autocomplete`,children:[(0,N.jsx)(`input`,{className:`dv-confirm-input`,value:t,autoComplete:`off`,placeholder:i,onBlur:()=>window.setTimeout(()=>c(!1),120),onChange:e=>{n(e.target.value),c(!0)},onFocus:()=>c(!0)}),s&&u.length>0&&(0,N.jsx)(`span`,{className:`dv-confirm-options`,children:u.map(e=>(0,N.jsx)(`button`,{type:`button`,className:`dv-confirm-option`,onMouseDown:t=>{t.preventDefault(),n(e),c(!1)},children:e},e))})]})]})},ut=({leg:e})=>{let t=e.flights[0],n=e.flights[e.flights.length-1],r=e.flights.reduce((e,t)=>e+(Number(t.Duracao)||0),0),i=Math.max(e.flights.length-1,...e.flights.map(e=>Number(e.Paradas)||0)),a=i>0,o=String(e.segmentKey)===`1`,s=o?`Voo de Volta`:`Voo de Ida`,c=e.flights.map(e=>`${e.NomeCia.substring(0,2)} ${e.NumeroVoo}`).join(` + `);return(0,N.jsxs)(`div`,{className:`dv-confirm-leg ${o?`dv-confirm-leg--return`:``}`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-leg__heading`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:o?`flight_land`:`flight_takeoff`}),(0,N.jsx)(`strong`,{children:s}),(0,N.jsx)(`span`,{children:t?.SaidaDate})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-leg__content`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-route`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-airport`,children:[(0,N.jsx)(`strong`,{children:t?.SaidaTime}),(0,N.jsx)(`span`,{children:t?.CodAeroportoOrigem}),(0,N.jsx)(`small`,{children:t?.NomeAeroportoOrigem})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-route-line`,children:[(0,N.jsx)(`span`,{children:ke(r)}),(0,N.jsx)(`div`,{children:(0,N.jsx)(`span`,{className:`q-icon`,children:`flight`})}),(0,N.jsx)(`small`,{children:a?`${i} ${i===1?`conexão`:`conexões`}`:`Direto`})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-airport`,children:[(0,N.jsx)(`strong`,{children:n?.ChegadaTime}),(0,N.jsx)(`span`,{children:n?.CodAeroportoDestino}),(0,N.jsx)(`small`,{children:n?.NomeAeroportoDestino})]})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-flight-meta`,children:[(0,N.jsx)(`span`,{children:t?.NomeCia}),(0,N.jsx)(`strong`,{children:c}),(0,N.jsx)(`em`,{children:e.selection.fare.Nome})]})]})]})},dt=({title:e,subtitle:t,price:n,value:r,onDecrease:i,onIncrease:a})=>(0,N.jsxs)(`div`,{className:`dv-confirm-baggage-option`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:e}),(0,N.jsx)(`span`,{children:t}),(0,N.jsxs)(`em`,{children:[`+ `,ct(n),` por volume`]})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-stepper`,"aria-label":e,children:[(0,N.jsx)(`button`,{type:`button`,onClick:i,children:`-`}),(0,N.jsx)(`span`,{children:r}),(0,N.jsx)(`button`,{type:`button`,onClick:a,children:`+`})]})]}),ft=({policy:e,expanded:t,onToggle:n})=>{let r=e.variant===`danger`,i=`dv-auth-policy-card dv-auth-policy-card--${e.variant}`;return(0,N.jsxs)(`div`,{className:i,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-auth-policy-summary`,onClick:()=>n(e.id),children:[(0,N.jsxs)(`span`,{className:`dv-auth-policy-main`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-icon`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:e.icon})}),(0,N.jsxs)(`span`,{className:`dv-auth-policy-copy`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-title`,children:e.title}),(0,N.jsxs)(`span`,{className:`dv-auth-policy-meta`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-status`,children:e.status}),!t&&e.ariaComment&&(0,N.jsx)(`span`,{className:`dv-auth-policy-insight`,children:e.ariaComment})]})]})]}),(0,N.jsx)(`span`,{className:`dv-auth-policy-chevron ${t?`is-expanded`:``}`,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`expand_more`})})]}),t&&(0,N.jsxs)(`div`,{className:`dv-auth-policy-detail`,children:[(0,N.jsx)(`div`,{className:`dv-auth-policy-divider`}),e.ariaComment&&(0,N.jsxs)(`div`,{className:`dv-auth-policy-aria-insight`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-aria-insight__icon`,children:(0,N.jsx)(j,{size:12,strokeWidth:2.25,"aria-hidden":`true`})}),(0,N.jsxs)(`p`,{className:`dv-auth-policy-aria-insight__text`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-aria-insight__label`,children:`ARIA`}),(0,N.jsx)(`span`,{"aria-hidden":`true`,children:`\xA0·\xA0`}),e.ariaComment]})]}),e.type===`lowest-fare`?(()=>{let t=Math.max(e.details.selectedAmount,0),n=Math.max(e.details.referenceAmount,0),r=Math.max(e.details.differenceAmount,0),i=Math.max(e.details.rangeAverageAmount??0,0),a=Math.max(e.details.routeAverageAmount??0,0),o=Math.max(e.details.historicLowestAmount??0,0),s=Math.max(e.details.historicHighestAmount??0,0),c=t>0?Math.min(100,Math.max(6,Math.round(n/t*100))):100,l=t>0?Math.min(100-c,Math.max(0,Math.round(r/t*100))):0,u=e=>{let n=t-e;return Math.abs(n)<.01?`Igual à selecionada`:n>0?`Selecionada + ${ct(n)}`:`Selecionada - ${ct(Math.abs(n))}`},d=[{label:`Média da faixa`,amount:i},{label:`Média da rota`,amount:a},{label:`Menor histórico`,amount:o},{label:`Maior histórico`,amount:s}].filter(e=>e.amount>0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`dv-auth-policy-fare-head`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-kicker`,children:`Tarifa selecionada`}),(0,N.jsx)(`strong`,{className:`dv-auth-policy-value`,children:ct(t)})]}),(0,N.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-kicker`,children:r>0?`Excedido`:`Diferença`}),(0,N.jsx)(`strong`,{className:`dv-auth-policy-diff`,children:r>0?`+ ${ct(r)}`:ct(0)})]})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-bar`,"aria-hidden":`true`,children:[(0,N.jsx)(`span`,{className:`dv-auth-policy-bar__allowed`,style:{width:`${c}%`}}),(0,N.jsx)(`span`,{className:`dv-auth-policy-bar__exceeded`,style:{width:`${l}%`}})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-scale`,children:[(0,N.jsxs)(`strong`,{children:[`Menor tarifa (`,ct(n),`)`]}),(0,N.jsx)(`strong`,{children:r>0?`Acima da política`:`Dentro da política`})]}),d.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`dv-auth-policy-average-title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`bar_chart`}),`Comparações com a média`]}),(0,N.jsx)(`div`,{className:`dv-auth-policy-metrics dv-auth-policy-metrics--averages`,children:d.map(e=>(0,N.jsxs)(`div`,{className:`dv-auth-policy-metric`,children:[(0,N.jsx)(`span`,{children:e.label}),(0,N.jsx)(`strong`,{children:ct(e.amount)}),(0,N.jsx)(`small`,{children:u(e.amount)})]},e.label))})]})]})})():(()=>{let t=Math.min(100,Math.max(8,Math.round(e.details.effectiveDays/e.details.requiredDays*100)));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`dv-auth-policy-timeline`,children:[(0,N.jsxs)(`div`,{className:`dv-auth-policy-timepoint ${r?`dv-auth-policy-timepoint--alert`:``}`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`}),(0,N.jsxs)(`span`,{children:[`Compra`,(0,N.jsxs)(`strong`,{children:[e.details.effectiveDays,` d`]})]})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-track ${r?`is-danger`:``}`,children:[(0,N.jsx)(`span`,{children:r?`${e.details.missingDays} dias faltantes`:`Dentro do prazo`}),(0,N.jsx)(`span`,{className:`dv-auth-policy-track__line`,children:(0,N.jsx)(`span`,{className:`dv-auth-policy-track__fill`,style:{width:`${t}%`}})})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-timepoint`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_takeoff`}),(0,N.jsxs)(`span`,{children:[`Exigido`,(0,N.jsxs)(`strong`,{children:[e.details.requiredDays,` d`]})]})]})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-metrics`,children:[(0,N.jsxs)(`div`,{className:`dv-auth-policy-metric`,children:[(0,N.jsx)(`span`,{children:`Antecedência da compra`}),(0,N.jsxs)(`strong`,{children:[e.details.effectiveDays,` dias`]})]}),(0,N.jsxs)(`div`,{className:`dv-auth-policy-metric`,children:[(0,N.jsx)(`span`,{children:`Mínimo exigido`}),(0,N.jsxs)(`strong`,{children:[e.details.requiredDays,` dias`]})]})]})]})})()]})]})},pt=({selectedFares:e,flightsMap:t,searchCriteria:n,onBack:r,onChooseAriaRecommendation:i})=>{let[a,o]=(0,C.useState)(``),[s,c]=(0,C.useState)({standard:0,special:0}),[l,u]=(0,C.useState)(()=>lt(n)),[d,f]=(0,C.useState)(``),[p,m]=(0,C.useState)(!1),[h,g]=(0,C.useState)(null),[_,v]=(0,C.useState)({company:`Tech Solutions S.A.`,costCenter:`CC-4092 (Desenvolvimento)`,project:`PRJ-Nexus Implantação`,activity:`Consultoria Técnica`,reason:`Reunião Presencial com Cliente`,consultant:`Marcos Silva`,paymentMethod:`Faturado (Agência)`}),y=Qe(e),b=F(y),x=st(y),S=l.filter(e=>!e.anonymous),w=Ke(n),ee=S.reduce((e,t)=>e+t.quantity,0),te=Math.max(0,w-ee),T=Math.max(1,w,ee);S.map(e=>e.name).join(`, `);let D=$e(y),ne=D*T,O=58*T,re=35*T,ie=48*T,ae=tt(e,t)||D,oe=(s.standard*120+s.special*250)*T,k=a?45*T:0,A=D+58+35+48+s.standard*120+s.special*250+(a?45:0),se=ne+O+re+ie+oe+k,ce=P(ne),le=P(O),ue=P(re),j=P(ie),M=P(oe),de=P(k),fe=P(se),pe=y.some(nt),me=pe?D:Math.max(1,Math.round(Math.min(ae||D,D*.88)*100)/100),he=Math.max(0,D-me),ge=!pe&&he>.01?rt(y,me):null,_e=Math.round(D*.96*100)/100,ve=Math.round(D*1.08*100)/100,ye=Math.round(me*.94*100)/100,be=Math.round(ve*1.18*100)/100,xe=[`Tech Solutions S.A.`,`Acme Corp`,`Global Industries`,`Nexus Tech`],Se=[`CC-4092 (Desenvolvimento)`,`CC-1021 (Marketing)`,`CC-3055 (Vendas)`,`CC-9901 (RH)`],Ce=[`PRJ-Nexus Implantação`,`PRJ-Alpha Upgrade`,`PRJ-Omega Migration`,`Operação Padrão`],we=[`Marcos Silva`,`Ana Costa`,`Julio Cesar`,`Fernanda Lima`,`Felipe Santos`],Te=[`Reunião Presencial com Cliente`,`Treinamento de Equipe`,`Evento Corporativo`,`Visita Técnica`,`Implantação de Sistema`],Ee=[`Matheus Castro (Você)`,`Ana Costa`,`Julio Cesar`,`Fernanda Lima`,`Roberto Alves`,`Carla Dias`].filter(e=>e.toLowerCase().includes(d.trim().toLowerCase())&&!l.some(t=>t.name===e)),De=[{id:`lowest-fare`,type:`lowest-fare`,title:`Menor tarifa`,status:he>.01?`Violada`:`Cumprida`,variant:he>.01?`danger`:`success`,icon:he>.01?`warning`:`check_circle`,description:he>.01?`Tarifa escolhida ${ct(he)} acima da menor opção carregada.`:`Tarifa escolhida alinhada à menor opção carregada.`,ariaComment:he>.01?`Recomendo justificar esta escolha ou trocar para a menor tarifa, pois há alternativa mais econômica para o mesmo trecho.`:`Não identifiquei oportunidade relevante de economia para esta seleção.`,details:{selectedAmount:D,referenceAmount:me,differenceAmount:he,rangeAverageAmount:_e,routeAverageAmount:ve,historicLowestAmount:ye,historicHighestAmount:be}},{id:`advance`,type:`advance`,title:`Antecedência mínima`,status:`Cumprida`,variant:`success`,icon:`event_available`,description:`Compra realizada com 18 dias de antecedência, acima do mínimo exigido.`,ariaComment:`Confirmo que a antecedência está dentro do prazo esperado para compra corporativa.`,details:{effectiveDays:18,requiredDays:15,missingDays:0}}],Oe=(e,t)=>{v(n=>({...n,[e]:t}))},ke=(e,t)=>{c(n=>({...n,[e]:Math.max(0,n[e]+t)}))},Ae=e=>{let t=e.trim();!t||l.some(e=>e.name.toLowerCase()===t.toLowerCase())||(u(e=>[...e,{id:`confirmation-${Date.now()}`,name:t,quantity:1,shareWithAirline:!0}]),f(``),m(!1))},je=e=>{u(t=>t.length<=1?t:t.filter(t=>t.id!==e))},Me=e=>{u(t=>t.map(t=>t.id===e?{...t,shareWithAirline:!t.shareWithAirline}:t))},Ne=e=>{e.key===`Enter`&&(e.preventDefault(),Ae(Ee[0]||d))},Pe=e=>{g(t=>t===e?null:e)};return(0,N.jsx)(`main`,{className:`dv-summary-screen`,children:(0,N.jsxs)(`div`,{className:`dv-summary-shell`,children:[(0,N.jsxs)(`section`,{className:`dv-summary-hero`,children:[(0,N.jsxs)(`div`,{className:`dv-summary-heading`,children:[(0,N.jsx)(`h1`,{className:`dv-summary-title`,children:`Revisão e Confirmação`}),(0,N.jsx)(`p`,{className:`dv-summary-subtitle`,children:`Verifique os dados antes de finalizar a emissão.`})]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-summary-back-button`,onClick:r,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`arrow_back`}),`Voltar`]})]}),(0,N.jsxs)(`div`,{className:`dv-summary-layout`,children:[(0,N.jsxs)(`section`,{className:`dv-summary-main`,children:[ge&&(0,N.jsx)(`section`,{className:`dv-summary-aria-card aria-card`,children:(0,N.jsxs)(`div`,{className:`aria-card__body`,children:[(0,N.jsxs)(`div`,{className:`aria-card__identity`,children:[(0,N.jsx)(`span`,{className:`aria-card__icon`,children:(0,N.jsx)(`span`,{className:`q-icon`,style:{fontSize:24},children:`auto_awesome`})}),(0,N.jsxs)(`span`,{className:`aria-card__copy`,children:[(0,N.jsx)(`span`,{className:`aria-card__title`,children:ge.title}),(0,N.jsx)(`span`,{className:`aria-card__subtitle`,children:ge.subtitle})]})]}),(0,N.jsxs)(`button`,{type:`button`,className:`aria-card__toggle`,onClick:()=>i?.(ge.selection),children:[`Escolher este voo `,(0,N.jsx)(`span`,{className:`q-icon`,children:`arrow_forward`})]}),(0,N.jsxs)(`ul`,{className:`aria-insights`,children:[(0,N.jsxs)(`li`,{className:`aria-insights__chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`paid`}),ct(ge.savings),` mais barato`]}),(0,N.jsxs)(`li`,{className:`aria-insights__chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`}),ge.schedule]})]})]})}),(0,N.jsxs)(`section`,{className:`dv-summary-policy-section`,"aria-labelledby":`summary-policy-title`,children:[(0,N.jsxs)(`div`,{className:`dv-summary-policy-heading`,id:`summary-policy-title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`business`}),`Políticas de Viagem`]}),(0,N.jsx)(`div`,{className:`dv-policy-list`,children:De.map(e=>(0,N.jsx)(ft,{policy:e,expanded:h===e.id,onToggle:Pe},e.id))})]}),(0,N.jsxs)(`article`,{className:`dv-summary-card`,children:[(0,N.jsx)(`header`,{className:`dv-summary-card__header`,children:(0,N.jsxs)(`div`,{className:`dv-summary-card__title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_takeoff`}),` Itinerário Selecionado`]})}),(0,N.jsxs)(`div`,{className:`dv-summary-card__body dv-summary-card__body--flush`,children:[b.map(e=>(0,N.jsx)(ut,{leg:e},e.key)),(0,N.jsxs)(`div`,{className:`dv-confirm-inclusions`,children:[(0,N.jsx)(`h3`,{children:`O que esta tarifa inclui por passageiro:`}),(0,N.jsx)(`div`,{className:`dv-inclusion-grid`,children:x.map(e=>(0,N.jsxs)(`div`,{className:`dv-inclusion-item ${e.included?`is-included`:`is-not-included`}`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:e.included?`check_circle`:`cancel`}),(0,N.jsxs)(`span`,{className:`dv-inclusion-label`,children:[(0,N.jsx)(`span`,{children:e.label}),e.segmentChip&&(0,N.jsx)(`span`,{className:`dv-inclusion-chip`,children:e.segmentChip})]})]},e.label))})]})]})]}),(0,N.jsxs)(`section`,{className:`dv-summary-flat-section`,"aria-labelledby":`summary-addons-title`,children:[(0,N.jsxs)(`div`,{className:`dv-summary-flat-heading`,id:`summary-addons-title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`luggage`}),`Serviços Adicionais`]}),(0,N.jsxs)(`div`,{className:`dv-summary-flat-body`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-baggage-box`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-addon-heading`,children:[(0,N.jsx)(`span`,{className:`dv-confirm-addon-icon`,children:(0,N.jsx)(E,{"aria-hidden":`true`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Adicionar Bagagem Extra`}),(0,N.jsx)(`span`,{children:`Leve malas extras ou equipamentos especiais com você.`})]})]}),(0,N.jsx)(dt,{title:`Bagagem Despachada (Até 23kg)`,subtitle:`Mala padrão transportada no porão do avião.`,price:120,value:s.standard,onDecrease:()=>ke(`standard`,-1),onIncrease:()=>ke(`standard`,1)}),(0,N.jsx)(dt,{title:`Bagagem Especial`,subtitle:`Pranchas, bicicletas, grandes instrumentos musicais.`,price:250,value:s.special,onDecrease:()=>ke(`special`,-1),onIncrease:()=>ke(`special`,1)})]}),(0,N.jsx)(`div`,{className:`dv-confirm-seat-box`,children:(0,N.jsxs)(`div`,{className:`dv-confirm-seat-top`,children:[(0,N.jsxs)(`div`,{className:`dv-confirm-addon-heading`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`airline_seat_recline_normal`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`strong`,{children:`Marcação de Assento`}),(0,N.jsx)(`span`,{children:`Escolha onde sentar para ter mais conforto.`})]})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-seat-actions`,children:[(0,N.jsx)(`span`,{className:`dv-confirm-seat-price`,children:`A partir de R$ 45`}),(0,N.jsx)(`button`,{type:`button`,className:`dv-confirm-seat-action ${a?`is-selected`:``}`,onClick:()=>o(e=>e?``:`selected`),children:a?`Selecionado`:`Marcar`})]})]})})]})]}),(0,N.jsxs)(`article`,{className:`dv-summary-card`,children:[(0,N.jsx)(`header`,{className:`dv-summary-card__header`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`dv-summary-card__title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`assignment`}),` Dados da Solicitação`]}),(0,N.jsx)(`p`,{className:`dv-summary-card__subtitle`,children:`Preencha as informações obrigatórias para aprovação e faturamento desta viagem.`})]})}),(0,N.jsxs)(`div`,{className:`dv-summary-card__body`,children:[(0,N.jsx)(`h3`,{className:`dv-confirm-subheading`,children:`Informações Faturáveis`}),(0,N.jsxs)(`div`,{className:`dv-confirm-form-grid`,children:[(0,N.jsx)(I,{label:`Empresa`,value:_.company,onChange:e=>Oe(`company`,e),options:xe,placeholder:`Buscar empresa...`,required:!0}),(0,N.jsx)(I,{label:`Centro de Custo`,value:_.costCenter,onChange:e=>Oe(`costCenter`,e),options:Se,placeholder:`Buscar CC...`,required:!0}),(0,N.jsx)(I,{label:`Projeto`,value:_.project,onChange:e=>Oe(`project`,e),options:Ce,placeholder:`Buscar projeto...`}),(0,N.jsx)(I,{label:`Consultor`,value:_.consultant,onChange:e=>Oe(`consultant`,e),options:we,placeholder:`Buscar consultor...`,required:!0}),(0,N.jsx)(I,{label:`Motivo da Viagem`,value:_.reason,onChange:e=>Oe(`reason`,e),options:Te,placeholder:`Descreva ou selecione o motivo...`,required:!0,wide:!0}),(0,N.jsxs)(`label`,{className:`dv-confirm-field`,children:[(0,N.jsx)(`span`,{className:`dv-confirm-label`,children:`Atividade`}),(0,N.jsxs)(`select`,{className:`dv-confirm-input`,value:_.activity,onChange:e=>Oe(`activity`,e.target.value),children:[(0,N.jsx)(`option`,{children:`Consultoria Técnica`}),(0,N.jsx)(`option`,{children:`Reunião Comercial`}),(0,N.jsx)(`option`,{children:`Treinamento`}),(0,N.jsx)(`option`,{children:`Evento / Congresso`})]})]}),(0,N.jsxs)(`label`,{className:`dv-confirm-field`,children:[(0,N.jsx)(`span`,{className:`dv-confirm-label`,children:`Forma de Pagamento *`}),(0,N.jsxs)(`select`,{className:`dv-confirm-input`,value:_.paymentMethod,onChange:e=>Oe(`paymentMethod`,e.target.value),children:[(0,N.jsx)(`option`,{children:`Faturado (Agência)`}),(0,N.jsx)(`option`,{children:`Cartão de Crédito Corporativo`}),(0,N.jsx)(`option`,{children:`Reembolso`})]})]})]}),(0,N.jsxs)(`h3`,{className:`dv-confirm-subheading`,children:[`Passageiros Vinculados (`,T,`)`]}),(0,N.jsxs)(`div`,{className:`dv-confirm-passenger-picker`,children:[(0,N.jsx)(`input`,{className:`dv-confirm-input`,value:d,placeholder:`Adicionar novo passageiro...`,onBlur:()=>window.setTimeout(()=>m(!1),120),onChange:e=>{f(e.target.value),m(!0)},onFocus:()=>m(!0),onKeyDown:Ne}),p&&Ee.length>0&&(0,N.jsx)(`span`,{className:`dv-confirm-options`,children:Ee.map(e=>(0,N.jsxs)(`button`,{type:`button`,className:`dv-confirm-option`,onMouseDown:t=>{t.preventDefault(),Ae(e)},children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`person`}),e]},e))})]}),(0,N.jsxs)(`div`,{className:`dv-confirm-passenger-list`,children:[S.map(e=>(0,N.jsxs)(`div`,{className:`dv-confirm-passenger-card`,children:[(0,N.jsxs)(`span`,{className:`dv-confirm-passenger-identity`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`person`}),(0,N.jsx)(`strong`,{children:e.name})]}),(0,N.jsxs)(`label`,{className:`dv-confirm-passenger-share`,children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:e.shareWithAirline!==!1,onChange:()=>Me(e.id)}),(0,N.jsx)(`span`,{children:`Compartilhar dados com a companhia aérea`})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-confirm-passenger-remove`,"aria-label":`Remover ${e.name}`,onClick:()=>je(e.id),children:(0,N.jsx)(`span`,{className:`q-icon`,children:`cancel`})})]},e.id)),Array.from({length:te},(e,t)=>(0,N.jsxs)(`span`,{className:`dv-confirm-passenger-chip dv-confirm-passenger-chip--pending`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`person_add`}),`Aguardando passageiro`]},`pending-passenger-${t}`))]})]})]})]}),(0,N.jsx)(`aside`,{className:`dv-summary-side`,children:(0,N.jsxs)(`article`,{className:`dv-summary-card dv-summary-card--totals`,children:[(0,N.jsx)(`header`,{className:`dv-summary-card__header`,children:(0,N.jsxs)(`div`,{className:`dv-summary-card__title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`payments`}),` Resumo da Compra`]})}),(0,N.jsxs)(`div`,{className:`dv-summary-card__body`,children:[(0,N.jsxs)(`div`,{className:`dv-totals-list`,children:[(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`Tarifa`}),(0,N.jsxs)(`strong`,{children:[`R$ `,ce.integer,`,`,ce.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`Taxas de embarque`}),(0,N.jsxs)(`strong`,{children:[`R$ `,le.integer,`,`,le.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`RAC`}),(0,N.jsxs)(`strong`,{children:[`R$ `,ue.integer,`,`,ue.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`Taxa de serviço`}),(0,N.jsxs)(`strong`,{children:[`R$ `,j.integer,`,`,j.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`Bagagem adicional`}),(0,N.jsxs)(`strong`,{children:[`R$ `,M.integer,`,`,M.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row`,children:[(0,N.jsx)(`span`,{children:`Assento`}),(0,N.jsxs)(`strong`,{children:[`R$ `,de.integer,`,`,de.decimals]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row dv-total-row--muted`,children:[(0,N.jsx)(`span`,{children:`Subtotal por passageiro`}),(0,N.jsx)(`strong`,{children:ct(A)})]}),(0,N.jsxs)(`div`,{className:`dv-total-row dv-total-row--muted`,children:[(0,N.jsx)(`span`,{children:`Número de passageiros`}),(0,N.jsxs)(`strong`,{children:[`x `,T]})]}),(0,N.jsxs)(`div`,{className:`dv-total-row dv-total-row--grand`,children:[(0,N.jsx)(`span`,{children:`Total Geral`}),(0,N.jsxs)(`strong`,{children:[`R$ `,fe.integer,`,`,fe.decimals]})]})]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-summary-final-btn`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`done_all`}),`Confirmar Reserva`]}),(0,N.jsx)(`p`,{className:`dv-confirm-privacy`,children:`O compartilhamento de dados com a companhia aérea é definido individualmente em cada passageiro vinculado.`})]})]})})]})]})})},mt=({flight:e,onSelectFare:t,selectedFareKeys:n})=>{let[r,i]=(0,C.useState)(null),a=e.isCombinado,o=e.Voos[0].NomeCia,s=e.Voos[0].NumeroVoo,c=e=>i(t=>t===e?null:e);return(0,N.jsxs)(`article`,{className:`flight-card-container ${a?`combined-card`:``}`,children:[(0,N.jsxs)(`header`,{className:`flight-header-modern selected`,children:[(0,N.jsx)(`div`,{className:`flight-details`,children:(0,N.jsxs)(`div`,{className:`airline-info`,children:[(0,N.jsx)(`span`,{className:`q-icon preferred-star`,children:`star`}),(0,N.jsx)(`div`,{className:`airline-logo-wrapper`,children:(0,N.jsx)(Le,{code:e.CodSisRes,name:o})}),(0,N.jsx)(`div`,{className:`vertical-divider`}),a?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`span`,{className:`q-chip connection-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight`}),` LA-3339`]}),(0,N.jsxs)(`span`,{className:`q-chip connection-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`connecting_airports`}),` G3-1683`]})]}):(0,N.jsxs)(`span`,{className:`q-chip connection-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:e.Voos.length>1?`connecting_airports`:`flight`}),` `,o.substring(0,2),`-`,s]}),(0,N.jsx)(`div`,{className:`vertical-divider`}),(0,N.jsxs)(`div`,{className:`info-badges`,children:[a&&(0,N.jsxs)(`span`,{className:`q-chip roundtrip-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`autorenew`}),(0,N.jsx)(`span`,{className:`badge-text`,children:`Ida e volta`})]}),e.BuyNow&&(0,N.jsxs)(`span`,{className:`q-chip buy-now-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`bolt`}),(0,N.jsx)(`span`,{className:`badge-text`,children:`Emissão Imediata`})]}),(0,N.jsxs)(`span`,{className:`q-chip agency-badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`business`}),(0,N.jsx)(`span`,{className:`badge-text`,children:`Reserve Corp`})]})]})]})}),(0,N.jsxs)(`div`,{className:`flight-actions`,children:[(0,N.jsx)(`button`,{type:`button`,className:`statistics-btn`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`bar_chart`})}),(0,N.jsxs)(`div`,{className:`booking-info`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`bookmark_border`}),(0,N.jsxs)(`span`,{children:[a?`Combinado`:o,` Booking`]})]}),(0,N.jsxs)(`label`,{className:`selection-checkbox`,children:[(0,N.jsx)(`input`,{type:`checkbox`}),(0,N.jsx)(`span`,{className:`checkbox-ui`})]})]})]}),(0,N.jsx)(`div`,{className:`flight-card-section-divider`}),(0,N.jsx)(`section`,{className:`flight-segments`,children:e.Voos.map((e,t)=>(0,N.jsxs)(`div`,{className:`segment`,children:[(0,N.jsxs)(`div`,{className:`airport origin`,children:[(0,N.jsxs)(`div`,{className:`airport-time`,children:[(0,N.jsx)(`span`,{className:`q-icon period-icon`,children:e.SaidaTime>`18:00`||e.SaidaTime<`06:00`?`dark_mode`:`wb_sunny`}),e.SaidaTime]}),(0,N.jsx)(`div`,{className:`airport-code`,children:e.CodAeroportoOrigem}),(0,N.jsx)(`div`,{className:`airport-date`,children:e.SaidaDate}),(0,N.jsx)(`div`,{className:`airport-name`,children:e.NomeAeroportoOrigem})]}),(0,N.jsxs)(`div`,{className:`route-container`,children:[(0,N.jsxs)(`div`,{className:`route-visual`,children:[(0,N.jsx)(`div`,{className:`dot start`}),(0,N.jsx)(`div`,{className:`line`,children:e.Paradas===0?(0,N.jsx)(`span`,{className:`q-icon plane-icon`,style:{"--plane-position":`50%`},children:`flight`}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`q-icon plane-icon`,style:{"--plane-position":`33%`},children:`flight`}),(0,N.jsx)(`span`,{className:`q-icon plane-icon`,style:{"--plane-position":`66%`},children:`flight`})]})}),(0,N.jsx)(`div`,{className:`dot end`})]}),(0,N.jsxs)(`div`,{className:`route-details`,children:[(0,N.jsxs)(`div`,{className:`duration`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`}),ke(e.Duracao)]}),(0,N.jsxs)(`div`,{className:`stops`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`layers`}),e.Paradas===0?(0,N.jsx)(`span`,{className:`direct`,children:`Direto`}):`${e.Paradas} parada`]})]})]}),(0,N.jsxs)(`div`,{className:`airport destination`,children:[(0,N.jsxs)(`div`,{className:`airport-time`,children:[(0,N.jsx)(`span`,{className:`q-icon period-icon`,children:e.ChegadaTime>`18:00`||e.ChegadaTime<`06:00`?`dark_mode`:`wb_sunny`}),e.ChegadaTime]}),(0,N.jsx)(`div`,{className:`airport-code`,children:e.CodAeroportoDestino}),(0,N.jsx)(`div`,{className:`airport-date`,children:e.ChegadaDate}),(0,N.jsx)(`div`,{className:`airport-name`,children:e.NomeAeroportoDestino})]}),(0,N.jsxs)(`aside`,{className:`stats-column`,children:[(0,N.jsx)(`div`,{className:`stats-divider`}),(0,N.jsxs)(`div`,{className:`stats-triangle-layout`,children:[(0,N.jsxs)(`div`,{className:`stat-card-top`,children:[(0,N.jsx)(`div`,{className:`stat-card-icon-top`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-card-label-top`,children:`Atraso Médio`}),(0,N.jsxs)(`div`,{className:`stat-card-value-top`,children:[Math.floor(Math.random()*10)+5,` `,(0,N.jsx)(`span`,{className:`stat-card-unit-top`,children:`min`})]})]})]}),(0,N.jsxs)(`div`,{className:`stat-cards-bottom`,children:[(0,N.jsxs)(`div`,{className:`stat-card-bottom`,children:[(0,N.jsx)(`div`,{className:`stat-card-icon-bottom`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`warning`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-card-label-bottom`,children:`Atrasos`}),(0,N.jsxs)(`div`,{className:`stat-card-value-bottom`,children:[(Math.random()*15).toFixed(1),`%`]})]})]}),(0,N.jsxs)(`div`,{className:`stat-card-bottom`,children:[(0,N.jsx)(`div`,{className:`stat-card-icon-bottom`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`cancel`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-card-label-bottom`,children:`Cancelados`}),(0,N.jsxs)(`div`,{className:`stat-card-value-bottom`,children:[(Math.random()*2).toFixed(1),`%`]})]})]})]})]})]})]},t))}),(0,N.jsx)(`div`,{className:`flight-card-section-divider`}),(0,N.jsx)(`section`,{className:`flight-fares`,children:(0,N.jsxs)(`div`,{className:`fare-type-row`,children:[(0,N.jsx)(`div`,{className:`fare-type-icon-wrapper`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`local_offer`})}),(0,N.jsx)(`div`,{className:`fares-horizontal-container`,children:e.Tarifas.map((i,o)=>{let s=r===i.IdTarifa,l=P(i.Valor),u=o===0,d=i.Bagage!==`0`&&o===1,f=i.Bagage!==`0`,p=n?.has(Oe(e,i));return(0,N.jsxs)(`button`,{type:`button`,className:`fare-card-compact ${u?`lowest-fare`:``} ${d?`lowest-baggage`:``} ${s?`is-expanded`:``} ${p?`is-selected`:``}`,onClick:()=>{c(i.IdTarifa),t?.(e,i)},children:[u&&(0,N.jsx)(`span`,{className:`best-fare-badge`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`attach_money`})}),d&&(0,N.jsx)(`span`,{className:`best-fare-badge baggage-fare`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`luggage`})}),(0,N.jsxs)(`span`,{className:`fare-name-with-class`,children:[(0,N.jsx)(`span`,{className:`fare-name-text`,children:i.Nome}),(0,N.jsx)(`span`,{className:`class-badge`,children:i.Classe})]}),(0,N.jsxs)(`span`,{className:`benefits-icons-inline`,children:[(0,N.jsx)(`span`,{className:`q-icon ${f?``:`benefit-disabled`}`,children:`luggage`}),(0,N.jsx)(`span`,{className:`q-icon`,children:`assignment_return`}),(0,N.jsx)(`span`,{className:`q-icon ${!f&&!a?`benefit-disabled`:``}`,children:`airline_seat_recline_normal`}),(0,N.jsx)(E,{className:`benefit-lucide-icon`,"aria-hidden":`true`})]}),(0,N.jsxs)(`span`,{className:`fare-price-row`,children:[(0,N.jsxs)(`span`,{className:`fare-price-compact`,children:[(0,N.jsx)(`span`,{className:`currency-small`,children:e.Moeda}),(0,N.jsx)(`span`,{className:`amount-large`,children:l.integer}),(0,N.jsxs)(`span`,{className:`cents-small`,children:[`,`,l.decimals]})]}),(0,N.jsx)(`span`,{className:`expand-btn-inline`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:s?`expand_less`:`expand_more`})})]}),(0,N.jsx)(`span`,{className:`expanded-content`,children:(0,N.jsxs)(`span`,{className:`benefits-detailed`,children:[(0,N.jsxs)(`span`,{className:`benefit-item ${f?`included`:``}`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:f?`check_circle`:`cancel`}),(0,N.jsxs)(`span`,{className:`benefit-content`,children:[(0,N.jsx)(`span`,{className:`benefit-name`,children:`Bagagem despachada`}),(0,N.jsx)(`span`,{className:`benefit-obs`,children:f?`1 peça de até 23kg`:`Não inclusa`})]})]}),(0,N.jsxs)(`span`,{className:`benefit-item ${f?`included`:``}`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:f?`check_circle`:`cancel`}),(0,N.jsxs)(`span`,{className:`benefit-content`,children:[(0,N.jsx)(`span`,{className:`benefit-name`,children:`Marcação de assento`}),(0,N.jsx)(`span`,{className:`benefit-obs`,children:f?`Inclusa`:`Cobrada à parte`})]})]})]})})]},i.IdTarifa)})})]})})]})},ht=({count:e})=>(0,N.jsx)(`span`,{className:`dv-hotel-stars`,"aria-label":`${e} estrelas`,children:Array.from({length:5}).map((t,n)=>(0,N.jsx)(M,{size:14,fill:n<e?`currentColor`:`none`,color:n<e?`#f5a623`:`#d1d5db`},n))}),gt=({searchCriteria:e})=>{let[t,n]=(0,C.useState)({stars:!0,price:!0,amenities:!0,location:!1}),[r,i]=(0,C.useState)(Te[0]?.idReferencia||null),[a,o]=(0,C.useState)(null),s=e=>{n(t=>({...t,[e]:!t[e]}))},c=({id:e,title:n,icon:r,children:i})=>(0,N.jsxs)(`section`,{className:`dv-hotel-filter-section`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-hotel-filter-header`,"aria-expanded":t[e],onClick:()=>s(e),children:[(0,N.jsxs)(`strong`,{children:[r&&(0,N.jsx)(r,{size:17}),` `,n]}),(0,N.jsx)(`span`,{className:`q-icon`,children:t[e]?`expand_less`:`expand_more`})]}),t[e]&&(0,N.jsx)(`div`,{className:`dv-hotel-filter-body`,children:i})]}),l=({label:e,count:t,icon:n})=>(0,N.jsxs)(`label`,{className:`dv-hotel-check`,children:[(0,N.jsxs)(`span`,{className:`dv-hotel-check-main`,children:[(0,N.jsx)(`input`,{type:`checkbox`}),n&&(0,N.jsx)(n,{size:14}),(0,N.jsx)(`span`,{children:e})]}),t!==void 0&&(0,N.jsx)(`span`,{className:`dv-hotel-check-count`,children:t})]});return(0,N.jsx)(`section`,{className:`dv-inline-results dv-inline-results--availability`,children:(0,N.jsx)(`div`,{className:`dv-hotel-results`,children:(0,N.jsxs)(`div`,{className:`dv-hotel-layout`,children:[(0,N.jsx)(`aside`,{className:`dv-hotel-sidebar`,children:(0,N.jsxs)(`div`,{className:`dv-hotel-filter-card`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-filter-head`,children:[(0,N.jsxs)(`span`,{className:`dv-hotel-filter-title`,children:[(0,N.jsx)(ie,{size:18}),` Filtros`]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-hotel-clear`,children:`Limpar tudo`})]}),(0,N.jsxs)(c,{id:`stars`,title:`Categoria`,icon:M,children:[(0,N.jsx)(l,{label:(0,N.jsx)(ht,{count:5}),count:1}),(0,N.jsx)(l,{label:(0,N.jsx)(ht,{count:4}),count:2}),(0,N.jsx)(l,{label:(0,N.jsx)(ht,{count:3}),count:1})]}),(0,N.jsxs)(c,{id:`price`,title:`Faixa de preco`,icon:re,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-price-row`,children:[(0,N.jsx)(`span`,{children:`R$ 50`}),(0,N.jsx)(`strong`,{children:`R$ 1.500`})]}),(0,N.jsx)(`input`,{type:`range`,min:`50`,max:`2000`,value:`1500`,readOnly:!0,className:`dv-range-input`})]}),(0,N.jsxs)(c,{id:`amenities`,title:`Comodidades`,icon:O,children:[(0,N.jsx)(l,{label:`Cafe da manha`,count:3,icon:O}),(0,N.jsx)(l,{label:`Cama de casal`,count:4,icon:D}),(0,N.jsx)(l,{label:`Wi-Fi gratis`,count:4}),(0,N.jsx)(l,{label:`Piscina`,count:2})]}),(0,N.jsxs)(c,{id:`location`,title:`Bairro / Regiao`,icon:k,children:[(0,N.jsx)(l,{label:`Barra da Tijuca`,count:3}),(0,N.jsx)(l,{label:`Flamengo`,count:1}),(0,N.jsx)(l,{label:`Copacabana`}),(0,N.jsx)(l,{label:`Ipanema`})]})]})}),(0,N.jsxs)(`main`,{className:`dv-hotel-content`,children:[(0,N.jsxs)(`section`,{className:`dv-hotel-progress`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-progress-summary`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-progress-main`,children:[(0,N.jsx)(`span`,{className:`dv-hotel-progress-icon`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`check`})}),(0,N.jsxs)(`span`,{className:`dv-hotel-progress-copy`,children:[(0,N.jsx)(`strong`,{children:`Busca concluida`}),(0,N.jsxs)(`span`,{children:[we.fontesConcluidas,` de `,we.totalFontes,` fontes pesquisadas (`,we.fontesSucesso,` com sucesso)`]})]})]}),(0,N.jsx)(`div`,{className:`dv-hotel-progress-bar`,children:(0,N.jsx)(`div`,{className:`dv-hotel-progress-fill`,style:{width:`${we.progressoPercentual}%`}})})]}),(0,N.jsx)(`div`,{className:`dv-hotel-provider-grid`,children:we.fontes.map(e=>{let t=e.status===`Concluida`;return(0,N.jsxs)(`div`,{className:`dv-hotel-provider`,title:e.erro||``,children:[(0,N.jsxs)(`span`,{className:`dv-hotel-provider-name`,children:[`VIA `,e.codSisRes]}),(0,N.jsxs)(`span`,{className:`dv-hotel-provider-status dv-hotel-provider-status--${t?`success`:`failed`}`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:t?`check_circle`:`info`}),t?`${e.quantidade} hoteis`:`Falha`]})]},e.codSisRes)})})]}),(0,N.jsxs)(`div`,{className:`dv-hotel-results-head`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h2`,{children:[`Hoteis em `,e.hotelDestination||`Rio de Janeiro`]}),(0,N.jsxs)(`p`,{children:[`Encontramos `,Te.length,` opcoes disponiveis para voce`]})]}),(0,N.jsxs)(`select`,{className:`dv-sort-select`,defaultValue:`price`,children:[(0,N.jsx)(`option`,{value:`price`,children:`Menor preco`}),(0,N.jsx)(`option`,{value:`recommended`,children:`Mais recomendados`}),(0,N.jsx)(`option`,{value:`stars`,children:`Maior categoria`})]})]}),(0,N.jsx)(`div`,{className:`dv-hotel-list`,children:Te.map(e=>{let t=e.violouPolitica&&e.tratamento===`Bloqueio`,n=r===e.idReferencia,s=a?.hotelId===e.idReferencia,c=e.ofertas.filter(e=>!(e.violouPolitica&&e.tratamento===`Bloqueio`)),l=Math.min(...c.map(e=>e.preco));return(0,N.jsxs)(`article`,{className:`dv-hotel-card ${t?`is-blocked`:``} ${s?`is-selected`:``}`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-card-main`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-image`,children:[(0,N.jsx)(`img`,{src:e.imagem,alt:e.nomeHotel}),e.marcadores.includes(`MenorDiaria`)&&(0,N.jsx)(`span`,{className:`dv-hotel-badge`,children:`Menor tarifa`})]}),(0,N.jsx)(`div`,{className:`dv-hotel-info`,children:(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`dv-hotel-title-row`,children:[(0,N.jsx)(`h3`,{children:e.nomeHotel}),(0,N.jsx)(ht,{count:e.categoria})]}),(0,N.jsxs)(`div`,{className:`dv-hotel-address`,children:[(0,N.jsx)(k,{size:14}),` `,(0,N.jsx)(`span`,{children:e.endereco})]}),(0,N.jsxs)(`div`,{className:`dv-hotel-tags`,children:[e.marcadores.includes(`OfereceCafeDaManha`)&&(0,N.jsxs)(`span`,{className:`dv-hotel-tag dv-hotel-tag--green`,children:[(0,N.jsx)(O,{size:13}),` Cafe da manha`]}),(0,N.jsxs)(`span`,{className:`dv-hotel-tag`,children:[(0,N.jsx)(D,{size:13}),` Quarto padrao`]})]}),e.violouPolitica&&(0,N.jsxs)(`span`,{className:`dv-hotel-policy dv-hotel-policy--${e.tratamento===`Bloqueio`?`danger`:`warning`}`,children:[e.tratamento===`Bloqueio`?(0,N.jsx)(le,{size:14}):(0,N.jsx)(ae,{size:14}),e.motivoViolacao]})]})}),(0,N.jsxs)(`div`,{className:`dv-hotel-action`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:`dv-hotel-price-label`,children:`A partir de`}),(0,N.jsx)(`div`,{className:`dv-hotel-price`,children:Ae(e.menorDiaria)}),(0,N.jsx)(`span`,{className:`dv-hotel-tax`,children:`Taxas inclusas`}),e.ofertas.length>1&&(0,N.jsxs)(`span`,{className:`dv-hotel-provider-count`,children:[(0,N.jsx)(A,{size:12}),` `,e.ofertas.length,` fornecedores`]})]}),(0,N.jsxs)(`button`,{type:`button`,disabled:t,className:`dv-hotel-action-btn ${n?`is-muted`:``}`,onClick:()=>i(n?null:e.idReferencia),children:[t?`Nao permitido`:n?`Fechar opcoes`:`Ver ${e.ofertas.length} opcoes`,!t&&(0,N.jsx)(`span`,{className:`q-icon`,children:n?`expand_less`:`expand_more`})]})]})]}),n&&!t&&(0,N.jsxs)(`div`,{className:`dv-hotel-offers`,children:[(0,N.jsx)(`h4`,{children:`Escolha sua oferta`}),(0,N.jsx)(`div`,{className:`dv-hotel-offer-list`,children:e.ofertas.map(t=>{let n=t.violouPolitica&&t.tratamento===`Bloqueio`,r=a?.offerId===t.id,i=t.preco===l&&!n;return(0,N.jsxs)(`div`,{className:`dv-hotel-offer ${i?`is-best`:``} ${r?`is-selected`:``}`,children:[(0,N.jsxs)(`div`,{className:`dv-hotel-offer-provider`,children:[(0,N.jsxs)(`span`,{children:[`Operado por `,(0,N.jsx)(`strong`,{children:t.codSisRes})]}),i&&(0,N.jsxs)(`span`,{className:`dv-hotel-best`,children:[(0,N.jsx)(j,{size:10}),` Melhor oferta`]}),t.violouPolitica&&(0,N.jsxs)(`span`,{className:`dv-hotel-policy dv-hotel-policy--${t.tratamento===`Bloqueio`?`danger`:`warning`}`,children:[t.tratamento===`Bloqueio`?(0,N.jsx)(le,{size:12}):(0,N.jsx)(ae,{size:12}),t.motivoViolacao]})]}),(0,N.jsxs)(`div`,{className:`dv-hotel-offer-price`,children:[Ae(t.preco),(0,N.jsx)(`span`,{children:`Preco final`})]}),(0,N.jsx)(`button`,{type:`button`,disabled:n,className:`dv-hotel-reserve ${r?`is-selected`:``}`,onClick:()=>o({hotelId:e.idReferencia,offerId:t.id}),children:n?`Nao permitido`:r?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ne,{size:14}),` Escolhido`]}):`Reservar`})]},t.id)})})]})]},e.idReferencia)})})]})]})})})};function _t(){let[e,t]=(0,C.useState)(`search`),[n,r]=(0,C.useState)(`air`),[i,a]=(0,C.useState)(be),[o,s]=(0,C.useState)(!1),[c,l]=(0,C.useState)(_e),[u,d]=(0,C.useState)(0),[f,p]=(0,C.useState)(`0`),[m,h]=(0,C.useState)(Ee),[g,_]=(0,C.useState)(De),[v,y]=(0,C.useState)(!1),[b,x]=(0,C.useState)(!1),[S,w]=(0,C.useState)(5e3),[ee,te]=(0,C.useState)(24),[T,E]=(0,C.useState)([]),[D,ne]=(0,C.useState)([]),[O,re]=(0,C.useState)([]),[ae,k]=(0,C.useState)([]),[A,ce]=(0,C.useState)([]),[le,ue]=(0,C.useState)({from:``,to:``}),[j,M]=(0,C.useState)({from:``,to:``}),[fe,pe]=(0,C.useState)({airlines:!0,class:!0,price:!0,duration:!1,departureTime:!1,arrivalTime:!1,connections:!0,stops:!0,originAirport:!1,destAirport:!1}),[me,ve]=(0,C.useState)(`price_asc`),[ye,xe]=(0,C.useState)(!1),Se=(0,C.useRef)([]),Ce=()=>{Se.current.forEach(e=>clearTimeout(e)),Se.current=[]},we=(e,t)=>{a(n=>({...n,[e]:t}))},Te=e=>{r(e),t(`search`),Ce(),s(!1)},ke=e=>{E(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},P=e=>{ne(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ae=e=>{re(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Fe=e=>{k(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ie=e=>{ce(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},Ue=e=>{pe(t=>({...t,[e]:!t[e]}))},We=()=>{w(5e3),te(24),E([]),ne([]),re([]),k([]),ce([]),ue({from:``,to:``}),M({from:``,to:``}),ve(`price_asc`)},Ge=()=>{_(De())},Ke=(e,t)=>{let n=e.Voos[0],r=e.Voos[e.Voos.length-1],i=String(n?.Seg??`0`),a={key:Oe(e,t),isCombined:!!e.isCombinado,segmentKey:i,flight:e,fare:t,currency:e.Moeda,airline:n?.NomeCia||e.CodSisRes,flightNumber:n?.NumeroVoo||``,origin:n?.CodAeroportoOrigem||``,destination:r?.CodAeroportoDestino||``,departureDate:n?.SaidaDate||``,departureTime:n?.SaidaTime||``,arrivalTime:r?.ChegadaTime||``};if(a.isCombined){_({segments:{0:null,1:null},combined:a});return}_(e=>({segments:{...e.segments,[i]:a},combined:null}))},qe=e=>{if(e?.preventDefault(),n===`hotel`){Ce(),s(!1),t(`hotelAvailability`);return}let r=(i.tripType||be.tripType)===`oneway`;Ce(),We(),Ge(),x(!1),t(`availability`),s(!0),h(Ee()),d(0),l(_e.map(e=>({...e,status:`loading`,count:0}))),p(`0`);let a=0;_e.forEach(e=>{let t=Math.floor(Math.random()*3e3)+1e3,n=setTimeout(()=>{e.id===`SABRE`?et(e.id,`warning`,0):e.id===`LA`?(h(e=>({...e,0:ge.flightsBySegment[0]})),et(e.id,`success`,1)):e.id===`G3`?(r||h(e=>({...e,1:ge.flightsBySegment[1]})),et(e.id,`success`,r?0:2)):e.id===`AD`&&et(e.id,`success`,0),a++,d(a/_e.length*100),a===_e.length&&(s(!1),r?p(`0`):(h(e=>({...e,99:ge.flightsBySegment[99]})),p(`99`)),Se.current=[])},t);Se.current.push(n)})},Je=()=>{(i.tripType===`oneway`?g.segments[0]:g.combined||g.segments[0]&&g.segments[1])&&t(`summary`)},Xe=e=>{if(e){if(e.isCombined){_({segments:{0:null,1:null},combined:e});return}_(t=>({segments:{...t.segments,[e.segmentKey]:e},combined:null}))}},Qe=()=>{xe(!1)},$e=()=>{xe(!1),window.setTimeout(()=>window.print(),80)},et=(e,t,n)=>{l(r=>r.map(r=>r.id===e?{...r,status:t,count:n}:r))},tt=m[f]||[],nt=(0,C.useMemo)(()=>{let e=e=>tt.reduce((t,n)=>{let r=e(n);return r&&(t[r]=(t[r]||0)+1),t},{}),t=e(Pe),n=e(Re),r=e(ze),i=tt.reduce((e,t)=>{let n=Me(t),r=n>=2?`2`:String(n);return e[r]=(e[r]||0)+1,e},{}),a=tt.reduce((e,t)=>([`baggage`,`seat`,`flex`].forEach(n=>{t.Tarifas.some(e=>He(e,n))&&(e[n]=(e[n]||0)+1)}),e),{}),o=e=>Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({label:e,value:e,count:t}));return{airlines:o(t),origins:o(n),destinations:o(r),stops:[{label:`Direto`,value:`0`,count:i[0]||0},{label:`1 parada`,value:`1`,count:i[1]||0},{label:`2+ paradas`,value:`2`,count:i[2]||0}],features:[{label:`Bagagem inclusa`,value:`baggage`,count:a.baggage||0},{label:`Assento incluso`,value:`seat`,count:a.seat||0},{label:`Tarifa flexivel`,value:`flex`,count:a.flex||0}]}},[tt]),rt=[D.length,T.length,O.length,ae.length,A.length,+(S<5e3),+(ee<24),le.from||le.to?1:0,j.from||j.to?1:0].reduce((e,t)=>e+Number(t||0),0),it=(0,C.useMemo)(()=>{let e=[g.combined?.key,g.segments[0]?.key,g.segments[1]?.key].filter(Boolean);return new Set(e)},[g]),at=(0,C.useMemo)(()=>{let e=tt.filter(e=>{if(je(e)>S)return!1;let t=Ne(e);if(Math.ceil(t/60)>ee)return!1;let n=Me(e);if(T.length>0&&!T.includes(n.toString())&&!(T.includes(`2`)&&n>=2))return!1;let r=Pe(e);if(D.length>0&&!D.includes(r)||O.length>0&&!O.every(t=>e.Tarifas.some(e=>He(e,t))))return!1;let i=Re(e);if(ae.length>0&&!ae.includes(i))return!1;let a=ze(e);return!(A.length>0&&!A.includes(a)||!Ve(e.Voos[0]?.SaidaTime,le)||!Ve(Be(e),j))});return e.sort((e,t)=>{switch(me){case`price_asc`:case`price_bag_asc`:return je(e)-je(t);case`duration_asc`:return Ne(e)-Ne(t);case`stops_asc`:return Me(e)-Me(t);case`dep_early`:return e.Voos[0].SaidaTime.localeCompare(t.Voos[0].SaidaTime);case`dep_late`:return t.Voos[0].SaidaTime.localeCompare(e.Voos[0].SaidaTime);case`arr_early`:return e.Voos[e.Voos.length-1].ChegadaTime.localeCompare(t.Voos[t.Voos.length-1].ChegadaTime);case`arr_late`:return t.Voos[t.Voos.length-1].ChegadaTime.localeCompare(e.Voos[e.Voos.length-1].ChegadaTime);default:return 0}}),e},[tt,S,ee,T,D,O,ae,A,le,j,me]),ot=c.filter(e=>e.status===`success`).length,st=c.filter(e=>e.status===`warning`).length,ct=i.tripType||be.tripType,lt=ct===`oneway`,F=({id:e,title:t,icon:n,children:r})=>{let i=fe[e];return(0,N.jsxs)(`section`,{className:`dv-availability-filter-section`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-availability-filter-section__header`,"aria-expanded":i,onClick:()=>Ue(e),children:[(0,N.jsxs)(`span`,{className:`dv-availability-filter-section__label`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:n}),(0,N.jsx)(`span`,{children:t})]}),(0,N.jsx)(`span`,{className:`q-icon dv-availability-filter-section__chevron`,children:i?`expand_less`:`expand_more`})]}),i&&(0,N.jsx)(`div`,{className:`dv-availability-filter-section__body`,children:r})]})},I=({label:e,count:t,checked:n,onChange:r})=>(0,N.jsxs)(`label`,{className:`dv-availability-checkbox`,children:[(0,N.jsxs)(`span`,{className:`dv-availability-checkbox__main`,children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:n,onChange:r}),(0,N.jsx)(`span`,{children:e})]}),typeof t==`number`&&(0,N.jsx)(`span`,{className:`dv-availability-checkbox__count`,children:t})]}),ut=({label:e=`Sem dados para esta aba`})=>(0,N.jsx)(`span`,{className:`dv-availability-filter-empty`,children:e}),dt=({value:e,onChange:t})=>(0,N.jsxs)(`div`,{className:`dv-availability-time-row`,children:[(0,N.jsxs)(`label`,{className:`dv-availability-time-field`,children:[(0,N.jsx)(`span`,{children:`De`}),(0,N.jsx)(`input`,{type:`time`,value:e.from,onChange:e=>t(t=>({...t,from:e.target.value}))})]}),(0,N.jsxs)(`label`,{className:`dv-availability-time-field`,children:[(0,N.jsx)(`span`,{children:`Ate`}),(0,N.jsx)(`input`,{type:`time`,value:e.to,onChange:e=>t(t=>({...t,to:e.target.value}))})]})]});return(0,N.jsxs)(`div`,{className:`dv-app-container`,children:[(0,N.jsx)(`style`,{dangerouslySetInnerHTML:{__html:he}}),e===`summary`?(0,N.jsx)(pt,{selectedFares:g,flightsMap:m,searchCriteria:i,onBack:()=>t(`availability`),onChooseAriaRecommendation:Xe}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Ye,{criteria:i,onCriteriaChange:we,onSubmit:qe,serviceType:n,onServiceChange:Te,showFeaturedFlights:e===`search`,inline:!0}),e===`hotelAvailability`?(0,N.jsx)(gt,{searchCriteria:i}):e===`availability`?(0,N.jsx)(`section`,{className:`dv-inline-results dv-inline-results--availability`,children:(0,N.jsxs)(`div`,{className:`dv-main-wrapper mt-4`,children:[v&&(0,N.jsx)(`div`,{className:`dv-filter-overlay`,onClick:()=>y(!1)}),(0,N.jsxs)(`aside`,{className:`dv-sidebar ${v?`is-drawer-open`:``}`,children:[v&&(0,N.jsxs)(`div`,{className:`dv-filter-drawer-header`,children:[(0,N.jsx)(`h2`,{children:`Filtros`}),(0,N.jsx)(`button`,{type:`button`,onClick:()=>y(!1),children:(0,N.jsx)(de,{className:`w-5 h-5`})})]}),(0,N.jsx)(`div`,{className:`dv-filter-card`,children:(0,N.jsx)(()=>(0,N.jsxs)(`div`,{className:`dv-availability-filter`,children:[(0,N.jsxs)(`header`,{className:`dv-availability-filter__header`,children:[(0,N.jsxs)(`div`,{className:`dv-availability-filter__title`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`tune`}),(0,N.jsx)(`span`,{children:`Filtros`}),rt>0&&(0,N.jsx)(`span`,{className:`dv-availability-filter__counter`,children:rt})]}),(0,N.jsx)(`button`,{type:`button`,className:`dv-availability-filter__clear`,onClick:We,"aria-label":`Limpar filtros`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`backspace`})})]}),(0,N.jsxs)(`div`,{className:`dv-availability-filter__content`,children:[(0,N.jsx)(F,{id:`airlines`,title:`Companhias aereas`,icon:`flight`,children:nt.airlines.length>0?nt.airlines.map(e=>(0,N.jsx)(I,{label:e.label,count:e.count,checked:D.includes(e.value),onChange:()=>P(e.value)},e.value)):(0,N.jsx)(ut,{})}),(0,N.jsx)(F,{id:`class`,title:`Classe e assentos`,icon:`airline_seat_recline_normal`,children:nt.features.map(e=>(0,N.jsx)(I,{label:e.label,count:e.count,checked:O.includes(e.value),onChange:()=>Ae(e.value)},e.value))}),(0,N.jsx)(F,{id:`price`,title:`Faixa de preco`,icon:`payments`,children:(0,N.jsxs)(`div`,{className:`dv-availability-range`,children:[(0,N.jsxs)(`div`,{className:`dv-availability-range__values`,children:[(0,N.jsx)(`span`,{children:`R$ 500`}),(0,N.jsxs)(`strong`,{children:[`R$ `,S.toLocaleString(`pt-BR`)]})]}),(0,N.jsx)(`input`,{type:`range`,min:`500`,max:`5000`,step:`100`,value:S,onChange:e=>w(Number(e.target.value)),className:`dv-range-input`})]})}),(0,N.jsx)(F,{id:`duration`,title:`Duracao da viagem`,icon:`schedule`,children:(0,N.jsxs)(`div`,{className:`dv-availability-range`,children:[(0,N.jsxs)(`div`,{className:`dv-availability-range__values`,children:[(0,N.jsx)(`span`,{children:`0h`}),(0,N.jsxs)(`strong`,{children:[ee,`h`]})]}),(0,N.jsx)(`input`,{type:`range`,min:`1`,max:`24`,step:`1`,value:ee,onChange:e=>te(Number(e.target.value)),className:`dv-range-input`})]})}),(0,N.jsx)(F,{id:`connections`,title:`Conexoes`,icon:`connecting_airports`,children:nt.stops.map(e=>(0,N.jsx)(I,{label:e.label,count:e.count,checked:T.includes(e.value),onChange:()=>ke(e.value)},e.value))}),(0,N.jsx)(F,{id:`stops`,title:`Escalas`,icon:`route`,children:nt.stops.map(e=>(0,N.jsx)(I,{label:e.label===`Direto`?`Sem escala`:e.label,count:e.count,checked:T.includes(e.value),onChange:()=>ke(e.value)},e.value))}),(0,N.jsx)(F,{id:`departureTime`,title:`Horario de saida`,icon:`flight_takeoff`,children:(0,N.jsx)(dt,{value:le,onChange:ue})}),(0,N.jsx)(F,{id:`arrivalTime`,title:`Horario de chegada`,icon:`flight_land`,children:(0,N.jsx)(dt,{value:j,onChange:M})}),(0,N.jsx)(F,{id:`originAirport`,title:`Origem`,icon:`trip_origin`,children:nt.origins.length>0?nt.origins.map(e=>(0,N.jsx)(I,{label:e.label,count:e.count,checked:ae.includes(e.value),onChange:()=>Fe(e.value)},e.value)):(0,N.jsx)(ut,{})}),(0,N.jsx)(F,{id:`destAirport`,title:`Destino`,icon:`place`,children:nt.destinations.length>0?nt.destinations.map(e=>(0,N.jsx)(I,{label:e.label,count:e.count,checked:A.includes(e.value),onChange:()=>Ie(e.value)},e.value)):(0,N.jsx)(ut,{})})]})]}),{})})]}),(0,N.jsx)(`div`,{className:`dv-content-area`,children:(0,N.jsxs)(`main`,{className:`dv-root !pt-0 !mt-0 !w-full`,style:{maxWidth:`100%`,padding:0},children:[!lt&&!o&&m[99].length>0&&(0,N.jsx)(`section`,{className:`dv-aria-card-panel aria-card`,children:(0,N.jsxs)(`div`,{className:`aria-card__body`,children:[(0,N.jsxs)(`div`,{className:`aria-card__identity`,children:[(0,N.jsx)(`span`,{className:`aria-card__icon`,children:(0,N.jsx)(`span`,{className:`q-icon`,style:{fontSize:27},children:`auto_awesome`})}),(0,N.jsxs)(`span`,{className:`aria-card__copy`,children:[(0,N.jsxs)(`span`,{className:`aria-card__badge`,children:[(0,N.jsx)(`span`,{className:`q-icon`,style:{fontSize:14},children:`lightbulb`}),` Recomendação ARIA`]}),(0,N.jsx)(`span`,{className:`aria-card__title`,children:`Melhor combinação encontrada`}),(0,N.jsx)(`span`,{className:`aria-card__subtitle`,children:`Ida pela LATAM e volta pela GOL equilibram menor duração, bagagem e preferência.`})]})]}),(0,N.jsxs)(`button`,{className:`aria-card__toggle`,children:[`Ver recomendação `,(0,N.jsx)(`span`,{className:`q-icon`,children:`arrow_forward`})]}),(0,N.jsxs)(`ul`,{className:`aria-insights`,children:[(0,N.jsxs)(`li`,{className:`aria-insights__chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`paid`}),` R$ 430 mais barato`]}),(0,N.jsxs)(`li`,{className:`aria-insights__chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`}),` Menor duração`]}),(0,N.jsxs)(`li`,{className:`aria-insights__chip`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight`}),` Ida direta`]})]})]})}),(0,N.jsx)(`section`,{className:`dv-header`,children:(0,N.jsx)(`div`,{className:`dv-tabs-wrap`,children:(0,N.jsxs)(`div`,{className:`dv-tabs`,role:`tablist`,children:[(0,N.jsxs)(`button`,{className:`dv-tab`,type:`button`,"aria-selected":f===`0`,onClick:()=>p(`0`),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_takeoff`}),(0,N.jsxs)(`span`,{className:`dv-tab__copy`,children:[(0,N.jsx)(`span`,{className:`dv-tab__title`,children:`Trecho 1`}),(0,N.jsx)(`span`,{className:`dv-tab__subtitle`,children:`RIO -> SAO`})]}),(0,N.jsx)(`span`,{className:`dv-tab__count`,children:m[0].length})]}),!lt&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`button`,{className:`dv-tab`,type:`button`,"aria-selected":f===`1`,onClick:()=>p(`1`),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`flight_land`}),(0,N.jsxs)(`span`,{className:`dv-tab__copy`,children:[(0,N.jsx)(`span`,{className:`dv-tab__title`,children:`Trecho 2`}),(0,N.jsx)(`span`,{className:`dv-tab__subtitle`,children:`SAO -> RIO`})]}),(0,N.jsx)(`span`,{className:`dv-tab__count`,children:m[1].length})]}),(0,N.jsxs)(`button`,{className:`dv-tab`,type:`button`,"aria-selected":f===`99`,onClick:()=>p(`99`),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`connecting_airports`}),(0,N.jsx)(`span`,{className:`dv-tab__copy`,children:(0,N.jsx)(`span`,{className:`dv-tab__title`,children:`Voos Combinados`})}),(0,N.jsx)(`span`,{className:`dv-tab__count`,children:m[99].length})]})]})]})})}),(o||u>0)&&(0,N.jsxs)(`section`,{className:`dv-sisres`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-sisres-summary`,"aria-expanded":!b,onClick:()=>x(e=>!e),children:[(0,N.jsxs)(`span`,{className:`dv-sisres-main`,children:[o?(0,N.jsx)(oe,{className:`w-5 h-5 text-blue-500 animate-spin`}):(0,N.jsx)(`span`,{className:`q-icon`,style:{color:`#059669`},children:`check_circle`}),(0,N.jsx)(`span`,{className:`dv-sisres-title`,children:o?`Buscando em múltiplos fornecedores... ${Math.round(u)}%`:`${ot} sistemas concluídos, ${st} com aviso`})]}),(0,N.jsxs)(`span`,{className:`dv-sisres-actions`,children:[(0,N.jsxs)(`span`,{className:`dv-sisres-kpis hidden md:flex`,children:[(0,N.jsxs)(`span`,{className:`dv-kpi-item`,children:[(0,N.jsx)(`span`,{className:`dv-kpi-dot dv-kpi-dot--success`}),(0,N.jsx)(`span`,{className:`dv-kpi-value`,children:ot})]}),(0,N.jsxs)(`span`,{className:`dv-kpi-item`,children:[(0,N.jsx)(`span`,{className:`dv-kpi-dot dv-kpi-dot--warning`}),(0,N.jsx)(`span`,{className:`dv-kpi-value`,children:st})]})]}),(0,N.jsx)(`span`,{className:`dv-sisres-toggle-icon`,"aria-hidden":`true`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:b?`expand_more`:`expand_less`})})]})]}),!b&&(0,N.jsx)(`div`,{className:`dv-sisres-content`,children:(0,N.jsx)(`div`,{className:`dv-sisres-list`,children:c.map(e=>(0,N.jsxs)(`div`,{className:`dv-sisres-card`,children:[(0,N.jsx)(`span`,{className:`dv-sisres-logo-wrap`,children:(0,N.jsx)(Le,{code:e.id,name:e.name,className:`dv-sisres-logo`,fallbackClassName:`dv-sisres-logo-fallback`})}),(0,N.jsxs)(`span`,{className:`dv-sisres-status dv-status--${e.status}`,children:[e.status===`loading`&&(0,N.jsx)(oe,{className:`w-3 h-3 animate-spin`}),e.status===`success`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`check_circle`}),` `,e.count,` voos`]}),e.status===`warning`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`warning`}),` Sem voos`]}),e.status===`idle`&&(0,N.jsx)(`span`,{className:`text-gray-400`,children:`Aguardando`})]})]},e.id))})})]}),(0,N.jsxs)(`div`,{className:`dv-toolbar`,children:[(0,N.jsxs)(`div`,{className:`dv-toolbar__left`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-filter-btn dv-filter-btn--mobile`,onClick:()=>y(!0),children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`filter_alt`}),`Filtros`]}),(0,N.jsxs)(`select`,{className:`dv-sort-select`,value:me,onChange:e=>ve(e.target.value),title:`Ordenar por`,children:[(0,N.jsx)(`option`,{value:`price_asc`,children:`Menor preço`}),(0,N.jsx)(`option`,{value:`price_bag_asc`,children:`Menor preço com bagagem`}),(0,N.jsx)(`option`,{value:`duration_asc`,children:`Menor duração`}),(0,N.jsx)(`option`,{value:`dep_early`,children:`Saída mais cedo`}),(0,N.jsx)(`option`,{value:`dep_late`,children:`Saída mais tarde`}),(0,N.jsx)(`option`,{value:`arr_early`,children:`Chegada mais cedo`}),(0,N.jsx)(`option`,{value:`arr_late`,children:`Chegada mais tarde`}),(0,N.jsx)(`option`,{value:`stops_asc`,children:`Menos paradas`}),f===`99`&&(0,N.jsxs)(`optgroup`,{label:`Ordenação extra para combinados`,children:[(0,N.jsx)(`option`,{value:`comb_early_late`,children:`Ida cedo / volta tarde`}),(0,N.jsx)(`option`,{value:`comb_late_early`,children:`Ida tarde / volta cedo`}),(0,N.jsx)(`option`,{value:`comb_early_early`,children:`Ida cedo / volta cedo`}),(0,N.jsx)(`option`,{value:`comb_late_late`,children:`Ida tarde / volta tarde`})]})]}),(0,N.jsx)(`button`,{className:`dv-icon-btn`,title:`Dividir por faixa de horário`,children:(0,N.jsx)(`span`,{className:`q-icon`,children:`schedule`})})]}),(0,N.jsx)(`div`,{className:`dv-toolbar__right`,children:(0,N.jsxs)(`div`,{className:`dv-toolbar-menu`,onBlur:()=>window.setTimeout(()=>xe(!1),120),children:[(0,N.jsx)(`button`,{type:`button`,className:`dv-icon-btn ${ye?`dv-icon-btn--active`:``}`,title:`Opções adicionais`,"aria-haspopup":`menu`,"aria-expanded":ye,onClick:()=>xe(e=>!e),children:(0,N.jsx)(`span`,{className:`q-icon`,children:`more_vert`})}),ye&&(0,N.jsxs)(`div`,{className:`dv-toolbar-menu__dropdown`,role:`menu`,children:[(0,N.jsxs)(`button`,{type:`button`,className:`dv-toolbar-menu__item`,role:`menuitem`,onMouseDown:e=>e.preventDefault(),onClick:Qe,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`mail`}),`Enviar por email`]}),(0,N.jsxs)(`button`,{type:`button`,className:`dv-toolbar-menu__item`,role:`menuitem`,onMouseDown:e=>e.preventDefault(),onClick:$e,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`print`}),`Imprimir disponibilidade`]})]})]})})]}),!o&&m[0].length>0&&(0,N.jsxs)(`section`,{className:`dv-calendar-shop`,children:[(0,N.jsx)(`div`,{className:`dv-calendar-shop__header`,children:(0,N.jsxs)(`div`,{className:`dv-calendar-shop__heading`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__header-bar`}),(0,N.jsxs)(`h3`,{className:`dv-calendar-shop__title`,children:[`Melhores tarifas para `,(0,N.jsx)(`span`,{className:`dv-calendar-shop__title-month`,children:`maio`})]})]})}),(0,N.jsxs)(`div`,{className:`dv-calendar-shop__list`,children:[(0,N.jsxs)(`button`,{className:`dv-calendar-shop__item`,children:[(0,N.jsxs)(`span`,{className:`dv-calendar-shop__fare-delta`,children:[(0,N.jsx)(`span`,{className:`q-icon`,children:`trending_down`}),` 9%`]}),(0,N.jsx)(`span`,{className:`dv-calendar-shop__date-line`,children:(0,N.jsx)(`span`,{className:`dv-calendar-shop__date`,children:`ter, 12 mai`})}),(0,N.jsxs)(`span`,{className:`dv-calendar-shop__fare`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__company`,children:(0,N.jsx)(Le,{name:`GOL`,className:`dv-calendar-shop__logo`})}),(0,N.jsxs)(`span`,{className:`dv-calendar-shop__price-group dv-calendar-shop__price-group--best`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__price-symbol`,children:`R$`}),(0,N.jsx)(`span`,{className:`dv-calendar-shop__price-integer`,children:`1.888`})]})]})]}),(0,N.jsxs)(`button`,{className:`dv-calendar-shop__item dv-calendar-shop__item--segment-date-marker`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__date-line`,children:(0,N.jsx)(`span`,{className:`dv-calendar-shop__date`,children:`qui, 14 mai`})}),(0,N.jsx)(`span`,{className:`dv-calendar-shop__fare`,children:(0,N.jsx)(`span`,{style:{fontSize:17,fontWeight:800},children:`R$ 2.188`})})]}),(0,N.jsxs)(`button`,{className:`dv-calendar-shop__item dv-calendar-shop__item--active`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__date-line`,children:(0,N.jsx)(`span`,{className:`dv-calendar-shop__date`,children:`sex, 15 mai`})}),(0,N.jsxs)(`span`,{className:`dv-calendar-shop__fare`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__company`,children:(0,N.jsx)(Le,{name:`LATAM`,className:`dv-calendar-shop__logo`})}),(0,N.jsxs)(`span`,{className:`dv-calendar-shop__price-group`,children:[(0,N.jsx)(`span`,{className:`dv-calendar-shop__price-symbol`,children:`R$`}),(0,N.jsx)(`span`,{className:`dv-calendar-shop__price-integer`,children:`2.216`})]})]})]})]})]}),(0,N.jsxs)(`div`,{className:`lista-voos-container`,children:[o&&(0,N.jsxs)(`div`,{className:`text-center py-24 bg-white rounded-2xl border border-gray-100 shadow-sm mt-4`,children:[(0,N.jsx)(oe,{className:`w-10 h-10 text-[#143479] animate-spin mx-auto mb-4`}),(0,N.jsx)(`p`,{className:`text-[#143479] font-bold animate-pulse`,children:`Consultando disponibilidade nos sistemas...`})]}),!o&&tt.length===0&&(0,N.jsxs)(`div`,{className:`text-center py-16 bg-white rounded-2xl border border-gray-200 border-dashed mt-4`,children:[(0,N.jsx)(se,{className:`w-12 h-12 text-gray-300 mx-auto mb-4`}),(0,N.jsx)(`p`,{className:`text-gray-500 font-medium`,children:`Preencha os dados e clique em buscar para iniciar.`})]}),!o&&tt.length>0&&at.length===0&&(0,N.jsxs)(`div`,{className:`text-center py-16 bg-white rounded-2xl border border-gray-200 mt-4`,children:[(0,N.jsx)(ie,{className:`w-12 h-12 text-gray-300 mx-auto mb-4`}),(0,N.jsx)(`p`,{className:`text-gray-500 font-medium`,children:`Nenhum voo encontrado com os filtros atuais.`}),(0,N.jsx)(`button`,{onClick:We,className:`mt-2 text-[#428f70] font-bold hover:underline`,children:`Limpar filtros`})]}),!o&&at.length>0&&(0,N.jsx)(`div`,{className:`flights-grid`,children:at.map((e,t)=>(0,N.jsx)(mt,{flight:e,onSelectFare:Ke,selectedFareKeys:it},e.IdViagem||t))})]})]})}),(0,N.jsx)(Ze,{selectedFares:g,tripType:ct,onClear:Ge,onTarifar:Je})]})}):null]})]})}(0,me.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(C.StrictMode,{children:(0,N.jsx)(_t,{})}));