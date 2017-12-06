import { Component } from '@angular/core';
import { RolesStore} from './services/roles.store';
import { RolesService } from './services/roles.service';

@Component({
  selector: 'app-users-view',
  template: `

    <div class="container mt-5">
      
      <div class="row">
        <div class="col">
          <app-roles-list
            [roles]="store.roles"
            [active]="store.active"
            (edit)="actions.setActiveHandler($event)"
            (delete)="actions.delete($event)"></app-roles-list>
        </div>
        <div class="col-8">
          <app-role-form
            [active]="store.active"
            (reset)="actions.reset()"
            (save)="actions.save($event)"></app-role-form>
        </div>
      </div>
    </div>
    `

})
export class UsersViewComponent {
  constructor(
    public store: RolesStore,
    public actions: RolesService,
  ) {
    this.actions.getAll();
  }

}
