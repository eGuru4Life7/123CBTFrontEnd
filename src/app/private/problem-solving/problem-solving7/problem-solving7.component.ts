import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';
@Component({
  selector: 'app-problem-solving7',
  templateUrl: './problem-solving7.component.html',
  styleUrls: ['./problem-solving7.component.scss']
})
export class ProblemSolving7Component implements OnInit {
  problems:any = true;
  problemsList:any = false;
  solutionList:any = false;
  chooseSolution:any = false;
  advDisAdv:any = false;
  next:any = false;
  appSol: boolean= false;
   constructor(private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'P_S', completed: 90, nextCode: 'B_A' });
   }

  ngOnInit(): void {
  }

  showProblem(){
    this.problems = false;
    this.problemsList = true;
  }
  showNext(){
    this.problemsList = true;
    this.next = true;
  }
  showNext1(){
    this.problemsList = false;
    this.next = false;
    this.solutionList= true;
    
  }
  showNext2(){
   
    this.chooseSolution= true;
   
  }
  showNext3(){
    this.solutionList= false;
    this.chooseSolution= false;
    this.advDisAdv = true;
  }
  showNext4(){
    this.advDisAdv= false;
    this.appSol = true;
  }
}
