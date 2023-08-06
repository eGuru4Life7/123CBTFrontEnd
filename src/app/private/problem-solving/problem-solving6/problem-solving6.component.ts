import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving6',
  templateUrl: './problem-solving6.component.html',
  styleUrls: ['./problem-solving6.component.scss']
})
export class ProblemSolving6Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 70, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }

}
