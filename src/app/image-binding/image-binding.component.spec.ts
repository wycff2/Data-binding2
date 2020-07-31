import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBindingComponent } from './image-binding.component';

describe('ImageBindingComponent', () => {
  let component: ImageBindingComponent;
  let fixture: ComponentFixture<ImageBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
