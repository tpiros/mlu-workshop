import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { ApplicationComponent } from './components/application/application.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { WelcomePageComponent } from  './components/welcome-page/welcome-page.component';
import { FacetComponent } from './components/facet/facet-component';
import { NavigationComponent } from  './components/navigation/navigation-component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  declarations: [
    ApplicationComponent,
    CharacterListComponent,
    CharacterInfoComponent,
    WelcomePageComponent,
    FacetComponent,
    NavigationComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }