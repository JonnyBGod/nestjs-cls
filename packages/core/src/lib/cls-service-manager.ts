import { Logger } from '@nestjs/common';
import { globalClsService } from './cls-service.globals';
import { ClsStore } from './cls.options';
import { ClsService } from './cls.service';
import { pluginSetups } from './plugins/plugin.globals';
import { ProxyProviderManager } from './proxy-provider/proxy-provider-manager';

export class ClsServiceManager {
    private static clsService = globalClsService;

    /**
     * Retrieve a ClsService outside of Nest's DI.
     * @returns the ClsService
     */
    static getClsService<T extends ClsStore = ClsStore>(): ClsService<T> {
        const cls = this.clsService as ClsService<T>;
        return cls;
    }

    static async resolvePluginSetup() {
        for (const [pluginName, setupFunction] of pluginSetups) {
            Logger.debug(
                `Setting up plugin ${pluginName}`,
                'ClsServiceManager',
            );
            await setupFunction(this.clsService);
        }
    }

    /**
     * @deprecated use `resolveProxyProviders` on the `ClsService` instance
     */
    static async resolveProxyProviders() {
        return await ProxyProviderManager.resolveProxyProviders();
    }
}
