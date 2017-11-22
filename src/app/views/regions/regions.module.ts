import { NgModule } from '@angular/core';
import {RegionListComponent} from './components/region-list.component';
import {regions_routing} from './regions.routing';
import {RegionsService} from './services/regions.service';
import {RegionsStore} from './services/regions.store';
import {RegionsViewComponent} from './regions-view.component';
import {RegionFormComponent} from './components/region-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegionsViewComponent, RegionListComponent, RegionFormComponent
  ],
  imports: [
    regions_routing, CommonModule, FormsModule
  ],
  providers: [
    RegionsService, RegionsStore
  ],
})
export class RegionsModule {}
