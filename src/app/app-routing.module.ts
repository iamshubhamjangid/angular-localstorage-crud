import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'listusers', pathMatch: 'full' },
  {path: 'createuser' , component: UserCreateComponent},
    {path: 'listusers' , component: UserListComponent},
    {path: 'edituser' , component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// const routes: Routes = []; // sets up routes constant where you define your routes

export class AppRoutingModule { }
