import { Component } from '@angular/core';
import { SearchService } from './../../services/search/search-service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'sw-search',
  styleUrls: ['./search.css'],
  templateUrl: './search.html'
})

export class SearchComponent {
  public term: string;

  constructor(private searchService: SearchService) { }

  public search(): void {
    this.searchService.search(this.term).subscribe(response => this.searchService.results = response);
  }
}
