import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.scss']
})
export class AlternativeComponent implements OnInit {
  thoughts: any;
  alternative:any= {};
  user:any = {};
  constructor(private moduleService:ModuleService,private localCache:LocalCacheService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.thoughts=localStorage.getItem('t_E');
  }

  updateAlternativeThought(){
    if(!this.alternative.thoughts){
      this.messageService.add({ severity: 'warn', summary: 'Thoughts', detail: "please write some thoughts." }); 
      return;
    }
    this.alternative.uid =this.localCache.getCurrentUser().id; 
    this.moduleService.updateAlternativeThought(this.alternative).subscribe((res:any)=>{
      if(res.success){
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
      }else{
        this.messageService.add({ severity: 'error', summary: '', detail: res.message });
      }
    });
  }

}
