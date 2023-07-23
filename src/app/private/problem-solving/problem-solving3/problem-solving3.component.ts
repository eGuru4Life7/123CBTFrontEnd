import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving3',
  templateUrl: './problem-solving3.component.html',
  styleUrls: ['./problem-solving3.component.scss']
})
export class ProblemSolving3Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 40, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }

}
