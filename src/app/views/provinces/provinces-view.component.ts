import { Component, OnInit } from '@angular/core';
import { ProvincesStore } from './services/provinces.store';
import { ProvincesService } from './services/provinces.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-provinces-view',
  template: `

      <app-province-form
        [active]="store.active"
        (reset)="actions.reset()"
        (save)="actions.save($event)"></app-province-form>
      <hr>
      <app-provinces-list
        [provinces]="store.provinces"
        [active]="store.active"
        (edit)="actions.setActiveHandler($event)"
        (delete)="actions.delete($event)"></app-provinces-list>`
})
export class ProvincesViewComponent implements OnInit {
  constructor(
    public store: ProvincesStore,
    public service: ProvincesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.service.getProvinces( params['id'] );
    });
  }


}
