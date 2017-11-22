import { Component } from '@angular/core';
import { ProvincesStore } from './services/provinces.store';
import { ProvincesService } from './services/provinces.service';

@Component({
  selector: 'app-provinces-view',
  template: `

      <app-province-form
        [active]="store.active"
        (reset)="actions.reset()"
        (save)="actions.save($event)"></app-province-form>
      <hr>
      <app-provinces-list
        [provinces]="store.provinces"
        [active]="store.active"
        (edit)="actions.setActiveHandler($event)"
        (delete)="actions.delete($event)"></app-provinces-list>`
})
export class ProvincesViewComponent {
  constructor(
    public store: ProvincesStore,
    public actions: ProvincesService,
  ) {
    this.actions.getAll();
  }

}
