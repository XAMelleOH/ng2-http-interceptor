import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { InterceptableHttpProxyService } from './interceptable-http-proxy.service';
import { InterceptableStoreFactory } from './interceptable-store';
export declare const HTTP_INTERCEPTOR_PROVIDER: (typeof InterceptableStoreFactory | typeof HttpInterceptorService | {
    provide: any;
    useFactory: (proxy: any) => any;
    deps: any[];
} | {
    provide: typeof Http;
    useFactory: (backend: any, options: any, interceptor: any) => any;
    deps: (typeof XHRBackend | typeof RequestOptions | typeof HttpInterceptorService)[];
})[];
export declare const HTTP_INTERCEPTOR_NO_OVERRIDE_PROVIDER: (typeof InterceptableStoreFactory | typeof HttpInterceptorService | {
    provide: any;
    useFactory: (proxy: any) => any;
    deps: any[];
} | {
    provide: typeof InterceptableHttpProxyService;
    useFactory: (http: any, interceptor: any) => any;
    deps: (typeof Http | typeof HttpInterceptorService)[];
})[];
