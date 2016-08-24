"use strict";
exports.app = {
    template: require('./layout.html'),
    controller: function () {
        this.title = 'UI-tabs app';
        this.select = function (tab) {
            alert(tab.title);
        };
    }
};
//# sourceMappingURL=app.js.map