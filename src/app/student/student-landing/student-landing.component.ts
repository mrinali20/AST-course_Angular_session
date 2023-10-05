import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-landing',
  templateUrl: './student-landing.component.html',
  styleUrls: ['./student-landing.component.css']
})
export class StudentLandingComponent {
  constructor(private router : Router){

 
 
  }



  back() {
    this.router.navigateByUrl('landing');
  }
}
