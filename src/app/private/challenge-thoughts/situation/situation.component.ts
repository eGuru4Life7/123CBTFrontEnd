import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements  OnInit {

  diary:any ={};
  currentUser: any;
  constructor(private moduleService: ModuleService, private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'C_T', completed: 60, nextCode: 'B_T' });
    this.createForm();
  }
  user: any = {};
  diaryForm!: FormGroup;
  
  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
    //this.diary.uid = this.currentUser.id;
  }
  
  createForm() {
    this.diaryForm = new FormGroup({
      happening: new FormControl('', Validators.required),
      thinking: new FormControl('', Validators.required),
      do: new FormControl('', Validators.required),
      physical_sensations: new FormControl('', Validators.required),
      feeling: new FormControl('', Validators.required),
      uid: new FormControl('')
    });
  }



  addThoughtDairy() {
    this.diaryForm.get('uid')?.setValue(this.currentUser.id);
    this.moduleService.addThoughtDairy(this.diaryForm.value).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['../challengethoughts/circle']);
      }
    })
  }
  
}
