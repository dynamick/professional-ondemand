import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Role } from '../model/Role';

@Component({
  selector: 'app-roles-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let r of roles" class="list-group-item d-flex">
        <a href="" (click)="editHandler(r, $event)">{{r.name}}</a>
        <a href="" class="ml-auto" (click)="deleteHandler(r, $event)"><i class="fa fa-times"></i></a>
      </li>
    </ul>
  `,
  styles: []
})
export class RoleListComponent {
  @Input() roles: Role[];
  @Input() active: Role;
  @Output() edit: EventEmitter<Role> = new EventEmitter();
  @Output() delete: EventEmitter<Role> = new EventEmitter();

  deleteHandler(role: Role, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(role);
  }

  editHandler(role: Role, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(role);
  }
}
