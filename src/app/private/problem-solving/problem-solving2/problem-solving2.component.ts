import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving2',
  templateUrl: './problem-solving2.component.html',
  styleUrls: ['./problem-solving2.component.scss']
})
export class ProblemSolving2Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 30, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }

}
