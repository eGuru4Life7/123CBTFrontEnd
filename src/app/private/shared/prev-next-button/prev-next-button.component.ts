import { Component, Input } from '@angular/core';

@Component({
  selector: 'prev-next-button',
  templateUrl: './prev-next-button.component.html',
  styleUrls: ['./prev-next-button.component.scss']
})
export class PrevNextButtonComponent {
  @Input() next:any;
  @Input() prev:any;
  dir:any;
  ngOnInit(): void {
   this.dir= localStorage.getItem('dir');
    
  }


}