import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForm, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
