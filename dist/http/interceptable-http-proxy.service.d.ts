import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from './http-interceptor.service';
export declare class InterceptableHttpProxyService {
    private http;
    private httpInterceptorService;
    private static _callStack;
    private static _extractUrl(url);
    constructor(http: Http, httpInterceptorService: HttpInterceptorService);
    get(target: any, p: PropertyKey, receiver: any): any;
    apply(target: any, thisArg: any, argArray?: any): any;
    private _responseCall(args, method, response);
}
export declare const InterceptableHttpProxyProviders: ({
    provide: any;
    useFactory: (proxy: any) => any;
    deps: any[];
} | {
    provide: typeof Http;
    useFactory: (backend: any, options: any, interceptor: any) => any;
    deps: (typeof XHRBackend | typeof RequestOptions | typeof HttpInterceptorService)[];
})[];
export declare const InterceptableHttpProxyNoOverrideProviders: {
    provide: typeof InterceptableHttpProxyService;
    useFactory: (http: any, interceptor: any) => any;
    deps: (typeof Http | typeof HttpInterceptorService)[];
}[];
