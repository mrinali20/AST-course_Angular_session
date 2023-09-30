import { Component } from '@angular/core'; //impot section
import { RouterModule,Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //class to write code here
  title = 'My first Application';
//let/var/const city = 'pune';
//any Data type: city:any 
//property binding :

 city? : string ; //declaration of property

 city2 : string = 'pune'; //declration + def of proprty

 city3 = 'mumbai.....';
 name='pooja';
 no1 = 10;
 no2= 200;
 data1 ="aarav";
 cars :any[] =['audi',"swift",'bmw'];
 car =this.cars[1];
 student ={name:'pooja',age :20};
genderM ='male';
genderF='female';

painting ='Painting';
dancing= 'Dancing';
singing = 'Singing';
userHobbies :string[]=[];
favCountry= 'india';

num1 : number =50;
num2 : number =20;
addNumber1 : any;
addNumber2 : any; 
addResult? :number;
studentName :string = 'aarav';

constructor(private router: Router )
 { }






hobbie(event : any){
  console.log(event.target.value);
  this.userHobbies.push(event.target.value);
  console.log(this.userHobbies);
  console.log(this.favCountry);
  
  this.favCountry='london';
  console.log(this.favCountry);
  
  
}
submit(event:any){
  console.log(event.target.value);
  
}
// addition(){
//   let num1 =20;
//   let num2=50;
//   var res =num1+num2;
//   console.log(res);
  
  
// }





gen(data:any){
  console.log('data',data.target.value);
  // target.value is a key
  
}



  // constructor(){}    //to inject dependancies
  
//life cycle hooks 

//functions
// data binding : it is a technique to communicate b/w a component and the dom
// 1.one way data binding 2.two way data binding
//1.one way data binding :1.string interpolation 2.property binding 3.event binding
// string interpolation :one way binding technique : .ts to dom( Document Object Model)/html/template{{}}

//string interpolation{{}}: one way data binding technique: .ts to dom/html/template

learningInterpolation(){ 
  // void value return if donot return value.
  return this.city2;
  
  
  
}
// property blinding : [] define

// what is this keyword use: in js this keyword is getting inside object to point in object
// ts : this keyword is used to pint global prorties it is also used in function  to fetch value


// additionNumber(){
//   this.addResult = this.addNumber1 + this.addNumber2 ;
// }



// addCircle() {
//   const newCircle = {
//     id: this.nextCircleId,
//     isSelected: false,
//     //backgroundColor: this.nextCircleId % 2 === 0 ? 'blue' : 'red'
//     backgroundColor:'blue'
//   };
//   this.circles.push(newCircle);
//   this.nextCircleId++;
// }


landing(){
  this.router.navigateByUrl('landing')
}
    


}

  
