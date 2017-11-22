import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <app-menu></app-menu>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
