import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CreateStudentComponent } from './create-student/create-student.component';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
    {path:'create-student', component:CreateStudentComponent},
    {path:'all-students', component:AllStudentsComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
