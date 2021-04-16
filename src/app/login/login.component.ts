import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationCredentialsService } from '../services/basicautentication-credentials.service';
import { HardcodedCredentialsService } from '../services/hardcoded-credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'invalid credentials!'
  invalidLogin = false

  constructor(private route:ActivatedRoute, private router: Router, 
    public hardcodedCredentials: HardcodedCredentialsService,
    public basicauthCredentials: BasicAuthenticationCredentialsService) { }

  ngOnInit(): void {
  }

  // handleLogin() {
  //   if (this.hardcodedCredentials.authenticate(this.username,this.password)) {
  //     this.invalidLogin = false
  //     this.router.navigate(['board', this.username])
  //   }
  //   else {
  //     this.invalidLogin = true
  //   }
  // }

  // handleBasicAuthenticationLogin() {
  //   this.basicauthCredentials.executeBasicAuthentication(this.username,this.password).subscribe(
  //     data => {
  //       console.log(data)
  //       this.invalidLogin = false
  //       this.router.navigate(['board', this.username])
  //     },
  //     error => {
  //       console.log(error)
  //       this.invalidLogin = true
  //     }
  //   )
  // }

  handleJWTAuthenticationLogin() {
    console.log('login as ' + this.username)
    this.basicauthCredentials.executeJWTAuthentication(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        //this.route.snapshot.params['name'] = this.username
        this.router.navigate(['board'])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}
