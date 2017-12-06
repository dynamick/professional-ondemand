import { Injectable } from '@angular/core';
import { Province } from '../model/province';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { ProvincesStore } from './provinces.store';

const INITIAL_STATE = {};

@Injectable()
export class ProvincesService {

  constructor(
    private http: HttpClient,
    private store: ProvincesStore
  ) {
    this.reset();
  }

  /**
   * get all Provinces
   */
  getAll() {
    this.http.get<Province[]>(`${env.baseUrl}/provinces`)
      .subscribe(result => this.store.provinces = result);
  }

  getProvinces(region_id: Number) {
    this.http.get<Province[]>(`${env.baseUrl}/regions/${region_id}/provinces`)
      .subscribe(result => this.store.provinces = result);
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Province);
    } else {
      this.add(value as Province);
    }
  }

  /**
   * Add element
   * @param {Province} Province
   */
  add(province: Province) {
    this.http.post(`${env.baseUrl}/provinces`, province)
      .subscribe(res => {
        this.store.provinces.push(res as Province);
        this.reset();
      });
  }

  /**
   * Edit active element
   * @param {Province} province
   */
  edit(province: Province) {
    const newProvince = Object.assign(
      {}, this.store.active, province
    );

    this.http.patch(`${env.baseUrl}/provinces/${newProvince.id}`, newProvince )
      .subscribe(
        res => {
          const index = this.store.provinces.findIndex(d => {
            return d.id === newProvince.id;
          });
          this.store.provinces[index] = newProvince;
          this.reset();
        }
      );
  }

  /**
   * delete element
   * @param {Province} province
   */
  delete(province: Province) {
    this.http.delete(`${env.baseUrl}/provinces/${province.id}`)
      .subscribe(
        () => {
          const index = this.store.provinces.indexOf(province);
          this.store.provinces.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {Province} province
   */
  setActiveHandler(province: Province) {
    this.store.active = Object.assign({}, province);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
