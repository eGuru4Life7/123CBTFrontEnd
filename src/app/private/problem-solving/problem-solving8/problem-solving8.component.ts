import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-problem-solving8',
  templateUrl: './problem-solving8.component.html',
  styleUrls: ['./problem-solving8.component.scss']
})
export class ProblemSolving8Component implements OnInit {

  userfifthMod:any;
  constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 100, nextCode: 'B_A'  });
  }

  ngOnInit(): void {
    this.userfifthMod = this.localService.getCurrentUser().fifth_mod;
  }


}
