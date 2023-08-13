import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { DatePipe } from '@angular/common';
import * as htmlToImage from 'html-to-image';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
  providers:[DatePipe]
})
export class CertificateComponent {
  title = 'htmltopdf';
  currentUser: any;
  user: any;
  email:any;
  @ViewChild('pdfTable',{static:false}) pdfTable!: ElementRef;
  firstName: any;
  lastName: any;
  date: any;
  constructor(private localService: LocalCacheService, private userService: UserServiceService,
    private messageService: MessageService,private route:Router,private datePipe: DatePipe) { }

 ngOnInit(): void {
   this.currentUser =this.localService.getCurrentUser();
   this.user = this.currentUser;
   this.firstName = this.currentUser.first_name;
   this.lastName = this.currentUser.last_name
   this.email = this.currentUser.email;
   this.date = this.datePipe.transform(new Date(Date.now()),'yyyy-MM-dd');
 }



     makePdf(){
      let pdf= new jsPDF('l','px');
      let html = `
      <div>

          <style>
                .text-center {
                    text-align:center;
                }
              .certificate {
                  width: 100%;
                  text-shadow: 1px 1px 2px #ccc;
              }
              
              .header {
                  text-align: center;
                 
                 
                
              }
              
              .name {
                  color: #333;
                 
              }
              
              .course {
                  color: #333;
                  
              }
              
              .date {
                 
                  color: #333;
              }
              
              .signature {
                  text-align: center;
              }
              
              img {
                 
              
              .certificate>p {
                 
              
              .certificate>p:last-child {
                
              }
              
              .header,
              .name,
              .course,
              .date {
                  color: #333;
              }
              
              .header {
                  color: #000;
              }
              
              .signature {
                  color: #666;
              }
              p {
                font-size:8px;
              }
          </style>



          <div class="card-body" style="width: 600px; font:"Segoe UI", Tahoma, Geneva, Verdana, sans-serif; overflow: auto;cursor: default; margin-top:5px; padding-top:0px; padding-left:5px;padding-right:5px;" >
              <div class="row">
                  <span class="text-center" style="width: 100%;">
                <img style="margin: 0 auto;" src="../../../assets/static/certificate/badge.png" height="60px" width="60px" alt="">
               </span>

                  <div class="certificate">
                      <h3 class="header" style="font-weight:bold;">Certificate of Completion</h3>
                      <div class="text-center">
                          <p style="font-size:10px;">This is to certify that</p>
                          <h2 style="text-decoration: underline;text-underline-offset: 3px;">&nbsp;&nbsp; `+this.firstName+' '+this.lastName  +`&nbsp;&nbsp;</h2>
                          <p style="font-size:8px;">has completed the self-help program</p>
                          <p class="course"><b>Stress Management</b></p>
                          <p style="font-size:8px;">for self-help and psychoeducation purposes only.</p>
                      </div>
                  </div>
            

                  <div class="col-4 text-center">
                      <p></p>
                      <p class="h3 date" style="font-size:10px;">Date</p>
                      <address style="font-size:10px;"> `+ this.date +`</address>
                  </div>

                  <div class="col-4 text-center">
                      <p></p>
                      <img src="../../../assets/static/logo1.png" height="30" alt="">

                  </div>

                  <div class="col-4 text-center text-end">
                      <img src="../../../assets/static/certificate/esign_drfarooq.png" height="30" alt="">
                      <p class="h3 signature" style="font-size:10px; text-decoration:overline">&nbsp;&nbsp; Signature &nbsp;&nbsp;</p>
                      <address style="font-size: 8px;">
                        Prof. Dr. Farooq Naeem <br>
                        FRCPsych, MSc Research Methods, PhD<br>
                        Department of Psychiatry,<br>
                        University of Toronto
                      </address>
                  </div>

              </div>
          </div>
      </div>`;
      htmlToImage.toPng(this.pdfTable.nativeElement)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        pdf.addImage(
            img.src,
            'PNG',
            10,
            10,
            610,
            420
          );
          pdf.addPage();
          pdf.save("certificate.pdf")
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
     }
 
}

