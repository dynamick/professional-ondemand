import {
  Component, EventEmitter, Input, Output, OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import { ProvincesStore } from '../services/provinces.store';
import { ProvincesService } from '../services/provinces.service';

@Component({
  selector: 'app-province-form',
  template: `
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
  `
})
export class ProvinceFormComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               public store: ProvincesStore,
               public service: ProvincesService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getProvince( params['id'] );
    });
  }

  saveHandler(form: NgForm) {
    this.service.save(form.value);
  }
}
