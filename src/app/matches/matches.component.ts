import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';

export class FamousMatches {
  constructor(public match_id:number, 
    public white_player:string,
    public black_player:string,
    public result:string, 
    public year:number,
    public match:string) {} 
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})

export class MatchesComponent implements OnInit {

  matches:FamousMatches[] = [
    {match_id:1,white_player:"sebas",black_player:"felix",result:"0-1",year:1993,match:"1.e4 e5"}
  ]

  constructor(private route:ActivatedRoute, 
    private router: Router,
    private matchesService:MatchesService) { }

  ngOnInit(): void {
  }

  load() {
    this.matchesService.loadMatches().subscribe(
      data => {
        console.log(data)
        this.matches = data
        this.router.navigate(['matches'])
      }
    );
  }

  handleSuccesfulResponse(response:FamousMatches[]) {
    console.log(response)
    this.matches = response
  }
  handleErrorResponse(error:HttpErrorResponse) {
    console.log(error.message)
  }


}
