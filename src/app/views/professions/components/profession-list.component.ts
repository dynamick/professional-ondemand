import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Profession } from '../model/profession';

@Component({
  selector: 'app-professions-list',
  template: `
    <h1>lista professioni</h1>
    <ul class="list-group">
      <li *ngFor="let p of professions" class="list-group-item">
        <a href="" (click)="editHandler(p, $event)">{{p.name}} {{p.description}}</a>
        <a href="" (click)="deleteHandler(p, $event)">Delete</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ProfessionListComponent {
  @Input() professions: Profession[];
  @Input() active: Profession;
  @Output() edit: EventEmitter<Profession> = new EventEmitter();
  @Output() delete: EventEmitter<Profession> = new EventEmitter();

  deleteHandler(profession: Profession, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(profession);
  }

  editHandler(profession: Profession, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(profession);
  }
}
