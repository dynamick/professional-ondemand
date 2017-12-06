import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Region } from '../model/region';

@Component({
  selector: 'app-regions-list',
  template: `
    <ul class="list-group">
      <li *ngFor="let r of regions" class="list-group-item d-flex">
        <a href="" routerLink="/regions/{{r.id}}" routerLinkActive="active" >{{r.name}}</a>
        <a href="" class="ml-auto" (click)="deleteHandler(r, $event)"><i class="fa fa-times"></i></a>
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
