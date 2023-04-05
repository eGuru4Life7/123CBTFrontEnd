import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentUser:any={};
  constructor(private localService:LocalCacheService,private route:Router) { }

  ngOnInit(): void {
    this.currentUser = this.localService.getCurrentUser();
  }


  logout(){
    this.localService.logoutUser();
    this.route.navigate(['/auth']);

  }
}
