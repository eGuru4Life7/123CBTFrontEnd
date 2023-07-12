import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LocalCacheService } from 'src/app/services/local-cache.service';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.scss']
})
export class EvidenceComponent implements OnInit {
  isShowModal: boolean = false;
  evidence: any = {for:null,against:null};
  for: any = [];
  against: any = [];
  thoughts: any;
  constructor(private route:ActivatedRoute,private localService:LocalCacheService,private router:Router) { 
    this.localService.updateModuleStatus({ code: 'C_T', completed: 85, nextCode: 'B_T' });
   }

  ngOnInit(): void {
    this.thoughts = localStorage.getItem('Ct_E');
  }
  showModal() {
    if (this.evidence.for) {
      this.for = this.evidence.for.split(/\r?\n/).filter((s:any)=>s != '');
    }
    if (this.evidence.against) {
      this.against = this.evidence.against.split(/\r?\n/).filter((s:any)=>s != '');
    }
    this.isShowModal = !this.isShowModal;
  }
  closeModal() {
    this.isShowModal = false;
  }


}
