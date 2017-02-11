import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'character-info',
  templateUrl: '/app/components/character-info/character-info.html',
  styleUrls: ['./app/components/character-info/character-info.css']
})

export class CharacterInfoComponent implements OnInit {
  subscription: any;
  character: Object;
  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {

    // this.route.params
    // .map(params => params['id'])
    // .subscribe(id => { 
    //   this.http.get(`/api/characters/${id}`).subscribe(result => this.character = result.json());
    // });

    // this.route.params
    // .switchMap(params => this.http.get(`/api/characters/${params['id']}`), 
    // error => console.log(error));

    this.http.get(`/api/characters/${this.route.snapshot.params['id']}`)
    .map(response => response.json())
    .subscribe(result => this.character = result, error => console.log(error));
    
  }
}