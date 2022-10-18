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
        name: 'Pepperoini' , price: 1.5
      }
      , {
        name: 'Olives' , price: 3
      }
    ];

<<<<<<< Updated upstream
    return pizzaToppingsFromWeb.map(x => ({ ...x, checked: false}));
  }

  loadSides = () => {
    return [ "Garlic Bread", "Salad", "Soup", "Cinnamon Sticks"];
      };
=======
    return pizzaToppingsFromWeb.map(x => ({...x , checked: false
    }));
  }

  loadSides = () => {
    return [
      "Garlic Bread" , "Salad" , "Soup" , "Cheese Sticks"
    ];
  };
>>>>>>> Stashed changes
}
