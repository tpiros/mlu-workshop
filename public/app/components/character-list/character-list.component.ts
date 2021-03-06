import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  styleUrls: ['app/components/character-list/character-list.css'],
  templateUrl: '/app/components/character-list/character-list.html'
})

export class CharacterListComponent implements OnInit {
  public characters: Object[];

  constructor(private http: Http, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.route.queryParams
    .map(params => params['homeworld'])
    .subscribe(homeworld => homeworld !== undefined ?
      this.http.get(`/api/characters?homeworld=${homeworld}`)
      .map(response => response.json())
      .subscribe(result => this.characters = result.characters) :
      this.http.get('/api/characters').
      map(response => response.json()).
      subscribe(result => this.characters = result.characters));
  };
}
