import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profession } from '../model/profession';

@Component({
  selector: 'app-profession-form',
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

      <input type="text"
             [ngModel]="active?.description"
             name="description"
             class="form-control"
             placeholder="description"
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
export class ProfessionFormComponent {
  @Input() active: Profession;
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
