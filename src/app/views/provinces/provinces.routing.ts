import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProvincesViewComponent} from './provinces-view.component';
import {ProvinceListComponent} from './components/province-list.component';
import {ProvinceFormComponent} from './components/province-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProvincesViewComponent,
    children: [
      {
        path: 'provinces/:id',
        component: ProvinceFormComponent,
      }
    ]

  },
];

export const provinces_routing: ModuleWithProviders = RouterModule.forChild(routes);
