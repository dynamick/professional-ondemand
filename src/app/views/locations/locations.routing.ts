import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationsViewComponent} from './locations-view.component';
import {RegionsModule} from "../regions/regions.module";

const routes: Routes = [
  { path: '',
    component: LocationsViewComponent//,
    //loadChildren : () => RegionsModule
  },
];

export const locations_routing: ModuleWithProviders = RouterModule.forChild(routes);
