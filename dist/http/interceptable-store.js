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
var InterceptableStoreFactory = (function () {
    function InterceptableStoreFactory() {
    }
    // noinspection JSMethodCanBeStatic
    InterceptableStoreFactory.prototype.createStore = function () {
        return new InterceptableStore();
    };
    InterceptableStoreFactory = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InterceptableStoreFactory);
    return InterceptableStoreFactory;
}());
exports.InterceptableStoreFactory = InterceptableStoreFactory;
exports.DEFAULT_URL_STORE = '/';
var InterceptableStore = (function () {
    function InterceptableStore() {
        this.storeMatcher = {};
        this.stores = {};
        this.activeStore = exports.DEFAULT_URL_STORE;
    }
    Object.defineProperty(InterceptableStore.prototype, "store", {
        get: function () {
            return this._getStoreSafely(this.activeStore);
        },
        enumerable: true,
        configurable: true
    });
    InterceptableStore.prototype.addInterceptor = function (interceptor) {
        this.store.push(interceptor);
        return this;
    };
    InterceptableStore.prototype.removeInterceptor = function (interceptor) {
        var idx = this.store.indexOf(interceptor);
        if (idx === -1) {
            return this;
        }
        this.store.splice(idx, 1);
        return this;
    };
    InterceptableStore.prototype.clearInterceptors = function (interceptors) {
        var _this = this;
        if (interceptors === void 0) { interceptors = []; }
        if (interceptors.length > 0) {
            interceptors.forEach(function (i) { return _this.removeInterceptor(i); });
        }
        else {
            this.store.splice(0);
        }
        return this;
    };
    // ----------
    // Internal API
    InterceptableStore.prototype.setActiveStore = function (url) {
        if (url === void 0) { url = exports.DEFAULT_URL_STORE; }
        this.activeStore = String(url);
        if (url instanceof RegExp) {
            this.storeMatcher[this.activeStore] = url;
        }
        return this;
    };
    InterceptableStore.prototype.getStore = function (key) {
        if (key === void 0) { key = exports.DEFAULT_URL_STORE; }
        return this._getStoreSafely(key);
    };
    InterceptableStore.prototype.getMatchedStores = function (url) {
        var _this = this;
        if (url === void 0) { url = exports.DEFAULT_URL_STORE; }
        var backedUrl = "/" + url.replace('/', '\\/') + "/"; // Use it for direct string matching
        return Object.keys(this.stores)
            .filter(function (k) { return k === url || k === backedUrl || (_this.storeMatcher[k] && _this.storeMatcher[k].test(url)); })
            .filter(function (k, i, arr) { return k !== exports.DEFAULT_URL_STORE && arr.indexOf(k) === i; })
            .map(function (k) { return _this.getStore(k); })
            .reduce(function (stores, store) { return stores.concat(store); }, this.getStore(exports.DEFAULT_URL_STORE));
    };
    InterceptableStore.prototype._getStoreSafely = function (key) {
        return (this.stores[key] || (this.stores[key] = []));
    };
    return InterceptableStore;
}());
exports.InterceptableStore = InterceptableStore;
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/interceptable-store.js.map