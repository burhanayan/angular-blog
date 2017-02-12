import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      Hello! This is app component!
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
