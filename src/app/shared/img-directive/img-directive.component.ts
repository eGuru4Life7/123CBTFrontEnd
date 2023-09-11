import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-d',
  templateUrl: './img-directive.component.html',
  styleUrls: ['./img-directive.component.scss']
})
export class ImgDirectiveComponent implements OnInit {
  @Input() src:any =null;
  @Input() alt:any =null;
  @Input() class:any =null;
  @Input() style:any =null;
  @Input() height:any =null;
  @Input() aria_label:any =null;
  lang:any;
  path:any = "../../../../assets/static/illustrations/";
  constructor(){
   console.log(this.height);
   console.log(this.src);
  }

  ngOnInit(): void {
    console.log(this.height);
    console.log(this.src);
    this.lang= localStorage.getItem('lang');
    if(this.lang == 'ch'){
      this.path= this.path +'/Ch/'+ this.src;
    }else{
      this.path= this.path + this.src;
    }
  }
}
