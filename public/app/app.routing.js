"use strict";
var router_1 = require('@angular/router');
var application_component_1 = require('./components/application/application.component');
var character_list_component_1 = require('./components/character-list/character-list.component');
var character_info_component_1 = require('./components/character-info/character-info.component');
var welcome_page_component_1 = require('./components/welcome-page/welcome-page.component');
var routes = [
    {
        path: '',
        component: welcome_page_component_1.WelcomePageComponent
    },
    {
        path: 'characters',
        component: character_list_component_1.CharacterListComponent
    },
    {
        path: 'characters/:id',
        component: character_info_component_1.CharacterInfoComponent,
    },
    {
        path: '**',
        component: application_component_1.ApplicationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map