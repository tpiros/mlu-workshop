import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SearchService } from './../../services/search/search-service';

@Component({
  selector: 'sw-search-result',
  templateUrl: '/app/components/search/search-result.html'
})

export class SearchResultComponent implements OnChanges {
  @Input() results: any;
  query: string;
  constructor(private searchService: SearchService) { }

  ngOnChanges() {
    this.searchService.currentSearch.subscribe(results => {
      this.query = this.searchService.query;
      console.log(this.query);
      if (results.length === 0) {
        return;
      } else {
        return this.results = results;
      }
    });
    
  }
}