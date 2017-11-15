import {Component, Input, Output, EventEmitter} from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-users-list',
  template: `
    <h1>lista utenti</h1>
  `,
  styles: []
})
export class UserListComponent {
  @Input() users: User[];
  @Input() active: User;
  @Output() editContent: EventEmitter<User> = new EventEmitter();
  @Output() delete: EventEmitter<User> = new EventEmitter();


}
