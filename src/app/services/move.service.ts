import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Movement {
  constructor(public description:string) { }
}

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  constructor(private http:HttpClient) { }

  callMove() {
    return this.http.get<Movement>("http://localhost:8080/move")
  }

  callMoveWithHistory(history:string) {
    return this.http.get<Movement>(`http://localhost:8080/move/path-variable/${history}`)
  }

}
