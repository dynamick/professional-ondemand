import { Component } from '@angular/core';
//import { LocationsStore } from './services/locations.store';
//import { LocationsService } from './services/locations.service';
import { RegionsViewComponent } from '../regions/regions-view.component'


@Component({
  selector: 'app-locations-view',
  template: `
    Locationsxxx
    <router-outlet></router-outlet>
`
})
export class LocationsViewComponent {
  constructor(
    //public store: LocationsStore,
    //public actions: LocationsService,
  ) {
    //this.actions.getAll();
  }

}
