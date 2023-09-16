import { Component } from '@angular/core'; //impot section

@Component({  //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

hobbie(event : any){
  console.log(event.target.value);
  
}



gen(data:any){
  console.log('data',data.target.value);
  // target.avlue is a key
  
}



  constructor(){}    //to inject dependancies
  
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



}

  
