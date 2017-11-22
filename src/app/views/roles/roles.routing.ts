import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersViewComponent} from './roles-view.component';

const routes: Routes = [
  { path: '', component: UsersViewComponent },
];

export const users_routing: ModuleWithProviders = RouterModule.forChild(routes);
