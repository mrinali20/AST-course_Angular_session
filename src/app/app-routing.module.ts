import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
// import { AddCircleComponent } from './add-circle/add-circle.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path : '' , component: LandingComponent},
  { path: 'home', component : HomeComponent},
  // { path : 'addCircle', component : AddCircleComponent}
{path : 'landing' , component: LandingComponent},
{path : 'test' , component: TestComponent},
{path : "**", component : PagenotfoundComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
