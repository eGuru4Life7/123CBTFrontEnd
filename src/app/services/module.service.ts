import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  public addModule(module: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'module', module);
  }

  public getModuleScoreById(id: any, module: any): Observable<any> {
    return this.http.get(environment.BASE_URL + 'module/score/' + id + '/' + module);
  }

  public addThoughtDairy(diary: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'module/addThoughtDairy', diary);
  }

  public getThoughtDiaryById(id: any): Observable<any> {
    return this.http.get(environment.BASE_URL + 'module/thoughtDiary/' + id);
  }
  public getAllModule(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'module');
  }
  public getAllModuleStatusById(id:any): Observable<any> {
    return this.http.get(environment.BASE_URL + 'module/Status/'+id);
  }
  public updateModuleStatus(data: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'module/updateModulesStatusById', data);
  }
  public updateAlternativeThought(data: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'module/updateAlternativeThoughts', data);
  }
  public getAllHealthyThoughts(id:any): Observable<any> {
    return this.http.get(environment.BASE_URL + 'module/getAllHealthyThoughts/'+id);
  }
}
