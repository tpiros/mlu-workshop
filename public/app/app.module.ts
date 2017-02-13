// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// Components
import { ApplicationComponent } from './components/application/application.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { WelcomePageComponent } from  './components/welcome-page/welcome-page.component';
import { FacetComponent } from './components/facet/facet-component';
import { NavigationComponent } from  './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultComponent } from './components/search/search-result.component';

// Pipes
import { TrimPipe } from './pipes/text-trim/text-trim.pipe'

// Services
import { SearchService } from './services/search/search-service';

// Routing
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  declarations: [
    ApplicationComponent,
    CharacterListComponent,
    CharacterInfoComponent,
    WelcomePageComponent,
    FacetComponent,
    NavigationComponent,
    TrimPipe,
    SearchComponent,
    SearchResultComponent
  ],
  providers: [
    SearchService
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }