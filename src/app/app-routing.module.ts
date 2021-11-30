import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Components/login/login.component';
import { NewproductComponent } from 'src/Pages/newproduct/newproduct.component';
import { NewuserComponent } from 'src/Pages/newuser/newuser.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'userprofile', component: HomeComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'newproduct', component: NewproductComponent },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
