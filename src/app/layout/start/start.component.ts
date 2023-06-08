import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  dir:any;
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    var lang :any = localStorage.getItem("lang");
    this.dir= localStorage.getItem("dir");
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

}
