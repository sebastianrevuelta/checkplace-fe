import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedCredentialsService } from './hardcoded-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedCredentialsService: HardcodedCredentialsService, 
    private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedCredentialsService.isUserLoggedIn()) {
      return true;
    }
    this.route.navigate(['login'])
    return false;
  }
}
