import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './components/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
];

export const users_routing: ModuleWithProviders = RouterModule.forChild(routes);
