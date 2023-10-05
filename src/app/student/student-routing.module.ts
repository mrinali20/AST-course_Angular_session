import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLandingComponent } from './student-landing/student-landing.component';

const routes: Routes = [
  {path : 'studentLanding', component: StudentLandingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
