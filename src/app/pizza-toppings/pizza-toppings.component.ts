import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingsDisplay } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //Magic DI (Dependancy Injected), with TS ctor scoped paramenters....
  constructor(
    public pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {
    const pt = this.pizzaSvc.loadPizzaToppings();
    console.log(pt);
    this.availablePizzaToppings = pt;
  }

availablePizzaToppings: PizzaToppingsDisplay[] = [];

calculateTotal = () => {
  this.total = this.availablePizzaToppings
  .filter(x => x.checked)
  .reduce (
    (acc, x) => acc + x.price,
    0
  );
};

total = 0;
}
