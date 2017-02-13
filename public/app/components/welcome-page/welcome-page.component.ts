import { Component, OnInit } from '@angular/core';
// import { Http, URLSearchParams } from '@angular/http';
// import { FormControl,  ReactiveFormsModule} from '@angular/forms';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  // selector: 'welcome-page',
  styleUrls: ['./app/components/welcome-page/welcome-page.css'],
  templateUrl: '/app/components/welcome-page/welcome-page.html'
})

export class WelcomePageComponent { }

// export class WelcomePageComponent implements OnInit {
//   constructor(private http: Http) { }
  
//   searchInput: FormControl = new FormControl('');
//   params: URLSearchParams = new URLSearchParams();
//   searchResults: Array<string>;
//   term: string;

//   ngOnInit() {
//     this.searchInput.valueChanges
//     .debounceTime(300)
//     .distinctUntilChanged()
//     .switchMap(response => {
//       this.params.set('term', response);
//       return this.http.get('/api/suggestions', { search: this.params })
//     })
//     .subscribe(response => {
//       console.log(`term: ${this.term} | response: ${response.json()} | response lenght: ${response.json().length}`);
//       return this.searchResults = response.json();
//     });
//   }
// }