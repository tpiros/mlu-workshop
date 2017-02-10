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
require('rxjs/add/operator/switchMap');
var CharacterInfoComponent = (function () {
    function CharacterInfoComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    CharacterInfoComponent.prototype.ngOnInit = function () {
        // this.route.params
        // .map(params => params['id'])
        // .subscribe(id => { 
        //   this.http.get(`/api/characters/${id}`).subscribe(result => this.character = result.json());
        // });
        var _this = this;
        // this.route.params
        // .switchMap(params => this.http.get(`/api/characters/${params['id']}`), 
        // error => console.log(error));
        this.http.get("/api/characters/" + this.route.snapshot.params['id'])
            .subscribe(function (result) { return _this.character = result.json(); });
    };
    CharacterInfoComponent = __decorate([
        core_1.Component({
            selector: 'character-info',
            templateUrl: '/app/components/character-info/character-info.html',
            styleUrls: ['./app/components/character-info/character-info.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http])
    ], CharacterInfoComponent);
    return CharacterInfoComponent;
}());
exports.CharacterInfoComponent = CharacterInfoComponent;
//# sourceMappingURL=character-info.component.js.map