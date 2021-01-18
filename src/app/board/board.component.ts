import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveService } from '../services/move.service';

export class Piece {
  constructor(public color:string, 
    public horizontal:string,
    public vertical:string,
    public type:string,
    public value:number) {}
}

export class Square {
  constructor(public sqid:string, 
    public horizontal:string,
    public vertical:string,
    public image:string, 
    public color:string,
    public isEmpty:boolean,
    public piece:Piece) { }
}

export class Board {
  constructor(public square:Square[][]) { } 
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
  towera1:Piece = new Piece("white","a","1","tower",5)
  towerh1:Piece = new Piece("white","h","1","tower",5)
  towera8:Piece = new Piece("black","a","8","tower",5)
  towerh8:Piece = new Piece("black","h","8","tower",5)

  knightb1:Piece = new Piece("white","b","1","knight",3)
  knightg1:Piece = new Piece("white","g","1","knight",3)
  knightb8:Piece = new Piece("black","b","8","knight",3)
  knightg8:Piece = new Piece("black","g","8","knight",3)

  bishopc1:Piece = new Piece("white","c","1","bishop",3)
  bishopf1:Piece = new Piece("white","f","1","bishop",3)
  bishopc8:Piece = new Piece("black","c","8","bishop",3)
  bishopf8:Piece = new Piece("black","f","8","bishop",3)

  queend1:Piece = new Piece("white","d","1","queen",9)
  queend8:Piece = new Piece("black","d","8","queen",9)

  kinge1:Piece = new Piece("white","e","1","king",1000)
  kinge8:Piece = new Piece("black","e","8","king",1000)

  pawna2:Piece = new Piece("white","a","2","pawn",1)
  pawnb2:Piece = new Piece("white","b","2","pawn",1)
  pawnc2:Piece = new Piece("white","c","2","pawn",1)
  pawnd2:Piece = new Piece("white","d","2","pawn",1)
  pawne2:Piece = new Piece("white","e","2","pawn",1)
  pawnf2:Piece = new Piece("white","f","2","pawn",1)
  pawng2:Piece = new Piece("white","g","2","pawn",1)
  pawnh2:Piece = new Piece("white","h","2","pawn",1)

  pawna7:Piece = new Piece("black","a","7","pawn",1)
  pawnb7:Piece = new Piece("black","b","7","pawn",1)
  pawnc7:Piece = new Piece("black","c","7","pawn",1)
  pawnd7:Piece = new Piece("black","d","7","pawn",1)
  pawne7:Piece = new Piece("black","e","7","pawn",1)
  pawnf7:Piece = new Piece("black","f","7","pawn",1)
  pawng7:Piece = new Piece("black","g","7","pawn",1)
  pawnh7:Piece = new Piece("black","h","7","pawn",1)

  a3:Piece = new Piece("","a","3","",0)

