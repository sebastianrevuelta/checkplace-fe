import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JPA_API_URL } from '../app.constants';
import { Match, Square } from '../board/board.component';

@Injectable({
  providedIn: 'root'
})

export class MoveService {

  constructor(private http:HttpClient) { }

  callMove(match:Match) {
    return this.http.put<Square[]>(`${JPA_API_URL}/move`,match)
  }

}
