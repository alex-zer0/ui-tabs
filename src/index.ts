/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-ui-router';

import {uiTabs} from "./app/directives/ui-tabs";
import {app as appComponent} from './app/app';
import routesConfig from './routes';

import './less/index.less';

export const app: string = 'ui-tabs.app';

angular.module(app, ['ui.router'])
    .component('app', appComponent)
    .config(routesConfig)
    .directive('uiTabs', uiTabs);
