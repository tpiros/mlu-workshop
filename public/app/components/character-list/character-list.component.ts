import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'character-list',
  templateUrl: '/app/components/character-list/character-list.html'
})

export class CharacterListComponent implements OnInit {
  characters: Array<string>;
  
  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/characters')
    .map(response => response.json())
    .subscribe(result => this.characters = result, error => console.log(error));
  }
}