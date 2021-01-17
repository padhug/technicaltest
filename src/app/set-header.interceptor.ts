import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    
    request = request.clone({ setHeaders: {
      'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
    }})
    return next.handle(request);
  }
}
