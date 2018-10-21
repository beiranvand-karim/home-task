import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {User} from '../objects/user';
import {UsersService} from '../objects/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  addUserForm: FormGroup;
  name = new FormControl();
  family = new FormControl();
  nickName = new FormControl();
  phoneNumber = new FormControl();
  email = new FormControl();
  community = new FormControl();
  birthDay = new FormControl();
  gender = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.addUserForm = this.formBuilder.group({
      name: this.name,
      family: this.family,
      nickName: this.nickName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      community: this.community,
      birthDay: this.birthDay,
      gender: this.gender
    });
  }
  addUserFormSubmit() {
    const user = new User();
    user.name = this.addUserForm.controls.name.value;
    user.family = this.addUserForm.controls.family.value;
    user.nickName = this.addUserForm.controls.nickName.value;
    user.phoneNumber = this.addUserForm.controls.phoneNumber.value;
    user.email = this.addUserForm.controls.email.value;
    user.commmunity = this.addUserForm.controls.community.value;
    user.birthDay = this.addUserForm.controls.birthDay.value;
    user.gender = this.addUserForm.controls.gender.value;
    this.usersService.addUser(user);
  }
}
