import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../objects/users.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {User} from '../objects/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  animations: [
    trigger('slide', [
      state('in', style({
        display: 'block'
      })),
      state('out',   style({
        display: 'none'
      })),
      transition('in <=> out', animate('1ms linear'))
    ])
  ]
})
export class UserItemComponent implements OnInit {
  private visible = false;
  @Input() user: User;
  @Input() index: number;
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }
  deleteUser(index: number) {
    this.usersService.deleteUser(index);
  }
  get slideState() {
    return this.visible ? 'in' : 'out';
  }
  toggleUpdate() {
    this.visible = !this.visible;
  }
}
