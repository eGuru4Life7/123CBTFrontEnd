import { Component, OnInit } from '@angular/core';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private localService:LocalCacheService) { }

  ngOnInit(): void {
    this.currentUser =this.localService.getCurrentUser();
  }

}
