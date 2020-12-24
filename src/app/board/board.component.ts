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

  squares = [
    {id : 'a1', image : "./assets/images/towerw.png"},
    {id : 'a2', image : "./assets/images/pawnw.png"},
    {id : 'a3', image : ""},
    {id : 'a4', image : ""},
    {id : 'a5', image : ""},
    {id : 'a6', image : ""},
    {id : 'a7', image : "./assets/images/pawnb.png"},
    {id : 'a8', image : "./assets/images/towerb.png"},
    {id : 'b1', image : "./assets/images/knightw.png"},
    {id : 'b2', image : "./assets/images/pawnw.png"},
    {id : 'b3', image : ""},
    {id : 'b4', image : ""},
    {id : 'b5', image : ""},
    {id : 'b6', image : ""},
    {id : 'b7', image : "./assets/images/pawnb.png"},
    {id : 'b8', image : "./assets/images/knightb.png"},
    {id : 'c1', image : "./assets/images/bishopw.png"},
    {id : 'c2', image : "./assets/images/pawnw.png"},
    {id : 'c3', image : ""},
    {id : 'c4', image : ""},
    {id : 'c5', image : ""},
    {id : 'c6', image : ""},
    {id : 'c7', image : "./assets/images/pawnb.png"},
    {id : 'c8', image : "./assets/images/bishopb.png"},
    {id : 'd1', image : "./assets/images/queenw.png"},
    {id : 'd2', image : "./assets/images/pawnw.png"},
    {id : 'd3', image : ""},
    {id : 'd4', image : ""},
    {id : 'd5', image : ""},
    {id : 'd6', image : ""},
    {id : 'd7', image : "./assets/images/pawnb.png"},
    {id : 'd8', image : "./assets/images/queenb.png"},
    {id : 'e1', image : "./assets/images/kingw.png"},
    {id : 'e2', image : "./assets/images/pawnw.png"},
    {id : 'e3', image : ""},
    {id : 'e4', image : ""},
    {id : 'e5', image : ""},
    {id : 'e6', image : ""},
    {id : 'e7', image : "./assets/images/pawnb.png"},
    {id : 'e8', image : "./assets/images/kingb.png"},
    {id : 'f1', image : "./assets/images/bishopw.png"},
    {id : 'f2', image : "./assets/images/pawnw.png"},
    {id : 'f3', image : ""},
    {id : 'f4', image : ""},
    {id : 'f5', image : ""},
    {id : 'f6', image : ""},
    {id : 'f7', image : "./assets/images/pawnb.png"},
    {id : 'f8', image : "./assets/images/bishopb.png"},
    {id : 'g1', image : "./assets/images/knightw.png"},
    {id : 'g2', image : "./assets/images/pawnw.png"},
    {id : 'g3', image : ""},
    {id : 'g4', image : ""},
    {id : 'g5', image : ""},
    {id : 'g6', image : ""},
    {id : 'g7', image : "./assets/images/pawnb.png"},
    {id : 'g8', image : "./assets/images/knightb.png"},
    {id : 'h1', image : "./assets/images/towerw.png"},
    {id : 'h2', image : "./assets/images/pawnw.png"},
    {id : 'h3', image : ""},
    {id : 'h4', image : ""},
    {id : 'h5', image : ""},
    {id : 'h6', image : ""},
    {id : 'h7', image : "./assets/images/pawnb.png"},
    {id : 'h8', image : "./assets/images/towerb.png"}

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
