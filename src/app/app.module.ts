import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';
import { EjSidesComponent } from './ej-sides/ej-sides.component';
import { HkChooseYourDeliveryComponent } from './hk-choose-your-delivery/hk-choose-your-delivery.component';
import { PizzaCrustTypeComponent } from './ma-pizza-crust-type/pizza-crust-type.component';
import { SPAdditionComponent } from './sp-addition/sp-addition.component';
import { SurpriseSideComponent } from './surprise-side/surprise-side.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    SurpriseSideComponent,
    SPAdditionComponent,
    PizzaCrustTypeComponent,
    HkChooseYourDeliveryComponent,
    EjSidesComponent,
    TjsAdditionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
