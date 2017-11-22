import { Injectable } from '@angular/core';
import { Profession } from '../model/profession';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { ProfessionsStore } from './professions.store';

const INITIAL_STATE = {};

@Injectable()
export class ProfessionsService {

  constructor(
    private http: HttpClient,
    private store: ProfessionsStore
  ) {
    this.reset();
  }

  /**
   * get all Professions
   */
  getAll() {
    this.http.get<Profession[]>(`${env.baseUrl}/professions`)
      .subscribe(result => this.store.professions = result);
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Profession);
    } else {
      this.add(value as Profession);
    }
  }

  /**
   * Add element
   * @param {Profession} Profession
   */
  add(profession: Profession) {
    this.http.post(`${env.baseUrl}/professions`, profession)
      .subscribe(res => {
        this.store.professions.push(res as Profession);
        this.reset();
      });
  }

  /**
   * Edit active element
   * @param {Profession} profession
   */
  edit(profession: Profession) {
    const newProfession = Object.assign(
      {}, this.store.active, profession
    );

    this.http.patch(`${env.baseUrl}/professions/${newProfession.id}`, newProfession )
      .subscribe(
        res => {
          const index = this.store.professions.findIndex(d => {
            return d.id === newProfession.id;
          });
          this.store.professions[index] = newProfession;
        }
      );
  }

  /**
   * delete element
   * @param {Profession} profession
   */
  delete(profession: Profession) {
    this.http.delete(`${env.baseUrl}/professions/${profession.id}`)
      .subscribe(
        () => {
          const index = this.store.professions.indexOf(profession);
          this.store.professions.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {Profession} profession
   */
  setActiveHandler(profession: Profession) {
    this.store.active = Object.assign({}, profession);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
