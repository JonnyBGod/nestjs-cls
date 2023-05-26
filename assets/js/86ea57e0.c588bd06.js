"use strict";(self.webpackChunknestjs_cls=self.webpackChunknestjs_cls||[]).push([[202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={slug:"/",sidebar_position:0,title:"Introduction"},i="NestJS CLS",s={unversionedId:"introduction/index",id:"introduction/index",title:"Introduction",description:"A continuation-local\\* storage module compatible with NestJS' dependency injection based on Node's AsyncLocalStorage.",source:"@site/docs/01_introduction/index.md",sourceDirName:"01_introduction",slug:"/",permalink:"/nestjs-cls/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_introduction/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0,title:"Introduction"},sidebar:"documentationSidebar",next:{title:"Installation",permalink:"/nestjs-cls/introduction/installation"}},l={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Highlights",id:"highlights",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nestjs-cls"},"NestJS CLS"),(0,o.kt)("p",null,"A continuation-local","*"," storage module compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS"),"' dependency injection based on Node's ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage"},"AsyncLocalStorage"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Continuation-local storage allows to store state and propagate it throughout callbacks and promise chains. It allows storing data throughout the lifetime of a web request or any other asynchronous duration. It is similar to thread-local storage in other languages."))),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Some common use cases that this library enables include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tracking the Request ID and other metadata for logging purposes"),(0,o.kt)("li",{parentName:"ul"},"Keeping track of the user throughout the whole request"),(0,o.kt)("li",{parentName:"ul"},"Making the dynamic Tenant database connection available everywhere in multi-tenant apps"),(0,o.kt)("li",{parentName:"ul"},"Propagating the authentication level or role to restrict access to resources"),(0,o.kt)("li",{parentName:"ul"},"Seamlessly propagating the ",(0,o.kt)("inlineCode",{parentName:"li"},"transaction")," object of your favourite ORM across services without breaking encapsulation and isolation by explicitly passing it around."),(0,o.kt)("li",{parentName:"ul"},'Using "request" context in cases where actual REQUEST-scoped providers are not supported (passport strategies, cron controllers, websocket gateways, ...)')),(0,o.kt)("p",null,"Most of these are to some extent solvable using ",(0,o.kt)("em",{parentName:"p"},"REQUEST-scoped")," providers or passing the context as a parameter, but these solutions are often clunky and come with a whole lot of other issues."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"*"," The name comes from the original implementation based on ",(0,o.kt)("inlineCode",{parentName:"p"},"cls-hooked"),", which was since replaced by the native ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage"),".")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NestJS is an amazing framework, but in the plethora of awesome built-in features, I still missed one"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"I created this library to solve a specific use case, which was limiting access to only those records which had the same TenantId as the request's user in a central manner. The repository code automatically added a ",(0,o.kt)("inlineCode",{parentName:"em"},"WHERE")," clause to each query, which made sure that other developers couldn't accidentally mix tenant data (all tenants' data were held in the same database) without extra effort.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"AsyncLocalStorage")," is still fairly new and not many people know of its existence and benefits. Here's a nice ",(0,o.kt)("a",{parentName:"em",href:"https://youtu.be/R2RMGQhWyCk?t=9742"},"talk from NodeConf")," about the history. I've invested a great deal of my personal time in making the use of it as pleasant as possible.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"While the use of ",(0,o.kt)("inlineCode",{parentName:"em"},"async_hooks")," is sometimes criticized for ",(0,o.kt)("a",{parentName:"em",href:"https://gist.github.com/Aschen/5cc1f3f3b58f1e284b670b83bb53da7d"},"making Node run slower"),", in my experience, the introduced overhead is negligible compared to any IO operation (like a DB or external API call). If you want fast, use a compiled language.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also, if you use some tracing library (like ",(0,o.kt)("inlineCode",{parentName:"em"},"otel"),"), it most likely already uses ",(0,o.kt)("inlineCode",{parentName:"em"},"async_hooks")," under the hood, so you might as well use it to your advantage.")),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"New"),": Version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.0")," introduces ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-cls/features-and-use-cases/proxy-providers"},(0,o.kt)("em",{parentName:"a"},"Proxy Providers"))," as an alternative to the imperative API. (Minor breaking changes were introduced, see ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-cls/migration-guide/v2x-v3x"},"Migration guide"),").")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.0")," brings advanced ",(0,o.kt)("a",{parentName:"p",href:"/nestjs-cls/features-and-use-cases/type-safety-and-type-inference"},"type safety and type inference"),". However, it requires features from ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript >= 4.4")," - Namely allowing ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," members in interfaces. If you can't upgrade but still want to use this library, install version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.6.2"),", which lacks the typing features.")))}d.isMDXComponent=!0}}]);