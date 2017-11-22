import { NgModule } from '@angular/core';
import {RoleListComponent} from './components/role-list.component';
import {users_routing} from './roles.routing';
import {RolesService} from './services/roles.service';
import {RolesStore} from './services/roles.store';
import {UsersViewComponent} from './roles-view.component';
import {RolesFormComponent} from './components/role-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersViewComponent, RoleListComponent, RolesFormComponent
  ],
  imports: [
    users_routing, CommonModule, FormsModule
  ],
  providers: [
    RolesService, RolesStore
  ],
})
export class RolesModule {}
