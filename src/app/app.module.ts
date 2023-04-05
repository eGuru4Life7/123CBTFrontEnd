import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_helper/error.interceptor';
import { JwtInterceptor } from './_helper/jwt.interceptor';
import { LocalCacheService } from './services/local-cache.service';
import { CanActivateAuthLayoutGuard } from './services/guards/can-activate-auth-layout.guard';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { SignUpComponent } from './layout/sign-up/sign-up.component';
import { DisclaimerComponent } from './layout/disclaimer/disclaimer.component';
import { StartComponent } from './layout/start/start.component';
import { EvidenceComponent } from './layout/evidence/evidence.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    DisclaimerComponent,
    StartComponent,
    EvidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
   LocalCacheService,
   CanActivateAuthLayoutGuard,
   MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
