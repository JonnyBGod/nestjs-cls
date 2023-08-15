import { ClsPlugin, ClsPluginFactory, ClsService, ClsStore } from 'nestjs-cls'

export class ClsPluginProxyFactory extends ClsPluginFactory {
  createPlugin(cls: ClsService<ClsStore>): ClsPlugin {
    return {
      name: 'cls-plugin-proxy',
      options: {
        extraProviders: []
      }
    }
  }
}