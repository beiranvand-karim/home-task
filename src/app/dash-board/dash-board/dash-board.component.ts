import {Component, OnInit} from '@angular/core';
import {UsersService} from '../objects/users.service';
import {Observable} from 'rxjs';
import {User} from '../objects/user';
import {skip} from 'rxjs/operators';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  users$: Observable<Array<User>>;
  constructor(
    private usersService: UsersService
  ) { }
  ngOnInit() {
    this.users$ = this.usersService.users$.pipe(skip(1));
  }
}
