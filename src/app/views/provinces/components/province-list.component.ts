import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Province } from '../model/province';

@Component({
  selector: 'app-provinces-list',
  template: `
    <h1>lista provincie</h1>
    <ul class="list-group">
      <li *ngFor="let p of provinces" class="list-group-item">
        <a href="" (click)="editHandler(p, $event)">{{p.name}}</a>
        <a href="" (click)="deleteHandler(p, $event)">Delete</a>
      </li>
    </ul>
  `,
  styles: []
})
export class ProvinceListComponent {
  @Input() provinces: Province[];
  @Input() active: Province;
  @Output() edit: EventEmitter<Province> = new EventEmitter();
  @Output() delete: EventEmitter<Province> = new EventEmitter();

  deleteHandler(province: Province, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(province);
  }

  editHandler(province: Province, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(province);
  }
}
