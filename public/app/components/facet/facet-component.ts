import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: '[sw-facet]',
  styleUrls: ['./app/components/facet/facet.css'],
  templateUrl: '/app/components/facet/facet.html'
})
export class FacetComponent implements OnInit {
  facets: Object;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/characters')
    .map(response => response.json())
    .subscribe(result => this.facets = result.facets, error => console.log(error));
  }
}