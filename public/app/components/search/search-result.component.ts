import { Component, Input, OnChanges } from '@angular/core';
import { SearchService } from './../../services/search/search-service';

@Component({
  selector: 'sw-search-result',
  templateUrl: '/app/components/search/search-result.html'
})

export class SearchResultComponent implements OnChanges {
  @Input() public results: Object[];

  public query: string;

  constructor(private searchService: SearchService) { }

  public ngOnChanges() {
    this.searchService.currentSearch.subscribe(results => {
      this.query = this.searchService.query;
      if (results.length === 0) {
        this.results = [];
      } else {
        return this.results = results;
      }
    });
  }
}
