import { PluginClsSetupFunction, PluginDestroyFunction } from "./plugin.interface";

export const pluginSetups = new Map<string, PluginClsSetupFunction>();
export const pluginInits = new Map<string, PluginDestroyFunction>();
export const pluginDestroys = new Map<string, PluginDestroyFunction>();

