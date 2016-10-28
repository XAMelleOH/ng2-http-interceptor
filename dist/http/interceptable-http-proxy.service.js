"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_interceptor_service_1 = require('./http-interceptor.service');
var rxjs_1 = require('rxjs');
var util_1 = require('./util');
var util_2 = require('util');
var InterceptableHttpProxyService = (function () {
    function InterceptableHttpProxyService(http, httpInterceptorService) {
        this.http = http;
        this.httpInterceptorService = httpInterceptorService;
    }
    InterceptableHttpProxyService._extractUrl = function (url) {
        var dirtyUrl = url[0];
        return util_2.isObject(dirtyUrl) && 'url' in dirtyUrl ? dirtyUrl.url : dirtyUrl;
    };
    InterceptableHttpProxyService.prototype.get = function (target, p, receiver) {
        InterceptableHttpProxyService._callStack.push(p);
        return receiver;
    };
    InterceptableHttpProxyService.prototype.apply = function (target, thisArg, argArray) {
        var method = InterceptableHttpProxyService._callStack.pop();
        var args = this.httpInterceptorService._interceptRequest(InterceptableHttpProxyService._extractUrl(argArray), method, argArray);
        // Check for request cancellation
        if (!args) {
            return rxjs_1.Observable.empty();
        }
        var response = this.http[method].apply(this.http, args);
        return response
            .flatMap(this._responseCall(args, method, response))
            .catch(this._responseCall(args, method, response));
    };
    InterceptableHttpProxyService.prototype._responseCall = function (args, method, response) {
        var _this = this;
        return function () { return _this.httpInterceptorService._interceptResponse(InterceptableHttpProxyService._extractUrl(args), method, response); };
    };
    InterceptableHttpProxyService._callStack = [];
    InterceptableHttpProxyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, http_interceptor_service_1.HttpInterceptorService])
    ], InterceptableHttpProxyService);
    return InterceptableHttpProxyService;
}());
exports.InterceptableHttpProxyService = InterceptableHttpProxyService;
exports.InterceptableHttpProxyProviders = [
    {
        provide: http_1.Http,
        useFactory: function (backend, options, interceptor) {
            return new Proxy(function () { return null; }, new InterceptableHttpProxyService(new http_1.Http(backend, options), interceptor));
        },
        deps: [http_1.XHRBackend, http_1.RequestOptions, http_interceptor_service_1.HttpInterceptorService]
    },
    util_1.identityFactory(InterceptableHttpProxyService, http_1.Http)
];
exports.InterceptableHttpProxyNoOverrideProviders = [
    {
        provide: InterceptableHttpProxyService,
        useFactory: function (http, interceptor) {
            return new Proxy(function () { return null; }, new InterceptableHttpProxyService(http, interceptor));
        },
        deps: [http_1.Http, http_interceptor_service_1.HttpInterceptorService]
    }
];
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/interceptable-http-proxy.service.js.map