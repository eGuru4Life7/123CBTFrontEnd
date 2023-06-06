import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  isAgree:boolean = false;
  isDisabled:boolean = true;
  dir:any;
  constructor(private route:Router,private translate: TranslateService) { }

  ngOnInit(): void {
    var lang :any = localStorage.getItem("lang");
    this.dir= localStorage.getItem("dir");
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  onChangeAgree(){
    this.isAgree =!this.isAgree;
    this.isDisabled =!this.isDisabled;
  }

  navigate(){
    this.route.navigate(['/evidence']);
  }


}
