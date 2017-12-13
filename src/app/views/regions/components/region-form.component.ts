import {
  Component, EventEmitter, Input, Output, OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Region } from '../model/region';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { RegionsStore } from '../services/regions.store';
import { RegionsService } from '../services/regions.service';


@Component({
  selector: 'app-region-form',
  template: `

    <div class="card">
      <div class="card-header">
        Regione {{store.active?.name}}
      </div>
      <div class="card-body">
        <form novalidate
              (submit)="saveHandler(f)"
              #f="ngForm">

          <input type="text"
                 [ngModel]="store.active?.name"
                 name="name"
                 required
                 class="form-control"
                 placeholder="name"
                 #labelInput>

          <div class="btn btn-group">
            <button class="btn btn-primary"
                    type="submit"
                    [disabled]="f.invalid">
              {{store.active?.id ? 'SAVE' : 'ADD'}}
            </button>


          </div>
        </form>
      </div>
    </div>
    <router-outlet></router-outlet>
  `
})
export class RegionFormComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               public store: RegionsStore,
               public service: RegionsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if ( params['id'] == 'add' ) {
        this.service.reset();

      } else {
        this.service.getRegion(params['id']);
      }
    });
  }

  saveHandler(form: NgForm) {
    this.service.save(form.value);
  }
}
