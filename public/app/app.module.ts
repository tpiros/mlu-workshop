// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { ApplicationComponent } from './components/application/application.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { FacetComponent } from './components/facet/facet-component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchResultComponent } from './components/search/search-result.component';
import { SearchComponent } from './components/search/search.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

// Pipes
import { TrimPipe } from './pipes/text-trim/text-trim.pipe';

// Services
import { SearchService } from './services/search/search-service';

// Routing
import { Routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
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
