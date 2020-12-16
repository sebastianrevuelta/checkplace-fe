import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sebas'
  password = ''
  errorMessage = 'invalid credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username === 'sebas' && this.password==='sebas') {
      this.invalidLogin = false
      this.router.navigate(['board', this.username])
    }
    else {
      this.invalidLogin = true
    }
  }

}
