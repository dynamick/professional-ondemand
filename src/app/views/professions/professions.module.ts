import { NgModule } from '@angular/core';
import {ProfessionListComponent} from './components/profession-list.component';
import {professions_routing} from './professions.routing';
import {ProfessionsService} from './services/professions.service';
import {ProfessionsStore} from './services/professions.store';
import {ProfessionsViewComponent} from './professions-view.component';
import {ProfessionFormComponent} from './components/profession-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProfessionsViewComponent, ProfessionListComponent, ProfessionFormComponent
  ],
  imports: [
    professions_routing, CommonModule, FormsModule
  ],
  providers: [
    ProfessionsService, ProfessionsStore
  ],
})
export class ProfessionsModule {}
