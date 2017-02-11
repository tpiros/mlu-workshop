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
    .map(params => {
      console.log(params['homeworld']);
      return params['homeworld']
    })
    .subscribe(homeworld => { 
      if (homeworld) {
        return this.http.get(`/api/characters?homeworld=${homeworld}`)
                        .map(response => response.json())
                        .subscribe(result => this.characters = result.characters);
      } else {
        return this.http.get('/api/characters')
                        .map(response => response.json())
                        .subscribe(result => this.characters = result.characters);
      }
    });
  }

  //   this.route.queryParams
  //   .switchMap(params => {
  //     let url: string;
  //     let param: string = params['homeworld'];
  //     if (param) {
  //       url = `/api/characters?homeworld=${param}`;
  //     } else {
  //       url = '/api/characters'
  //     }
  //     return this.http.get(url);
  //   }, error => console.log(error));
  // }
}