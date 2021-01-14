import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardComponent } from '../board/board.component';
import { BasicAuthenticationCredentialsService } from '../services/basicautentication-credentials.service';
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

  constructor(private router: Router, 
    public hardcodedCredentials: HardcodedCredentialsService,
    public basicauthCredentials: BasicAuthenticationCredentialsService) { }

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

  handleBasicAuthenticationLogin() {
    this.basicauthCredentials.executeBasicAuthentication(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['board', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuthenticationLogin() {
    this.basicauthCredentials.executeJWTAuthentication(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['board', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}
