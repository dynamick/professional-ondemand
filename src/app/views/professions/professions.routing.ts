import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfessionsViewComponent} from './professions-view.component';

const routes: Routes = [
  { path: '', component: ProfessionsViewComponent },
];

export const professions_routing: ModuleWithProviders = RouterModule.forChild(routes);
