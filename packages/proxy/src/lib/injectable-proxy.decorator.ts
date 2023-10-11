import { Injectable, SetMetadata } from '@nestjs/common';
import { CLS_PROXY_METADATA_KEY } from './proxy-provider.constants';

/**
 * Mark a Proxy provider with this decorator to distinguish it from regular NestJS singleton providers
 */
export function InjectableProxy() {
    return (target: any) =>
        Injectable()(SetMetadata(CLS_PROXY_METADATA_KEY, true)(target));
}
