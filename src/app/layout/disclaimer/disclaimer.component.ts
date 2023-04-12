import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {
  isAgree:boolean = false;
  isDisabled:boolean = true;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onChangeAgree(){
    this.isAgree =!this.isAgree;
    this.isDisabled =!this.isDisabled;
  }

  navigate(){
    this.route.navigate(['/evidence']);
  }


}
