"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { Http, URLSearchParams } from '@angular/http';
// import { FormControl,  ReactiveFormsModule} from '@angular/forms';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
var WelcomePageComponent = (function () {
    function WelcomePageComponent() {
    }
    WelcomePageComponent = __decorate([
        core_1.Component({
            // selector: 'welcome-page',
            styleUrls: ['./app/components/welcome-page/welcome-page.css'],
            templateUrl: '/app/components/welcome-page/welcome-page.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomePageComponent);
    return WelcomePageComponent;
}());
exports.WelcomePageComponent = WelcomePageComponent;
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
//# sourceMappingURL=welcome-page.component.js.map