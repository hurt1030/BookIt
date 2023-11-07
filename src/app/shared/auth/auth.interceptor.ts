import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(request);
        }

        const newReq = request.clone({
          params: new HttpParams().set('auth', user.token)
        });

        return next.handle(newReq);
      })
    );
  }
}
