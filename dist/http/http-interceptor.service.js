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
var interceptable_store_1 = require('./interceptable-store');
var HttpInterceptorService = (function () {
    function HttpInterceptorService(store) {
        this.store = store;
        this._requestStore = this.store.createStore();
        this._responseStore = this.store.createStore();
    }
    HttpInterceptorService.prototype.request = function (url) {
        if (url === void 0) { url = interceptable_store_1.DEFAULT_URL_STORE; }
        return this._requestStore.setActiveStore(url);
    };
    HttpInterceptorService.prototype.response = function (url) {
        if (url === void 0) { url = interceptable_store_1.DEFAULT_URL_STORE; }
        return this._responseStore.setActiveStore(url);
    };
    HttpInterceptorService.prototype._interceptRequest = function (url, method, data) {
        return this._requestStore.getMatchedStores(url).reduce(function (d, i) {
            if (!d) {
                return d;
            }
            return i(d, method);
        }, data);
    };
    HttpInterceptorService.prototype._interceptResponse = function (url, method, response) {
        return this._responseStore.getMatchedStores(url).reduce(function (o, i) { return i(o, method); }, response);
    };
    HttpInterceptorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [interceptable_store_1.InterceptableStoreFactory])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());
exports.HttpInterceptorService = HttpInterceptorService;
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/http-interceptor.service.js.map