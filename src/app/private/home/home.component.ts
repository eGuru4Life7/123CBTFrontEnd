import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser:any={};
  constructor(private localService:LocalCacheService) { }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
  }

}
