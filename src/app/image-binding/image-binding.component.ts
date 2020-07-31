import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-binding',
  templateUrl: './image-binding.component.html',
  styleUrls: ['./image-binding.component.scss']
})
export class ImageBindingComponent implements OnInit {
  public imgSrc: string="image-01"

  constructor() { }

  ngOnInit(): void {
  }

}
