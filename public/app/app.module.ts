import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ApplicationComponent } from './components/application/application.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { WelcomePageComponent } from  './components/welcome-page/welcome-page.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    ApplicationComponent,
    CharacterListComponent,
    CharacterInfoComponent,
    WelcomePageComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }