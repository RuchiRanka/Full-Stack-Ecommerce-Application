import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable, from, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {

    // only add an access token for secured endpoints
    const theEndpoint = environment.ecommerceApiUrl + '/orders';
    const securedEndpoints = [theEndpoint];

    if(securedEndpoints.some(url => request.urlWithParams.includes(url))) {

      // get access token
      const accessToken = this.oktaAuth.getAccessToken();

      // clone the request and add new header with access token
      // we clone the request because the request is immutable
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });

    }

    return await lastValueFrom(next.handle(request));
  }
}
