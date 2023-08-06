import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'locked-modal',
  templateUrl: './locked-modal.component.html',
  styleUrls: ['./locked-modal.component.scss']
})
export class LockedModalComponent implements OnInit {
  @Input() isShow = false;
  @Output() isShowEvent = new EventEmitter<boolean>(); 
  constructor() { }

  ngOnInit(): void {
    console.log(this.isShow);
  }

  closeModal(){
    this.isShow =false;
    this.isShowEvent.emit(this.isShow);
  }
}
