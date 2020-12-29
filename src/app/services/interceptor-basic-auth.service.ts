import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationCredentialsService } from './basicautentication-credentials.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorBasicAuthService implements HttpInterceptor{

  constructor(public basicAuthenticationService:BasicAuthenticationCredentialsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let basicAuthHeaderString = this.basicAuthenticationService.getUserToken();
    let userAuthenticated = this.basicAuthenticationService.getUserToken();

    if (basicAuthHeaderString && userAuthenticated) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