  noPiece!: Piece;
  squares:Square[][] = [ 
    [
      {sqid : 'a1', horizontal:'a', vertical:'1', image : "./assets/images/towerw.png", color:"black", isEmpty:false, piece:this.towera1},
      {sqid : 'a2', horizontal:'a', vertical:'2', image : "./assets/images/pawnw.png", color:"white", isEmpty:false, piece:this.pawna2},
      {sqid : 'a3', horizontal:'a', vertical:'3', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'a4', horizontal:'a', vertical:'4', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'a5', horizontal:'a', vertical:'5', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'a6', horizontal:'a', vertical:'6', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'a7', horizontal:'a', vertical:'7', image : "./assets/images/pawnb.png", color:"black", isEmpty:false, piece:this.pawna7},
      {sqid : 'a8', horizontal:'a', vertical:'8', image : "./assets/images/towerb.png", color:"white", isEmpty:false, piece:this.towera8}
    ],
    [
      {sqid : 'b1', horizontal:'b', vertical:'1', image : "./assets/images/knightw.png", color:"white", isEmpty:false, piece:this.knightb1},
      {sqid : 'b2', horizontal:'b', vertical:'2', image : "./assets/images/pawnw.png", color:"black", isEmpty:false, piece:this.pawnb2},
      {sqid : 'b3', horizontal:'b', vertical:'3', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'b4', horizontal:'b', vertical:'4', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'b5', horizontal:'b', vertical:'5', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'b6', horizontal:'b', vertical:'6', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'b7', horizontal:'b', vertical:'7', image : "./assets/images/pawnb.png", color:"white", isEmpty:false, piece:this.pawnb7},
      {sqid : 'b8', horizontal:'b', vertical:'8', image : "./assets/images/knightb.png", color:"black", isEmpty:false, piece:this.knightb8}
    ],
    [
      {sqid : 'c1', horizontal:'c', vertical:'1', image : "./assets/images/bishopw.png", color:"black", isEmpty:false, piece:this.bishopc1},
      {sqid : 'c2', horizontal:'c', vertical:'2', image : "./assets/images/pawnw.png", color:"white", isEmpty:false, piece:this.pawnc2},
      {sqid : 'c3', horizontal:'c', vertical:'3', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'c4', horizontal:'c', vertical:'4', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'c5', horizontal:'c', vertical:'5', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'c6', horizontal:'c', vertical:'6', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'c7', horizontal:'c', vertical:'7', image : "./assets/images/pawnb.png", color:"black", isEmpty:false, piece:this.pawnc7},
      {sqid : 'c8', horizontal:'c', vertical:'8', image : "./assets/images/bishopb.png", color:"white", isEmpty:false, piece:this.bishopc8},
    ],
    [
      {sqid : 'd1', horizontal:'d', vertical:'1', image : "./assets/images/queenw.png", color:"white", isEmpty:false, piece:this.queend1},
      {sqid : 'd2', horizontal:'d', vertical:'2', image : "./assets/images/pawnw.png", color:"black", isEmpty:false, piece:this.pawnd2},
      {sqid : 'd3', horizontal:'d', vertical:'3', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'd4', horizontal:'d', vertical:'4', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'd5', horizontal:'d', vertical:'5', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'd6', horizontal:'d', vertical:'6', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'd7', horizontal:'d', vertical:'7', image : "./assets/images/pawnb.png", color:"white", isEmpty:false, piece:this.pawnd7},
      {sqid : 'd8', horizontal:'d', vertical:'8', image : "./assets/images/queenb.png", color:"black", isEmpty:false, piece:this.queend8}
    ],
    [
      {sqid : 'e1', horizontal:'e', vertical:'1', image : "./assets/images/kingw.png", color:"black", isEmpty:false, piece:this.kinge1},
      {sqid : 'e2', horizontal:'e', vertical:'1', image : "./assets/images/pawnw.png", color:"white", isEmpty:false, piece:this.pawne2},
      {sqid : 'e3', horizontal:'e', vertical:'2', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'e4', horizontal:'e', vertical:'3', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'e5', horizontal:'e', vertical:'4', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'e6', horizontal:'e', vertical:'5', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'e7', horizontal:'e', vertical:'6', image : "./assets/images/pawnb.png", color:"black", isEmpty:false, piece:this.pawne7},
      {sqid : 'e8', horizontal:'e', vertical:'7', image : "./assets/images/kingb.png", color:"white", isEmpty:false, piece:this.kinge8}
    ],
    [
      {sqid : 'f1', horizontal:'f', vertical:'8', image : "./assets/images/bishopw.png", color:"white", isEmpty:false, piece:this.bishopf1},
      {sqid : 'f2', horizontal:'f', vertical:'2', image : "./assets/images/pawnw.png", color:"black", isEmpty:false, piece:this.pawnf2},
      {sqid : 'f3', horizontal:'f', vertical:'3', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'f4', horizontal:'f', vertical:'4', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'f5', horizontal:'f', vertical:'5', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'f6', horizontal:'f', vertical:'6', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'f7', horizontal:'f', vertical:'7', image : "./assets/images/pawnb.png", color:"white", isEmpty:false, piece:this.pawnf7},
      {sqid : 'f8', horizontal:'f', vertical:'8', image : "./assets/images/bishopb.png", color:"black", isEmpty:false, piece:this.bishopf8}
    ],
    [
      {sqid : 'g1', horizontal:'g', vertical:'1', image : "./assets/images/knightw.png", color:"black", isEmpty:false, piece:this.knightg1},
      {sqid : 'g2', horizontal:'g', vertical:'2', image : "./assets/images/pawnw.png", color:"white", isEmpty:false, piece:this.pawng2},
      {sqid : 'g3', horizontal:'g', vertical:'3', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'g4', horizontal:'g', vertical:'4', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'g5', horizontal:'g', vertical:'5', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'g6', horizontal:'g', vertical:'6', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'g7', horizontal:'g', vertical:'7', image : "./assets/images/pawnb.png", color:"black", isEmpty:false, piece:this.pawng7},
      {sqid : 'g8', horizontal:'g', vertical:'8', image : "./assets/images/knightb.png", color:"white", isEmpty:false, piece:this.knightg8}
    ],
    [
      {sqid : 'h1', horizontal:'h', vertical:'1', image : "./assets/images/towerw.png", color:"white", isEmpty:false, piece:this.towerh1},
      {sqid : 'h2', horizontal:'h', vertical:'2', image : "./assets/images/pawnw.png", color:"black", isEmpty:false, piece:this.pawnh2},
      {sqid : 'h3', horizontal:'h', vertical:'3', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'h4', horizontal:'h', vertical:'4', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'h5', horizontal:'h', vertical:'5', image : "", color:"white", isEmpty:true, piece:this.noPiece},
      {sqid : 'h6', horizontal:'h', vertical:'6', image : "", color:"black", isEmpty:true, piece:this.noPiece},
      {sqid : 'h7', horizontal:'h', vertical:'7', image : "./assets/images/pawnb.png", color:"white", isEmpty:false, piece:this.pawnh7},
      {sqid : 'h8', horizontal:'h', vertical:'8', image : "./assets/images/towerb.png", color:"black", isEmpty:false, piece:this.towerh8}
    ]
  ]

  board:Board = new Board(this.squares)
  match:Match = new Match(this.board,"white",false,1,"New Match","","","","")
  playerName = 'kasparov'
  history = 'e2e4'
  

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
        this.router.navigate(['board', this.playerName])
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
