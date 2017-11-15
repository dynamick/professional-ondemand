import { NgModule } from '@angular/core';
import {UserListComponent} from './components/user-list.component';
import {users_routing} from './users.routing';
import {UsersService} from './services/users.service';
import {UsersStore} from './services/users.store';
import {UsersViewComponent} from './users-view.component';
import {UserFormComponent} from './components/user-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersViewComponent, UserListComponent, UserFormComponent
  ],
  imports: [
    users_routing, CommonModule, FormsModule
  ],
  providers: [
    UsersService, UsersStore
  ],
})
export class UsersModule {}
