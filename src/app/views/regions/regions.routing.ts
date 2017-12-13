import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegionsViewComponent} from './regions-view.component';
import {ProvincesModule} from '../provinces/provinces.module';
import {RegionFormComponent} from './components/region-form.component';

export const routes: Routes = [
  {
    path: '',
    component: RegionsViewComponent,
    children: [
      {
        path: ':id',
        component: RegionFormComponent,
        loadChildren: 'app/views/provinces/provinces.module#ProvincesModule'
      }
    ]
  }
];

export const regions_routing: ModuleWithProviders = RouterModule.forChild(routes);
