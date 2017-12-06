import { NgModule } from '@angular/core';
// import {LocationListComponent} from './components/location-list.component';
import {locations_routing} from './locations.routing';
// import {LocationsService} from './services/locations.service';
// import {LocationsStore} from './services/locations.store';
import {LocationsViewComponent} from './locations-view.component';
// import {LocationFormComponent} from './components/location-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RegionsModule } from '../regions/regions.module';
import { ProvincesModule } from '../provinces/provinces.module';

@NgModule({
  declarations: [
    LocationsViewComponent// , LocationListComponent, LocationFormComponent
  ],
  imports: [
    locations_routing, CommonModule, FormsModule, RegionsModule, ProvincesModule
  ],
  providers: [
    // LocationsService, LocationsStore
  ],
})
export class LocationsModule {}
