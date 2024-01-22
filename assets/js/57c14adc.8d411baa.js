"use strict";(self.webpackChunknestjs_cls_docs=self.webpackChunknestjs_cls_docs||[]).push([[507],{3253:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var n=s(4246),o=s(1670);const r={},c="Security",i={id:"considerations/security",title:"Security",description:"It is often discussed whether AsyncLocalStorage is safe to use for concurrent requests (because of a possible context leak) and whether the context could be lost_ throughout the duration of a request.",source:"@site/docs/05_considerations/01_security.md",sourceDirName:"05_considerations",slug:"/considerations/security",permalink:"/nestjs-cls/considerations/security",draft:!1,unlisted:!1,editUrl:"https://github.com/Papooch/nestjs-cls/tree/main/docs/docs/05_considerations/01_security.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Considerations",permalink:"/nestjs-cls/considerations/"},next:{title:"Compatibility",permalink:"/nestjs-cls/considerations/compatibility"}},d={},a=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(t.p,{children:["It is often discussed whether ",(0,n.jsx)(t.a,{href:"https://nodejs.org/api/async_context.html",children:(0,n.jsx)(t.code,{children:"AsyncLocalStorage"})})," is safe to use for ",(0,n.jsx)(t.em,{children:"concurrent requests"})," (because of a possible context leak) and whether the context could be ",(0,n.jsx)(t.em,{children:"lost"})," throughout the duration of a request."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ClsMiddleware"})," and ",(0,n.jsx)(t.code,{children:"ClsInterceptor"})," by default uses the safe ",(0,n.jsx)(t.code,{children:"run()"})," method, which it should not leak context, but in some rare cases, the context can be lost."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ClsGuard"})," (and ",(0,n.jsx)(t.code,{children:"ClsMiddleware"}),", if configured so) uses the less safe ",(0,n.jsx)(t.code,{children:"enterWith()"})," method, which might be needed in case the ",(0,n.jsx)(t.code,{children:"run()"})," method causes context loss."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"This has a consequence that should be taken into account:"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"enterWith"})," method is used, any consequent requests ",(0,n.jsx)(t.em,{children:"get access"})," to the CLS context of the previous request ",(0,n.jsxs)(t.em,{children:["until the request hits the ",(0,n.jsx)(t.code,{children:"enterWith"})," call"]}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["That means, when using ",(0,n.jsx)(t.code,{children:"ClsMiddleware"})," with the ",(0,n.jsx)(t.code,{children:"useEnterWith"})," option, or ",(0,n.jsx)(t.code,{children:"ClsGuard"})," to set up context, be sure to mount them as early in the request lifetime as possible and do not use any other enhancers that rely on ",(0,n.jsx)(t.code,{children:"ClsService"})," before them. For ",(0,n.jsx)(t.code,{children:"ClsGuard"}),", that means you should probably manually mount it in ",(0,n.jsx)(t.code,{children:"AppModule"})," if you require any other guard to run ",(0,n.jsx)(t.em,{children:"after"})," it."]}),"\n",(0,n.jsx)(t.p,{children:"The next chapter addresses compatibility with various transport protocols."})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1670:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>c});var n=s(7378);const o={},r=n.createContext(o);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);