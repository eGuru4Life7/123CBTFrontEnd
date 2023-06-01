import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-examine-thoughts7',
  templateUrl: './examine-thoughts7.component.html',
  styleUrls: ['./examine-thoughts7.component.scss']
})
export class ExamineThoughts7Component implements OnInit {

  currentUser: any;
  constructor(private moduleService: ModuleService, private localService: LocalCacheService,private router:Router) {
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
    debugger
     this.moduleService.addThoughtDairy(this.diaryForm.value).subscribe((res: any) => {
      debugger
      if (res.success) {

        this.router.navigate(['../examinethoughts/examine8']);
      }
    })
  }
  
}
