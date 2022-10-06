import { Injectable } from '@angular/core';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

interface PizzaToppingsDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings = (): PizzaToppingsDisplay[] => { //make a webservice call eventually instaed of the array
    const pizzaToppingsFromWeb = [
      {
        name: 'Pepperoini'
      , price: 1.5
      }
      ,{
        name: 'Olives'
      , price: 3
      }
    ];
    return pizzaToppingsFromWeb.map(x => ({
      ...x
      , checked: false
    }));
  }
}
