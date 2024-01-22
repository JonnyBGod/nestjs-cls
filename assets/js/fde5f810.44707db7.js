"use strict";(self.webpackChunknestjs_cls_docs=self.webpackChunknestjs_cls_docs||[]).push([[738],{2599:(e,n,t)=>{t.d(n,{Z:()=>l});t(7378);var a=t(624);const r={tabItem:"tabItem_wHwb"};var s=t(4246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7378),r=t(624),s=t(9169),l=t(3620),i=t(9749),o=t(8981),u=t(56),c=t(8796);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:r}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=u??g;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(362);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=t(4246);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==a&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},7636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(4246),r=t(1670),s=t(8447),l=t(2599);const i={},o="Knex adapter",u={id:"plugins/available-plugins/transactional/knex-adapter",title:"Knex adapter",description:"Installation",source:"@site/docs/06_plugins/01_available-plugins/01-transactional/02-knex-adapter.md",sourceDirName:"06_plugins/01_available-plugins/01-transactional",slug:"/plugins/available-plugins/transactional/knex-adapter",permalink:"/nestjs-cls/plugins/available-plugins/transactional/knex-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/Papooch/nestjs-cls/tree/main/docs/docs/06_plugins/01_available-plugins/01-transactional/02-knex-adapter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Prisma adapter",permalink:"/nestjs-cls/plugins/available-plugins/transactional/prisma-adapter"},next:{title:"Creating a custom adapter",permalink:"/nestjs-cls/plugins/available-plugins/transactional/creating-custom-adapter"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Registration",id:"registration",level:2},{value:"Typing &amp; usage",id:"typing--usage",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"knex-adapter",children:"Knex adapter"}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @nestjs-cls/transactional-adapter-knex\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @nestjs-cls/transactional-adapter-knex\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @nestjs-cls/transactional-adapter-knex\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"ClsModule.forRoot({\n    plugins: [\n        new ClsPluginTransactional({\n            imports: [\n              // module in which the Knex is provided\n              KnexModule\n            ],\n            adapter: new TransactionalAdapterKnex({\n                // the injection token of the Knex client\n                knexInstanceToken: KNEX,\n            }),\n        }),\n    ],\n}),\n"})}),"\n",(0,a.jsx)(n.h2,{id:"typing--usage",children:"Typing & usage"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"tx"})," property on the ",(0,a.jsx)(n.code,{children:"TransactionHost<TransactionalAdapterKnex>"})," is typed as ",(0,a.jsx)(n.code,{children:"Knex"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="user.service.ts"',children:"@Injectable()\nclass UserService {\n    constructor(private readonly userRepository: UserRepository) {}\n\n    @Transactional()\n    async runTransaction() {\n        // highlight-start\n        // both methods are executed in the same transaction\n        const user = await this.userRepository.createUser('John');\n        const foundUser = await this.userRepository.getUserById(r1.id);\n        // highlight-end\n        assert(foundUser.id === user.id);\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="user.repository.ts"',children:"@Injectable()\nclass UserRepository {\n    constructor(\n        private readonly txHost: TransactionHost<TransactionalAdapterKnex>,\n    ) {}\n\n    async getUserById(id: number) {\n        // highlight-start\n        // txHost.tx is typed as Knex\n        return this.txHost.tx('user').where({ id }).first();\n        // highlight-end\n    }\n\n    async createUser(name: string) {\n        return this.txHost\n            .tx('user')\n            .insert({ name: name, email: `${name}@email.com` })\n            .returning('*');\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(7378);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);