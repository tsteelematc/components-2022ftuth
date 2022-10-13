import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // Magic DI, with TS ctor scoped parameters...
  constructor(
    public pizzaSvc: PizzaService
  ) { }

  ngOnInit(): void {
    const pt = this.pizzaSvc.loadPizzaToppings();
    console.log(pt);

    this.availablePizzaToppings = pt;
  }

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // TS getter or read-only property

  get total() {
    return this.availablePizzaToppings
      .filter(x => x.checked)
      .reduce ((acc,x) => acc + x.price, 0);
  };
  checkAll = () => this.availablePizzaToppings = 
    this.availablePizzaToppings.map(x => ({...x, checked: true}));
    
    uncheckAll = () => this.availablePizzaToppings = 
    this.availablePizzaToppings.map(x => ({...x, checked: false}));
};

