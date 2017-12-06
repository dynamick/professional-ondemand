import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationsViewComponent} from './locations-view.component';

const routes: Routes = [
  { path: '', component: LocationsViewComponent },
];

export const locations_routing: ModuleWithProviders = RouterModule.forChild(routes);
