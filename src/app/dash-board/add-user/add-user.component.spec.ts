import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddUserComponent} from './add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersService} from '../objects/users.service';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [AddUserComponent],
      providers: [
        UsersService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
