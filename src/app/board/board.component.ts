import { HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveService } from '../services/move.service';

export abstract class Piece {
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {}
}

export class Tower extends Piece { 
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}
export class Pawn extends Piece { 
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}
export class Bishop extends Piece { 
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}
export class King extends Piece { 
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}
export class Queen extends Piece { 
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}
export class Knight extends Piece {
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {
      super(color,horizontal,vertical,type,value)
    }
}

export class Square {
  constructor(public sqid:string, 
    public horizontal:string,
    public vertical:string,
    public image:string, 
    public color:string,
    public empty:boolean) { } 
}

export class Board {
  constructor(public squares:Square[][]) { } 
}

export class Match {
  constructor(public board:Board, 
    public turn:string,
    public checkmate:boolean,
    public movement:number,
    public history:string,
    public logger:string,
    public player1:string,
    public player2:string,
    public timer:string
    ) {}
}
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  //TODO: Use it in the board construction
  towera1:Tower = new Tower("white","a","1","tower",5)
  towerh1:Tower = new Tower("white","h","1","tower",5)
  towera8:Tower = new Tower("black","a","8","tower",5)
  towerh8:Tower = new Tower("black","h","8","tower",5)

  knightb1:Knight = new Knight("white","b","1","knight",3)
  knightg1:Knight = new Knight("white","g","1","knight",3)
  knightb8:Knight = new Knight("black","b","8","knight",3)
  knightg8:Knight = new Knight("black","g","8","knight",3)

  bishopc1:Bishop = new Bishop("white","c","1","bishop",3)
  bishopf1:Bishop = new Bishop("white","f","1","bishop",3)
  bishopc8:Bishop = new Bishop("black","c","8","bishop",3)
  bishopf8:Bishop = new Bishop("black","f","8","bishop",3)

  queend1:Queen = new Queen("white","d","1","queen",9)
  queend8:Queen = new Queen("black","d","8","queen",9)

  kinge1:King = new King("white","e","1","king",1000)
  kinge8:King = new King("black","e","8","king",1000)

  pawna2:Pawn = new Pawn("white","a","2","pawn",1)
  pawnb2:Pawn = new Pawn("white","b","2","pawn",1)
  pawnc2:Pawn = new Pawn("white","c","2","pawn",1)
  pawnd2:Pawn = new Pawn("white","d","2","pawn",1)
  pawne2:Pawn = new Pawn("white","e","2","pawn",1)
  pawnf2:Pawn = new Pawn("white","f","2","pawn",1)
  pawng2:Pawn = new Pawn("white","g","2","pawn",1)
  pawnh2:Pawn = new Pawn("white","h","2","pawn",1)

  pawna7:Pawn = new Pawn("black","a","7","pawn",1)
  pawnb7:Pawn = new Pawn("black","b","7","pawn",1)
  pawnc7:Pawn = new Pawn("black","c","7","pawn",1)
  pawnd7:Pawn = new Pawn("black","d","7","pawn",1)
  pawne7:Pawn = new Pawn("black","e","7","pawn",1)
  pawnf7:Pawn = new Pawn("black","f","7","pawn",1)
  pawng7:Pawn = new Pawn("black","g","7","pawn",1)
  pawnh7:Pawn = new Pawn("black","h","7","pawn",1)

  //TODO: Create fake pieces for empty squares

  squares:Square[][] = [  //TODO: Remove pieces...
    [
      {sqid : 'a1', horizontal:'a', vertical:'1', image : "./assets/images/towerw.png", color:"black", empty:false},
      {sqid : 'a2', horizontal:'a', vertical:'2', image : "./assets/images/pawnw.png", color:"white", empty:false},
      {sqid : 'a3', horizontal:'a', vertical:'3', image : "", color:"black", empty:true},
      {sqid : 'a4', horizontal:'a', vertical:'4', image : "", color:"white", empty:true},
      {sqid : 'a5', horizontal:'a', vertical:'5', image : "", color:"black", empty:true},
      {sqid : 'a6', horizontal:'a', vertical:'6', image : "", color:"white", empty:true},
      {sqid : 'a7', horizontal:'a', vertical:'7', image : "./assets/images/pawnb.png", color:"black", empty:false},
      {sqid : 'a8', horizontal:'a', vertical:'8', image : "./assets/images/towerb.png", color:"white", empty:false}
    ],
    [
      {sqid : 'b1', horizontal:'b', vertical:'1', image : "./assets/images/knightw.png", color:"white", empty:false},
      {sqid : 'b2', horizontal:'b', vertical:'2', image : "./assets/images/pawnw.png", color:"black", empty:false},
      {sqid : 'b3', horizontal:'b', vertical:'3', image : "", color:"white", empty:true},
      {sqid : 'b4', horizontal:'b', vertical:'4', image : "", color:"black", empty:true},
      {sqid : 'b5', horizontal:'b', vertical:'5', image : "", color:"white", empty:true},
      {sqid : 'b6', horizontal:'b', vertical:'6', image : "", color:"black", empty:true},
      {sqid : 'b7', horizontal:'b', vertical:'7', image : "./assets/images/pawnb.png", color:"white", empty:false},
      {sqid : 'b8', horizontal:'b', vertical:'8', image : "./assets/images/knightb.png", color:"black", empty:false}
    ],
    [
      {sqid : 'c1', horizontal:'c', vertical:'1', image : "./assets/images/bishopw.png", color:"black", empty:false},
      {sqid : 'c2', horizontal:'c', vertical:'2', image : "./assets/images/pawnw.png", color:"white", empty:false},
      {sqid : 'c3', horizontal:'c', vertical:'3', image : "", color:"black", empty:true},
      {sqid : 'c4', horizontal:'c', vertical:'4', image : "", color:"white", empty:true},
      {sqid : 'c5', horizontal:'c', vertical:'5', image : "", color:"black", empty:true},
      {sqid : 'c6', horizontal:'c', vertical:'6', image : "", color:"white", empty:true},
      {sqid : 'c7', horizontal:'c', vertical:'7', image : "./assets/images/pawnb.png", color:"black", empty:false},
      {sqid : 'c8', horizontal:'c', vertical:'8', image : "./assets/images/bishopb.png", color:"white", empty:false},
    ],
    [
      {sqid : 'd1', horizontal:'d', vertical:'1', image : "./assets/images/queenw.png", color:"white", empty:false},
      {sqid : 'd2', horizontal:'d', vertical:'2', image : "./assets/images/pawnw.png", color:"black", empty:false},
      {sqid : 'd3', horizontal:'d', vertical:'3', image : "", color:"white", empty:true},
      {sqid : 'd4', horizontal:'d', vertical:'4', image : "", color:"black", empty:true},
      {sqid : 'd5', horizontal:'d', vertical:'5', image : "", color:"white", empty:true},
      {sqid : 'd6', horizontal:'d', vertical:'6', image : "", color:"black", empty:true},
      {sqid : 'd7', horizontal:'d', vertical:'7', image : "./assets/images/pawnb.png", color:"white", empty:false},
      {sqid : 'd8', horizontal:'d', vertical:'8', image : "./assets/images/queenb.png", color:"black", empty:false}
    ],
    [
      {sqid : 'e1', horizontal:'e', vertical:'1', image : "./assets/images/kingw.png", color:"black", empty:false},
      {sqid : 'e2', horizontal:'e', vertical:'2', image : "./assets/images/pawnw.png", color:"white", empty:false},
      {sqid : 'e3', horizontal:'e', vertical:'3', image : "", color:"black", empty:true},
      {sqid : 'e4', horizontal:'e', vertical:'4', image : "", color:"white", empty:true},
      {sqid : 'e5', horizontal:'e', vertical:'5', image : "", color:"black", empty:true},
      {sqid : 'e6', horizontal:'e', vertical:'6', image : "", color:"white", empty:true},
      {sqid : 'e7', horizontal:'e', vertical:'7', image : "./assets/images/pawnb.png", color:"black", empty:false},
      {sqid : 'e8', horizontal:'e', vertical:'8', image : "./assets/images/kingb.png", color:"white", empty:false}
    ],
    [
      {sqid : 'f1', horizontal:'f', vertical:'1', image : "./assets/images/bishopw.png", color:"white", empty:false},
      {sqid : 'f2', horizontal:'f', vertical:'2', image : "./assets/images/pawnw.png", color:"black", empty:false},
      {sqid : 'f3', horizontal:'f', vertical:'3', image : "", color:"white", empty:true},
      {sqid : 'f4', horizontal:'f', vertical:'4', image : "", color:"black", empty:true},
      {sqid : 'f5', horizontal:'f', vertical:'5', image : "", color:"white", empty:true},
      {sqid : 'f6', horizontal:'f', vertical:'6', image : "", color:"black", empty:true},
      {sqid : 'f7', horizontal:'f', vertical:'7', image : "./assets/images/pawnb.png", color:"white", empty:false},
      {sqid : 'f8', horizontal:'f', vertical:'8', image : "./assets/images/bishopb.png", color:"black", empty:false}
    ],
    [
      {sqid : 'g1', horizontal:'g', vertical:'1', image : "./assets/images/knightw.png", color:"black", empty:false},
      {sqid : 'g2', horizontal:'g', vertical:'2', image : "./assets/images/pawnw.png", color:"white", empty:false},
      {sqid : 'g3', horizontal:'g', vertical:'3', image : "", color:"black", empty:true},
      {sqid : 'g4', horizontal:'g', vertical:'4', image : "", color:"white", empty:true},
      {sqid : 'g5', horizontal:'g', vertical:'5', image : "", color:"black", empty:true},
      {sqid : 'g6', horizontal:'g', vertical:'6', image : "", color:"white", empty:true},
      {sqid : 'g7', horizontal:'g', vertical:'7', image : "./assets/images/pawnb.png", color:"black", empty:false},
      {sqid : 'g8', horizontal:'g', vertical:'8', image : "./assets/images/knightb.png", color:"white", empty:false}
    ],
    [
      {sqid : 'h1', horizontal:'h', vertical:'1', image : "./assets/images/towerw.png", color:"white", empty:false},
      {sqid : 'h2', horizontal:'h', vertical:'2', image : "./assets/images/pawnw.png", color:"black", empty:false},
      {sqid : 'h3', horizontal:'h', vertical:'3', image : "", color:"white", empty:true},
      {sqid : 'h4', horizontal:'h', vertical:'4', image : "", color:"black", empty:true},
      {sqid : 'h5', horizontal:'h', vertical:'5', image : "", color:"white", empty:true},
      {sqid : 'h6', horizontal:'h', vertical:'6', image : "", color:"black", empty:true},
      {sqid : 'h7', horizontal:'h', vertical:'7', image : "./assets/images/pawnb.png", color:"white", empty:false},
      {sqid : 'h8', horizontal:'h', vertical:'8', image : "./assets/images/towerb.png", color:"black", empty:false}
    ]
  ]

  board:Board = new Board(this.squares)
  match:Match = new Match(this.board,"white",false,1,"","","","","")
  playerName = ''
  history = ''
  

  constructor(private route:ActivatedRoute, 
    private router: Router,
    private moveService:MoveService) { }

  ngOnInit(): void {
    this.playerName = this.route.snapshot.params['name']
  }

  move() {
    this.moveService.callMove(this.match).subscribe(
      data => {
        console.log(data)
        this.match = data
        this.router.navigate(['board'])
      }
    );
  }

  handleSuccesfulResponse(response:Square[][]) {
    console.log(response)
    this.squares = response
  }
  handleErrorResponse(error:HttpErrorResponse) {
    console.log(error.message)
  }

}
