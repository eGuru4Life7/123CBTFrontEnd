import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private route:Router,private translate:TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      if(this.translate.currentLang == 'ch'){
        this.route.navigate(['/home/ch']);
      }else{
        this.route.navigate(['']);
      }     
    }, 2000);
  }

}
