import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'sw-facet',
  styleUrls: ['./facet.css'],
  templateUrl: './facet.html'
})
export class FacetComponent implements OnInit {
  public facets: object;
  constructor(private http: Http) { }

  public ngOnInit() {
    this.http.get('/api/characters')
    .map(response => response.json())
    .subscribe(result => this.facets = result.facets, error => console.error(error));
  }
}
