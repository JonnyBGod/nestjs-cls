import {
    ClsModuleProxyClassProviderOptions,
    ClsProxyModuleProviderOptions,
    ProxyClassProvider,
    ProxyProvider,
} from './proxy-provider.interfaces';

export const isProxyClassProviderOptions = (
    provider: ClsProxyModuleProviderOptions,
): provider is ClsModuleProxyClassProviderOptions =>
    Reflect.has(provider, 'useClass');

export const isProxyClassProvider = (
    provider: ProxyProvider,
): provider is ProxyClassProvider => Reflect.has(provider, 'useClass');
