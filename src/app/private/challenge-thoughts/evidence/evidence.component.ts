import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  constructor(private route:ActivatedRoute) { }

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
