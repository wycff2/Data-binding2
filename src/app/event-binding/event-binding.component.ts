import { Component, OnInit, Optional } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public username: string='';
  public password:string='';
  
  public welcomeMsg: string;

  constructor() { }

  ngOnInit(): void {
  }
/*
*name
*/
public login(): void {
  console.log ( Message, 'username', Optional[0], this.username);
  console.log ( Message, 'password', Optional [0], this.password);

  if (this.username==='admin' && this.password==='admin123'){
    this.welcomeMsg='Welcome Admin';
  }else{
    this.welcomeMsg ='invalid userid or password';
  }
  this.username='';
  this.password='';
  
}
}
