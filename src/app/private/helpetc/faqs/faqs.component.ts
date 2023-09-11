import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  url :any;
  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
    this.url = '/home/'+this.translate.currentLang;
  }

}
