(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,n){"use strict";n.r(e),n.d(e,"postQuery",function(){return u});n(173),n(175),n(176),n(76),n(180);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),c=n(153),l=n(163),s=function(t){function e(){return t.apply(this,arguments)||this}i()(e,t);var n=e.prototype;return n.UNSAFE_componentWillMount=function(){this.globalKeyUpEventId=this.keyUpHandler.bind(this),this.globalDoubleEventId=this.onDoubleClickHandler.bind(this),"undefined"!=typeof document&&document.addEventListener("keyup",this.globalKeyUpEventId),"undefined"!=typeof document&&document.addEventListener("touchstart",this.globalDoubleEventId)},n.componentWillUnmount=function(){"undefined"!=typeof document&&document.removeEventListener("keyup",this.globalKeyUpEventId),"undefined"!=typeof document&&document.removeEventListener("touchstart",this.globalDoubleEventId)},n.keyUpHandler=function(t){var e=this.btns(),n=e.nextUrl,a=e.prevUrl,i=e.urlIndex;"ArrowLeft"===t.key&&i>0?Object(c.navigate)(a):"ArrowRight"===t.key&&i<199&&Object(c.navigate)(n)},n.onDoubleClickHandler=function(t){var e=this;if(this.tapped){clearTimeout(this.tapped),this.tapped=null;var n=this.btns(),a=n.nextUrl;n.urlIndex<199&&Object(c.navigate)(a)}else this.tapped=1,this.tapped=setTimeout(function(){e.tapped=null},300)},n.btns=function(){var t=this.props.data.markdownRemark,e="/"+t.fileAbsolutePath.split("/").slice(-2)[0]+"/",n=parseInt(t.fileAbsolutePath.split("/").pop());return{urlIndex:n,nextUrl:e+(n+1).toString().padStart(4,"0"),prevUrl:e+(n-1).toString().padStart(4,"0"),post:t}},n.render=function(){var t=this.btns(),e=t.urlIndex,n=t.nextUrl,a=t.prevUrl,i=t.post;return o.a.createElement(l.a,{pathname:"undefined"!=typeof window&&window.location.pathname},o.a.createElement("div",null,o.a.createElement("h2",null,i.frontmatter.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.html}}),e>0?o.a.createElement(c.Link,{to:a},"←prev"):"",e>=199?"":o.a.createElement(c.Link,{to:n,style:{float:"right"}},"next→")))},e}(o.a.Component);e.default=s;var u="6803242"},153:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return g}),n.d(e,"StaticQuery",function(){return f});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(152),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(24);n.d(e,"waitForRouteChange",function(){return s.c});var u=n(154),p=n.n(u);n.d(e,"PageRenderer",function(){return p.a});var d=n(35);n.d(e,"parsePath",function(){return d.a});var g=i.a.createContext({}),f=function(t){return i.a.createElement(g.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(t,e,n){var a;t.exports=(a=n(155))&&a.default||a},155:function(t,e,n){"use strict";n.r(e);n(36);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(48),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},156:function(t,e,n){t.exports=n.p+"static/cover-4e8b541f2de3ccd9ae3b7459fcf97648.jpg"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"王沪宁《政治的人生》",description:"1994 diary of a Communist ideologue"}}}}},158:function(t,e,n){},160:function(t,e,n){},162:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACX0lEQVQ4y6WTS29NYRSGn7W+vfc51Z6j1R6qpRcqIgYu0UhIaCMEicRliIEYm5kYMjE38RMkTMwMJH5AE1IRiSB1KXqJ0p46l335vmVwDMy75u/K+7zrXVKpVIwNjG5EDBBdn96FBRBVwGPB+NkyXn1qkhaG94HYKT1l2L21zGCPIgAYZoHo2pXTWAhYCCCeFy/fMzOzQqkSEXvBDFSVLEuZW4XpyV3sH+1HLKe+9ANpLb+1YIaZ593HL9y8fZesBXmWIyqYDyRxQpZnWDBGhgd58ugBXVHG84f3UPMtzLfxecrjp89IGwViBYlT8IYIxA5KiUNEmP+2xMzMa8TAzBPlvugQGcx9mmfbQMyNiyPMvlvlzdsV9gyXmF+B5bUAKO2mZ2FxEQt7MfOoWeeKwQLOKc4Kav0ldm937KwGDkxswoWCMgX9myGOIFaw4JFgqIiAgQhcOjfJxFCZak+JWjcc29fF2Ggfw1tgpF8Z3qxMHp7gwtkpRBwUBRFmgCAIp08ep9qYJW2vU+mOWDVjablFI3W4yMhyz5XzU8QRGEbeQfivVa7M+METFLknZCndfd3Q+ENZhdVGoGtTheNHj6CqCAJYp4kigoigqtSGDlFvVREVQtomzQvW05zClKGRcaqVXpAEUdfJQAXEDKWzICmVmD51ldw5erZWyGPBK5g5FpbrrLczUMHMsCBEqg7+OQAhiPC77Sj1DbHydY73c02yIkJi4fP3BW7duU+tNsD49l7GAbl84cy/GCGo8GutzoePXxjbUSWhSX0tp1ko3qDR9AjgVEgSGOxSZKPv/BdyBxRKaTjE1AAAAABJRU5ErkJggg=="},163:function(t,e,n){"use strict";var a=n(157),i=n(0),r=n.n(i),o=n(168),c=n.n(o),l=(n(76),n(77),n(153)),s=(n(158),function(t){return t.isCurrent?{className:"active"}:null}),u=function(t){var e,n=t.siteTitle,a=t.currentPathname,i="",o=!1,c="",u=(a=String(a)).split("/").filter(String),p=u.length-1;e=u.length>0&&u[0].length>2?"/".concat(u.slice(1,p).join("/")):"/".concat(u.slice(0,p).join("/")),u.length>=2&&u[p].length>2&&(i="/".concat(u[p]),o=!0,c="https://github.com/iamswain25/political-life/edit/master/src/pages/"+u.slice(p-1).join("/")+".md");var d="/ko".concat(i),g="/zh".concat(i),f="/ja".concat(i),m="/en".concat(i),h="/ru".concat(i),v="/fr".concat(i),y="/es".concat(i),E="/vi".concat(i),b="/ms".concat(i);return r.a.createElement("div",{style:{background:"#BA0020",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0,display:"inline-block"}},r.a.createElement(l.Link,{to:e,style:{color:"white",textDecoration:"none"}},n)),o?r.a.createElement("a",{className:"floatright",href:c,rel:"noopener"}," ",r.a.createElement("svg",{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))," "):null,r.a.createElement("div",null,r.a.createElement(l.Link,{to:d,className:"linkwhite",getProps:s},"한글"),r.a.createElement(l.Link,{to:g,getProps:s,className:"linkwhite"},"中文"),r.a.createElement(l.Link,{to:f,getProps:s,className:"linkwhite"},"日文"),r.a.createElement(l.Link,{className:"linkwhite",to:m,getProps:s},"English"),r.a.createElement(l.Link,{className:"linkwhite",to:h,getProps:s},"русский"),r.a.createElement(l.Link,{className:"linkwhite",to:v,getProps:s},"Français"),r.a.createElement(l.Link,{className:"linkwhite",to:y,getProps:s},"Español"),r.a.createElement(l.Link,{className:"linkwhite",to:E,getProps:s},"Tiếng Việt"),r.a.createElement(l.Link,{className:"linkwhite",to:b,getProps:s},"Melayu"))))},p=(n(160),n(156)),d=n.n(p),g=n(162),f=n.n(g);e.a=function(t){var e=t.children,n=t.pathname;return r.a.createElement(l.StaticQuery,{query:"2816748113",render:function(t){return r.a.createElement("div",null,r.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{property:"og:title",content:t.site.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:description",content:t.site.siteMetadata.description},{property:"og:image",content:"https://iamswain25.github.io"+d.a},{property:"og:url",content:"https://iamswain25.github.io/political-life"}],link:[{rel:"shortcut icon",href:f.a,type:"image/x-icon"}]}),r.a.createElement(u,{siteTitle:t.site.siteMetadata.title,currentPathname:n}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:a})}},171:function(t,e,n){"use strict";var a=n(10);t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},173:function(t,e,n){"use strict";n(174);var a=n(10),i=n(171),r=n(16),o=/./.toString,c=function(t){n(17)(RegExp.prototype,"toString",t,!0)};n(18)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=o.name&&c(function(){return o.call(this)})},174:function(t,e,n){n(16)&&"g"!=/./g.flags&&n(27).f(RegExp.prototype,"flags",{configurable:!0,get:n(171)})},175:function(t,e,n){var a=Date.prototype,i=a.toString,r=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(17)(a,"toString",function(){var t=r.call(this);return t==t?i.call(this):"Invalid Date"})},176:function(t,e,n){"use strict";var a=n(5),i=n(177),r=n(179);a(a.P+a.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(r),"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},177:function(t,e,n){var a=n(25),i=n(178),r=n(26);t.exports=function(t,e,n,o){var c=String(r(t)),l=c.length,s=void 0===n?" ":String(n),u=a(e);if(u<=l||""==s)return c;var p=u-l,d=i.call(s,Math.ceil(p/s.length));return d.length>p&&(d=d.slice(0,p)),o?d+c:c+d}},178:function(t,e,n){"use strict";var a=n(37),i=n(26);t.exports=function(t){var e=String(i(this)),n="",r=a(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},179:function(t,e,n){var a=n(6).navigator;t.exports=a&&a.userAgent||""},180:function(t,e,n){var a=n(5);a(a.P,"Function",{bind:n(181)})},181:function(t,e,n){"use strict";var a=n(19),i=n(11),r=n(78),o=[].slice,c={};t.exports=Function.bind||function(t){var e=a(this),n=o.call(arguments,1),l=function(){var a=n.concat(o.call(arguments));return this instanceof l?function(t,e,n){if(!(e in c)){for(var a=[],i=0;i<e;i++)a[i]="a["+i+"]";c[e]=Function("F,a","return new F("+a.join(",")+")")}return c[e](t,n)}(e,a.length,a):r(e,a,t)};return i(e.prototype)&&(l.prototype=e.prototype),l}}}]);
//# sourceMappingURL=component---src-templates-post-js-fa82dc611837d9147f5c.js.map