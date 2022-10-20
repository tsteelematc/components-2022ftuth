import { Injectable } from '@angular/core';

export interface PizzaToppingDisplay {
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
        , price: 2.50
      }
      , {
        name: 'Italian Sausage'
        , price: 2.00
      }
      , {
        name: 'Ham'
        , price: 3.00
      }
      , {
        name: 'Green Peppers'
        , price: 1.00
      }
      , {
        name: 'Olives'
        , price: 1.00
      }
    ];

    return pizzaToppingsFromWeb.map(x => ({
      ...x
      , checked: false
    }));
  }

  
}
