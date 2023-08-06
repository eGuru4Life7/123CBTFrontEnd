import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prev-next-button',
  templateUrl: './prev-next-button.component.html',
  styleUrls: ['./prev-next-button.component.scss']
})
export class PrevNextButtonComponent implements OnInit {
  @Input() next:any =null;
  @Input() prev:any =null;
  dir:any;
  constructor(){
   
  }

  ngOnInit(): void {
    this.dir= localStorage.getItem('dir');
  }


}
