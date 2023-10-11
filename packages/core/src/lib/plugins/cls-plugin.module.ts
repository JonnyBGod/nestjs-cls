import { DynamicModule, Type } from '@nestjs/common';
import { pluginSetups } from './plugin.globals';
import { ClsPluginFactory, ClsPluginOptions } from './plugin.interface';

export class ClsPluginModule {
    static forFeature(
        PluginClass: typeof ClsPluginFactory,
        options: ClsPluginOptions,
    ): DynamicModule {
        return {
            module: ClsPluginModule,
            global: true,
            providers: [
                PluginClass as Type<ClsPluginFactory>,
                {
                    provide: 'pokus',
                    inject: [PluginClass],
                    useFactory(pluginFactory: ClsPluginFactory) {
                        console.log('pluginFactory', pluginFactory);
                        const pluginOptions =
                            pluginFactory.createPlugin(options);
                        if (pluginOptions.onClsSetup)
                            pluginSetups.set(
                                pluginOptions.name,
                                pluginOptions.onClsSetup,
                            );
                    },
                },
            ],
        };
    }
}
