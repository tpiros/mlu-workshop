import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'character-list',
  templateUrl: '/app/components/character-list/character-list.html'
})

export class CharacterListComponent {
  characters: Array<string>;
  constructor(private http: Http) {
    this.http.get('/api/characters')
    .map(response => response.json())
    .subscribe(result => this.characters = result);
  }
}