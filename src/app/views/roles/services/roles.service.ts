import { Injectable } from '@angular/core';
import { Role } from '../model/Role';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { RolesStore } from './roles.store';

const INITIAL_STATE = {};

@Injectable()
export class RolesService {

  constructor(
    private http: HttpClient,
    private store: RolesStore
  ) {
    this.reset();
  }

  /**
   * get all Users
   */
  getAll() {
    this.http.get<Role[]>(`${env.baseUrl}/roles`)
      .subscribe(result => this.store.roles = result);
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as Role);
    } else {
      this.add(value as Role);
    }
  }

  /**
   * Add element
   * @param {User} User
   */
  add(role: Role) {
    this.http.post(`${env.baseUrl}/roles`, role)
      .subscribe(res => {
        this.store.roles.push(res as Role);
        this.reset();
      });
  }

  /**
   * Edit active element
   * @param {User} user
   */
  edit(role: Role) {
    const newRole = Object.assign(
      {}, this.store.active, role
    );

    this.http.patch(`${env.baseUrl}/roles/${newRole.id}`, newRole )
      .subscribe(
        res => {
          const index = this.store.roles.findIndex(d => {
            return d.id === newRole.id;
          });
          this.store.roles[index] = newRole;
          this.reset();
        }
      );
  }

  /**
   * delete element
   * @param {User} user
   */
  delete(role: Role) {
    this.http.delete(`${env.baseUrl}/roles/${role.id}`)
      .subscribe(
        () => {
          const index = this.store.roles.indexOf(role);
          this.store.roles.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {User} user
   */
  setActiveHandler(role: Role) {
    this.store.active = Object.assign({}, role);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
