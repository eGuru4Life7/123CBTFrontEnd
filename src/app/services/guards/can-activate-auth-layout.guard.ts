import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalCacheService } from '../local-cache.service';
import { Constants } from '../constants';

@Injectable()
export class CanActivateAuthLayoutGuard implements CanActivate {

  constructor(private localCache: LocalCacheService,private route:Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.localCache.isUserLoggedIn()) {
      return true;
    }
    this.route.navigate(['/auth']);
    return false;
  }
}
