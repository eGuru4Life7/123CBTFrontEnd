import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  userForm!: FormGroup;
  dir:any;
  constructor(private userService: UserServiceService, private route: Router, private localService: LocalCacheService, private messageService: MessageService, private translate: TranslateService) {
    this.createForm();
  }

  ngOnInit(): void {
    var lang :any = localStorage.getItem("lang");
    this.dir= localStorage.getItem("dir");
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  createForm() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      diagnose: new FormControl(''),
      martial_status: new FormControl(''),
      education: new FormControl(0),
      religion: new FormControl(''),
      employment: new FormControl(''),
      first_mod: new FormControl(''),
      second_mod: new FormControl(''),
      third_mod: new FormControl(''),
      fourth_mod: new FormControl(''),
      fifth_mod: new FormControl(''),
      sixth_mod: new FormControl(''),
      seventh_mod: new FormControl(''),
      month: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required)
    });
  }


  saveUser() {
    this.userForm.get('id')?.setValue
    var currentDate = new Date(Date.now());
    this.userForm.get('first_mod')?.setValue(currentDate);
    this.userForm.get('second_mod')?.setValue(this.addDays(7, currentDate));
    this.userForm.get('third_mod')?.setValue(this.addDays(14, currentDate));
    this.userForm.get('fourth_mod')?.setValue(this.addDays(21, currentDate));
    this.userForm.get('fifth_mod')?.setValue(this.addDays(28, currentDate));
    this.userForm.get('sixth_mod')?.setValue(this.addDays(35, currentDate));
    this.userForm.get('seventh_mod')?.setValue(this.addDays(42, currentDate));

    if (this.userForm.valid) {
      this.userService.signUp(this.userForm.value).toPromise().then((resp: any) => {
        if (resp.success) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Succesfully account created' });
          setTimeout(() => {
            this.route.navigate(['./auth']);
          }, 1000);


        } else {
          this.messageService.add({ severity: 'error', summary: 'warning', detail: resp.message });

          // this.clear();
        }
      });
    }
  }
  addDays(days: any, date: any) {
    date.setDate(date.getDate() + days);
    return date;
  }
}
