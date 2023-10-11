import { DynamicModule, Module, Type, ValueProvider } from '@nestjs/common';
import {
    ClsPluginFactory,
    ClsPluginOptions,
    ClsService,
    ClsServiceManager,
    CLS_REQ,
    CLS_RES,
} from 'nestjs-cls';
import { ProxyProviderManager } from './proxy-provider-manager';
import { ClsProxyModuleProviderOptions } from './proxy-provider.interfaces';

const clsServiceProvider: ValueProvider<ClsService> = {
    provide: ClsService,
    useValue: ClsServiceManager.getClsService(),
};

const commonProviders = [
    clsServiceProvider,
    ProxyProviderManager.createProxyProviderFromExistingKey(CLS_REQ),
    ProxyProviderManager.createProxyProviderFromExistingKey(CLS_RES),
];

@Module({})
export class ClsProxyModule extends ClsPluginFactory<{ name: string }> {
    createPlugin(options: { name: string }) {
        return {
            name: options.name,
            onClsSetup: async () => {
                await ProxyProviderManager.resolveProxyProviders();
            },
        };
    }

    static forFeature(...proxyProviderClasses: Array<Type>): DynamicModule {
        const proxyProviders =
            this.createProxyClassProviders(proxyProviderClasses);
        const providers = [...commonProviders];
        return {
            module: ClsProxyModule,
            providers: [...providers, ...proxyProviders],
            exports: [...providers, ...proxyProviders.map((p) => p.provide)],
        };
    }

    static forFeatureAsync(
        options: ClsProxyModuleProviderOptions,
    ): DynamicModule {
        const proxyProvider = ProxyProviderManager.createProxyProvider(options);
        const providers = [
            ...commonProviders,
            ...(options.extraProviders ?? []),
        ];
        return {
            module: ClsProxyModule,
            imports: options.imports ?? [],
            providers: [...providers, proxyProvider],
            exports: [...commonProviders, proxyProvider.provide],
        };
    }

    private static createProxyClassProviders(
        proxyProviderClasses?: Array<Type>,
    ) {
        return (
            proxyProviderClasses?.map((providerClass) =>
                ProxyProviderManager.createProxyProvider({
                    useClass: providerClass,
                }),
            ) ?? []
        );
    }
}
