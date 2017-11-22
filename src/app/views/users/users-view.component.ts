import { Component } from '@angular/core';
import { UsersStore } from './services/users.store';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users-view',
  template: `

      <app-user-form
        [active]="store.active"
        (reset)="actions.reset()"
        (save)="actions.save($event)"></app-user-form>
      <hr>
      <app-users-list
        [users]="store.users"
        [active]="store.active"
        (edit)="actions.setActiveHandler($event)"
        (delete)="actions.delete($event)"></app-users-list>`
})
export class UsersViewComponent {
  constructor(
    public store: UsersStore,
    public actions: UsersService,
  ) {
    this.actions.getAll();
  }

}
