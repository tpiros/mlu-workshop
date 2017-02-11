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
var http_1 = require('@angular/http');
var FacetComponent = (function () {
    function FacetComponent(http) {
        this.http = http;
    }
    FacetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/characters')
            .map(function (response) { return response.json(); })
            .subscribe(function (result) { return _this.facets = result.facets; }, function (error) { return console.log(error); });
    };
    FacetComponent = __decorate([
        core_1.Component({
            selector: 'sw-facet',
            styleUrls: ['./app/components/facet/facet.css'],
            templateUrl: '/app/components/facet/facet.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FacetComponent);
    return FacetComponent;
}());
exports.FacetComponent = FacetComponent;
//# sourceMappingURL=facet-component.js.map