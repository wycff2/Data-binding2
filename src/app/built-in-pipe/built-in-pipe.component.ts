import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-built-in-pipe',
  templateUrl: './built-in-pipe.component.html',
  styleUrls: ['./built-in-pipe.component.scss']
})
export class BuiltInPipeComponent implements OnInit {
  
  public empList:Array<any>;
  constructor() { }

  ngOnInit(): void {
  
  this.empList=[
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
}