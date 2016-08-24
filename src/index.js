/// <reference path="../typings/index.d.ts" />
"use strict";
var angular = require('angular');
require('angular-ui-router');
var ui_tabs_1 = require("./app/directives/ui-tabs");
var app_1 = require('./app/app');
var routes_1 = require('./routes');
require('./less/index.less');
exports.app = 'ui-tabs.app';
angular.module(exports.app, ['ui.router'])
    .component('app', app_1.app)
    .config(routes_1["default"])
    .directive('uiTabs', ui_tabs_1.uiTabs);
//# sourceMappingURL=index.js.map