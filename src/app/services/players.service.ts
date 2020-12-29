import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player/player.component';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  constructor(private http:HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(`${API_URL}/players`)
  }

  getPlayer(id:number) {
    return this.http.get<Player>(`${API_URL}/players/${id}`)
  }

  deletePlayer(id:number) {
    console.log("Deleting player: " + id)
    return this.http.delete<Player>(`${API_URL}/deletePlayer/${id}`)
  }

  updatePlayer(id:number, player:Player) {
    console.log("Updating player: " + id)
    return this.http.put(`${API_URL}/updatePlayer/${id}`,player)
  }

  createPlayer(player:Player) {
    console.log("Creating player")
    return this.http.post(`${API_URL}/addPlayer/`,player)
  }
}
