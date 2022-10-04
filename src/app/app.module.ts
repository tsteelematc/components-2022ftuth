import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingComponent } from './pizza-topping/pizza-topping.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingComponent,
    PizzaToppingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
