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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
var CharacterListComponent = (function () {
    function CharacterListComponent(http, route) {
        this.http = http;
        this.route = route;
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .map(function (params) {
            return params['homeworld'];
        })
            .subscribe(function (homeworld) {
            if (homeworld) {
                return _this.http.get("/api/characters?homeworld=" + homeworld)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (result) { return _this.characters = result.characters; });
            }
            else {
                return _this.http.get('/api/characters')
                    .map(function (response) { return response.json(); })
                    .subscribe(function (result) { return _this.characters = result.characters; });
            }
        });
    };
    ;
    CharacterListComponent = __decorate([
        core_1.Component({
            selector: 'character-list',
            styleUrls: ['app/components/character-list/character-list.css'],
            templateUrl: '/app/components/character-list/character-list.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.ActivatedRoute])
    ], CharacterListComponent);
    return CharacterListComponent;
}());
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=character-list.component.js.map