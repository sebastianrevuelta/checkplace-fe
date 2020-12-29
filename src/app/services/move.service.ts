import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../app.constants';

export class Movement {
  constructor(public description:string) { }
}

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  constructor(private http:HttpClient) { }

  callMove() {
    return this.http.get<Movement>("${API_URL}/move")
  }

  callMoveWithHistory(history:string) {

    //TODO ??
    let basicAuthHeaderString = this.createBasicAuthHttpHeader();
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<Movement>(`${API_URL}/move/${history}`,
    {headers: header})
  }

  createBasicAuthHttpHeader() {
    let user = 'sebas'
    let password = 'sebas'
    let basicAuthHeaderString = 'Basic ' + window.btoa(user + ":" + password)
    return basicAuthHeaderString;
  }

}
