import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  constructor(private http: Http) { }
  
  currentSearch:ReplaySubject<any> = new ReplaySubject(1);
  params: URLSearchParams = new URLSearchParams();
  results: Observable<ReplaySubject<any>>;
  query: string;

  search(term: string): Observable<ReplaySubject<any>> {
    this.query = term;
    this.params.set('term', term);
    return this.http.get('/api/search', { search: this.params }).map(response => {
      this.currentSearch.next(response.json());
      return this.currentSearch;
    });
  }
}