import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <div class="container">
      <h1>Layout principale</h1>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
