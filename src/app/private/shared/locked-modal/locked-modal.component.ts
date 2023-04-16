import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'locked-modal',
  templateUrl: './locked-modal.component.html',
  styleUrls: ['./locked-modal.component.scss'],
  animations: [
    trigger('dialog', [
     transition('start => end', [
            animate('1s 2s')
         ]),
         transition('end => start', [
            animate('1s 2s')
         ])
    ])
  ]
})
export class LockedModalComponent implements OnInit {
  @Input() isShow = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeModal(){
    this.isShow =false;
  }
}
