"use strict";(self.webpackChunknestjs_cls_docs=self.webpackChunknestjs_cls_docs||[]).push([[775],{1763:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(4246),c=s(1670);const r={},t="Service Interface",l={id:"api/service-interface",title:"Service Interface",description:"ClsService",source:"@site/docs/04_api/01_service-interface.md",sourceDirName:"04_api",slug:"/api/service-interface",permalink:"/nestjs-cls/api/service-interface",draft:!1,unlisted:!1,editUrl:"https://github.com/Papooch/nestjs-cls/tree/main/docs/docs/04_api/01_service-interface.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"API",permalink:"/nestjs-cls/api/"},next:{title:"Module Options",permalink:"/nestjs-cls/api/module-options"}},o={},d=[{value:"ClsService",id:"clsservice",level:2},{value:"ClsContextOptions",id:"clscontextoptions",level:2}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"service-interface",children:"Service Interface"}),"\n",(0,i.jsx)(n.h2,{id:"clsservice",children:"ClsService"}),"\n",(0,i.jsxs)(n.p,{children:["The injectable ",(0,i.jsx)(n.code,{children:"ClsService"})," provides the following API to manipulate the cls context:"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"S"})," type parameter is used as the type of custom ",(0,i.jsx)(n.code,{children:"ClsStore"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"get"})})}),(0,i.jsx)(n.code,{children:"(): S"}),(0,i.jsx)(n.br,{}),"\n","Get the entire CLS context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"get"})})}),(0,i.jsx)(n.code,{children:"(key?: keyof S): S[key]"}),(0,i.jsx)(n.br,{}),"\n","Retrieve a value from the CLS context by key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"getId"})})}),(0,i.jsx)(n.code,{children:"(): string;"}),(0,i.jsx)(n.br,{}),"\n","Retrieve the request ID (a shorthand for ",(0,i.jsx)(n.code,{children:"cls.get(CLS_ID)"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"has"})})}),(0,i.jsx)(n.code,{children:"(key: keyof S): boolean"}),(0,i.jsx)(n.br,{}),"\n","Check if a key is in the CLS context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"set"})})}),(0,i.jsx)(n.code,{children:"(key: keyof S, value: S[key]): void"}),(0,i.jsx)(n.br,{}),"\n","Set a value on the CLS context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"setIfUndefined"})})}),(0,i.jsx)(n.code,{children:"(key: keyof S, value: S[key]): void"}),(0,i.jsx)(n.br,{}),"\n","Set a value on the CLS context ",(0,i.jsx)(n.em,{children:"only"})," if it hasn't been already set. Useful for ensuring idempotence if you have multiple entry points."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"run"})})}),(0,i.jsx)(n.code,{children:"(callback: () => T): T"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"run"})})}),(0,i.jsx)(n.code,{children:"(options: ClsContextOptions, callback: () => T): T;"}),(0,i.jsx)(n.br,{}),"\n","Run the callback in a shared CLS context. Optionally takes an ",(0,i.jsx)(n.a,{href:"#clscontextoptions",children:"options object"})," as the first parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"runWith"})})}),(0,i.jsx)(n.code,{children:"(store: S, callback: () => T): T"}),(0,i.jsx)(n.br,{}),"\n","Run the callback in a new CLS context (while supplying the default store)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"enter"})})}),(0,i.jsx)(n.code,{children:"(): void;"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"enter"})})}),(0,i.jsx)(n.code,{children:"(options: ClsContextOptions): void"}),(0,i.jsx)(n.br,{}),"\n","Run any following code in a shared CLS context. Optionally takes an ",(0,i.jsx)(n.a,{href:"#clscontextoptions",children:"options object"})," as the first parameter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"enterWith"})})}),(0,i.jsx)(n.code,{children:"(store: S): void"}),(0,i.jsx)(n.br,{}),"\n","Run any following code in a new CLS context (while supplying the default store)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"exit"})})}),(0,i.jsx)(n.code,{children:"(callback: () => T): T"}),(0,i.jsx)(n.br,{}),"\n","Run the callback ",(0,i.jsx)(n.em,{children:"without"})," access to a shared CLS context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"isActive"})})}),(0,i.jsx)(n.code,{children:"(): boolean"}),(0,i.jsx)(n.br,{}),"\n","Whether the current code runs within an active CLS context."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"resolveProxyProviders"})})}),(0,i.jsx)(n.code,{children:"(): Promise<void>"}),(0,i.jsx)(n.br,{}),"\n","Manually trigger resolution of Proxy Providers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"initializePlugins"})})}),(0,i.jsx)(n.code,{children:"(): Promise<void>"}),(0,i.jsx)(n.br,{}),"\n","Manually trigger ",(0,i.jsx)(n.code,{children:"onClsInit"})," hooks of registered plugins."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clscontextoptions",children:"ClsContextOptions"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"run"})," and ",(0,i.jsx)(n.code,{children:"enter"})," methods can take an additional options object with the following settings:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"ifNested?:"})})}),(0,i.jsx)(n.code,{children:"'inherit' | 'reuse' | 'override'"}),(0,i.jsx)(n.br,{}),"\n","Sets the behavior of nested CLS context creation in case the method is invoked in an existing context. It has no effect if no parent context exist.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"inherit"})," (default) - Run the callback with a shallow copy of the parent context.",(0,i.jsx)(n.br,{}),"\n","Re-assignments of top-level properties will not be reflected in the parent context. However, modifications of existing properties ",(0,i.jsx)(n.em,{children:"will"})," be reflected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reuse"})," - Reuse existing context without creating a new one. All modifications to the\nexisting context will be reflected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"override"})," - Run the callback with an new empty context.",(0,i.jsx)(n.br,{}),"\n","No values from the parent context will be accessible within the wrapped code."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"::: Note"}),"\n",(0,i.jsxs)(n.p,{children:["Until ",(0,i.jsx)(n.code,{children:"v4"}),", the default behavior was ",(0,i.jsx)(n.code,{children:"override"}),". This was changed to ",(0,i.jsx)(n.code,{children:"inherit"})," since ",(0,i.jsx)(n.code,{children:"v4"})," to make the behavior more intuitive."]}),"\n",(0,i.jsx)(n.p,{children:":::"})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1670:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var i=s(7378);const c={},r=i.createContext(c);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);