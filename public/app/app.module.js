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
// Core
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
// Components
var application_component_1 = require('./components/application/application.component');
var character_list_component_1 = require('./components/character-list/character-list.component');
var character_info_component_1 = require('./components/character-info/character-info.component');
var welcome_page_component_1 = require('./components/welcome-page/welcome-page.component');
var facet_component_1 = require('./components/facet/facet-component');
var navigation_component_1 = require('./components/navigation/navigation.component');
var search_component_1 = require('./components/search/search.component');
// Pipes
var text_trim_pipe_1 = require('./pipes/text-trim/text-trim.pipe');
// Routing
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_1.routing,
                forms_1.FormsModule
            ],
            declarations: [
                application_component_1.ApplicationComponent,
                character_list_component_1.CharacterListComponent,
                character_info_component_1.CharacterInfoComponent,
                welcome_page_component_1.WelcomePageComponent,
                facet_component_1.FacetComponent,
                navigation_component_1.NavigationComponent,
                text_trim_pipe_1.TrimPipe,
                search_component_1.SearchComponent
            ],
            bootstrap: [
                application_component_1.ApplicationComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map