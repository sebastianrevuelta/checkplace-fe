import { Component, OnInit } from '@angular/core';
import { HardcodedCredentialsService } from '../services/hardcoded-credentials.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(public hardcodedAuthenticationService: HardcodedCredentialsService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
