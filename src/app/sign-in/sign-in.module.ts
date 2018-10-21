import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInRoutingModule} from './sign-in-routing.module';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
