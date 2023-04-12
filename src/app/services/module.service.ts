import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient ) { }

  public addModule(module:any):Observable<any> {
   return  this.http.post(environment.BASE_URL+'module',module);
  }

  public getModuleScoreById(id:any,module:any):Observable<any> {
    return  this.http.get(environment.BASE_URL+'module/score/'+id+'/'+module);
   }
 

}
