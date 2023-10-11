import { ClsService } from '../cls.service';

export type PluginInitFunction = (
    clsService: ClsService,
) => void | Promise<void>;
export type PluginDestroyFunction = (
    clsService: ClsService,
) => void | Promise<void>;
export type PluginClsSetupFunction = (
    clsService: ClsService,
) => void | Promise<void>;

export interface ClsPluginOptions {
    name: string;
    onModuleInit?: PluginInitFunction;
    onModuleDestroy?: PluginDestroyFunction;
    onClsSetup?: PluginClsSetupFunction;
}

export abstract class ClsPluginFactory<T = any> {
    abstract createPlugin(options: T): ClsPluginOptions;
}

export type ClsPluginOptionsType<T extends ClsPluginFactory> = Parameters<
    T['createPlugin']
>[0];

export type ClsPluginWithOptions<T extends typeof ClsPluginFactory> = [
    PluginClass: T,
    options: ClsPluginOptionsType<InstanceType<T>>,
];
