export class DateTabs {
    id: number;
    title: string;
    model: string;
}

const tabsMock: DateTabs[] = [
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

export function uiTabs() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            select: '=selectFuncReference'
        },
        template: require('./ui-tabs.html'),
        controller: /* @ngInject */ ($scope) => {
            $scope.tabs = tabsMock;
        }
    };
}
