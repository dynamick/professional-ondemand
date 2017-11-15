import { NgModule } from '@angular/core';
import {UserListComponent} from './components/user-list.component';
import {users_routing} from './users.routing';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    users_routing
  ],
  providers: [
  ],
})
export class UsersModule {}
