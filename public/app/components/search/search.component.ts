import { Component } from '@angular/core';

@Component({
  selector: 'sw-search',
  styleUrls: ['./app/components/search/search.css'],
  templateUrl: '/app/components/search/search.html'
})
export class SearchComponent {
  fruitName: string;
  fruits: any[] = [
    {
      id: 1,
      name: "Apple",
      searchText: "apple"
    },
    {
      id: 2,
      name: "Orange",
      searchText: "orange"
    },
    {
      id: 3,
      name: "Banana",
      searchText: "banana"
    }
  ];


  public fruitSelected(fruit: any): any {
    this.fruitName = fruit ? fruit.name : 'none';
  }
}