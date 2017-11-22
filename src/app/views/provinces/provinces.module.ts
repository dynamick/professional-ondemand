import { NgModule } from '@angular/core';
import {ProvinceListComponent} from './components/province-list.component';
import {provinces_routing} from './provinces.routing';
import {ProvincesService} from './services/provinces.service';
import {ProvincesStore} from './services/provinces.store';
import {ProvincesViewComponent} from './provinces-view.component';
import {ProvinceFormComponent} from './components/province-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ProvincesViewComponent, ProvinceListComponent, ProvinceFormComponent
  ],
  imports: [
    provinces_routing, CommonModule, FormsModule
  ],
  providers: [
    ProvincesService, ProvincesStore
  ],
})
export class ProvincesModule {}
