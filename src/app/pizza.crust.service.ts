import { Injectable } from '@angular/core';

export interface PizzaCrustType {
  name: string;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaCrustService {

  constructor() { }

  loadPizzaCrusts = (): PizzaCrustType[] => {
    const pizzaCrustsFromWeb = [
      {
        name: 'Hand Tossed'
        , checked: false
      }
      , {
        name: 'Thin Crust'
        , checked: false
      }
      , {
        name: 'Deep Dish'
        , checked: false
      }
      , {
        name: 'Cheese Stuffed'
        , checked: false
      }
    ];

    return pizzaCrustsFromWeb.map(x => ({
      ...x
      , checked: false
    }));
  }
}
