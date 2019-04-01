import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserItemComponent} from './user-item.component';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersService} from '../objects/users.service';
import {User} from '../objects/user';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
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
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.user = new User();
    component.index = 1;
    expect(component).toBeTruthy();
  });
});
