import { Injectable } from '@angular/core';

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

  loadPizzaToppings = (): PizzaToppingsDisplay[] => {
    const pizzaToppingsFromWeb = [
      {
        name: 'Pepperoni',
        price: 1.5
      },
      {
        name: 'Olives',
        price: 3
      }
    ];
    return pizzaToppingsFromWeb.map(x => ({
      ...x,
      checked: false
    }));
  }
}
