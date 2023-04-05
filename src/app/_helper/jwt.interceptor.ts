import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUserObject= localStorage.getItem('_HUD');
       // request.headers.append('Token', this.localCache.getToken());
        let currentUser = currentUserObject == null ? currentUserObject: JSON.parse(currentUserObject);
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Token: `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}