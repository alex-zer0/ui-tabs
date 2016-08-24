"use strict";
var DateTabs = (function () {
    function DateTabs() {
    }
    return DateTabs;
}());
exports.DateTabs = DateTabs;
var tabsMock = [
    {
        id: 1,
        title: 'First tab',
        model: 'Some model descr 1'
    },
    {
        id: 2,
        title: 'Second tab',
        model: 'Some model descr 2'
    },
    {
        id: 3,
        title: 'Third tab',
        model: 'Some model descr 3'
    }
];
function uiTabs() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            select: '=selectFuncReference'
        },
        template: require('./ui-tabs.html'),
        controller: /* @ngInject */ function ($scope) {
            $scope.tabs = tabsMock;
        }
    };
}
exports.uiTabs = uiTabs;
//# sourceMappingURL=ui-tabs.js.map