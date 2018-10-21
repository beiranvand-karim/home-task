import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';

@Injectable()
export class UsersService extends BehaviorSubject<Array<User>> {

  public users$ = super.asObservable();

  constructor() {
    super(null);
  }

  addUser(user: User) {
    if (super.getValue()) {
      const users =  [...super.getValue()];
      users.push(user);
      super.next(users);
    } else {
      super.next([user]);
    }
  }

  deleteUser(index: number) {
    const users =  [...super.getValue()];
    users.splice(index, 1);
    super.next(users);
  }

  updateUser(index: number, user: User) {
    const users =  [...super.getValue()];
    users.splice(index, 1, user);
    super.next(users);
  }
}
