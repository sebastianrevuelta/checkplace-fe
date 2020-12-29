import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movement, MoveService } from '../services/move.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  //define array 
  rows = ['a','b','c','d','e','f','g','h']
  columns = ['1','2','3','4','5','6','7','8']
  //TODO: Use it in the board construction
  squares = [
    {id : 'a1', image : "./assets/images/towerw.png", color:"black"},
    {id : 'a2', image : "./assets/images/pawnw.png", color:"white"},
    {id : 'a3', image : "", color:"black"},
    {id : 'a4', image : "", color:"white"},
    {id : 'a5', image : "", color:"black"},
    {id : 'a6', image : "", color:"white"},
    {id : 'a7', image : "./assets/images/pawnb.png", color:"black"},
    {id : 'a8', image : "./assets/images/towerb.png", color:"white"},
    {id : 'b1', image : "./assets/images/knightw.png", color:"white"},
    {id : 'b2', image : "./assets/images/pawnw.png", color:"black"},
    {id : 'b3', image : "", color:"white"},
    {id : 'b4', image : "", color:"black"},
    {id : 'b5', image : "", color:"white"},
    {id : 'b6', image : "", color:"black"},
    {id : 'b7', image : "./assets/images/pawnb.png", color:"white"},
    {id : 'b8', image : "./assets/images/knightb.png", color:"black"},
    {id : 'c1', image : "./assets/images/bishopw.png", color:"black"},
    {id : 'c2', image : "./assets/images/pawnw.png", color:"white"},
    {id : 'c3', image : "", color:"black"},
    {id : 'c4', image : "", color:"white"},
    {id : 'c5', image : "", color:"black"},
    {id : 'c6', image : "", color:"white"},
    {id : 'c7', image : "./assets/images/pawnb.png", color:"black"},
    {id : 'c8', image : "./assets/images/bishopb.png", color:"white"},
    {id : 'd1', image : "./assets/images/queenw.png", color:"white"},
    {id : 'd2', image : "./assets/images/pawnw.png", color:"black"},
    {id : 'd3', image : "", color:"white"},
    {id : 'd4', image : "", color:"black"},
    {id : 'd5', image : "", color:"white"},
    {id : 'd6', image : "", color:"black"},
    {id : 'd7', image : "./assets/images/pawnb.png", color:"white"},
    {id : 'd8', image : "./assets/images/queenb.png", color:"black"},
    {id : 'e1', image : "./assets/images/kingw.png", color:"black"},
    {id : 'e2', image : "./assets/images/pawnw.png", color:"white"},
    {id : 'e3', image : "", color:"black"},
    {id : 'e4', image : "", color:"white"},
    {id : 'e5', image : "", color:"black"},
    {id : 'e6', image : "", color:"white"},
    {id : 'e7', image : "./assets/images/pawnb.png", color:"black"},
    {id : 'e8', image : "./assets/images/kingb.png", color:"white"},
    {id : 'f1', image : "./assets/images/bishopw.png", color:"white"},
    {id : 'f2', image : "./assets/images/pawnw.png", color:"black"},
    {id : 'f3', image : "", color:"white"},
    {id : 'f4', image : "", color:"black"},
    {id : 'f5', image : "", color:"white"},
    {id : 'f6', image : "", color:"black"},
    {id : 'f7', image : "./assets/images/pawnb.png", color:"white"},
    {id : 'f8', image : "./assets/images/bishopb.png", color:"black"},
    {id : 'g1', image : "./assets/images/knightw.png", color:"black"},
    {id : 'g2', image : "./assets/images/pawnw.png", color:"white"},
    {id : 'g3', image : "", color:"black"},
    {id : 'g4', image : "", color:"white"},
    {id : 'g5', image : "", color:"black"},
    {id : 'g6', image : "", color:"white"},
    {id : 'g7', image : "./assets/images/pawnb.png", color:"black"},
    {id : 'g8', image : "./assets/images/knightb.png", color:"white"},
    {id : 'h1', image : "./assets/images/towerw.png", color:"white"},
    {id : 'h2', image : "./assets/images/pawnw.png", color:"black"},
    {id : 'h3', image : "", color:"white"},
    {id : 'h4', image : "", color:"black"},
    {id : 'h5', image : "", color:"white"},
    {id : 'h6', image : "", color:"black"},
    {id : 'h7', image : "./assets/images/pawnb.png", color:"white"},
    {id : 'h8', image : "./assets/images/towerb.png", color:"black"}

  ]
  playerName = 'kasparov'
  history = 'e2e4'
  movement:string = ''

  constructor(private route:ActivatedRoute, 
    private moveService:MoveService) { }

  ngOnInit(): void {
    this.playerName = this.route.snapshot.params['name']
  }

  move() {
    this.moveService.callMove().subscribe (
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  moveWithHistory() {
    this.moveService.callMoveWithHistory(this.history).subscribe (
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("after subscription")
  }
  
  handleSuccesfulResponse(response:Movement) {
    this.movement = response.description
  }
  handleErrorResponse(error:HttpErrorResponse) {
    console.log(error.message)
  }


}
