import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ImageBindingComponent } from './image-binding/image-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EmployeeComponent } from './employee/employee.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { SearchPipe } from './built-in-pipe/pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ImageBindingComponent,
    EventBindingComponent,
    EmployeeComponent,
    BuiltInPipeComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
