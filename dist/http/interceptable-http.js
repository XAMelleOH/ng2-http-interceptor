"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var interceptable_http_proxy_service_1 = require('./interceptable-http-proxy.service');
var util_1 = require('./util');
var InterceptableHttp = (function (_super) {
    __extends(InterceptableHttp, _super);
    function InterceptableHttp(_backend, _defaultOptions) {
        _super.call(this, _backend, _defaultOptions);
    }
    InterceptableHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions])
    ], InterceptableHttp);
    return InterceptableHttp;
}(http_1.Http));
exports.InterceptableHttp = InterceptableHttp;
exports.InterceptableHttpProviders = [
    util_1.identityFactory(InterceptableHttp, interceptable_http_proxy_service_1.InterceptableHttpProxyService)
];
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/interceptable-http.js.map