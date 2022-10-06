import { Injectable } from '@angular/core';

interface PizzaToppingDisplay {
    name: string;
    price: number;
    checked: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  loadPizzaToppings = (): PizzaToppingDisplay[] => {
    const pizzaToppingsFromWeb = [
        { name: 'Pepperoni', price: 1.00},
        { name: 'Sausage', price: 1.50},
        { name: 'Onions', price: 0.50},
    ];
    return pizzaToppingsFromWeb.map (x => ({
        ...x,
        checked: false
    }));
  }

}
