webpackJsonp([0xd2a57dc1d883],{71:function(e,t){"use strict";function n(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function o(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=n,t.apiRunnerAsync=o;var r=[]},198:function(e,t,n){"use strict";t.components={"component---src-templates-post-js":n(310),"component---src-pages-404-js":n(308),"component---src-pages-index-js":n(309)},t.json={"layout-index.json":n(311),"kr-0000.json":n(316),"cn-0000.json":n(314),"404.json":n(312),"index.json":n(315),"404-html.json":n(313)},t.layouts={"layout---index":n(307)}},199:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(2),s=o(c),l=n(7),f=o(l),p=n(131),d=o(p),h=n(52),m=o(h),g=n(71),v=n(428),y=o(v),R=function(e){var t=e.children;return s.default.createElement("div",null,t())},P=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,y.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:R,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);P.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=P,e.exports=t.default},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(329),a=o(r),u=(0,a.default)();e.exports=u},200:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(70),a=n(132),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},201:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(103),a=o(r),u=n(71),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},313:function(e,t,n){n(14),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(322)})})}},312:function(e,t,n){n(14),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(323)})})}},314:function(e,t,n){n(14),e.exports=function(e){return n.e(71302935417812,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(324)})})}},315:function(e,t,n){n(14),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(325)})})}},316:function(e,t,n){n(14),e.exports=function(e){return n.e(0x637674606cb6,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(326)})})}},311:function(e,t,n){n(14),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(106)})})}},307:function(e,t,n){n(14),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(202)})})}},131:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(2),a=(o(r),n(200)),u=o(a),i=n(52),c=o(i),s=n(132),l=o(s),f=void 0,p={},d={},h={},m={},g={},v=[],y=[],R={},P="",_=[],w={},x=function(e){return e&&e.default||e},b=void 0,j=!0,E=[],k={},C={},N=5;b=n(203)({getNextQueuedResources:function(){return _.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){_=_.filter(function(t){return t!==e}),b.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){b.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){b.onPostLoadPageResources(e)});var O=function(e,t){return w[e]>w[t]?1:w[e]<w[t]?-1:0},T=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},L=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(m[t])e.nextTick(function(){n(null,m[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){m[t]=o,E.push({resource:t,succeeded:!e}),C[t]||(C[t]=e),E=E.slice(-N),n(e,o)})}},S=function(t,n){g[t]?e.nextTick(function(){n(null,g[t])}):C[t]?e.nextTick(function(){n(C[t])}):L(t,function(e,o){if(e)n(e);else{var r=x(o());g[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=E.find(function(e){return e.succeeded});return!!t},D=function(e,t){console.log(t),k[e]||(k[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){y=[],R={},w={},_=[],v=[],P=""},addPagesArray:function(e){v=e,P="/political-life",f=(0,u.default)(e,P)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return y.pop()},enqueue:function(e){var t=(0,l.default)(e,P);if(!v.some(function(e){return e.path===t}))return!1;var n=1/M;M+=1,R[t]?R[t]+=1:R[t]=1,U.has(t)||y.unshift(t),y.sort(T);var o=f(t);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+n:w[o.jsonName]=1+n,_.indexOf(o.jsonName)!==-1||m[o.jsonName]||_.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+n:w[o.componentChunkName]=1+n,_.indexOf(o.componentChunkName)!==-1||m[o.jsonName]||_.unshift(o.componentChunkName)),_.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:_,resourcesCount:w}},getPages:function(){return{pathArray:y,pathCount:R}},getPage:function(e){return f(e)},has:function(e){return y.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(k[t])return D(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return D(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,t){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),S(o.jsonName,function(e,t){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,t){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(e){return y.length-y.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:U.getResourcesForPathname};t.default=U}).call(t,n(107))},327:function(e,t){e.exports=[{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"kr-0000.json",path:"/kr/0000"},{componentChunkName:"component---src-templates-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-0000.json",path:"/cn/0000"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},203:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(71),u=n(2),i=o(u),c=n(168),s=o(c),l=n(70),f=n(320),p=n(293),d=o(p),h=n(105),m=n(201),g=o(m),v=n(52),y=o(v),R=n(327),P=o(R),_=n(328),w=o(_),x=n(199),b=o(x),j=n(198),E=o(j),k=n(131),C=o(k);n(219),window.___history=g.default,window.___emitter=y.default,C.default.addPagesArray(P.default),C.default.addProdRequires(E.default),window.asyncRequires=E.default,window.___loader=C.default,window.matchPath=l.matchPath;var N=w.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),O=function(e){var t=N[e];return null!=t&&(g.default.replace(t.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){O(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(204);var o=function(e){function t(e){e.page.path===C.default.getPage(o).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,h.createLocation)(e,null,null,g.default.location),o=n.pathname,r=N[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==n.pathname||a.search!==n.search||a.hash!==n.hash){var u=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);C.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],m=function(e){var t=e.children;return i.default.createElement(l.Router,{history:g.default},t)},v=(0,l.withRouter)(b.default);C.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return C.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},328:function(e,t){e.exports=[]},204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(52),a=o(r),u="/";u="/political-life/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},132:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},293:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},14:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},165:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,i=u&&u(Object);return function c(s,l,f){if("string"!=typeof l){if(i){var p=u(l);p&&p!==i&&c(s,p,f)}var d=o(l);r&&(d=d.concat(r(l)));for(var h=0;h<d.length;++h){var m=d[h];if(!(e[m]||t[m]||f&&f[m])){var g=a(l,m);try{n(s,m,g)}catch(e){}}}return s}return s}})},329:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},107:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var t=h.length;t;){for(d=h,h=[];++g<t;)d&&d[g].run();g=-1,t=h.length}d=null,m=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},428:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},308:function(e,t,n){n(14),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(207)})})}},309:function(e,t,n){n(14),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(208)})})}},310:function(e,t,n){n(14),e.exports=function(e){return n.e(0xb1abc741118f,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(209)})})}}});
//# sourceMappingURL=app-ed843189be523f91927a.js.map