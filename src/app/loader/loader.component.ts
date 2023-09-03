import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private route: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/home/', this.translate.currentLang]);
    }, 2000);
  }

}
