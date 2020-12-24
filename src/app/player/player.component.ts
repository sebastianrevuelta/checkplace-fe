import { PlatformLocation } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../services/players.service';

export class Player {
  constructor(public id:number, 
    public name:string, 
    public rating:number) { }
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];
  deleteMessage:string = ''
  id:number = -1
  player!: Player;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private playerService:PlayersService) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id']
    this.player = new Player(1, 'xxx', 2000)
    this.showPlayers() 
  
  }

  showPlayers() {
    this.playerService.getPlayers().subscribe (
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  showPlayer(id:number) {
    this.playerService.getPlayer(id).subscribe (
      response => console.log(response)
    );
  }

  deletePlayer(id:number) {
    this.playerService.deletePlayer(id).subscribe (
      response => {
        console.log(response)
        this.deleteMessage = "Succesfully deleted player: " + id
        this.showPlayers()
        console.log("Deleted player: " + id)
      }
    );
  }

  updatePlayer(id:number) {
    this.router.navigate(['players',id])
  }

  addPlayer() {
    this.router.navigate(['players',-1])
  }

  handleSuccesfulResponse(response:Player[]) {
    this.players = response
  }
  handleErrorResponse(error:HttpErrorResponse) {
    console.log(error.message)
  }

}
