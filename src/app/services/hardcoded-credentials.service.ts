import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedCredentialsService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === 'sebas' && password==='sebas') { 
      sessionStorage.setItem('username',username)
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
     let user = sessionStorage.getItem('username')
     return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
