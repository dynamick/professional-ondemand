import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvincesViewComponent} from './provinces-view.component';

const routes: Routes = [
  { path: '', component: ProvincesViewComponent },
];

export const provinces_routing: ModuleWithProviders = RouterModule.forChild(routes);
