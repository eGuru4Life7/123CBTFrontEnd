import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalCacheService } from 'src/app/services/local-cache.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  currentUser: any;
  user: any;
  isShowConfirmationModal: any = false;
  email:any;
  password: any= {};
  isShowConfirmationPasswordModal: boolean = false;
  constructor(private localService: LocalCacheService, private userService: UserServiceService,
     private messageService: MessageService,private route:Router) { }

  ngOnInit(): void {
    this.currentUser =this.localService.getCurrentUser();
    this.user = this.currentUser;
    this.email = this.currentUser.email;
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe((res: any) => {
      if (res.success) {
       this.localService.setLoginData(res.data);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Updated' });
        setTimeout(() => {
          this.route.navigate(['../profile']);  
        }, 1000);
      
      }else{
        this.messageService.add({ severity: 'warn', summary: 'User', detail: res.message });
      }
    });
  }

  updateEmail() {
    let data = {email:this.email,previousEmail:this.currentUser.email ,id:this.currentUser.id};
    this.userService.updateEmail(data).subscribe((res: any) => {
      if (res.success) {
        this.showConfirmationModal();
       this.localService.setLoginData(res.data);
        
      }else{
        this.messageService.add({ severity: 'warn', summary: 'Email', detail: res.message });
      }
    });
  }

  updatePassword() {
    if(!this.password.currentPassword){
      this.messageService.add({ severity: 'warn', summary: 'password', detail: "current password should not be empty." });
      return;
    }
    if(!this.password.newPassword || !this.password.confirmPassword){
      this.messageService.add({ severity: 'warn', summary: 'password', detail: "new or confirm password should not be empty." });
      return;
    }
    if(this.password.newPassword != this.password.confirmPassword){
      this.messageService.add({ severity: 'warn', summary: 'password', detail: "password not match." });
      return;
    }

    this.password.id = this.currentUser.id;
    this.userService.updatePassword(this.password).subscribe((res: any) => {
      if (res.success) {
        this.isShowConfirmationPasswordModal = false;
       //this.localService.setLoginData(res.data);
       this.messageService.add({ severity: 'success', summary: 'Success', detail: 'password succesfully updated' });
      }else{
        this.messageService.add({ severity: 'warn', summary: 'Email', detail: res.message });
      }
    });
  }



  showConfirmationModal() {
    this.isShowConfirmationModal = true;
  }
  closeConfirmationModal() {
    this.isShowConfirmationModal = false;
    this.route.navigate(['../profile']);
  }
  showPassConfirmationModal() {
    this.isShowConfirmationPasswordModal = true;
  }
  closePassConfirmationModal() {
    this.isShowConfirmationPasswordModal = false;
    this.route.navigate(['../profile']);
  }
}
