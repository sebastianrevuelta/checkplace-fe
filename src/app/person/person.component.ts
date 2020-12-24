import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player/player.component';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  id:number = -1
  player:Player = new Player(1,'',0)

  constructor(private playerService:PlayersService, 
    private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.player = new Player(this.id,'',0)
    if (this.id!=-1) {
      this.playerService.getPlayer(this.id).subscribe(
        data => this.player = data
      )
    }
  }

  savePlayer() {
    if (this.id === -1) {
      this.playerService.createPlayer(this.player).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['players'])
        }
      )
    }
    else {
      this.playerService.updatePlayer(this.id,this.player).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['players'])
        }
      )
    }

  }

}
