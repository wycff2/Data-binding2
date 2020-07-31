import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
public productName:string ="Juicy Fruits";
public brand: string="Tamu Fruits";
public price: number=1000;
public qty:number=50;
public isshowProductDetails: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
