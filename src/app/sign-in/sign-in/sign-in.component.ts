import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  userName = new FormControl();
  passWord = new FormControl();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signInForm = this.formBuilder.group({
      userName: this.userName,
      passWord: this.passWord
    });
  }

  ngOnInit() {
  }
  async signInFormSubmit() {
    const userName = this.signInForm.controls.userName.value;
    const passWord = this.signInForm.controls.passWord.value;
    if (userName === 'admin' && passWord === 'admin') {
      await this.router.navigate(['/dashBoard']);
    }
  }
}
