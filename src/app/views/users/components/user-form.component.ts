import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
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
             [ngModel]="active?.surname"
             name="surname"
             class="form-control"
             placeholder="surname"
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
export class UserFormComponent {
  @Input() active: User;
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
