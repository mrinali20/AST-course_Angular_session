import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestComponent } from './test/test.component'




// import { AddCircleComponent } from './add-circle/add-circle.component';
console.log("appmodule");

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    PagenotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
