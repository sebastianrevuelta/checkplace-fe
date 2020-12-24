import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../player/player.component';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

  constructor(private http:HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>("http://localhost:8080/players")
  }

  getPlayer(id:number) {
    return this.http.get<Player>(`http://localhost:8080/players/${id}`)
  }

  deletePlayer(id:number) {
    console.log("Deleting player: " + id)
    return this.http.delete<Player>(`http://localhost:8080/deletePlayer/${id}`)
  }

  updatePlayer(id:number, player:Player) {
    console.log("Updating player: " + id)
    return this.http.put(`http://localhost:8080/updatePlayer/${id}`,player)
  }

  createPlayer(player:Player) {
    console.log("Creating player")
    return this.http.post('http://localhost:8080/addPlayer/',player)
  }
}
