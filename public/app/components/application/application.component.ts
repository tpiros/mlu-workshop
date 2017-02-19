import { AfterViewInit, Component  } from '@angular/core';
declare var $: JQueryStatic;

@Component({
  selector: 'star-wars',
  styleUrls: ['./app/components/application/application.css'],
  templateUrl: '/app/components/application/application.html'
})

export class ApplicationComponent implements AfterViewInit {
  public results: String[] = [];

  // only required for off-canvas navigation toggle
  public ngAfterViewInit() {
    $('#offcanvas').click(() => $('.row-offcanvas').toggleClass('active'));
  }
}
