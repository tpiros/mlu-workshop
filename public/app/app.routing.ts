import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';

import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterInfoComponent,
  },
  {
    path: '**', //to handle 404 situations
    component: ApplicationComponent
  } 
];

export const routing = RouterModule.forRoot(routes);