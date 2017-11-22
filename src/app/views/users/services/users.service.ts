import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment as env } from '../../../../environments/environment';
import { UsersStore } from './users.store';

const INITIAL_STATE = {};

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient,
    private store: UsersStore
  ) {
    this.reset();
  }

  /**
   * get all Users
   */
  getAll() {
    this.http.get<User[]>(`${env.baseUrl}/users`)
      .subscribe(result => this.store.users = result);
  }

  /**
   * Save element (add or edit)
   * @param f
   */
  save(value) {
    if (this.store.active.id) {
      this.edit(value as User);
    } else {
      this.add(value as User);
    }
  }

  /**
   * Add element
   * @param {User} User
   */
  add(user: User) {
    this.http.post(`${env.baseUrl}/users`, user)
      .subscribe(res => {
        this.store.users.push(res as User);
        this.reset();
      });
  }

  /**
   * Edit active element
   * @param {User} user
   */
  edit(user: User) {
    const newUser = Object.assign(
      {}, this.store.active, user
    );

    this.http.patch(`${env.baseUrl}/users/${newUser.id}`, newUser )
      .subscribe(
        res => {
          const index = this.store.users.findIndex(d => {
            return d.id === newUser.id;
          });
          this.store.users[index] = newUser;
        }
      );
  }

  /**
   * delete element
   * @param {User} user
   */
  delete(user: User) {
    this.http.delete(`${env.baseUrl}/users/${user.id}`)
      .subscribe(
        () => {
          const index = this.store.users.indexOf(user);
          this.store.users.splice(index, 1);
          this.reset();
        }
      );
  }

  /**
   * Set Active Element
   * @param {User} user
   */
  setActiveHandler(user: User) {
    this.store.active = Object.assign({}, user);
  }

  /**
   * Reset active element
   * @param f
   */
  reset() {
    this.store.active = INITIAL_STATE;
  }
}
