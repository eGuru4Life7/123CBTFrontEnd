import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'prev-next-button',
  templateUrl: './prev-next-button.component.html',
  styleUrls: ['./prev-next-button.component.scss']
})
export class PrevNextButtonComponent implements OnInit {
  @Input() next:any =null;
  @Input() prev:any =null;
  dir:any;
  constructor(private translate:TranslateService){
   
  }

  ngOnInit(): void {
    this.dir= localStorage.getItem('dir');
    if(this.next == ''){
      if(this.translate.currentLang == 'ch'){
        this.next = '/home/'+this.translate.currentLang;
      }
    }
  }


}
