import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Interceptable, Interceptor } from './interceptable';
export declare type RequestInterceptor = Interceptor<any[], any[]>;
export declare type ResponseInterceptor = Interceptor<Observable<Response>, Observable<Response>>;
export interface HttpInterceptor {
    request(url?: string | RegExp): Interceptable<RequestInterceptor>;
    response(url?: string | RegExp): Interceptable<ResponseInterceptor>;
    /** @private*/
    _interceptRequest(url: string, method: string, data: any[]): any[];
    /** @private */
    _interceptResponse(url: string, method: string, response: Observable<Response>): Observable<Response>;
}
