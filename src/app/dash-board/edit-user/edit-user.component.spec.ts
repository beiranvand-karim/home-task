import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditUserComponent} from './edit-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersService} from '../objects/users.service';
import {User} from '../objects/user';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [EditUserComponent],
      providers: [
        UsersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.user = new User();
    component.key = 0;
    expect(component).toBeTruthy();
  });
});
