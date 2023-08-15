import { DynamicModule } from "@nestjs/common";
import { type } from "os";
import { ClsService } from "../cls.service";

export type PluginInitFunction = (clsService: ClsService) => void | Promise<void>;
export type PluginDestroyFunction = (clsService: ClsService) => void | Promise<void>;
export type PluginClsSetupFunction = (clsService: ClsService) => void | Promise<void>;

export interface ClsPlugin {
  name: string,
  options: ClsPluginOptions,
}

export interface ClsPluginOptions {
  onModuleInit: (clsService: ClsService) => void | Promise<void>,
  onModuleDestroy: (clsService: ClsService) => void | Promise<void>,
  onClsSetup: PluginClsSetupFunction
}

export abstract class ClsPluginFactory {
  abstract createPlugin(cls: ClsService): ClsPlugin;
}

export class ClsPluginModule {
  static forFeature(clsPluginFactory: ClsPluginFactory): DynamicModule {
    return {
      module: ClsPluginModule,
      global: true,
      providers: [],
    };
  }
}