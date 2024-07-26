"use strict";(self.webpackChunknestjs_cls_docs=self.webpackChunknestjs_cls_docs||[]).push([[5180],{2599:(e,n,t)=>{t.d(n,{Z:()=>i});t(7378);var a=t(624);const s={tabItem:"tabItem_wHwb"};var r=t(4246);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),s=t(624),r=t(9169),i=t(3620),o=t(9749),c=t(8981),l=t(56),d=t(6980);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=u(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[l,h]=j({queryString:t,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(362);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=t(4246);function b(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==a&&(l(n),i(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,s.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function T(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.Z)();return(0,f.jsx)(T,{...e,children:h(e.children)},String(n))}},4848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=t(4246),s=t(1670),r=t(8447),i=t(2599);const o={},c="@nestjs-cls/transactional",l={id:"plugins/available-plugins/transactional/index",title:"@nestjs-cls/transactional",description:"The Transactional plugin for nestjs-cls provides a generic interface that can be used to wrap any function call in",source:"@site/docs/06_plugins/01_available-plugins/01-transactional/index.md",sourceDirName:"06_plugins/01_available-plugins/01-transactional",slug:"/plugins/available-plugins/transactional/",permalink:"/nestjs-cls/plugins/available-plugins/transactional/",draft:!1,unlisted:!1,editUrl:"https://github.com/Papooch/nestjs-cls/tree/main/docs/docs/06_plugins/01_available-plugins/01-transactional/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Available Plugins",permalink:"/nestjs-cls/plugins/available-plugins/"},next:{title:"Prisma adapter",permalink:"/nestjs-cls/plugins/available-plugins/transactional/prisma-adapter"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Plugin registration",id:"plugin-registration",level:3},{value:"Using the <code>TransactionHost</code>",id:"using-the-transactionhost",level:3},{value:"Using the <code>@Transactional</code> decorator",id:"using-the-transactional-decorator",level:3},{value:"Using the <code>@InjectTransaction</code> decorator",id:"using-the-injecttransaction-decorator",level:3},{value:"Passing transaction options",id:"passing-transaction-options",level:3},{value:"Transaction propagation",id:"transaction-propagation",level:3},{value:"ClsPluginTransactional Interface",id:"clsplugintransactional-interface",level:2},{value:"TransactionHost Interface",id:"transactionhost-interface",level:2},{value:"Transactional decorator interface",id:"transactional-decorator-interface",level:3},{value:"Multiple databases",id:"multiple-databases",level:2},{value:"Registration",id:"registration",level:3},{value:"Usage",id:"usage",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"nestjs-clstransactional",children:"@nestjs-cls/transactional"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.em,{children:"Transactional"})," plugin for ",(0,a.jsx)(n.code,{children:"nestjs-cls"})," provides a generic interface that can be used to wrap any function call in\na CLS-enabled transaction by storing the transaction reference in the CLS context."]}),"\n",(0,a.jsx)(n.p,{children:"The transaction reference can be then retrieved in any other service and refer to the same transaction without having to pass it around."}),"\n",(0,a.jsxs)(n.p,{children:["The plugin is designed to be database-agnostic and can be used with any database library that supports transactions (via adapters). At the expense of using a ",(0,a.jsx)(n.a,{href:"#using-the-transactionhost",children:"minimal wrapper"}),", it deliberately ",(0,a.jsx)(n.strong,{children:"does not require any monkey-patching"})," of the underlying library."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(i.Z,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @nestjs-cls/transactional\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @nestjs-cls/transactional\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @nestjs-cls/transactional\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The plugin works in conjunction with various adapters that provide the actual transactional logic and types for the underlying database library, so you'll need to install one of those as well."}),"\n",(0,a.jsx)(n.p,{children:"Adapters for the following libraries are available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Prisma (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/prisma-adapter",children:"@nestjs-cls/transactional-adapter-prisma"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Knex (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/knex-adapter",children:"@nestjs-cls/transactional-adapter-knex"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Kysely (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/kysely-adapter",children:"@nestjs-cls/transactional-adapter-knex"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["Pg-promise (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/pg-promise-adapter",children:"@nestjs-cls/transactional-adapter-pg-promise"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["TypeORM (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/typeorm-adapter",children:"@nestjs-cls/transactional-adapter-typeorm"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["MongoDB (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/mongodb-adapter",children:"@nestjs-cls/transactional-adapter-mongodb"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["MongoDB (see ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/mongoose-adapter",children:"@nestjs-cls/transactional-adapter-mongoose"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Adapters ",(0,a.jsx)(n.em,{children:"will not"})," be implemented for the following libraries (unless there is a serious demand):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sequelize (since it already includes a ",(0,a.jsx)(n.a,{href:"https://sequelize.org/docs/v6/other-topics/transactions/#automatically-pass-transactions-to-all-queries",children:"built-in CLS-enabled transaction support"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["For this example, we'll use the ",(0,a.jsx)(n.code,{children:"prisma"})," library and the ",(0,a.jsxs)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/prisma-adapter",children:[(0,a.jsx)(n.code,{children:"@nestjs-cls/transactional-adapter-prisma"})," adapter"]}),". Later, you'll learn how to ",(0,a.jsx)(n.a,{href:"/nestjs-cls/plugins/available-plugins/transactional/creating-custom-adapter",children:"create your own adapter"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Suppose we already have a ",(0,a.jsx)(n.code,{children:"PrismaModule"})," which provides a ",(0,a.jsx)(n.code,{children:"PrismaClient"})," instance and two other services ",(0,a.jsx)(n.code,{children:"UserService"})," and ",(0,a.jsx)(n.code,{children:"AccountService"})," which we'd like to make transactional."]}),"\n",(0,a.jsx)(n.h3,{id:"plugin-registration",children:"Plugin registration"}),"\n",(0,a.jsxs)(n.p,{children:["To add register the transactional plugin with ",(0,a.jsx)(n.code,{children:"nestjs-cls"}),", we need to pass it to the ",(0,a.jsx)(n.code,{children:"forRoot"})," method of the ",(0,a.jsx)(n.code,{children:"ClsModule"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="app.module.ts"',children:"import { ClsModule } from 'nestjs-cls';\nimport { ClsPluginTransactional } from '@nestjs-cls/transactional';\nimport { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';\n// ... other imports\n\n@Module({\n    imports: [\n        PrismaModule,\n        ClsModule.forRoot({\n            plugins: [\n                // highlight-start\n                new ClsPluginTransactional({\n                    // if PrismaModule is not global, we need to make it available to the plugin\n                    imports: [PrismaModule],\n                    adapter: new TransactionalAdapterPrisma({\n                        // each adapter has its own options, see the adapter docs for more info\n                        prismaInjectionToken: PrismaClient,\n                    }),\n                }),\n                // highlight-end\n            ],\n        }),\n    ],\n    providers: [UserService, AccountService],\n})\nexport class AppModule {}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This registers a ",(0,a.jsx)(n.code,{children:"TransactionHost"})," provider in the global context which can be used to start a new transaction and retrieve the current transaction reference."]}),"\n",(0,a.jsxs)(n.h3,{id:"using-the-transactionhost",children:["Using the ",(0,a.jsx)(n.code,{children:"TransactionHost"})]}),"\n",(0,a.jsxs)(n.p,{children:["Now that we have the plugin registered, we can use the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," to start a new transaction and retrieve the current transaction reference."]}),"\n",(0,a.jsxs)(n.p,{children:["Suppose that any time we create an ",(0,a.jsx)(n.code,{children:"User"}),", we want to create an ",(0,a.jsx)(n.code,{children:"Account"})," for them as well and both operations must either succeed or fail. We can use the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," to start a new transaction and retrieve the current transaction reference."]}),"\n",(0,a.jsxs)(n.p,{children:["The type argument on the ",(0,a.jsx)(n.code,{children:"TransactionHost<Adapter>"})," makes sure that the ",(0,a.jsx)(n.code,{children:"tx"})," property is typed correctly and the ",(0,a.jsx)(n.code,{children:"withTransaction"})," method returns the correct type. This is ensured by the implementation of the adapter:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="user.service.ts"',children:"import { TransactionHost } from '@nestjs-cls/transactional';\nimport { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';\n// ... other imports\n\n@Injectable()\nclass UserService {\n    constructor(\n        // highlight-start\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n        // highlight-end\n        private readonly accountService: AccountService,\n    ) {}\n\n    async createUser(name: string): Promise<User> {\n        return this.txHost.withTransaction(async () => {\n            const user = await this.txHost.tx.user.create({ data: { name } });\n            await this.accountService.createAccountForUser(user.id);\n            return user;\n        });\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="account.service.ts"',children:"import { TransactionHost } from '@nestjs-cls/transactional';\nimport { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';\n// ... other imports\n\n@Injectable()\nclass AccountService {\n    constructor(\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n    ) {}\n\n    async createAccountForUser(id: number): Promise<Account> {\n        return this.txHost.tx.user.create({\n            data: { userId: id, number: Math.random() },\n        });\n    }\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Notice that we never used either raw ",(0,a.jsx)(n.code,{children:"PrismaClient"})," or the ",(0,a.jsx)(n.code,{children:"prisma.$transaction"})," directly. This is because the adapter takes care of that for us, otherwise the transaction would not be propagated in the CLS context."]})}),"\n",(0,a.jsxs)(n.h3,{id:"using-the-transactional-decorator",children:["Using the ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator can be used to wrap a method call in the ",(0,a.jsx)(n.code,{children:"withTransaction"})," call implicitly. This saves a lot of boilerplate code and makes the code more readable."]}),"\n",(0,a.jsxs)(n.p,{children:["Using the decorator, we can change the ",(0,a.jsx)(n.code,{children:"createUser"})," method like so without changing the behavior:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="user.service.ts"',children:"import { TransactionHost, Transactional } from '@nestjs-cls/transactional';\nimport { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';\n// ... other imports\n\n@Injectable()\nclass UserService {\n    constructor(\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n        private readonly accountService: AccountService,\n    ) {}\n\n    @Transactional()\n    async createUser(name: string): Promise<User> {\n        const user = await this.txHost.tx.user.create({ data: { name } });\n        await this.accountService.createAccountForUser(user.id);\n        return user;\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"using-the-injecttransaction-decorator",children:["Using the ",(0,a.jsx)(n.code,{children:"@InjectTransaction"})," decorator"]}),"\n",(0,a.jsxs)("small",{children:["since ",(0,a.jsx)(n.code,{children:"v2.2.0"})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@InjectTransaction"})," decorator can be used to inject a ",(0,a.jsx)(n.a,{href:"/nestjs-cls/features-and-use-cases/proxy-providers",children:"Proxy Provider"})," of the Transaction instance (the ",(0,a.jsx)(n.code,{children:"tx"})," property of the ",(0,a.jsx)(n.code,{children:"TransactionHost"}),") directly as a dependency."]}),"\n",(0,a.jsxs)(n.p,{children:["This is useful when you don't want to inject the entire ",(0,a.jsx)(n.code,{children:"TransactionHost"})," and only need the transaction instance itself. For example when you're migrating an existing codebase and don't want to change all database calls to use ",(0,a.jsx)(n.code,{children:"txHost.tx"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The type argument of ",(0,a.jsx)(n.code,{children:"Transaction<Adapter>"})," behaves silimarly to the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," type argument, and ensures that the transaction instance is typed correctly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="account.service.ts"',children:"import { InjectTransaction, Transaction, Transactional } from '@nestjs-cls/transactional';\nimport { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';\n// ... other imports\n\n@Injectable()\nclass AccountService {\n    constructor(\n        // highlight-start\n        @InjectTransaction()\n        private readonly tx: Transaction<TransactionalAdapterPrisma>,\n        // highlight-end\n    ) {}\n\n    async createAccountForUser(id: number): Promise<Account> {\n        return this.tx.create({\n            data: { userId: id, number: Math.random() },\n        });\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"important",children:[(0,a.jsxs)(n.p,{children:["When a transaction is not active, the ",(0,a.jsx)(n.code,{children:"Transaction"})," instance refers to the default non-transactional instance. However, if the CLS context is ",(0,a.jsx)(n.em,{children:"not active"}),", the ",(0,a.jsx)(n.code,{children:"Transaction"})," instance will be ",(0,a.jsx)(n.code,{children:"undefined"})," instead, which could cause runtime errors."]}),(0,a.jsxs)(n.p,{children:["Therefore, this feature works reliably only when the CLS context is active ",(0,a.jsx)(n.em,{children:"prior to starting the transaction"}),"."]}),(0,a.jsxs)(n.p,{children:["Additionally, ",(0,a.jsx)(n.em,{children:"some adapters do not support this feature"})," due to the nature of how transactions work in the library they implement."]}),(0,a.jsxs)(n.p,{children:["For these reasons, this is an opt-in feature that must be explicitly enabled with the ",(0,a.jsx)(n.code,{children:"enableTransactionProxy: true"})," option of the ",(0,a.jsx)(n.code,{children:"ClsPluginTransactional"})," constructor."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"new ClsPluginTransactional({\n    imports: [PrismaModule],\n    adapter: new TransactionalAdapterPrisma({\n        prismaInjectionToken: PrismaClient,\n    }),\n    // highlight-start\n    enableTransactionProxy: true,\n    // highlight-end\n});\n"})})]}),"\n",(0,a.jsx)(n.h3,{id:"passing-transaction-options",children:"Passing transaction options"}),"\n",(0,a.jsxs)(n.p,{children:["The both the ",(0,a.jsx)(n.code,{children:"withTransaction"})," method and the ",(0,a.jsx)(n.code,{children:"Transactional"})," decorator accepts an optional ",(0,a.jsx)(n.code,{children:"TransactionOptions"})," object as the first argument. This object can be used to configure the transaction, for example to set the isolation level or the timeout."]}),"\n",(0,a.jsxs)(n.p,{children:["The type of the object is provided by the adapter, so to enforce the correct type, you need to pass the adapter type argument to the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," or to the ",(0,a.jsx)(n.code,{children:"Transactional"})," decorator."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// highlight-start\n@Transactional<TransactionalAdapterPrisma>({ isolationLevel: 'Serializable' })\n// highlight-end\nasync createUser(name: string): Promise<User> {\n    const user = await this.txHost.tx.user.create({ data: { name } });\n    await this.accountService.createAccountForUser(user.id);\n    return user;\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"async createUser(name: string): Promise<User> {\n    // highlight-start\n    return this.txHost.withTransaction({ isolationLevel: 'Serializable' }, async () => {\n    // highlight-end\n        const user = await this.txHost.tx.user.create({ data: { name } });\n        await this.accountService.createAccountForUser(user.id);\n        return user;\n    });\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"transaction-propagation",children:"Transaction propagation"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to how the ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator work in ",(0,a.jsx)(n.a,{href:"https://www.baeldung.com/spring-transactional-propagation-isolation",children:"Spring"})," and other similar frameworks. The ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator and the ",(0,a.jsx)(n.code,{children:"withTransaction"})," method accept an optional ",(0,a.jsx)(n.code,{children:"propagation"})," option as the ",(0,a.jsx)(n.em,{children:"first parameter"})," which can be used to configure how the transaction should be propagated."]}),"\n",(0,a.jsxs)(n.p,{children:["The propagation option is controlled by the ",(0,a.jsx)(n.code,{children:"Propagation"})," enum, which has the following values:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"Required"})})}),":\n(",(0,a.jsx)(n.strong,{children:"default"}),") Reuse the existing transaction or create a new one if none exists."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"RequiresNew"})})}),":\nCreate a new transaction even if one already exists."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"NotSupported"})})}),":\nRun without a transaction even if one exists."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"Mandatory"})})}),":\nReuse an existing transaction, throw an exception otherwise"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"Never"})})}),":\nThrow an exception if an existing transaction exists, otherwise create a new one"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This parameter comes ",(0,a.jsx)(n.em,{children:"before"})," the ",(0,a.jsx)(n.code,{children:"TransactionOptions"})," object, if one is provided. The default behavior when a nested transaction decorator is encountered if no propagation option is provided, is to reuse the existing transaction or create a new one if none exists, which is the same as the ",(0,a.jsx)(n.code,{children:"Required"})," propagation option."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="user.service.ts"',children:"@Injectable()\nclass UserService {\n    constructor(\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n        private readonly accountService: AccountService,\n    ) {}\n\n    @Transactional(\n        // highlight-start\n        // Propagation.RequiresNew will always create a new transaction\n        // even if one already exists.\n        Propagation.RequiresNew,\n        // highlight-end\n    )\n    async createUser(name: string): Promise<User> {\n        const user = await this.txHost.tx.user.create({ data: { name } });\n        await this.accountService.createAccountForUser(user.id);\n        return user;\n    }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="account.service.ts"',children:"@Injectable()\nclass AccountService {\n    constructor(\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n    ) {}\n\n    @Transactional<TransactionalAdapterPrisma>(\n        // highlight-start\n        // Propagation.Mandatory enforces that an existing transaction is reused,\n        // otherwise an exception is thrown.\n        Propagation.Mandatory,\n        // When a propagation option is provided,\n        // the transaction options are passed as the second parameter.\n        {\n            isolationLevel: 'Serializable',\n        },\n        // highlight-end\n    )\n    async createAccountForUser(id: number): Promise<Account> {\n        return this.txHost.tx.user.create({\n            data: { userId: id, number: Math.random() },\n        });\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"clsplugintransactional-interface",children:"ClsPluginTransactional Interface"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ClsPluginTransactional"})," constructor takes an options object with the following properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"imports"})})}),(0,a.jsx)(n.code,{children:": any[]"}),(0,a.jsx)(n.br,{}),"\n","An array of NestJS modules that should be imported for the plugin to work. If the dependencies are available in the global context, this is not necessary."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"adapter"})})}),(0,a.jsx)(n.code,{children:": TransactionalAdapter"}),(0,a.jsx)(n.br,{}),"\n","An instance of the adapter that should be used for the plugin."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"enableTransactionProxy"})})}),(0,a.jsx)(n.code,{children:": boolean"})," (default: ",(0,a.jsx)(n.code,{children:"false"}),")",(0,a.jsx)(n.br,{}),"\n","Whether to enable injecting the Transaction instance directly using ",(0,a.jsx)(n.a,{href:"#using-the-injecttransaction-decorator",children:(0,a.jsx)(n.code,{children:"@InjectTransaction()"})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"transactionhost-interface",children:"TransactionHost Interface"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"TransactionHost"})," interface is the main working interface of the plugin. It provides the following API:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"tx"})})}),(0,a.jsx)(n.code,{children:": Transaction"}),(0,a.jsx)(n.br,{}),"\n","Reference to the currently active transaction. Depending on the adapter implementation for the underlying database library, this can be either a transaction client instance, a transaction object or a transaction ID. If no transaction is active, refers to the default non-transactional client instance (or undefined transaction ID)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"withTransaction"})})}),(0,a.jsx)(n.code,{children:"(callback: Promise): Promise"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"withTransaction"})})}),(0,a.jsx)(n.code,{children:"(options, callback): Promise"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"withTransaction"})})}),(0,a.jsx)(n.code,{children:"(propagation, callback): Promise"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"withTransaction"})})}),(0,a.jsx)(n.code,{children:"(propagation, options, callback): Promise"}),(0,a.jsx)(n.br,{}),"\n","Runs the callback in a transaction. Optionally takes ",(0,a.jsx)(n.code,{children:"Propagation"})," and ",(0,a.jsx)(n.code,{children:"TransactionOptions"})," as the first one or two parameters."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"withoutTransaction"})})}),(0,a.jsx)(n.code,{children:"(callback): Promise"}),(0,a.jsx)(n.br,{}),"\n","Runs the callback without a transaction (even if one is active in the parent scope)."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"isTransactionActive"})})}),(0,a.jsx)(n.code,{children:"(): boolean"}),(0,a.jsx)(n.br,{}),"\n","Returns whether a CLS-managed transaction is active in the current scope."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"transactional-decorator-interface",children:"Transactional decorator interface"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator can be used to wrap a method call in the ",(0,a.jsx)(n.code,{children:"withTransaction"})," call implicitly. It has the following call signatures:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"@Transactional"})})}),(0,a.jsx)(n.code,{children:"()"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"@Transactional"})})}),(0,a.jsx)(n.code,{children:"(propagation)"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"@Transactional"})})}),(0,a.jsx)(n.code,{children:"(options)"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"@Transactional"})})}),(0,a.jsx)(n.code,{children:"(propagation, options)"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Or when using named connections:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"@Transactional"})})}),(0,a.jsx)(n.code,{children:"(connectionName, propagation?, options?)"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"multiple-databases",children:"Multiple databases"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to other ",(0,a.jsx)(n.code,{children:"@nestjs/<orm>"})," libraries, the ",(0,a.jsx)(n.code,{children:"@nestjs-cls/transactional"})," plugin can be used to manage transactions for multiple database connections, or even multiple database libraries altogether."]}),"\n",(0,a.jsx)(n.h3,{id:"registration",children:"Registration"}),"\n",(0,a.jsxs)(n.p,{children:["To use multiple connections, register multiple instances of the ",(0,a.jsx)(n.code,{children:"ClsPluginTransactional"}),", each with an unique ",(0,a.jsx)(n.code,{children:"connectionName"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"ClsModule.forRoot({\n    plugins: [\n        new ClsPluginTransactional({\n            // highlight-start\n            connectionName: 'prisma-connection',\n            // highlight-end\n            imports: [PrismaModule],\n            adapter: new TransactionalAdapterPrisma({\n                prismaInjectionToken: PrismaClient,\n            }),\n        }),\n        new ClsPluginTransactional({\n            // highlight-start\n            connectionName: 'knex-connection',\n            // highlight-end\n            imports: [KnexModule],\n            adapter: new TransactionalAdapterKnex({\n                knexInstanceToken: KNEX,\n            }),\n        }),\n    ],\n}),\n"})}),"\n",(0,a.jsx)(n.p,{children:"This works for any number of connections and any number of database libraries."}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["To use the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," for a specific connection, you ",(0,a.jsx)(n.em,{children:"need to"})," use ",(0,a.jsx)(n.code,{children:"@InjectTransactionHost('connectionName')"})," decorator to inject the ",(0,a.jsx)(n.code,{children:"TransactionHost"}),". Otherwise Nest will try to inject the default unnamed instance which will result in an injection error."]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, the ",(0,a.jsx)(n.code,{children:"@InjectTransaction"})," decorator accepts the connection name as the first argument."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"@Injectable()\nclass UserService {\n    constructor(\n        // highlight-start\n        @InjectTransactionHost('prisma-connection')\n        // highlight-end\n        private readonly txHost: TransactionHost<TransactionalAdapterPrisma>,\n        // highlight-start\n        @InjectTransaction('prisma-connection')\n        // highlight-end\n        private readonly tx: Transaction<TransactionalAdapterPrisma>,\n    ) {}\n\n    // ...\n}\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@InjectTransactionHost('connectionName')"})," is a short for ",(0,a.jsx)(n.code,{children:"@Inject(getTransactionHostToken('connectionName'))"}),". The ",(0,a.jsx)(n.code,{children:"getTransactionHostToken"})," function is useful for when you need to mock the ",(0,a.jsx)(n.code,{children:"TransactionHost"})," in unit tests."]}),(0,a.jsxs)(n.p,{children:["Similarly, ",(0,a.jsx)(n.code,{children:"@InjectTransaction('connectionName')"})," is a short for ",(0,a.jsx)(n.code,{children:"@Inject(getTransactionToken('connectionName'))"}),"."]})]}),"\n",(0,a.jsxs)(n.p,{children:["In a similar fashion, using the ",(0,a.jsx)(n.code,{children:"@Transactional"})," decorator requires the ",(0,a.jsx)(n.code,{children:"connectionName"})," to be passed as the first argument."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// highlight-start\n@Transactional('prisma-connection')\n// highlight-end\nasync createUser(name: string): Promise<User> {\n    await this.accountService.createAccountForUser(user.id);\n    return user;\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(7378);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);