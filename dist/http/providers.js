/* tslint:disable:no-unused-variable */
"use strict";
var http_interceptor_service_1 = require('./http-interceptor.service');
// noinspection ES6UnusedImports
var interceptable_http_proxy_service_1 = require('./interceptable-http-proxy.service');
var interceptable_http_1 = require('./interceptable-http');
var interceptable_store_1 = require('./interceptable-store');
var SharedProviders = [
    interceptable_store_1.InterceptableStoreFactory,
    http_interceptor_service_1.HttpInterceptorService
].concat(interceptable_http_1.InterceptableHttpProviders);
// noinspection JSUnusedGlobalSymbols
exports.HTTP_INTERCEPTOR_PROVIDER = SharedProviders.concat(interceptable_http_proxy_service_1.InterceptableHttpProxyProviders);
// noinspection JSUnusedGlobalSymbols
exports.HTTP_INTERCEPTOR_NO_OVERRIDE_PROVIDER = SharedProviders.concat(interceptable_http_proxy_service_1.InterceptableHttpProxyNoOverrideProviders);
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/providers.js.map