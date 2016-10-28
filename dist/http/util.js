"use strict";
exports.identityFactory = function (provide, obj) { return ({
    provide: provide,
    useFactory: function (proxy) { return proxy; },
    deps: [obj]
}); };
//# sourceMappingURL=/Users/xamelleoh/work/Phonak/ng2-http-interceptor/http/util.js.map