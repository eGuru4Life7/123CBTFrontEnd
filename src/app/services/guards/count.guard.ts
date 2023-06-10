import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalCacheService } from '../local-cache.service';
import { ModuleService } from '../module.service';

@Injectable({
  providedIn: 'root'
})
export class CountGuard implements CanActivate {
  constructor(private localCache: LocalCacheService,private route:Router,private moduleService:ModuleService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       let data:any = route.data as any;
       let status:any= {};
       status.uid = this.localCache.getCurrentUser().id;
       let result = Object.assign(status, data);
       this.moduleService.updateModuleStatus(result).subscribe();
    return true;
  }
  
}
