import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 //template:`<h1> Heyy there!!!</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey there!!!';
  name =" Jason"
  p=false;
  p1=!this.p
  mode='k'

public users =[{
  'name' : "Abc",
  'age':26,
  'place':"gdjsgf"
},
{
  'name' : "vbv",
  'age':26,
  'place':"gnnvnv"
},
{
  'name' : "hdgsdsd",
  'age':26,
  'place':"mjjlj"
},{
  'name' : "ngjkulu",
  'age':26,
  'place':"hljllk;k"
}]


}
