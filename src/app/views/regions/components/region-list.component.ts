import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Region } from '../model/region';
import { RegionsStore } from '../services/regions.store';
import { RegionsService } from '../services/regions.service';

@Component({
  selector: 'app-regions-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item d-flex">
        <input type="text" placeholder="nuova regione" #tf  (keyup.enter)="addRegion(tf.value)">
      </li>
      <li *ngFor="let r of regions" class="list-group-item d-flex">
        <a href="" routerLink="/regions/{{r.id}}" routerLinkActive="text-danger" >{{r.name}}</a>
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
  @ViewChild("tf", {read: ElementRef}) tf: ElementRef;

  constructor(
               public store: RegionsStore,
               public service: RegionsService) {
  }


  deleteHandler(region: Region, e: MouseEvent) {
    e.preventDefault();
    this.delete.emit(region);
  }

  editHandler(region: Region, e: MouseEvent) {
    e.preventDefault();
    this.edit.emit(region);
  }

  addRegion(v: String) {
    this.tf.nativeElement.value = '';
    this.service.add({name: v} as Region).then( res => {
      console.log('sono nella promise then');
      console.log(res);
    });
  }
}
