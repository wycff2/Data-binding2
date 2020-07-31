import { Component, OnInit, Optional } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
public searchtext:string;
public employeeList: Array<any>;
public name: string;
public dept: string;
public sal: string;


  constructor() { }

  ngOnInit(): void {
    this.employeeList=[
      {name: "Peter Mjuguna", dept:"Finance", sal: 65000,JoiningDate:new Date("2020/05/18")},
      {name: "Scott Mwaniki", dept:"Administration", sal: 50000,JoiningDate:new Date("2020/05/18")},
      {name: "Ashok Abdulla", dept:"Sales", sal: 30000,JoiningDate:new Date("2020/05/18")},
      {name: "Penny Willies", dept:"Tech", sal: 60000,JoiningDate:new Date( "2020/05/18")},
      {name: "David Ogolla", dept:"Finance", sal: 65000,JoiningDate:new Date("2020/05/18")},
      {name: "Evans Mong'are", dept:"Marketing", sal: 50000,JoiningDate:new Date("2020/05/18")},
      {name: "Mercy Kimutai", dept:"Engineering", sal: 30000,JoiningDate:new Date("2020/05/18")},
      {name: "Penninah Mwakio", dept:"Administration", sal: 60000,JoiningDate:new Date( "2020/05/18")},
      {name: "Steve Mwita", dept:"Agriculture", sal: 65000,JoiningDate:new Date("2020/05/18")},
      {name: "Joyce Kiprotich", dept:"Mining", sal: 50000,JoiningDate:new Date("2020/05/18")},
      {name: "Adud Abdulla", dept:"Sales", sal: 30000,JoiningDate:new Date("2020/05/18")},
      {name: "Wilkins Walubengo", dept:"Tech", sal: 60000,JoiningDate:new Date( "2020/05/18")},
      {name: "Kate Saitoti", dept:"Space", sal: 65000,JoiningDate:new Date("2020/05/18")},
      {name: "Oscar James", dept:"Health", sal: 50000,JoiningDate:new Date("2020/05/18")},
      {name: "Moha Ibrahim", dept:"Finance", sal: 30000,JoiningDate:new Date("2020/05/18")},
      {name: "Wycliffe ", dept:"Computing", sal: 160000,JoiningDate:new Date( "2020/05/18")} 
  
    ];
  }
public addEmployee(): void {
console.log('Name', this.name);
console.log('Dept', this.dept);
console.log('Salary', this.sal);
this.employeeList.push({name: this.name,dept: this.dept, sal:this.sal});
this.name="",
this.dept="",
this.sal="";
}


public onDelete(index): void{
  console.log('index',index)
  this.employeeList.splice(index,1);
}
public onedit(list,index) {
  console.log('list',list);
  console.log('index',index);
  if(list) {
   this.name=list.name;
   this.dept=list.dept;
   this.sal=list.sal;
  }
  }
   public updateEmp(): void{
     let index =this.employeeList.findIndex(record => record.name==this.name);
     console.log(Message, 'index',Optional[0], index);
     this.employeeList[index]['name']=this.name;
     this.employeeList[index]['dept']=this.dept;
     this.employeeList[index]['sal']=this.sal;
     
   }
}



