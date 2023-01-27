import { Component } from '@angular/core';
import { Spinkit, SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <!-- Spinner  -->
    <ng-http-loader [backgroundColor]="'#ff6688'" [spinner]="spinkit.skRotatingPlane"></ng-http-loader>`
})
export class AppComponent {
  public spinkit = Spinkit;
  constructor(public spinner: SpinnerVisibilityService) { }

}
