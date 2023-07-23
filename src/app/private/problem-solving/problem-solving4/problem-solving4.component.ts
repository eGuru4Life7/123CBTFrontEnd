import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving4',
  templateUrl: './problem-solving4.component.html',
  styleUrls: ['./problem-solving4.component.scss']
})
export class ProblemSolving4Component implements OnInit {

   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 45, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }

}
