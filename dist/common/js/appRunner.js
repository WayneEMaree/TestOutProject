"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var windowWrapper_html_1 = __importDefault(require("../html/windowWrapper.html"));
var moduleWindow_1 = __importDefault(require("./moduleWindow"));
var runner = (function () {
    var allApps = [];
    function init() {
        console.log('runner hit');
        var testModal = new moduleWindow_1.default('intialTest');
        allApps.push(moduleWindow_1.default);
    }
    function displayApps() {
        var wayne_dos10 = document.getElementById('home');
        var i = 0;
        while (i < allApps.length) {
            var existingHtml = wayne_dos10.innerHTML;
            wayne_dos10.innerHTML = existingHtml + windowWrapper_html_1.default;
            i += 1;
        }
    }
    function getApp(modalId) {
        var i = 0;
        while (i < allApps.length) {
            if (allApps[i].element.id = modalId) {
                return allApps[i];
            }
            i += 1;
        }
    }
    return {
        init: init,
        getApp: getApp,
    };
})();
runner.init();
//# sourceMappingURL=appRunner.js.map