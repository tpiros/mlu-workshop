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
var search_service_1 = require('./../../services/search/search-service');
var SearchResultComponent = (function () {
    function SearchResultComponent(searchService) {
        this.searchService = searchService;
    }
    SearchResultComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.searchService.currentSearch.subscribe(function (results) {
            _this.query = _this.searchService.query;
            if (results.length === 0) {
                _this.results = [];
            }
            else {
                return _this.results = results;
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchResultComponent.prototype, "results", void 0);
    SearchResultComponent = __decorate([
        core_1.Component({
            selector: 'sw-search-result',
            templateUrl: '/app/components/search/search-result.html'
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
//# sourceMappingURL=search-result.component.js.map