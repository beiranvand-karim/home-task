import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SignInComponent} from './sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

export class RouterStub {
  navigate(params) {

  }
}

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ SignInComponent ],
      providers: [
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
