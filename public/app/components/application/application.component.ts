import { Component, AfterViewInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'star-wars',
  styleUrls: ['./app/components/application/application.css'],
  templateUrl: '/app/components/application/application.html'
})

export class ApplicationComponent implements AfterViewInit {
  results: Array<string> = [];
  
  
  ngAfterViewInit() {
    $('#offcanvas').click(function () {
      $('.row-offcanvas').toggleClass('active');
    });
  }
}