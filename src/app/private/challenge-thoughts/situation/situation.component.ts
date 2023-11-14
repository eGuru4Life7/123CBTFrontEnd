import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';
import { SpeechServiceService } from '../../../services/speech-service.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent implements  OnInit {
  text: any = "";
  prevText: any = "";
  base64: any = "";
  isPlay: boolean = false;
  diary:any ={};
  currentUser: any;
  constructor(private moduleService: ModuleService, private localService:LocalCacheService,private router:Router,private speechService: SpeechServiceService) { 
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
  


  ngAfterViewInit() {
    setTimeout(async () => {
      // 
      this.isPlay = true;
    }, 1500)
  }

  playAudio(html: any) {

    if (this.prevText.innerHTML == html.innerHTML) {
      this.speechService.playAudio(this.text);
      return;
    }
     this.speechService.getBase64Text(html.innerHTML).subscribe((resp: any) => {
      if (resp.success) {
        this.text = "";
        this.prevText = html;
        resp.data.forEach((d: any) => {
          this.text += d.base64;
          this.speechService.playAudio(this.text);
        })

      }
    });


  }

}
