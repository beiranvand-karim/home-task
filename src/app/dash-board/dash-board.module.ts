import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashBoardRoutingModule} from './dash-board-routing.module';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {UsersService} from './objects/users.service';
import {AddUserComponent} from './add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditUserComponent} from './edit-user/edit-user.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashBoardComponent,
    AddUserComponent,
    EditUserComponent,
    UserItemComponent
  ],
  providers: [
    UsersService
  ]
})
export class DashBoardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DashBoardModule,
      providers: [UsersService]
    };
  }
}
