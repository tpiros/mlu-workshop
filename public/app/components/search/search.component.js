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
var SearchComponent = (function () {
    function SearchComponent() {
        this.fruits = [
            {
                id: 1,
                name: "Apple",
                searchText: "apple"
            },
            {
                id: 2,
                name: "Orange",
                searchText: "orange"
            },
            {
                id: 3,
                name: "Banana",
                searchText: "banana"
            }
        ];
    }
    SearchComponent.prototype.fruitSelected = function (fruit) {
        this.fruitName = fruit ? fruit.name : 'none';
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'sw-search',
            styleUrls: ['./app/components/search/search.css'],
            templateUrl: '/app/components/search/search.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map