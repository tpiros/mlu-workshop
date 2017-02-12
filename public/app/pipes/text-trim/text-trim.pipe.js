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
var TrimPipe = (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (text, numberOfChars) {
        if (numberOfChars === void 0) { numberOfChars = 25; }
        return text.split('').slice(0, numberOfChars).join('') + " ...";
    };
    TrimPipe = __decorate([
        core_1.Pipe({ name: 'trim' }), 
        __metadata('design:paramtypes', [])
    ], TrimPipe);
    return TrimPipe;
}());
exports.TrimPipe = TrimPipe;
//# sourceMappingURL=text-trim.pipe.js.map