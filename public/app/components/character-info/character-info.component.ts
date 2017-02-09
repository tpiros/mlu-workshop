import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'character-info',
  templateUrl: '/app/components/character-info/character-info.html'
})

export class CharacterInfoComponent implements OnInit {
  character: Object;
  
  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.route.params
    .switchMap(params => this.http.get(`/api/characters/${params['id']}`))
    .subscribe(result => this.character = result.json(), error => console.log(error));
  }
}