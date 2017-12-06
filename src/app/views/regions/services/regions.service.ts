import { Injectable } from '@angular/core';
import { Region } from '../model/region';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { RegionsStore } from './regions.store';

const INITIAL_STATE = {};

@Injectable()
export class RegionsService {

  constructor(
    private http: HttpClient,
    private store: RegionsStore
  ) {
    this.reset();
  }

  /**
   * get all Regions
   */
  getAll() {
    this.http.get<Region[]>(`${env.baseUrl}/regions`)
      .subscribe(result => this.store.regions = result);
  }


  /**
   * Get active element
   * @param {id} Number
   */
  getRegion(id: Number) {
    this.http.get<Region[]>(`${env.baseUrl}/regions/${id}`)
      .subscribe(result => {
          this.store.active = result;
      });
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Region);
    } else {
      this.add(value as Region);
    }
  }

  /**
   * Add element
   * @param {Region} Region
   */
  add(region: Region) {
    this.http.post(`${env.baseUrl}/regions`, region)
      .subscribe(res => {
        this.store.regions.push(res as Region);
        this.reset();
      });
  }

  /**
   * Edit active element
   * @param {Region} region
   */
  edit(region: Region) {
    const newRegion = Object.assign(
      {}, this.store.active, region
    );

    this.http.patch(`${env.baseUrl}/regions/${newRegion.id}`, newRegion )
      .subscribe(
        res => {
          const index = this.store.regions.findIndex(d => {
            return d.id === newRegion.id;
          });
          this.store.regions[index] = newRegion;
          this.reset();
        }
      );
  }

  /**
   * delete element
   * @param {Region} region
   */
  delete(region: Region) {
    this.http.delete(`${env.baseUrl}/regions/${region.id}`)
      .subscribe(
        () => {
          const index = this.store.regions.indexOf(region);
          this.store.regions.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {Region} region
   */
  setActiveHandler(region: Region) {
    this.store.active = Object.assign({}, region);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
