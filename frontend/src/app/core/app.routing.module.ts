import {HomeComponent} from '../home/home.component'
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
const routes: Routes = [
//   { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }