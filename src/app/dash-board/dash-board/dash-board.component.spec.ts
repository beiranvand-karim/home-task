import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashBoardComponent} from './dash-board.component';
import {AddUserComponent} from '../add-user/add-user.component';
import {UserItemComponent} from '../user-item/user-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {UsersService} from '../objects/users.service';

describe('DashBoardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        DashBoardComponent,
        AddUserComponent,
        UserItemComponent,
        EditUserComponent
      ],
      providers: [
        UsersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
