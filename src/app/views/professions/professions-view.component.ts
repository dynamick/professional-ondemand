import { Component } from '@angular/core';
import { ProfessionsStore } from './services/professions.store';
import { ProfessionsService } from './services/professions.service';

@Component({
  selector: 'app-professions-view',
  template: `

      <app-profession-form
        [active]="store.active"
        (reset)="actions.reset()"
        (save)="actions.save($event)"></app-profession-form>
      <hr>
      <app-professions-list
        [professions]="store.professions"
        [active]="store.active"
        (edit)="actions.setActiveHandler($event)"
        (delete)="actions.delete($event)"></app-professions-list>`
})
export class ProfessionsViewComponent {
  constructor(
    public store: ProfessionsStore,
    public actions: ProfessionsService,
  ) {
    this.actions.getAll();
  }

}
