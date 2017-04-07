import { AfterViewInit, Component  } from '@angular/core';
declare var $: JQueryStatic;

@Component({
  selector: 'star-wars',
  styleUrls: ['./application.css'],
  templateUrl: './application.html'
})

export class ApplicationComponent implements AfterViewInit {
  public results: string[] = [];

  // only required for off-canvas navigation toggle
  public ngAfterViewInit() {
    $('#offcanvas').click(() => $('.row-offcanvas').toggleClass('active'));
  }
}
