"use strict";(self.webpackChunknestjs_cls_docs=self.webpackChunknestjs_cls_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"documentationSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/nestjs-cls/introduction/installation","docId":"introduction/installation"},{"type":"link","label":"Quick Start","href":"/nestjs-cls/introduction/quick-start","docId":"introduction/quick-start"},{"type":"link","label":"How it works","href":"/nestjs-cls/introduction/how-it-works","docId":"introduction/how-it-works"}],"href":"/nestjs-cls/"},{"type":"category","label":"Setting up the CLS context","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using a Middleware","href":"/nestjs-cls/setting-up-cls-context/using-a-middleware","docId":"setting-up-cls-context/using-a-middleware"},{"type":"link","label":"Using a Guard","href":"/nestjs-cls/setting-up-cls-context/using-a-guard","docId":"setting-up-cls-context/using-a-guard"},{"type":"link","label":"Using an Interceptor","href":"/nestjs-cls/setting-up-cls-context/using-an-interceptor","docId":"setting-up-cls-context/using-an-interceptor"},{"type":"link","label":"Using a Decorator","href":"/nestjs-cls/setting-up-cls-context/using-a-decurator","docId":"setting-up-cls-context/using-a-decurator"}],"href":"/nestjs-cls/setting-up-cls-context/"},{"type":"category","label":"Features and use cases","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Request ID","href":"/nestjs-cls/features-and-use-cases/request-id","docId":"features-and-use-cases/request-id"},{"type":"link","label":"Additional CLS Setup","href":"/nestjs-cls/features-and-use-cases/additional-cls-setup","docId":"features-and-use-cases/additional-cls-setup"},{"type":"link","label":"Breaking out of DI","href":"/nestjs-cls/features-and-use-cases/breakin-out-of-di","docId":"features-and-use-cases/breakin-out-of-di"},{"type":"link","label":"Usage outside of web request","href":"/nestjs-cls/features-and-use-cases/usage-outside-of-web-request","docId":"features-and-use-cases/usage-outside-of-web-request"},{"type":"link","label":"Type safety and type inference","href":"/nestjs-cls/features-and-use-cases/type-safety-and-type-inference","docId":"features-and-use-cases/type-safety-and-type-inference"},{"type":"link","label":"Proxy Providers","href":"/nestjs-cls/features-and-use-cases/proxy-providers","docId":"features-and-use-cases/proxy-providers"}],"href":"/nestjs-cls/features-and-use-cases/"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Service Interface","href":"/nestjs-cls/api/service-interface","docId":"api/service-interface"},{"type":"link","label":"Module Options","href":"/nestjs-cls/api/module-options","docId":"api/module-options"}],"href":"/nestjs-cls/api/"},{"type":"category","label":"Considerations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Security","href":"/nestjs-cls/considerations/security","docId":"considerations/security"},{"type":"link","label":"Compatibility","href":"/nestjs-cls/considerations/compatibility","docId":"considerations/compatibility"}],"href":"/nestjs-cls/considerations/"},{"type":"category","label":"Migration guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"v2.x \u2192 v3.x","href":"/nestjs-cls/migration-guide/v2x-v3x","docId":"migration-guide/v2x-v3x"}],"href":"/nestjs-cls/migration-guide/"}]},"docs":{"api/index":{"id":"api/index","title":"API","description":"This chapter describes the programmatic API of the ClsService and the ClsModule options.","sidebar":"documentationSidebar"},"api/module-options":{"id":"api/module-options","title":"Module Options","description":"forRoot(Async)","sidebar":"documentationSidebar"},"api/service-interface":{"id":"api/service-interface","title":"Service Interface","description":"ClsService","sidebar":"documentationSidebar"},"considerations/compatibility":{"id":"considerations/compatibility","title":"Compatibility","description":"The table below outlines the compatibility with some platforms:","sidebar":"documentationSidebar"},"considerations/index":{"id":"considerations/index","title":"Considerations","description":"This chapter exists to help you decide whether this library is compatible with your project and to address any concerns that you may have.","sidebar":"documentationSidebar"},"considerations/security":{"id":"considerations/security","title":"Security","description":"It is often discussed whether AsyncLocalStorage is safe to use for concurrent requests (because of a possible context leak) and whether the context could be lost_ throughout the duration of a request.","sidebar":"documentationSidebar"},"features-and-use-cases/additional-cls-setup":{"id":"features-and-use-cases/additional-cls-setup","title":"Additional CLS Setup","description":"The CLS middleware/guard/interceptor provide some default functionality, but sometimes you might want to store more contextual things in the CLS.","sidebar":"documentationSidebar"},"features-and-use-cases/breakin-out-of-di":{"id":"features-and-use-cases/breakin-out-of-di","title":"Breaking out of DI","description":"While this package aims to be compatible with NestJS\'s Dependency Injection, it is also possible to access the CLS context outside of it.","sidebar":"documentationSidebar"},"features-and-use-cases/index":{"id":"features-and-use-cases/index","title":"Features and use cases","description":"In addition to the basic functionality described in the Quick start chapter, this module provides several other features to make your life as a developer easier.","sidebar":"documentationSidebar"},"features-and-use-cases/proxy-providers":{"id":"features-and-use-cases/proxy-providers","title":"Proxy Providers","description":"Since v3.0","sidebar":"documentationSidebar"},"features-and-use-cases/request-id":{"id":"features-and-use-cases/request-id","title":"Request ID","description":"Because of a shared storage, CLS is an ideal tool for tracking request (correlation) IDs for the purpose of logging. This package provides an option to automatically generate request IDs in the middleware/guard/interceptor, if you pass { generateId: true } to its options. By default, the generated ID is a string based on Math.random(), but you can provide a custom function in the idGenerator option.","sidebar":"documentationSidebar"},"features-and-use-cases/type-safety-and-type-inference":{"id":"features-and-use-cases/type-safety-and-type-inference","title":"Type safety and type inference","description":"Since v2.0","sidebar":"documentationSidebar"},"features-and-use-cases/usage-outside-of-web-request":{"id":"features-and-use-cases/usage-outside-of-web-request","title":"Usage outside of web request","description":"Sometimes, a part of the app that relies on the CLS storage might need to be called outside of the context of a web request - for example, in a Cron job, while consuming a Queue or during the application bootstrap. In such cases, there are no enhancers that can be bound to the handler to set up the context.","sidebar":"documentationSidebar"},"introduction/how-it-works":{"id":"introduction/how-it-works","title":"How it works","description":"Continuation-local storage provides a common space for storing and retrieving data throughout the life of a function/callback call chain. In NestJS, this allows for sharing request data across the lifetime of a single request - without the need for request-scoped providers. It also makes it easy to track and log request ids throughout the whole application.","sidebar":"documentationSidebar"},"introduction/index":{"id":"introduction/index","title":"Introduction","description":"A continuation-local\\\\* storage module compatible with NestJS\' dependency injection based on Node\'s AsyncLocalStorage.","sidebar":"documentationSidebar"},"introduction/installation":{"id":"introduction/installation","title":"Installation","description":"Install as any other NPM package using your favorite package manager.","sidebar":"documentationSidebar"},"introduction/quick-start":{"id":"introduction/quick-start","title":"Quick Start","description":"Background","sidebar":"documentationSidebar"},"migration-guide/index":{"id":"migration-guide/index","title":"Migration guide","description":"In case you\'re upgrading to a new major version of this library, follow the according migration guide.","sidebar":"documentationSidebar"},"migration-guide/v2x-v3x":{"id":"migration-guide/v2x-v3x","title":"v2.x \u2192 v3.x","description":"-   The root registration method was renamed from register (resp. registerAsync) to forRoot (resp. forRootAsync) to align with the convention.","sidebar":"documentationSidebar"},"setting-up-cls-context/index":{"id":"setting-up-cls-context/index","title":"Setting up the CLS context","description":"This package provides three methods of setting up the CLS context for incoming requests. This is mainly due to the fact that different underlying platforms are compatible with only some of these methods - see Compatibility considerations.","sidebar":"documentationSidebar"},"setting-up-cls-context/using-a-decurator":{"id":"setting-up-cls-context/using-a-decurator","title":"Using a Decorator","description":"The @UseCls() decorator can be used at a method level to declaratively wrap the method with a cls.run() call. This method should only be used outside of the context of a web request.","sidebar":"documentationSidebar"},"setting-up-cls-context/using-a-guard":{"id":"setting-up-cls-context/using-a-guard","title":"Using a Guard","description":"The ClsGuard can be also used set up the CLS context. While it is not a \\"guard\\" per-se, it\'s the second best place to set up the CLS context, since after a middleware, it is the first piece of code that the request hits.","sidebar":"documentationSidebar"},"setting-up-cls-context/using-a-middleware":{"id":"setting-up-cls-context/using-a-middleware","title":"Using a Middleware","description":"This section applies only if you use a HTTP transport (REST or GraphQL)","sidebar":"documentationSidebar"},"setting-up-cls-context/using-an-interceptor":{"id":"setting-up-cls-context/using-an-interceptor","title":"Using an Interceptor","description":"Another place to initiate the CLS context is an ClsInterceptor, which, unlike the ClsGuard uses AsyncLocalStorage#run method to wrap the following code, which is considered safer than enterWith.","sidebar":"documentationSidebar"}}}')}}]);