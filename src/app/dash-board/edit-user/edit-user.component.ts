import {Component, Input, OnInit} from '@angular/core';
import {User} from '../objects/user';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../objects/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input() user: User;
  @Input() key: number;

  editUserForm: FormGroup;
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
    this.editUserForm = this.formBuilder.group({
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
  ngOnInit() {
    this.editUserForm.patchValue(this.user);
  }
  editUserFormSubmit() {
    const user = new User();
    user.name = this.editUserForm.controls.name.value;
    user.family = this.editUserForm.controls.family.value;
    user.nickName = this.editUserForm.controls.nickName.value;
    user.phoneNumber = this.editUserForm.controls.phoneNumber.value;
    user.email = this.editUserForm.controls.email.value;
    user.community = this.editUserForm.controls.community.value;
    user.birthDay = this.editUserForm.controls.birthDay.value;
    user.gender = this.editUserForm.controls.gender.value;
    this.usersService.updateUser(this.key, user);
  }
}
