import { Component, OnInit } from '@angular/core';
import { HardcodedCredentialsService } from '../services/hardcoded-credentials.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedCredentialsService: HardcodedCredentialsService) { }

  ngOnInit(): void {
    this.hardcodedCredentialsService.logout();
  }

}
