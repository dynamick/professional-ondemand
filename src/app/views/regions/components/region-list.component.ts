import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Region } from '../model/region';

@Component({
  selector: 'app-regions-list',
  template: `
    <h1>lista regioni</h1>
    <ul class="list-group">
      <li *ngFor="let p of regions" class="list-group-item">
        <a href="" (click)="editHandler(p, $event)">{{p.name}}</a>
        <a href="" (click)="deleteHandler(p, $event)">Delete</a>
      </li>
    </ul>
  `,
  styles: []
})
export class RegionListComponent {
  @Input() regions: Region[];
  @Input() active: Region;
  @Output() edit: EventEmitter<Region> = new EventEmitter();
  @Output() delete: EventEmitter<Region> = new EventEmitter();

  deleteHandler(region: Region, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(region);
  }

  editHandler(region: Region, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(region);
  }
}
