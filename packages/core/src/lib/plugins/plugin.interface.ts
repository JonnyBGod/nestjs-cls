import { ClsService } from "../cls.service";


export interface ClsPlugin {
  name: string,
  options: ClsPluginOptions,
}

export interface ClsPluginOptions {
  onModuleInit: (clsService: ClsService) => void | Promise<void>,
  onModuleClose: (clsService: ClsService) => void | Promise<void>,
  onClsSetup: (clsService: ClsService) => void | Promise<void>,
}