import { HttpInterceptor, RequestInterceptor, ResponseInterceptor } from './http-interceptor';
import { Interceptable } from './interceptable';
import { InterceptableStoreFactory } from './interceptable-store';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
export declare class HttpInterceptorService implements HttpInterceptor {
    private store;
    private _requestStore;
    private _responseStore;
    constructor(store: InterceptableStoreFactory);
    request(url?: string | RegExp): Interceptable<RequestInterceptor>;
    response(url?: string | RegExp): Interceptable<ResponseInterceptor>;
    _interceptRequest(url: string, method: string, data: any[]): any[];
    _interceptResponse(url: string, method: string, response: Observable<Response>): Observable<Response>;
}
