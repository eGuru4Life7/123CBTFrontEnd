import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {
  currentUser: any;
  dairy:any ={};
  constructor(private moduleService: ModuleService, private localService: LocalCacheService,private router:Router) {

  }
  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    this.getThoughtDiaryById();
  }
  
  async getThoughtDiaryById() {
    await this.moduleService.getThoughtDiaryById(this.currentUser.id).toPromise().then((res: any) => {
      if (res.success) {
        this.dairy = res.data[0];
        localStorage.setItem('t_E',this.dairy.thinking);
      }
    })
  }
}