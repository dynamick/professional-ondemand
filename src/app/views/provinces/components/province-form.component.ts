import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Province } from '../model/province';

@Component({
  selector: 'app-province-form',
  template: `
    <form novalidate
          (submit)="saveHandler(f)"
          #f="ngForm">

      <input type="text"
             [ngModel]="active?.name"
             name="name"
             required
             class="form-control"
             placeholder="name"
             #labelInput>

      <div class="btn btn-group">
        <button class="btn btn-primary"
                type="submit"
                [disabled]="f.invalid">
          {{active?.id ? 'SAVE' : 'ADD'}}
        </button>


      </div>
    </form>
  `
})
export class ProvinceFormComponent {
  @Input() active: Province;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();

  saveHandler(form: NgForm) {
    this.save.emit(form.value);
    // if adding a new element
    if (!this.active.id) {
      // reset the form
      form.reset();
    }
  }
}
