import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player/player.component';
import { JPA_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  constructor(private http:HttpClient) { }

  getPlayer(id:number) {
    return this.http.get<Player>(`${JPA_API_URL}/players/${id}`)
  }

  getPlayers() {
    return this.http.get<Player[]>(`${JPA_API_URL}/players`)
  }

  deletePlayer(id:number) {
    console.log("Deleting player: " + id)
    return this.http.delete<Player>(`${JPA_API_URL}/deletePlayer/${id}`)
  }

  updatePlayer(id:number, player:Player) {
    console.log("Updating player: " + id)
    return this.http.put(`${JPA_API_URL}/updatePlayer/${id}`,player)
  }

  createPlayer(player:Player) {
    console.log("Creating player")
    return this.http.post(`${JPA_API_URL}/addPlayer/`,player)
  }
}
