import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
// import pdfMake from 'pdfMake/build/pdfMake.js';
// import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  title = 'htmltopdf';
  
  @ViewChild('pdfTable',{static:false}) pdfTable!: ElementRef;
  
  // public downloadAsPDF() {
  //   const doc = new jsPDF();
   
  //   const pdfTable = this.pdfTable.nativeElement; 
   
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
     
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open(); 
     makePdf(){
      let pdf= new jsPDF('p','pt','a4')
      pdf.html(this.pdfTable.nativeElement,{
        callback:(pdf)=>{
          pdf.save("sample.pdf")
        }
      })
     }
}

