import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsViewComponent} from './regions-view.component';

const routes: Routes = [
  { path: '', component: RegionsViewComponent },
];

export const regions_routing: ModuleWithProviders = RouterModule.forChild(routes);
