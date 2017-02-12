import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'character-list',
  styleUrls: ['app/components/character-list/character-list.css'],
  templateUrl: '/app/components/character-list/character-list.html'
})

export class CharacterListComponent implements OnInit {
  characters: Array<string>;
  
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .map(params => params['homeworld'])
    .subscribe(homeworld => homeworld !== undefined ? this.http.get(`/api/characters?homeworld=${homeworld}`).map(response => response.json()).subscribe(result => this.characters = result.characters) : this.http.get('/api/characters').map(response => response.json()).subscribe(result => this.characters = result.characters));
  };
}