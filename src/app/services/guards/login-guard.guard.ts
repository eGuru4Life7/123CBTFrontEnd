import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalCacheService } from '../local-cache.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private localService: LocalCacheService,private route:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (this.localService.isUserLoggedIn() && this.localService.getRememberMe()) {
       this.route.navigate(['/home/en']);
       console.log('abc');
       return true;
     }else
     {
      this.localService.destroy();
     }
     //this.route.navigate(['/auth']);
    //this.route.navigate(['../home/en']);
     return true;
  }
  
}
