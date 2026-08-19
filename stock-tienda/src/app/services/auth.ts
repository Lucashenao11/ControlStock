import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  users: User[] = []

  register(user: User) {

    if (!this.users.find(userAux => userAux.email === user.email)) {
      this.users.push(user)
    }

    return user
  }

  login(email: string, password: string) {

    return this.users.find(userAux => userAux.email === email && userAux.password === password)
  }
}