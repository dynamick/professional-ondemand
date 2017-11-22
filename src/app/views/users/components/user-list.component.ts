import {Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-users-list',
  template: `
    <h1>lista utenti</h1>
    <ul class="list-group">
      <li *ngFor="let u of users" class="list-group-item">
        <a href="" (click)="editHandler(u, $event)">{{u.name}} {{u.surname}}</a>
        <a href="" (click)="deleteHandler(u, $event)">Delete</a>
      </li>
    </ul>
  `,
  styles: []
})
export class UserListComponent {
  @Input() users: User[];
  @Input() active: User;
  @Output() edit: EventEmitter<User> = new EventEmitter();
  @Output() delete: EventEmitter<User> = new EventEmitter();

  deleteHandler(user: User, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(user);
  }

  editHandler(user: User, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(user);
  }
}
