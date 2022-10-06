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
      {
        name: 'Pepperoini'
        , price: 1.5
      }
      , {
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
