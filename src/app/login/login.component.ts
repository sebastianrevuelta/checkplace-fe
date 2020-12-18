import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import { HardcodedCredentialsService } from '../services/hardcoded-credentials.service';

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

  constructor(private router: Router, public hardcodedCredentials: HardcodedCredentialsService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedCredentials.authenticate(this.username,this.password)) {
      this.invalidLogin = false
      this.router.navigate(['board', this.username])
    }
    else {
      this.invalidLogin = true
    }
  }

}
