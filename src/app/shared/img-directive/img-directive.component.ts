import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-directive',
  templateUrl: './img-directive.component.html',
  styleUrls: ['./img-directive.component.scss']
})
export class ImgDirectiveComponent implements OnInit {
  @Input() src:any =null;
  @Input() alt:any =null;
  lang:any;
  path:any = "../../../../assets/static/illustrations/";
  constructor(){
   
  }

  ngOnInit(): void {
    this.lang= localStorage.getItem('lang');
    if(this.lang == 'ch'){
      this.path= this.path +'/Ch/'+ this.src;
    }else{
      this.path= this.path + this.src;
    }
  }
}
