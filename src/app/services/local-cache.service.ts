import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { ModuleService } from './module.service';

@Injectable()
export class LocalCacheService {

  constructor(private moduleService: ModuleService) { }

  private setItem(key: any, value: any) {
    window.localStorage.setItem(key, value);
  }

  private getItem(key: any) {
    return window.localStorage.getItem(key);
  }

  private clearItem(key: any) {
    window.localStorage.removeItem(key);
  }

  public setLoginData(data: any) {

    //data.roleId = data.roleId;
    // this.setItem(Constants.STORAGE_ITEM.TOKEN, data.user.token);
    // this.setItem(Constants.STORAGE_ITEM.LOGIN_DATA, JSON.stringify(data.user));
    this.setItem(Constants.STORAGE_ITEM.TOKEN, data.token);
    this.setItem(Constants.STORAGE_ITEM.LOGIN_DATA, JSON.stringify(data));

  }

  setRememberMe(isRemeberMe: any) {
    this.setItem("RememberMe",isRemeberMe);
  }
  
  getRememberMe():boolean {
    return this.getItem("RememberMe") == 'true'?true:false;
  }
  public getGmtTimeZone() {
    return this.getItem(Constants.STORAGE_ITEM.GMT);
  }

  public setEditId(id: any) {
    this.setItem('Id', id);
  }
  public getEditId() {

    return this.getItem('Id');
  }
  public setReportPara(fileno: any, id: any) {
    this.setItem('fileno', fileno);
    this.setItem('id', id);
  }
  public getReportfileno() {
    return this.getItem('fileno');
  }
  public getreportid() {
    return this.getItem('id');
  }
  public ClearEditId() {
    this.clearItem('fileno');
    this.clearItem('id');
    this.clearItem('Id');

  }

  
  public getLoginData() {
    let data = this.getItem(Constants.STORAGE_ITEM.LOGIN_DATA);

    return !data ? null : JSON.parse(data);
  }

  public getToken() {
    return this.getItem(Constants.STORAGE_ITEM.TOKEN);
  }

  public getCurrentUser() {
    return this.getLoginData();
  }

  public isUserLoggedIn() {
    return this.getToken() != null;
  }

  public logoutUser() {
    this.clearItem(Constants.STORAGE_ITEM.LOGIN_DATA);
    this.clearItem(Constants.STORAGE_ITEM.TOKEN);
    this.clearItem(Constants.STORAGE_ITEM.GMT);
  }
  public destroy() {
    window.localStorage.clear();
  }

  public updateModuleStatus(obj: any) {
    obj.uid = this.getCurrentUser().id;
    this.moduleService.updateModuleStatus(obj).toPromise().then((d: any) => {
      if (d) {
        return true;
      }
      return true;
    });
    return true;
  }
}
