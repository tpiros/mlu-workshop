import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  public currentSearch: ReplaySubject<any> = new ReplaySubject(1);
  public params: URLSearchParams = new URLSearchParams();
  public results: Observable<ReplaySubject<any>>;
  public query: string;

  constructor(private http: Http) { }

  public search(term: string): Observable<ReplaySubject<any>> {
    this.query = term;
    this.params.set('term', term);
    return this.http.get('/api/search', { search: this.params }).map(response => {
      this.currentSearch.next(response.json());
      return this.currentSearch;
    });
  }
}
