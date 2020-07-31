import { Component } from '@angular/core';

interface IEmployee{
  id: number;
  name: string;
  dept:string;
  desg: string;
  sal:number;
  joiningDate?: Date;
 }

@Component( {
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']

})

export class AppComponent {
  public ShowEmpList: boolean =true;
  public rc:string;
  //public title: string =" Two-Way Data Binding ";
  onComponentChange(event) { 
    this.rc =event.target.value;

  }

 }







