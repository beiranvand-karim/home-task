import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: 'src/app/sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'dashBoard', loadChildren: 'src/app/dash-board/dash-board.module#DashBoardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
