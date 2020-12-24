import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersViewComponent } from './views/users-view/users-view.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersViewComponent
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
