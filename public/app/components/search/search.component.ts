import { Component } from '@angular/core';
import { SearchService } from './../../services/search/search-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'sw-search',
  styleUrls: ['./app/components/search/search.css'],
  templateUrl: '/app/components/search/search.html'
})

export class SearchComponent {
  term: string; 
  constructor(private searchService: SearchService) { }
  search() {
    this.searchService.search(this.term).subscribe(response => this.searchService.results = response);
  }
}