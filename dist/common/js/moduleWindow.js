"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var windowWrapper_html_1 = __importDefault(require("../html/windowWrapper.html"));
var moduleWindow = /** @class */ (function () {
    function moduleWindow(modalId, IElem) {
        var _this = this;
        this.element = IElem.element || document.createElement('div');
        this.element.innerHTML = IElem.element.innerHTML || windowWrapper_html_1.default;
        this.element.id = IElem.element.id || modalId;
        this.element.addEventListener("mousedown", function (e) { return _this.useGenericWindowFunctionMove(e); });
        this.element.addEventListener("mouseup", function (e) { return _this.useGenericWindowFunctionStop(e); });
    }
    moduleWindow.prototype.getMetaData = function () {
        return this.element.id;
    };
    moduleWindow.prototype.useGenericWindowFunctionMove = function (event) {
        modularFunctions.startMovement(this.element.id, event);
    };
    moduleWindow.prototype.useGenericWindowFunctionStop = function (event) {
        modularFunctions.stopMovement();
    };
    return moduleWindow;
}());
;
Object.defineProperty(moduleWindow, 'modalId', {
    get: function () {
        return this.element.id;
    },
    set: function (modalId) {
        this.element.id = modalId;
    },
});
exports.default = moduleWindow;
//# sourceMappingURL=moduleWindow.js.map