import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-write-activities',
  templateUrl: './write-activities.component.html',
  styleUrls: ['./write-activities.component.scss'],
  
})
export class WriteActivitiesComponent implements OnInit {
  


  
  activitiesForm!: FormGroup;
  isSmallScreen: boolean=false; 
  
  constructor(private fb: FormBuilder) { 
    this.activitiesForm = this.fb.group({
      mondayText: '',
      tuesdayText: '',
      wednesdayText: '',
      thursdayText: '',
      fridayText: '',
      saturdayText: '',
      sundayText: ''
    });
  }



  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as per your needs
  }
  
  limitLines(event: Event, maxLines: number) {
    const textarea = event.target as HTMLTextAreaElement;
    const lines = textarea.value.replace(/\r/g, '').split('\n');
    if (lines.length > maxLines) {
      textarea.value = lines.slice(0, maxLines).join('\n');
    }
  }

}
