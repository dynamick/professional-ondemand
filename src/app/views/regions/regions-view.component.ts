import { Component } from '@angular/core';
import { RegionsStore } from './services/regions.store';
import { RegionsService } from './services/regions.service';

@Component({
  selector: 'app-regions-view',
  template: `

      <div class="container mt-5">
  
        <div class="row">
          <div class="col">
            <app-regions-list
              [regions]="store.regions"
              [active]="store.active"
              (edit)="actions.setActiveHandler($event)"
              (delete)="actions.delete($event)"></app-regions-list>
          </div>
          <div class="col-8">
            <!--app-region-form
              [active]="store.active"
              (reset)="actions.reset()"
              (save)="actions.save($event)"></app-region-form-->
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>`
})
export class RegionsViewComponent {
  constructor(
    public store: RegionsStore,
    public actions: RegionsService,
  ) {
    this.actions.getAll();
  }

}
