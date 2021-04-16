import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JPA_API_URL } from '../app.constants';
import { FamousMatches } from '../matches/matches.component';
@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

  loadMatches() {
    return this.http.get<FamousMatches[]>(`${JPA_API_URL}/matches`)
  }
}
