/// <reference path="../typings/index.d.ts" />
"use strict";
exports.__esModule = true;
exports["default"] = routesConfig;
/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
        url: '/',
        component: 'app'
    });
}
//# sourceMappingURL=routes.js.map